interface Node {
    var num : int;
    var num2 : int;
    var num3 : int;
}

class MidNode : Node {
    children{ kids: [Node]; }
    actions{
        loop kids by func(kids$i.num) {
            num := fold 0 .. $-.num + kids$i.num + kids$i.num2;
            kids.num2 := fold 0 .. kids$-.num3 + 1;
            kids.num3 := fold 0 .. kids$i.num2 + 1;
        }
    }

}

class Leaf : Node {
    attributes { input numIn : int; }
    actions{
        num := numIn;
    }
}
