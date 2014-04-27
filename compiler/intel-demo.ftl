interface BaseFlow {
    var position : Rect;
    var flowHeight : Au;
    var flowWidth : Au;
    var bottom : Au;
    var right : Au;
}

class BlockFlow : BaseFlow {
    children {
        flowChildren : [BaseFlow];
    }
    attributes {
        var childsHeight : Au;
        var childsWidth : Au;
        var myHeight : Au;
        var myWidth : Au;
        var boxWidth : Au;
        var boxHeight : Au;
        var isHbox : bool;
        input boxStyleHeight : LengthOrPercentageOrAuto;
        input boxStyleWidth : LengthOrPercentageOrAuto;
    }
    actions {
        isHbox := isAuto(boxStyleWidth) ? true : false;
        myHeight := specOrZero(boxStyleHeight, Au(0));
        myWidth := specOrZero(boxStyleWidth, Au(0));

        loop flowChildren {
            childsHeight := fold Au(0) .. isHbox ? max($-.childsHeight, rectHeight(flowChildren$i.position)) : ($-.childsHeight + rectHeight(flowChildren$i.position));
            childsWidth := fold Au(0) .. isHbox ? ($-.childsWidth + rectWidth(flowChildren$i.position)) : max($-.childsWidth, rectWidth(flowChildren$i.position));

            flowChildren.bottom := fold Au(0) .. (isHbox ? (flowChildren$i.flowHeight) : (flowChildren$-.bottom + flowChildren$i.flowHeight));
            flowChildren.right := fold Au(0) .. (isHbox ? (flowChildren$-.right + flowChildren$i.flowWidth) : (flowChildren$i.flowWidth));

            flowChildren.position := fold makeRect(Au(0), Au(0), Au(0), Au(0)) ..
                                          makeRect(flowChildren$i.right - flowChildren$i.flowWidth,
                                                   flowChildren$i.bottom - flowChildren$i.flowHeight,
                                                   flowChildren$i.flowWidth,
                                                   flowChildren$i.flowHeight);
        }
        flowHeight := (myHeight == Au(0)) ? childsHeight : myHeight;
        flowWidth := (myWidth == Au(0)) ? childsWidth : myWidth;

        boxWidth := flowWidth;
        boxHeight := flowHeight;
    }

}

class InlineFlow : BaseFlow {
    actions {
        flowHeight := Au(0);
        flowWidth := Au(0);
    }
}
