interface Node {
    var inh : int;
    var evenNum: int;
}

trait inh {
    actions {
        loop kids{
            kids.inh := fold 0 .. inh;
        }
    }
}

trait setEvenNum {
    actions {
        evenNum := isEven(inh) ? (isEven(inh) ? 1 : (isEven(inh) ? 1 : 0)) : 0;
    }
}

class InlineFlow(setEvenNum): Node {
    children { kids: [Node]; }
    attributes { input inhIn : int; }
    actions {
        loop kids{
            kids.inh := fold 0 .. inhIn;
        }
    }
}

class BlockFlow(inh, setEvenNum) : Node {
    children { kids: [Node]; }
}
