interface Node{
    var x : int;
    var y : int;
    var z : int;
}

interface Top{}

class Root : Top{
    children{child : Node;}
    attributes{var y : int;}
    actions{
        child.x := 0;
        y := child.y;
        child.z := 0;
    }
}

class InOrder : Node{
    children {childs : [Node];}
    actions{
        loop childs{
            childs.x := childs$-.y;
            y := fold x .. childs$i.x;
            childs.z := childs$i.y;  //This line causes the grammar to become unsolvable
        }
    }
}

