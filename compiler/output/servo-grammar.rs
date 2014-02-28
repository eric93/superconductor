extern mod libftl;
use libftl::{base,Node,log,MidNode,Leaf,inherit,synthesize};
use std::int::to_str_bytes;
use std::util;
//@type action
fn inlineflow_height () -> Au { 0 }
//@type action
fn blockflow_box_ ( _ale_arg0: Au) -> Au { boxVal(_ale_arg0) }
//@type action
fn blockflow_my_height ( _ale_arg0: Au) -> Au { getHeight(_ale_arg0) }
//@type action
fn blockflow_height ( _ale_arg0: Au,  _ale_arg1: Au) -> Au { if ((_ale_arg0 == Au(0))) {_ale_arg1} else {_ale_arg0} }
impl FtlNode for InlineFlow{
 fn with_all_children(&mut self, func: |&mut FtlNode|) {
 }
 fn visit_0(&mut self) {
  log("  visit  InlineFlow (id: " + self.id.to_str() + "): " + "0");
  self.base.height = (inlineflow_height());
  log("    inlineflow_height: " + self.base.height.to_str());
 
 }
 fn visit_1(&mut self) {
  log("  visit  InlineFlow (id: " + self.id.to_str() + "): " + "1");
 
 }
 fn visit_2(&mut self) {
  log("  visit  InlineFlow (id: " + self.id.to_str() + "): " + "2");
 
 }
}

impl FtlNode for BlockFlow{
 fn with_all_children(&mut self, func: |&mut FtlNode|) {
  for child in self.flow_children.mut_iter() {
    func(*child);
  }
 }
 fn visit_0(&mut self) {
  log("  visit  BlockFlow (id: " + self.id.to_str() + "): " + "0");
  self.my_height = (blockflow_my_height(self.style));
  log("    blockflow_my_height: " + self.my_height.to_str());
  log("        style: " + self.style.to_str());
 
 }
 fn visit_1(&mut self) {
  log("  visit  BlockFlow (id: " + self.id.to_str() + "): " + "1");

  let flow_children_bottom_init = ((1));
  let mut flow_children_bottom_last = (flow_children_bottom_init);
  log("      init flow_children@bottom: " + flow_children_bottom_init.to_str());
  log("    last init flow_children_bottom_last: " + self.base.flow_children_bottom_last.to_str());
  let mut children = util::replace(&mut self.flow_children, ~[]);
  for child in children.mut_iter() {
      let child: &mut BaseFlow  = base(as_ftl_node(child));
      child.bottom = ((if first { flow_children_bottom_init } else { flow_children_bottom_last } + child.height ));
      flow_children_bottom_last = child.bottom;
      log("         step flow_children@bottom: " + child.bottom.to_str());
  }
  self.flow_children = children;

  let flow_children_position_init = ((0));
  let mut flow_children_position_last = (flow_children_position_init);
  log("      init flow_children@position: " + flow_children_position_init.to_str());
  log("    last init flow_children_position_last: " + self.base.flow_children_position_last.to_str());
    let childs_height_init = ((0));
  self.childs_height = (childs_height_init);
  log("      init childs_height: " + childs_height_init.to_str());
  log("    last init childs_height: " + self.childs_height.to_str());
  let mut children = util::replace(&mut self.flow_children, ~[]);
  for child in children.mut_iter() {
      let child: &mut BaseFlow  = base(as_ftl_node(child));
      child.position = ((Rect(Au(0), child.bottom - child.height, Au(100), child.height)));
      flow_children_position_last = child.position;
      log("         step flow_children@position: " + child.position.to_str());
      self.childs_height = ((self.base.childs_height + rectHeight(child.position)));
      log("         step childs_height: " + self.childs_height.to_str());
  }
  self.flow_children = children;
  self.base.height = (blockflow_height(self.my_height, self.childs_height));
  log("    blockflow_height: " + self.base.height.to_str());
  log("        my_height: " + self.my_height.to_str());
  log("        childs_height: " + self.childs_height.to_str());
 
 }
 fn visit_2(&mut self) {
  log("  visit  BlockFlow (id: " + self.id.to_str() + "): " + "2");
  self.box_ = (blockflow_box_(self.base.position));
  log("    blockflow_box_: " + self.box_.to_str());
  log("        position: " + self.base.position.to_str());
 
 }
}

fn main() {
    layout(&mut generateTree());
}
fn layout (root: &mut FtlNode) {
  inherit(|node| node.visit_0(), root);
  synthesize(|node| node.visit_1(), root);
  inherit(|node| node.visit_2(), root);
}
