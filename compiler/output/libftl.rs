use std::cast;

pub fn base<'a,I>(node: &'a mut FtlNode) -> &'a mut I {
    unsafe {
        let (_, ptr) : (uint, uint) = cast::transmute(node);
        cast::transmute(ptr)
    }
}

pub fn inherit(visit: |&mut FtlNode|, node: &mut FtlNode) {
    visit(node);
    node.with_all_children(|child| {
        inherit(|node: &mut FtlNode| visit(node), child);
    });
}

pub fn synthesize(visit: |&mut FtlNode|,node: &mut FtlNode) {
    node.with_all_children(|child| {
        synthesize(|node: &mut FtlNode| visit(node), child);
    });
    visit(node);
}

pub fn log(logstr: &str){
    println!("{:s}",logstr)
}

pub trait FtlNode {
    fn with_all_children(&mut self, func: |&mut FtlNode|);
    fn visit_0(&mut self);
    fn visit_1(&mut self);
}


fn createNode<'a>(id: int, ty: NodeType, children: ~[FtlNode<'a>]) -> FtlNode<'a> {
    let mut node = FtlNode{
        id: id,
        ty: ty,
        attribs: HashMap::new(),
        kids: children
    };

    node.attribs.insert("numin",id);
    node
}

pub fn generateTree<'a>() -> FtlNode<'a> {
    let leafs1 = ~[Leaf{base: Node{num: 0}, numin: 1, id: 1},Leaf{base: Node{num: 0}, numin: 2, id: 2},Leaf{base: Node{num: 0}, numin: 3, id: 3}];
    let leafs2 = ~[Leaf{base: Node{num: 0}, numin: 4, id: 4},Leaf{base: Node{num: 0}, numin: 5, id: 5}]

    let parents = ~[MidNode{base: Node{num: 0}, kids: leafs1, id: 6},MidNode{base: Node{num: 0}, kids: leafs2, id: 7}]
    let parents = ~[createNode(6,midnode,leafs1),createNode(7,midnode,leafs2)];
    MidNode{base: Node{num: 0}, kids: parents, id: 8};
    createNode(8,midnode,parents)
}*/
