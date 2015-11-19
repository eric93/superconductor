function root_child_maxWidth ( _ale_arg0) { return _ale_arg0; }
function root_child_childNum () { return 0; }
function root_child_rightPadding () { return 0; }
function root_child_relX () { return 0; }
function root_child_oldLineH () { return 0; }
function root_child_minY () { return 10; }
function root_child_minX () { return 10; }
function root_child_canvas ( _ale_arg2,  _ale_arg5,  _ale_arg0,  _ale_arg4,  _ale_arg1,  _ale_arg3) { return paintStart(_ale_arg0 + _ale_arg1 + 10, _ale_arg2 + _ale_arg3 + 10) + paintLine(_ale_arg0 - 5, _ale_arg2 - 5, _ale_arg0 + _ale_arg1 + 5, _ale_arg2 - 5, _ale_arg4) + paintLine(_ale_arg0 + _ale_arg1 + 5, _ale_arg2 - 5, _ale_arg0 + _ale_arg1 + 5, _ale_arg2 + _ale_arg3, _ale_arg4) + paintLine(_ale_arg0 + _ale_arg5 + 5, _ale_arg2 + _ale_arg3, _ale_arg0 - 5, _ale_arg2 + _ale_arg3, _ale_arg4) + paintLine(_ale_arg0 - 5, _ale_arg2 + _ale_arg3, _ale_arg0 - 5, _ale_arg2 - 5, _ale_arg4); }
function root_child_relY () { return 0; }
function wrapbox_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function wrapbox_absRightX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function wrapbox_intrinsHeight ( _ale_arg0) { return _ale_arg0 == 0 ? 10 : 0; }
function wrapbox_absRightY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function wrapbox_render ( _ale_arg5,  _ale_arg6,  _ale_arg3,  _ale_arg4,  _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg7) { return _ale_arg0 + paintLine(_ale_arg1, _ale_arg2, _ale_arg1, _ale_arg2 + _ale_arg3, _ale_arg4) + paintLine(_ale_arg1, _ale_arg2, _ale_arg1 + 2, _ale_arg2, _ale_arg4) + paintLine(_ale_arg1, _ale_arg2 + _ale_arg3, _ale_arg1 + 2, _ale_arg2 + _ale_arg3, _ale_arg4) + paintLine(_ale_arg5, _ale_arg6, _ale_arg5, _ale_arg6 + _ale_arg7, _ale_arg4) + paintLine(_ale_arg5, _ale_arg6, _ale_arg5 - 2, _ale_arg6, _ale_arg4) + paintLine(_ale_arg5, _ale_arg6 + _ale_arg7, _ale_arg5 - 2, _ale_arg6 + _ale_arg7, _ale_arg4); }
function wrapbox_childs_minY ( _ale_arg0) { return _ale_arg0; }
function wrapbox_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function wrapbox_childs_minX ( _ale_arg0) { return _ale_arg0; }
function wrapbox_computedHeight ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + 5; }
function wrapbox_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function leaf_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function leaf_intrinsPrefWidth ( _ale_arg0) { return _ale_arg0; }
function leaf_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function leaf_computedHeight ( _ale_arg0) { return _ale_arg0; }
function leaf_relRightX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function leaf_firstChildWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function leaf_maxLineH ( _ale_arg0,  _ale_arg1) { return max(_ale_arg0, _ale_arg1); }
function leaf_intrinsHeight ( _ale_arg0) { return _ale_arg0; }
function leaf_render ( _ale_arg5,  _ale_arg3,  _ale_arg4,  _ale_arg0,  _ale_arg2,  _ale_arg1) { return _ale_arg0 + paintLine(_ale_arg1, _ale_arg2, _ale_arg1 + _ale_arg3, _ale_arg2, _ale_arg4) + paintLine(_ale_arg1 + _ale_arg3, _ale_arg2, _ale_arg1 + _ale_arg3, _ale_arg2 + _ale_arg5, _ale_arg4) + paintLine(_ale_arg1 + _ale_arg3, _ale_arg2 + _ale_arg5, _ale_arg1, _ale_arg2 + _ale_arg5, _ale_arg4) + paintLine(_ale_arg1, _ale_arg2 + _ale_arg5, _ale_arg1, _ale_arg2, _ale_arg4); }
function leaf_intrinsMinWidth ( _ale_arg0) { return _ale_arg0; }
function leaf_relRightY ( _ale_arg0) { return _ale_arg0; }
///// pass /////
function visit_leaf_0(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 0);
  setAttribSafe(node, "computedheight", leaf_computedHeight(getInputAttribSafe(node, "height", '10')));
  logger.log("    leaf_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '10'));
  setAttribSafe(node, "firstchildwidth", leaf_firstChildWidth(getAttribSafe(node, "rightpadding"), getInputAttribSafe(node, "width", '10')));
  logger.log("    leaf_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '10'));
  setAttribSafe(node, "intrinsheight", leaf_intrinsHeight(getInputAttribSafe(node, "height", '10')));
  logger.log("    leaf_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '10'));
  setAttribSafe(node, "intrinsminwidth", leaf_intrinsMinWidth(getInputAttribSafe(node, "width", '10')));
  logger.log("    leaf_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '10'));
  setAttribSafe(node, "intrinsprefwidth", leaf_intrinsPrefWidth(getInputAttribSafe(node, "width", '10')));
  logger.log("    leaf_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '10'));
  return true;
}
function visit_root_0(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"child"), "childnum", root_child_childNum());
  logger.log("    root_child_childNum: " + getAttribSafe(getChildByRefName(node,"child"), "childnum"));
  setAttribSafe(getChildByRefName(node,"child"), "maxwidth", root_child_maxWidth(getInputAttribSafe(node, "maxwidth", '500')));
  logger.log("    root_child_maxWidth: " + getAttribSafe(getChildByRefName(node,"child"), "maxwidth"));
  logger.log("        maxWidth: " + getInputAttribSafe(node, "maxwidth", '500'));
  setAttribSafe(getChildByRefName(node,"child"), "minx", root_child_minX());
  logger.log("    root_child_minX: " + getAttribSafe(getChildByRefName(node,"child"), "minx"));
  setAttribSafe(getChildByRefName(node,"child"), "miny", root_child_minY());
  logger.log("    root_child_minY: " + getAttribSafe(getChildByRefName(node,"child"), "miny"));
  setAttribSafe(getChildByRefName(node,"child"), "oldlineh", root_child_oldLineH());
  logger.log("    root_child_oldLineH: " + getAttribSafe(getChildByRefName(node,"child"), "oldlineh"));
  setAttribSafe(getChildByRefName(node,"child"), "relx", root_child_relX());
  logger.log("    root_child_relX: " + getAttribSafe(getChildByRefName(node,"child"), "relx"));
  setAttribSafe(getChildByRefName(node,"child"), "rely", root_child_relY());
  logger.log("    root_child_relY: " + getAttribSafe(getChildByRefName(node,"child"), "rely"));
  setAttribSafe(getChildByRefName(node,"child"), "rightpadding", root_child_rightPadding());
  logger.log("    root_child_rightPadding: " + getAttribSafe(getChildByRefName(node,"child"), "rightpadding"));
  return true;
}
function visit_wrapbox_0(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 0);

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
      setAttribSafe(child, "minx", (getAttribSafe(node, "minx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(node, "miny") ));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();

  setAttribSafe(node, "intrinsheight", wrapbox_intrinsHeight(getAttribSafe(node, "numchilds")));
  logger.log("    wrapbox_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        numChilds$$: " + getAttribSafe(node, "numchilds"));

  setAttribSafe(node, "childs_rightpadding_init", (0));
  setAttribSafe(node, "childs_rightpadding_last", getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("      init childs@rightPadding: " + getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("    last init childs_rightpadding_last: " + getAttribSafe(node, "childs_rightpadding_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? (getAttribSafe(node, "rightpadding") + 5) : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

  return true;
}
///// pass /////
function visit_leaf_1(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 1);
  return true;
}
function visit_root_1(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 1);
  return true;
}
function visit_wrapbox_1(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "firstchildwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 0)));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
    setAttribSafe(node, "intrinsminwidth_init", (10));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 5)));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? 5 + getAttribSafe(child, "firstchildwidth") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(child, "intrinsminwidth") + 10, getAttribSafe(node, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
///// pass /////
function visit_leaf_2(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 2);
  setAttribSafe(node, "absx", leaf_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    leaf_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", leaf_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    leaf_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "maxlineh", leaf_maxLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "intrinsheight")));
  logger.log("    leaf_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "relrightx", leaf_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "intrinsprefwidth")));
  logger.log("    leaf_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  setAttribSafe(node, "relrighty", leaf_relRightY(getAttribSafe(node, "rely")));
  logger.log("    leaf_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  return true;
}
function visit_root_2(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 2);
  visit_2(getChildByRefName(node, "child")); //recur
  logger.log("  resume visit Root: " + 2);
  setAttribSafe(getChildByRefName(node,"child"), "canvas", root_child_canvas(getAttribSafe(getChildByRefName(node,"child"), "miny"), getInputAttribSafe(node, "maxwidth", '500'), getAttribSafe(getChildByRefName(node,"child"), "minx"), getInputAttribSafe(node, "borderc", '#000000'), getInputAttribSafe(node, "maxwidth", '500'), getAttribSafe(getChildByRefName(node,"child"), "computedheight")));
  logger.log("    root_child_canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  logger.log("        child@minY: " + getAttribSafe(getChildByRefName(node,"child"), "miny"));
  logger.log("        maxwidth: " + getInputAttribSafe(node, "maxwidth", '500'));
  logger.log("        child@minX: " + getAttribSafe(getChildByRefName(node,"child"), "minx"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#000000'));
  logger.log("        maxWidth: " + getInputAttribSafe(node, "maxwidth", '500'));
  logger.log("        child@computedHeight: " + getAttribSafe(getChildByRefName(node,"child"), "computedheight"));
  return true;
}
function visit_wrapbox_2(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 2);
  setAttribSafe(node, "absx", wrapbox_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    wrapbox_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", wrapbox_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    wrapbox_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));

  setAttribSafe(node, "childs_relx_init", (getAttribSafe(node, "relx") ));
  setAttribSafe(node, "childs_relx_last", getAttribSafe(node, "childs_relx_init"));
  logger.log("      init childs@relX: " + getAttribSafe(node, "childs_relx_init"));
  logger.log("    last init childs_relx_last: " + getAttribSafe(node, "childs_relx_last"));
    setAttribSafe(node, "childs_oldlineh_init", (getAttribSafe(node, "oldlineh") ));
  setAttribSafe(node, "childs_oldlineh_last", getAttribSafe(node, "childs_oldlineh_init"));
  logger.log("      init childs@oldLineH: " + getAttribSafe(node, "childs_oldlineh_init"));
  logger.log("    last init childs_oldlineh_last: " + getAttribSafe(node, "childs_oldlineh_last"));
    setAttribSafe(node, "childs_rely_init", (getAttribSafe(node, "rely") ));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx"))) + 5 + (getAttribSafe(child, "firstchildwidth")) > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx"))) + 5));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : (getAttribSafe(child, "relx") == 0 ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh"))))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh"))) + 5 : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      visit_2(child); //recur
      logger.log("  resume loop visit WrapBox: " + 2);
    }
  })();


  setAttribSafe(node, "firstlinebreakpos_init", ((- 1)));
  setAttribSafe(node, "firstlinebreakpos", getAttribSafe(node, "firstlinebreakpos_init"));
  logger.log("      init firstLineBreakPos: " + getAttribSafe(node, "firstlinebreakpos_init"));
  logger.log("    last init firstlinebreakpos: " + getAttribSafe(node, "firstlinebreakpos"));
    setAttribSafe(node, "maxlineh_init", (max(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "intrinsheight"))));
  setAttribSafe(node, "maxlineh", getAttribSafe(node, "maxlineh_init"));
  logger.log("      init maxLineH: " + getAttribSafe(node, "maxlineh_init"));
  logger.log("    last init maxlineh: " + getAttribSafe(node, "maxlineh"));
    setAttribSafe(node, "relrightx_init", (getAttribSafe(node, "relx") + getAttribSafe(node, "intrinsprefwidth") ));
  setAttribSafe(node, "relrightx", getAttribSafe(node, "relrightx_init"));
  logger.log("      init relRightX: " + getAttribSafe(node, "relrightx_init"));
  logger.log("    last init relrightx: " + getAttribSafe(node, "relrightx"));
    setAttribSafe(node, "relrighty_init", (getAttribSafe(node, "rely") ));
  setAttribSafe(node, "relrighty", getAttribSafe(node, "relrighty_init"));
  logger.log("      init relRightY: " + getAttribSafe(node, "relrighty_init"));
  logger.log("    last init relrighty: " + getAttribSafe(node, "relrighty"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstlinebreakpos", ((getAttribSafe(node, "firstlinebreakpos") == (- 1)) ? (getAttribSafe(child, "childnum") == 1 ? (- 1) : (getAttribSafe(child, "relrighty") > getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty")) ? (getAttribSafe(child, "childnum") - 1) : (- 1))) : getAttribSafe(node, "firstlinebreakpos") ));
      logger.log("         step firstLineBreakPos: " + getAttribSafe(node, "firstlinebreakpos"));
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") + 5));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
    }
  })();

  setAttribSafe(node, "absrightx", wrapbox_absRightX(getAttribSafe(node, "relrightx"), getAttribSafe(node, "minx")));
  logger.log("    wrapbox_absRightX: " + getAttribSafe(node, "absrightx"));
  logger.log("        relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absrighty", wrapbox_absRightY(getAttribSafe(node, "relrighty"), getAttribSafe(node, "miny")));
  logger.log("    wrapbox_absRightY: " + getAttribSafe(node, "absrighty"));
  logger.log("        relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "computedheight", wrapbox_computedHeight(getAttribSafe(node, "relrighty"), getAttribSafe(node, "maxlineh")));
  logger.log("    wrapbox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        maxLineH: " + getAttribSafe(node, "maxlineh"));

  setAttribSafe(node, "firstlineh_init", ((getAttribSafe(node, "firstlinebreakpos") == (- 1) ? getAttribSafe(node, "maxlineh") : 0)));
  setAttribSafe(node, "firstlineh", getAttribSafe(node, "firstlineh_init"));
  logger.log("      init firstLineH: " + getAttribSafe(node, "firstlineh_init"));
  logger.log("    last init firstlineh: " + getAttribSafe(node, "firstlineh"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstlineh", (getAttribSafe(node, "firstlineh") + (getAttribSafe(child, "childnum") == getAttribSafe(node, "firstlinebreakpos") ? getAttribSafe(child, "maxlineh") : 0)));
      logger.log("         step firstLineH: " + getAttribSafe(node, "firstlineh"));
    }
  })();

  return true;
}
///// pass /////
function visit_leaf_3(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 3);
  setAttribSafe(node, "render", leaf_render(getInputAttribSafe(node, "height", '10'), getInputAttribSafe(node, "width", '10'), getInputAttribSafe(node, "borderc", '#0000FF'), getAttribSafe(node, "canvas"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx")));
  logger.log("    leaf_render: " + getAttribSafe(node, "render"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '10'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '10'));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#0000FF'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  return true;
}
function visit_root_3(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 3);
  return true;
}
function visit_wrapbox_3(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "render", wrapbox_render(getAttribSafe(node, "absrightx"), getAttribSafe(node, "absrighty"), getAttribSafe(node, "firstlineh"), getInputAttribSafe(node, "borderc", '#00FF00'), getAttribSafe(node, "canvas"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "maxlineh")));
  logger.log("    wrapbox_render: " + getAttribSafe(node, "render"));
  logger.log("        absRightX: " + getAttribSafe(node, "absrightx"));
  logger.log("        absRightY: " + getAttribSafe(node, "absrighty"));
  logger.log("        firstLineH: " + getAttribSafe(node, "firstlineh"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#00FF00'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        maxLineH: " + getAttribSafe(node, "maxlineh"));

  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_0 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        return visit_root_0(node);
      case "leaf":
        return visit_leaf_0(node);
      case "wrapbox":
        return visit_wrapbox_0(node);
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
      case "leaf":
        return visit_leaf_1(node);
      case "wrapbox":
        return visit_wrapbox_1(node);
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
      case "leaf":
        return visit_leaf_2(node);
      case "wrapbox":
        return visit_wrapbox_2(node);
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
      case "leaf":
        return visit_leaf_3(node);
      case "wrapbox":
        return visit_wrapbox_3(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function layout (root) {
  inherit(visit_0, root);
  synthesize(visit_1, root);
  visit_2(root); //inorder visitors handle recursion 
  inherit(visit_3, root);
}
