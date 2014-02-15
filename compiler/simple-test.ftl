interface Node {
    var num : int;
    var inh : int;
    var evenNum: int;
}

trait syn {
    actions {
        loop kids {
            num := fold 0 .. $-.num + kids$i.num;
        }
    }
}

trait inh {
    actions {
        loop kids{
            kids.inh := fold 0 .. inh + kids$i.num;
        }
    }
}

trait setEvenNum {
    actions {
        evenNum := isEven(num) ? (isEven(num) ? 1 : (isEven(num) ? 1 : 0)) : 0;
    }
}

class Top(syn, setEvenNum): Node {
    children { kids: [Node]; }
    attributes { input inhIn : int; }
    actions {
        loop kids{
            kids.inh := fold 0 .. inhIn + kids$i.num;
        }
    }
}

class MidNode(inh, syn, setEvenNum) : Node {
    children { kids: [Node]; }
}

class Leaf(setEvenNum) : Node {
    attributes { input numIn : int; }
    actions {
        num := numIn;
    }
}
