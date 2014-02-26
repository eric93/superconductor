extern mod libftl;
use libftl::{base,log,inherit,synthesize,FtlNode};
use std::int::to_str_bytes;
use std::util;

pub struct Leaf {
    base: Node,
    numin: int,
    id : int,
}

pub struct MidNode {
    base: Node,
    kids: ~[~FtlNode],
    id : int,
}

pub struct Node {
    num: int,
}

//@type action
fn leaf_num ( _ale_arg0: int) -> int { _ale_arg0 }
impl FtlNode for Leaf{
 fn with_all_children(&mut self, func: |&mut FtlNode|) {
 }
 fn visit_0(&mut self) {
  log("  visit  Leaf (id: " + self.id.to_str() + "): " + "0");
  self.base.num = (leaf_num(self.numin));
  log("    leaf_num: " + self.base.num.to_str());
  log("        numIn: " + self.numin.to_str());
 
 }
 fn visit_1(&mut self) {
  log("  visit  Leaf (id: " + self.id.to_str() + "): " + "1");
 
 }
}

impl FtlNode for MidNode{
 fn with_all_children(&mut self, func: |&mut FtlNode|) {
  for child in self.kids.mut_iter() {
    func(*child);
  }
 }
 fn visit_0(&mut self) {
  log("  visit  MidNode (id: " + self.id.to_str() + "): " + "0");
 
 }
 fn visit_1(&mut self) {
  log("  visit  MidNode (id: " + self.id.to_str() + "): " + "1");

  let mut children = util::replace(&mut self.kids, ~[]);
  for child in children.mut_iter() {
  let child: &mut Node  = base(*child);
  }
  self.kids = children;

  let num_init = ((0));
  self.base.num = (num_init);
  log("      init num: " + num_init.to_str());
  log("    last init num: " + self.base.num.to_str());
    let mut children = util::replace(&mut self.kids, ~[]);
  for child in children.mut_iter() {
  let child: &mut Node  = base(*child);
      self.base.num = ((self.base.num + child.num ));
      log("         step num: " + self.base.num.to_str());
  }
  self.kids = children;
 
 }
}


fn leaf(id: int) -> ~FtlNode {
    ~Leaf{
        base: Node{ num: 0 },
        numin: id,
        id: id
    } as ~FtlNode

}

fn mid_node(id: int, kids: ~[~FtlNode]) -> ~FtlNode {
    ~MidNode{
        base: Node{ num: 0 },
        kids: kids,
        id: id
    } as ~FtlNode
}
fn generateTree() -> ~FtlNode {
    let leafs1 = ~[leaf(1),leaf(2),leaf(3)];
    let leafs2 = ~[leaf(4),leaf(5)];
    let parents = ~[mid_node(6,leafs1),mid_node(7,leafs2)];

    ~MidNode{base: Node{num: 0}, kids: parents, id: 8} as ~FtlNode
}

fn main() {
    layout(generateTree());
}
fn layout (root: &mut FtlNode) {
  inherit(|node| node.visit_0(), root);
  synthesize(|node| node.visit_1(), root);
}
