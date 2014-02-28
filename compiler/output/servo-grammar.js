//@type action
function inlineflow_height () { return 0; }
//@type action
function blockflow_box__position ( _ale_arg0) { return _ale_arg0; }
//@type action
function blockflow_my_height ( _ale_arg0) { return getHeight(_ale_arg0); }
//@type action
function blockflow_height ( _ale_arg0,  _ale_arg1) { return (_ale_arg0 == Au(0)) ? _ale_arg1 : _ale_arg0; }
function isInorder(node, pass) {
  switch (pass) {
    case 0:
     throw "did not expect inorder call for pass 0";
    case 1:
     throw "did not expect inorder call for pass 1";
    case 2:
     throw "did not expect inorder call for pass 2";
    default: throw ("unknown pass " + pass);
  }
}
function visit_blockflow_0(node) {
  logger.log("  visit  BlockFlow (id: " + node.id + "): " + 0);
  setAttribSafe(node, "my_height", blockflow_my_height(getAttribSafe(getChildByRefName(node,"box_"), "style")));
  logger.log("    blockflow_my_height: " + getAttribSafe(node, "my_height"));
  logger.log("        box_@style: " + getAttribSafe(getChildByRefName(node,"box_"), "style"));
  return true;
}
function visit_blockflow_1(node) {
  logger.log("  visit  BlockFlow (id: " + node.id + "): " + 1);

  setAttribSafe(node, "flow_children_bottom_init", (1));
  setAttribSafe(node, "flow_children_bottom_last", getAttribSafe(node, "flow_children_bottom_init"));
  logger.log("      init flow_children@bottom: " + getAttribSafe(node, "flow_children_bottom_init"));
  logger.log("    last init flow_children_bottom_last: " + getAttribSafe(node, "flow_children_bottom_last"));
  (function () {
    var children = getChildren(node, "flow_children", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "bottom", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("flow_children_bottom_init") : ("bottom")) + getAttribSafe(child, "height") ));
      logger.log("         step flow_children@bottom: " + getAttribSafe(child, "bottom"));
    }
  })();


  setAttribSafe(node, "flow_children_position_init", (0));
  setAttribSafe(node, "flow_children_position_last", getAttribSafe(node, "flow_children_position_init"));
  logger.log("      init flow_children@position: " + getAttribSafe(node, "flow_children_position_init"));
  logger.log("    last init flow_children_position_last: " + getAttribSafe(node, "flow_children_position_last"));
    setAttribSafe(node, "childs_height_init", (0));
  setAttribSafe(node, "childs_height", getAttribSafe(node, "childs_height_init"));
  logger.log("      init childs_height: " + getAttribSafe(node, "childs_height_init"));
  logger.log("    last init childs_height: " + getAttribSafe(node, "childs_height"));
  (function () {
    var children = getChildren(node, "flow_children", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "position", (Rect(Au(0), getAttribSafe(child, "bottom") - getAttribSafe(child, "height"), Au(100), getAttribSafe(child, "height"))));
      logger.log("         step flow_children@position: " + getAttribSafe(child, "position"));
      setAttribSafe(node, "childs_height", (getAttribSafe(node, "childs_height") + rectHeight(getAttribSafe(child, "position"))));
      logger.log("         step childs_height: " + getAttribSafe(node, "childs_height"));
    }
  })();

  setAttribSafe(node, "height", blockflow_height(getAttribSafe(node, "my_height"), getAttribSafe(node, "childs_height")));
  logger.log("    blockflow_height: " + getAttribSafe(node, "height"));
  logger.log("        my_height: " + getAttribSafe(node, "my_height"));
  logger.log("        childs_height: " + getAttribSafe(node, "childs_height"));
  return true;
}
function visit_blockflow_2(node) {
  logger.log("  visit  BlockFlow (id: " + node.id + "): " + 2);
  setAttribSafe(getChildByRefName(node,"box_"), "position", blockflow_box__position(getAttribSafe(node, "position")));
  logger.log("    blockflow_box__position: " + getAttribSafe(getChildByRefName(node,"box_"), "position"));
  logger.log("        position: " + getAttribSafe(node, "position"));
  return true;
}
function visit_genericbox_0(node) {
  logger.log("  visit  GenericBox (id: " + node.id + "): " + 0);
  return true;
}
function visit_genericbox_1(node) {
  logger.log("  visit  GenericBox (id: " + node.id + "): " + 1);
  return true;
}
function visit_genericbox_2(node) {
  logger.log("  visit  GenericBox (id: " + node.id + "): " + 2);
  return true;
}
function visit_inlineflow_0(node) {
  logger.log("  visit  InlineFlow (id: " + node.id + "): " + 0);
  setAttribSafe(node, "height", inlineflow_height());
  logger.log("    inlineflow_height: " + getAttribSafe(node, "height"));
  return true;
}
function visit_inlineflow_1(node) {
  logger.log("  visit  InlineFlow (id: " + node.id + "): " + 1);
  return true;
}
function visit_inlineflow_2(node) {
  logger.log("  visit  InlineFlow (id: " + node.id + "): " + 2);
  return true;
}
function visit_0 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "blockflow":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockflow_0(node);
      case "inlineflow":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineflow_0(node);
      case "genericbox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_genericbox_0(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_1 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "blockflow":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockflow_1(node);
      case "inlineflow":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineflow_1(node);
      case "genericbox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_genericbox_1(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_2 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "blockflow":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockflow_2(node);
      case "inlineflow":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineflow_2(node);
      case "genericbox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_genericbox_2(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function layout (root) {
  inherit(visit_0, root);
  synthesize(visit_1, root);
  inherit(visit_2, root);
}
