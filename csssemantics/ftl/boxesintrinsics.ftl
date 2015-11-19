interface Root { 
  input w : int = 100;
  input h : int = 100;
}

interface Node { 
  var canvas : int;
  var render : int;
  var h : int;
  var relX : int;
  var absX : int;
  var relY : int;
  var absY : int;  

  input minWidth : ?int;
  input maxWidth : ?int;
  input percentWidth : ?int; //priority over min/max width; function of availableWidth (or parent width?)
  var intrinsPrefWidth : int;
  var intrinsMinWidth : int;
  var availableWidth : int;
  var width : int;
  
  var lineH : int;
}

class Top : Root {
  children { child : Node }
  actions {
    child.relX := 0;
    child.absX := 0;
    child.relY := 0;
    child.absY := 0;
    child.canvas := paintStart(child.width, child.h);    
    child.availableWidth := w; //FIXME
  }
}


trait shrinkToFitWidth {
  actions {
    width := 
      !isEmptyInt(percentWidth) ?
        (0.01 * valueInt(percentWidth) * availableWidth) :                
      min(
        max(
          max(intrinsMinWidth, !isEmptyInt(minWidth) ? valueInt(minWidth) : 0), 
          availableWidth), 
        min(intrinsPrefWidth, !isEmptyInt(maxWidth) ? valueInt(maxWidth) : intrinsPrefWidth));
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

trait fillBox {
  actions {
    render := 
      canvas
      + paintLine (absX, absY, absX+width, absY, bgc) //top
      + paintLine (absX+width, absY, absX+width, absY+h, bgc) //right
      + paintLine (absX+width, absY+h, absX, absY+h, bgc) //bot
      + paintLine (absX, absY+h, absX, absY, bgc); //left
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

class Leaf(shrinkToFitWidth, fillBox) : Node {
  attributes {
    input bgc : color = #000;
  }
  actions {
    intrinsPrefWidth := 10;
    intrinsMinWidth := 10;
    h := 10;
  }
}

class HBox(shrinkToFitWidth, relToAbsChilds, fillBox, fakeChildsLineH, countChilds) : Node {
  children { childs : [ Node ]; }  
  attributes { 
    input bgc : color = #FF0000;
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
      h := fold 10 .. $-.h < (10 + childs$i.h) ? (10 + childs$i.h) : $-.h;
      childs.relY := fold 5 .. 5;
      childs.relX := fold 0 .. childs$-.relX + childs$-.width + 5;
      childs.canvas := fold render .. childs$-.canvas;        
      childs.availableWidth := childs$i.intrinsPrefWidth; //FIXME
    }
  }
}


class VBox(shrinkToFitWidth, relToAbsChilds, fillBox, fakeChildsLineH, countChilds) : Node {
  children { childs : [ Node ]; }  
  attributes { 
    input bgc : color = #00FF00;
  }
  actions {
    loop childs {
      h := fold 5 + ($$.numChilds == 0 ? 5 : 0) .. $-.h + childs$i.computedHeight + 5;
      intrinsMinWidth := fold 10 .. max($-.intrinsMinWidth, 10 + childs$i.intrinsMinWidth);
      intrinsMinWidth := fold 10 .. max($-.intrinsPrefWidth, 10 + childs$i.intrinsPrefWidth);
      childs.relX := fold 5 .. 5;        
      childs.relY := fold 0 .. childs$-.relY + childs$-.h + 5;  
      childs.canvas := fold render .. childs$-.canvas;        
      childs.availableWidth := width - 10; //FIXME
    }
  }
}


class WrapBox(shrinkToFitWidth, relToAbsChilds, fillBox, countChilds) : Node {
  children { childs : [ Node ]; }
  attributes { 
    input bgc : color = #0000FF;
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
          max(self$-.intrinsMinWidth, 5 + childs$i.intrinsMinWidth + 5);

      childs.relX := fold 0
          .. (childs$-.relX + childs$-.width + 5 + childs$i.width) >= width ?
            5 : (childs$-.relX + childs$-.width + 5);
      childs.lineH := fold 0 
          .. childs$i.relX == 5 ? 
            childs$i.h 
            : (childs$i.h > childs$-.lineH ? childs$i.h : childs$-.lineH);         
      childs.relY := fold 0
          .. childs$-.relY + (childs$i.relX == 5 ? childs$-.lineH + 5 : 0);
      childs.canvas := fold render .. childs$-.canvas;      
      h := fold 10 .. childs$i.relY + childs$i.lineH + 5;      
      childs.availableWidth := width - 10; //FIXME
    }
  }
}