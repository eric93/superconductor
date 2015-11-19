schedule{
    "BUS = [W,X,Y,Z], member(blockimg,BUS), member(normalblock, BUS), member(flowblock,BUS), member(root,BUS), P = [(_,td,_,_,_),(_,buSubInorder,_,_,((BUS,_),_))]"
//    "P = [(_,td,_,_,_),(_,tdLtrU,_,_,_)]"
}

interface Block{
    input width : taggedInt = {1,0};
    input intrinsFontSize : taggedInt = {2,0};
    input color : ?color;
    
    input position : string = "static";
    input left : taggedInt = {1,0};
    input right : taggedInt = {1,0};
    input top : taggedInt = {1,0};
    input bottom : taggedInt = {1,0};

    //box model
    input borderc : ?color;
    input borderw : int = 0;
    input borders : string = "none";
    input bgc : ?color;

    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};

    var td : int;
    var bu : int;
}

interface FlowRoot{
  input intrinsFontSize : taggedInt = {2,0};
  input color : ?color;
  input position : string = "static";
  //box model
    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};
  var td : int;
  var in : int;
  var out : int;
}

interface Inline{
  input intrinsFontSize : taggedInt = {2,0};
  input color : ?color;
  input position : string = "static";
  input left : taggedInt = {1,0};
  input right : taggedInt = {1,0};
  input top : taggedInt = {1,0};
  input bottom : taggedInt = {1,0};


  //box model
    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};

  var td : int;
  var in : int;
  var out : int;
}

interface Positioned{
    input width : taggedInt = {1,0};
    input intrinsFontSize : taggedInt = {2,0};
    input color : ?color;
    input left : taggedInt = {1,0};
    input right : taggedInt = {1,0};
    input top : taggedInt = {1,0};
    input position : string;
    //box model
    input marginTop : taggedInt = {302,0};
    input marginBottom : taggedInt = {302,0};
    input marginLeft : taggedInt = {302,0};
    input marginRight : taggedInt = {302,0};
    input paddingTop : taggedInt = {302,0};
    input paddingBottom : taggedInt = {302,0};
    input paddingLeft : taggedInt = {302,0};
    input paddingRight : taggedInt = {302,0};
}

interface Top{}
class Root : Top{
    children{ child : Block; }
    attributes{
        var bu : int;
    }
    actions{
        child.td := 0;
        bu := child.bu;
    }
}

//Misc

class BlockImg : Block{
    attributes {
    }
    actions{
        bu := td;
    }
}

class InlineImg : Inline{
    attributes {
    }
    actions{
        out := in + 1;
    }   
   
}

//Blocks

class FlowBlock : Block{
    children{child : FlowRoot;}
    attributes{
    }
    actions{
        child.td := td + 1;
        bu := child.out;
        child.in := 0;
    }
}

class NormalBlock : Block{
    children{ childs : [Block]; posChilds : [Positioned]; }
    actions{
        loop childs{
            childs.td := td + 1;
            bu := fold 0 .. $-.bu + childs$i.bu;
        }
    }
}

//Inlines
class FlowRootC  : FlowRoot{
    children{ childs : [Inline]; posChilds : [Positioned]; }
    attributes{
    }
    actions{
        loop childs{
            childs.td := td + 1;
            childs.in := in + childs$-.out;
            out := fold 0 .. childs$i.out;
        }
    }
}

class NormalInline : Inline{
    children{ childs : [Inline]; posChilds : [Positioned]; }
    actions{
        loop childs{
            childs.td := td + 1;
            childs.in := in + childs$-.out;
            out := fold 0 .. childs$i.out;
        }
    }

}

class InlineBlock : Inline{
    children{ childs : [Block]; posChilds : [Positioned]; } 
    attributes{
        input width : taggedInt = {1,0};

        input borderc : ?color;
        input borderw : int = 0;
        input borders : string = "none";
        input bgc : ?color;
        var bu : int;
    }
    actions{

        out := in + 1;
        loop childs{
            childs.td := td + 1;
            bu := fold 0 .. $-.bu + childs$i.bu;
        }
    }
}

class TextBox : Inline {
  attributes {
    input text : string;
    input fontFamily : string = "Arial";
  }
  actions {   
    out := in + 1;
  }
}
//Positioned elements
class PositionedBlock : Positioned{
    children{ childs : [Block]; }
    attributes{
    }
    actions{
        loop childs{
            childs.td := 0;
        }
    }
}
