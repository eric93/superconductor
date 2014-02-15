use std::hashmap::HashMap;
use std::util;

pub enum NodeType {
    top,
    midnode,
    leaf,
}

pub struct FtlNode<'a>{
    id : int,
    ty: NodeType,
    attribs: HashMap<&'a str,int>,
    kids: ~[FtlNode<'a>],
}


impl<'a> FtlNode<'a> {
    pub fn setAttrib(&mut self, attr: &'a str, value: int) {
        self.attribs.insert_or_update_with(attr, value, |_,v| { *v = value });
    }
    pub fn getAttrib(&self, attr: &'a str) -> int {
        match self.attribs.find_copy(&attr) {
            Some(a) => a,
            _ => fail!("Attribute not found: " + attr + format!(", Node {:d}", self.id))
        }
    }
    pub fn with_kids(&mut self, func: |&mut FtlNode<'a>, &mut FtlNode<'a>|) {
        let mut kids = util::replace(&mut self.kids, ~[]);
        for child in kids.mut_iter() {
            func(self, child);
        }
        util::replace(&mut self.kids, kids);
    }
}

pub fn log(logstr: &str){
    println!("{:s}",logstr)
}

pub fn createNode<'a>(id: int, ty: NodeType, children: ~[FtlNode<'a>]) -> FtlNode<'a> {
    let mut node = FtlNode{
        id: id,
        ty: ty,
        attribs: HashMap::new(),
        kids: children
    };

    node.attribs.insert("numin",id);
    node
}

pub fn nodeInfo( node: &FtlNode ) -> int {
    println!("OUTPUT: Node {:d}:", node.id);
    for (&s, &i) in node.attribs.iter() {
        println!("OUTPUT:     {:s}: {:d}", s, i);
    }
    1
}

pub fn isEven( num: int ) -> bool {
    num % 2 == 0
}

pub fn generateTree<'a>() -> FtlNode<'a> {
    let leafs1 = ~[createNode(1,leaf,~[]),createNode(2,leaf,~[]),createNode(3,leaf,~[])];
    let leafs2 = ~[createNode(4,leaf,~[]),createNode(5,leaf,~[])];
    let parents = ~[createNode(6,midnode,leafs1),createNode(7,midnode,leafs2)];
    let mut topnode = createNode(8,top,parents);
    topnode.attribs.insert("inhin",111);
    topnode
}

pub fn inherit(visit: |&mut FtlNode|,node: &mut FtlNode) {
    visit(node);
    for child in node.kids.mut_iter() {
        inherit(|node| visit(node),child);
    }
}

pub fn synthesize(visit: |&mut FtlNode|, node: &mut FtlNode) {
    for child in node.kids.mut_iter() {
        synthesize(|node| visit(node),child);
    }
    visit(node);
}
