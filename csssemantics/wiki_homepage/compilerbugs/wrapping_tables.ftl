interface Node{
    var oldLineH : int;
    var maxLineH : int;
    var intrinsHeight : int;
}

interface ColI{
    var height : int;
}

interface RowI{
    var height : int;
}

class Col : ColI{
    children {childs : [Node];}
    attributes{
    }
    actions{
        loop childs{
            childs.oldLineH := 0;
            height := fold 0 .. $-.height + childs$i.intrinsHeight;
        }
    }
}

class Row : RowI{
    children{ childs : [Node];}
    actions{
        childs.oldLineH := 0;
    }
}



interface TableI{}

class Table : TableI{
    children {col : ColI ; row : RowI;}
    actions{
        row.height := col.height;
    }
}

class WrapBox : Node{
    children {childs : [Node];}
    actions{
        loop childs{
            childs.oldLineH := oldLineH + childs$-.maxLineH;
            maxLineH := fold oldLineH .. childs$i.maxLineH;
        }
        intrinsHeight := maxLineH;
    }
}

