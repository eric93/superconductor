interface BaseFlow {
    var position : Rect;
    var height : Au;
    var width : Au;
    var bottom : Au;
    var right : Au;
    var intrinsPrefWidth : Au;
    var intrinsMinWidth : Au;
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
    }
}

class BlockFlow (blockWidth, widthIntrinsics) : BaseFlow {
    children {
        flowChildren : [BaseFlow];
    }
    attributes {
        var childsHeight : Au;
        var childsWidth : Au;
        var boxWidth : Au;
        var boxHeight : Au;
        var isHbox : bool;

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
            // childsHeight := fold Au(0) .. isHbox ? max($-.childsHeight, rectHeight(flowChildren$i.position)) : ($-.childsHeight + rectHeight(flowChildren$i.position));
            // childsWidth := fold Au(0) .. isHbox ? ($-.childsWidth + rectWidth(flowChildren$i.position)) : max($-.childsWidth, rectWidth(flowChildren$i.position));

            childsHeight := fold Au(0) .. ($-.childsHeight + rectHeight(flowChildren$i.position));
            childsWidth := fold Au(0) .. max($-.childsWidth, rectWidth(flowChildren$i.position));

            intrinsMinWidth := fold selfIntrinsWidth + sumMarginsPadding .. max(self$-.intrinsMinWidth, sumMarginsPadding + flowChildren$i.intrinsMinWidth);
            intrinsPrefWidth := fold selfIntrinsWidth + sumMarginsPadding ..
              ((selfIntrinsWidth == Au(0)) ? (max($-.intrinsPrefWidth, sumMarginsPadding + flowChildren$i.intrinsPrefWidth)) : ($-.intrinsPrefWidth));

            // flowChildren.bottom := fold Au(0) .. (isHbox ? (flowChildren$i.height) : (flowChildren$-.bottom + flowChildren$i.height));
            // flowChildren.right := fold Au(0) .. (isHbox ? (flowChildren$-.right + flowChildren$i.width) : (flowChildren$i.width));

            flowChildren.bottom := fold Au(0) .. (flowChildren$-.bottom + flowChildren$i.height);
            flowChildren.right := fold Au(0) .. flowChildren$i.width;

            flowChildren.position := fold makeRect(Au(0), Au(0), Au(0), Au(0)) ..
                                          makeRect(flowChildren$i.right - flowChildren$i.width,
                                                   flowChildren$i.bottom - flowChildren$i.height,
                                                   flowChildren$i.width,
                                                   flowChildren$i.height);
        }

        selfIntrinsHeight := specAutoOrZero(boxStyleHeight);
        width := intrinsPrefWidth;
        height := (selfIntrinsHeight == Au(0)) ? childsHeight : selfIntrinsHeight;

        boxWidth := width;
        boxHeight := height;
    }

}

class InlineFlow : BaseFlow {
    actions {
        height := Au(0);
        width := Au(0);
        intrinsPrefWidth := Au(0);
        intrinsMinWidth := Au(0);
    }
}
