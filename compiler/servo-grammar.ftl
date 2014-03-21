interface BaseFlow {
    var position : Rect;
    var height : Au;
    var width : Au;
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
        input boxStyleHeight : LengthOrPercentageOrAuto;
        input boxStyleWidth : LengthOrPercentageOrAuto;
    }
    actions {
        myHeight := getHeight(boxStyleHeight);
        myWidth := getHeight(boxStyleWidth);

        loop flowChildren {
            childsHeight := fold Au(0) .. $-.childsHeight + rectHeight(flowChildren$i.position);
            childsWidth := fold Au(0) .. $-.childsWidth + rectWidth(flowChildren$i.position);
            flowChildren.bottom := fold Au(1) .. flowChildren$-.bottom + flowChildren$i.height;
            flowChildren.right := fold Au(1) .. flowChildren$-.right + flowChildren$i.width;
            flowChildren.position := fold makeRect(Au(0), Au(0), Au(0), Au(0)) ..
                                          makeRect(flowChildren$i.right - flowChildren$i.width,
                                                   flowChildren$i.bottom - flowChildren$i.height,
                                                   flowChildren$i.width,
                                                   flowChildren$i.height);
        }
        height := (myHeight == Au(0)) ? childsHeight : myHeight;
        width := (myWidth == Au(0)) ? childsWidth : myWidth;
        boxWidth := width;
        boxHeight := height;
    }

}

class InlineFlow : BaseFlow {
    actions {
        height := Au(0);
        width := Au(0);
    }
}
