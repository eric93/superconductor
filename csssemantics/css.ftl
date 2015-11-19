schedule{
//    "BUS = [W,X,Y,Z], member(blockimg,BUS), member(normalblock, BUS), member(flowblock,BUS), member(root,BUS),
//    P = [(_,td,_,_,_),(_,bu,_,_,_),(_,td,_,_,_),(_,bu,_,_,_),(_,buSubInorder,_,_,((BUS,_),_)),(_,td,_,_,_)]"
    "P = [(_,td,_,_,_),(_,td,_,_,_),(_,td,_,_,_),(_,bu,_,_,_),(_,td,_,_,_),(_,td,_,_,_),(_,bu,_,_,_),(_,tdLtrU,_,_,_),(_,td,_,_,_)]"
}

interface Block{
    var canvas : int;
    var render : int;

    var absX : int;
    var absY : int;
    var computedX : int;
    var computedY : int;

    var availableWidth : int;
    var containHeight : int;
    var computedWidth : int;
    input width : taggedInt = {1,0};
    var computedHeight : int;
    input height : taggedInt = {1,0};

    var intrinsPrefWidth : int;
    var intrinsMinWidth : int;
    var intrinsHeight : int;

    var inhFontSize : int;
    input intrinsFontSize : taggedInt = {2,0};

    var inhColor : color;
    input color : ? color;
    
    input position : string = "static";
    input left : taggedInt = {1,0};
    input right : taggedInt = {1,0};
    input top : taggedInt = {1,0};
    input bottom : taggedInt = {1,0};

    //box model
    input borderc : ?color;
    input borderw : int;
    input borders : string = "none";
    input bgc : ?color;

    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;

    var childNum : int;
}

interface CellI{

    input colSpan : int;
    input rowSpan : int;
    
    var row : int;
    var column : int;
    var cellNum : int;
    //Block
    var canvas : int;
    var render : int;

    var absX : int;
    var absY : int;
    var computedX : int;
    var computedY : int;

    var availableWidth : int;
    var computedWidth : int;
    input width : taggedInt = {1,0};
    var computedHeight : int;
    input height : taggedInt = {1,0};

    var intrinsPrefWidth : int;
    var intrinsMinWidth : int;
    var intrinsHeight : int;

    var inhFontSize : int;
    input intrinsFontSize : taggedInt = {2,0};

    var inhColor : color;
    input color : ? color;
    
    input position : string = "static";
    input left : taggedInt = {1,0};
    input right : taggedInt = {1,0};
    input top : taggedInt = {1,0};
    input bottom : taggedInt = {1,0};

    //box model
    input borderc : ?color;
    input borderw : int;
    input borders : string = "none";
    input bgc : ?color;

    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;

    var childNum : int;
}

interface RowI { 
  var intrinsColCount : int;
  var colCount : int;
  var intrinsHeight : int;
  var computedHeight : int;
  var absY : int;
  var absX : int;
  
  var rowNum : int;
  var cells : int;
  var colAssignment : int;


  var canvas : int;
  var render : int;

  var tableContentWidth : int;

  var inhFontSize : string;
  input intrinsFontSize : string;

  var inhColor : color;
  input color : color = "none";

  input bgc : color = "none";
  input borderc : color = "none";
  input borders : string = "none";
  input borderw : int = 0;
}

interface ColI { 
  var colCount : int;
  var colNum : int;
  
  var intrinsMinWidth : int;
  var intrinsPrefWidth : int;
  var intrinsPercentWidth : int;
  var computedWidth : int;

  var lowerBound : int;
  var upperBound : int;
  var minPercentGuess : int;
  var prefGuess : int;
  
  var absX : int;
  var absY : int;

  var canvas : int;
  var render : int;
 

  var cellsReady : int;
  var tableContentHeight : int;
  
}

interface ColsI {
  var intrinsPrefWidth : int;
  var intrinsMinWidth : int;

  var colCount : int;
  var availableWidth : int;
  var absX : int;
  var absY : int;
  var canvas : int;
  
  var cellsReady : int;
  var tableContentHeight : int;
  var tableContentWidth : int;

}


interface FlowRoot{
  var canvas : int;
  var render : int;

  var relRightX : int;
  var relX : int;
  var relRightY : int;
  var relY : int;
  var oldLineH : int;
  var maxLineH : int;

  var firstChildWidth : int;
  var rightPadding : int;

  var minX : int;
  var minY : int;
  var maxWidth : int;
  var containHeight : int;

  var intrinsPrefWidth : int;
  var intrinsMinWidth : int;
  var intrinsHeight : int;

  var inhFontSize : int;
  input intrinsFontSize : taggedInt = {2,0};


  var inhColor : color;
  input color : ?color = "inherit";

  input position : string = "static";
  //box model
    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;
}

interface Inline{
  var canvas : int;
  var render : int;

  var relRightX : int;
  var relX : int;
  var relRightY : int;
  var relY : int;
  var oldLineH : int;
  var maxLineH : int;

  var firstChildWidth : int;
  var rightPadding : int;

  var minX : int;
  var minY : int;
  var maxWidth : int;
  var containHeight : int;

  var intrinsPrefWidth : int;
  var intrinsMinWidth : int;
  var intrinsHeight : int;

  var inhFontSize : int;
  input intrinsFontSize : taggedInt = {2,0};

  var inhColor : color;
  input color : ?color = "inherit";

  //Relative positioning
  var offsetX : int;
  var offsetY : int;
  var inhOffsetX : int;
  var inhOffsetY : int;
  
  input position : string = "static";
  input left : taggedInt = {1,0};
  input right : taggedInt = {1,0};
  input top : taggedInt = {1,0};
  input bottom : taggedInt = {1,0};


  //box model
    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;

  var childNum : int;
}

interface Positioned{
    var canvas : int;
    var render : int;

    var computedX : int;
    var computedY : int;

    var posX : int;
    var posY : int;
    var posWidth : int;
    var posHeight : int;

    var computedWidth : int;
    input width : taggedInt = {1,0};
    var computedHeight : int;
    input height : taggedInt = {1,0};

    var intrinsPrefWidth : int;
    var intrinsMinWidth : int;
    var intrinsHeight : int;

    var inhFontSize : int;
    input intrinsFontSize : taggedInt = {2,0};

    var inhColor : color;
    input color : ?color = "none";
    
    input left : taggedInt = {1,0};
    input right : taggedInt = {1,0};
    input top : taggedInt = {1,0};
    input bottom : taggedInt = {1,0};
    input position : string;
    //box model
    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;

}

trait countChilds {
  attributes {
    var numChilds : int;
  }
  actions {
    loop childs {
      numChilds := fold 0 .. self$-.numChilds + 1;
      childs.childNum := fold 0 .. childs$-.childNum + 1;
    }
  }
}
trait inlineWidthIntrinsics{
    attributes{
        var sumMarginsPadding : int;
    }
    actions{
        sumMarginsPadding := (getTag(marginLeft) == CONST_AUTO() ? 0 : getValue(marginLeft,usedFontSize,0)) + 
                             (getTag(marginRight) == CONST_AUTO() ? 0 : getValue(marginRight,usedFontSize,0)) + 
                             (getTag(paddingLeft) == CONST_AUTO() ? 0 : getValue(paddingLeft,usedFontSize,0)) + 
                             (getTag(paddingRight) == CONST_AUTO() ? 0 : getValue(paddingRight,usedFontSize,0)); 
    }

}

trait strokeBox {
  actions {
    render := 
      canvas + (validColor(bgc) ? paintRect(absX + ml,absY + mt, computedWidth + pl + pr, computedHeight + pt + pb,getColor(bgc)) : 0) + 
        (borders != "solid" ? 0 :  
            paintLine(absX + ml, absY + mt, absX+ml+pr+pl+computedWidth ,absY + mt, borderw,getColor(borderc)) +
            paintLine(absX + ml + pr + pl + computedWidth, absY + mt, absX + ml + pl + pr + computedWidth, absY + mt + pt + pb + computedHeight, borderw, getColor(borderc)) + 
            paintLine(absX + ml + pr + pl + computedWidth, absY + mt + pt + pb + computedHeight, absX + ml, absY + mt + pt + pb + computedHeight, borderw, getColor(borderc)) +
            paintLine(absX + ml, absY + mt + pt + pb + computedHeight, absX + ml, absY + mt, borderw, getColor(borderc))
        );
  }
}


trait blockPosCont{
    actions{
        loop posChilds{
            posChilds.posX := computedX;
            posChilds.posY := computedY;
            posChilds.posWidth := computedWidth;
            posChilds.posHeight := computedHeight;

            posChilds.inhFontSize := usedFontSize;
            posChilds.inhColor := usedColor;
            posChilds.canvas := fold render .. posChilds$-.canvas;
        }
    }
}

trait inlinePosCont{
    actions{
       loop posChilds{
            posChilds.posX := minX + relX + offsetX;
            posChilds.posY := minY + relY + offsetY;
            posChilds.posWidth := intrinsPrefWidth;
            posChilds.posHeight := intrinsHeight;

            posChilds.inhFontSize := usedFontSize;
            posChilds.inhColor := usedColor;
            posChilds.canvas := fold render .. posChilds$-.canvas;
        }
    }
}

trait widthIntrinsics{
    attributes{
        var sumMarginsPadding : int;
        var selfIntrinsWidth : int;
    }
    actions{
        sumMarginsPadding := (getTag(marginLeft) == CONST_AUTO() ? 0 : getValue(marginLeft,usedFontSize,0)) + 
                             (getTag(marginRight) == CONST_AUTO() ? 0 : getValue(marginRight,usedFontSize,0)) + 
                             (getTag(paddingLeft) == CONST_AUTO() ? 0 : getValue(paddingLeft,usedFontSize,0)) + 
                             (getTag(paddingRight) == CONST_AUTO() ? 0 : getValue(paddingRight,usedFontSize,0)); 

        selfIntrinsWidth := (getTag(width) == CONST_AUTO() ? 0 : getValue(width,usedFontSize,0));
    }

}

trait fontStyle{
    attributes{
        var usedFontSize : int;
        var usedColor : color;
    }
    actions{
        usedColor := validColor(color) ? getColor(color) : inhColor;
        usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        loop childs{
            childs.inhColor := usedColor;
            childs.inhFontSize := usedFontSize;
        }
    }
}

trait blockWidth{
    attributes { var tmpComputedHeight : int; }
    actions{
        computedWidth := getTag(width) != CONST_AUTO() ? getValue(width,usedFontSize,availableWidth) : max(intrinsMinWidth,availableWidth) - ml - mr - pl - pr;

        tmpComputedHeight := getTag(height) != CONST_AUTO() ? getValue(height,usedFontSize,containHeight) : intrinsHeight;
        computedHeight := isNaN(tmpComputedHeight) ? intrinsHeight : tmpComputedHeight;
        //FIXME: do overflow properly

        pt := getValue(paddingTop,usedFontSize,availableWidth); 
        pb := getValue(paddingBottom,usedFontSize,availableWidth); 
        pl := getValue(paddingLeft,usedFontSize,availableWidth); 
        pr := getValue(paddingRight,usedFontSize,availableWidth); 

        mt := getTag(marginTop) != CONST_AUTO() ? getValue(marginTop, usedFontSize, availableWidth) : 0;
        mb := getTag(marginBottom) != CONST_AUTO() ? getValue(marginBottom, usedFontSize, availableWidth) : 0;

        ml := (getTag(marginLeft) != CONST_AUTO()) ? getValue(marginLeft,usedFontSize,availableWidth) : 
            (getTag(width) == CONST_AUTO() ? 0 : (getTag(marginRight) == CONST_AUTO() ? (availableWidth - pr - pl - getValue(width,usedFontSize, availableWidth))/2 
            : (availableWidth - pr - pl - getValue(width,usedFontSize,availableWidth) - getVal(marginRight,usedFontSize,availableWidth))));

        mr := (getTag(marginRight) != CONST_AUTO()) && (getTag(width) == CONST_AUTO() || getTag(marginLeft) == CONST_AUTO()) ? getValue(marginRight,usedFontSize,availableWidth) : 
            (getTag(width) == CONST_AUTO() ? 0 : (getTag(marginLeft) == CONST_AUTO() ? (availableWidth - pr - pl - getValue(width,usedFontSize, availableWidth))/2 
            : (availableWidth - pr - pl - getValue(width,usedFontSize,availableWidth) - getValue(marginLeft,usedFontSize,availableWidth))));


    }
}

trait cellWidth{
    actions{
        computedWidth := availableWidth - ml - mr - pl - pr;

        pt := getValue(paddingTop,usedFontSize,availableWidth); 
        pb := getValue(paddingBottom,usedFontSize,availableWidth); 
        pl := getValue(paddingLeft,usedFontSize,availableWidth); 
        pr := getValue(paddingRight,usedFontSize,availableWidth); 

        mt := 0;
        mb := 0;
        ml := 0;
        mr := 0;
    }
}

trait blockRelPos{
    actions{
        computedX := absX + (position == "relative" ? (getTag(left) == CONST_AUTO() ? (getTag(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,availableWidth)) : getValue(left,usedFontSize,availableWidth))  : 0);
        computedY := absY + (position == "relative" ? (getTag(top) == CONST_AUTO() ? (getTag(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,availableWidth)) : getValue(top,usedFontSize,availableWidth))  : 0);
    }
}

trait inlineRelPos{
    actions{
        offsetX := inhOffsetX + (position == "relative" ? (getTag(left) == CONST_AUTO() ? (getTag(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (position == "relative" ? (getTag(top) == CONST_AUTO() ? (getTag(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);

        loop childs{
            childs.inhOffsetX := offsetX;
            childs.inhOffsetY := offsetY;
        }
    }
}

trait inlineblockWidth{
    attributes{ var tmpComputedHeight : int; }
    actions{
        computedWidth := getTag(width) != CONST_AUTO() ? getValue(width,usedFontSize,maxWidth) : min(max(intrinsMinWidth,maxWidth),intrinsPrefWidth) - ml - mr - pl - pr;
        tmpComputedHeight := getTag(height != CONST_AUTO()) ? getValue(height,usedFontSize,containHeight)  : intrinsHeight;
        computedHeight := isNaN(tmpComputedHeight) ? intrinsHeight : tmpComputedHeight;
        //FIXME: Do overflow properly

        pt := getValue(paddingTop,usedFontSize,maxWidth); 
        pb := getValue(paddingBottom,usedFontSize,maxWidth); 
        pl := getValue(paddingLeft,usedFontSize,maxWidth); 
        pr := getValue(paddingRight,usedFontSize,maxWidth); 

        mt := getTag(marginTop) != CONST_AUTO() ? getValue(marginTop, usedFontSize, maxWidth) : 0;
        mr := getTag(marginLeft) != CONST_AUTO() ? getValue(marginLeft, usedFontSize, maxWidth) : 0;
        ml := getTag(marginRight) != CONST_AUTO() ? getValue(marginRight, usedFontSize, maxWidth) : 0;
        mb := getTag(marginBottom) != CONST_AUTO() ? getValue(marginBottom, usedFontSize, maxWidth) : 0;

    }
}

trait inlineMargins{
    actions{
        pt := 0; 
        pb := 0; 
        pl := getValue(paddingLeft,usedFontSize,maxWidth); 
        pr := getValue(paddingRight,usedFontSize,maxWidth); 

        mt := 0;
        mb := 0;
        mr := getTag(marginLeft) != CONST_AUTO() ? getValue(marginLeft, usedFontSize, maxWidth) : 0;
        ml := getTag(marginRight) != CONST_AUTO() ? getValue(marginRight, usedFontSize, maxWidth) : 0;
    }
}

trait Stacking{
    actions{
        loop childs{
            childs.absX := computedX + ml+pl;
            childs.absY := fold computedY + mt+pt .. childs$-.absY + (childs$i.childNum == 1 ? 0 : (childs$-.computedHeight + childs$-.pt + childs$-.pb + childs$-.mt + childs$-.mb));
            childs.availableWidth := computedWidth; 
            childs.containHeight := getTag(height) != CONST_AUTO() ? getValue(height, intrinsFontSize, containHeight) : CONST_NAN();

            intrinsMinWidth := fold selfIntrinsWidth + sumMarginsPadding .. max(self$-.intrinsMinWidth, sumMarginsPadding + childs$i.intrinsMinWidth);
            intrinsPrefWidth := fold selfIntrinsWidth + sumMarginsPadding .. selfIntrinsWidth == 0 ? max($-.intrinsPrefWidth, sumMarginsPadding + childs$i.intrinsPrefWidth) : $-.intrinsPrefWidth;
            intrinsHeight := fold 0 .. $-.intrinsHeight + childs$i.computedHeight + childs$i.mt + childs$i.mb + childs$i.pt + childs$i.pb;
        }
    }
}

trait WrappingLeaf{
    actions{
        relRightX := relX + computedWidth + pl + pr + ml + mr;
        relRightY := relY;
        firstChildWidth := computedWidth + rightPadding + pl + pr + ml + mr;
        maxLineH := max(oldLineH, computedHeight + pt + pb);
    }
}

trait Wrapping {
  actions {  
    loop childs {
      childs.minX := minX;
      childs.minY := minY;
      childs.maxWidth := maxWidth;
      childs.containHeight := containHeight;

      intrinsPrefWidth := fold ($$.numChilds == 0 ? 0 : -5) + sumMarginsPadding .. self$-.intrinsPrefWidth + childs$i.intrinsPrefWidth + 5;
      intrinsMinWidth := fold sumMarginsPadding .. max(self$-.intrinsMinWidth, sumMarginsPadding + childs$i.intrinsMinWidth);
      intrinsHeight := fold 0 .. max(self$-.intrinsHeight, childs$i.intrinsHeight + childs$i.mt + childs$i.mb + childs$i.pt + childs$i.pb);


      firstChildWidth := fold ml+pl .. (childs$i.childNum == 1) ? childs$i.firstChildWidth + ml+mr+pl+pr : $-.firstChildWidth;

      childs.rightPadding := fold 0 .. (childs$i.childNum == $$.numChilds) ? rightPadding + mr+pr : 0;

      childs.relX := fold 0 .. 
        ((childs$i.childNum == 1 ? relX + ml+pl : childs$-.relRightX + 5) + childs$i.firstChildWidth > maxWidth) ? 
        0 : 
        (childs$i.childNum == 1 ? relX + ml+pl : childs$-.relRightX + 5);

      childs.relY := fold 0 .. (childs$i.childNum == 1 ? relY : childs$-.relRightY) + (childs$i.relX == 0 ? 
        (childs$i.childNum == 1 ? oldLineH : childs$-.maxLineH + 5) : 0);

      childs.oldLineH := (childs$i.childNum == 1) ? oldLineH : ((childs$i.relX == 0) ? 0 : childs$-.maxLineH);

      relRightX := fold relX + intrinsPrefWidth .. childs$i.relRightX + mr+pr;
      relRightY := fold relY .. childs$i.relRightY;
      maxLineH := fold max(oldLineH, 0) .. childs$i.maxLineH;
    }
  }
}

interface Top{}
class Root : Top{
    children{ child : Block; }
    actions{
        child.absX := child.computedHeight ? 0 : 0;
        child.absY := child.computedHeight ? 0 : 0;
        child.availableWidth := getPageWidth() - 15;
        child.canvas := paintStart(child.computedWidth + child.pr + child.pl +child.mr + child.ml, child.computedHeight + child.mt + child.mb + child.pt + child.pb);
        child.childNum := 1;
        child.inhColor := "black";
        child.inhFontSize := 20;
        child.containHeight :=  getPageHeight();
    }
}

//Misc

class BlockImg(blockRelPos) : Block{
    attributes {
       input imagehandle : int;
       var usedFontSize : int;
       var usedColor : color;
    }
    actions{
        usedColor := validColor(color) ? getColor(color) : inhColor;
        usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        render := canvas + paintImg(computedX,computedY,imagehandle);
        intrinsHeight := getImageHeight(imagehandle);
        intrinsMinWidth := getImageWidth(imagehandle);
        intrinsPrefWidth := getImageWidth(imagehandle);
        computedWidth := intrinsPrefWidth;
        computedHeight := intrinsHeight;

        pt := 0; 
        pb := 0;
        pl := 0;
        pr := 0;

        mt := 0;
        mb := 0;
        mr := 0;
        ml := 0;
    }
}

class InlineImg(WrappingLeaf) : Inline{
    attributes {
       input imagehandle : int;
       var usedFontSize : int;
       var usedColor : color;
       var computedHeight : int;
       var computedWidth : int;
    }
    actions{
        usedColor := validColor(color) ? getColor(color) : inhColor;
        usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        render := canvas + paintImg(minX + relX + offsetX, minY + relY + offsetY,imagehandle);
        intrinsHeight := getImageHeight(imagehandle);
        intrinsMinWidth := getImageWidth(imagehandle);
        intrinsPrefWidth := getImageWidth(imagehandle);
        computedWidth := intrinsPrefWidth;
        computedHeight := intrinsHeight;

        offsetX := inhOffsetX + (position == "relative" ? (getTag(left) == CONST_AUTO() ? (getTag(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (position == "relative" ? (getTag(top) == CONST_AUTO() ? (getTag(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);

        pt := 0; 
        pb := 0;
        pl := 0;
        pr := 0;

        mt := 0;
        mb := 0;
        mr := 0;
        ml := 0;
    }   
   
}

//Blocks

class FlowBlock(blockWidth, strokeBox, widthIntrinsics, blockRelPos) : Block{
    children{child : FlowRoot;}
    attributes{
        var usedFontSize : int;
        var usedColor : color;
    }
    actions{
        child.canvas := render;

        child.relX := 0;
        child.relY := 0;
        child.oldLineH := 0;

        child.rightPadding := 0;
        child.minX := computedX + ml + pl;
        child.minY := computedY + mt + pt;
        child.maxWidth := computedWidth;
        child.containHeight := getTag(height) != CONST_AUTO() ? getValue(height,usedFontSize,containHeight) : CONST_NAN();
        
        intrinsMinWidth := max(selfIntrinsWidth + sumMarginsPadding, child.intrinsMinWidth + sumMarginsPadding);
        intrinsPrefWidth := selfIntrinsWidth == 0 ? child.intrinsPrefWidth + sumMarginsPadding : selfIntrinsWidth + sumMarginsPadding;
        intrinsHeight := child.relRightY + child.maxLineH - child.relY + child.mt + child.mb + child.pt + child.pb;

        usedColor := validColor(color) ? getColor(color) : inhColor;
        usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        child.inhColor := usedColor;
        child.inhFontSize := usedFontSize;
    }
}

class NormalBlock(Stacking, blockWidth, strokeBox, fontStyle, countChilds, widthIntrinsics, blockRelPos, blockPosCont) : Block{
    children{ childs : [Block]; posChilds : [Positioned]; }
    actions{
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
    }
}

//Inlines
class FlowRootC (Wrapping, inlineWidthIntrinsics, fontStyle, inlineMargins, countChilds, inlinePosCont) : FlowRoot{
    children{ childs : [Inline]; posChilds : [Positioned]; }
    attributes{
        var offsetX : int;
        var offsetY : int;
    }
    actions{
        render := canvas;
        offsetX := 0;
        offsetY := 0;
        loop childs{
            childs.canvas := render;
            childs.inhOffsetX := 0;
            childs.inhOffsetY := 0;
        }
    }
}

class NormalInline(Wrapping, fontStyle, inlineMargins, countChilds, inlineWidthIntrinsics, inlineRelPos, inlinePosCont) : Inline{
    children{ childs : [Inline]; posChilds : [Positioned]; }
    actions{
        render := canvas;
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
    }
}

class InlineBlock(WrappingLeaf, Stacking, fontStyle, inlineblockWidth, countChilds, widthIntrinsics, blockPosCont, strokeBox) : Inline{
    children{ childs : [Block]; posChilds : [Positioned]; } 
    attributes{
        var computedWidth : int;
        var absX : int;
        var absY : int;
        var computedX : int;
        var computedY : int;
        var computedHeight : int;
        input width : taggedInt = {1,0};
        input height : taggedInt = {1,0};

        input borderc : ?color;
        input borderw : int;
        input borders : string = "none";
        input bgc : ?color;
    }
    actions{
        absX := minX + relX + offsetX;
        absY := minY + relY + offsetY;
        computedX := absX;
        computedY := absY;

        offsetX := inhOffsetX + (position == "relative" ? (getTag(left) == CONST_AUTO() ? (getTag(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (position == "relative" ? (getTag(top) == CONST_AUTO() ? (getTag(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);
        
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
    }
}

class TextBox(inlineMargins) : Inline {
  attributes {
    input text : string;
    input fontFamily : string = "Arial";
    var lineHeight : int;
    var lineSpacing : int;
    var numberLines : int;  
    var overflow : bool;
    var renderFontSize : int;
    var usedFontSize : int;
    var renderColor : color; 
    
    var splitText : int;
    var metrics : int;

  }
  actions {   
    metrics := 0;
  
    offsetX := inhOffsetX + (position == "relative" ? (getTag(left) == CONST_AUTO() ? (getTag(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
    offsetY := inhOffsetY + (position == "relative" ? (getTag(top) == CONST_AUTO() ? (getTag(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);
 

    renderFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize,inhFontSize) : inhFontSize;
    renderColor := validColor(color) ? getColor(color) : inhColor; 
    usedFontSize := renderFontSize;

    overflow := false;
    lineSpacing := 5;
    render := canvas + paintParagraph(splitText, fontFamily, renderFontSize, minX + offsetX, minY + offsetY, relX, relY, maxWidth, false, lineHeight, renderColor, lineSpacing);

    splitText := splitText(relX,maxWidth,text,fontFamily,renderFontSize);

    relRightX := (numberLines == 1) ? (relX + intrinsPrefWidth) : getLeftoverWidth(splitText);
    relRightY := (numberLines - 1) * (lineHeight + lineSpacing) + relY;
    maxLineH := max(oldLineH, lineHeight);

    lineHeight := getLineHeight(text, fontFamily, renderFontSize, metrics);
    intrinsPrefWidth := getSumWordW(text, fontFamily, renderFontSize, metrics);
    intrinsMinWidth := getMaxWordW(text, fontFamily, renderFontSize, metrics);
    intrinsHeight := lineHeight;
    firstChildWidth := getFirstWordW(text,fontFamily,renderFontSize);
    numberLines := getNumberLines(splitText);
  }
}
//Positioned elements
class PositionedBlock(Stacking, fontStyle, countChilds, widthIntrinsics) : Positioned{
    children{ childs : [Block]; }
    attributes{
        var posWidthTmp : int;
        var posHeightTmp : int;
        var posRelX : int;
        var posRelY : int;
        var containHeight : int;
    }
    actions{
        render := canvas;

        containHeight := posHeight - mt - mb - pt - pb;
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
        computedHeight := intrinsHeight; //FIXME: calculate based on what's auto

        pt := getValue(paddingTop,usedFontSize,posWidthTmp); 
        pb := getValue(paddingBottom,usedFontSize,posWidthTmp); 
        pl := getValue(paddingLeft,usedFontSize,posWidthTmp); 
        pr := getValue(paddingRight,usedFontSize,posWidthTmp);

        ml := (getTag(marginLeft) != CONST_AUTO()) ? getValue(marginLeft,usedFontSize,posWidthTmp) :(
          (getTag(width) != CONST_AUTO() && getTag(left) != CONST_AUTO() && getTag(right) != CONST_AUTO()) ? (getTag(marginRight) == CONST_AUTO() ? 
          (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right, usedFontSize, posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))/2 : 
          (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right,usedFontSize,posWidthTmp) - getValue((marginRight),usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))) : 0);

        mr := (getTag(marginRight) != CONST_AUTO()) ? getValue(marginRight,usedFontSize,posWidthTmp) : (
          (getTag(width) != CONST_AUTO() && getTag(left) != CONST_AUTO() && getTag(right) != CONST_AUTO()) ? 
          (getTag(marginLeft) == CONST_AUTO() ? (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right, usedFontSize, posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))/2 : 
          (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right,usedFontSize,posWidthTmp) - getValue(marginLeft,usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))) : 0);

        mt := (getTag(marginTop) != CONST_AUTO()) ? getValue(marginTop,usedFontSize,posWidth) : 
                ((getTag(height) == CONST_AUTO() || getTag(top) == CONST_AUTO() || getTag(bottom) == CONST_AUTO()) ? 0 :
                  ((getTag(marginBottom) == CONST_AUTO()) ?
                    (posWidthTmp - pr - pl - getValue(top,usedFontSize,posWidthTmp) - getValue(bottom,usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))/2 :
                    (posWidthTmp - pr - pl - getValue(top,usedFontSize,posWidthTmp) - getValue(bottom,usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp) - getValue(marginBottom,usedFontSize,posWidthTmp))));
 
        mb := (getTag(marginTop) != CONST_AUTO()) ? getValue(marginBottom,usedFontSize,posWidth) : 
                ((getTag(height) == CONST_AUTO() || getTag(top) == CONST_AUTO() || getTag(bottom) == CONST_AUTO()) ? 0 :
                  ((getTag(marginTop) == CONST_AUTO()) ?
                    (posWidthTmp - pr - pl - getValue(top,usedFontSize,posWidthTmp) - getValue(bottom,usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))/2 :
                    (posWidthTmp - pr - pl - getValue(top,usedFontSize,posWidthTmp) - getValue(bottom,usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp) - getValue(marginTop,usedFontSize,posWidthTmp))));
 

        posWidthTmp := position == "absolute" ? posWidth : getPageWidth() - 15;
        posHeightTmp := position == "absolute" ? posHeight : getPageHeight();

        computedWidth := getTag(width) != CONST_AUTO() ? getValue(width,usedFontSize,posWidthTmp) : (
          (getTag(left) == CONST_AUTO() || getTag(right) == CONST_AUTO() || getTag(marginLeft) == CONST_AUTO() || getTag(marginRight) == CONST_AUTO()) ? 
          min(max(intrinsMinWidth, posWidthTmp), intrinsPrefWidth) : (posWidthTmp - getValue(left,usedFontSize,posWidthTmp) - getValue(right,usedFontSize,posWidthTmp) - ml - mr - pl - pr));

        computedHeight := getTag(height) != CONST_AUTO() ? getValue(height,usedFontSize,posHeightTmp) : (
          (getTag(top) == CONST_AUTO() || getTag(bottom) == CONST_AUTO() || getTag(marginTop) == CONST_AUTO() || getTag(marginBottom) == CONST_AUTO()) ? 
          intrinsHeight : (posHeightTmp - getValue(left,usedFontSize,posHeightTmp) - getValue(right,usedFontSize,posHeightTmp) - ml - mr - pl - pr));




        posRelX := (getTag(left) != CONST_AUTO() ) ? getValue(left,usedFontSize,posWidthTmp) : (getTag(right) == CONST_AUTO() ? 0 : (posWidthTmp - pl - pr - ml - mr - getValue(right,usedFontSize,posWidthTmp) - computedWidth));
        posRelY := (getTag(top) != CONST_AUTO() ) ? getValue(top,usedFontSize,posWidthTmp) : (getTag(bottom) == CONST_AUTO() ? 0 : (posWidthTmp - pl - pr - ml - mr - getValue(bottom,usedFontSize,posWidthTmp) - computedWidth));

        computedX := (position == "absolute" ? posX : 0) + posRelX;
        computedY := (position == "absolute" ? posY : 0) + posRelY;
    }
}

//Tables
class Cell(Stacking, cellWidth, strokeBox, fontStyle, countChilds, widthIntrinsics) : CellI{
    children{childs : [Block];}
    attributes{ var containHeight : int; }
    actions{
        computedX := absX;
        computedY := absY;
        containHeight := CONST_NAN(); //FIXME: when can this value not be NaN?
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
    }
}

class Row(fontStyle) : RowI {
  children {
    childs : [ CellI ];
  }
  phantom { //do not emit code for these
    childs.canvas;
    childs.absX;
    childs.availableWidth;
    childs.childNum;
  }
  actions {

    computedHeight := intrinsHeight;
    loop childs {
      intrinsColCount := fold 0 .. $-.intrinsColCount + (isEmptyInt(childs$i.colSpan) ? 1 : valueInt(childs$i.colSpan));
      intrinsHeight := fold 0 .. (isEmptyInt(childs$i.rowSpan) || valueInt(childs$i.rowSpan) == 1) ? max($-.intrinsHeight, childs$i.intrinsHeight) : $-.intrinsHeight;

      childs.canvas := fold render .. childs$-.canvas;
      childs.computedHeight := computedHeight;

      childs.absY := absY;
    }    
    
    loop childs {
      cells := fold mtIntPairList() .. 
          appendIntPairList(
            $-.cells, 
            pairInt(
              isEmptyInt(childs$i.rowSpan) ? 1 : valueInt(childs$i.rowSpan),
              isEmptyInt(childs$i.colSpan) ? 1 : valueInt(childs$i.colSpan)));

      childs.column := columnsGetCol(colAssignment, childs.cellNum);
      childs.row := rowNum;
      childs.cellNum := fold 0 .. childs$-.cellNum + 1;
    }

    render := 
      canvas + (validColor(bgc) ? paintRect(absX,absY,tableContentWidth,computedHeight,bgc) : 0) + 
        (borders != "solid" ? 0 :  
            paintLine(absX,absY, absX+tableContentWidth,absY, borderw,borderc) +
            paintLine(absX + tableContentWidth, absY, absX + tableContentWidth, absY + computedHeight, borderw, borderc) + 
            paintLine(absX + tableContentWidth, absY + computedHeight, absX, absY + computedHeight, borderw, borderc) +
            paintLine(absX, absY + computedHeight, absX, absY, borderw, borderc)
        );

 }
}

class Col(countChilds) : ColI {

  phantom {
    childs.column;
    childs.row;
    childs.cellNum;
    childs.computedHeight;
    childs.absY;
  }  
  children {
    childs : [ CellI ]; //  ../rows/childs[.column == self.colNum]
  }


  actions {
    loop childs {

      intrinsMinWidth := fold (cellsReady?0:0) .. (isEmptyInt(childs$i.colSpan) || valueInt(childs$i.colSpan) == 1) ?
            max($-.intrinsMinWidth,  childs$i.intrinsMinWidth)
            : $-.intrinsMinWidth;

      intrinsPrefWidth := fold (cellsReady?0:0) .. (isEmptyInt(childs$i.colSpan) || valueInt(childs$i.colSpan) == 1) ?
            max($-.intrinsPrefWidth, childs$i.intrinsPrefWidth)
            : $-.intrinsPrefWidth;            

      intrinsPercentWidth := fold (cellsReady?0:0) .. max((getPercent(childs$i.width) ? getPercent(childs$i.width) : 0)
                                                        + (getPercent(childs$i.paddingLeft) ? getPercent(childs$i.paddingLeft) : 0)
                                                        + (getPercent(childs$i.paddingRight) ? getPercent(childs$i.paddingRight) : 0), 
                                                      $-.intrinsPercentWidth);

      childs.availableWidth := computedWidth + (cellsReady?0:0);

      childs.canvas := fold render + (cellsReady?0:0) .. childs$-.canvas;      
      childs.absX := absX;
    }      
    
    render := canvas;


  }
}

class Cols : ColsI {
  attributes {
     var k : int;
     var widthSelect : int;
     var minPercentGuess : int;
     var prefGuess : int;

     var guessBelow : int;
     var guessAbove : int;
  }
  children {
    cols : [ ColI ];
  }
  actions {
    //do not know until colCount, put in dep
    k := (guessBelow != guessAbove) ? (guessAbove - availableWidth)/(guessAbove - guessBelow) : 1;

    widthSelect := (intrinsMinWidth < availableWidth && minPercentGuess >= availableWidth) ? 0 : (
        (minPercentGuess < availableWidth && prefGuess >= availableWidth) ? 1 : -1);

    guessBelow := (widthSelect == 0 ? intrinsMinWidth : (widthSelect == 1 ? minPercentGuess : Error("Error: bad widthSelect")));
    guessAbove := (widthSelect == 0 ? minPercentGuess : (widthSelect == 1 ? prefGuess : Error("Error: bad widthSelect")));


    loop cols {
      cols.minPercentGuess := (cols$i.intrinsPercentWidth > 0) ? max((cols$i.intrinsPercentWidth * availableWidth), cols$i.intrinsMinWidth) : cols$i.intrinsMinWidth;
      cols.prefGuess := (cols$i.intrinsPercentWidth > 0) ? max((cols$i.intrinsPercentWidth * availableWidth), cols$i.intrinsMinWidth) : cols$i.intrinsPrefWidth;

      cols.colCount := colCount;

      minPercentGuess := fold (cellsReady?0:0) .. $-.minPercentGuess + cols$i.minPercentGuess;
      prefGuess := fold (cellsReady?0:0) .. $-.prefGuess + cols$i.prefGuess;

      cols.lowerBound := (widthSelect == 0 ? cols$i.intrinsMinWidth : (widthSelect == 1 ? cols$i.minPercentGuess : Error("Error: bad widthSelect")));
      cols.upperBound := (widthSelect == 0 ? cols$i.minPercentGuess : (widthSelect == 1 ? cols$i.prefGuess : Error("Error: bad widthSelect")));

      intrinsPrefWidth := fold (cellsReady?0:0) .. $-.intrinsPrefWidth + cols$i.intrinsPrefWidth;            
      intrinsMinWidth := fold (cellsReady?0:0) .. $-.intrinsMinWidth + cols$i.intrinsMinWidth;
      cols.colNum := fold 0 + (cellsReady?0:0) .. cols$-.colNum + 1;

      cols.computedWidth := (cellsReady?0:0) + (prefGuess < availableWidth ? Error("TODO: implement full tables algorithm") : 0) + (
        (k < 0) ? cols$i.upperBound :  (
        (0 <= k && k <= 1) ? (k * cols$i.lowerBound + (1-k) * cols$i.upperBound) : (
        (k > 1) ? cols$i.lowerBound : Error("Logic Error")))); 

      cols.absX := fold absX .. cols$-.absX  + (cols$i.colNum == 1 ? 0 : cols$-.computedWidth);

      cols.absY := absY;
      cols.canvas := fold canvas + (cellsReady?0:0) .. cols$-.canvas;                        
      cols.cellsReady := cellsReady;
      cols.tableContentHeight := tableContentHeight;
      tableContentWidth := fold 0 .. $-.tableContentWidth + cols$i.computedWidth;
    }
  }
}

class TableBox(inlineblockWidth, strokeBox, widthIntrinsics, blockRelPos) : Block {
  attributes {
    var colCount : int;
    var cellsReady : int;
    var usedColor : int;
    var usedFontSize : int;
    var maxWidth : int;
  }
  children {
    rows : [ RowI ];
    columns : ColsI;
  }
  actions {
    usedColor := validColor(color) ? color : inhColor;
    usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize,inhFontSize) : inhFontSize;
    maxWidth := availableWidth;


    loop rows {
      colCount := fold 0 .. max($-.colCount, rows$i.intrinsColCount);
      rows.colCount := $$.colCount;
      intrinsHeight := fold mt+mb .. $-.intrinsHeight + rows$i.computedHeight;
      rows.absY := fold computedY + mt .. rows$-.absY + (rows$i.rowNum == 1 ? 0 : rows$-.computedHeight);
      rows.absX := computedX + ml;      
      rows.colAssignment := 
        fold 
          emptyColumnList(colCount) 
          .. 
          columnsAppendRow(rows$-.colAssignment, rows$i.cells, rows$i.rowNum);

      rows.rowNum := fold 0 .. rows$-.rowNum + 1;
      rows.canvas := fold render .. rows$-.canvas;      
      rows.tableContentWidth := columns.tableContentWidth;

      rows.inhColor := usedColor;
      rows.inhFontSize := usedFontSize;

    }   
    cellsReady := rows$$.colAssignment;

    intrinsPrefWidth := selfIntrinsWidth == 0 ? (columns.intrinsPrefWidth + sumMarginsPadding) : selfIntrinsWidth;
    intrinsMinWidth := selfIntrinsWidth == 0 ? (columns.intrinsMinWidth + sumMarginsPadding) : selfIntrinsWidth;
    columns.colCount := colCount;
    columns.cellsReady := cellsReady ? true : true;
    columns.availableWidth := computedWidth;
    columns.absX := computedX + ml;
    columns.absY := computedY + mt;
    columns.canvas := render;
    columns.tableContentHeight := intrinsHeight;
  }
}

