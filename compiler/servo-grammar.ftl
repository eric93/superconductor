interface BaseFlow {
    var position : int;
    var height : int;
    var bottom : int;
}

class BlockFlow : BaseFlow {
    children { flow_children : [BaseFlow]; }
    attributes {
        var childs_height : int;
        var my_height : int;
        var box_ : int;
        input style : int;
    }
    actions {
        my_height := getHeight(style);
        
        loop flow_children {
            childs_height := fold 0 .. $-.childs_height + rectHeight(flow_children$i.position);
            flow_children.bottom := fold 1 .. flow_children$-.bottom + flow_children$i.height;

            flow_children.position := fold 0 .. Rect(Au(0), 
                                                       flow_children$i.bottom - flow_children$i.height,
                                                       Au(100),
                                                       flow_children$i.height);
        }

        height := (my_height == Au(0)) ? childs_height : my_height;
        box_ := boxVal(position);

    }

}

class InlineFlow : BaseFlow {
    actions {
        height := 0;
    }

}

