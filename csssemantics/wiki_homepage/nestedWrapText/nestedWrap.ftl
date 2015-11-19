interface Node{
    var intrinsMinWidth : int;
    var intrinsPrefWidth : int; 
    var firstChildWidth : int;
    var rightPadding : int;

    var childNum : int;
    
    var minY : int;
    var minX : int;
    var maxWidth : int;

    var absX : int;
    var absY : int;
    var relX : int;
    var relRightX : int;
    var relY : int;
    var relRightY : int;

    var oldLineH : int;
    var maxLineH : int;

    var computedHeight : int;

    var intrinsHeight : int;
    var render : int;
    var canvas : int;

}

interface Top{
}

class Root : Top{
    children { child : Node}
    attributes{
        input maxWidth : int = 500;
        input borderc : color = #000000;
    }
    actions{
        child.minX := 10;
        child.maxWidth := maxWidth;
        child.minY := 10;
        child.relX := 0;
        child.relY := 0;
        child.childNum := 0;
        child.oldLineH := 0;
        child.canvas := paintStart(child.minX + maxWidth + 10, child.minY + child.computedHeight + 10) + 
            paintLine(child.minX - 5, child.minY - 5, child.minX + maxWidth + 5, child.minY - 5, borderc) +
            paintLine(child.minX + maxWidth + 5, child.minY - 5, child.minX + maxWidth + 5, child.minY + child.computedHeight, borderc) +
            paintLine(child.minX + maxwidth + 5, child.minY + child.computedHeight, child.minX - 5, child.minY + child.computedHeight, borderc) + 
            paintLine(child.minX - 5, child.minY + child.computedHeight, child.minX - 5, child.minY - 5, borderc);
        child.rightPadding := 0;
    }
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

class Leaf : Node{
    attributes{
        input width : int = 10;
        input height : int = 10;
        input borderc : color = #0000FF;
    }
    actions{
        intrinsMinWidth := width;
        intrinsPrefWidth := width;
        computedHeight := height;
        intrinsHeight := height;
        firstChildWidth := width + rightPadding;

        relRightX := relX + intrinsPrefWidth;
        relRightY := relY;
        maxLineH := max(oldLineH,intrinsHeight);
        
        absX := minX + relX;
        absY := minY + relY;

        render := canvas +
            paintLine(absX, absY, absX+width, absY, borderc) + 
            paintLine(absX+width, absY, absX+width, absY+height, borderc) + 
            paintLine(absX+width, absY+height,absX, absY+height, borderc) +
            paintLine(absX, absY+height, absX, absY, borderc);
    }
}

class WrapBox(countChilds) : Node {
    children{ childs : [Node] ; }
    attributes{
        var firstLineH : int;
        var firstLineBreakPos : int;
        var absRightX : int;
        var absRightY : int;
        input borderc : color = #00FF00;
    }
    actions{

        intrinsHeight := $$.numChilds == 0 ? 10 : 0;
        computedHeight := relRightY + maxLineH + 5;

        loop childs{
            intrinsMinWidth := fold 10 .. max(childs$i.intrinsMinWidth + 10, $-.intrinsMinWidth);
            intrinsPrefWidth := fold ($$.numChilds == 0 ? 10 : 5) .. $-.intrinsPrefWidth + childs$i.intrinsPrefWidth + 5;
            firstChildWidth := fold ($$.numChilds == 0 ? 10 : 0) .. (childs$i.childNum == 1) ? 5 + childs$i.firstChildWidth : $-.firstChildWidth;
            childs.rightPadding := fold 0 .. (childs$i.childNum == $$.numChilds) ? (rightPadding + 5) : 0;

            childs.minX := minX;
            childs.minY := minY;
            childs.maxWidth := maxWidth;

            relRightY := fold relY .. childs$i.relRightY;
            relRightX := fold relX + intrinsPrefWidth .. childs$i.relRightX + 5;
            maxLineH :=  fold max(oldLineH,intrinsHeight) .. childs$i.maxLineH;

            childs.relX := fold relX .. ((childs$i.childNum == 1 ? relX : childs$-.relRightX) + 5 + (childs$i.firstChildWidth) > maxWidth) ? 0 :
                (childs$i.childNum == 1 ? relX : childs$-.relRightX) + 5;

            childs.relY := fold relY .. (childs$i.childNum == 1 ? relY : childs$-.relRightY) + 
                (childs$i.relX == 0 ? (childs$i.childNum == 1 ? oldLineH : childs$-.maxLineH) + 5 : 0);

            childs.oldLineH := fold oldLineH .. (childs$i.childNum == 1 ? oldLineH : (childs$i.relX == 0 ? 0 : childs$-.maxLineH));

            firstLineBreakPos := fold -1 .. ($-.firstLineBreakPos == -1) ? 
                (childs$i.childNum == 1 ? -1 : (childs$i.relRightY >  childs$-.relRightY ? (childs$i.childNum - 1) : -1)) : $-.firstLineBreakPos;

            firstLineH := fold (firstLineBreakPos == -1 ? maxLineH : 0) .. $-.firstLineH + (childs$i.childNum == firstLineBreakPos ? childs$i.maxLineH : 0);

            childs.canvas := fold render .. childs$-.canvas;
        }
 
        absX := minX + relX;
        absY := minY + relY;
        absRightX := minX + relRightX;
        absRightY := minY + relRightY;

        render := canvas + 
            paintLine(absX, absY, absX, absY+firstLineH, borderc) + 
            paintLine(absX, absY, absX+2, absY, borderc) + 
            paintLine(absX, absY+firstLineH, absX+2, absY+firstLineH, borderc) +
            paintLine(absRightX, absRightY, absRightX, absRightY+maxLineH, borderc) +
            paintLine(absRightX, absRightY, absRightX - 2, absRightY, borderc) +
            paintLine(absRightX, absRightY+maxLineH, absRightX - 2, absRightY+maxLineH, borderc);
    }
}
