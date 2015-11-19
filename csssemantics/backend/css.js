function inlineimg_offsetY ( _ale_arg1,  _ale_arg0,  _ale_arg4,  _ale_arg5,  _ale_arg3,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function inlineimg_offsetX ( _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function inlineimg_intrinsHeight ( _ale_arg0) { return getImageHeight(_ale_arg0); }
function inlineimg_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function inlineimg_mt () { return 0; }
function inlineimg_pl () { return 0; }
function inlineimg_pr () { return 0; }
function inlineimg_maxLineH ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1 + _ale_arg2 + _ale_arg3); }
function inlineimg_mb () { return 0; }
function inlineimg_relRightX ( _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg1,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineimg_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function inlineimg_mr () { return 0; }
function inlineimg_pt () { return 0; }
function inlineimg_intrinsPrefWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function inlineimg_render ( _ale_arg2,  _ale_arg6,  _ale_arg3,  _ale_arg7,  _ale_arg0,  _ale_arg5,  _ale_arg1,  _ale_arg4) { return _ale_arg0 + paintImg(_ale_arg1 + _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg6, _ale_arg7); }
function inlineimg_ml () { return 0; }
function inlineimg_computedHeight ( _ale_arg0) { return _ale_arg0; }
function inlineimg_firstChildWidth ( _ale_arg5,  _ale_arg1,  _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineimg_relRightY ( _ale_arg0) { return _ale_arg0; }
function inlineimg_pb () { return 0; }
function inlineimg_intrinsMinWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function inlineimg_computedWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_cellsReady ( _ale_arg0) { return _ale_arg0; }
function tablebox_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function tablebox_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function tablebox_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function tablebox_rows_inhColor ( _ale_arg0) { return _ale_arg0; }
function tablebox_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function tablebox_computedWidth ( _ale_arg3,  _ale_arg6,  _ale_arg1,  _ale_arg0,  _ale_arg7,  _ale_arg2,  _ale_arg4,  _ale_arg5,  _ale_arg8) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : min(max(_ale_arg3, _ale_arg2), _ale_arg4) - _ale_arg5 - _ale_arg6 - _ale_arg7 - _ale_arg8; }
function tablebox_pt ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function tablebox_maxWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_absX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function tablebox_computedHeight ( _ale_arg1,  _ale_arg0) { return isNaN(_ale_arg0) ? _ale_arg1 : _ale_arg0; }
function tablebox_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function tablebox_mt ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function tablebox_pb ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function tablebox_intrinsMinWidth ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return _ale_arg0 == 0 ? (_ale_arg1 + _ale_arg2) : _ale_arg0; }
function tablebox_mb ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function tablebox_rows_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_tableContentWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_colCount ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_colCount ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_canvas ( _ale_arg0) { return _ale_arg0; }
function tablebox_intrinsPrefWidth ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return _ale_arg0 == 0 ? (_ale_arg1 + _ale_arg2) : _ale_arg0; }
function tablebox_columns_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function tablebox_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function tablebox_columns_availableWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function tablebox_computedY ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg3,  _ale_arg0,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function tablebox_computedX ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function tablebox_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function tablebox_columns_tableContentHeight ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_cellsReady ( _ale_arg0) { return _ale_arg0 ? true : true; }
function tablebox_tmpComputedHeight ( _ale_arg0,  _ale_arg1,  _ale_arg3,  _ale_arg2) { return getTag(_ale_arg0 != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : _ale_arg3; }
function tablebox_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function tablebox_columns_absX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function cell_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function cell_mr () { return 0; }
function cell_containHeight () { return CONST_NAN(); }
function cell_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function cell_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function cell_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function cell_computedWidth ( _ale_arg0,  _ale_arg2,  _ale_arg3,  _ale_arg1,  _ale_arg4) { return _ale_arg0 - _ale_arg1 - _ale_arg2 - _ale_arg3 - _ale_arg4; }
function cell_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function cell_pt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function cell_pl ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function cell_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function cell_computedY ( _ale_arg0) { return _ale_arg0; }
function cell_computedX ( _ale_arg0) { return _ale_arg0; }
function cell_pr ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function cell_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function cell_childs_containHeight ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : CONST_NAN(); }
function cell_ml () { return 0; }
function cell_pb ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function cell_mb () { return 0; }
function cell_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function cell_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function cell_mt () { return 0; }
function root_child_availableWidth () { return getPageWidth() - 15; }
function root_child_childNum () { return 1; }
function root_child_containHeight () { return getPageHeight(); }
function root_child_inhColor () { return "black"; }
function root_child_absX ( _ale_arg0) { return _ale_arg0 ? 0 : 0; }
function root_child_absY ( _ale_arg0) { return _ale_arg0 ? 0 : 0; }
function root_child_canvas ( _ale_arg7,  _ale_arg2,  _ale_arg3,  _ale_arg1,  _ale_arg9,  _ale_arg6,  _ale_arg0,  _ale_arg8,  _ale_arg5,  _ale_arg4) { return paintStart(_ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4, _ale_arg5 + _ale_arg6 + _ale_arg7 + _ale_arg8 + _ale_arg9); }
function root_child_inhFontSize () { return 20; }
function flowrootc_offsetX () { return 0; }
function flowrootc_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowrootc_mb () { return 0; }
function flowrootc_posChilds_posY ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function flowrootc_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function flowrootc_posChilds_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function flowrootc_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function flowrootc_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowrootc_childs_canvas ( _ale_arg0) { return _ale_arg0; }
function flowrootc_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowrootc_posChilds_posWidth ( _ale_arg0) { return _ale_arg0; }
function flowrootc_posChilds_inhColor ( _ale_arg0) { return _ale_arg0; }
function flowrootc_posChilds_posHeight ( _ale_arg0) { return _ale_arg0; }
function flowrootc_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function flowrootc_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function flowrootc_offsetY () { return 0; }
function flowrootc_childs_inhOffsetX () { return 0; }
function flowrootc_posChilds_posX ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function flowrootc_childs_oldLineH ( _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg3) { return (_ale_arg0 == 1) ? _ale_arg1 : ((_ale_arg2 == 0) ? 0 : _ale_arg3); }
function flowrootc_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowrootc_childs_minX ( _ale_arg0) { return _ale_arg0; }
function flowrootc_mt () { return 0; }
function flowrootc_childs_inhOffsetY () { return 0; }
function flowrootc_pb () { return 0; }
function flowrootc_childs_containHeight ( _ale_arg0) { return _ale_arg0; }
function flowrootc_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function flowrootc_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function flowrootc_childs_minY ( _ale_arg0) { return _ale_arg0; }
function flowrootc_pt () { return 0; }
function flowrootc_render ( _ale_arg0) { return _ale_arg0; }
function normalinline_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function normalinline_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function normalinline_posChilds_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function normalinline_posChilds_posHeight ( _ale_arg0) { return _ale_arg0; }
function normalinline_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalinline_mb () { return 0; }
function normalinline_mt () { return 0; }
function normalinline_childs_inhOffsetX ( _ale_arg0) { return _ale_arg0; }
function normalinline_posChilds_inhColor ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_minX ( _ale_arg0) { return _ale_arg0; }
function normalinline_offsetX ( _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalinline_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalinline_posChilds_posX ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function normalinline_childs_inhOffsetY ( _ale_arg0) { return _ale_arg0; }
function normalinline_posChilds_posY ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function normalinline_render ( _ale_arg0) { return _ale_arg0; }
function normalinline_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function normalinline_childs_oldLineH ( _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg3) { return (_ale_arg0 == 1) ? _ale_arg1 : ((_ale_arg2 == 0) ? 0 : _ale_arg3); }
function normalinline_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalinline_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function normalinline_pt () { return 0; }
function normalinline_posChilds_posWidth ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_minY ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_containHeight ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function normalinline_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalinline_offsetY ( _ale_arg1,  _ale_arg0,  _ale_arg4,  _ale_arg5,  _ale_arg3,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalinline_pb () { return 0; }
function col_childs_cellNum () { return 0; }
function col_childs_availableWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + (_ale_arg1 ? 0 : 0); }
function col_childs_column () { return 0; }
function col_childs_absX ( _ale_arg0) { return _ale_arg0; }
function col_childs_absY () { return 0; }
function col_childs_row () { return 0; }
function col_render ( _ale_arg0) { return _ale_arg0; }
function col_childs_computedHeight () { return 0; }
function inlineblock_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineblock_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function inlineblock_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function inlineblock_computedHeight ( _ale_arg1,  _ale_arg0) { return isNaN(_ale_arg0) ? _ale_arg1 : _ale_arg0; }
function inlineblock_pt ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_offsetX ( _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function inlineblock_tmpComputedHeight ( _ale_arg0,  _ale_arg1,  _ale_arg3,  _ale_arg2) { return getTag(_ale_arg0 != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : _ale_arg3; }
function inlineblock_posChilds_posX ( _ale_arg0) { return _ale_arg0; }
function inlineblock_absX ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineblock_computedY ( _ale_arg0) { return _ale_arg0; }
function inlineblock_firstChildWidth ( _ale_arg5,  _ale_arg1,  _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineblock_posChilds_posHeight ( _ale_arg0) { return _ale_arg0; }
function inlineblock_mt ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_pb ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_maxLineH ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1 + _ale_arg2 + _ale_arg3); }
function inlineblock_posChilds_posY ( _ale_arg0) { return _ale_arg0; }
function inlineblock_absY ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineblock_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function inlineblock_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function inlineblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function inlineblock_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function inlineblock_posChilds_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function inlineblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function inlineblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function inlineblock_computedWidth ( _ale_arg3,  _ale_arg6,  _ale_arg1,  _ale_arg0,  _ale_arg7,  _ale_arg2,  _ale_arg4,  _ale_arg5,  _ale_arg8) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : min(max(_ale_arg3, _ale_arg2), _ale_arg4) - _ale_arg5 - _ale_arg6 - _ale_arg7 - _ale_arg8; }
function inlineblock_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_mb ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_offsetY ( _ale_arg1,  _ale_arg0,  _ale_arg4,  _ale_arg5,  _ale_arg3,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function inlineblock_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_childs_containHeight ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : CONST_NAN(); }
function inlineblock_posChilds_inhColor ( _ale_arg0) { return _ale_arg0; }
function inlineblock_computedX ( _ale_arg0) { return _ale_arg0; }
function inlineblock_relRightY ( _ale_arg0) { return _ale_arg0; }
function inlineblock_relRightX ( _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg1,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineblock_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_posChilds_posWidth ( _ale_arg0) { return _ale_arg0; }
function row_childs_absX () { return 0; }
function row_childs_canvas () { return 0; }
function row_computedHeight ( _ale_arg0) { return _ale_arg0; }
function row_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function row_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function row_childs_absY ( _ale_arg0) { return _ale_arg0; }
function row_render ( _ale_arg7,  _ale_arg4,  _ale_arg8,  _ale_arg0,  _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg6,  _ale_arg5) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg1) : 0) + (_ale_arg6 != "solid" ? 0 : paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3, _ale_arg7, _ale_arg8)); }
function row_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function row_childs_childNum () { return 0; }
function row_childs_availableWidth () { return 0; }
function row_childs_computedHeight ( _ale_arg0) { return _ale_arg0; }
function row_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function row_childs_column ( _ale_arg1,  _ale_arg0) { return columnsGetCol(_ale_arg0, _ale_arg1); }
function row_childs_row ( _ale_arg0) { return _ale_arg0; }
function normalblock_pb ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_posChilds_inhColor ( _ale_arg0) { return _ale_arg0; }
function normalblock_posChilds_posX ( _ale_arg0) { return _ale_arg0; }
function normalblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function normalblock_posChilds_posHeight ( _ale_arg0) { return _ale_arg0; }
function normalblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function normalblock_pr ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_posChilds_posWidth ( _ale_arg0) { return _ale_arg0; }
function normalblock_computedY ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg3,  _ale_arg0,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalblock_posChilds_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function normalblock_ml ( _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg6,  _ale_arg5) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (getTag(_ale_arg4) == CONST_AUTO() ? (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2)) / 2 : (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2) - getVal(_ale_arg4, _ale_arg1, _ale_arg2)))); }
function normalblock_computedX ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalblock_mb ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function normalblock_pl ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_childs_containHeight ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : CONST_NAN(); }
function normalblock_tmpComputedHeight ( _ale_arg0,  _ale_arg1,  _ale_arg3,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : _ale_arg3; }
function normalblock_computedHeight ( _ale_arg1,  _ale_arg0) { return isNaN(_ale_arg0) ? _ale_arg1 : _ale_arg0; }
function normalblock_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function normalblock_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function normalblock_pt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_posChilds_posY ( _ale_arg0) { return _ale_arg0; }
function normalblock_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg5,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg4,  _ale_arg7) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : max(_ale_arg3, _ale_arg2) - _ale_arg4 - _ale_arg5 - _ale_arg6 - _ale_arg7; }
function normalblock_mt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalblock_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function normalblock_mr ( _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg5) { return ((getTag(_ale_arg0) != CONST_AUTO()) && ((getTag(_ale_arg1) == CONST_AUTO() || getTag(_ale_arg2) == CONST_AUTO()))) ? getValue(_ale_arg0, _ale_arg3, _ale_arg4) : (getTag(_ale_arg1) == CONST_AUTO() ? 0 : (getTag(_ale_arg2) == CONST_AUTO() ? (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4)) / 2 : (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4) - getValue(_ale_arg2, _ale_arg3, _ale_arg4)))); }
function normalblock_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function normalblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function normalblock_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function cols_cols_minPercentGuess ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return (_ale_arg0 > 0) ? max((_ale_arg0 * _ale_arg1), _ale_arg2) : _ale_arg2; }
function cols_cols_prefGuess ( _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg0) { return (_ale_arg0 > 0) ? max((_ale_arg0 * _ale_arg1), _ale_arg2) : _ale_arg3; }
function cols_k ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return (_ale_arg0 != _ale_arg1) ? (_ale_arg1 - _ale_arg2) / (_ale_arg1 - _ale_arg0) : 1; }
function cols_cols_computedWidth ( _ale_arg0,  _ale_arg4,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg5) { return (_ale_arg0 ? 0 : 0) + (_ale_arg1 < _ale_arg2 ? Error("TODO: implement full tables algorithm") : 0) + ((_ale_arg3 < 0) ? _ale_arg4 : (((0 <= _ale_arg3 && _ale_arg3 <= 1)) ? (_ale_arg3 * _ale_arg5 + (1 - _ale_arg3) * _ale_arg4) : ((_ale_arg3 > 1) ? _ale_arg5 : Error("Logic Error")))); }
function cols_widthSelect ( _ale_arg0,  _ale_arg1,  _ale_arg2,  _ale_arg3) { return ((_ale_arg0 < _ale_arg1 && _ale_arg2 >= _ale_arg1)) ? 0 : (((_ale_arg2 < _ale_arg1 && _ale_arg3 >= _ale_arg1)) ? 1 : (- 1)); }
function cols_guessAbove ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_cols_upperBound ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_cols_tableContentHeight ( _ale_arg0) { return _ale_arg0; }
function cols_cols_absY ( _ale_arg0) { return _ale_arg0; }
function cols_cols_colCount ( _ale_arg0) { return _ale_arg0; }
function cols_cols_lowerBound ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_guessBelow ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_cols_cellsReady ( _ale_arg0) { return _ale_arg0; }
function textbox_intrinsMinWidth ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getMaxWordW(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function textbox_numberLines ( _ale_arg0) { return getNumberLines(_ale_arg0); }
function textbox_overflow () { return false; }
function textbox_splitText ( _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg1,  _ale_arg3) { return splitText(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4); }
function textbox_mt () { return 0; }
function textbox_intrinsHeight ( _ale_arg0) { return _ale_arg0; }
function textbox_relRightX ( _ale_arg1,  _ale_arg0,  _ale_arg3,  _ale_arg2) { return (_ale_arg0 == 1) ? (_ale_arg1 + _ale_arg2) : getLeftoverWidth(_ale_arg3); }
function textbox_offsetY ( _ale_arg1,  _ale_arg0,  _ale_arg4,  _ale_arg5,  _ale_arg3,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function textbox_pb () { return 0; }
function textbox_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function textbox_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function textbox_offsetX ( _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function textbox_renderColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function textbox_metrics () { return 0; }
function textbox_lineSpacing () { return 5; }
function textbox_relRightY ( _ale_arg1,  _ale_arg0,  _ale_arg2,  _ale_arg3) { return (_ale_arg0 - 1) * (_ale_arg1 + _ale_arg2) + _ale_arg3; }
function textbox_usedFontSize ( _ale_arg0) { return _ale_arg0; }
function textbox_mb () { return 0; }
function textbox_maxLineH ( _ale_arg1,  _ale_arg0) { return max(_ale_arg0, _ale_arg1); }
function textbox_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function textbox_render ( _ale_arg8,  _ale_arg11,  _ale_arg12,  _ale_arg1,  _ale_arg13,  _ale_arg7,  _ale_arg5,  _ale_arg0,  _ale_arg4,  _ale_arg6,  _ale_arg3,  _ale_arg10,  _ale_arg2,  _ale_arg9) { return _ale_arg0 + paintParagraph(_ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7, _ale_arg8, _ale_arg9, _ale_arg10, false, _ale_arg11, _ale_arg12, _ale_arg13); }
function textbox_intrinsPrefWidth ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getSumWordW(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_pt () { return 0; }
function textbox_firstChildWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getFirstWordW(_ale_arg0, _ale_arg1, _ale_arg2); }
function textbox_lineHeight ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getLineHeight(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_renderFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function flowblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function flowblock_ml ( _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg6,  _ale_arg5) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (getTag(_ale_arg4) == CONST_AUTO() ? (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2)) / 2 : (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2) - getVal(_ale_arg4, _ale_arg1, _ale_arg2)))); }
function flowblock_computedY ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg3,  _ale_arg0,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function flowblock_intrinsMinWidth ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return max(_ale_arg0 + _ale_arg1, _ale_arg2 + _ale_arg1); }
function flowblock_child_minX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function flowblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function flowblock_intrinsPrefWidth ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return _ale_arg0 == 0 ? _ale_arg1 + _ale_arg2 : _ale_arg0 + _ale_arg2; }
function flowblock_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function flowblock_child_inhColor ( _ale_arg0) { return _ale_arg0; }
function flowblock_child_maxWidth ( _ale_arg0) { return _ale_arg0; }
function flowblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function flowblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function flowblock_mb ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowblock_child_containHeight ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : CONST_NAN(); }
function flowblock_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg5,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg4,  _ale_arg7) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : max(_ale_arg3, _ale_arg2) - _ale_arg4 - _ale_arg5 - _ale_arg6 - _ale_arg7; }
function flowblock_pr ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowblock_pt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowblock_child_oldLineH () { return 0; }
function flowblock_pb ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowblock_tmpComputedHeight ( _ale_arg0,  _ale_arg1,  _ale_arg3,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : _ale_arg3; }
function flowblock_pl ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowblock_child_minY ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function flowblock_child_canvas ( _ale_arg0) { return _ale_arg0; }
function flowblock_child_relX () { return 0; }
function flowblock_child_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function flowblock_mr ( _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg5) { return ((getTag(_ale_arg0) != CONST_AUTO()) && ((getTag(_ale_arg1) == CONST_AUTO() || getTag(_ale_arg2) == CONST_AUTO()))) ? getValue(_ale_arg0, _ale_arg3, _ale_arg4) : (getTag(_ale_arg1) == CONST_AUTO() ? 0 : (getTag(_ale_arg2) == CONST_AUTO() ? (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4)) / 2 : (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4) - getValue(_ale_arg2, _ale_arg3, _ale_arg4)))); }
function flowblock_mt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowblock_child_relY () { return 0; }
function flowblock_computedX ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function flowblock_computedHeight ( _ale_arg1,  _ale_arg0) { return isNaN(_ale_arg0) ? _ale_arg1 : _ale_arg0; }
function flowblock_child_rightPadding () { return 0; }
function flowblock_intrinsHeight ( _ale_arg4,  _ale_arg6,  _ale_arg3,  _ale_arg2,  _ale_arg0,  _ale_arg5,  _ale_arg1) { return _ale_arg0 + _ale_arg1 - _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5 + _ale_arg6; }
function blockimg_intrinsPrefWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function blockimg_pb () { return 0; }
function blockimg_intrinsMinWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function blockimg_computedY ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg3,  _ale_arg0,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function blockimg_pt () { return 0; }
function blockimg_mt () { return 0; }
function blockimg_pl () { return 0; }
function blockimg_mr () { return 0; }
function blockimg_intrinsHeight ( _ale_arg0) { return getImageHeight(_ale_arg0); }
function blockimg_ml () { return 0; }
function blockimg_mb () { return 0; }
function blockimg_computedX ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function blockimg_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function blockimg_render ( _ale_arg3,  _ale_arg0,  _ale_arg1,  _ale_arg2) { return _ale_arg0 + paintImg(_ale_arg1, _ale_arg2, _ale_arg3); }
function blockimg_computedWidth ( _ale_arg0) { return _ale_arg0; }
function blockimg_computedHeight ( _ale_arg0) { return _ale_arg0; }
function blockimg_pr () { return 0; }
function blockimg_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function positionedblock_posRelX ( _ale_arg7,  _ale_arg2,  _ale_arg1,  _ale_arg4,  _ale_arg8,  _ale_arg0,  _ale_arg6,  _ale_arg3,  _ale_arg5) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (_ale_arg2 - _ale_arg4 - _ale_arg5 - _ale_arg6 - _ale_arg7 - getValue(_ale_arg3, _ale_arg1, _ale_arg2) - _ale_arg8)); }
function positionedblock_posRelY ( _ale_arg7,  _ale_arg2,  _ale_arg1,  _ale_arg4,  _ale_arg3,  _ale_arg8,  _ale_arg6,  _ale_arg5,  _ale_arg0) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (_ale_arg2 - _ale_arg4 - _ale_arg5 - _ale_arg6 - _ale_arg7 - getValue(_ale_arg3, _ale_arg1, _ale_arg2) - _ale_arg8)); }
function positionedblock_computedY ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return (_ale_arg0 == "absolute" ? _ale_arg1 : 0) + _ale_arg2; }
function positionedblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function positionedblock_posHeightTmp ( _ale_arg0,  _ale_arg1) { return _ale_arg0 == "absolute" ? _ale_arg1 : getPageHeight(); }
function positionedblock_computedHeight ( _ale_arg0) { return _ale_arg0; }
function positionedblock_computedWidth ( _ale_arg2,  _ale_arg10,  _ale_arg5,  _ale_arg0,  _ale_arg1,  _ale_arg6,  _ale_arg7,  _ale_arg11,  _ale_arg3,  _ale_arg8,  _ale_arg4,  _ale_arg9,  _ale_arg12) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (((getTag(_ale_arg3) == CONST_AUTO() || getTag(_ale_arg4) == CONST_AUTO() || getTag(_ale_arg5) == CONST_AUTO() || getTag(_ale_arg6) == CONST_AUTO())) ? min(max(_ale_arg7, _ale_arg2), _ale_arg8) : (_ale_arg2 - getValue(_ale_arg3, _ale_arg1, _ale_arg2) - getValue(_ale_arg4, _ale_arg1, _ale_arg2) - _ale_arg9 - _ale_arg10 - _ale_arg11 - _ale_arg12)); }
function positionedblock_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function positionedblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function positionedblock_computedX ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return (_ale_arg0 == "absolute" ? _ale_arg1 : 0) + _ale_arg2; }
function positionedblock_mr ( _ale_arg2,  _ale_arg6,  _ale_arg3,  _ale_arg1,  _ale_arg0,  _ale_arg8,  _ale_arg4,  _ale_arg5,  _ale_arg7) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (((getTag(_ale_arg3) != CONST_AUTO() && getTag(_ale_arg4) != CONST_AUTO() && getTag(_ale_arg5) != CONST_AUTO())) ? (getTag(_ale_arg6) == CONST_AUTO() ? (_ale_arg2 - _ale_arg7 - _ale_arg8 - getValue(_ale_arg4, _ale_arg1, _ale_arg2) - getValue(_ale_arg5, _ale_arg1, _ale_arg2) - getValue(_ale_arg3, _ale_arg1, _ale_arg2)) / 2 : (_ale_arg2 - _ale_arg7 - _ale_arg8 - getValue(_ale_arg4, _ale_arg1, _ale_arg2) - getValue(_ale_arg5, _ale_arg1, _ale_arg2) - getValue(_ale_arg6, _ale_arg1, _ale_arg2) - getValue(_ale_arg3, _ale_arg1, _ale_arg2))) : 0); }
function positionedblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function positionedblock_mb ( _ale_arg1,  _ale_arg4,  _ale_arg7,  _ale_arg3,  _ale_arg0,  _ale_arg10,  _ale_arg2,  _ale_arg9,  _ale_arg6,  _ale_arg8,  _ale_arg5) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg1, _ale_arg2, _ale_arg3) : (((getTag(_ale_arg4) == CONST_AUTO() || getTag(_ale_arg5) == CONST_AUTO() || getTag(_ale_arg6) == CONST_AUTO())) ? 0 : ((getTag(_ale_arg0) == CONST_AUTO()) ? (_ale_arg7 - _ale_arg8 - _ale_arg9 - getValue(_ale_arg5, _ale_arg2, _ale_arg7) - getValue(_ale_arg6, _ale_arg2, _ale_arg7) - getValue(_ale_arg10, _ale_arg2, _ale_arg7)) / 2 : (_ale_arg7 - _ale_arg8 - _ale_arg9 - getValue(_ale_arg5, _ale_arg2, _ale_arg7) - getValue(_ale_arg6, _ale_arg2, _ale_arg7) - getValue(_ale_arg10, _ale_arg2, _ale_arg7) - getValue(_ale_arg0, _ale_arg2, _ale_arg7)))); }
function positionedblock_pt ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function positionedblock_containHeight ( _ale_arg4,  _ale_arg1,  _ale_arg2,  _ale_arg3,  _ale_arg0) { return _ale_arg0 - _ale_arg1 - _ale_arg2 - _ale_arg3 - _ale_arg4; }
function positionedblock_pl ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function positionedblock_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function positionedblock_posWidthTmp ( _ale_arg0,  _ale_arg1) { return _ale_arg0 == "absolute" ? _ale_arg1 : getPageWidth() - 15; }
function positionedblock_computedHeight ( _ale_arg11,  _ale_arg5,  _ale_arg1,  _ale_arg6,  _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg12,  _ale_arg8,  _ale_arg7,  _ale_arg9,  _ale_arg10,  _ale_arg13,  _ale_arg3) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (((getTag(_ale_arg3) == CONST_AUTO() || getTag(_ale_arg4) == CONST_AUTO() || getTag(_ale_arg5) == CONST_AUTO() || getTag(_ale_arg6) == CONST_AUTO())) ? _ale_arg7 : (_ale_arg2 - getValue(_ale_arg8, _ale_arg1, _ale_arg2) - getValue(_ale_arg9, _ale_arg1, _ale_arg2) - _ale_arg10 - _ale_arg11 - _ale_arg12 - _ale_arg13)); }
function positionedblock_pb ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function positionedblock_mt ( _ale_arg6,  _ale_arg3,  _ale_arg7,  _ale_arg2,  _ale_arg0,  _ale_arg10,  _ale_arg1,  _ale_arg9,  _ale_arg5,  _ale_arg8,  _ale_arg4) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (((getTag(_ale_arg3) == CONST_AUTO() || getTag(_ale_arg4) == CONST_AUTO() || getTag(_ale_arg5) == CONST_AUTO())) ? 0 : ((getTag(_ale_arg6) == CONST_AUTO()) ? (_ale_arg7 - _ale_arg8 - _ale_arg9 - getValue(_ale_arg4, _ale_arg1, _ale_arg7) - getValue(_ale_arg5, _ale_arg1, _ale_arg7) - getValue(_ale_arg10, _ale_arg1, _ale_arg7)) / 2 : (_ale_arg7 - _ale_arg8 - _ale_arg9 - getValue(_ale_arg4, _ale_arg1, _ale_arg7) - getValue(_ale_arg5, _ale_arg1, _ale_arg7) - getValue(_ale_arg10, _ale_arg1, _ale_arg7) - getValue(_ale_arg6, _ale_arg1, _ale_arg7)))); }
function positionedblock_pr ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function positionedblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function positionedblock_render ( _ale_arg0) { return _ale_arg0; }
function positionedblock_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function positionedblock_ml ( _ale_arg2,  _ale_arg0,  _ale_arg6,  _ale_arg3,  _ale_arg1,  _ale_arg8,  _ale_arg4,  _ale_arg5,  _ale_arg7) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (((getTag(_ale_arg3) != CONST_AUTO() && getTag(_ale_arg4) != CONST_AUTO() && getTag(_ale_arg5) != CONST_AUTO())) ? (getTag(_ale_arg6) == CONST_AUTO() ? (_ale_arg2 - _ale_arg7 - _ale_arg8 - getValue(_ale_arg4, _ale_arg1, _ale_arg2) - getValue(_ale_arg5, _ale_arg1, _ale_arg2) - getValue(_ale_arg3, _ale_arg1, _ale_arg2)) / 2 : (_ale_arg2 - _ale_arg7 - _ale_arg8 - getValue(_ale_arg4, _ale_arg1, _ale_arg2) - getValue(_ale_arg5, _ale_arg1, _ale_arg2) - getValue((_ale_arg6), _ale_arg1, _ale_arg2) - getValue(_ale_arg3, _ale_arg1, _ale_arg2))) : 0); }
function positionedblock_childs_containHeight ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : CONST_NAN(); }
function positionedblock_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function isInorder(node, pass) {
  switch (pass) {
    case 0:
     throw "did not expect inorder call for pass 0";
    case 1:
     throw "did not expect inorder call for pass 1";
    case 2:
     throw "did not expect inorder call for pass 2";
    case 3:
     throw "did not expect inorder call for pass 3";
    case 4:
     throw "did not expect inorder call for pass 4";
    case 5:
     throw "did not expect inorder call for pass 5";
    case 6:
     throw "did not expect inorder call for pass 6";
    case 7:
     throw "did not expect inorder call for pass 7";
    case 8:
     throw "did not expect inorder call for pass 8";
    default: throw ("unknown pass " + pass);
  }
}
///// pass /////
function visit_inlineimg_0(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 0);
  setAttribSafe(node, "intrinsheight", inlineimg_intrinsHeight(getAttribSafe(node, "imagehandle")));
  logger.log("    inlineimg_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsminwidth", inlineimg_intrinsMinWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    inlineimg_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsprefwidth", inlineimg_intrinsPrefWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    inlineimg_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "mb", inlineimg_mb());
  logger.log("    inlineimg_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "ml", inlineimg_ml());
  logger.log("    inlineimg_ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(node, "mr", inlineimg_mr());
  logger.log("    inlineimg_mr: " + getAttribSafe(node, "mr"));
  setAttribSafe(node, "mt", inlineimg_mt());
  logger.log("    inlineimg_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "pb", inlineimg_pb());
  logger.log("    inlineimg_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pl", inlineimg_pl());
  logger.log("    inlineimg_pl: " + getAttribSafe(node, "pl"));
  setAttribSafe(node, "pr", inlineimg_pr());
  logger.log("    inlineimg_pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "pt", inlineimg_pt());
  logger.log("    inlineimg_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", inlineimg_usedColor(getInputAttribSafe(node, "color", '"inherit"'), getAttribSafe(node, "inhcolor")));
  logger.log("    inlineimg_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"inherit"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", inlineimg_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    inlineimg_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "computedheight", inlineimg_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    inlineimg_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "computedwidth", inlineimg_computedWidth(getAttribSafe(node, "intrinsprefwidth")));
  logger.log("    inlineimg_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  return true;
}
function visit_tablebox_0(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", tablebox_usedColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    tablebox_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", tablebox_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    tablebox_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "selfintrinswidth", tablebox_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    tablebox_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", tablebox_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    tablebox_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

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
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step rows@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step rows@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();

  return true;
}
function visit_cell_0(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 0);
  setAttribSafe(node, "containheight", cell_containHeight());
  logger.log("    cell_containHeight: " + getAttribSafe(node, "containheight"));
  setAttribSafe(node, "mb", cell_mb());
  logger.log("    cell_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "ml", cell_ml());
  logger.log("    cell_ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(node, "mr", cell_mr());
  logger.log("    cell_mr: " + getAttribSafe(node, "mr"));
  setAttribSafe(node, "mt", cell_mt());
  logger.log("    cell_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "usedcolor", cell_usedColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    cell_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", cell_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    cell_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "selfintrinswidth", cell_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    cell_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", cell_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    cell_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "containheight", (getTag(getInputAttribSafe(node, "height", '{1,0}')) != CONST_AUTO() ? getValue(getInputAttribSafe(node, "height", '{1,0}'), getInputAttribSafe(node, "intrinsfontsize", '{2,0}'), getAttribSafe(node, "containheight")) : CONST_NAN()));
      logger.log("         step childs@containHeight: " + getAttribSafe(child, "containheight"));
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();

  return true;
}
function visit_root_0(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"child"), "availablewidth", root_child_availableWidth());
  logger.log("    root_child_availableWidth: " + getAttribSafe(getChildByRefName(node,"child"), "availablewidth"));
  setAttribSafe(getChildByRefName(node,"child"), "childnum", root_child_childNum());
  logger.log("    root_child_childNum: " + getAttribSafe(getChildByRefName(node,"child"), "childnum"));
  setAttribSafe(getChildByRefName(node,"child"), "containheight", root_child_containHeight());
  logger.log("    root_child_containHeight: " + getAttribSafe(getChildByRefName(node,"child"), "containheight"));
  setAttribSafe(getChildByRefName(node,"child"), "inhcolor", root_child_inhColor());
  logger.log("    root_child_inhColor: " + getAttribSafe(getChildByRefName(node,"child"), "inhcolor"));
  setAttribSafe(getChildByRefName(node,"child"), "inhfontsize", root_child_inhFontSize());
  logger.log("    root_child_inhFontSize: " + getAttribSafe(getChildByRefName(node,"child"), "inhfontsize"));
  return true;
}
function visit_flowrootc_0(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 0);
  setAttribSafe(node, "mb", flowrootc_mb());
  logger.log("    flowrootc_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "mt", flowrootc_mt());
  logger.log("    flowrootc_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "offsetx", flowrootc_offsetX());
  logger.log("    flowrootc_offsetX: " + getAttribSafe(node, "offsetx"));
  setAttribSafe(node, "offsety", flowrootc_offsetY());
  logger.log("    flowrootc_offsetY: " + getAttribSafe(node, "offsety"));
  setAttribSafe(node, "pb", flowrootc_pb());
  logger.log("    flowrootc_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pt", flowrootc_pt());
  logger.log("    flowrootc_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", flowrootc_usedColor(getInputAttribSafe(node, "color", '"inherit"'), getAttribSafe(node, "inhcolor")));
  logger.log("    flowrootc_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"inherit"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", flowrootc_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    flowrootc_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "summarginspadding", flowrootc_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    flowrootc_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(child, "inhoffsetx", (0));
      logger.log("         step childs@inhOffsetX: " + getAttribSafe(child, "inhoffsetx"));
      setAttribSafe(child, "inhoffsety", (0));
      logger.log("         step childs@inhOffsetY: " + getAttribSafe(child, "inhoffsety"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step posChilds@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step posChilds@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();

  return true;
}
function visit_normalinline_0(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 0);
  setAttribSafe(node, "mb", normalinline_mb());
  logger.log("    normalinline_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "mt", normalinline_mt());
  logger.log("    normalinline_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "pb", normalinline_pb());
  logger.log("    normalinline_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pt", normalinline_pt());
  logger.log("    normalinline_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", normalinline_usedColor(getInputAttribSafe(node, "color", '"inherit"'), getAttribSafe(node, "inhcolor")));
  logger.log("    normalinline_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"inherit"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", normalinline_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    normalinline_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "summarginspadding", normalinline_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    normalinline_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step posChilds@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step posChilds@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();

  return true;
}
function visit_col_0(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 0);

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
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
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      ;
      ;
      ;
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();

  return true;
}
function visit_inlineblock_0(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", inlineblock_usedColor(getInputAttribSafe(node, "color", '"inherit"'), getAttribSafe(node, "inhcolor")));
  logger.log("    inlineblock_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"inherit"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", inlineblock_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    inlineblock_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "selfintrinswidth", inlineblock_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    inlineblock_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", inlineblock_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    inlineblock_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step posChilds@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step posChilds@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();

  return true;
}
function visit_row_0(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", row_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    row_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", row_usedFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    row_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));

  setAttribSafe(node, "childs_cellnum_init", (0));
  setAttribSafe(node, "childs_cellnum_last", getAttribSafe(node, "childs_cellnum_init"));
  logger.log("      init childs@cellNum: " + getAttribSafe(node, "childs_cellnum_init"));
  logger.log("    last init childs_cellnum_last: " + getAttribSafe(node, "childs_cellnum_last"));
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
      setAttribSafe(child, "row", (getAttribSafe(node, "rownum") ));
      logger.log("         step childs@row: " + getAttribSafe(child, "row"));
      setAttribSafe(node, "cells", (appendIntPairList(getAttribSafe(node, "cells"), pairInt(isEmptyInt(getAttribSafe(child, "rowspan")) ? 1 : valueInt(getAttribSafe(child, "rowspan")), isEmptyInt(getAttribSafe(child, "colspan")) ? 1 : valueInt(getAttribSafe(child, "colspan"))))));
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
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
      setAttribSafe(node, "intrinscolcount", (getAttribSafe(node, "intrinscolcount") + (isEmptyInt(getAttribSafe(child, "colspan")) ? 1 : valueInt(getAttribSafe(child, "colspan")))));
      logger.log("         step intrinsColCount: " + getAttribSafe(node, "intrinscolcount"));
    }
  })();

  return true;
}
function visit_cols_0(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 0);
  return true;
}
function visit_normalblock_0(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", normalblock_usedColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    normalblock_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", normalblock_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    normalblock_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "selfintrinswidth", normalblock_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    normalblock_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", normalblock_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    normalblock_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step posChilds@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step posChilds@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();

  return true;
}
function visit_flowblock_0(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"child"), "oldlineh", flowblock_child_oldLineH());
  logger.log("    flowblock_child_oldLineH: " + getAttribSafe(getChildByRefName(node,"child"), "oldlineh"));
  setAttribSafe(getChildByRefName(node,"child"), "relx", flowblock_child_relX());
  logger.log("    flowblock_child_relX: " + getAttribSafe(getChildByRefName(node,"child"), "relx"));
  setAttribSafe(getChildByRefName(node,"child"), "rely", flowblock_child_relY());
  logger.log("    flowblock_child_relY: " + getAttribSafe(getChildByRefName(node,"child"), "rely"));
  setAttribSafe(getChildByRefName(node,"child"), "rightpadding", flowblock_child_rightPadding());
  logger.log("    flowblock_child_rightPadding: " + getAttribSafe(getChildByRefName(node,"child"), "rightpadding"));
  setAttribSafe(node, "usedcolor", flowblock_usedColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    flowblock_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", flowblock_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    flowblock_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(getChildByRefName(node,"child"), "inhcolor", flowblock_child_inhColor(getAttribSafe(node, "usedcolor")));
  logger.log("    flowblock_child_inhColor: " + getAttribSafe(getChildByRefName(node,"child"), "inhcolor"));
  logger.log("        usedColor: " + getAttribSafe(node, "usedcolor"));
  setAttribSafe(getChildByRefName(node,"child"), "inhfontsize", flowblock_child_inhFontSize(getAttribSafe(node, "usedfontsize")));
  logger.log("    flowblock_child_inhFontSize: " + getAttribSafe(getChildByRefName(node,"child"), "inhfontsize"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "selfintrinswidth", flowblock_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    flowblock_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", flowblock_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    flowblock_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  return true;
}
function visit_textbox_0(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "linespacing", textbox_lineSpacing());
  logger.log("    textbox_lineSpacing: " + getAttribSafe(node, "linespacing"));
  setAttribSafe(node, "mb", textbox_mb());
  logger.log("    textbox_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "metrics", textbox_metrics());
  logger.log("    textbox_metrics: " + getAttribSafe(node, "metrics"));
  setAttribSafe(node, "mt", textbox_mt());
  logger.log("    textbox_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "overflow", textbox_overflow());
  logger.log("    textbox_overflow: " + getAttribSafe(node, "overflow"));
  setAttribSafe(node, "pb", textbox_pb());
  logger.log("    textbox_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pt", textbox_pt());
  logger.log("    textbox_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "rendercolor", textbox_renderColor(getInputAttribSafe(node, "color", '"inherit"'), getAttribSafe(node, "inhcolor")));
  logger.log("    textbox_renderColor: " + getAttribSafe(node, "rendercolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"inherit"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "renderfontsize", textbox_renderFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    textbox_renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "firstchildwidth", textbox_firstChildWidth(getAttribSafe(node, "text"), getAttribSafe(node, "renderfontsize"), getInputAttribSafe(node, "fontfamily", '"Arial"')));
  logger.log("    textbox_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        text: " + getAttribSafe(node, "text"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
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
  setAttribSafe(node, "usedfontsize", textbox_usedFontSize(getAttribSafe(node, "renderfontsize")));
  logger.log("    textbox_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  setAttribSafe(node, "intrinsheight", textbox_intrinsHeight(getAttribSafe(node, "lineheight")));
  logger.log("    textbox_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  return true;
}
function visit_blockimg_0(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 0);
  setAttribSafe(node, "intrinsheight", blockimg_intrinsHeight(getAttribSafe(node, "imagehandle")));
  logger.log("    blockimg_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsminwidth", blockimg_intrinsMinWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    blockimg_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsprefwidth", blockimg_intrinsPrefWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    blockimg_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "mb", blockimg_mb());
  logger.log("    blockimg_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "ml", blockimg_ml());
  logger.log("    blockimg_ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(node, "mr", blockimg_mr());
  logger.log("    blockimg_mr: " + getAttribSafe(node, "mr"));
  setAttribSafe(node, "mt", blockimg_mt());
  logger.log("    blockimg_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "pb", blockimg_pb());
  logger.log("    blockimg_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pl", blockimg_pl());
  logger.log("    blockimg_pl: " + getAttribSafe(node, "pl"));
  setAttribSafe(node, "pr", blockimg_pr());
  logger.log("    blockimg_pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "pt", blockimg_pt());
  logger.log("    blockimg_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", blockimg_usedColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    blockimg_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", blockimg_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    blockimg_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "computedheight", blockimg_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    blockimg_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "computedwidth", blockimg_computedWidth(getAttribSafe(node, "intrinsprefwidth")));
  logger.log("    blockimg_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  return true;
}
function visit_positionedblock_0(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", positionedblock_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    positionedblock_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", positionedblock_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    positionedblock_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "selfintrinswidth", positionedblock_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    positionedblock_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", positionedblock_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    positionedblock_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

  setAttribSafe(node, "childs_childnum_init", (0));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "numchilds_init", (0));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
    }
  })();

  return true;
}
///// pass /////
function visit_inlineimg_1(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 1);
  return true;
}
function visit_tablebox_1(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 1);

  setAttribSafe(node, "colcount_init", (0));
  setAttribSafe(node, "colcount", getAttribSafe(node, "colcount_init"));
  logger.log("      init colCount: " + getAttribSafe(node, "colcount_init"));
  logger.log("    last init colcount: " + getAttribSafe(node, "colcount"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
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
function visit_cell_1(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 1);
  return true;
}
function visit_root_1(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 1);
  return true;
}
function visit_flowrootc_1(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 1);
  return true;
}
function visit_normalinline_1(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 1);
  return true;
}
function visit_col_1(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 1);

  setAttribSafe(node, "intrinspercentwidth_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "intrinspercentwidth", getAttribSafe(node, "intrinspercentwidth_init"));
  logger.log("      init intrinsPercentWidth: " + getAttribSafe(node, "intrinspercentwidth_init"));
  logger.log("    last init intrinspercentwidth: " + getAttribSafe(node, "intrinspercentwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinspercentwidth", (max((getPercent(getInputAttribSafe(child, "width", '{1,0}')) ? getPercent(getInputAttribSafe(child, "width", '{1,0}')) : 0) + (getPercent(getInputAttribSafe(child, "paddingleft", '{302,0}')) ? getPercent(getInputAttribSafe(child, "paddingleft", '{302,0}')) : 0) + (getPercent(getInputAttribSafe(child, "paddingright", '{302,0}')) ? getPercent(getInputAttribSafe(child, "paddingright", '{302,0}')) : 0), getAttribSafe(node, "intrinspercentwidth"))));
      logger.log("         step intrinsPercentWidth: " + getAttribSafe(node, "intrinspercentwidth"));
    }
  })();

  return true;
}
function visit_inlineblock_1(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 1);
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
    }
  })();

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
      setAttribSafe(child, "cellsready", (getAttribSafe(node, "cellsready") ));
      logger.log("         step cols@cellsReady: " + getAttribSafe(child, "cellsready"));
      setAttribSafe(child, "colcount", (getAttribSafe(node, "colcount") ));
      logger.log("         step cols@colCount: " + getAttribSafe(child, "colcount"));
      setAttribSafe(child, "colnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("cols_colnum_init") : ("colnum")) + 1));
      logger.log("         step cols@colNum: " + getAttribSafe(child, "colnum"));
    }
  })();

  return true;
}
function visit_normalblock_1(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 1);
  return true;
}
function visit_flowblock_1(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 1);
  return true;
}
function visit_textbox_1(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 1);
  return true;
}
function visit_blockimg_1(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 1);
  return true;
}
function visit_positionedblock_1(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 1);
  return true;
}
///// pass /////
function visit_inlineimg_2(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 2);
  return true;
}
function visit_tablebox_2(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 2);
  return true;
}
function visit_cell_2(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 2);
  return true;
}
function visit_root_2(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 2);
  return true;
}
function visit_flowrootc_2(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 2);
  return true;
}
function visit_normalinline_2(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 2);
  return true;
}
function visit_col_2(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 2);
  return true;
}
function visit_inlineblock_2(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 2);
  return true;
}
function visit_row_2(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 2);
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

  return true;
}
function visit_normalblock_2(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 2);
  return true;
}
function visit_flowblock_2(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 2);
  return true;
}
function visit_textbox_2(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 2);
  return true;
}
function visit_blockimg_2(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 2);
  return true;
}
function visit_positionedblock_2(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 2);
  return true;
}
///// pass /////
function visit_inlineimg_3(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 3);
  return true;
}
function visit_tablebox_3(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "intrinsminwidth", tablebox_intrinsMinWidth(getAttribSafe(getChildByRefName(node,"columns"), "intrinsminwidth"), getAttribSafe(node, "selfintrinswidth"), getAttribSafe(node, "summarginspadding")));
  logger.log("    tablebox_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        columns@intrinsMinWidth: " + getAttribSafe(getChildByRefName(node,"columns"), "intrinsminwidth"));
  logger.log("        selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  setAttribSafe(node, "intrinsprefwidth", tablebox_intrinsPrefWidth(getAttribSafe(node, "selfintrinswidth"), getAttribSafe(getChildByRefName(node,"columns"), "intrinsprefwidth"), getAttribSafe(node, "summarginspadding")));
  logger.log("    tablebox_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        columns@intrinsPrefWidth: " + getAttribSafe(getChildByRefName(node,"columns"), "intrinsprefwidth"));
  logger.log("        sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  return true;
}
function visit_cell_3(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "selfintrinswidth") == 0 ? max(getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_root_3(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 3);
  return true;
}
function visit_flowrootc_3(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 0 : (- 5)) + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "poswidth", (getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step posChilds@posWidth: " + getAttribSafe(child, "poswidth"));
    }
  })();

  return true;
}
function visit_normalinline_3(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 0 : (- 5)) + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "poswidth", (getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step posChilds@posWidth: " + getAttribSafe(child, "poswidth"));
    }
  })();

  return true;
}
function visit_col_3(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
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
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (((isEmptyInt(getAttribSafe(child, "colspan")) || valueInt(getAttribSafe(child, "colspan")) == 1)) ? max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(child, "intrinsminwidth")) : getAttribSafe(node, "intrinsminwidth") ));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (((isEmptyInt(getAttribSafe(child, "colspan")) || valueInt(getAttribSafe(child, "colspan")) == 1)) ? max(getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_inlineblock_3(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "selfintrinswidth") == 0 ? max(getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_row_3(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 3);
  return true;
}
function visit_cols_3(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 3);

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
function visit_normalblock_3(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "selfintrinswidth") == 0 ? max(getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_flowblock_3(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 3);
  setAttribSafe(node, "intrinsminwidth", flowblock_intrinsMinWidth(getAttribSafe(getChildByRefName(node,"child"), "intrinsminwidth"), getAttribSafe(node, "selfintrinswidth"), getAttribSafe(node, "summarginspadding")));
  logger.log("    flowblock_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        child@intrinsMinWidth: " + getAttribSafe(getChildByRefName(node,"child"), "intrinsminwidth"));
  logger.log("        selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  setAttribSafe(node, "intrinsprefwidth", flowblock_intrinsPrefWidth(getAttribSafe(getChildByRefName(node,"child"), "intrinsprefwidth"), getAttribSafe(node, "selfintrinswidth"), getAttribSafe(node, "summarginspadding")));
  logger.log("    flowblock_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        child@intrinsPrefWidth: " + getAttribSafe(getChildByRefName(node,"child"), "intrinsprefwidth"));
  logger.log("        selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
  return true;
}
function visit_textbox_3(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 3);
  return true;
}
function visit_blockimg_3(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 3);
  return true;
}
function visit_positionedblock_3(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "selfintrinswidth") == 0 ? max(getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
///// pass /////
function visit_inlineimg_4(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 4);
  setAttribSafe(node, "firstchildwidth", inlineimg_firstChildWidth(getAttribSafe(node, "mr"), getAttribSafe(node, "rightpadding"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineimg_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "offsetx", inlineimg_offsetX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "inhoffsetx"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "left", '{1,0}'), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    inlineimg_offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhOffsetX: " + getAttribSafe(node, "inhoffsetx"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "offsety", inlineimg_offsetY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "inhoffsety"), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "bottom", '{1,0}'), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    inlineimg_offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        inhOffsetY: " + getAttribSafe(node, "inhoffsety"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  return true;
}
function visit_tablebox_4(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 4);
  setAttribSafe(node, "maxwidth", tablebox_maxWidth(getAttribSafe(node, "availablewidth")));
  logger.log("    tablebox_maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  setAttribSafe(node, "mb", tablebox_mb(getInputAttribSafe(node, "marginbottom", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    tablebox_mb: " + getAttribSafe(node, "mb"));
  logger.log("        marginBottom: " + getInputAttribSafe(node, "marginbottom", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "ml", tablebox_ml(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "maxwidth")));
  logger.log("    tablebox_ml: " + getAttribSafe(node, "ml"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "mr", tablebox_mr(getInputAttribSafe(node, "marginleft", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    tablebox_mr: " + getAttribSafe(node, "mr"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "mt", tablebox_mt(getInputAttribSafe(node, "margintop", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    tablebox_mt: " + getAttribSafe(node, "mt"));
  logger.log("        marginTop: " + getInputAttribSafe(node, "margintop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "pb", tablebox_pb(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingbottom", '{302,0}')));
  logger.log("    tablebox_pb: " + getAttribSafe(node, "pb"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingBottom: " + getInputAttribSafe(node, "paddingbottom", '{302,0}'));
  setAttribSafe(node, "pl", tablebox_pl(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    tablebox_pl: " + getAttribSafe(node, "pl"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", tablebox_pr(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    tablebox_pr: " + getAttribSafe(node, "pr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  setAttribSafe(node, "pt", tablebox_pt(getInputAttribSafe(node, "paddingtop", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    tablebox_pt: " + getAttribSafe(node, "pt"));
  logger.log("        paddingTop: " + getInputAttribSafe(node, "paddingtop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "computedwidth", tablebox_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "mr"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    tablebox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(getChildByRefName(node,"columns"), "availablewidth", tablebox_columns_availableWidth(getAttribSafe(node, "computedwidth")));
  logger.log("    tablebox_columns_availableWidth: " + getAttribSafe(getChildByRefName(node,"columns"), "availablewidth"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  return true;
}
function visit_cell_4(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 4);
  setAttribSafe(node, "pb", cell_pb(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingbottom", '{302,0}')));
  logger.log("    cell_pb: " + getAttribSafe(node, "pb"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingBottom: " + getInputAttribSafe(node, "paddingbottom", '{302,0}'));
  setAttribSafe(node, "pl", cell_pl(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    cell_pl: " + getAttribSafe(node, "pl"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", cell_pr(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    cell_pr: " + getAttribSafe(node, "pr"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  setAttribSafe(node, "pt", cell_pt(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "paddingtop", '{302,0}'), getAttribSafe(node, "usedfontsize")));
  logger.log("    cell_pt: " + getAttribSafe(node, "pt"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        paddingTop: " + getInputAttribSafe(node, "paddingtop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "computedwidth", cell_computedWidth(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "mr"), getAttribSafe(node, "pl"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    cell_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
function visit_root_4(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 4);
  return true;
}
function visit_flowrootc_4(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 4);
  setAttribSafe(node, "ml", flowrootc_ml(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "maxwidth")));
  logger.log("    flowrootc_ml: " + getAttribSafe(node, "ml"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "mr", flowrootc_mr(getInputAttribSafe(node, "marginleft", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    flowrootc_mr: " + getAttribSafe(node, "mr"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "pl", flowrootc_pl(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    flowrootc_pl: " + getAttribSafe(node, "pl"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", flowrootc_pr(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    flowrootc_pr: " + getAttribSafe(node, "pr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
    }
  })();


  setAttribSafe(node, "childs_rightpadding_init", (0));
  setAttribSafe(node, "childs_rightpadding_last", getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("      init childs@rightPadding: " + getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("    last init childs_rightpadding_last: " + getAttribSafe(node, "childs_rightpadding_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? getAttribSafe(node, "rightpadding") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

  return true;
}
function visit_normalinline_4(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 4);
  setAttribSafe(node, "ml", normalinline_ml(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "maxwidth")));
  logger.log("    normalinline_ml: " + getAttribSafe(node, "ml"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "mr", normalinline_mr(getInputAttribSafe(node, "marginleft", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    normalinline_mr: " + getAttribSafe(node, "mr"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "offsetx", normalinline_offsetX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "inhoffsetx"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "left", '{1,0}'), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    normalinline_offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhOffsetX: " + getAttribSafe(node, "inhoffsetx"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "offsety", normalinline_offsetY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "inhoffsety"), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "bottom", '{1,0}'), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    normalinline_offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        inhOffsetY: " + getAttribSafe(node, "inhoffsety"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "pl", normalinline_pl(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    normalinline_pl: " + getAttribSafe(node, "pl"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", normalinline_pr(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    normalinline_pr: " + getAttribSafe(node, "pr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
      setAttribSafe(child, "inhoffsetx", (getAttribSafe(node, "offsetx") ));
      logger.log("         step childs@inhOffsetX: " + getAttribSafe(child, "inhoffsetx"));
      setAttribSafe(child, "inhoffsety", (getAttribSafe(node, "offsety") ));
      logger.log("         step childs@inhOffsetY: " + getAttribSafe(child, "inhoffsety"));
    }
  })();


  setAttribSafe(node, "childs_rightpadding_init", (0));
  setAttribSafe(node, "childs_rightpadding_last", getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("      init childs@rightPadding: " + getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("    last init childs_rightpadding_last: " + getAttribSafe(node, "childs_rightpadding_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? getAttribSafe(node, "rightpadding") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

  return true;
}
function visit_col_4(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 4);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
function visit_inlineblock_4(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "mb", inlineblock_mb(getInputAttribSafe(node, "marginbottom", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    inlineblock_mb: " + getAttribSafe(node, "mb"));
  logger.log("        marginBottom: " + getInputAttribSafe(node, "marginbottom", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "ml", inlineblock_ml(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "maxwidth")));
  logger.log("    inlineblock_ml: " + getAttribSafe(node, "ml"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "mr", inlineblock_mr(getInputAttribSafe(node, "marginleft", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    inlineblock_mr: " + getAttribSafe(node, "mr"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "mt", inlineblock_mt(getInputAttribSafe(node, "margintop", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    inlineblock_mt: " + getAttribSafe(node, "mt"));
  logger.log("        marginTop: " + getInputAttribSafe(node, "margintop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "offsetx", inlineblock_offsetX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "inhoffsetx"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "left", '{1,0}'), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    inlineblock_offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhOffsetX: " + getAttribSafe(node, "inhoffsetx"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "offsety", inlineblock_offsetY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "inhoffsety"), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "bottom", '{1,0}'), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    inlineblock_offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        inhOffsetY: " + getAttribSafe(node, "inhoffsety"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "pb", inlineblock_pb(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingbottom", '{302,0}')));
  logger.log("    inlineblock_pb: " + getAttribSafe(node, "pb"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingBottom: " + getInputAttribSafe(node, "paddingbottom", '{302,0}'));
  setAttribSafe(node, "pl", inlineblock_pl(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    inlineblock_pl: " + getAttribSafe(node, "pl"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", inlineblock_pr(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    inlineblock_pr: " + getAttribSafe(node, "pr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  setAttribSafe(node, "pt", inlineblock_pt(getInputAttribSafe(node, "paddingtop", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    inlineblock_pt: " + getAttribSafe(node, "pt"));
  logger.log("        paddingTop: " + getInputAttribSafe(node, "paddingtop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "computedwidth", inlineblock_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "mr"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineblock_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "firstchildwidth", inlineblock_firstChildWidth(getAttribSafe(node, "mr"), getAttribSafe(node, "rightpadding"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineblock_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "poswidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step posChilds@posWidth: " + getAttribSafe(child, "poswidth"));
    }
  })();

  return true;
}
function visit_row_4(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 4);
  return true;
}
function visit_cols_4(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 4);

(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minpercentguess", ((getAttribSafe(child, "intrinspercentwidth") > 0) ? max((getAttribSafe(child, "intrinspercentwidth") * getAttribSafe(node, "availablewidth")), getAttribSafe(child, "intrinsminwidth")) : getAttribSafe(child, "intrinsminwidth") ));
      logger.log("         step cols@minPercentGuess: " + getAttribSafe(child, "minpercentguess"));
      setAttribSafe(child, "prefguess", ((getAttribSafe(child, "intrinspercentwidth") > 0) ? max((getAttribSafe(child, "intrinspercentwidth") * getAttribSafe(node, "availablewidth")), getAttribSafe(child, "intrinsminwidth")) : getAttribSafe(child, "intrinsprefwidth") ));
      logger.log("         step cols@prefGuess: " + getAttribSafe(child, "prefguess"));
    }
  })();


  setAttribSafe(node, "minpercentguess_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "minpercentguess", getAttribSafe(node, "minpercentguess_init"));
  logger.log("      init minPercentGuess: " + getAttribSafe(node, "minpercentguess_init"));
  logger.log("    last init minpercentguess: " + getAttribSafe(node, "minpercentguess"));
    setAttribSafe(node, "prefguess_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "prefguess", getAttribSafe(node, "prefguess_init"));
  logger.log("      init prefGuess: " + getAttribSafe(node, "prefguess_init"));
  logger.log("    last init prefguess: " + getAttribSafe(node, "prefguess"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "minpercentguess", (getAttribSafe(node, "minpercentguess") + getAttribSafe(child, "minpercentguess") ));
      logger.log("         step minPercentGuess: " + getAttribSafe(node, "minpercentguess"));
      setAttribSafe(node, "prefguess", (getAttribSafe(node, "prefguess") + getAttribSafe(child, "prefguess") ));
      logger.log("         step prefGuess: " + getAttribSafe(node, "prefguess"));
    }
  })();

  setAttribSafe(node, "widthselect", cols_widthSelect(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "minpercentguess"), getAttribSafe(node, "prefguess")));
  logger.log("    cols_widthSelect: " + getAttribSafe(node, "widthselect"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        minPercentGuess: " + getAttribSafe(node, "minpercentguess"));
  logger.log("        prefGuess: " + getAttribSafe(node, "prefguess"));
  setAttribSafe(node, "guessabove", cols_guessAbove(getAttribSafe(node, "widthselect"), getAttribSafe(node, "minpercentguess"), getAttribSafe(node, "prefguess")));
  logger.log("    cols_guessAbove: " + getAttribSafe(node, "guessabove"));
  logger.log("        widthSelect: " + getAttribSafe(node, "widthselect"));
  logger.log("        minPercentGuess: " + getAttribSafe(node, "minpercentguess"));
  logger.log("        prefGuess: " + getAttribSafe(node, "prefguess"));
  setAttribSafe(node, "guessbelow", cols_guessBelow(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "widthselect"), getAttribSafe(node, "minpercentguess")));
  logger.log("    cols_guessBelow: " + getAttribSafe(node, "guessbelow"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        widthSelect: " + getAttribSafe(node, "widthselect"));
  logger.log("        minPercentGuess: " + getAttribSafe(node, "minpercentguess"));
  setAttribSafe(node, "k", cols_k(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "guessbelow"), getAttribSafe(node, "guessabove")));
  logger.log("    cols_k: " + getAttribSafe(node, "k"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        guessBelow: " + getAttribSafe(node, "guessbelow"));
  logger.log("        guessAbove: " + getAttribSafe(node, "guessabove"));

(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "lowerbound", ((getAttribSafe(node, "widthselect") == 0 ? getAttribSafe(child, "intrinsminwidth") : (getAttribSafe(node, "widthselect") == 1 ? getAttribSafe(child, "minpercentguess") : Error("Error: bad widthSelect")))));
      logger.log("         step cols@lowerBound: " + getAttribSafe(child, "lowerbound"));
      setAttribSafe(child, "upperbound", ((getAttribSafe(node, "widthselect") == 0 ? getAttribSafe(child, "minpercentguess") : (getAttribSafe(node, "widthselect") == 1 ? getAttribSafe(child, "prefguess") : Error("Error: bad widthSelect")))));
      logger.log("         step cols@upperBound: " + getAttribSafe(child, "upperbound"));
    }
  })();


(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "computedwidth", ((getAttribSafe(node, "cellsready") ? 0 : 0) + (getAttribSafe(node, "prefguess") < getAttribSafe(node, "availablewidth") ? Error("TODO: implement full tables algorithm") : 0) + ((getAttribSafe(node, "k") < 0) ? getAttribSafe(child, "upperbound") : (((0 <= getAttribSafe(node, "k") && getAttribSafe(node, "k") <= 1)) ? (getAttribSafe(node, "k") * getAttribSafe(child, "lowerbound") + (1 - getAttribSafe(node, "k")) * getAttribSafe(child, "upperbound")) : ((getAttribSafe(node, "k") > 1) ? getAttribSafe(child, "lowerbound") : Error("Logic Error"))))));
      logger.log("         step cols@computedWidth: " + getAttribSafe(child, "computedwidth"));
    }
  })();


  setAttribSafe(node, "tablecontentwidth_init", (0));
  setAttribSafe(node, "tablecontentwidth", getAttribSafe(node, "tablecontentwidth_init"));
  logger.log("      init tableContentWidth: " + getAttribSafe(node, "tablecontentwidth_init"));
  logger.log("    last init tablecontentwidth: " + getAttribSafe(node, "tablecontentwidth"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "tablecontentwidth", (getAttribSafe(node, "tablecontentwidth") + getAttribSafe(child, "computedwidth") ));
      logger.log("         step tableContentWidth: " + getAttribSafe(node, "tablecontentwidth"));
    }
  })();

  return true;
}
function visit_normalblock_4(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "mb", normalblock_mb(getInputAttribSafe(node, "marginbottom", '{302,0}'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize")));
  logger.log("    normalblock_mb: " + getAttribSafe(node, "mb"));
  logger.log("        marginBottom: " + getInputAttribSafe(node, "marginbottom", '{302,0}'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "mt", normalblock_mt(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "margintop", '{302,0}'), getAttribSafe(node, "usedfontsize")));
  logger.log("    normalblock_mt: " + getAttribSafe(node, "mt"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        marginTop: " + getInputAttribSafe(node, "margintop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "pb", normalblock_pb(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingbottom", '{302,0}')));
  logger.log("    normalblock_pb: " + getAttribSafe(node, "pb"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingBottom: " + getInputAttribSafe(node, "paddingbottom", '{302,0}'));
  setAttribSafe(node, "pl", normalblock_pl(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    normalblock_pl: " + getAttribSafe(node, "pl"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", normalblock_pr(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    normalblock_pr: " + getAttribSafe(node, "pr"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  setAttribSafe(node, "pt", normalblock_pt(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "paddingtop", '{302,0}'), getAttribSafe(node, "usedfontsize")));
  logger.log("    normalblock_pt: " + getAttribSafe(node, "pt"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        paddingTop: " + getInputAttribSafe(node, "paddingtop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "ml", normalblock_ml(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "pl"), getAttribSafe(node, "pr")));
  logger.log("    normalblock_ml: " + getAttribSafe(node, "ml"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "mr", normalblock_mr(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "marginleft", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "pr")));
  logger.log("    normalblock_mr: " + getAttribSafe(node, "mr"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "computedwidth", normalblock_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "mr"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    normalblock_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "poswidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step posChilds@posWidth: " + getAttribSafe(child, "poswidth"));
    }
  })();

  return true;
}
function visit_flowblock_4(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "mb", flowblock_mb(getInputAttribSafe(node, "marginbottom", '{302,0}'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize")));
  logger.log("    flowblock_mb: " + getAttribSafe(node, "mb"));
  logger.log("        marginBottom: " + getInputAttribSafe(node, "marginbottom", '{302,0}'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "mt", flowblock_mt(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "margintop", '{302,0}'), getAttribSafe(node, "usedfontsize")));
  logger.log("    flowblock_mt: " + getAttribSafe(node, "mt"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        marginTop: " + getInputAttribSafe(node, "margintop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "pb", flowblock_pb(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingbottom", '{302,0}')));
  logger.log("    flowblock_pb: " + getAttribSafe(node, "pb"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingBottom: " + getInputAttribSafe(node, "paddingbottom", '{302,0}'));
  setAttribSafe(node, "pl", flowblock_pl(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    flowblock_pl: " + getAttribSafe(node, "pl"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", flowblock_pr(getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    flowblock_pr: " + getAttribSafe(node, "pr"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  setAttribSafe(node, "pt", flowblock_pt(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "paddingtop", '{302,0}'), getAttribSafe(node, "usedfontsize")));
  logger.log("    flowblock_pt: " + getAttribSafe(node, "pt"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        paddingTop: " + getInputAttribSafe(node, "paddingtop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "ml", flowblock_ml(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "pl"), getAttribSafe(node, "pr")));
  logger.log("    flowblock_ml: " + getAttribSafe(node, "ml"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "mr", flowblock_mr(getAttribSafe(node, "availablewidth"), getInputAttribSafe(node, "marginleft", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "pr")));
  logger.log("    flowblock_mr: " + getAttribSafe(node, "mr"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "computedwidth", flowblock_computedWidth(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "mr"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    flowblock_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(getChildByRefName(node,"child"), "maxwidth", flowblock_child_maxWidth(getAttribSafe(node, "computedwidth")));
  logger.log("    flowblock_child_maxWidth: " + getAttribSafe(getChildByRefName(node,"child"), "maxwidth"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  return true;
}
function visit_textbox_4(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 4);
  setAttribSafe(node, "ml", textbox_ml(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "maxwidth")));
  logger.log("    textbox_ml: " + getAttribSafe(node, "ml"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "mr", textbox_mr(getInputAttribSafe(node, "marginleft", '{302,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth")));
  logger.log("    textbox_mr: " + getAttribSafe(node, "mr"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  setAttribSafe(node, "offsetx", textbox_offsetX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "inhoffsetx"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "left", '{1,0}'), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    textbox_offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhOffsetX: " + getAttribSafe(node, "inhoffsetx"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "offsety", textbox_offsetY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "inhoffsety"), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "bottom", '{1,0}'), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    textbox_offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        inhOffsetY: " + getAttribSafe(node, "inhoffsety"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "pl", textbox_pl(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    textbox_pl: " + getAttribSafe(node, "pl"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", textbox_pr(getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    textbox_pr: " + getAttribSafe(node, "pr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  return true;
}
function visit_blockimg_4(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 4);
  return true;
}
function visit_positionedblock_4(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "poswidthtmp", positionedblock_posWidthTmp(getAttribSafe(node, "position"), getAttribSafe(node, "poswidth")));
  logger.log("    positionedblock_posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        position: " + getAttribSafe(node, "position"));
  logger.log("        posWidth: " + getAttribSafe(node, "poswidth"));
  setAttribSafe(node, "pb", positionedblock_pb(getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingbottom", '{302,0}')));
  logger.log("    positionedblock_pb: " + getAttribSafe(node, "pb"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingBottom: " + getInputAttribSafe(node, "paddingbottom", '{302,0}'));
  setAttribSafe(node, "pl", positionedblock_pl(getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}')));
  logger.log("    positionedblock_pl: " + getAttribSafe(node, "pl"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingLeft: " + getInputAttribSafe(node, "paddingleft", '{302,0}'));
  setAttribSafe(node, "pr", positionedblock_pr(getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    positionedblock_pr: " + getAttribSafe(node, "pr"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        paddingRight: " + getInputAttribSafe(node, "paddingright", '{302,0}'));
  setAttribSafe(node, "pt", positionedblock_pt(getInputAttribSafe(node, "paddingtop", '{302,0}'), getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "usedfontsize")));
  logger.log("    positionedblock_pt: " + getAttribSafe(node, "pt"));
  logger.log("        paddingTop: " + getInputAttribSafe(node, "paddingtop", '{302,0}'));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  setAttribSafe(node, "mb", positionedblock_mb(getInputAttribSafe(node, "marginbottom", '{302,0}'), getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "poswidth"), getInputAttribSafe(node, "margintop", '{302,0}'), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "pl"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "pr"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    positionedblock_mb: " + getAttribSafe(node, "mb"));
  logger.log("        marginBottom: " + getInputAttribSafe(node, "marginbottom", '{302,0}'));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        posWidth: " + getAttribSafe(node, "poswidth"));
  logger.log("        marginTop: " + getInputAttribSafe(node, "margintop", '{302,0}'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "ml", positionedblock_ml(getAttribSafe(node, "poswidthtmp"), getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "pl"), getInputAttribSafe(node, "left", '{1,0}'), getInputAttribSafe(node, "right", '{1,0}'), getAttribSafe(node, "pr")));
  logger.log("    positionedblock_ml: " + getAttribSafe(node, "ml"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "mr", positionedblock_mr(getAttribSafe(node, "poswidthtmp"), getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "pl"), getInputAttribSafe(node, "left", '{1,0}'), getInputAttribSafe(node, "right", '{1,0}'), getAttribSafe(node, "pr")));
  logger.log("    positionedblock_mr: " + getAttribSafe(node, "mr"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "mt", positionedblock_mt(getInputAttribSafe(node, "marginbottom", '{302,0}'), getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "poswidth"), getInputAttribSafe(node, "margintop", '{302,0}'), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "pl"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "pr"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    positionedblock_mt: " + getAttribSafe(node, "mt"));
  logger.log("        marginBottom: " + getInputAttribSafe(node, "marginbottom", '{302,0}'));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        posWidth: " + getAttribSafe(node, "poswidth"));
  logger.log("        marginTop: " + getInputAttribSafe(node, "margintop", '{302,0}'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "computedwidth", positionedblock_computedWidth(getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "mr"), getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "pl"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "intrinsprefwidth"), getInputAttribSafe(node, "right", '{1,0}'), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    positionedblock_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        marginLeft: " + getInputAttribSafe(node, "marginleft", '{302,0}'));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginRight: " + getInputAttribSafe(node, "marginright", '{302,0}'));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "posrelx", positionedblock_posRelX(getAttribSafe(node, "mr"), getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "ml"), getInputAttribSafe(node, "right", '{1,0}'), getAttribSafe(node, "pr")));
  logger.log("    positionedblock_posRelX: " + getAttribSafe(node, "posrelx"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "posrely", positionedblock_posRelY(getAttribSafe(node, "mr"), getAttribSafe(node, "poswidthtmp"), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "pl"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    positionedblock_posRelY: " + getAttribSafe(node, "posrely"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        posWidthTmp: " + getAttribSafe(node, "poswidthtmp"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();

  return true;
}
///// pass /////
function visit_inlineimg_5(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 5);
  return true;
}
function visit_tablebox_5(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "tablecontentwidth", (getAttribSafe(getChildByRefName(node,"columns"), "tablecontentwidth") ));
      logger.log("         step rows@tableContentWidth: " + getAttribSafe(child, "tablecontentwidth"));
    }
  })();

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

  return true;
}
function visit_root_5(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 5);
  return true;
}
function visit_flowrootc_5(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_normalinline_5(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_col_5(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 5);
  return true;
}
function visit_inlineblock_5(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_row_5(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 5);
  return true;
}
function visit_cols_5(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 5);
  return true;
}
function visit_normalblock_5(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_flowblock_5(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 5);
  return true;
}
function visit_textbox_5(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 5);
  return true;
}
function visit_blockimg_5(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 5);
  return true;
}
function visit_positionedblock_5(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
///// pass /////
function visit_inlineimg_6(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 6);
  return true;
}
function visit_tablebox_6(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 6);
  return true;
}
function visit_cell_6(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 6);
  return true;
}
function visit_root_6(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 6);
  return true;
}
function visit_flowrootc_6(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 6);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "firstchildwidth_init", (getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(child, "firstchildwidth") + getAttribSafe(node, "ml") + getAttribSafe(node, "mr") + getAttribSafe(node, "pl") + getAttribSafe(node, "pr") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
    }
  })();

  return true;
}
function visit_normalinline_6(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 6);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "firstchildwidth_init", (getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(child, "firstchildwidth") + getAttribSafe(node, "ml") + getAttribSafe(node, "mr") + getAttribSafe(node, "pl") + getAttribSafe(node, "pr") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
    }
  })();

  return true;
}
function visit_col_6(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 6);
  return true;
}
function visit_inlineblock_6(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 6);
  return true;
}
function visit_row_6(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 6);
  return true;
}
function visit_cols_6(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 6);
  return true;
}
function visit_normalblock_6(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 6);
  return true;
}
function visit_flowblock_6(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 6);
  return true;
}
function visit_textbox_6(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 6);
  return true;
}
function visit_blockimg_6(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 6);
  return true;
}
function visit_positionedblock_6(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 6);
  return true;
}
///// pass /////
function visit_inlineimg_7(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 7);
  setAttribSafe(node, "maxlineh", inlineimg_maxLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "computedheight")));
  logger.log("    inlineimg_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  setAttribSafe(node, "relrightx", inlineimg_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "mr"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineimg_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "relrighty", inlineimg_relRightY(getAttribSafe(node, "rely")));
  logger.log("    inlineimg_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  return true;
}
function visit_tablebox_7(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 7);
  visit_7(getChildByRefName(node, "columns"), false, node); //recur
  logger.log("  resume visit TableBox: " + 7);

  setAttribSafe(node, "intrinsheight_init", (getAttribSafe(node, "mt") + getAttribSafe(node, "mb") ));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit TableBox: " + 7);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(getChildByRefName(node,"columns"), "tablecontentheight", tablebox_columns_tableContentHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    tablebox_columns_tableContentHeight: " + getAttribSafe(getChildByRefName(node,"columns"), "tablecontentheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "tmpcomputedheight", tablebox_tmpComputedHeight(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "containheight")));
  logger.log("    tablebox_tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        containHeight: " + getAttribSafe(node, "containheight"));
  setAttribSafe(node, "computedheight", tablebox_computedHeight(getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "tmpcomputedheight")));
  logger.log("    tablebox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));
  return true;
}
function visit_cell_7(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 7);

  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit Cell: " + 7);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  return true;
}
function visit_root_7(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 7);
  visit_7(getChildByRefName(node, "child"), false, node); //recur
  logger.log("  resume visit Root: " + 7);
  setAttribSafe(getChildByRefName(node,"child"), "absx", root_child_absX(getAttribSafe(getChildByRefName(node,"child"), "computedheight")));
  logger.log("    root_child_absX: " + getAttribSafe(getChildByRefName(node,"child"), "absx"));
  logger.log("        child@computedHeight: " + getAttribSafe(getChildByRefName(node,"child"), "computedheight"));
  setAttribSafe(getChildByRefName(node,"child"), "absy", root_child_absY(getAttribSafe(getChildByRefName(node,"child"), "computedheight")));
  logger.log("    root_child_absY: " + getAttribSafe(getChildByRefName(node,"child"), "absy"));
  logger.log("        child@computedHeight: " + getAttribSafe(getChildByRefName(node,"child"), "computedheight"));
  setAttribSafe(getChildByRefName(node,"child"), "canvas", root_child_canvas(getAttribSafe(getChildByRefName(node,"child"), "mb"), getAttribSafe(getChildByRefName(node,"child"), "pl"), getAttribSafe(getChildByRefName(node,"child"), "mr"), getAttribSafe(getChildByRefName(node,"child"), "pr"), getAttribSafe(getChildByRefName(node,"child"), "pb"), getAttribSafe(getChildByRefName(node,"child"), "mt"), getAttribSafe(getChildByRefName(node,"child"), "computedwidth"), getAttribSafe(getChildByRefName(node,"child"), "pt"), getAttribSafe(getChildByRefName(node,"child"), "computedheight"), getAttribSafe(getChildByRefName(node,"child"), "ml")));
  logger.log("    root_child_canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  logger.log("        child@mb: " + getAttribSafe(getChildByRefName(node,"child"), "mb"));
  logger.log("        child@pl: " + getAttribSafe(getChildByRefName(node,"child"), "pl"));
  logger.log("        child@mr: " + getAttribSafe(getChildByRefName(node,"child"), "mr"));
  logger.log("        child@pr: " + getAttribSafe(getChildByRefName(node,"child"), "pr"));
  logger.log("        child@pb: " + getAttribSafe(getChildByRefName(node,"child"), "pb"));
  logger.log("        child@mt: " + getAttribSafe(getChildByRefName(node,"child"), "mt"));
  logger.log("        child@computedWidth: " + getAttribSafe(getChildByRefName(node,"child"), "computedwidth"));
  logger.log("        child@pt: " + getAttribSafe(getChildByRefName(node,"child"), "pt"));
  logger.log("        child@computedHeight: " + getAttribSafe(getChildByRefName(node,"child"), "computedheight"));
  logger.log("        child@ml: " + getAttribSafe(getChildByRefName(node,"child"), "ml"));
  return true;
}
function visit_flowrootc_7(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 7);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "containheight", (getAttribSafe(node, "containheight") ));
      logger.log("         step childs@containHeight: " + getAttribSafe(child, "containheight"));
    }
  })();


  setAttribSafe(node, "childs_relx_init", (0));
  setAttribSafe(node, "childs_relx_last", getAttribSafe(node, "childs_relx_init"));
  logger.log("      init childs@relX: " + getAttribSafe(node, "childs_relx_init"));
  logger.log("    last init childs_relx_last: " + getAttribSafe(node, "childs_relx_last"));
    setAttribSafe(node, "childs_rely_init", (0));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5) + getAttribSafe(child, "firstchildwidth") > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "oldlineh") : ((getAttribSafe(child, "relx") == 0) ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit FlowRootC: " + 7);
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
    setAttribSafe(node, "maxlineh_init", (max(getAttribSafe(node, "oldlineh"), 0)));
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
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsheight", (max(getAttribSafe(node, "intrinsheight"), getAttribSafe(child, "intrinsheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb"))));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") ));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "posheight", (getAttribSafe(node, "intrinsheight") ));
      logger.log("         step posChilds@posHeight: " + getAttribSafe(child, "posheight"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit FlowRootC: " + 7);
    }
  })();

  return true;
}
function visit_normalinline_7(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 7);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "containheight", (getAttribSafe(node, "containheight") ));
      logger.log("         step childs@containHeight: " + getAttribSafe(child, "containheight"));
    }
  })();


  setAttribSafe(node, "childs_relx_init", (0));
  setAttribSafe(node, "childs_relx_last", getAttribSafe(node, "childs_relx_init"));
  logger.log("      init childs@relX: " + getAttribSafe(node, "childs_relx_init"));
  logger.log("    last init childs_relx_last: " + getAttribSafe(node, "childs_relx_last"));
    setAttribSafe(node, "childs_rely_init", (0));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5) + getAttribSafe(child, "firstchildwidth") > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "oldlineh") : ((getAttribSafe(child, "relx") == 0) ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit NormalInline: " + 7);
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
    setAttribSafe(node, "maxlineh_init", (max(getAttribSafe(node, "oldlineh"), 0)));
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
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsheight", (max(getAttribSafe(node, "intrinsheight"), getAttribSafe(child, "intrinsheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb"))));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") ));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "posheight", (getAttribSafe(node, "intrinsheight") ));
      logger.log("         step posChilds@posHeight: " + getAttribSafe(child, "posheight"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit NormalInline: " + 7);
    }
  })();

  return true;
}
function visit_col_7(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 7);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit Col: " + 7);
    }
  })();

  return true;
}
function visit_inlineblock_7(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 7);
  setAttribSafe(node, "relrightx", inlineblock_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "mr"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineblock_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "relrighty", inlineblock_relRightY(getAttribSafe(node, "rely")));
  logger.log("    inlineblock_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "containheight", (getTag(getInputAttribSafe(node, "height", '{1,0}')) != CONST_AUTO() ? getValue(getInputAttribSafe(node, "height", '{1,0}'), getInputAttribSafe(node, "intrinsfontsize", '{2,0}'), getAttribSafe(node, "containheight")) : CONST_NAN()));
      logger.log("         step childs@containHeight: " + getAttribSafe(child, "containheight"));
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit InlineBlock: " + 7);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "tmpcomputedheight", inlineblock_tmpComputedHeight(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "containheight")));
  logger.log("    inlineblock_tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        containHeight: " + getAttribSafe(node, "containheight"));
  setAttribSafe(node, "computedheight", inlineblock_computedHeight(getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "tmpcomputedheight")));
  logger.log("    inlineblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));
  setAttribSafe(node, "maxlineh", inlineblock_maxLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "computedheight")));
  logger.log("    inlineblock_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));

(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "posheight", (getAttribSafe(node, "computedheight") ));
      logger.log("         step posChilds@posHeight: " + getAttribSafe(child, "posheight"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit InlineBlock: " + 7);
    }
  })();

  return true;
}
function visit_row_7(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 7);

  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit Row: " + 7);
      setAttribSafe(node, "intrinsheight", (((isEmptyInt(getAttribSafe(child, "rowspan")) || valueInt(getAttribSafe(child, "rowspan")) == 1)) ? max(getAttribSafe(node, "intrinsheight"), getAttribSafe(child, "intrinsheight")) : getAttribSafe(node, "intrinsheight") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", row_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    row_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "computedheight", (getAttribSafe(node, "computedheight") ));
      logger.log("         step childs@computedHeight: " + getAttribSafe(child, "computedheight"));
    }
  })();

  return true;
}
function visit_cols_7(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 7);

(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit Cols: " + 7);
    }
  })();

  return true;
}
function visit_normalblock_7(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 7);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "containheight", (getTag(getInputAttribSafe(node, "height", '{1,0}')) != CONST_AUTO() ? getValue(getInputAttribSafe(node, "height", '{1,0}'), getInputAttribSafe(node, "intrinsfontsize", '{2,0}'), getAttribSafe(node, "containheight")) : CONST_NAN()));
      logger.log("         step childs@containHeight: " + getAttribSafe(child, "containheight"));
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit NormalBlock: " + 7);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "tmpcomputedheight", normalblock_tmpComputedHeight(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "containheight")));
  logger.log("    normalblock_tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        containHeight: " + getAttribSafe(node, "containheight"));
  setAttribSafe(node, "computedheight", normalblock_computedHeight(getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "tmpcomputedheight")));
  logger.log("    normalblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));

(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "posheight", (getAttribSafe(node, "computedheight") ));
      logger.log("         step posChilds@posHeight: " + getAttribSafe(child, "posheight"));
    }
  })();


(function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit NormalBlock: " + 7);
    }
  })();

  return true;
}
function visit_flowblock_7(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 7);
  setAttribSafe(getChildByRefName(node,"child"), "containheight", flowblock_child_containHeight(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "containheight")));
  logger.log("    flowblock_child_containHeight: " + getAttribSafe(getChildByRefName(node,"child"), "containheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        containHeight: " + getAttribSafe(node, "containheight"));
  visit_7(getChildByRefName(node, "child"), false, node); //recur
  logger.log("  resume visit FlowBlock: " + 7);
  setAttribSafe(node, "intrinsheight", flowblock_intrinsHeight(getAttribSafe(getChildByRefName(node,"child"), "mb"), getAttribSafe(getChildByRefName(node,"child"), "pb"), getAttribSafe(getChildByRefName(node,"child"), "mt"), getAttribSafe(getChildByRefName(node,"child"), "rely"), getAttribSafe(getChildByRefName(node,"child"), "relrighty"), getAttribSafe(getChildByRefName(node,"child"), "pt"), getAttribSafe(getChildByRefName(node,"child"), "maxlineh")));
  logger.log("    flowblock_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        child@mb: " + getAttribSafe(getChildByRefName(node,"child"), "mb"));
  logger.log("        child@pb: " + getAttribSafe(getChildByRefName(node,"child"), "pb"));
  logger.log("        child@mt: " + getAttribSafe(getChildByRefName(node,"child"), "mt"));
  logger.log("        child@relY: " + getAttribSafe(getChildByRefName(node,"child"), "rely"));
  logger.log("        child@relRightY: " + getAttribSafe(getChildByRefName(node,"child"), "relrighty"));
  logger.log("        child@pt: " + getAttribSafe(getChildByRefName(node,"child"), "pt"));
  logger.log("        child@maxLineH: " + getAttribSafe(getChildByRefName(node,"child"), "maxlineh"));
  setAttribSafe(node, "tmpcomputedheight", flowblock_tmpComputedHeight(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "containheight")));
  logger.log("    flowblock_tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        containHeight: " + getAttribSafe(node, "containheight"));
  setAttribSafe(node, "computedheight", flowblock_computedHeight(getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "tmpcomputedheight")));
  logger.log("    flowblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        tmpComputedHeight: " + getAttribSafe(node, "tmpcomputedheight"));
  return true;
}
function visit_textbox_7(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 7);
  setAttribSafe(node, "maxlineh", textbox_maxLineH(getAttribSafe(node, "lineheight"), getAttribSafe(node, "oldlineh")));
  logger.log("    textbox_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  setAttribSafe(node, "splittext", textbox_splitText(getAttribSafe(node, "text"), getAttribSafe(node, "relx"), getAttribSafe(node, "renderfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "fontfamily", '"Arial"')));
  logger.log("    textbox_splitText: " + getAttribSafe(node, "splittext"));
  logger.log("        text: " + getAttribSafe(node, "text"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  setAttribSafe(node, "numberlines", textbox_numberLines(getAttribSafe(node, "splittext")));
  logger.log("    textbox_numberLines: " + getAttribSafe(node, "numberlines"));
  logger.log("        splitText: " + getAttribSafe(node, "splittext"));
  setAttribSafe(node, "relrightx", textbox_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "numberlines"), getAttribSafe(node, "splittext"), getAttribSafe(node, "intrinsprefwidth")));
  logger.log("    textbox_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        numberLines: " + getAttribSafe(node, "numberlines"));
  logger.log("        splitText: " + getAttribSafe(node, "splittext"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  setAttribSafe(node, "relrighty", textbox_relRightY(getAttribSafe(node, "lineheight"), getAttribSafe(node, "numberlines"), getAttribSafe(node, "linespacing"), getAttribSafe(node, "rely")));
  logger.log("    textbox_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        numberLines: " + getAttribSafe(node, "numberlines"));
  logger.log("        lineSpacing: " + getAttribSafe(node, "linespacing"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  return true;
}
function visit_blockimg_7(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 7);
  return true;
}
function visit_positionedblock_7(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 7);
  setAttribSafe(node, "containheight", positionedblock_containHeight(getAttribSafe(node, "pb"), getAttribSafe(node, "mt"), getAttribSafe(node, "mb"), getAttribSafe(node, "pt"), getAttribSafe(node, "posheight")));
  logger.log("    positionedblock_containHeight: " + getAttribSafe(node, "containheight"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        mb: " + getAttribSafe(node, "mb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        posHeight: " + getAttribSafe(node, "posheight"));
  setAttribSafe(node, "posheighttmp", positionedblock_posHeightTmp(getAttribSafe(node, "position"), getAttribSafe(node, "posheight")));
  logger.log("    positionedblock_posHeightTmp: " + getAttribSafe(node, "posheighttmp"));
  logger.log("        position: " + getAttribSafe(node, "position"));
  logger.log("        posHeight: " + getAttribSafe(node, "posheight"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "containheight", (getTag(getInputAttribSafe(node, "height", '{1,0}')) != CONST_AUTO() ? getValue(getInputAttribSafe(node, "height", '{1,0}'), getInputAttribSafe(node, "intrinsfontsize", '{2,0}'), getAttribSafe(node, "containheight")) : CONST_NAN()));
      logger.log("         step childs@containHeight: " + getAttribSafe(child, "containheight"));
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_7(child, false, node); //recur
      logger.log("  resume loop visit PositionedBlock: " + 7);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", positionedblock_computedHeight(getAttribSafe(node, "mr"), getInputAttribSafe(node, "margintop", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "marginbottom", '{302,0}'), getAttribSafe(node, "posheighttmp"), getInputAttribSafe(node, "height", '{1,0}'), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "pl"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "intrinsheight"), getInputAttribSafe(node, "right", '{1,0}'), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    positionedblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        marginTop: " + getInputAttribSafe(node, "margintop", '{302,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        marginBottom: " + getInputAttribSafe(node, "marginbottom", '{302,0}'));
  logger.log("        posHeightTmp: " + getAttribSafe(node, "posheighttmp"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  return true;
}
///// pass /////
function visit_inlineimg_8(node) {
  logger.log("  visit  InlineImg (id: " + node.id + "): " + 8);
  setAttribSafe(node, "render", inlineimg_render(getAttribSafe(node, "relx"), getAttribSafe(node, "offsety"), getAttribSafe(node, "offsetx"), getAttribSafe(node, "imagehandle"), getAttribSafe(node, "canvas"), getAttribSafe(node, "rely"), getAttribSafe(node, "minx"), getAttribSafe(node, "miny")));
  logger.log("    inlineimg_render: " + getAttribSafe(node, "render"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  return true;
}
function visit_tablebox_8(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 8);
  setAttribSafe(node, "computedx", tablebox_computedX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    tablebox_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "computedy", tablebox_computedY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "absy"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    tablebox_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "render", tablebox_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    tablebox_render: " + getAttribSafe(node, "render"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        borderc: " + getInputMaybeAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        borderw: " + getAttribSafe(node, "borderw"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        bgc: " + getInputMaybeAttribSafe(node, "bgc"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));
  setAttribSafe(getChildByRefName(node,"columns"), "absx", tablebox_columns_absX(getAttribSafe(node, "computedx"), getAttribSafe(node, "ml")));
  logger.log("    tablebox_columns_absX: " + getAttribSafe(getChildByRefName(node,"columns"), "absx"));
  logger.log("        computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(getChildByRefName(node,"columns"), "absy", tablebox_columns_absY(getAttribSafe(node, "mt"), getAttribSafe(node, "computedy")));
  logger.log("    tablebox_columns_absY: " + getAttribSafe(getChildByRefName(node,"columns"), "absy"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        computedY: " + getAttribSafe(node, "computedy"));
  setAttribSafe(getChildByRefName(node,"columns"), "canvas", tablebox_columns_canvas(getAttribSafe(node, "render")));
  logger.log("    tablebox_columns_canvas: " + getAttribSafe(getChildByRefName(node,"columns"), "canvas"));
  logger.log("        render: " + getAttribSafe(node, "render"));

  setAttribSafe(node, "rows_absy_init", (getAttribSafe(node, "computedy") + getAttribSafe(node, "mt") ));
  setAttribSafe(node, "rows_absy_last", getAttribSafe(node, "rows_absy_init"));
  logger.log("      init rows@absY: " + getAttribSafe(node, "rows_absy_init"));
  logger.log("    last init rows_absy_last: " + getAttribSafe(node, "rows_absy_last"));
    setAttribSafe(node, "rows_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "rows_canvas_last", getAttribSafe(node, "rows_canvas_init"));
  logger.log("      init rows@canvas: " + getAttribSafe(node, "rows_canvas_init"));
  logger.log("    last init rows_canvas_last: " + getAttribSafe(node, "rows_canvas_last"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") ));
      logger.log("         step rows@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_absy_init") : ("absy")) + (getAttribSafe(child, "rownum") == 1 ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_computedheight_init") : ("computedheight")))));
      logger.log("         step rows@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_canvas_init") : ("canvas")) ));
      logger.log("         step rows@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_cell_8(node) {
  logger.log("  visit  Cell (id: " + node.id + "): " + 8);
  setAttribSafe(node, "computedx", cell_computedX(getAttribSafe(node, "absx")));
  logger.log("    cell_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  setAttribSafe(node, "computedy", cell_computedY(getAttribSafe(node, "absy")));
  logger.log("    cell_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  setAttribSafe(node, "render", cell_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    cell_render: " + getAttribSafe(node, "render"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        borderc: " + getInputMaybeAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        borderw: " + getAttribSafe(node, "borderw"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        bgc: " + getInputMaybeAttribSafe(node, "bgc"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));

  setAttribSafe(node, "childs_absy_init", (getAttribSafe(node, "computedy") + getAttribSafe(node, "mt") + getAttribSafe(node, "pt") ));
  setAttribSafe(node, "childs_absy_last", getAttribSafe(node, "childs_absy_init"));
  logger.log("      init childs@absY: " + getAttribSafe(node, "childs_absy_init"));
  logger.log("    last init childs_absy_last: " + getAttribSafe(node, "childs_absy_last"));
    setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_root_8(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 8);
  return true;
}
function visit_flowrootc_8(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 8);
  setAttribSafe(node, "render", flowrootc_render(getAttribSafe(node, "canvas")));
  logger.log("    flowrootc_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "minx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(node, "miny") ));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      setAttribSafe(child, "canvas", (getAttribSafe(node, "render") ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();


  setAttribSafe(node, "poschilds_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "poschilds_canvas_last", getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("      init posChilds@canvas: " + getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("    last init poschilds_canvas_last: " + getAttribSafe(node, "poschilds_canvas_last"));
  (function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "posx", (getAttribSafe(node, "minx") + getAttribSafe(node, "relx") + getAttribSafe(node, "offsetx") ));
      logger.log("         step posChilds@posX: " + getAttribSafe(child, "posx"));
      setAttribSafe(child, "posy", (getAttribSafe(node, "miny") + getAttribSafe(node, "rely") + getAttribSafe(node, "offsety") ));
      logger.log("         step posChilds@posY: " + getAttribSafe(child, "posy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("poschilds_canvas_init") : ("canvas")) ));
      logger.log("         step posChilds@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_normalinline_8(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 8);
  setAttribSafe(node, "render", normalinline_render(getAttribSafe(node, "canvas")));
  logger.log("    normalinline_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));

  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "minx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(node, "miny") ));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();


  setAttribSafe(node, "poschilds_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "poschilds_canvas_last", getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("      init posChilds@canvas: " + getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("    last init poschilds_canvas_last: " + getAttribSafe(node, "poschilds_canvas_last"));
  (function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "posx", (getAttribSafe(node, "minx") + getAttribSafe(node, "relx") + getAttribSafe(node, "offsetx") ));
      logger.log("         step posChilds@posX: " + getAttribSafe(child, "posx"));
      setAttribSafe(child, "posy", (getAttribSafe(node, "miny") + getAttribSafe(node, "rely") + getAttribSafe(node, "offsety") ));
      logger.log("         step posChilds@posY: " + getAttribSafe(child, "posy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("poschilds_canvas_init") : ("canvas")) ));
      logger.log("         step posChilds@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_col_8(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 8);
  setAttribSafe(node, "render", col_render(getAttribSafe(node, "canvas")));
  logger.log("    col_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
    }
  })();


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
function visit_inlineblock_8(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 8);
  setAttribSafe(node, "absx", inlineblock_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "offsetx"), getAttribSafe(node, "minx")));
  logger.log("    inlineblock_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", inlineblock_absY(getAttribSafe(node, "offsety"), getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    inlineblock_absY: " + getAttribSafe(node, "absy"));
  logger.log("        offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "computedx", inlineblock_computedX(getAttribSafe(node, "absx")));
  logger.log("    inlineblock_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  setAttribSafe(node, "computedy", inlineblock_computedY(getAttribSafe(node, "absy")));
  logger.log("    inlineblock_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  setAttribSafe(node, "render", inlineblock_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    inlineblock_render: " + getAttribSafe(node, "render"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        borderc: " + getInputMaybeAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        borderw: " + getAttribSafe(node, "borderw"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        bgc: " + getInputMaybeAttribSafe(node, "bgc"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));

  setAttribSafe(node, "childs_absy_init", (getAttribSafe(node, "computedy") + getAttribSafe(node, "mt") + getAttribSafe(node, "pt") ));
  setAttribSafe(node, "childs_absy_last", getAttribSafe(node, "childs_absy_init"));
  logger.log("      init childs@absY: " + getAttribSafe(node, "childs_absy_init"));
  logger.log("    last init childs_absy_last: " + getAttribSafe(node, "childs_absy_last"));
    setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();


  setAttribSafe(node, "poschilds_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "poschilds_canvas_last", getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("      init posChilds@canvas: " + getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("    last init poschilds_canvas_last: " + getAttribSafe(node, "poschilds_canvas_last"));
  (function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("poschilds_canvas_init") : ("canvas")) ));
      logger.log("         step posChilds@canvas: " + getAttribSafe(child, "canvas"));
      setAttribSafe(child, "posx", (getAttribSafe(node, "computedx") ));
      logger.log("         step posChilds@posX: " + getAttribSafe(child, "posx"));
      setAttribSafe(child, "posy", (getAttribSafe(node, "computedy") ));
      logger.log("         step posChilds@posY: " + getAttribSafe(child, "posy"));
    }
  })();

  return true;
}
function visit_row_8(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 8);
  setAttribSafe(node, "render", row_render(getInputAttribSafe(node, "borderw", '0'), getAttribSafe(node, "tablecontentwidth"), getInputAttribSafe(node, "borderc", '"none"'), getAttribSafe(node, "canvas"), getAttribSafe(node, "absy"), getInputAttribSafe(node, "bgc", '"none"'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "borders", '"none"'), getAttribSafe(node, "computedheight")));
  logger.log("    row_render: " + getAttribSafe(node, "render"));
  logger.log("        borderw: " + getInputAttribSafe(node, "borderw", '0'));
  logger.log("        tableContentWidth: " + getAttribSafe(node, "tablecontentwidth"));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '"none"'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        bgc: " + getInputAttribSafe(node, "bgc", '"none"'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") ));
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
function visit_cols_8(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 8);

  setAttribSafe(node, "cols_absx_init", (getAttribSafe(node, "absx") ));
  setAttribSafe(node, "cols_absx_last", getAttribSafe(node, "cols_absx_init"));
  logger.log("      init cols@absX: " + getAttribSafe(node, "cols_absx_init"));
  logger.log("    last init cols_absx_last: " + getAttribSafe(node, "cols_absx_last"));
    setAttribSafe(node, "cols_canvas_init", (getAttribSafe(node, "canvas") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "cols_canvas_last", getAttribSafe(node, "cols_canvas_init"));
  logger.log("      init cols@canvas: " + getAttribSafe(node, "cols_canvas_init"));
  logger.log("    last init cols_canvas_last: " + getAttribSafe(node, "cols_canvas_last"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("cols_absx_init") : ("absx")) + (getAttribSafe(child, "colnum") == 1 ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("cols_computedwidth_init") : ("computedwidth")))));
      logger.log("         step cols@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(node, "absy") ));
      logger.log("         step cols@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("cols_canvas_init") : ("canvas")) ));
      logger.log("         step cols@canvas: " + getAttribSafe(child, "canvas"));
      setAttribSafe(child, "tablecontentheight", (getAttribSafe(node, "tablecontentheight") ));
      logger.log("         step cols@tableContentHeight: " + getAttribSafe(child, "tablecontentheight"));
    }
  })();

  return true;
}
function visit_normalblock_8(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 8);
  setAttribSafe(node, "computedx", normalblock_computedX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    normalblock_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "computedy", normalblock_computedY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "absy"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    normalblock_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "render", normalblock_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    normalblock_render: " + getAttribSafe(node, "render"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        borderc: " + getInputMaybeAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        borderw: " + getAttribSafe(node, "borderw"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        bgc: " + getInputMaybeAttribSafe(node, "bgc"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));

  setAttribSafe(node, "childs_absy_init", (getAttribSafe(node, "computedy") + getAttribSafe(node, "mt") + getAttribSafe(node, "pt") ));
  setAttribSafe(node, "childs_absy_last", getAttribSafe(node, "childs_absy_init"));
  logger.log("      init childs@absY: " + getAttribSafe(node, "childs_absy_init"));
  logger.log("    last init childs_absy_last: " + getAttribSafe(node, "childs_absy_last"));
    setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();


  setAttribSafe(node, "poschilds_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "poschilds_canvas_last", getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("      init posChilds@canvas: " + getAttribSafe(node, "poschilds_canvas_init"));
  logger.log("    last init poschilds_canvas_last: " + getAttribSafe(node, "poschilds_canvas_last"));
  (function () {
    var children = getChildren(node, "poschilds", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("poschilds_canvas_init") : ("canvas")) ));
      logger.log("         step posChilds@canvas: " + getAttribSafe(child, "canvas"));
      setAttribSafe(child, "posx", (getAttribSafe(node, "computedx") ));
      logger.log("         step posChilds@posX: " + getAttribSafe(child, "posx"));
      setAttribSafe(child, "posy", (getAttribSafe(node, "computedy") ));
      logger.log("         step posChilds@posY: " + getAttribSafe(child, "posy"));
    }
  })();

  return true;
}
function visit_flowblock_8(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 8);
  setAttribSafe(node, "computedx", flowblock_computedX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    flowblock_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "computedy", flowblock_computedY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "absy"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    flowblock_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "render", flowblock_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    flowblock_render: " + getAttribSafe(node, "render"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        borderc: " + getInputMaybeAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        borderw: " + getAttribSafe(node, "borderw"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        bgc: " + getInputMaybeAttribSafe(node, "bgc"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));
  setAttribSafe(getChildByRefName(node,"child"), "canvas", flowblock_child_canvas(getAttribSafe(node, "render")));
  logger.log("    flowblock_child_canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  logger.log("        render: " + getAttribSafe(node, "render"));
  setAttribSafe(getChildByRefName(node,"child"), "minx", flowblock_child_minX(getAttribSafe(node, "pl"), getAttribSafe(node, "computedx"), getAttribSafe(node, "ml")));
  logger.log("    flowblock_child_minX: " + getAttribSafe(getChildByRefName(node,"child"), "minx"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(getChildByRefName(node,"child"), "miny", flowblock_child_minY(getAttribSafe(node, "mt"), getAttribSafe(node, "pt"), getAttribSafe(node, "computedy")));
  logger.log("    flowblock_child_minY: " + getAttribSafe(getChildByRefName(node,"child"), "miny"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        computedY: " + getAttribSafe(node, "computedy"));
  return true;
}
function visit_textbox_8(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 8);
  setAttribSafe(node, "render", textbox_render(getAttribSafe(node, "relx"), getAttribSafe(node, "lineheight"), getAttribSafe(node, "rendercolor"), getAttribSafe(node, "splittext"), getAttribSafe(node, "linespacing"), getAttribSafe(node, "offsety"), getAttribSafe(node, "offsetx"), getAttribSafe(node, "canvas"), getAttribSafe(node, "minx"), getAttribSafe(node, "miny"), getAttribSafe(node, "renderfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "fontfamily", '"Arial"'), getAttribSafe(node, "rely")));
  logger.log("    textbox_render: " + getAttribSafe(node, "render"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        renderColor: " + getAttribSafe(node, "rendercolor"));
  logger.log("        splitText: " + getAttribSafe(node, "splittext"));
  logger.log("        lineSpacing: " + getAttribSafe(node, "linespacing"));
  logger.log("        offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  return true;
}
function visit_blockimg_8(node) {
  logger.log("  visit  BlockImg (id: " + node.id + "): " + 8);
  setAttribSafe(node, "computedx", blockimg_computedX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    blockimg_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "computedy", blockimg_computedY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "absy"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    blockimg_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "render", blockimg_render(getAttribSafe(node, "imagehandle"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedx"), getAttribSafe(node, "computedy")));
  logger.log("    blockimg_render: " + getAttribSafe(node, "render"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        computedY: " + getAttribSafe(node, "computedy"));
  return true;
}
function visit_positionedblock_8(node) {
  logger.log("  visit  PositionedBlock (id: " + node.id + "): " + 8);
  setAttribSafe(node, "computedx", positionedblock_computedX(getAttribSafe(node, "position"), getAttribSafe(node, "posx"), getAttribSafe(node, "posrelx")));
  logger.log("    positionedblock_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        position: " + getAttribSafe(node, "position"));
  logger.log("        posX: " + getAttribSafe(node, "posx"));
  logger.log("        posRelX: " + getAttribSafe(node, "posrelx"));
  setAttribSafe(node, "computedy", positionedblock_computedY(getAttribSafe(node, "position"), getAttribSafe(node, "posy"), getAttribSafe(node, "posrely")));
  logger.log("    positionedblock_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        position: " + getAttribSafe(node, "position"));
  logger.log("        posY: " + getAttribSafe(node, "posy"));
  logger.log("        posRelY: " + getAttribSafe(node, "posrely"));
  setAttribSafe(node, "render", positionedblock_render(getAttribSafe(node, "canvas")));
  logger.log("    positionedblock_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));

  setAttribSafe(node, "childs_absy_init", (getAttribSafe(node, "computedy") + getAttribSafe(node, "mt") + getAttribSafe(node, "pt") ));
  setAttribSafe(node, "childs_absy_last", getAttribSafe(node, "childs_absy_init"));
  logger.log("      init childs@absY: " + getAttribSafe(node, "childs_absy_init"));
  logger.log("    last init childs_absy_last: " + getAttribSafe(node, "childs_absy_last"));
    setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_0 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_0(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_0(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_0(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_0(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_0(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_0(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_0(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_0(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_0(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_0(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_0(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_0(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_0(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_0(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_0(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_1 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_1(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_1(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_1(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_1(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_1(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_1(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_1(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_1(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_1(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_1(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_1(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_1(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_1(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_1(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_1(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_2 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_2(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_2(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_2(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_2(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_2(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_2(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_2(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_2(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_2(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_2(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_2(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_2(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_2(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_2(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_2(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_3 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_3(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_3(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_3(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_3(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_3(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_3(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_3(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_3(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_3(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_3(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_3(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_3(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_3(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_3(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_3(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_4 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_4(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_4(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_4(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_4(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_4(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_4(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_4(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_4(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_4(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_4(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_4(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_4(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_4(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_4(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_4(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_5 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_5(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_5(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_5(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_5(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_5(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_5(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_5(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_5(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_5(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_5(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_5(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_5(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_5(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_5(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_5(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_6 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_6(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_6(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_6(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_6(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_6(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_6(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_6(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_6(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_6(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_6(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_6(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_6(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_6(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_6(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_6(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_7 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_7(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_7(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_7(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_7(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_7(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_7(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_7(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_7(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_7(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_7(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_7(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_7(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_7(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_7(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_7(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_8 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_8(node);
      case "blockimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockimg_8(node);
      case "inlineimg":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineimg_8(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_8(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_8(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_8(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_8(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_8(node);
      case "positionedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_positionedblock_8(node);
      case "cell":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cell_8(node);
      case "row":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_row_8(node);
      case "col":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_col_8(node);
      case "cols":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_cols_8(node);
      case "tablebox":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_tablebox_8(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_8(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function layout (root) {
  inherit(visit_0, root);
  inherit(visit_1, root);
  inherit(visit_2, root);
  synthesize(visit_3, root);
  inherit(visit_4, root);
  inherit(visit_5, root);
  synthesize(visit_6, root);
  visit_7(root); //inorder visitors handle recursion 
  inherit(visit_8, root);
}
