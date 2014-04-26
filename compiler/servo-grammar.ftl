interface BaseFlow {
    // The position of the upper left corner of the border box of this flow,
    // relative to the containing block.
    var flowHeight : Au;
    var flowWidth : Au;
    var flowX : Au;
    var flowY : Au;

    var containingX : Au;
    var containingY : Au;

    var bottom : Au;
    var right : Au;

    // var intrinsPrefWidth : Au;
    // var intrinsMinWidth : Au;

    var availableWidth : Au;

    var totalWidth: Au;
    var totalHeight: Au;

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
                             availableWidth - sumMBP:
                             selfIntrinsWidth);

        sumMBP := ml + mr + pl + pr;

    }
}

class BlockFlow (blockWidth) : BaseFlow {
    children {
        flowChildren : [BaseFlow];
    }
    attributes {
        var childsHeight : Au;
        var childsWidth : Au;

        /// The position of Block Flow's box relative to its owning flow.
        /// The size includes padding and border, but not margin.
        var boxWidth : Au;
        var boxHeight : Au;
        var boxY : Au;
        var boxX : Au;

        input is_root : bool;

        var computedWidth : Au;

        input boxStyleHeight : LengthOrPercentageOrAuto;
        input boxStyleWidth : LengthOrPercentageOrAuto;

        var sumMBP : Au;
        var selfIntrinsWidth : Au;
        var selfIntrinsHeight : Au;

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

            flowChildren.bottom := fold Au(0) .. (flowChildren$-.bottom + flowChildren$i.totalHeight);
            flowChildren.right := fold Au(0) .. (flowChildren$i.totalWidth);

            flowChildren.containingX := fold Au(0) .. flowChildren$i.right - flowChildren$i.totalWidth;
            flowChildren.containingY := fold Au(0) .. flowChildren$i.bottom - flowChildren$i.totalHeight;

            flowChildren.availableWidth := fold Au(0) .. computedWidth;

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
    }
}
