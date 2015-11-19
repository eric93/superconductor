function leafbox_max_w ( _ale_arg0) { return _ale_arg0; }
function leafbox_max_h ( _ale_arg0) { return _ale_arg0; }
function box_l_child_x ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function box_l_child_y ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return _ale_arg0 + (_ale_arg1 / 2) - (_ale_arg2 / 2); }
function box_l_edge_x ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function box_l_edge_y ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1 / 2; }
function box_l_edge_w ( _ale_arg0) { return _ale_arg0; }
function box_l_edge_h () { return 0; }
function box_d_child_x ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + (_ale_arg1 / 2) - (_ale_arg2 / 2); }
function box_d_child_y ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function box_d_edge_x ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1 / 2; }
function box_d_edge_y ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function box_d_edge_w () { return 0; }
function box_d_edge_h ( _ale_arg0) { return _ale_arg0; }
function box_max_w ( _ale_arg3,  _ale_arg1,  _ale_arg0,  _ale_arg2,  _ale_arg4,  _ale_arg5) { return (_ale_arg0 + _ale_arg1 + _ale_arg2) > _ale_arg3 + (_ale_arg4 - _ale_arg5) ? (_ale_arg0 + _ale_arg1 + _ale_arg2) : _ale_arg3 + (_ale_arg4 - _ale_arg5); }
function box_max_h ( _ale_arg3,  _ale_arg2,  _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg0) { return (_ale_arg0 + _ale_arg1 + _ale_arg2) > _ale_arg3 + (_ale_arg4 - _ale_arg5) ? (_ale_arg0 + _ale_arg1 + _ale_arg2) : _ale_arg3 + (_ale_arg4 - _ale_arg5); }
function root_x () { return 0; }
function root_y () { return 0; }
function root_w ( _ale_arg0) { return _ale_arg0; }
function root_h ( _ale_arg0) { return _ale_arg0; }
function root_child_x () { return 0; }
function root_child_y () { return 0; }
///// pass /////
function visit_baseedge_0(node) {
  logger.log("  visit  BaseEdge (id: " + node.id + "): " + 0);
  return true;
}
function visit_root_0(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"child"), "y", root_child_y());
  setAttribSafe(node, "y", root_y());
  setAttribSafe(node, "x", root_x());
  setAttribSafe(getChildByRefName(node,"child"), "x", root_child_x());
  return true;
}
function visit_leafbox_0(node) {
  logger.log("  visit  LeafBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "max_h", leafbox_max_h(getAttribSafe(node, "h")));
  setAttribSafe(node, "max_w", leafbox_max_w(getAttribSafe(node, "w")));
  return true;
}
function visit_box_0(node) {
  logger.log("  visit  Box (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"d_child"), "x", box_d_child_x(getAttribSafe(node, "w"), getAttribSafe(getChildByRefName(node,"d_child"), "w"), getAttribSafe(node, "x")));
  setAttribSafe(getChildByRefName(node,"d_edge"), "x", box_d_edge_x(getAttribSafe(node, "w"), getAttribSafe(node, "x")));
  setAttribSafe(getChildByRefName(node,"l_edge"), "h", box_l_edge_h());
  setAttribSafe(getChildByRefName(node,"l_child"), "y", box_l_child_y(getAttribSafe(getChildByRefName(node,"l_child"), "h"), getAttribSafe(node, "h"), getAttribSafe(node, "y")));
  setAttribSafe(getChildByRefName(node,"l_edge"), "x", box_l_edge_x(getAttribSafe(node, "w"), getAttribSafe(node, "x")));
  setAttribSafe(getChildByRefName(node,"l_child"), "x", box_l_child_x(getInputAttribSafe(getChildByRefName(node, "l_child"), "parent_len", '0'), getAttribSafe(node, "w"), getAttribSafe(node, "x")));
  setAttribSafe(getChildByRefName(node,"d_edge"), "h", box_d_edge_h(getInputAttribSafe(getChildByRefName(node, "d_child"), "parent_len", '0')));
  setAttribSafe(getChildByRefName(node,"d_child"), "y", box_d_child_y(getInputAttribSafe(getChildByRefName(node, "d_child"), "parent_len", '0'), getAttribSafe(node, "h"), getAttribSafe(node, "y")));
  setAttribSafe(getChildByRefName(node,"l_edge"), "y", box_l_edge_y(getAttribSafe(node, "h"), getAttribSafe(node, "y")));
  setAttribSafe(getChildByRefName(node,"l_edge"), "w", box_l_edge_w(getInputAttribSafe(getChildByRefName(node, "l_child"), "parent_len", '0')));
  setAttribSafe(getChildByRefName(node,"d_edge"), "y", box_d_edge_y(getAttribSafe(node, "h"), getAttribSafe(node, "y")));
  setAttribSafe(getChildByRefName(node,"d_edge"), "w", box_d_edge_w());
  return true;
}
///// pass /////
function visit_baseedge_1(node) {
  logger.log("  visit  BaseEdge (id: " + node.id + "): " + 1);
  return true;
}
function visit_root_1(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 1);
  setAttribSafe(node, "h", root_h(getAttribSafe(getChildByRefName(node,"child"), "max_h")));
  setAttribSafe(node, "w", root_w(getAttribSafe(getChildByRefName(node,"child"), "max_w")));
  return true;
}
function visit_leafbox_1(node) {
  logger.log("  visit  LeafBox (id: " + node.id + "): " + 1);
  return true;
}
function visit_box_1(node) {
  logger.log("  visit  Box (id: " + node.id + "): " + 1);
  setAttribSafe(node, "max_h", box_max_h(getAttribSafe(getChildByRefName(node,"l_child"), "max_h"), getAttribSafe(getChildByRefName(node,"d_child"), "max_h"), getInputAttribSafe(getChildByRefName(node, "d_child"), "parent_len", '0'), getAttribSafe(node, "y"), getAttribSafe(getChildByRefName(node,"l_child"), "y"), getAttribSafe(node, "h")));
  setAttribSafe(node, "max_w", box_max_w(getAttribSafe(getChildByRefName(node,"d_child"), "max_w"), getInputAttribSafe(getChildByRefName(node, "l_child"), "parent_len", '0'), getAttribSafe(node, "w"), getAttribSafe(getChildByRefName(node,"l_child"), "max_w"), getAttribSafe(getChildByRefName(node,"d_child"), "x"), getAttribSafe(node, "x")));
  return true;
}
function visit_0 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "baseedge":
        return visit_baseedge_0(node);
      case "root":
        return visit_root_0(node);
      case "box":
        return visit_box_0(node);
      case "leafbox":
        return visit_leafbox_0(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_1 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "baseedge":
        return visit_baseedge_1(node);
      case "root":
        return visit_root_1(node);
      case "box":
        return visit_box_1(node);
      case "leafbox":
        return visit_leafbox_1(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function layout (root) {
  inherit(visit_0, root);
  synthesize(visit_1, root);
}
