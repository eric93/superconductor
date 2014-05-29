interface BaseFlow {
    // The position of the upper left corner of the border box of this flow,
    // relative to the containing block.
    var containingX : Au;
    var containingY : Au;

    var flowHeight : Au;
    var flowWidth : Au;
    var flowX : Au;
    var flowY : Au;

    // Absolute positioning of border box of this flow
    var absX : Au;
    var absY : Au;

    var bottom : Au;
    var right : Au;

    // var intrinsPrefWidth : Au;
    // var intrinsMinWidth : Au;

    var availableWidth : Au;

    var totalWidth: Au;
    var totalHeight: Au;

    var render : int;
    var makeLists: int;
    var lists : DLCE;
    var myList : DLE;

    input screenwidth: Au;
}

trait blockWidth{
    actions{

        selfIntrinsWidth := specOrZero(boxStyleWidth, availableWidth);
        selfIntrinsHeight := specOrZero(boxStyleHeight, Au(0));

        pt := specified(paddingTop, availableWidth);
        pb := specified(paddingBottom, availableWidth);
        pl := specified(paddingLeft, availableWidth);
        pr := specified(paddingRight, availableWidth);

        bt := borderTop;
        bb := borderBottom;
        bl := borderLeft;
        br := borderRight;

        mt := isAuto(marginTop) ? Au(0) : specOrZero(marginTop, availableWidth);
        mb := isAuto(marginBottom) ? Au(0) : specOrZero(marginBottom, availableWidth);
        ml := isAuto(marginLeft) ?
                (isAuto(boxStyleWidth) ?
                  Au(0) :
                  (isAuto(marginRight) ?
                    (availableWidth - pr - pl - bl - br - selfIntrinsWidth) / Au(2) :
                    (availableWidth - pr - pl - bl - br - selfIntrinsWidth - specOrZero(marginRight, availableWidth)))) :
                specOrZero(marginLeft, availableWidth);

        mr := (!isAuto(marginRight) && (isAuto(boxStyleWidth) || isAuto(marginLeft))) ?
                specOrZero(marginRight, availableWidth) :
                (isAuto(boxStyleWidth) ?
                  Au(0) :
                  (isAuto(marginLeft) ?
                    (availableWidth - pr - pl - br - bl - selfIntrinsWidth) / Au(2) :
                    (availableWidth - pr - pl - br - bl - selfIntrinsWidth - specOrZero(marginLeft, availableWidth))));


        computedWidth := is_root ?
                           screenwidth:
                           (isAuto(boxStyleWidth) ?
                             // max(intrinsMinWidth, availableWidth) - sumMBP:
                             availableWidth - mbpHoriz:
                             selfIntrinsWidth);

        mbpVert  := mt + mb + pt + pb + bt + bb;
        mbpHoriz := ml + mr + pl + pr + bl + br;

    }
}

class BlockFlow (blockWidth) : BaseFlow {
    children {
        flowChildren : [BaseFlow];
    }
    attributes {

        var childsHeight : Au;
        var childsWidth : Au;

        input is_root : bool;
        input boxptr: &Box;
        input boxStyleHeight : LengthOrPercentageOrAuto;
        input boxStyleWidth : LengthOrPercentageOrAuto;

        /// The size of Block Flow's box.
        /// The size includes padding and border, but not margin.
        var boxWidth : Au;
        var boxHeight : Au;
        var boxY : Au;
        var boxX : Au;

        var computedWidth : Au;

        var childsHeight : Au;
        var childsWidth : Au;

        var mbpVert : Au;
        var mbpHoriz : Au;
        var selfIntrinsWidth : Au;
        var selfIntrinsHeight : Au;


        // Margin, padding and border attributes.

        // Full names are the values read from the style file, whereas the
        // two-letter names are the computed values in Au

        input marginTop : LengthOrPercentageOrAuto;
        input marginBottom : LengthOrPercentageOrAuto;
        input marginLeft : LengthOrPercentageOrAuto;
        input marginRight : LengthOrPercentageOrAuto;

        var mt : Au;
        var mb : Au;
        var ml : Au;
        var mr : Au;

        input paddingTop : LengthOrPercentage;
        input paddingBottom : LengthOrPercentage;
        input paddingLeft : LengthOrPercentage;
        input paddingRight : LengthOrPercentage;

        var pt : Au;
        var pb : Au;
        var pl : Au;
        var pr : Au;

        input borderTop : Au;
        input borderBottom : Au;
        input borderLeft : Au;
        input borderRight : Au;

        var bt : Au;
        var bb : Au;
        var bl : Au;
        var br : Au;
    }
    actions {
        loop flowChildren {
            childsHeight := fold Au(0) .. ($-.childsHeight + flowChildren$i.totalHeight);
            childsWidth := fold Au(0) .. max($-.childsWidth, flowChildren$i.totalWidth);

            //intrinsMinWidth := fold selfIntrinsWidth + sumMBP
            //                   .. max(self$-.intrinsMinWidth, flowChildren$i.intrinsMinWidth + sumMBP);
            // intrinsPrefWidth := fold selfIntrinsWidth + sumMBP ..
            //  ((selfIntrinsWidth == Au(0)) ? (max($-.intrinsPrefWidth, sumMBP + flowChildren$i.intrinsPrefWidth))
            //                               : ($-.intrinsPrefWidth));

            flowChildren.bottom := fold pt + bt .. (flowChildren$-.bottom + flowChildren$i.totalHeight);
            flowChildren.right := fold Au(0) .. (flowChildren$i.totalWidth + pl + bl);

            flowChildren.containingX := fold Au(0) .. flowChildren$i.right - flowChildren$i.totalWidth;
            flowChildren.containingY := fold Au(0) .. flowChildren$i.bottom - flowChildren$i.totalHeight;

            flowChildren.absX := fold Au(0) .. flowChildren$i.containingX + absX + ml;
            flowChildren.absY := fold Au(0) .. flowChildren$i.containingY + absY + mt;

            flowChildren.availableWidth := fold Au(0) .. computedWidth;

            makeLists := fold 0 .. extendLists(lists, flowChildren$i.myList)
                                 + extendCollection(lists, flowChildren$i.lists)
                                 + flowChildren$i.render;
        }

        flowWidth :=  is_root ? screenwidth : computedWidth + pl + pr + bl + br;
        flowHeight := (selfIntrinsHeight == Au(0)) ? childsHeight + pb + pt + bb + bt
                                                   : selfIntrinsHeight + pb + pt + bb + bt;
        flowX := containingX + ml;
        flowY := containingY + mt;

        totalWidth := flowWidth + ml + mr;
        totalHeight := flowHeight + mt + mb;

        boxWidth := flowWidth;
        boxHeight := flowHeight;
        boxX := Au(0);
        boxY := Au(0);

        lists := newDisplayListCollection();
        myList := newDisplayList();

        // Adds items to display list layering from bottom up. In this case background
        // comes before border.
        render := addBackground(myList, boxptr, absX + ml, absY + mt, boxWidth, boxHeight)
                + addBorder(myList, boxptr, absX + ml, absY + mt, boxWidth, boxHeight,
                            bt, br, bb, bl)
                + extendLists(lists, myList);
    }
}

class InlineFlow : BaseFlow {
    actions {

        flowHeight := Au(0);
        flowWidth := Au(0);
        flowX := Au(0);
        flowY := Au(0);

        // intrinsPrefWidth := Au(0);
        // intrinsMinWidth := Au(0);
        totalHeight := Au(0);
        totalWidth := Au(0);

        // render := 0;
        // makeLists := 0;
        // lists := newDisplayListCollection();
        // myList := newDisplayList();
    }
}
