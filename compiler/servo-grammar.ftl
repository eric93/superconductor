interface BaseFlow {
    var position : int;
    var height : int;
    var bottom : int;
}

interface Box {
    input style : int;
    var position : int;
}

class BlockFlow : BaseFlow {
    children {box_ : Box; flow_children : [BaseFlow]; }
    attributes {
        var childs_height : int;
        var my_height : int;
    }
    actions {
        my_height := getHeight(box_.style);
        
        loop flow_children {
            childs_height := fold 0 .. $-.childs_height + rectHeight(flow_children$i.position);
            flow_children.bottom := fold 1 .. flow_children$-.bottom + flow_children$i.height;

            flow_children.position := fold 0 .. Rect(Au(0), 
                                                       flow_children$i.bottom - flow_children$i.height,
                                                       Au(100),
                                                       flow_children$i.height);
        }

        height := (my_height == Au(0)) ? childs_height : my_height;
        box_.position := position;

    }

}

class InlineFlow : BaseFlow {
    actions {
        height := 0;
    }

}

class GenericBox : Box {
}
