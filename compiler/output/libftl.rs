use std::hashmap::HashMap;
use std::util;
use std::cast;
use layout;
use layout::model::MaybeAuto::;
use layout::box_::Box;
use layout::flow::{Flow, BlockFlowClass,InlineFlowClass};
use servo_util::geometry::Au;
use extra::arc::Arc;
use geom::{Point2D, Rect, SideOffsets2D, Size2D};
use style::{ComputedValues};

pub fn isEven( num: int ) -> bool {
    num % 2 == 0
}

pub fn base<'a,I>(node: &'a mut layout::ftl_layout::FtlNode) -> &'a mut I {
    unsafe {
        let (_, ptr) : (uint, uint) = cast::transmute(node);
        cast::transmute(ptr)
    }
}

pub fn getHeight(flowbox: &Option<Box>) -> Au {
    for b in flowbox.iter() {
        return MaybeAuto::from_style(b.style.get().Box.get().height,
                                     Au::new(0)).specified_or_zero();
    }
    Au(0)
}

pub fn makeRect(x: Au, y: Au, width: Au, height: Au) -> Rect<Au> {
    Rect(Point2D(x, y),
         Size2D(width, height))
}

pub fn rectHeight(rect: Rect<Au>) -> Au {
    rect.size.height
}

pub fn inherit(visit: |&mut layout::ftl_layout::FtlNode|, node: &mut layout::ftl_layout::FtlNode) {
    visit(node);
    node.with_all_children(|child| {
        inherit(|node: &mut layout::ftl_layout::FtlNode| visit(node), child);
    });
}

pub fn synthesize(visit: |&mut layout::ftl_layout::FtlNode|,node: &mut layout::ftl_layout::FtlNode) {
    node.with_all_children(|child| {
        synthesize(|node: &mut layout::ftl_layout::FtlNode| visit(node), child);
    });
    visit(node);
}

pub fn log(logstr: &str){
    println!("{:s}",logstr)
}

pub fn as_ftl_node<'a>(flow: &'a mut Flow) -> &'a mut layout::ftl_layout::FtlNode {
    match flow.class() {
        BlockFlowClass => flow.as_block() as &'a mut layout::ftl_layout::FtlNode,
        InlineFlowClass => flow.as_inline() as &'a mut layout::ftl_layout::FtlNode,
    }
}