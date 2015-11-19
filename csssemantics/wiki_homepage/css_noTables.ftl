schedule{
    "BUS = [W,X,Y,Z], member(blockimg,BUS), member(normalblock, BUS), member(flowblock,BUS), member(root,BUS),
    P = [(_,td,_,_,_),(_,bu,_,_,_),(_,td,_,_,_),(_,bu,_,_,_),(_,buSubInorder,_,_,((BUS,_),_)),(_,td,_,_,_)]"
//    "P = [(_,td,_,_,_),(_,bu,_,_,_),(_,td,_,_,_),(_,bu,_,_,_),(_,tdLtrU,_,_,_),(_,td,_,_,_)]"
}


interface Block{
    var canvas : int;
    var render : int;

    var absX : int;
    var absY : int;
    var computedX : int;
    var computedY : int;

    var posContX : int;
    var posContY : int;
    var posContWidth : int;

    var availableWidth : int;
    var computedWidth : int;
    input width : taggedFloat = {1,0};
    var computedHeight : int;

    var intrinsPrefWidth : int;
    var intrinsMinWidth : int;
    var intrinsHeight : int;

    var inhFontSize : int;
    input intrinsFontSize : taggedFloat = {2,0};

    var inhColor : color;
    input color : ?color;
    
    input position : string = "static";
    input left : taggedFloat = {1,0};
    input right : taggedFloat = {1,0};
    input top : taggedFloat = {1,0};
    input bottom : taggedFloat = {1,0};

    //box model
    input borderc : ?color;
//    input borderw : int = 0;
    input borders : string = "none";
    input bgc : ?color;

    input marginTop : taggedFloat = {302,0};
    input marginBottom : taggedFloat = {302,0};
    input marginLeft : taggedFloat = {302,0};
    input marginRight : taggedFloat = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedFloat = {302,0};
    input paddingBottom : taggedFloat = {302,0};
    input paddingLeft : taggedFloat = {302,0};
    input paddingRight : taggedFloat = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;

    var childNum : int;
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

  var posContX : int;
  var posContY : int;
  var posContWidth : int;

  var intrinsPrefWidth : int;
  var intrinsMinWidth : int;

  var inhFontSize : int;
  input intrinsFontSize : taggedFloat = {2,0};


  var inhColor : color;
  input color : ?color;

  input position : string = "static";
  //box model
    input marginTop : taggedFloat = {302,0};
    input marginBottom : taggedFloat = {302,0};
    input marginLeft : taggedFloat = {302,0};
    input marginRight : taggedFloat = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedFloat = {302,0};
    input paddingBottom : taggedFloat = {302,0};
    input paddingLeft : taggedFloat = {302,0};
    input paddingRight : taggedFloat = {302,0};
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

  var posContX : int;
  var posContY : int;
  var posContWidth : int;

  var intrinsPrefWidth : int;
  var intrinsMinWidth : int;

  var inhFontSize : int;
  input intrinsFontSize : taggedFloat = {2,0};

  var inhColor : color;
  input color : ?color;

  //Relative positioning
  var offsetX : int;
  var offsetY : int;
  var inhOffsetX : int;
  var inhOffsetY : int;
  
  input position : string = "static";
  input left : taggedFloat = {1,0};
  input right : taggedFloat = {1,0};
  input top : taggedFloat = {1,0};
  input bottom : taggedFloat = {1,0};


  //box model
    input marginTop : taggedFloat = {302,0};
    input marginBottom : taggedFloat = {302,0};
    input marginLeft : taggedFloat = {302,0};
    input marginRight : taggedFloat = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedFloat = {302,0};
    input paddingBottom : taggedFloat = {302,0};
    input paddingLeft : taggedFloat = {302,0};
    input paddingRight : taggedFloat = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;

  var childNum : int;
}
/*
interface Positioned{
    var canvas : int;
    var render : int;

    var computedX : int;
    var computedY : int;

    var posX : int;
    var posY : int;
    var posWidth : int;

    var computedWidth : int;
    input width : taggedFloat = {1,0};
    var computedHeight : int;

    var intrinsPrefWidth : int;
    var intrinsMinWidth : int;
    var intrinsHeight : int;

    var inhFontSize : int;
    input intrinsFontSize : taggedFloat = {2,0};

    var inhColor : color;
    input color : ?color;
    
    input left : taggedFloat = {1,0};
    input right : taggedFloat = {1,0};
    input top : taggedFloat = {1,0};
    input position : string;
    //box model
    input marginTop : taggedFloat = {302,0};
    input marginBottom : taggedFloat = {302,0};
    input marginLeft : taggedFloat = {302,0};
    input marginRight : taggedFloat = {302,0};
    var mt : int;
    var mb : int;
    var ml : int;
    var mr : int;
    input paddingTop : taggedFloat = {302,0};
    input paddingBottom : taggedFloat = {302,0};
    input paddingLeft : taggedFloat = {302,0};
    input paddingRight : taggedFloat = {302,0};
    var pt : int;
    var pb : int;
    var pl : int;
    var pr : int;

}*/

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
        sumMarginsPadding := (tagTaggedFloat(marginLeft) == CONST_AUTO() ? 0 : getValue(marginLeft,usedFontSize,0)) + 
                             (tagTaggedFloat(marginRight) == CONST_AUTO() ? 0 : getValue(marginRight,usedFontSize,0)) + 
                             (tagTaggedFloat(paddingLeft) == CONST_AUTO() ? 0 : getValue(paddingLeft,usedFontSize,0)) + 
                             (tagTaggedFloat(paddingRight) == CONST_AUTO() ? 0 : getValue(paddingRight,usedFontSize,0)); 
    }

}

trait strokeBox {
  actions {
    render := 
      canvas + (!isEmptyColor(bgc) ? paintRect(absX + ml,absY + mt, computedWidth + pl + pr, computedHeight + pt + pb,valueColor(bgc), 1) : 0) + 
        (strcmp(borders, "solid") != 0 || isEmptyColor(borderc) ? 0 :  
            paintLine(absX + ml, absY + mt, absX+ml+pr+pl+computedWidth ,absY + mt, valueColor(borderc), 1) +
            paintLine(absX + ml + pr + pl + computedWidth, absY + mt, absX + ml + pl + pr + computedWidth, absY + mt + pt + pb + computedHeight, valueColor(borderc),1) + 
            paintLine(absX + ml + pr + pl + computedWidth, absY + mt + pt + pb + computedHeight, absX + ml, absY + mt + pt + pb + computedHeight, valueColor(borderc),1) +
            paintLine(absX + ml, absY + mt + pt + pb + computedHeight, absX + ml, absY + mt, valueColor(borderc),1)
        );
  }
}


trait blockPosCont{
    actions{
        loop childs{
            childs.posContX := strcmp(position, "static") == 0 ? posContX : computedX;
            childs.posContY := strcmp(position, "static") == 0 ? posContY : computedY;
            childs.posContWidth := strcmp(position, "static") == 0 ? posContWidth : computedWidth;
        }
/*
        loop posChilds{
            posChilds.posX := strcmp(position, "static") == 0 ? posContX : computedX;
            posChilds.posY := strcmp(position, "static") == 0 ? posContY : computedY;
            posChilds.posWidth := strcmp(position, "static") == 0 ? posContWidth : computedWidth;

            posChilds.inhFontSize := usedFontSize;
            posChilds.inhColor := usedColor;
            posChilds.canvas := fold render .. posChilds$-.canvas;
        }
*/
    }
}

trait inlinePosCont{
    actions{
        loop childs{
            childs.posContX := strcmp(position, "static") == 0 ? posContX : minX + relX + offsetX;
            childs.posContY := strcmp(position, "static") == 0 ? posContY : minY + relY + offsetY;
            childs.posContWidth := strcmp(position, "static") == 0 ? posContWidth : intrinsPrefWidth;
        }
/*
        loop posChilds{
            posChilds.posX := strcmp(position, "static") == 0 ? posContX : minX + relX + offsetX;
            posChilds.posY := strcmp(position, "static") == 0 ? posContY : minY + relY + offsetY;
            posChilds.posWidth := strcmp(position, "static") == 0 ? posContWidth : intrinsPrefWidth;

            posChilds.inhFontSize := usedFontSize;
            posChilds.inhColor := usedColor;
            posChilds.canvas := fold render .. posChilds$-.canvas;
        }
*/
    }
}

trait widthIntrinsics{
    attributes{
        var sumMarginsPadding : int;
        var selfIntrinsWidth : int;
    }
    actions{
        sumMarginsPadding := (tagTaggedFloat(marginLeft) == CONST_AUTO() ? 0 : getValue(marginLeft,usedFontSize,0)) + 
                             (tagTaggedFloat(marginRight) == CONST_AUTO() ? 0 : getValue(marginRight,usedFontSize,0)) + 
                             (tagTaggedFloat(paddingLeft) == CONST_AUTO() ? 0 : getValue(paddingLeft,usedFontSize,0)) + 
                             (tagTaggedFloat(paddingRight) == CONST_AUTO() ? 0 : getValue(paddingRight,usedFontSize,0)); 

        selfIntrinsWidth := (tagTaggedFloat(width) == CONST_AUTO() ? 0 : getValue(width,usedFontSize,0));
    }

}

trait fontStyle{
    attributes{
        var usedFontSize : int;
        var usedColor : color;
    }
    actions{
        usedColor := !isEmptyColor(color) ? valueColor(color) : inhColor;
        usedFontSize := !false ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        loop childs{
            childs.inhColor := usedColor;
            childs.inhFontSize := usedFontSize;
        }
    }
}

trait blockWidth{
    actions{
        computedWidth := tagTaggedFloat(width) != CONST_AUTO() ? getValue(width,usedFontSize,availableWidth) : max(intrinsMinWidth,availableWidth) - ml - mr - pl - pr;

        pt := getValue(paddingTop,usedFontSize,availableWidth); 
        pb := getValue(paddingBottom,usedFontSize,availableWidth); 
        pl := getValue(paddingLeft,usedFontSize,availableWidth); 
        pr := getValue(paddingRight,usedFontSize,availableWidth); 

        mt := tagTaggedFloat(marginTop) != CONST_AUTO() ? getValue(marginTop, usedFontSize, availableWidth) : 0;
        mb := tagTaggedFloat(marginBottom) != CONST_AUTO() ? getValue(marginBottom, usedFontSize, availableWidth) : 0;

        ml := (tagTaggedFloat(marginLeft) != CONST_AUTO()) ? getValue(marginLeft,usedFontSize,availableWidth) : 
            (tagTaggedFloat(width) == CONST_AUTO() ? 0 : (tagTaggedFloat(marginRight) == CONST_AUTO() ? (availableWidth - pr - pl - getValue(width,usedFontSize, availableWidth))/2 
            : (availableWidth - pr - pl - getValue(width,usedFontSize,availableWidth) - getVal(marginRight,usedFontSize,availableWidth))));

        mr := (tagTaggedFloat(marginRight) != CONST_AUTO()) && (tagTaggedFloat(width) == CONST_AUTO() || tagTaggedFloat(marginLeft) == CONST_AUTO()) ? getValue(marginRight,usedFontSize,availableWidth) : 
            (tagTaggedFloat(width) == CONST_AUTO() ? 0 : (tagTaggedFloat(marginLeft) == CONST_AUTO() ? (availableWidth - pr - pl - getValue(width,usedFontSize, availableWidth))/2 
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
        computedX := absX + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(left) == CONST_AUTO() ? (tagTaggedFloat(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,availableWidth)) : getValue(left,usedFontSize,availableWidth))  : 0);
        computedY := absY + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(top) == CONST_AUTO() ? (tagTaggedFloat(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,availableWidth)) : getValue(top,usedFontSize,availableWidth))  : 0);
    }
}

trait inlineRelPos{
    actions{
        offsetX := inhOffsetX + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(left) == CONST_AUTO() ? (tagTaggedFloat(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(top) == CONST_AUTO() ? (tagTaggedFloat(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);

        loop childs{
            childs.inhOffsetX := offsetX;
            childs.inhOffsetY := offsetY;
        }
    }
}

trait inlineblockWidth{
    actions{
        computedWidth := tagTaggedFloat(width) != CONST_AUTO() ? getValue(width,usedFontSize,maxWidth) : min(max(intrinsMinWidth,maxWidth),intrinsPrefWidth) - ml - mr - pl - pr;
        pt := getValue(paddingTop,usedFontSize,maxWidth); 
        pb := getValue(paddingBottom,usedFontSize,maxWidth); 
        pl := getValue(paddingLeft,usedFontSize,maxWidth); 
        pr := getValue(paddingRight,usedFontSize,maxWidth); 

        mt := tagTaggedFloat(marginTop) != CONST_AUTO() ? getValue(marginTop, usedFontSize, maxWidth) : 0;
        mr := tagTaggedFloat(marginLeft) != CONST_AUTO() ? getValue(marginLeft, usedFontSize, maxWidth) : 0;
        ml := tagTaggedFloat(marginRight) != CONST_AUTO() ? getValue(marginRight, usedFontSize, maxWidth) : 0;
        mb := tagTaggedFloat(marginBottom) != CONST_AUTO() ? getValue(marginBottom, usedFontSize, maxWidth) : 0;

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
        mr := tagTaggedFloat(marginLeft) != CONST_AUTO() ? getValue(marginLeft, usedFontSize, maxWidth) : 0;
        ml := tagTaggedFloat(marginRight) != CONST_AUTO() ? getValue(marginRight, usedFontSize, maxWidth) : 0;
    }
}

trait Stacking{
    actions{
        loop childs{
            childs.absX := computedX + ml+pl;
            childs.absY := fold computedY + mt+pt .. childs$-.absY + (childs$i.childNum == 1 ? 0 : (childs$-.computedHeight + childs$-.pt + childs$-.pb + childs$-.mt + childs$-.mb));
            childs.availableWidth := computedWidth; 

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

      intrinsPrefWidth := fold ($$.numChilds == 0 ? 0 : -5) + sumMarginsPadding .. self$-.intrinsPrefWidth + childs$i.intrinsPrefWidth + 5;
      intrinsMinWidth := fold sumMarginsPadding .. max(self$-.intrinsMinWidth, sumMarginsPadding + childs$i.intrinsMinWidth);

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
        child.absX := child.computedHeight?0:0;
        child.absY := child.computedHeight?0:0;
        child.availableWidth := getPageWidth() - 15;
        child.canvas := paintStart(child.computedWidth + child.pr + child.pl +child.mr + child.ml, child.computedHeight + child.mt + child.mb + child.pt + child.pb,1);
        child.childNum := 1;
        child.inhColor := Black();
        child.inhFontSize := 20;
    }
}

//Misc

class BlockImg(blockRelPos) : Block{
    attributes {
       var usedFontSize : int;
       var usedColor : color;
    }
    actions{
        usedColor := !isEmptyColor(color) ? valueColor(color) : inhColor;
        usedFontSize := !false ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        render := canvas;
        intrinsHeight := 0;
        intrinsMinWidth := 0;
        intrinsPrefWidth := 0;
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
       var usedFontSize : int;
       var usedColor : color;
       var intrinsHeight : int;
       var computedHeight : int;
       var computedWidth : int;
    }
    actions{
        usedColor := !isEmptyColor(color) ? valueColor(color) : inhColor;
        usedFontSize := !false ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        render := canvas;
        intrinsHeight := 0;
        intrinsMinWidth := 0;
        intrinsPrefWidth := 0;
        computedWidth := intrinsPrefWidth;
        computedHeight := intrinsHeight;

        offsetX := inhOffsetX + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(left) == CONST_AUTO() ? (tagTaggedFloat(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(top) == CONST_AUTO() ? (tagTaggedFloat(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);

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
        
        child.posContX := strcmp(position, "static") == 0 ? posContX : computedX;
        child.posContY := strcmp(position, "static") == 0 ? posContY : computedY;
        child.posContWidth := strcmp(position, "static") == 0 ? posContWidth : computedWidth;

        intrinsMinWidth := max(selfIntrinsWidth + sumMarginsPadding, child.intrinsMinWidth + sumMarginsPadding);
        intrinsPrefWidth := selfIntrinsWidth == 0 ? child.intrinsPrefWidth + sumMarginsPadding : selfIntrinsWidth + sumMarginsPadding;
        intrinsHeight := child.relRightY + child.maxLineH - child.relY + child.mt + child.mb + child.pt + child.pb;

        computedHeight := intrinsHeight;

        usedColor := !isEmptyColor(color) ? valueColor(color) : inhColor;
        usedFontSize := !false ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        child.inhColor := usedColor;
        child.inhFontSize := usedFontSize;
    }
}

class NormalBlock(Stacking, blockWidth, strokeBox, fontStyle, countChilds, widthIntrinsics, blockRelPos, blockPosCont) : Block{
    children{ childs : [Block]; /*posChilds : [Positioned];*/ }
    actions{
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
        computedHeight := intrinsHeight;
    }
}

//Inlines
class FlowRootC (Wrapping, inlineWidthIntrinsics, fontStyle, inlineMargins, countChilds, inlinePosCont) : FlowRoot{
    children{ childs : [Inline]; /*posChilds : [Positioned];*/ }
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
    children{ childs : [Inline]; /*posChilds : [Positioned];*/ }
    actions{
        render := canvas;
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
    }
}

class InlineBlock(WrappingLeaf, Stacking, fontStyle, inlineblockWidth, countChilds, widthIntrinsics, blockPosCont, strokeBox) : Inline{
    children{ childs : [Block]; /*posChilds : [Positioned];*/ } 
    attributes{
        var computedWidth : int;
        var absX : int;
        var absY : int;
        var computedX : int;
        var computedY : int;
        var intrinsHeight : int;
        var computedHeight : int;
        input width : taggedFloat = {1,0};

        input borderc : ?color;
//        input borderw : int = 0;
        input borders : string = "none";
        input bgc : ?color;
    }
    actions{
        absX := minX + relX + offsetX;
        absY := minY + relY + offsetY;
        computedX := absX;
        computedY := absY;

        offsetX := inhOffsetX + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(left) == CONST_AUTO() ? (tagTaggedFloat(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(top) == CONST_AUTO() ? (tagTaggedFloat(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);
        
        computedHeight := intrinsHeight;
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
    
    var splitText : splitTextPointer;
    var metrics : int;

  }
  actions {   
    metrics := 0;
  
    offsetX := inhOffsetX + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(left) == CONST_AUTO() ? (tagTaggedFloat(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
    offsetY := inhOffsetY + (strcmp(position, "relative") == 0 ? (tagTaggedFloat(top) == CONST_AUTO() ? (tagTaggedFloat(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);
 

    renderFontSize := !false ? getFontSize(intrinsFontSize,inhFontSize) : inhFontSize;
    renderColor := !isEmptyColor(color) ? valueColor(color) : inhColor; 
    usedFontSize := renderFontSize;

    overflow := false;
    lineSpacing := 5;
    render := canvas /*+ paintParagraph(splitText, fontFamily, renderFontSize, minX + offsetX, minY + offsetY, relX, relY, maxWidth, false, lineHeight, renderColor, lineSpacing)*/;

    splitText := splitText(relX,maxWidth,text,fontFamily,renderFontSize);

    relRightX := (numberLines == 1) ? (relX + intrinsPrefWidth) : getLeftoverWidth(splitText);
    relRightY := (numberLines - 1) * (lineHeight + lineSpacing) + relY;
    maxLineH := max(oldLineH, lineHeight);

    lineHeight := getLineHeight(text, fontFamily, renderFontSize, metrics);
    intrinsPrefWidth := getSumWordW(text, fontFamily, renderFontSize, metrics);
    intrinsMinWidth := getMaxWordW(text, fontFamily, renderFontSize, metrics);
    firstChildWidth := getFirstWordW(text,fontFamily,renderFontSize);
    numberLines := getNumberLines(splitText);
  }
}
//Positioned elements
/*class PositionedBlock(Stacking, fontStyle, countChilds, widthIntrinsics) : Positioned{
    children{ childs : [Block]; }
    attributes{
        var posWidthTmp : int;
        var posRelX : int;
        var posRelY : int;
    }
    actions{
        render := canvas;
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
        computedHeight := intrinsHeight;

        pt := getValue(paddingTop,usedFontSize,posWidthTmp); 
        pb := getValue(paddingBottom,usedFontSize,posWidthTmp); 
        pl := getValue(paddingLeft,usedFontSize,posWidthTmp); 
        pr := getValue(paddingRight,usedFontSize,posWidthTmp);

        ml := (tagTaggedFloat(marginLeft) != CONST_AUTO()) ? getValue(marginLeft,usedFontSize,posWidthTmp) :(
          (tagTaggedFloat(width) != CONST_AUTO() && tagTaggedFloat(left) != CONST_AUTO() && tagTaggedFloat(right) != CONST_AUTO()) ? (tagTaggedFloat(marginRight) == CONST_AUTO() ? 
          (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right, usedFontSize, posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))/2 : 
          (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right,usedFontSize,posWidthTmp) - getValue((marginRight),usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))) : 0);

        mr := (tagTaggedFloat(marginRight) != CONST_AUTO()) ? getValue(marginRight,usedFontSize,posWidthTmp) : (
          (tagTaggedFloat(width) != CONST_AUTO() && tagTaggedFloat(left) != CONST_AUTO() && tagTaggedFloat(right) != CONST_AUTO()) ? 
          (tagTaggedFloat(marginLeft) == CONST_AUTO() ? (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right, usedFontSize, posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))/2 : 
          (posWidthTmp - pr - pl - getValue(left,usedFontSize,posWidthTmp) - getValue(right,usedFontSize,posWidthTmp) - getValue(marginLeft,usedFontSize,posWidthTmp) - getValue(width,usedFontSize,posWidthTmp))) : 0);

        mt := tagTaggedFloat(marginTop,0,0) == CONST_AUTO() ? 0 : getValue(marginTop,usedFontSize,posWidth);
        mb := tagTaggedFloat(marginBottom,0,0) == CONST_AUTO() ? 0 : getValue(marginBottom,usedFontSize,posWidth);
 
        posWidthTmp := position == "absolute" ? posWidth : getPageWidth() - 15;
        computedWidth := tagTaggedFloat(width) != CONST_AUTO() ? getValue(width,usedFontSize,posWidthTmp) : (
          (tagTaggedFloat(left) == CONST_AUTO() || tagTaggedFloat(right) == CONST_AUTO() || tagTaggedFloat(marginLeft) == CONST_AUTO() || tagTaggedFloat(marginRight) == CONST_AUTO()) ? 
          min(max(intrinsMinWidth, posWidthTmp), intrinsPrefWidth) : (posWidthTmp - getValue(left,usedFontSize,posWidthTmp) - getValue(right,0,0) - ml - mr - pl - pr));

        posRelX := (tagTaggedFloat(left) != CONST_AUTO() ) ? getValue(left,usedFontSize,posWidthTmp) : (tagTaggedFloat(right) == CONST_AUTO() ? 0 : (posWidthTmp - pl - pr - ml - mr - getValue(right,usedFontSize,posWidthTmp) - computedWidth));
        posRelY := (tagTaggedFloat(top) == CONST_AUTO()) ? 0 : getValue(top,usedFontSize,posWidthTmp);

        computedX := (position == "absolute" ? posX : 0) + posRelX;
        computedY := (position == "absolute" ? posY : 0) + posRelY;
    }
}*/
