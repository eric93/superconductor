function root_canvas () { return 0; }
function root_child_canvas ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return paintStart(_ale_arg0, _ale_arg1, _ale_arg2); }
function root_height ( _ale_arg0) { return _ale_arg0; }
function root_width ( _ale_arg0) { return _ale_arg0; }
function root_composite ( _ale_arg0) { return paintDone(_ale_arg0); }
function img_width ( _ale_arg2,  _ale_arg3,  _ale_arg0,  _ale_arg1) { return 2 * _ale_arg0 + 2 * _ale_arg1 + 2 * _ale_arg2 + getImageWidth(_ale_arg3); }
function img_w ( _ale_arg0) { return _ale_arg0; }
function img_composite ( _ale_arg6,  _ale_arg5,  _ale_arg7,  _ale_arg4,  _ale_arg0,  _ale_arg8,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return paintImg(_ale_arg0, _ale_arg1, _ale_arg2) + paintRect(_ale_arg3, _ale_arg3, _ale_arg4 - 2 * _ale_arg3, _ale_arg5, _ale_arg6) + paintRect(_ale_arg3, _ale_arg3, _ale_arg5, _ale_arg7 - 2 * _ale_arg3, _ale_arg6) + paintRect(_ale_arg4 - _ale_arg3, _ale_arg3, _ale_arg5, _ale_arg7 - 2 * _ale_arg3, _ale_arg6) + paintRect(_ale_arg3, _ale_arg7 - _ale_arg3, _ale_arg4 - 2 * _ale_arg3, _ale_arg5, _ale_arg6) + _ale_arg8; }
function img_y ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function img_x ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function img_height ( _ale_arg2,  _ale_arg3,  _ale_arg0,  _ale_arg1) { return 2 * _ale_arg0 + 2 * _ale_arg1 + 2 * _ale_arg2 + getImageHeight(_ale_arg3); }
function img_h ( _ale_arg0) { return _ale_arg0; }
///// pass /////
function visit_root_0(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 0);
  setAttribSafe(node, "canvas", root_canvas());
  logger.log("    root_canvas: " + getAttribSafe(node, "canvas"));
  return true;
}
function visit_img_0(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 0);
  setAttribSafe(node, "height", img_height(getInputAttribSafe(node, "borderwidth", '0'), getAttribSafe(node, "imagehandle"), getInputAttribSafe(node, "margin", '0'), getInputAttribSafe(node, "padding", '0')));
  logger.log("    img_height: " + getAttribSafe(node, "height"));
  logger.log("        borderwidth: " + getInputAttribSafe(node, "borderwidth", '0'));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  logger.log("        margin: " + getInputAttribSafe(node, "margin", '0'));
  logger.log("        padding: " + getInputAttribSafe(node, "padding", '0'));
  setAttribSafe(node, "h", img_h(getAttribSafe(node, "height")));
  logger.log("    img_h: " + getAttribSafe(node, "h"));
  logger.log("        height: " + getAttribSafe(node, "height"));
  setAttribSafe(node, "width", img_width(getInputAttribSafe(node, "borderwidth", '0'), getAttribSafe(node, "imagehandle"), getInputAttribSafe(node, "margin", '0'), getInputAttribSafe(node, "padding", '0')));
  logger.log("    img_width: " + getAttribSafe(node, "width"));
  logger.log("        borderwidth: " + getInputAttribSafe(node, "borderwidth", '0'));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  logger.log("        margin: " + getInputAttribSafe(node, "margin", '0'));
  logger.log("        padding: " + getInputAttribSafe(node, "padding", '0'));
  setAttribSafe(node, "x", img_x(getInputAttribSafe(node, "borderwidth", '0'), getInputAttribSafe(node, "margin", '0'), getInputAttribSafe(node, "padding", '0')));
  logger.log("    img_x: " + getAttribSafe(node, "x"));
  logger.log("        borderwidth: " + getInputAttribSafe(node, "borderwidth", '0'));
  logger.log("        margin: " + getInputAttribSafe(node, "margin", '0'));
  logger.log("        padding: " + getInputAttribSafe(node, "padding", '0'));
  setAttribSafe(node, "w", img_w(getAttribSafe(node, "width")));
  logger.log("    img_w: " + getAttribSafe(node, "w"));
  logger.log("        width: " + getAttribSafe(node, "width"));
  setAttribSafe(node, "y", img_y(getInputAttribSafe(node, "borderwidth", '0'), getInputAttribSafe(node, "margin", '0'), getInputAttribSafe(node, "padding", '0')));
  logger.log("    img_y: " + getAttribSafe(node, "y"));
  logger.log("        borderwidth: " + getInputAttribSafe(node, "borderwidth", '0'));
  logger.log("        margin: " + getInputAttribSafe(node, "margin", '0'));
  logger.log("        padding: " + getInputAttribSafe(node, "padding", '0'));
  return true;
}
///// pass /////
function visit_root_1(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 1);
  setAttribSafe(node, "height", root_height(getAttribSafe(getChildByRefName(node,"child"), "height")));
  logger.log("    root_height: " + getAttribSafe(node, "height"));
  logger.log("        child@height: " + getAttribSafe(getChildByRefName(node,"child"), "height"));
  setAttribSafe(node, "width", root_width(getAttribSafe(getChildByRefName(node,"child"), "width")));
  logger.log("    root_width: " + getAttribSafe(node, "width"));
  logger.log("        child@width: " + getAttribSafe(getChildByRefName(node,"child"), "width"));
  setAttribSafe(getChildByRefName(node,"child"), "canvas", root_child_canvas(getAttribSafe(node, "height"), getAttribSafe(node, "width"), getAttribSafe(node, "canvas")));
  logger.log("    root_child_canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  logger.log("        height: " + getAttribSafe(node, "height"));
  logger.log("        width: " + getAttribSafe(node, "width"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  return true;
}
function visit_img_1(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 1);
  return true;
}
///// pass /////
function visit_root_2(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 2);
  return true;
}
function visit_img_2(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 2);
  setAttribSafe(node, "composite", img_composite(getAttribSafe(node, "bordercolor"), getInputAttribSafe(node, "borderwidth", '0'), getAttribSafe(node, "height"), getAttribSafe(node, "width"), getAttribSafe(node, "imagehandle"), getAttribSafe(node, "canvas"), getInputAttribSafe(node, "margin", '0'), getAttribSafe(node, "y"), getAttribSafe(node, "x")));
  logger.log("    img_composite: " + getAttribSafe(node, "composite"));
  logger.log("        bordercolor: " + getAttribSafe(node, "bordercolor"));
  logger.log("        borderwidth: " + getInputAttribSafe(node, "borderwidth", '0'));
  logger.log("        height: " + getAttribSafe(node, "height"));
  logger.log("        width: " + getAttribSafe(node, "width"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        margin: " + getInputAttribSafe(node, "margin", '0'));
  logger.log("        y: " + getAttribSafe(node, "y"));
  logger.log("        x: " + getAttribSafe(node, "x"));
  return true;
}
///// pass /////
function visit_root_3(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 3);
  setAttribSafe(node, "composite", root_composite(getAttribSafe(getChildByRefName(node,"child"), "composite")));
  logger.log("    root_composite: " + getAttribSafe(node, "composite"));
  logger.log("        child@composite: " + getAttribSafe(getChildByRefName(node,"child"), "composite"));
  return true;
}
function visit_img_3(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 3);
  return true;
}
function visit_0 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        return visit_root_0(node);
      case "img":
        return visit_img_0(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_1 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        return visit_root_1(node);
      case "img":
        return visit_img_1(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_2 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        return visit_root_2(node);
      case "img":
        return visit_img_2(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_3 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        return visit_root_3(node);
      case "img":
        return visit_img_3(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function layout (root) {
  inherit(visit_0, root);
  synthesize(visit_1, root);
  inherit(visit_2, root);
  synthesize(visit_3, root);
}
