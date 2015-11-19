interface Block{
    input width : taggedInt = {1,0};
    input intrinsFontSize : taggedInt = {2,0};
    input color : ? color;
    input position : string = "static";
    input left : taggedInt = {1,0};
    input right : taggedInt = {1,0};
    input top : taggedInt = {1,0};
    input bottom : taggedInt = {1,0};
    //box model
    input borderc : ?color;
    input borderw : int;
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
}

interface CellI{
    input colSpan : int;
    input rowSpan : int;
    //Block
    input width : taggedInt = {1,0};
    input intrinsFontSize : taggedInt = {2,0};
    input color : ? color;
    input position : string = "static";
    input left : taggedInt = {1,0};
    input right : taggedInt = {1,0};
    input top : taggedInt = {1,0};
    input bottom : taggedInt = {1,0};
    //box model
    input borderc : ?color;
    input borderw : int;
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
}

interface RowI { 
  input intrinsFontSize : string;
  input color : ? color;
  input bgc : ? color;
  input borderc : ? color;
  input borders : string = "none";
  input borderw : int = 0;
}

interface ColI { }

interface ColsI { }


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
}

interface Inline{
  input intrinsFontSize : taggedInt = {2,0};
  input color : ?color;
  //Relative positioning
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
}

//Misc
class BlockImg : Block{
    attributes {
       input imagehandle : int;              
    }
}

class InlineImg : Inline{
    attributes {
       input imagehandle : int;
    }
}

//Blocks

class FlowBlock : Block{
    children{child : FlowRoot;}
}

class NormalBlock : Block{
    children{ childs : [Block]; posChilds : [Positioned]; }
}

//Inlines
class FlowRootC : FlowRoot{
    children{ childs : [Inline]; posChilds : [Positioned]; }
}

class NormalInline : Inline{
    children{ childs : [Inline]; posChilds : [Positioned]; }
}

class InlineBlock : Inline{
    children{ childs : [Block]; posChilds : [Positioned]; } 
}

class TextBox : Inline {
  attributes {
    input text : string;
    input fontFamily : string = "Arial";
  }
}

//Positioned elements
class PositionedBlock : Positioned{
    children{ childs : [Block]; }
}

//Tables

class Cell : CellI{
    children{childs : [Block]; posChilds : [Positioned];}
}

class Row : RowI {
  children {
    childs : [ CellI ];
  }
}

class Col : ColI {
  children {
    childs : [ CellI ]; //  ../rows/childs[.column == self.colNum]
  }
}

class Cols : ColsI {
  children {
    cols : [ ColI ];
  }
}

class TableBox : Block {
  children {
    rows : [ RowI ];
    columns : ColsI;
  }
}

