function col_childs_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function col_childs_cellNum () { return 0; }
function col_childs_column () { return 0; }
function col_childs_relY () { return 0; }
function col_childs_displayBorder ( _ale_arg0) { return _ale_arg0; }
function col_childs_absY () { return 0; }
function col_childs_row () { return 0; }
function col_childs_availableWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 - 10 + (_ale_arg1 ? 0 : 0); }
function col_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
function col_render ( _ale_arg5,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 + ((! _ale_arg1) ? 0 : (paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3, _ale_arg5))); }
function col_childs_relX ( _ale_arg0) { return 5 + (_ale_arg0 ? 0 : 0); }
function col_childs_relBotY () { return 0; }
function col_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function top_child_relY () { return 0; }
function top_child_availableWidth () { return getPageWidth() - 15; }
function top_child_canvas ( _ale_arg0,  _ale_arg1) { return paintStart(_ale_arg0, _ale_arg1); }
function top_child_absY () { return 0; }
function top_child_displayBorder ( _ale_arg0) { return _ale_arg0; }
function top_child_relX () { return 0; }
function top_child_lineH () { return 0; }
function top_child_absX () { return 0; }
function top_child_relBotY () { return 0; }
function top_child_relRightX () { return 0; }
function leaf_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
function leaf_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function leaf_intrinsHeight () { return 10; }
function leaf_intrinsMinWidth () { return 10; }
function leaf_render ( _ale_arg5,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 + ((! _ale_arg1) ? 0 : (paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3, _ale_arg5))); }
function leaf_intrinsPrefWidth () { return 10; }
function img_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
function img_intrinsPrefWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function img_intrinsHeight ( _ale_arg0) { return getImageHeight(_ale_arg0); }
function img_render ( _ale_arg3,  _ale_arg0,  _ale_arg2,  _ale_arg1) { return _ale_arg0 + paintImg(_ale_arg1, _ale_arg2, _ale_arg3); }
function img_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function img_intrinsMinWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function cols_cols_colCount ( _ale_arg0) { return _ale_arg0; }
function cols_cols_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function cols_cols_absY ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function cols_cols_displayBorder ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + (_ale_arg1 ? 0 : 0); }
function cols_cols_availableWidth ( _ale_arg5,  _ale_arg1,  _ale_arg3,  _ale_arg2,  _ale_arg0,  _ale_arg4) { return _ale_arg0 + (_ale_arg1) / _ale_arg2 + (_ale_arg3 == 0 ? 0 : _ale_arg4 / _ale_arg3) + (_ale_arg5 ? 0 : 0); }
function cols_cols_tableContentHeight ( _ale_arg0) { return _ale_arg0; }
function cols_cols_relY ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function cols_cols_cellsReady ( _ale_arg0) { return _ale_arg0; }
function cols_cols_borderc ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + (_ale_arg1 ? 0 : 0); }
function textbox_renderColor ( _ale_arg0,  _ale_arg1) { return (! isEmptyColor(_ale_arg0)) ? valueColor(_ale_arg0) : _ale_arg1; }
function textbox_numberLines ( _ale_arg0,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg1) { return getNumberLines(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5); }
function textbox_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function textbox_renderFontSize ( _ale_arg1,  _ale_arg0) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function textbox_intrinsMinWidth ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getMaxWordW(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_metrics () { return 0; }
function textbox_render ( _ale_arg9,  _ale_arg8,  _ale_arg1,  _ale_arg10,  _ale_arg7,  _ale_arg3,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg4,  _ale_arg2) { return _ale_arg0 + paintParagraph(_ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg6, _ale_arg7, _ale_arg8, _ale_arg9, _ale_arg10); }
function textbox_lineHeight ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getLineHeight(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_intrinsPrefWidth ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getSumWordW(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_inhFontSize () { return 10; }
function textbox_intrinsHeight ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return _ale_arg0 * (_ale_arg1 + _ale_arg2) - _ale_arg2; }
function textbox_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
function textbox_inhColor () { return "black"; }
function textbox_overflow () { return false; }
function textbox_lineSpacing ( _ale_arg0) { return _ale_arg0; }
function tablebox_intrinsPrefWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_absX ( _ale_arg0) { return _ale_arg0; }
function tablebox_intrinsMinWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_tableContentHeight ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_displayBorder ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_absX ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_canvas ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_colCount ( _ale_arg0) { return _ale_arg0; }
function tablebox_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function tablebox_rows_tableContentWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_absY ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_colCount ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_availableWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_displayBorder ( _ale_arg0) { return _ale_arg0; }
function tablebox_cellsReady ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function tablebox_render ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_cellsReady ( _ale_arg0) { return _ale_arg0 ? true : true; }
function tablebox_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
function row_childs_row ( _ale_arg0) { return _ale_arg0; }
function row_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function row_childs_relX () { return 0; }
function row_childs_canvas () { return 0; }
function row_render ( _ale_arg4,  _ale_arg5,  _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 + ((! _ale_arg1) ? 0 : (paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3, _ale_arg5))); }
function row_childs_absY ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function row_childs_availableWidth () { return 0; }
function row_childs_column ( _ale_arg1,  _ale_arg0) { return columnsGetCol(_ale_arg0, _ale_arg1); }
function row_childs_displayBorder ( _ale_arg0) { return _ale_arg0; }
function row_childs_absX () { return 0; }
function cell_render ( _ale_arg5,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 + ((! _ale_arg1) ? 0 : (paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3, _ale_arg5))); }
function cell_childs_relX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 - _ale_arg1; }
function cell_childs_availableWidth ( _ale_arg0,  _ale_arg1) { return _ale_arg0 - (_ale_arg1 ? 10 : 0); }
function cell_childs_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function cell_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
function cell_childs_displayBorder ( _ale_arg0) { return _ale_arg0; }
function cell_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function cell_childs_absY ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function wrapbox_childs_relX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 - _ale_arg1; }
function wrapbox_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
function wrapbox_childs_availableWidth ( _ale_arg0,  _ale_arg1) { return _ale_arg0 - (_ale_arg1 ? 10 : 0); }
function wrapbox_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function wrapbox_render ( _ale_arg5,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 + ((! _ale_arg1) ? 0 : (paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3, _ale_arg5))); }
function wrapbox_childs_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function wrapbox_childs_displayBorder ( _ale_arg0) { return _ale_arg0; }
function wrapbox_childs_absY ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function vbox_childs_displayBorder ( _ale_arg0) { return _ale_arg0; }
function vbox_childs_relX ( _ale_arg0) { return (_ale_arg0 ? 5 : 0); }
function vbox_computedHeight ( _ale_arg0,  _ale_arg1) { return isEmptyInt(_ale_arg0) ? _ale_arg1 : valueInt(_ale_arg0); }
function vbox_childs_availableWidth ( _ale_arg0,  _ale_arg1) { return _ale_arg0 - (_ale_arg1 ? 10 : 0); }
function vbox_childs_absY ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function vbox_render ( _ale_arg5,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 + ((! _ale_arg1) ? 0 : (paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg5) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg6, _ale_arg2, _ale_arg3, _ale_arg5))); }
function vbox_childs_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function vbox_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg4,  _ale_arg0,  _ale_arg6,  _ale_arg5,  _ale_arg1) { return (! isEmptyInt(_ale_arg0)) ? valueInt(_ale_arg0) : ((! isEmptyInt(_ale_arg1)) ? (0.01 * valueInt(_ale_arg1) * _ale_arg2) : min(max(max(_ale_arg3, (! isEmptyInt(_ale_arg4)) ? valueInt(_ale_arg4) : 0), _ale_arg2), min(_ale_arg5, (! isEmptyInt(_ale_arg6)) ? valueInt(_ale_arg6) : _ale_arg5))); }
///// pass /////
function visit_col_0(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 0);

  setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      ;
      ;
      ;
      ;
      ;
      ;
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();

  return true;
}
function visit_top_0(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"child"), "absx", top_child_absX());
  logger.log("    top_child_absX: " + getAttribSafe(getChildByRefName(node,"child"), "absx"));
  setAttribSafe(getChildByRefName(node,"child"), "absy", top_child_absY());
  logger.log("    top_child_absY: " + getAttribSafe(getChildByRefName(node,"child"), "absy"));
  setAttribSafe(getChildByRefName(node,"child"), "availablewidth", top_child_availableWidth());
  logger.log("    top_child_availableWidth: " + getAttribSafe(getChildByRefName(node,"child"), "availablewidth"));
  setAttribSafe(getChildByRefName(node,"child"), "displayborder", top_child_displayBorder(getInputAttribSafe(node, "displayborder", 'false')));
  logger.log("    top_child_displayBorder: " + getAttribSafe(getChildByRefName(node,"child"), "displayborder"));
  logger.log("        displayBorder: " + getInputAttribSafe(node, "displayborder", 'false'));
  setAttribSafe(getChildByRefName(node,"child"), "lineh", top_child_lineH());
  logger.log("    top_child_lineH: " + getAttribSafe(getChildByRefName(node,"child"), "lineh"));
  setAttribSafe(getChildByRefName(node,"child"), "relboty", top_child_relBotY());
  logger.log("    top_child_relBotY: " + getAttribSafe(getChildByRefName(node,"child"), "relboty"));
  setAttribSafe(getChildByRefName(node,"child"), "relrightx", top_child_relRightX());
  logger.log("    top_child_relRightX: " + getAttribSafe(getChildByRefName(node,"child"), "relrightx"));
  setAttribSafe(getChildByRefName(node,"child"), "relx", top_child_relX());
  logger.log("    top_child_relX: " + getAttribSafe(getChildByRefName(node,"child"), "relx"));
  setAttribSafe(getChildByRefName(node,"child"), "rely", top_child_relY());
  logger.log("    top_child_relY: " + getAttribSafe(getChildByRefName(node,"child"), "rely"));
  return true;
}
function visit_leaf_0(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 0);
  setAttribSafe(node, "intrinsheight", leaf_intrinsHeight());
  logger.log("    leaf_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "intrinsminwidth", leaf_intrinsMinWidth());
  logger.log("    leaf_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  setAttribSafe(node, "intrinsprefwidth", leaf_intrinsPrefWidth());
  logger.log("    leaf_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  setAttribSafe(node, "computedheight", leaf_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    leaf_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_img_0(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 0);
  setAttribSafe(node, "intrinsheight", img_intrinsHeight(getAttribSafe(node, "imagehandle")));
  logger.log("    img_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsminwidth", img_intrinsMinWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    img_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsprefwidth", img_intrinsPrefWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    img_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "computedheight", img_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    img_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_cols_0(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 0);
  return true;
}
function visit_textbox_0(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "inhcolor", textbox_inhColor());
  logger.log("    textbox_inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "inhfontsize", textbox_inhFontSize());
  logger.log("    textbox_inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  setAttribSafe(node, "metrics", textbox_metrics());
  logger.log("    textbox_metrics: " + getAttribSafe(node, "metrics"));
  setAttribSafe(node, "overflow", textbox_overflow());
  logger.log("    textbox_overflow: " + getAttribSafe(node, "overflow"));
  setAttribSafe(node, "rendercolor", textbox_renderColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    textbox_renderColor: " + getAttribSafe(node, "rendercolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "renderfontsize", textbox_renderFontSize(getAttribSafe(node, "inhfontsize"), getInputMaybeAttribSafe(node, "fontsize")));
  logger.log("    textbox_renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        fontSize: " + getInputMaybeAttribSafe(node, "fontsize"));
  setAttribSafe(node, "intrinsminwidth", textbox_intrinsMinWidth(getAttribSafe(node, "text"), getAttribSafe(node, "metrics"), getAttribSafe(node, "renderfontsize"), getInputAttribSafe(node, "fontfamily", '"Arial"')));
  logger.log("    textbox_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        text: " + getAttribSafe(node, "text"));
  logger.log("        metrics: " + getAttribSafe(node, "metrics"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  setAttribSafe(node, "intrinsprefwidth", textbox_intrinsPrefWidth(getAttribSafe(node, "text"), getAttribSafe(node, "metrics"), getAttribSafe(node, "renderfontsize"), getInputAttribSafe(node, "fontfamily", '"Arial"')));
  logger.log("    textbox_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        text: " + getAttribSafe(node, "text"));
  logger.log("        metrics: " + getAttribSafe(node, "metrics"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  setAttribSafe(node, "lineheight", textbox_lineHeight(getAttribSafe(node, "text"), getAttribSafe(node, "metrics"), getAttribSafe(node, "renderfontsize"), getInputAttribSafe(node, "fontfamily", '"Arial"')));
  logger.log("    textbox_lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        text: " + getAttribSafe(node, "text"));
  logger.log("        metrics: " + getAttribSafe(node, "metrics"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  setAttribSafe(node, "linespacing", textbox_lineSpacing(getAttribSafe(node, "lineheight")));
  logger.log("    textbox_lineSpacing: " + getAttribSafe(node, "linespacing"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  return true;
}
function visit_tablebox_0(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 0);

  setAttribSafe(node, "rows_rownum_init", (0));
  setAttribSafe(node, "rows_rownum_last", getAttribSafe(node, "rows_rownum_init"));
  logger.log("      init rows@rowNum: " + getAttribSafe(node, "rows_rownum_init"));
  logger.log("    last init rows_rownum_last: " + getAttribSafe(node, "rows_rownum_last"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rownum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_rownum_init") : ("rownum")) + 1));
      logger.log("         step rows@rowNum: " + getAttribSafe(child, "rownum"));
    }
  })();

  return true;
}
function visit_row_0(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 0);

  setAttribSafe(node, "childs_cellnum_init", (0));
  setAttribSafe(node, "childs_cellnum_last", getAttribSafe(node, "childs_cellnum_init"));
  logger.log("      init childs@cellNum: " + getAttribSafe(node, "childs_cellnum_init"));
  logger.log("    last init childs_cellnum_last: " + getAttribSafe(node, "childs_cellnum_last"));
    setAttribSafe(node, "childs_rely_init", (0));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
    setAttribSafe(node, "cells_init", (mtIntPairList()));
  setAttribSafe(node, "cells", getAttribSafe(node, "cells_init"));
  logger.log("      init cells: " + getAttribSafe(node, "cells_init"));
  logger.log("    last init cells: " + getAttribSafe(node, "cells"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      ;
      ;
      setAttribSafe(child, "cellnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_cellnum_init") : ("cellnum")) + 1));
      logger.log("         step childs@cellNum: " + getAttribSafe(child, "cellnum"));
      ;
      setAttribSafe(child, "rely", (5));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      setAttribSafe(child, "row", (getAttribSafe(node, "rownum") ));
      logger.log("         step childs@row: " + getAttribSafe(child, "row"));
      setAttribSafe(node, "cells", (appendIntPairList(getAttribSafe(node, "cells"), pairInt(isEmptyInt(getInputMaybeAttribSafe(child, "rowspan")) ? 1 : valueInt(getInputMaybeAttribSafe(child, "rowspan")), isEmptyInt(getInputMaybeAttribSafe(child, "colspan")) ? 1 : valueInt(getInputMaybeAttribSafe(child, "colspan"))))));
      logger.log("         step cells: " + getAttribSafe(node, "cells"));
    }
  })();


  setAttribSafe(node, "intrinscolcount_init", (0));
  setAttribSafe(node, "intrinscolcount", getAttribSafe(node, "intrinscolcount_init"));
  logger.log("      init intrinsColCount: " + getAttribSafe(node, "intrinscolcount_init"));
  logger.log("    last init intrinscolcount: " + getAttribSafe(node, "intrinscolcount"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinscolcount", (getAttribSafe(node, "intrinscolcount") + (isEmptyInt(getInputMaybeAttribSafe(child, "colspan")) ? 1 : valueInt(getInputMaybeAttribSafe(child, "colspan")))));
      logger.log("         step intrinsColCount: " + getAttribSafe(node, "intrinscolcount"));
    }
  })();

  return true;
}
function visit_cell_0(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 0);

  setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();

  return true;
}
function visit_vbox_0(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 0);

  setAttribSafe(node, "childs_lineh_init", (0));
  setAttribSafe(node, "childs_lineh_last", getAttribSafe(node, "childs_lineh_init"));
  logger.log("      init childs@lineH: " + getAttribSafe(node, "childs_lineh_init"));
  logger.log("    last init childs_lineh_last: " + getAttribSafe(node, "childs_lineh_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "lineh", (0));
      logger.log("         step childs@lineH: " + getAttribSafe(child, "lineh"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();

  return true;
}
function visit_wrapbox_0(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 0);

  setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();

  return true;
}
///// pass /////
function visit_col_1(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "displayborder", (getAttribSafe(node, "displayborder") ));
      logger.log("         step childs@displayBorder: " + getAttribSafe(child, "displayborder"));
      setAttribSafe(child, "relx", (5 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
    }
  })();

  return true;
}
function visit_top_1(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 1);
  return true;
}
function visit_leaf_1(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 1);
  return true;
}
function visit_img_1(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 1);
  return true;
}
function visit_cols_1(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 1);

  setAttribSafe(node, "cols_colnum_init", (0 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "cols_colnum_last", getAttribSafe(node, "cols_colnum_init"));
  logger.log("      init cols@colNum: " + getAttribSafe(node, "cols_colnum_init"));
  logger.log("    last init cols_colnum_last: " + getAttribSafe(node, "cols_colnum_last"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "borderc", (getInputAttribSafe(node, "borderc", '#0F0') + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step cols@borderc: " + getAttribSafe(child, "borderc"));
      setAttribSafe(child, "cellsready", (getAttribSafe(node, "cellsready") ));
      logger.log("         step cols@cellsReady: " + getAttribSafe(child, "cellsready"));
      setAttribSafe(child, "colcount", (getAttribSafe(node, "colcount") ));
      logger.log("         step cols@colCount: " + getAttribSafe(child, "colcount"));
      setAttribSafe(child, "colnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("cols_colnum_init") : ("colnum")) + 1));
      logger.log("         step cols@colNum: " + getAttribSafe(child, "colnum"));
      setAttribSafe(child, "displayborder", (getAttribSafe(node, "displayborder") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step cols@displayBorder: " + getAttribSafe(child, "displayborder"));
      setAttribSafe(child, "rely", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step cols@relY: " + getAttribSafe(child, "rely"));
    }
  })();

  return true;
}
function visit_textbox_1(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 1);
  return true;
}
function visit_tablebox_1(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 1);
  setAttribSafe(getChildByRefName(node,"columns"), "displayborder", tablebox_columns_displayBorder(getAttribSafe(node, "displayborder")));
  logger.log("    tablebox_columns_displayBorder: " + getAttribSafe(getChildByRefName(node,"columns"), "displayborder"));
  logger.log("        displayBorder: " + getAttribSafe(node, "displayborder"));

  setAttribSafe(node, "colcount_init", (0));
  setAttribSafe(node, "colcount", getAttribSafe(node, "colcount_init"));
  logger.log("      init colCount: " + getAttribSafe(node, "colcount_init"));
  logger.log("    last init colcount: " + getAttribSafe(node, "colcount"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "displayborder", (getAttribSafe(node, "displayborder") ));
      logger.log("         step rows@displayBorder: " + getAttribSafe(child, "displayborder"));
      setAttribSafe(node, "colcount", (max(getAttribSafe(node, "colcount"), getAttribSafe(child, "intrinscolcount"))));
      logger.log("         step colCount: " + getAttribSafe(node, "colcount"));
    }
  })();

  setAttribSafe(getChildByRefName(node,"columns"), "colcount", tablebox_columns_colCount(getAttribSafe(node, "colcount")));
  logger.log("    tablebox_columns_colCount: " + getAttribSafe(getChildByRefName(node,"columns"), "colcount"));
  logger.log("        colCount: " + getAttribSafe(node, "colcount"));

  setAttribSafe(node, "rows_colassignment_init", (emptyColumnList(getAttribSafe(node, "colcount"))));
  setAttribSafe(node, "rows_colassignment_last", getAttribSafe(node, "rows_colassignment_init"));
  logger.log("      init rows@colAssignment: " + getAttribSafe(node, "rows_colassignment_init"));
  logger.log("    last init rows_colassignment_last: " + getAttribSafe(node, "rows_colassignment_last"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "colcount", (getAttribSafe(node, "colcount") ));
      logger.log("         step rows@colCount: " + getAttribSafe(child, "colcount"));
      setAttribSafe(child, "colassignment", (columnsAppendRow(getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_colassignment_init") : ("colassignment")), getAttribSafe(child, "cells"), getAttribSafe(child, "rownum"))));
      logger.log("         step rows@colAssignment: " + getAttribSafe(child, "colassignment"));
    }
  })();

  setAttribSafe(node, "cellsready", tablebox_cellsReady(getAttribSafe(node, "rows_colassignment_last")));
  logger.log("    tablebox_cellsReady: " + getAttribSafe(node, "cellsready"));
  logger.log("        rows@colAssignment$$: " + getAttribSafe(node, "rows_colassignment_last"));
  setAttribSafe(getChildByRefName(node,"columns"), "cellsready", tablebox_columns_cellsReady(getAttribSafe(node, "cellsready")));
  logger.log("    tablebox_columns_cellsReady: " + getAttribSafe(getChildByRefName(node,"columns"), "cellsready"));
  logger.log("        cellsReady: " + getAttribSafe(node, "cellsready"));
  return true;
}
function visit_row_1(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "column", (columnsGetCol(getAttribSafe(node, "colassignment"), getAttribSafe(child, "cellnum"))));
      logger.log("         step childs@column: " + getAttribSafe(child, "column"));
      setAttribSafe(child, "displayborder", (getAttribSafe(node, "displayborder") ));
      logger.log("         step childs@displayBorder: " + getAttribSafe(child, "displayborder"));
    }
  })();

  return true;
}
function visit_cell_1(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "displayborder", (getAttribSafe(node, "displayborder") ));
      logger.log("         step childs@displayBorder: " + getAttribSafe(child, "displayborder"));
    }
  })();

  return true;
}
function visit_vbox_1(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "displayborder", (getAttribSafe(node, "displayborder") ));
      logger.log("         step childs@displayBorder: " + getAttribSafe(child, "displayborder"));
      setAttribSafe(child, "relx", ((getAttribSafe(node, "displayborder") ? 5 : 0)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
    }
  })();

  return true;
}
function visit_wrapbox_1(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "displayborder", (getAttribSafe(node, "displayborder") ));
      logger.log("         step childs@displayBorder: " + getAttribSafe(child, "displayborder"));
    }
  })();

  return true;
}
///// pass /////
function visit_col_2(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 2);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (10 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", (10 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (((isEmptyInt(getInputMaybeAttribSafe(child, "colspan")) || valueInt(getInputMaybeAttribSafe(child, "colspan")) == 1)) ? max(getAttribSafe(node, "intrinsminwidth"), 10 + getAttribSafe(child, "intrinsminwidth")) : getAttribSafe(node, "intrinsminwidth") ));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (((isEmptyInt(getInputMaybeAttribSafe(child, "colspan")) || valueInt(getInputMaybeAttribSafe(child, "colspan")) == 1)) ? max(getAttribSafe(node, "intrinsprefwidth"), 10 + getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_top_2(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 2);
  return true;
}
function visit_leaf_2(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 2);
  return true;
}
function visit_img_2(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 2);
  return true;
}
function visit_cols_2(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 2);

(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (getAttribSafe(node, "intrinsminwidth") + getAttribSafe(child, "intrinsminwidth") ));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") ));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_textbox_2(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 2);
  return true;
}
function visit_tablebox_2(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 2);
  setAttribSafe(node, "intrinsminwidth", tablebox_intrinsMinWidth(getAttribSafe(getChildByRefName(node,"columns"), "intrinsminwidth")));
  logger.log("    tablebox_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        columns@intrinsMinWidth: " + getAttribSafe(getChildByRefName(node,"columns"), "intrinsminwidth"));
  setAttribSafe(node, "intrinsprefwidth", tablebox_intrinsPrefWidth(getAttribSafe(getChildByRefName(node,"columns"), "intrinsprefwidth")));
  logger.log("    tablebox_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        columns@intrinsPrefWidth: " + getAttribSafe(getChildByRefName(node,"columns"), "intrinsprefwidth"));
  return true;
}
function visit_row_2(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 2);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "computedwidth_init", (0));
  setAttribSafe(node, "computedwidth", getAttribSafe(node, "computedwidth_init"));
  logger.log("      init computedWidth: " + getAttribSafe(node, "computedwidth_init"));
  logger.log("    last init computedwidth: " + getAttribSafe(node, "computedwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "computedwidth", (getAttribSafe(node, "computedwidth") + getAttribSafe(child, "intrinsminwidth") ));
      logger.log("         step computedWidth: " + getAttribSafe(node, "computedwidth"));
    }
  })();

  return true;
}
function visit_cell_2(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 2);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (getAttribSafe(node, "displayborder") ? 5 : 0))));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (getAttribSafe(node, "displayborder") ? 5 : (- 5)))));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(child, "intrinsminwidth") + (getAttribSafe(node, "displayborder") ? 10 : 0))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_vbox_2(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 2);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (10));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", (10));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), (getAttribSafe(node, "displayborder") ? 10 : 0) + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (max(getAttribSafe(node, "intrinsprefwidth"), (getAttribSafe(node, "displayborder") ? 10 : 0) + getAttribSafe(child, "intrinsprefwidth"))));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_wrapbox_2(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 2);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (getAttribSafe(node, "displayborder") ? 5 : 0))));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (getAttribSafe(node, "displayborder") ? 5 : (- 5)))));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(child, "intrinsminwidth") + (getAttribSafe(node, "displayborder") ? 10 : 0))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
///// pass /////
function visit_col_3(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", col_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    col_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") - 10 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
function visit_top_3(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 3);
  return true;
}
function visit_leaf_3(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", leaf_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    leaf_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));
  return true;
}
function visit_img_3(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", img_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    img_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));
  return true;
}
function visit_cols_3(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 3);

  setAttribSafe(node, "notusedwidth_init", (getAttribSafe(node, "availablewidth") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "notusedwidth", getAttribSafe(node, "notusedwidth_init"));
  logger.log("      init notUsedWidth: " + getAttribSafe(node, "notusedwidth_init"));
  logger.log("    last init notusedwidth: " + getAttribSafe(node, "notusedwidth"));
    setAttribSafe(node, "numgreedycols_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "numgreedycols", getAttribSafe(node, "numgreedycols_init"));
  logger.log("      init numGreedyCols: " + getAttribSafe(node, "numgreedycols_init"));
  logger.log("    last init numgreedycols: " + getAttribSafe(node, "numgreedycols"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "notusedwidth", (getAttribSafe(node, "notusedwidth") - (min((getAttribSafe(node, "availablewidth")) / getAttribSafe(node, "colcount") + getAttribSafe(child, "intrinsminwidth"), getAttribSafe(child, "intrinsprefwidth")))));
      logger.log("         step notUsedWidth: " + getAttribSafe(node, "notusedwidth"));
      setAttribSafe(node, "numgreedycols", (getAttribSafe(node, "numgreedycols") + ((getAttribSafe(node, "availablewidth")) / getAttribSafe(node, "colcount") + getAttribSafe(child, "intrinsminwidth") < getAttribSafe(child, "intrinsprefwidth") ? 1 : 0)));
      logger.log("         step numGreedyCols: " + getAttribSafe(node, "numgreedycols"));
    }
  })();


(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(child, "intrinsminwidth") + (getAttribSafe(node, "availablewidth")) / getAttribSafe(node, "colcount") + (getAttribSafe(node, "numgreedycols") == 0 ? 0 : getAttribSafe(node, "notusedwidth") / getAttribSafe(node, "numgreedycols")) + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step cols@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
function visit_textbox_3(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", textbox_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    textbox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));
  setAttribSafe(node, "numberlines", textbox_numberLines(getAttribSafe(node, "text"), getAttribSafe(node, "metrics"), getAttribSafe(node, "overflow"), getAttribSafe(node, "renderfontsize"), getAttribSafe(node, "computedwidth"), getInputAttribSafe(node, "fontfamily", '"Arial"')));
  logger.log("    textbox_numberLines: " + getAttribSafe(node, "numberlines"));
  logger.log("        text: " + getAttribSafe(node, "text"));
  logger.log("        metrics: " + getAttribSafe(node, "metrics"));
  logger.log("        overflow: " + getAttribSafe(node, "overflow"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  setAttribSafe(node, "intrinsheight", textbox_intrinsHeight(getAttribSafe(node, "lineheight"), getAttribSafe(node, "numberlines"), getAttribSafe(node, "linespacing")));
  logger.log("    textbox_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        numberLines: " + getAttribSafe(node, "numberlines"));
  logger.log("        lineSpacing: " + getAttribSafe(node, "linespacing"));
  setAttribSafe(node, "computedheight", textbox_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    textbox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_tablebox_3(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", tablebox_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    tablebox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));
  setAttribSafe(getChildByRefName(node,"columns"), "availablewidth", tablebox_columns_availableWidth(getAttribSafe(node, "computedwidth")));
  logger.log("    tablebox_columns_availableWidth: " + getAttribSafe(getChildByRefName(node,"columns"), "availablewidth"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  return true;
}
function visit_row_3(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 3);
  return true;
}
function visit_cell_3(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", cell_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    cell_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") - (getAttribSafe(node, "displayborder") ? 10 : 0)));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
function visit_vbox_3(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", vbox_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    vbox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") - (getAttribSafe(node, "displayborder") ? 10 : 0)));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
function visit_wrapbox_3(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", wrapbox_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getInputMaybeAttribSafe(node, "minwidth"), getInputMaybeAttribSafe(node, "width"), getInputMaybeAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getInputMaybeAttribSafe(node, "percentwidth")));
  logger.log("    wrapbox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minWidth: " + getInputMaybeAttribSafe(node, "minwidth"));
  logger.log("        width: " + getInputMaybeAttribSafe(node, "width"));
  logger.log("        maxWidth: " + getInputMaybeAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        percentWidth: " + getInputMaybeAttribSafe(node, "percentwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") - (getAttribSafe(node, "displayborder") ? 10 : 0)));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
///// pass /////
function visit_col_4(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 4);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") + getAttribSafe(child, "relx") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
    }
  })();

  return true;
}
function visit_top_4(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 4);
  return true;
}
function visit_leaf_4(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 4);
  return true;
}
function visit_img_4(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 4);
  return true;
}
function visit_cols_4(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 4);

(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "cols_relrightx_init", (0 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "cols_relrightx_last", getAttribSafe(node, "cols_relrightx_init"));
  logger.log("      init cols@relRightX: " + getAttribSafe(node, "cols_relrightx_init"));
  logger.log("    last init cols_relrightx_last: " + getAttribSafe(node, "cols_relrightx_last"));
    setAttribSafe(node, "tablecontentwidth_init", (0));
  setAttribSafe(node, "tablecontentwidth", getAttribSafe(node, "tablecontentwidth_init"));
  logger.log("      init tableContentWidth: " + getAttribSafe(node, "tablecontentwidth_init"));
  logger.log("    last init tablecontentwidth: " + getAttribSafe(node, "tablecontentwidth"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relrightx", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("cols_relrightx_init") : ("relrightx")) + getAttribSafe(child, "computedwidth") ));
      logger.log("         step cols@relRightX: " + getAttribSafe(child, "relrightx"));
      setAttribSafe(node, "tablecontentwidth", (getAttribSafe(node, "tablecontentwidth") + getAttribSafe(child, "computedwidth") ));
      logger.log("         step tableContentWidth: " + getAttribSafe(node, "tablecontentwidth"));
    }
  })();


  setAttribSafe(node, "cols_relx_init", (0));
  setAttribSafe(node, "cols_relx_last", getAttribSafe(node, "cols_relx_init"));
  logger.log("      init cols@relX: " + getAttribSafe(node, "cols_relx_init"));
  logger.log("    last init cols_relx_last: " + getAttribSafe(node, "cols_relx_last"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relx", (getAttribSafe(child, "relrightx") - getAttribSafe(child, "computedwidth") ));
      logger.log("         step cols@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") + getAttribSafe(child, "relx") ));
      logger.log("         step cols@absX: " + getAttribSafe(child, "absx"));
    }
  })();

  return true;
}
function visit_textbox_4(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 4);
  return true;
}
function visit_tablebox_4(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 4);
  setAttribSafe(getChildByRefName(node,"columns"), "absx", tablebox_columns_absX(getAttribSafe(node, "absx")));
  logger.log("    tablebox_columns_absX: " + getAttribSafe(getChildByRefName(node,"columns"), "absx"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));

(function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") ));
      logger.log("         step rows@absX: " + getAttribSafe(child, "absx"));
    }
  })();

  return true;
}
function visit_row_4(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 4);
  return true;
}
function visit_cell_4(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 4);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "childs_relrightx_init", ((getAttribSafe(node, "displayborder") ? 0 : (- 5))));
  setAttribSafe(node, "childs_relrightx_last", getAttribSafe(node, "childs_relrightx_init"));
  logger.log("      init childs@relRightX: " + getAttribSafe(node, "childs_relrightx_init"));
  logger.log("    last init childs_relrightx_last: " + getAttribSafe(node, "childs_relrightx_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relrightx", ((getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5 + getAttribSafe(child, "computedwidth") > getAttribSafe(node, "computedwidth")) ? ((getAttribSafe(node, "displayborder") ? 5 : 0) + getAttribSafe(child, "computedwidth")) : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5 + getAttribSafe(child, "computedwidth"))));
      logger.log("         step childs@relRightX: " + getAttribSafe(child, "relrightx"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relx", (getAttribSafe(child, "relrightx") - getAttribSafe(child, "computedwidth") ));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") + getAttribSafe(child, "relx") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
    }
  })();

  return true;
}
function visit_vbox_4(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 4);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") + getAttribSafe(child, "relx") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
    }
  })();


  setAttribSafe(node, "childs_relrightx_init", ((getAttribSafe(node, "displayborder") ? 5 : 0)));
  setAttribSafe(node, "childs_relrightx_last", getAttribSafe(node, "childs_relrightx_init"));
  logger.log("      init childs@relRightX: " + getAttribSafe(node, "childs_relrightx_init"));
  logger.log("    last init childs_relrightx_last: " + getAttribSafe(node, "childs_relrightx_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relrightx", (getAttribSafe(child, "computedwidth") ));
      logger.log("         step childs@relRightX: " + getAttribSafe(child, "relrightx"));
    }
  })();

  return true;
}
function visit_wrapbox_4(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 4);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "childs_relrightx_init", ((getAttribSafe(node, "displayborder") ? 0 : (- 5))));
  setAttribSafe(node, "childs_relrightx_last", getAttribSafe(node, "childs_relrightx_init"));
  logger.log("      init childs@relRightX: " + getAttribSafe(node, "childs_relrightx_init"));
  logger.log("    last init childs_relrightx_last: " + getAttribSafe(node, "childs_relrightx_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relrightx", ((getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5 + getAttribSafe(child, "computedwidth") > getAttribSafe(node, "computedwidth")) ? ((getAttribSafe(node, "displayborder") ? 5 : 0) + getAttribSafe(child, "computedwidth")) : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5 + getAttribSafe(child, "computedwidth"))));
      logger.log("         step childs@relRightX: " + getAttribSafe(child, "relrightx"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relx", (getAttribSafe(child, "relrightx") - getAttribSafe(child, "computedwidth") ));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") + getAttribSafe(child, "relx") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
    }
  })();

  return true;
}
///// pass /////
function visit_col_5(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsheight_init", ((getAttribSafe(node, "cellsready") ? 0 : 0) + (getAttribSafe(node, "numchilds") == 0 ? 10 : 5)));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + 5));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", col_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    col_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_top_5(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 5);
  setAttribSafe(getChildByRefName(node,"child"), "canvas", top_child_canvas(getAttribSafe(getChildByRefName(node,"child"), "computedwidth"), getAttribSafe(getChildByRefName(node,"child"), "computedheight")));
  logger.log("    top_child_canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  logger.log("        child@computedWidth: " + getAttribSafe(getChildByRefName(node,"child"), "computedwidth"));
  logger.log("        child@computedHeight: " + getAttribSafe(getChildByRefName(node,"child"), "computedheight"));
  return true;
}
function visit_leaf_5(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 5);
  return true;
}
function visit_img_5(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 5);
  return true;
}
function visit_cols_5(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 5);
  return true;
}
function visit_textbox_5(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 5);
  return true;
}
function visit_tablebox_5(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 5);

  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "tablecontentwidth", (getAttribSafe(getChildByRefName(node,"columns"), "tablecontentwidth") ));
      logger.log("         step rows@tableContentWidth: " + getAttribSafe(child, "tablecontentwidth"));
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();


  setAttribSafe(node, "rows_relboty_init", (0));
  setAttribSafe(node, "rows_relboty_last", getAttribSafe(node, "rows_relboty_init"));
  logger.log("      init rows@relBotY: " + getAttribSafe(node, "rows_relboty_init"));
  logger.log("    last init rows_relboty_last: " + getAttribSafe(node, "rows_relboty_last"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relboty", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_relboty_init") : ("relboty")) + getAttribSafe(child, "computedheight") ));
      logger.log("         step rows@relBotY: " + getAttribSafe(child, "relboty"));
    }
  })();


  setAttribSafe(node, "rows_rely_init", (0));
  setAttribSafe(node, "rows_rely_last", getAttribSafe(node, "rows_rely_init"));
  logger.log("      init rows@relY: " + getAttribSafe(node, "rows_rely_init"));
  logger.log("    last init rows_rely_last: " + getAttribSafe(node, "rows_rely_last"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rely", (getAttribSafe(child, "relboty") - getAttribSafe(child, "computedheight") ));
      logger.log("         step rows@relY: " + getAttribSafe(child, "rely"));
    }
  })();

  setAttribSafe(getChildByRefName(node,"columns"), "tablecontentheight", tablebox_columns_tableContentHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    tablebox_columns_tableContentHeight: " + getAttribSafe(getChildByRefName(node,"columns"), "tablecontentheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "computedheight", tablebox_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    tablebox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_row_5(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "childs_relboty_init", (0));
  setAttribSafe(node, "childs_relboty_last", getAttribSafe(node, "childs_relboty_init"));
  logger.log("      init childs@relBotY: " + getAttribSafe(node, "childs_relboty_init"));
  logger.log("    last init childs_relboty_last: " + getAttribSafe(node, "childs_relboty_last"));
    setAttribSafe(node, "intrinsheight_init", (10));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relboty", (5 + getAttribSafe(child, "computedheight") ));
      logger.log("         step childs@relBotY: " + getAttribSafe(child, "relboty"));
      setAttribSafe(node, "intrinsheight", (((isEmptyInt(getInputMaybeAttribSafe(child, "rowspan")) || valueInt(getInputMaybeAttribSafe(child, "rowspan")) == 1)) ? max(getAttribSafe(node, "intrinsheight"), getAttribSafe(child, "computedheight") + 10) : getAttribSafe(node, "intrinsheight") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", row_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    row_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_cell_5(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "childs_lineh_init", (0));
  setAttribSafe(node, "childs_lineh_last", getAttribSafe(node, "childs_lineh_init"));
  logger.log("      init childs@lineH: " + getAttribSafe(node, "childs_lineh_init"));
  logger.log("    last init childs_lineh_last: " + getAttribSafe(node, "childs_lineh_last"));
    setAttribSafe(node, "childs_rely_init", ((getAttribSafe(node, "displayborder") ? 0 : (- 5))));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "lineh", (getAttribSafe(child, "relx") == (getAttribSafe(node, "displayborder") ? 5 : 0) ? getAttribSafe(child, "computedheight") : (getAttribSafe(child, "computedheight") > getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_lineh_init") : ("lineh")) ? getAttribSafe(child, "computedheight") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_lineh_init") : ("lineh")))));
      logger.log("         step childs@lineH: " + getAttribSafe(child, "lineh"));
      setAttribSafe(child, "rely", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_rely_init") : ("rely")) + (getAttribSafe(child, "relx") == (getAttribSafe(node, "displayborder") ? 5 : 0) ? getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_lineh_init") : ("lineh")) + 5 : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
    }
  })();


  setAttribSafe(node, "childs_relboty_init", (0));
  setAttribSafe(node, "childs_relboty_last", getAttribSafe(node, "childs_relboty_init"));
  logger.log("      init childs@relBotY: " + getAttribSafe(node, "childs_relboty_init"));
  logger.log("    last init childs_relboty_last: " + getAttribSafe(node, "childs_relboty_last"));
    setAttribSafe(node, "intrinsheight_init", (10));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relboty", (getAttribSafe(child, "rely") + getAttribSafe(child, "computedheight") ));
      logger.log("         step childs@relBotY: " + getAttribSafe(child, "relboty"));
      setAttribSafe(node, "intrinsheight", (getAttribSafe(child, "rely") + getAttribSafe(child, "lineh") + (getAttribSafe(node, "displayborder") ? 5 : 0)));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", cell_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    cell_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_vbox_5(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "childs_relboty_init", ((getAttribSafe(node, "displayborder") ? 0 : (- 10))));
  setAttribSafe(node, "childs_relboty_last", getAttribSafe(node, "childs_relboty_init"));
  logger.log("      init childs@relBotY: " + getAttribSafe(node, "childs_relboty_init"));
  logger.log("    last init childs_relboty_last: " + getAttribSafe(node, "childs_relboty_last"));
    setAttribSafe(node, "childs_rely_init", (0));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
    setAttribSafe(node, "intrinsheight_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (getAttribSafe(node, "displayborder") ? 0 : (- 10)))));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relboty", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relboty_init") : ("relboty")) + 10 + getAttribSafe(child, "computedheight") ));
      logger.log("         step childs@relBotY: " + getAttribSafe(child, "relboty"));
      setAttribSafe(child, "rely", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relboty_init") : ("relboty")) + 10));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + 10));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", vbox_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    vbox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_wrapbox_5(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "childs_lineh_init", (0));
  setAttribSafe(node, "childs_lineh_last", getAttribSafe(node, "childs_lineh_init"));
  logger.log("      init childs@lineH: " + getAttribSafe(node, "childs_lineh_init"));
  logger.log("    last init childs_lineh_last: " + getAttribSafe(node, "childs_lineh_last"));
    setAttribSafe(node, "childs_rely_init", ((getAttribSafe(node, "displayborder") ? 0 : (- 5))));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "lineh", (getAttribSafe(child, "relx") == (getAttribSafe(node, "displayborder") ? 5 : 0) ? getAttribSafe(child, "computedheight") : (getAttribSafe(child, "computedheight") > getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_lineh_init") : ("lineh")) ? getAttribSafe(child, "computedheight") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_lineh_init") : ("lineh")))));
      logger.log("         step childs@lineH: " + getAttribSafe(child, "lineh"));
      setAttribSafe(child, "rely", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_rely_init") : ("rely")) + (getAttribSafe(child, "relx") == (getAttribSafe(node, "displayborder") ? 5 : 0) ? getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_lineh_init") : ("lineh")) + 5 : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
    }
  })();


  setAttribSafe(node, "childs_relboty_init", (0));
  setAttribSafe(node, "childs_relboty_last", getAttribSafe(node, "childs_relboty_init"));
  logger.log("      init childs@relBotY: " + getAttribSafe(node, "childs_relboty_init"));
  logger.log("    last init childs_relboty_last: " + getAttribSafe(node, "childs_relboty_last"));
    setAttribSafe(node, "intrinsheight_init", (10));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relboty", (getAttribSafe(child, "rely") + getAttribSafe(child, "computedheight") ));
      logger.log("         step childs@relBotY: " + getAttribSafe(child, "relboty"));
      setAttribSafe(node, "intrinsheight", (getAttribSafe(child, "rely") + getAttribSafe(child, "lineh") + (getAttribSafe(node, "displayborder") ? 5 : 0)));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", wrapbox_computedHeight(getInputMaybeAttribSafe(node, "height"), getAttribSafe(node, "intrinsheight")));
  logger.log("    wrapbox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        height: " + getInputMaybeAttribSafe(node, "height"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
///// pass /////
function visit_col_6(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", col_render(getAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "tablecontentheight"), getAttribSafe(node, "displayborder")));
  logger.log("    col_render: " + getAttribSafe(node, "render"));
  logger.log("        borderc: " + getAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        tableContentHeight: " + getAttribSafe(node, "tablecontentheight"));
  logger.log("        displayBorder: " + getAttribSafe(node, "displayborder"));

  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_top_6(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 6);
  return true;
}
function visit_leaf_6(node) {
  logger.log("  visit  Leaf (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", leaf_render(getInputAttribSafe(node, "borderc", '#000'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "displayborder")));
  logger.log("    leaf_render: " + getAttribSafe(node, "render"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#000'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        displayBorder: " + getAttribSafe(node, "displayborder"));
  return true;
}
function visit_img_6(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", img_render(getAttribSafe(node, "imagehandle"), getAttribSafe(node, "canvas"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx")));
  logger.log("    img_render: " + getAttribSafe(node, "render"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  return true;
}
function visit_cols_6(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 6);

  setAttribSafe(node, "cols_canvas_init", (getAttribSafe(node, "canvas") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "cols_canvas_last", getAttribSafe(node, "cols_canvas_init"));
  logger.log("      init cols@canvas: " + getAttribSafe(node, "cols_canvas_init"));
  logger.log("    last init cols_canvas_last: " + getAttribSafe(node, "cols_canvas_last"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") + getAttribSafe(child, "rely") ));
      logger.log("         step cols@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("cols_canvas_init") : ("canvas")) ));
      logger.log("         step cols@canvas: " + getAttribSafe(child, "canvas"));
      setAttribSafe(child, "tablecontentheight", (getAttribSafe(node, "tablecontentheight") ));
      logger.log("         step cols@tableContentHeight: " + getAttribSafe(child, "tablecontentheight"));
    }
  })();

  return true;
}
function visit_textbox_6(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", textbox_render(getAttribSafe(node, "rendercolor"), getAttribSafe(node, "lineheight"), getAttribSafe(node, "text"), getAttribSafe(node, "linespacing"), getAttribSafe(node, "overflow"), getAttribSafe(node, "renderfontsize"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getInputAttribSafe(node, "fontfamily", '"Arial"')));
  logger.log("    textbox_render: " + getAttribSafe(node, "render"));
  logger.log("        renderColor: " + getAttribSafe(node, "rendercolor"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        text: " + getAttribSafe(node, "text"));
  logger.log("        lineSpacing: " + getAttribSafe(node, "linespacing"));
  logger.log("        overflow: " + getAttribSafe(node, "overflow"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  return true;
}
function visit_tablebox_6(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 6);
  setAttribSafe(getChildByRefName(node,"columns"), "absy", tablebox_columns_absY(getAttribSafe(node, "absy")));
  logger.log("    tablebox_columns_absY: " + getAttribSafe(getChildByRefName(node,"columns"), "absy"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  setAttribSafe(node, "render", tablebox_render(getAttribSafe(node, "canvas")));
  logger.log("    tablebox_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  setAttribSafe(getChildByRefName(node,"columns"), "canvas", tablebox_columns_canvas(getAttribSafe(node, "render")));
  logger.log("    tablebox_columns_canvas: " + getAttribSafe(getChildByRefName(node,"columns"), "canvas"));
  logger.log("        render: " + getAttribSafe(node, "render"));

(function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") + getAttribSafe(child, "rely") ));
      logger.log("         step rows@absY: " + getAttribSafe(child, "absy"));
    }
  })();


  setAttribSafe(node, "rows_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "rows_canvas_last", getAttribSafe(node, "rows_canvas_init"));
  logger.log("      init rows@canvas: " + getAttribSafe(node, "rows_canvas_init"));
  logger.log("    last init rows_canvas_last: " + getAttribSafe(node, "rows_canvas_last"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_canvas_init") : ("canvas")) ));
      logger.log("         step rows@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_row_6(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", row_render(getAttribSafe(node, "tablecontentwidth"), getInputAttribSafe(node, "borderc", '#070'), getAttribSafe(node, "canvas"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "displayborder")));
  logger.log("    row_render: " + getAttribSafe(node, "render"));
  logger.log("        tableContentWidth: " + getAttribSafe(node, "tablecontentwidth"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#070'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        displayBorder: " + getAttribSafe(node, "displayborder"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") + getAttribSafe(child, "rely") ));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      ;
    }
  })();

  return true;
}
function visit_cell_6(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", cell_render(getInputAttribSafe(node, "borderc", '#777'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "displayborder")));
  logger.log("    cell_render: " + getAttribSafe(node, "render"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#777'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        displayBorder: " + getAttribSafe(node, "displayborder"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") + getAttribSafe(child, "rely") ));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
    }
  })();


  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_vbox_6(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", vbox_render(getInputAttribSafe(node, "borderc", '#00FF00'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "displayborder")));
  logger.log("    vbox_render: " + getAttribSafe(node, "render"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#00FF00'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        displayBorder: " + getAttribSafe(node, "displayborder"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") + getAttribSafe(child, "rely") ));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
    }
  })();


  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_wrapbox_6(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 6);
  setAttribSafe(node, "render", wrapbox_render(getInputAttribSafe(node, "borderc", '#0000FF'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "displayborder")));
  logger.log("    wrapbox_render: " + getAttribSafe(node, "render"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '#0000FF'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        displayBorder: " + getAttribSafe(node, "displayborder"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") + getAttribSafe(child, "rely") ));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
    }
  })();


  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
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
      case "top":
        return visit_top_0(node);
      case "leaf":
        return visit_leaf_0(node);
      case "wrapbox":
        return visit_wrapbox_0(node);
      case "img":
        return visit_img_0(node);
      case "cell":
        return visit_cell_0(node);
      case "row":
        return visit_row_0(node);
      case "col":
        return visit_col_0(node);
      case "cols":
        return visit_cols_0(node);
      case "tablebox":
        return visit_tablebox_0(node);
      case "vbox":
        return visit_vbox_0(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_0(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_1 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_1(node);
      case "leaf":
        return visit_leaf_1(node);
      case "wrapbox":
        return visit_wrapbox_1(node);
      case "img":
        return visit_img_1(node);
      case "cell":
        return visit_cell_1(node);
      case "row":
        return visit_row_1(node);
      case "col":
        return visit_col_1(node);
      case "cols":
        return visit_cols_1(node);
      case "tablebox":
        return visit_tablebox_1(node);
      case "vbox":
        return visit_vbox_1(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_1(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_2 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_2(node);
      case "leaf":
        return visit_leaf_2(node);
      case "wrapbox":
        return visit_wrapbox_2(node);
      case "img":
        return visit_img_2(node);
      case "cell":
        return visit_cell_2(node);
      case "row":
        return visit_row_2(node);
      case "col":
        return visit_col_2(node);
      case "cols":
        return visit_cols_2(node);
      case "tablebox":
        return visit_tablebox_2(node);
      case "vbox":
        return visit_vbox_2(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_2(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_3 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_3(node);
      case "leaf":
        return visit_leaf_3(node);
      case "wrapbox":
        return visit_wrapbox_3(node);
      case "img":
        return visit_img_3(node);
      case "cell":
        return visit_cell_3(node);
      case "row":
        return visit_row_3(node);
      case "col":
        return visit_col_3(node);
      case "cols":
        return visit_cols_3(node);
      case "tablebox":
        return visit_tablebox_3(node);
      case "vbox":
        return visit_vbox_3(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_3(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_4 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_4(node);
      case "leaf":
        return visit_leaf_4(node);
      case "wrapbox":
        return visit_wrapbox_4(node);
      case "img":
        return visit_img_4(node);
      case "cell":
        return visit_cell_4(node);
      case "row":
        return visit_row_4(node);
      case "col":
        return visit_col_4(node);
      case "cols":
        return visit_cols_4(node);
      case "tablebox":
        return visit_tablebox_4(node);
      case "vbox":
        return visit_vbox_4(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_4(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_5 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_5(node);
      case "leaf":
        return visit_leaf_5(node);
      case "wrapbox":
        return visit_wrapbox_5(node);
      case "img":
        return visit_img_5(node);
      case "cell":
        return visit_cell_5(node);
      case "row":
        return visit_row_5(node);
      case "col":
        return visit_col_5(node);
      case "cols":
        return visit_cols_5(node);
      case "tablebox":
        return visit_tablebox_5(node);
      case "vbox":
        return visit_vbox_5(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_5(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_6 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_6(node);
      case "leaf":
        return visit_leaf_6(node);
      case "wrapbox":
        return visit_wrapbox_6(node);
      case "img":
        return visit_img_6(node);
      case "cell":
        return visit_cell_6(node);
      case "row":
        return visit_row_6(node);
      case "col":
        return visit_col_6(node);
      case "cols":
        return visit_cols_6(node);
      case "tablebox":
        return visit_tablebox_6(node);
      case "vbox":
        return visit_vbox_6(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_6(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function layout (root) {
  inherit(visit_0, root);
  inherit(visit_1, root);
  synthesize(visit_2, root);
  inherit(visit_3, root);
  inherit(visit_4, root);
  synthesize(visit_5, root);
  inherit(visit_6, root);
}
