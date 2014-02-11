interface Node {
    var num : int;
}

class MidNode : Node {
    children{ kids: [Node]; }
    actions{
        loop kids{
            num := fold 0 .. $-.num + kids$i.num;
        }
    }

}

class Leaf : Node {
    attributes { input numIn : int; }
    actions{
        num := numIn;
    }
}
