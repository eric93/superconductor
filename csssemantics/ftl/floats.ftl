type FloatType = Left | None;
/*****
standard interfaces and traits
******/
interface Node { 
  var canvas : int;
  var render : int;
  input height : ?int;
  var intrinsHeight : int;
  var computedHeight : int;
  var relRightX : int;
  var relX : int;
  var absX : int;
  var relBotY : int;
  var relY : int;
  var absY : int;  

  input minWidth : ?int;
  input maxWidth : ?int;
  input percentWidth : ?int; //priority over min/max computedWidth; function of availableWidth (or parent computedWidth?)
  input width : ?int;
  var intrinsPrefWidth : int;
  var intrinsMinWidth : int;
  var availableWidth : int;
  var computedWidth : int;
  
  var lineH : int;
  input float : FloatType = None;
  var childI : int;
}

trait shrinkToFitHeightWidth {
  actions {
    computedWidth := 
      !isEmptyInt(width) ?
        valueInt(width) :
      (!isEmptyInt(percentWidth) ?
        (0.01 * valueInt(percentWidth) * availableWidth) :                
      min(
        max(
          max(intrinsMinWidth, !isEmptyInt(minWidth) ? valueInt(minWidth) : 0), 
          availableWidth), 
        min(intrinsPrefWidth, !isEmptyInt(maxWidth) ? valueInt(maxWidth) : intrinsPrefWidth)));
    computedHeight := isEmptyInt(height) ? intrinsHeight : valueInt(height);
  }
}

trait relToAbsChilds {
  actions {
    loop childs {
      childs.absY := absY + childs$i.relY;
      childs.absX := absX + childs$i.relX;           
    }
  }
}

trait strokeBox {
  actions {
    render := 
      canvas
      + paintLine (absX, absY, absX+computedWidth, absY, borderc) //top
      + paintLine (absX+computedWidth, absY, absX+computedWidth, absY+computedHeight, borderc) //right
      + paintLine (absX+computedWidth, absY+computedHeight, absX, absY+computedHeight, borderc) //bot
      + paintLine (absX, absY+computedHeight, absX, absY, borderc); //left
  }
}

trait fakeChildsLineH {
  actions {
    loop childs {
      childs.lineH := fold 0 .. 0;
    }
  }
}
      
trait countChilds {
  attributes {
    var numChilds : int;
  }
  actions {
    loop childs {
      numChilds := fold 0 .. $-.numChilds + 1;
    }
  }
}

trait countChilds2 {
  actions {
    loop childs {
      childs.childI := fold 0 .. childs$-.childI + 1;
    }
  }
}
      


/****************************
some typical fully-handled box nodes
***************************/
interface Root { 
  input w : int = 100;
  input h : int = 100;
}

class Top : Root {
  children { child : Node }
  actions {
    child.relRightX := 0;
    child.relX := 0;
    child.absX := 0;
    child.relBotY := 0;
    child.relY := 0;
    child.absY := 0;
    child.canvas := paintStart(child.computedWidth, child.computedHeight);    
    child.availableWidth := w; //FIXME
  }
}



class Leaf(shrinkToFitHeightWidth, strokeBox) : Node {
  attributes {
    input borderc : color = #000;
  }
  actions {
    intrinsPrefWidth := 10;
    intrinsMinWidth := 10;
    intrinsHeight := 10;
  }
}

trait Wrapping {
  children { childs : [ Node ]; }
  actions {  
    loop childs {
      intrinsPrefWidth := 
        fold 
          ($$.numChilds == 0 ? 10 : 5) 
          .. 
          self$-.intrinsPrefWidth + childs$i.intrinsPrefWidth + 5;
      intrinsMinWidth := 
        fold 
          ($$.numChilds == 0 ? 10 : 5) 
          .. 
          max(self$-.intrinsMinWidth, 5 + childs$i.intrinsMinWidth + 5);

      childs.relRightX := 
        fold 
          0 .. 
          (childs$-.relRightX + 5 + childs$i.computedWidth > computedWidth) ?
            (5 + childs$i.computedWidth) : (childs$-.relRightX + 5 + childs$i.computedWidth);
      childs.relX := childs$i.relRightX - childs$i.computedWidth;
            
      childs.lineH := fold 0 
          .. childs$i.relX == 5 ? 
            childs$i.computedHeight 
            : (childs$i.computedHeight > childs$-.lineH ? childs$i.computedHeight : childs$-.lineH);         
      childs.relY := fold 0
          .. childs$-.relY + (childs$i.relX == 5 ? childs$-.lineH + 5 : 0);
      childs.relBotY := fold 0 .. childs$i.relY + childs$i.computedHeight;
      childs.canvas := fold render .. childs$-.canvas;      
      intrinsHeight := fold 10 .. childs$i.relY + childs$i.lineH + 5;      
      childs.availableWidth := computedWidth - 10;
    }
  }
}

/*
class WrapBox(Wrapping, shrinkToFitHeightWidth, relToAbsChilds, strokeBox, countChilds, countChilds2) : Node {
  attributes { 
    input borderc : color = #0000FF;
  }
}
*/

class HBox(shrinkToFitHeightWidth, relToAbsChilds, strokeBox, fakeChildsLineH, countChilds, countChilds2) : Node {
  children { childs : [ Node ]; }  
  attributes { 
    input borderc : color = #00FF00;
  }
  actions {
    loop childs {
      intrinsPrefWidth := 
        fold 
          ($$.numChilds == 0 ? 10 : 5) 
          .. 
          self$-.intrinsPrefWidth + childs$i.intrinsPrefWidth + 5;
      intrinsMinWidth := 
        fold 
          ($$.numChilds == 0 ? 10 : 5) 
          .. 
          self$-.intrinsMinWidth + childs$i.intrinsMinWidth + 5;
      intrinsHeight := 
        fold 
          10 .. 
          $-.intrinsHeight < (10 + childs$i.computedHeight) ? 
            (10 + childs$i.computedHeight) : $-.intrinsHeight;      
      childs.relBotY := fold 5 .. 5 + childs$i.computedHeight;
      childs.relY := fold 5 .. 5;
      childs.relRightX := fold 0 .. childs$-.relRightX + 5 + childs$i.computedWidth;
      childs.relX := fold 0 .. childs$i.relRightX - childs$i.computedWidth;
      childs.canvas := fold render .. childs$-.canvas;        
      childs.availableWidth := computedWidth - 10;
    }
  }
}


class VBox(shrinkToFitHeightWidth, relToAbsChilds, strokeBox, fakeChildsLineH, countChilds, countChilds2) : Node {
  children { childs : [ Node ]; }  
  attributes { 
    input borderc : color = #00FF00;
  }
  actions {
    loop childs {
      intrinsHeight := fold 5 + ($$.numChilds == 0 ? 5 : 0) .. $-.intrinsHeight + childs$i.computedHeight + 5;
      intrinsMinWidth := fold 10 .. max($-.intrinsMinWidth, 10 + childs$i.intrinsMinWidth);
      intrinsPrefWidth := fold 10 .. max($-.intrinsPrefWidth, 10 + childs$i.intrinsPrefWidth);
      childs.relX := fold 5 .. 5;     
      childs.relRightX := fold 5 .. 5 + childs$i.computedWidth;
      childs.relBotY := fold 0 .. childs$-.relBotY + 5 + childs$i.computedHeight;
      childs.relY := fold 0 .. childs$-.relBotY + 5;
      childs.canvas := fold render .. childs$-.canvas;        
      childs.availableWidth := computedWidth - 10; 
    }
  }
}



/*****
floats
*****/


class BlockFlow(shrinkToFitHeightWidth, relToAbsChilds, strokeBox, fakeChildsLineH, countChilds, countChilds2) : Node {
  children { childs : [ Node ]; }  
  attributes { 
    input borderc : color = #00FF00;
  }
  actions {
    loop childs {
      intrinsHeight := 0;
      intrinsMinWidth := fold 10 .. max($-.intrinsMinWidth, 10 + childs$i.intrinsMinWidth);
      intrinsPrefWidth := fold 10 .. $-.intrinsPrefWidth + 10 + childs$i.intrinsPrefWidth;
      childs.relX := childs$i.relRightX - childs$i.computedWidth;
      
      childs.relRightX := 
        fold 
          0
          .. 
          (childs$i.float == None) ? (5 + childs$i.computedWidth)
          : ((childs$i.float == Left && childs$i.childI > 1 && childs$-.float == Left) ?
             ((childs$-.relRightX + 5 + childs$i.computedWidth > computedWidth) ? 
                 (5 + childs$i.computedWidth) //FIXME: may be placed next to a previous float
               : (childs$-.relRightX + 5 + childs$i.computedWidth)) 
           : /* childs$i.float == Left */ (5 + childs$i.computedWidth));
      childs.relBotY := 
        fold
          0
          ..
          (childs$i.relRightX == 5 + childs$i.computedWidth) ? 
            (childs$-.relBotY + 5 + childs$i.computedHeight)
            : 0; //funny y positioning as float flow can span multiple lines..
      childs.relY := 0;
      childs.canvas := fold render .. childs$-.canvas;        
      childs.availableWidth := computedWidth - 10; 
    }
  }
}
