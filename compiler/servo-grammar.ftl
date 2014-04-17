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

    var intrinsPrefWidth : Au;
    var intrinsMinWidth : Au;

    var availableWidth : Au;

    var totalWidth: Au;
    var totalHeight: Au;
}


trait widthIntrinsics{
    attributes{
        var sumMarginsPadding : Au;
        var selfIntrinsWidth : Au;
    }
    actions{
        sumMarginsPadding := ml + mr + pl + pr;
        selfIntrinsWidth := specAutoOrZero(boxStyleWidth);
    }
}

trait blockWidth {
    actions {
        mt := specAutoOrZero(marginTop);
        mb := specAutoOrZero(marginBottom);
        ml := specAutoOrZero(marginLeft);
        mr := specAutoOrZero(marginRight);

        pt := specified(paddingTop, Au(0));
        pb := specified(paddingBottom, Au(0));
        pl := specified(paddingLeft, Au(0));
        pr := specified(paddingRight, Au(0));

        computedWidth := isAuto(boxStyleWidth) ?
                           max(intrinsMinWidth, availableWidth) - sumMarginsPadding:
                           selfIntrinsWidth;

    }
}

class BlockFlow (blockWidth, widthIntrinsics) : BaseFlow {
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

        var isHbox : bool;

        var computedWidth : Au;

        input boxStyleHeight : LengthOrPercentageOrAuto;
        input boxStyleWidth : LengthOrPercentageOrAuto;

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
    }
    actions {
        isHbox := isAuto(boxStyleWidth) ? true : false;

        loop flowChildren {
            childsHeight := fold Au(0) .. ($-.childsHeight + flowChildren$i.totalHeight);
            childsWidth := fold Au(0) .. max($-.childsWidth, flowChildren$i.totalWidth);

            intrinsMinWidth := fold selfIntrinsWidth .. max(self$-.intrinsMinWidth, flowChildren$i.totalWidth);
            intrinsPrefWidth := fold selfIntrinsWidth + sumMarginsPadding ..
              ((selfIntrinsWidth == Au(0)) ? (max($-.intrinsPrefWidth, sumMarginsPadding + flowChildren$i.intrinsPrefWidth))
                                           : ($-.intrinsPrefWidth));

            flowChildren.bottom := fold Au(0) .. (flowChildren$-.bottom + flowChildren$i.totalHeight);
            flowChildren.right := fold Au(0) .. (flowChildren$i.totalWidth);

            flowChildren.containingX := fold Au(0) .. flowChildren$i.right - flowChildren$i.totalWidth;
            flowChildren.containingY := fold Au(0) .. flowChildren$i.bottom - flowChildren$i.totalHeight;

            flowChildren.availableWidth := fold Au(0) .. computedWidth;

        }

        selfIntrinsHeight := specAutoOrZero(boxStyleHeight);

        flowWidth := intrinsMinWidth + pl + pr;
        flowHeight := (selfIntrinsHeight == Au(0)) ? childsHeight + pb + pt : selfIntrinsHeight + pb + pt;
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
        intrinsPrefWidth := Au(0);
        intrinsMinWidth := Au(0);
        totalHeight := Au(0);
        totalWidth := Au(0);
    }
}
