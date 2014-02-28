use std::cast;
use flow::Flow;

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

pub fn as_ftl_node<'a>(flow: &'a mut Flow) -> &'a mut FtlNode {
    match flow.class() {
        BlockFlowClass => flow.as_block() as &'a mut FtlNode,
        InlineFlowClass => flow.as_inline() as &'a mut FtlNode,
    }
}
