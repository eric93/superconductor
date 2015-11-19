schedule{
//    "BUS = [W,X,Y,Z], member(blockimg,BUS), member(normalblock, BUS), member(flowblock,BUS), member(root,BUS),
//    P = [(_,td,_,_,_),(_,bu,_,_,_),(_,td,_,_,_),(_,bu,_,_,_),(_,buSubInorder,_,_,((BUS,_),_)),(_,td,_,_,_)]"
    "P = [(_,td,_,_,_),(_,bu,_,_,_),(_,td,_,_,_),(_,bu,_,_,_),(_,tdLtrU,_,_,_),(_,td,_,_,_)]"
}


interface Block{
    var floatLstIn : int;
    var floatLstOut : int;
    var usedFloatLst : int;

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
    input width : taggedInt = {1,0};
    var computedHeight : int;

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

    input clear : string = "none";
    var clearance : int;

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


interface FlowRoot{
  var floatLstIn : int;
  var floatLstOut : int;

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
  var floatLstIn : int;
  var floatLstOut : int;

  var canvas : int;
  var render : int;

  var relRightX : int;
  var relX : int;
  var relRightY : int;
  var relY : int;
  var prevRelY : int;
  var prevRelX : int;
  var prevLineH : int;
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

//TODO: make positioned elements go to the padding edge
trait blockPosCont{
    actions{
        loop childs{
            childs.posContX := (position == "static" || position == "\"static\"") ? posContX : computedX;
            childs.posContY := (position == "static" || position == "\"static\"") ? posContY : computedY;
            childs.posContWidth := (position == "static" || position == "\"static\"") ? posContWidth : computedWidth;
        }
    }
}

trait inlinePosCont{
    actions{
        loop childs{
            childs.posContX := (position == "static" || position == "\"static\"") ? posContX : minX + relX + offsetX;
            childs.posContY := (position == "static" || position == "\"static\"") ? posContY : minY + relY + offsetY;
            childs.posContWidth := (position == "static" || position == "\"static\"") ? posContWidth : intrinsPrefWidth;
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
    actions{
        computedWidth := getTag(width) != CONST_AUTO() ? getValue(width,usedFontSize,availableWidth) : max(intrinsMinWidth,availableWidth) - ml - mr - pl - pr;

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


        clearance := clear == "left" ? getLeftOverhang(floatLstIn) : (clear == "right" ? getRightOverhang(floatLstIn) : (
            clear == "both" ? max(getLeftOverhang(floatLstIn),getRightOverhang(floatLstIn)) : 0));

        usedFloatLst := translate(floatLstIn, 0, -clearance);

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
    actions{
        computedWidth := getTag(width) != CONST_AUTO() ? getValue(width,usedFontSize,maxWidth) : min(max(intrinsMinWidth,maxWidth),intrinsPrefWidth) - ml - mr - pl - pr;
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
            childs.absY := fold computedY + mt+pt .. childs$-.absY + (childs$i.clearance - childs$i.mt) + (childs$i.childNum == 1 ? 0 : (childs$-.computedHeight + childs$-.pt + childs$-.pb + childs$-.mt + childs$-.mb));
            childs.availableWidth := computedWidth; 

            intrinsMinWidth := fold selfIntrinsWidth + sumMarginsPadding .. max(self$-.intrinsMinWidth, sumMarginsPadding + childs$i.intrinsMinWidth);
            intrinsPrefWidth := fold selfIntrinsWidth + sumMarginsPadding .. selfIntrinsWidth == 0 ? max($-.intrinsPrefWidth, sumMarginsPadding + childs$i.intrinsPrefWidth) : $-.intrinsPrefWidth;
            intrinsHeight := fold 0 .. $-.intrinsHeight + childs$i.computedHeight + childs$i.mt + childs$i.mb + childs$i.pt + childs$i.pb + childs$i.clearance;
        }
    }
}

trait WrappingLeaf{
    attributes{
        var adjRelX : int;
        var adjRelY : int;
        var adjOldLineH : int;
        var minLeft : int;
        
        var floatCollision : bool;
    }
    actions{
        floatCollision := min(maxRightX(floatLstIn,relY, relY + computedHeight + pt + pb), maxWidth) < ((relX == 0 ? minLeft : relX) + computedWidth + pl + pr + ml + mr) ? true : false;

        minLeft := max(minLeftX(floatLstIn,relY, relY + computedHeight + pt + pb),0);
        adjRelX := floatCollision ? max(minLeftX(floatLstIn, adjRelY, adjRelY + computedHeight + pt + pb),0) : (relX == 0 ? minLeft : relX);
        adjRelY := floatCollision ? minTopY(floatLstIn, relY + oldLineH + 5, maxWidth, computedWidth, computedHeight) : relY;
        adjOldLineH := floatCollision ? 0 : oldLineH;


        relRightX := adjRelX + computedWidth + pl + pr + ml + mr;
        relRightY := adjRelY;
        firstChildWidth := computedWidth + rightPadding + pl + pr + ml + mr;
        maxLineH := max(adjOldLineH, computedHeight + pt + pb);
    }
}

trait Wrapping {
  attributes{
  }
  actions {  
    loop childs {
      childs.minX := minX;
      childs.minY := minY;
      childs.maxWidth := maxWidth;

      childs.floatLstIn := childs$i.childNum == 1 ? floatLstIn : childs$-.floatLstOut;
      floatLstOut := fold floatLstIn .. childs$i.floatLstOut;

      intrinsPrefWidth := fold ($$.numChilds == 0 ? 0 : -5) + sumMarginsPadding .. self$-.intrinsPrefWidth + childs$i.intrinsPrefWidth + 5;
      intrinsMinWidth := fold sumMarginsPadding .. max(self$-.intrinsMinWidth, sumMarginsPadding + childs$i.intrinsMinWidth);

      firstChildWidth := fold ml+pl .. (childs$i.childNum == 1) ? childs$i.firstChildWidth + ml+mr+pl+pr : $-.firstChildWidth;

      //TODO: doesn't work properly in the presence of floats.
      childs.rightPadding := fold 0 .. (childs$i.childNum == $$.numChilds) ? rightPadding + mr+pr : 0;

      childs.relX := fold 0 .. 
        ((childs$i.childNum == 1 ? relX + ml+pl : childs$-.relRightX + 5) + childs$i.firstChildWidth > maxWidth) ? 
        0 : 
        (childs$i.childNum == 1 ? relX + ml+pl : childs$-.relRightX + 5);

      childs.relY := fold 0 .. (childs$i.childNum == 1 ? relY : childs$-.relRightY) + (childs$i.relX == 0 ? 
        (childs$i.childNum == 1 ? oldLineH : childs$-.maxLineH + 5) : 0);

      childs.prevRelY := childs$i.childNum == 1 ? relY : childs$-.relRightY;
      childs.prevRelX := childs$i.childNum == 1 ? relY : childs$-.relRightX;
      childs.prevLineH := childs$i.childNum == 1 ? relY : childs$-.maxLineH;

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
        child.canvas := paintStart(child.computedWidth + child.pr + child.pl +child.mr + child.ml, child.computedHeight + child.mt + child.mb + child.pt + child.pb);
        child.childNum := 1;
        child.inhColor := "black";
        child.inhFontSize := 20;
        child.floatLstIn := emptyFloatLst();
    }
}

//Misc
class BlockLeaf(blockRelPos, strokeBox) : Block{
    attributes{
       var usedColor : color;
       var usedFontSize : int;
       input height : taggedInt = {1,0};
    }

    actions{
        usedColor := validColor(color) ? getColor(color) : inhColor;
        usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        intrinsHeight := (getTag(width) == CONST_AUTO() ? 0 : getValue(height,usedFontSize,0));
        intrinsMinWidth := (getTag(height) == CONST_AUTO() ? 0 : getValue(width,usedFontSize,0));
        intrinsPrefWidth := intrinsMinWidth;
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

        floatLstOut := floatLstIn;

        clearance := clear == "left" ? getLeftOverhang(floatLstIn) : (clear == "right" ? getRightOverhang(floatLstIn) : (
            clear == "both" ? max(getLeftOverhang(floatLstIn),getRightOverhang(floatLstIn)) : 0));

        usedFloatLst := translate(floatLstIn, 0, -clearance);

       
    }
}   

class InlineLeaf(WrappingLeaf, strokeBox) : Inline{
    attributes {
       var usedFontSize : int;
       var usedColor : color;
       var intrinsHeight : int;
       var computedHeight : int;
       var computedWidth : int;

       input width : taggedInt = {1,0};
       input height : taggedInt = {1,0};

       var absX : int;
       var absY : int;

       input borderc : ?color;
       input borderw : int;
       input borders : string = "none";
       input bgc : ?color;

    }
    actions{
        usedColor := validColor(color) ? getColor(color) : inhColor;
        usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        absX := minX + adjRelX + offsetX;
        absY := minY + adjRelY + offsetY;

        offsetX := inhOffsetX + (position == "relative" ? (getTag(left) == CONST_AUTO() ? (getTag(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (position == "relative" ? (getTag(top) == CONST_AUTO() ? (getTag(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);

        intrinsHeight := (getTag(width) == CONST_AUTO() ? 0 : getValue(height,usedFontSize,0));
        intrinsMinWidth := (getTag(height) == CONST_AUTO() ? 0 : getValue(width,usedFontSize,0));
        intrinsPrefWidth := intrinsMinWidth;
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

        floatLstOut := floatLstIn;
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
        
        child.posContX := (position == "static" || position == "\"static\"") ? posContX : computedX;
        child.posContY := (position == "static" || position == "\"static\"") ? posContY : computedY;
        child.posContWidth := (position == "static" || position == "\"static\"") ? posContWidth : computedWidth;

        intrinsMinWidth := max(selfIntrinsWidth + sumMarginsPadding, child.intrinsMinWidth + sumMarginsPadding);
        intrinsPrefWidth := selfIntrinsWidth == 0 ? child.intrinsPrefWidth + sumMarginsPadding : selfIntrinsWidth + sumMarginsPadding;
        intrinsHeight := child.relRightY + child.maxLineH - child.relY + child.mt + child.mb + child.pt + child.pb;

        computedHeight := intrinsHeight;

        usedColor := validColor(color) ? getColor(color) : inhColor;
        usedFontSize := validFontSize(intrinsFontSize) ? getFontSize(intrinsFontSize, inhFontSize) : inhFontSize;

        child.inhColor := usedColor;
        child.inhFontSize := usedFontSize;

        child.floatLstIn := translate(usedFloatLst, -(child.pl + child.ml), -(child.mt + child.pt));
        floatLstOut := translate(child.floatLstOut, child.pl + child.ml, child.mt + child.pt);
    }
}

class NormalBlock(Stacking, blockWidth, strokeBox, fontStyle, countChilds, widthIntrinsics, blockRelPos, blockPosCont) : Block{
    children{ childs : [Block]; }
    actions{
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
            childs.floatLstIn := (childs$i.childNum == 1) ? translate(usedFloatLst, -(childs$i.ml + childs$i.pl), -(childs$i.mt + childs$i.pt)) : 
                translate(childs$-.floatLstOut, childs$-.ml + childs$-.pl - (childs$i.ml + childs$i.pl), -(childs$-.computedHeight + childs$-.pb + childs$-.mb + childs$i.mt + childs$i.pt));

            floatLstOut := fold floatLstIn .. translate(childs$i.floatLstOut, childs$i.ml + childs$i.pl, computedHeight - (childs$i.computedHeight + childs$i.pb + childs$i.mb));


        }
        computedHeight := intrinsHeight;
    }
}

class FloatedBlock(fontStyle, countChilds, widthIntrinsics) : Block{
    children{ childs : [Block]; }
    attributes{
        var floatWidth : int;
        var floatMinWidth : int;
        var floatPrefWidth : int;

        input float : string;
    }
    actions{
        intrinsMinWidth := 0;
        intrinsPrefWidth := 0;
        computedWidth := 0;
        ml := 0;
        mr := 0;
        mt := 0;
        mb := 0;
        pl := 0;
        pr := 0;
        pt := 0;
        pb := 0;
        computedHeight := 0;
        clearance := 0;
        usedFloatLst := floatLstIn;

        floatWidth := getTag(width) != CONST_AUTO() ? getValue(width,usedFontSize,availableWidth) : min(max(floatMinWidth,availableWidth),floatPrefWidth) - ml - mr - pl - pr;
        floatLstOut := float == "left" ? addLeftFloat(floatLstIn, 0, availableWidth, floatWidth, intrinsHeight, clear) : addRightFloat(floatLstIn, 0, availableWidth, floatWidth, intrinsHeight, clear);
        computedX := getLastX(floatLstOut) + absX;
        computedY := getLastY(floatLstOut) + absY;

        render := 
        canvas + (validColor(bgc) ? paintRect(computedX + ml,computedY + mt, floatWidth + pl + pr, intrinsHeight + pt + pb,getColor(bgc)) : 0) + 
          (borders != "solid" ? 0 :  
              paintLine(computedX + ml, computedY + mt, computedX+ml+pr+pl+floatWidth ,computedY + mt, borderw,getColor(borderc)) +
              paintLine(computedX + ml + pr + pl + floatWidth, computedY + mt, computedX + ml + pl + pr + floatWidth, computedY + mt + pt + pb + intrinsHeight, borderw, getColor(borderc)) + 
              paintLine(computedX + ml + pr + pl + floatWidth, computedY + mt + pt + pb + intrinsHeight, computedX + ml, computedY + mt + pt + pb + intrinsHeight, borderw, getColor(borderc)) +
              paintLine(computedX + ml, computedY + mt + pt + pb + intrinsHeight, computedX + ml, computedY + mt, borderw, getColor(borderc))
          );


        loop childs{
            childs.floatLstIn := (childs$i.childNum == 1) ? emptyFloatLst(): 
                translate(childs$-.floatLstOut, childs$-.ml + childs$-.pl - (childs$i.ml + childs$i.pl), -(childs$-.computedHeight + childs$-.pb + childs$-.mb + childs$i.mt + childs$i.pt));
 
            floatMinWidth := fold selfIntrinsWidth + sumMarginsPadding .. max(self$-.floatMinWidth, sumMarginsPadding + childs$i.intrinsMinWidth);
            floatPrefWidth := fold selfIntrinsWidth + sumMarginsPadding .. selfIntrinsWidth == 0 ? max($-.floatPrefWidth, sumMarginsPadding + childs$i.intrinsPrefWidth) : $-.floatPrefWidth;
            intrinsHeight := fold 0 .. $-.intrinsHeight + childs$i.computedHeight + childs$i.mt + childs$i.mb + childs$i.pt + childs$i.pb;

            childs.absX := computedX + ml+pl;
            childs.absY := fold computedY + mt+pt .. childs$-.absY + (childs$i.childNum == 1 ? 0 : (childs$-.computedHeight + childs$-.pt + childs$-.pb + childs$-.mt + childs$-.mb));
            childs.availableWidth := floatWidth; 
            childs.canvas := fold render .. childs$-.canvas;

            childs.posContX := (position == "static" || position == "\"static\"") ? posContX : computedX;
            childs.posContY := (position == "static" || position == "\"static\"") ? posContY : computedY;
            childs.posContWidth := (position == "static" || position == "\"static\"") ? posContWidth : floatWidth;

        }
    }
}

//Inlines
class FlowRootC (Wrapping, inlineWidthIntrinsics, fontStyle, inlineMargins, countChilds, inlinePosCont) : FlowRoot{
    children{ childs : [Inline]; }
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
    children{ childs : [Inline];}
    actions{
        render := canvas;
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
        }
    }
}

class InlineBlock(WrappingLeaf, Stacking, fontStyle, inlineblockWidth, countChilds, widthIntrinsics, blockPosCont, strokeBox) : Inline{
    children{ childs : [Block];} 
    attributes{
        var computedWidth : int;
        var absX : int;
        var absY : int;
        var computedX : int;
        var computedY : int;
        var intrinsHeight : int;
        var computedHeight : int;
        input width : taggedInt = {1,0};

        input borderc : ?color;
        input borderw : int;
        input borders : string = "none";
        input bgc : ?color;
    }
    actions{
        absX := minX + adjRelX + offsetX;
        absY := minY + adjRelY + offsetY;
        computedX := absX;
        computedY := absY;

        offsetX := inhOffsetX + (position == "relative" ? (getTag(left) == CONST_AUTO() ? (getTag(right) == CONST_AUTO() ? 0 : -getValue(right,usedFontSize,maxWidth)) : getValue(left,usedFontSize,maxWidth))  : 0);
        offsetY := inhOffsetY + (position == "relative" ? (getTag(top) == CONST_AUTO() ? (getTag(bottom) == CONST_AUTO() ? 0 : -getValue(bottom,usedFontSize,maxWidth)) : getValue(top,usedFontSize,maxWidth))  : 0);
        floatLstOut := floatLstIn;
        
        computedHeight := intrinsHeight;
        loop childs{
            childs.canvas := fold render .. childs$-.canvas;
            childs.floatLstIn := (childs$i.childNum == 1) ? emptyFloatLst(): 
                translate(childs$-.floatLstOut, childs$-.ml + childs$-.pl - (childs$i.ml + childs$i.pl), -(childs$-.computedHeight + childs$-.pb + childs$-.mb + childs$i.mt + childs$i.pt));
        }
    }
}

class FloatedInline(fontStyle, countChilds, widthIntrinsics) : Inline{
    children{ childs : [Block]; }
    attributes{
        var floatWidth : int;
        var floatMinWidth : int;
        var floatPrefWidth : int;
        var computedX : int;
        var computedY : int;
        var intrinsHeight : int;
        input width : taggedInt = {1,0};
        var adjRelY : int; //Needed for proper line wrapping with right floats.

        input borderc : ?color;
        input borderw : int;
        input borders : string = "none";
        input bgc : ?color;
        input float : string;
        input clear : string;
    }
    actions{
        intrinsMinWidth := 0;
        intrinsPrefWidth := 0;
        ml := 0;
        mr := 0;
        mt := 0;
        mb := 0;
        pl := 0;
        pr := 0;
        pt := 0;
        pb := 0;

        relRightX := prevRelX;
        relRightY := prevRelY;
        maxLineH := prevLineH;

        firstChildWidth := floatWidth;
        adjRelY := (relY + floatWidth + pl + pr > maxRightX(floatLstIn, relY, relY + intrinsHeight)) ? relY + oldLineH + 5 : relY;

        floatWidth := getTag(width) != CONST_AUTO() ? getValue(width,usedFontSize,maxWidth) : min(max(floatMinWidth,maxWidth),floatPrefWidth) - ml - mr - pl - pr;
        floatLstOut := float == "left" ? addLeftFloat(floatLstIn, adjRelY, maxWidth, floatWidth, intrinsHeight, clear) : addRightFloat(floatLstIn, adjRelY, maxWidth, floatWidth, intrinsHeight, clear);
        computedX := getLastX(floatLstOut) + minX;
        computedY := getLastY(floatLstOut) + minY;
        offsetX := 0;
        offsetY := 0;

        render := 
        canvas + (validColor(bgc) ? paintRect(computedX + ml,computedY + mt, floatWidth + pl + pr, intrinsHeight + pt + pb,getColor(bgc)) : 0) + 
          (borders != "solid" ? 0 :  
              paintLine(computedX + ml, computedY + mt, computedX+ml+pr+pl+floatWidth ,computedY + mt, borderw,getColor(borderc)) +
              paintLine(computedX + ml + pr + pl + floatWidth, computedY + mt, computedX + ml + pl + pr + floatWidth, computedY + mt + pt + pb + intrinsHeight, borderw, getColor(borderc)) + 
              paintLine(computedX + ml + pr + pl + floatWidth, computedY + mt + pt + pb + intrinsHeight, computedX + ml, computedY + mt + pt + pb + intrinsHeight, borderw, getColor(borderc)) +
              paintLine(computedX + ml, computedY + mt + pt + pb + intrinsHeight, computedX + ml, computedY + mt, borderw, getColor(borderc))
          );


        loop childs{
            childs.floatLstIn := (childs$i.childNum == 1) ? emptyFloatLst(): 
                translate(childs$-.floatLstOut, childs$-.ml + childs$-.pl - (childs$i.ml + childs$i.pl), -(childs$-.computedHeight + childs$-.pb + childs$-.mb + childs$i.mt + childs$i.pt));
 
            floatMinWidth := fold selfIntrinsWidth + sumMarginsPadding .. max(self$-.floatMinWidth, sumMarginsPadding + childs$i.intrinsMinWidth);
            floatPrefWidth := fold selfIntrinsWidth + sumMarginsPadding .. selfIntrinsWidth == 0 ? max($-.floatPrefWidth, sumMarginsPadding + childs$i.intrinsPrefWidth) : $-.floatPrefWidth;
            intrinsHeight := fold 0 .. $-.intrinsHeight + childs$i.computedHeight + childs$i.mt + childs$i.mb + childs$i.pt + childs$i.pb;

            childs.absX := computedX + ml+pl;
            childs.absY := fold computedY + mt+pt .. childs$-.absY + (childs$i.childNum == 1 ? 0 : (childs$-.computedHeight + childs$-.pt + childs$-.pb + childs$-.mt + childs$-.mb));
            childs.availableWidth := floatWidth; 
            childs.canvas := fold render .. childs$-.canvas;

            childs.posContX := (position == "static" || position == "\"static\"") ? posContX : computedX;
            childs.posContY := (position == "static" || position == "\"static\"") ? posContY : computedY;
            childs.posContWidth := (position == "static" || position == "\"static\"") ? posContWidth : floatWidth;

        }
    }
}
