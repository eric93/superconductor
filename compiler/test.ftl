interface Node {
    var a : int;
    var b : int;
}

interface Top {
    var x : int;
}

class Root : Top {
    children {
        childs : [Node];
    }
    attributes {
        input in : int;
    }
    actions{
        loop childs {
            childs.a := in;
            x := fold 0 .. self$-.x + childs$i.b;
        }

    }
}

class MidNode : Node {
    children {
        childs : [Node];

    }
    actions {
        loop childs {
            childs.a := fold a .. childs$-.a + 1;
            b := fold 0 .. self$-.b + childs$i.b;
        }
    }
}

class Leaf : Node {
    attributes {
        input y : int;
    }
    actions {
        b := a + y;
    }
}
