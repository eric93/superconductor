// Naming Convention:

// An underscore after an attribute's name means that the name expanded in a
// table lookup

// An underscore before an attribute's name will create that attribute in a rust
// data structure after compilation

interface BaseFlow {
    var position : Rect;
    var height : Au;
    var width : int;
}

class BlockFlow : BaseFlow {
    children {
        flowChildren : [BaseFlow];
    }
    attributes {
        var childsHeight : int;
        var myHeight : int;
        var boxWidth : int;
        var boxHeight : int;
        input boxStyleHeight : int;
    }
    actions {
        myHeight := getHeight(boxStyleHeight);

        loop flowChildren {
            childsHeight := fold Au(0) .. $-.childsHeight + rectHeight(flowChildren$i.position);
            flowChildren.bottom := fold NewAu(1) .. flowChildren$-.bottom + flowChildren$i.height;
            flowChildren.position := fold makeRect(NewAu(0), NewAu(0), NewAu(0), NewAu(0)) ..
                                          makeRect(Au(0),
                                                   flowChildren$i.bottom - flowChildren$i.height,
                                                   Au(10000),
                                                   flowChildren$i.height);
        }
        width := Au(10000);
        height := (myHeight == Au(0)) ? childsHeight : myHeight;
        boxWidth := Au(10000);
        boxHeight := height;
    }

}

class InlineFlow : BaseFlow {
    actions {
        height := NewAu(0);
        width := Au(0);
    }
}
