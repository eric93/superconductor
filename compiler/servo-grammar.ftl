interface BaseFlow {
    var position : int;
    var height : int;
    var bottom : int;
}

class BlockFlow : BaseFlow {
    children { flowChildren : [BaseFlow]; }
    attributes {
        var childs_height : int;
        var my_height : int;
        input box_ : Box;
    }
    actions {
        my_height := getHeight(box_);
        loop flowChildren {
            childs_height := fold Au(0) .. $-.childs_height + rectHeight(flowChildren$i.position);
            flowChildren.bottom := fold Au(1) .. flowChildren$-.bottom + flowChildren$i.height;

            flowChildren.position := fold makeRect(Au(0), Au(0), Au(0), Au(0)) ..
                                           makeRect(Au(0),
                                                    flowChildren$i.bottom - flowChildren$i.height,
                                                    Au(100),
                                                    flowChildren$i.height);
        }

        height := (my_height == Au(0)) ? childs_height : my_height;
    }

}

class InlineFlow : BaseFlow {
    actions {
        height := Au(0);
    }

}
