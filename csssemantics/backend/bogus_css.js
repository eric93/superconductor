function top_child_relY () { return 0; }
function top_child_inhComputedWidth ( _ale_arg0) { return _ale_arg0; }
function top_child_rightPadding () { return 0; }
function top_child_canvas ( _ale_arg0,  _ale_arg1) { return paintStart(_ale_arg0, _ale_arg1); }
function top_child_minX ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function top_child_minY ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function top_child_maxWidth ( _ale_arg0) { return _ale_arg0; }
function top_child_inhFontSize () { return "20px"; }
function top_child_totalHeightInit () { return 0; }
function top_child_oldLineH () { return 0; }
function top_child_availableWidth () { return getPageWidth() - 15; }
function top_child_childNum () { return 1; }
function top_child_inhColor () { return "black"; }
function top_child_relX () { return 0; }
function listitem_childs_inhComputedWidth ( _ale_arg2,  _ale_arg0,  _ale_arg3,  _ale_arg1) { return (getWidth(_ale_arg0, _ale_arg1) != "auto") ? getWidth(_ale_arg0, _ale_arg1) : (min(_ale_arg2, max(_ale_arg3, _ale_arg1))); }
function listitem_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function listitem_computedWidth ( _ale_arg0) { return _ale_arg0; }
function listitem_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function listitem_intrinsHeight ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function listitem_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function listitem_childs_totalHeightInit ( _ale_arg3,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg5) { return ((_ale_arg0 == 1) ? _ale_arg1 : _ale_arg2) + (_ale_arg3 == 0 ? (_ale_arg0 == 1 ? _ale_arg4 : _ale_arg5 + 5) : 0); }
function listitem_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function listitem_childs_availableWidth ( _ale_arg0) { return _ale_arg0 - 10; }
function listitem_render ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return _ale_arg0 + paintRect(_ale_arg1 + 2, _ale_arg2 + 7, 3, 3, "blue"); }
function listitem_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function listitem_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function listitem_childs_minX ( _ale_arg0) { return _ale_arg0; }
function listitem_computedHeight ( _ale_arg0) { return _ale_arg0; }
function listitem_childs_oldLineH ( _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg3) { return (_ale_arg0 == 1) ? max(_ale_arg1, 10) : ((_ale_arg2 == 0) ? 0 : _ale_arg3); }
function listitem_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function listitem_childs_minY ( _ale_arg0) { return _ale_arg0; }
function stackingcell_childs_rightPadding () { return 0; }
function stackingcell_childs_inhComputedWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (getWidth(_ale_arg0, _ale_arg1) != "auto") ? getWidth(_ale_arg0, _ale_arg1) : max(_ale_arg2, _ale_arg1); }
function stackingcell_maxLineH ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1) + _ale_arg2; }
function stackingcell_childs_relY () { return 0; }
function stackingcell_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function stackingcell_childs_oldLineH () { return 0; }
function stackingcell_relRightX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function stackingcell_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function stackingcell_firstChildWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function stackingcell_totalHeightLast ( _ale_arg0) { return _ale_arg0; }
function stackingcell_childs_minX ( _ale_arg0) { return _ale_arg0; }
function stackingcell_render ( _ale_arg7,  _ale_arg8,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg6,  _ale_arg5) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg1) : 0) + (_ale_arg6 != "solid" ? 0 : paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3, _ale_arg7, _ale_arg8)); }
function stackingcell_childs_relX () { return 0; }
function stackingcell_relRightY ( _ale_arg0) { return _ale_arg0; }
function stackingcell_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function stackingcell_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function stackingcell_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function stackingcell_childs_totalHeightInit () { return 0; }
function stackingcell_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function stackingcell_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function stackingcell_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function wrapbox_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function wrapbox_childs_minX ( _ale_arg0) { return _ale_arg0; }
function wrapbox_computedWidth ( _ale_arg0) { return _ale_arg0; }
function wrapbox_childs_minY ( _ale_arg0) { return _ale_arg0; }
function wrapbox_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function wrapbox_intrinsHeight ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function wrapbox_render ( _ale_arg7,  _ale_arg8,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg6,  _ale_arg5) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg1) : 0) + (_ale_arg6 != "solid" ? 0 : paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3, _ale_arg7, _ale_arg8)); }
function wrapbox_computedHeight ( _ale_arg0) { return _ale_arg0; }
function wrapbox_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function wrapbox_childs_totalHeightInit ( _ale_arg3,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg5) { return ((_ale_arg0 == 1) ? _ale_arg1 : _ale_arg2) + (_ale_arg3 == 0 ? (_ale_arg0 == 1 ? _ale_arg4 : _ale_arg5 + 5) : 0); }
function wrapbox_childs_oldLineH ( _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg3) { return (_ale_arg0 == 1) ? _ale_arg1 : ((_ale_arg2 == 0) ? 0 : _ale_arg3); }
function wrapbox_childs_inhComputedWidth ( _ale_arg2,  _ale_arg0,  _ale_arg3,  _ale_arg1) { return (getWidth(_ale_arg0, _ale_arg1) != "auto") ? getWidth(_ale_arg0, _ale_arg1) : (min(_ale_arg2, max(_ale_arg3, _ale_arg1))); }
function wrapbox_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function wrapbox_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function wrapbox_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function wrapbox_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function wrapbox_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function textbox_splitText ( _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg1,  _ale_arg3) { return splitText(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4); }
function textbox_renderFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function textbox_relRightY ( _ale_arg1,  _ale_arg0,  _ale_arg2,  _ale_arg3) { return (_ale_arg0 - 1) * (_ale_arg1 + _ale_arg2) + _ale_arg3; }
function textbox_renderColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function textbox_metrics () { return 0; }
function textbox_overflow () { return false; }
function textbox_maxLineH ( _ale_arg1,  _ale_arg0) { return max(_ale_arg0, _ale_arg1); }
function textbox_intrinsMinWidth ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getMaxWordW(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_computedHeight ( _ale_arg0) { return _ale_arg0; }
function textbox_totalHeightLast ( _ale_arg3,  _ale_arg1,  _ale_arg0,  _ale_arg2) { return (_ale_arg0 - 1) * (_ale_arg1 + _ale_arg2) + _ale_arg3; }
function textbox_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function textbox_lineSpacing () { return 5; }
function textbox_lineHeight ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getLineHeight(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_computedWidth ( _ale_arg0) { return _ale_arg0; }
function textbox_relRightX ( _ale_arg1,  _ale_arg0,  _ale_arg3,  _ale_arg2) { return (_ale_arg0 == 1) ? (_ale_arg1 + _ale_arg2) : getLeftoverWidth(_ale_arg3); }
function textbox_numberLines ( _ale_arg0) { return getNumberLines(_ale_arg0); }
function textbox_render ( _ale_arg10,  _ale_arg9,  _ale_arg6,  _ale_arg1,  _ale_arg11,  _ale_arg3,  _ale_arg8,  _ale_arg0,  _ale_arg2,  _ale_arg7,  _ale_arg4,  _ale_arg5) { return _ale_arg0 + paintParagraph(_ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg6, _ale_arg7, _ale_arg8, false, _ale_arg9, _ale_arg10, _ale_arg11); }
function textbox_intrinsPrefWidth ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return getSumWordW(_ale_arg0, _ale_arg1, _ale_arg2, _ale_arg3); }
function textbox_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function textbox_firstChildWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getFirstWordW(_ale_arg0, _ale_arg1, _ale_arg2); }
function textbox_intrinsHeight ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return _ale_arg0 * (_ale_arg1 + _ale_arg2) - _ale_arg2; }
function row_childs_totalHeightInit () { return 0; }
function row_childs_column ( _ale_arg1,  _ale_arg0) { return columnsGetCol(_ale_arg0, _ale_arg1); }
function row_childs_minX () { return 0; }
function row_childs_computedHeight ( _ale_arg0) { return _ale_arg0 - 10; }
function row_childs_childNum () { return 0; }
function row_computedHeight ( _ale_arg0) { return _ale_arg0; }
function row_childs_relX () { return 0; }
function row_childs_rightPadding () { return 0; }
function row_childs_relY () { return 0; }
function row_childs_maxWidth () { return 0; }
function row_childs_canvas () { return 0; }
function row_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function row_childs_row ( _ale_arg0) { return _ale_arg0; }
function row_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function row_render ( _ale_arg7,  _ale_arg8,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg6,  _ale_arg5) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg1) : 0) + (_ale_arg6 != "solid" ? 0 : paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3, _ale_arg7, _ale_arg8)); }
function row_childs_oldLineH () { return 0; }
function row_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function row_childs_computedWidth () { return 0; }
function row_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function row_childs_minY ( _ale_arg0) { return _ale_arg0 + 5; }
function row_childs_availableWidth () { return 0; }
function wrappingcell_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function wrappingcell_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function wrappingcell_render ( _ale_arg0) { return _ale_arg0; }
function wrappingcell_intrinsHeight ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function wrappingcell_childs_inhComputedWidth ( _ale_arg2,  _ale_arg0,  _ale_arg3,  _ale_arg1) { return (getWidth(_ale_arg0, _ale_arg1) != "auto") ? getWidth(_ale_arg0, _ale_arg1) : (min(_ale_arg2, max(_ale_arg3, _ale_arg1))); }
function wrappingcell_childs_totalHeightInit ( _ale_arg3,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg5) { return ((_ale_arg0 == 1) ? _ale_arg1 : _ale_arg2) + (_ale_arg3 == 0 ? (_ale_arg0 == 1 ? _ale_arg4 : _ale_arg5 + 5) : 0); }
function wrappingcell_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function wrappingcell_childs_oldLineH ( _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg3) { return (_ale_arg0 == 1) ? _ale_arg1 : ((_ale_arg2 == 0) ? 0 : _ale_arg3); }
function wrappingcell_childs_minX ( _ale_arg0) { return _ale_arg0; }
function wrappingcell_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function wrappingcell_childs_minY ( _ale_arg0) { return _ale_arg0; }
function wrappingcell_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function wrappingcell_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function wrappingcell_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function wrappingcell_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function col_childs_relX ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function col_childs_relY () { return 0; }
function col_childs_oldLineH ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function col_childs_rightPadding ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function col_computedHeight ( _ale_arg0) { return _ale_arg0; }
function col_childs_cellNum () { return 0; }
function col_childs_computedHeight () { return 0; }
function col_childs_row () { return 0; }
function col_childs_availableWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 - 10 + (_ale_arg1 ? 0 : 0); }
function col_childs_column () { return 0; }
function col_childs_minY () { return 0; }
function col_render ( _ale_arg0) { return _ale_arg0; }
function col_childs_totalHeightInit ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function col_childs_computedWidth ( _ale_arg0) { return _ale_arg0 - 10; }
function col_childs_maxWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 - 10 + (_ale_arg1 ? 0 : 0); }
function col_childs_computedWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 - 10 + (_ale_arg1 ? 0 : 0); }
function col_childs_minX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + 5 + (_ale_arg1 ? 0 : 0); }
function vbox_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function vbox_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function vbox_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function vbox_relRightX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function vbox_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function vbox_childs_oldLineH () { return 0; }
function vbox_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function vbox_computedHeight ( _ale_arg0) { return _ale_arg0; }
function vbox_computedWidth ( _ale_arg0) { return _ale_arg0; }
function vbox_childs_inhComputedWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (getWidth(_ale_arg0, _ale_arg1) != "auto") ? getWidth(_ale_arg0, _ale_arg1) : max(_ale_arg2, _ale_arg1); }
function vbox_relRightY ( _ale_arg0) { return _ale_arg0; }
function vbox_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function vbox_firstChildWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function vbox_childs_minX ( _ale_arg0) { return _ale_arg0; }
function vbox_totalHeightLast ( _ale_arg0) { return _ale_arg0; }
function vbox_render ( _ale_arg7,  _ale_arg8,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg6,  _ale_arg5) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg1) : 0) + (_ale_arg6 != "solid" ? 0 : paintLine(_ale_arg2, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3, _ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2 + _ale_arg4, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg7, _ale_arg8) + paintLine(_ale_arg2, _ale_arg3 + _ale_arg5, _ale_arg2, _ale_arg3, _ale_arg7, _ale_arg8)); }
function vbox_childs_totalHeightInit () { return 0; }
function vbox_maxLineH ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1) + _ale_arg2; }
function vbox_childs_rightPadding () { return 0; }
function vbox_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function vbox_childs_relX () { return 0; }
function vbox_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function vbox_childs_relY () { return 0; }
function cols_cols_lowerBound ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_cols_computedWidth ( _ale_arg0,  _ale_arg4,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg5) { return (_ale_arg0 ? 0 : 0) + (_ale_arg1 < _ale_arg2 ? Error("TODO: implement full tables algorithm") : 0) + ((_ale_arg3 < 0) ? _ale_arg4 : (((0 <= _ale_arg3 && _ale_arg3 <= 1)) ? (_ale_arg3 * _ale_arg5 + (1 - _ale_arg3) * _ale_arg4) : ((_ale_arg3 > 1) ? _ale_arg5 : Error("Logic Error")))); }
function cols_cols_colCount ( _ale_arg0) { return _ale_arg0; }
function cols_cols_upperBound ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_cols_tableContentHeight ( _ale_arg0) { return _ale_arg0; }
function cols_cols_prefGuess ( _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg0) { return (_ale_arg0 > 0) ? max((_ale_arg0 * _ale_arg1), _ale_arg2) : _ale_arg3; }
function cols_cols_relY ( _ale_arg0) { return (_ale_arg0 ? 0 : 0); }
function cols_k ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return (_ale_arg0 != _ale_arg1) ? (_ale_arg1 - _ale_arg2) / (_ale_arg1 - _ale_arg0) : 1; }
function cols_cols_cellsReady ( _ale_arg0) { return _ale_arg0; }
function cols_cols_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function cols_guessBelow ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_widthSelect ( _ale_arg0,  _ale_arg1,  _ale_arg2,  _ale_arg3) { return ((_ale_arg0 < _ale_arg1 && _ale_arg2 >= _ale_arg1)) ? 0 : (((_ale_arg2 < _ale_arg1 && _ale_arg3 >= _ale_arg1)) ? 1 : (- 1)); }
function cols_cols_minPercentGuess ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return (_ale_arg0 > 0) ? max((_ale_arg0 * _ale_arg1), _ale_arg2) : _ale_arg2; }
function cols_guessAbove ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return (_ale_arg0 == 0 ? _ale_arg1 : (_ale_arg0 == 1 ? _ale_arg2 : Error("Error: bad widthSelect"))); }
function cols_cols_absY ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function tablebox_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? _ale_arg0 : _ale_arg1; }
function tablebox_rows_relY () { return 0; }
function tablebox_columns_tableContentHeight ( _ale_arg0) { return _ale_arg0; }
function tablebox_intrinsPrefWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_inhColor ( _ale_arg0) { return _ale_arg0; }
function tablebox_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function tablebox_totalHeightLast ( _ale_arg0) { return _ale_arg0; }
function tablebox_relRightY ( _ale_arg0) { return _ale_arg0; }
function tablebox_relRightX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function tablebox_rows_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function tablebox_cellsReady ( _ale_arg0) { return _ale_arg0; }
function tablebox_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function tablebox_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function tablebox_columns_canvas ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_colCount ( _ale_arg0) { return _ale_arg0; }
function tablebox_firstChildWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function tablebox_columns_cellsReady ( _ale_arg0) { return _ale_arg0 ? true : true; }
function tablebox_columns_availableWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_colCount ( _ale_arg0) { return _ale_arg0; }
function tablebox_render ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_absX ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_absX ( _ale_arg0) { return _ale_arg0; }
function tablebox_maxLineH ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1) + _ale_arg2; }
function tablebox_computedWidth ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return (getWidth(_ale_arg0, 0) == "auto" ? min(_ale_arg1, _ale_arg2) : _ale_arg2); }
function tablebox_computedHeight ( _ale_arg0) { return _ale_arg0; }
function tablebox_columns_absY ( _ale_arg0) { return _ale_arg0; }
function tablebox_intrinsMinWidth ( _ale_arg0) { return _ale_arg0; }
function tablebox_rows_tableContentWidth ( _ale_arg0) { return _ale_arg0; }
function img_relRightX ( _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1; }
function img_relRightY ( _ale_arg0) { return _ale_arg0; }
function img_absX ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function img_absY ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function img_intrinsMinWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function img_computedHeight ( _ale_arg0) { return _ale_arg0; }
function img_intrinsHeight ( _ale_arg0) { return getImageHeight(_ale_arg0); }
function img_totalHeightLast ( _ale_arg0) { return _ale_arg0; }
function img_computedWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function img_render ( _ale_arg3,  _ale_arg0,  _ale_arg2,  _ale_arg1) { return _ale_arg0 + paintImg(_ale_arg1, _ale_arg2, _ale_arg3); }
function img_intrinsPrefWidth ( _ale_arg0) { return getImageWidth(_ale_arg0); }
function img_firstChildWidth ( _ale_arg1,  _ale_arg0) { return _ale_arg0 + _ale_arg1; }
function img_maxLineH ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1) + _ale_arg2; }
///// pass /////
function visit_top_0(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"child"), "availablewidth", top_child_availableWidth());
  logger.log("    top_child_availableWidth: " + getAttribSafe(getChildByRefName(node,"child"), "availablewidth"));
  setAttribSafe(getChildByRefName(node,"child"), "childnum", top_child_childNum());
  logger.log("    top_child_childNum: " + getAttribSafe(getChildByRefName(node,"child"), "childnum"));
  setAttribSafe(getChildByRefName(node,"child"), "inhcolor", top_child_inhColor());
  logger.log("    top_child_inhColor: " + getAttribSafe(getChildByRefName(node,"child"), "inhcolor"));
  setAttribSafe(getChildByRefName(node,"child"), "inhfontsize", top_child_inhFontSize());
  logger.log("    top_child_inhFontSize: " + getAttribSafe(getChildByRefName(node,"child"), "inhfontsize"));
  setAttribSafe(getChildByRefName(node,"child"), "oldlineh", top_child_oldLineH());
  logger.log("    top_child_oldLineH: " + getAttribSafe(getChildByRefName(node,"child"), "oldlineh"));
  setAttribSafe(getChildByRefName(node,"child"), "relx", top_child_relX());
  logger.log("    top_child_relX: " + getAttribSafe(getChildByRefName(node,"child"), "relx"));
  setAttribSafe(getChildByRefName(node,"child"), "rely", top_child_relY());
  logger.log("    top_child_relY: " + getAttribSafe(getChildByRefName(node,"child"), "rely"));
  setAttribSafe(getChildByRefName(node,"child"), "rightpadding", top_child_rightPadding());
  logger.log("    top_child_rightPadding: " + getAttribSafe(getChildByRefName(node,"child"), "rightpadding"));
  setAttribSafe(getChildByRefName(node,"child"), "totalheightinit", top_child_totalHeightInit());
  logger.log("    top_child_totalHeightInit: " + getAttribSafe(getChildByRefName(node,"child"), "totalheightinit"));
  setAttribSafe(getChildByRefName(node,"child"), "inhcomputedwidth", top_child_inhComputedWidth(getAttribSafe(getChildByRefName(node,"child"), "availablewidth")));
  logger.log("    top_child_inhComputedWidth: " + getAttribSafe(getChildByRefName(node,"child"), "inhcomputedwidth"));
  logger.log("        child@availableWidth: " + getAttribSafe(getChildByRefName(node,"child"), "availablewidth"));
  setAttribSafe(getChildByRefName(node,"child"), "maxwidth", top_child_maxWidth(getAttribSafe(getChildByRefName(node,"child"), "availablewidth")));
  logger.log("    top_child_maxWidth: " + getAttribSafe(getChildByRefName(node,"child"), "maxwidth"));
  logger.log("        child@availableWidth: " + getAttribSafe(getChildByRefName(node,"child"), "availablewidth"));
  return true;
}
function visit_stackingcell_0(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 0);
  setAttribSafe(node, "relrighty", stackingcell_relRightY(getAttribSafe(node, "rely")));
  logger.log("    stackingcell_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  setAttribSafe(node, "usedcolor", stackingcell_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    stackingcell_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", stackingcell_usedFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    stackingcell_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));

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
      setAttribSafe(child, "oldlineh", (0));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "relx", (0));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "rely", (0));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      setAttribSafe(child, "rightpadding", (0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
      setAttribSafe(child, "totalheightinit", (0));
      logger.log("         step childs@totalHeightInit: " + getAttribSafe(child, "totalheightinit"));
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
function visit_listitem_0(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", listitem_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    listitem_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", listitem_usedFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    listitem_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));

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
function visit_textbox_0(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "linespacing", textbox_lineSpacing());
  logger.log("    textbox_lineSpacing: " + getAttribSafe(node, "linespacing"));
  setAttribSafe(node, "metrics", textbox_metrics());
  logger.log("    textbox_metrics: " + getAttribSafe(node, "metrics"));
  setAttribSafe(node, "overflow", textbox_overflow());
  logger.log("    textbox_overflow: " + getAttribSafe(node, "overflow"));
  setAttribSafe(node, "rendercolor", textbox_renderColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    textbox_renderColor: " + getAttribSafe(node, "rendercolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "renderfontsize", textbox_renderFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    textbox_renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));
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
  return true;
}
function visit_wrapbox_0(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", wrapbox_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    wrapbox_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", wrapbox_usedFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    wrapbox_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));

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
      setAttribSafe(child, "cellnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_cellnum_init") : ("cellnum")) + 1));
      logger.log("         step childs@cellNum: " + getAttribSafe(child, "cellnum"));
      ;
      ;
      ;
      ;
      ;
      ;
      setAttribSafe(child, "rely", (0));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      ;
      setAttribSafe(child, "row", (getAttribSafe(node, "rownum") ));
      logger.log("         step childs@row: " + getAttribSafe(child, "row"));
      ;
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
      setAttribSafe(child, "inhcolor", (getAttribSafe(node, "usedcolor") ));
      logger.log("         step childs@inhColor: " + getAttribSafe(child, "inhcolor"));
      setAttribSafe(child, "inhfontsize", (getAttribSafe(node, "usedfontsize") ));
      logger.log("         step childs@inhFontSize: " + getAttribSafe(child, "inhfontsize"));
      setAttribSafe(node, "intrinscolcount", (getAttribSafe(node, "intrinscolcount") + (isEmptyInt(getInputMaybeAttribSafe(child, "colspan")) ? 1 : valueInt(getInputMaybeAttribSafe(child, "colspan")))));
      logger.log("         step intrinsColCount: " + getAttribSafe(node, "intrinscolcount"));
    }
  })();

  return true;
}
function visit_wrappingcell_0(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", wrappingcell_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    wrappingcell_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", wrappingcell_usedFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    wrappingcell_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));

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
function visit_vbox_0(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", vbox_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    vbox_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", vbox_usedFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    vbox_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));

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
      setAttribSafe(child, "oldlineh", (0));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "relx", (0));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "rely", (0));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      setAttribSafe(child, "rightpadding", (0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
      setAttribSafe(child, "totalheightinit", (0));
      logger.log("         step childs@totalHeightInit: " + getAttribSafe(child, "totalheightinit"));
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
function visit_col_0(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 0);

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
    }
  })();

  return true;
}
function visit_cols_0(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 0);
  return true;
}
function visit_tablebox_0(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 0);
  setAttribSafe(node, "usedcolor", tablebox_usedColor(getInputAttribSafe(node, "color", '"none"'), getAttribSafe(node, "inhcolor")));
  logger.log("    tablebox_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"none"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", tablebox_usedFontSize(getAttribSafe(node, "inhfontsize"), getAttribSafe(node, "intrinsfontsize")));
  logger.log("    tablebox_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getAttribSafe(node, "intrinsfontsize"));

  setAttribSafe(node, "rows_rownum_init", (0));
  setAttribSafe(node, "rows_rownum_last", getAttribSafe(node, "rows_rownum_init"));
  logger.log("      init rows@rowNum: " + getAttribSafe(node, "rows_rownum_init"));
  logger.log("    last init rows_rownum_last: " + getAttribSafe(node, "rows_rownum_last"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rely", (0));
      logger.log("         step rows@relY: " + getAttribSafe(child, "rely"));
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
function visit_img_0(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 0);
  setAttribSafe(node, "computedwidth", img_computedWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    img_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsheight", img_intrinsHeight(getAttribSafe(node, "imagehandle")));
  logger.log("    img_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsminwidth", img_intrinsMinWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    img_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "intrinsprefwidth", img_intrinsPrefWidth(getAttribSafe(node, "imagehandle")));
  logger.log("    img_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  setAttribSafe(node, "computedheight", img_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    img_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
///// pass /////
function visit_top_1(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 1);
  return true;
}
function visit_stackingcell_1(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 1);
  setAttribSafe(node, "totalheightlast", stackingcell_totalHeightLast(getAttribSafe(node, "totalheightinit")));
  logger.log("    stackingcell_totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        totalHeightInit: " + getAttribSafe(node, "totalheightinit"));
  return true;
}
function visit_listitem_1(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 1);

  setAttribSafe(node, "childs_rightpadding_init", (0));
  setAttribSafe(node, "childs_rightpadding_last", getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("      init childs@rightPadding: " + getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("    last init childs_rightpadding_last: " + getAttribSafe(node, "childs_rightpadding_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? getAttribSafe(node, "rightpadding") : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

  return true;
}
function visit_textbox_1(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 1);
  return true;
}
function visit_wrapbox_1(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 1);

  setAttribSafe(node, "childs_rightpadding_init", (0));
  setAttribSafe(node, "childs_rightpadding_last", getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("      init childs@rightPadding: " + getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("    last init childs_rightpadding_last: " + getAttribSafe(node, "childs_rightpadding_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? getAttribSafe(node, "rightpadding") : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

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
function visit_wrappingcell_1(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 1);

  setAttribSafe(node, "childs_rightpadding_init", (0));
  setAttribSafe(node, "childs_rightpadding_last", getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("      init childs@rightPadding: " + getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("    last init childs_rightpadding_last: " + getAttribSafe(node, "childs_rightpadding_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? getAttribSafe(node, "rightpadding") : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

  return true;
}
function visit_vbox_1(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 1);
  return true;
}
function visit_col_1(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 1);

  setAttribSafe(node, "childs_childnum_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "childs_childnum_last", getAttribSafe(node, "childs_childnum_init"));
  logger.log("      init childs@childNum: " + getAttribSafe(node, "childs_childnum_init"));
  logger.log("    last init childs_childnum_last: " + getAttribSafe(node, "childs_childnum_last"));
    setAttribSafe(node, "intrinspercentwidth_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "intrinspercentwidth", getAttribSafe(node, "intrinspercentwidth_init"));
  logger.log("      init intrinsPercentWidth: " + getAttribSafe(node, "intrinspercentwidth_init"));
  logger.log("    last init intrinspercentwidth: " + getAttribSafe(node, "intrinspercentwidth"));
    setAttribSafe(node, "numchilds_init", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "numchilds", getAttribSafe(node, "numchilds_init"));
  logger.log("      init numChilds: " + getAttribSafe(node, "numchilds_init"));
  logger.log("    last init numchilds: " + getAttribSafe(node, "numchilds"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "relx", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "rightpadding", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
      setAttribSafe(child, "totalheightinit", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@totalHeightInit: " + getAttribSafe(child, "totalheightinit"));
      setAttribSafe(node, "intrinspercentwidth", (max((getPercent(getInputAttribSafe(child, "width", '"auto"')) ? getPercent(getInputAttribSafe(child, "width", '"auto"')) : 0), getAttribSafe(node, "intrinspercentwidth"))));
      logger.log("         step intrinsPercentWidth: " + getAttribSafe(node, "intrinspercentwidth"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
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

  setAttribSafe(node, "computedheight", col_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    col_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
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
      setAttribSafe(child, "rely", ((getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step cols@relY: " + getAttribSafe(child, "rely"));
    }
  })();

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
function visit_img_1(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 1);
  setAttribSafe(node, "firstchildwidth", img_firstChildWidth(getAttribSafe(node, "rightpadding"), getAttribSafe(node, "computedwidth")));
  logger.log("    img_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  return true;
}
///// pass /////
function visit_top_2(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 2);
  return true;
}
function visit_stackingcell_2(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 2);

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
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), max(getAttribSafe(child, "intrinsminwidth"), getWidth(getInputAttribSafe(child, "width", '"auto"'), 0) == "auto" ? 0 : getWidth(getInputAttribSafe(child, "width", '"auto"'), 0)))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (max(getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(child, "intrinsprefwidth"))));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_listitem_2(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 2);

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
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 5)));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), max(getAttribSafe(child, "intrinsminwidth"), getWidth(getInputAttribSafe(child, "width", '"auto"'), 0) == "auto" ? 0 : getWidth(getInputAttribSafe(child, "width", '"auto"'), 0)) + 10)));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_textbox_2(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 2);
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


  setAttribSafe(node, "intrinsminwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 0)));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (- 5))));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), max(getAttribSafe(child, "intrinsminwidth"), getWidth(getInputAttribSafe(child, "width", '"auto"'), 0) == "auto" ? 0 : getWidth(getInputAttribSafe(child, "width", '"auto"'), 0)))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

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
function visit_wrappingcell_2(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 2);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "intrinsminwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 0)));
  setAttribSafe(node, "intrinsminwidth", getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("      init intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth_init"));
  logger.log("    last init intrinsminwidth: " + getAttribSafe(node, "intrinsminwidth"));
    setAttribSafe(node, "intrinsprefwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (- 5))));
  setAttribSafe(node, "intrinsprefwidth", getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("      init intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth_init"));
  logger.log("    last init intrinsprefwidth: " + getAttribSafe(node, "intrinsprefwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), max(getAttribSafe(child, "intrinsminwidth"), getWidth(getInputAttribSafe(child, "width", '"auto"'), 0) == "auto" ? 0 : getWidth(getInputAttribSafe(child, "width", '"auto"'), 0)))));
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
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), max(getAttribSafe(child, "intrinsminwidth"), getWidth(getInputAttribSafe(child, "width", '"auto"'), 0) == "auto" ? 0 : getWidth(getInputAttribSafe(child, "width", '"auto"'), 0)))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (max(getAttribSafe(node, "intrinsprefwidth"), getAttribSafe(child, "intrinsprefwidth"))));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
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
function visit_img_2(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 2);
  return true;
}
///// pass /////
function visit_top_3(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 3);
  return true;
}
function visit_stackingcell_3(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 3);
  setAttribSafe(node, "firstchildwidth", stackingcell_firstChildWidth(getAttribSafe(node, "rightpadding"), getAttribSafe(node, "computedwidth")));
  logger.log("    stackingcell_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  setAttribSafe(node, "relrightx", stackingcell_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "computedwidth")));
  logger.log("    stackingcell_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcomputedwidth", ((getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) != "auto") ? getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) : max(getAttribSafe(child, "intrinsminwidth"), getAttribSafe(child, "availablewidth"))));
      logger.log("         step childs@inhComputedWidth: " + getAttribSafe(child, "inhcomputedwidth"));
      setAttribSafe(child, "maxwidth", (getAttribSafe(child, "availablewidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
    }
  })();

  return true;
}
function visit_listitem_3(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", listitem_computedWidth(getAttribSafe(node, "inhcomputedwidth")));
  logger.log("    listitem_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        inhComputedWidth: " + getAttribSafe(node, "inhcomputedwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") - 10));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcomputedwidth", ((getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) != "auto") ? getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) : (min(getAttribSafe(child, "intrinsprefwidth"), max(getAttribSafe(child, "intrinsminwidth"), getAttribSafe(child, "availablewidth"))))));
      logger.log("         step childs@inhComputedWidth: " + getAttribSafe(child, "inhcomputedwidth"));
    }
  })();

  return true;
}
function visit_textbox_3(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", textbox_computedWidth(getAttribSafe(node, "inhcomputedwidth")));
  logger.log("    textbox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        inhComputedWidth: " + getAttribSafe(node, "inhcomputedwidth"));
  return true;
}
function visit_wrapbox_3(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", wrapbox_computedWidth(getAttribSafe(node, "inhcomputedwidth")));
  logger.log("    wrapbox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        inhComputedWidth: " + getAttribSafe(node, "inhcomputedwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcomputedwidth", ((getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) != "auto") ? getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) : (min(getAttribSafe(child, "intrinsprefwidth"), max(getAttribSafe(child, "intrinsminwidth"), getAttribSafe(child, "availablewidth"))))));
      logger.log("         step childs@inhComputedWidth: " + getAttribSafe(child, "inhcomputedwidth"));
    }
  })();

  return true;
}
function visit_row_3(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 3);
  return true;
}
function visit_wrappingcell_3(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcomputedwidth", ((getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) != "auto") ? getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) : (min(getAttribSafe(child, "intrinsprefwidth"), max(getAttribSafe(child, "intrinsminwidth"), getAttribSafe(child, "availablewidth"))))));
      logger.log("         step childs@inhComputedWidth: " + getAttribSafe(child, "inhcomputedwidth"));
    }
  })();

  return true;
}
function visit_vbox_3(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", vbox_computedWidth(getAttribSafe(node, "inhcomputedwidth")));
  logger.log("    vbox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        inhComputedWidth: " + getAttribSafe(node, "inhcomputedwidth"));
  setAttribSafe(node, "firstchildwidth", vbox_firstChildWidth(getAttribSafe(node, "rightpadding"), getAttribSafe(node, "computedwidth")));
  logger.log("    vbox_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "inhcomputedwidth", ((getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) != "auto") ? getWidth(getInputAttribSafe(child, "width", '"auto"'), getAttribSafe(child, "availablewidth")) : max(getAttribSafe(child, "intrinsminwidth"), getAttribSafe(child, "availablewidth"))));
      logger.log("         step childs@inhComputedWidth: " + getAttribSafe(child, "inhcomputedwidth"));
      setAttribSafe(child, "maxwidth", (getAttribSafe(child, "availablewidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
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
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") - 10 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
      setAttribSafe(child, "computedwidth", (getAttribSafe(node, "computedwidth") - 10 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@computedWidth: " + getAttribSafe(child, "computedwidth"));
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "computedwidth") - 10 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
    }
  })();

  return true;
}
function visit_cols_3(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 3);

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
    }
  })();

  return true;
}
function visit_tablebox_3(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 3);
  setAttribSafe(node, "computedwidth", tablebox_computedWidth(getAttribSafe(node, "inhcomputedwidth"), getInputAttribSafe(node, "width", '"auto"'), getAttribSafe(node, "intrinsprefwidth")));
  logger.log("    tablebox_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        inhComputedWidth: " + getAttribSafe(node, "inhcomputedwidth"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '"auto"'));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  setAttribSafe(getChildByRefName(node,"columns"), "availablewidth", tablebox_columns_availableWidth(getAttribSafe(node, "computedwidth")));
  logger.log("    tablebox_columns_availableWidth: " + getAttribSafe(getChildByRefName(node,"columns"), "availablewidth"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  setAttribSafe(node, "firstchildwidth", tablebox_firstChildWidth(getAttribSafe(node, "rightpadding"), getAttribSafe(node, "computedwidth")));
  logger.log("    tablebox_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  return true;
}
function visit_img_3(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 3);
  return true;
}
///// pass /////
function visit_top_4(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 4);
  return true;
}
function visit_stackingcell_4(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 4);
  return true;
}
function visit_listitem_4(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 4);
  return true;
}
function visit_textbox_4(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 4);
  return true;
}
function visit_wrapbox_4(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 4);
  return true;
}
function visit_row_4(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 4);
  return true;
}
function visit_wrappingcell_4(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 4);
  return true;
}
function visit_vbox_4(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 4);
  return true;
}
function visit_col_4(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 4);
  return true;
}
function visit_cols_4(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 4);
  return true;
}
function visit_tablebox_4(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 4);

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
function visit_img_4(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 4);
  return true;
}
///// pass /////
function visit_top_5(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 5);
  return true;
}
function visit_stackingcell_5(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 5);
  return true;
}
function visit_listitem_5(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "firstchildwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 0)));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? 10 + getAttribSafe(child, "firstchildwidth") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
    }
  })();

  return true;
}
function visit_textbox_5(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 5);
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


  setAttribSafe(node, "firstchildwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 0)));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(child, "firstchildwidth") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
    }
  })();

  return true;
}
function visit_row_5(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 5);
  return true;
}
function visit_wrappingcell_5(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 5);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "firstchildwidth_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : 0)));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(child, "firstchildwidth") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
    }
  })();

  return true;
}
function visit_vbox_5(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 5);
  return true;
}
function visit_col_5(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 5);
  return true;
}
function visit_cols_5(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 5);
  return true;
}
function visit_tablebox_5(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 5);
  return true;
}
function visit_img_5(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 5);
  return true;
}
///// pass /////
function visit_top_6(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 6);
  visit_6(getChildByRefName(node, "child")); //recur
  logger.log("  resume visit Top: " + 6);
  setAttribSafe(getChildByRefName(node,"child"), "canvas", top_child_canvas(getAttribSafe(getChildByRefName(node,"child"), "computedwidth"), getAttribSafe(getChildByRefName(node,"child"), "computedheight")));
  logger.log("    top_child_canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  logger.log("        child@computedWidth: " + getAttribSafe(getChildByRefName(node,"child"), "computedwidth"));
  logger.log("        child@computedHeight: " + getAttribSafe(getChildByRefName(node,"child"), "computedheight"));
  setAttribSafe(getChildByRefName(node,"child"), "minx", top_child_minX(getAttribSafe(getChildByRefName(node,"child"), "canvas")));
  logger.log("    top_child_minX: " + getAttribSafe(getChildByRefName(node,"child"), "minx"));
  logger.log("        child@canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  setAttribSafe(getChildByRefName(node,"child"), "miny", top_child_minY(getAttribSafe(getChildByRefName(node,"child"), "canvas")));
  logger.log("    top_child_minY: " + getAttribSafe(getChildByRefName(node,"child"), "miny"));
  logger.log("        child@canvas: " + getAttribSafe(getChildByRefName(node,"child"), "canvas"));
  return true;
}
function visit_stackingcell_6(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 6);

  setAttribSafe(node, "intrinsheight_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (- 10))));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_6(child); //recur
      logger.log("  resume loop visit StackingCell: " + 6);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + 10));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  return true;
}
function visit_listitem_6(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 6);

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
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? (getAttribSafe(node, "relx") + 10) : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5) + getAttribSafe(child, "firstchildwidth") > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? (getAttribSafe(node, "relx") + 10) : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1) ? max(getAttribSafe(node, "oldlineh"), 10) : ((getAttribSafe(child, "relx") == 0) ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      setAttribSafe(child, "totalheightinit", (((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "totalheightinit") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_totalheightlast_init") : ("totalheightlast"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@totalHeightInit: " + getAttribSafe(child, "totalheightinit"));
      visit_6(child); //recur
      logger.log("  resume loop visit ListItem: " + 6);
    }
  })();


  setAttribSafe(node, "maxlineh_init", (max(getAttribSafe(node, "oldlineh"), 10)));
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
    setAttribSafe(node, "totalheightlast_init", (getAttribSafe(node, "totalheightinit") ));
  setAttribSafe(node, "totalheightlast", getAttribSafe(node, "totalheightlast_init"));
  logger.log("      init totalHeightLast: " + getAttribSafe(node, "totalheightlast_init"));
  logger.log("    last init totalheightlast: " + getAttribSafe(node, "totalheightlast"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") ));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
      setAttribSafe(node, "totalheightlast", (getAttribSafe(child, "totalheightlast") ));
      logger.log("         step totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
    }
  })();

  setAttribSafe(node, "intrinsheight", listitem_intrinsHeight(getAttribSafe(node, "totalheightlast"), getAttribSafe(node, "maxlineh")));
  logger.log("    listitem_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        maxLineH: " + getAttribSafe(node, "maxlineh"));
  setAttribSafe(node, "computedheight", listitem_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    listitem_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_textbox_6(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 6);
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
  setAttribSafe(node, "intrinsheight", textbox_intrinsHeight(getAttribSafe(node, "lineheight"), getAttribSafe(node, "numberlines"), getAttribSafe(node, "linespacing")));
  logger.log("    textbox_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        numberLines: " + getAttribSafe(node, "numberlines"));
  logger.log("        lineSpacing: " + getAttribSafe(node, "linespacing"));
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
  setAttribSafe(node, "totalheightlast", textbox_totalHeightLast(getAttribSafe(node, "totalheightinit"), getAttribSafe(node, "lineheight"), getAttribSafe(node, "numberlines"), getAttribSafe(node, "linespacing")));
  logger.log("    textbox_totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        totalHeightInit: " + getAttribSafe(node, "totalheightinit"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        numberLines: " + getAttribSafe(node, "numberlines"));
  logger.log("        lineSpacing: " + getAttribSafe(node, "linespacing"));
  setAttribSafe(node, "computedheight", textbox_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    textbox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_wrapbox_6(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 6);

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
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5) + getAttribSafe(child, "firstchildwidth") > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "oldlineh") : ((getAttribSafe(child, "relx") == 0) ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      setAttribSafe(child, "totalheightinit", (((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "totalheightinit") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_totalheightlast_init") : ("totalheightlast"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@totalHeightInit: " + getAttribSafe(child, "totalheightinit"));
      visit_6(child); //recur
      logger.log("  resume loop visit WrapBox: " + 6);
    }
  })();


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
    setAttribSafe(node, "totalheightlast_init", (getAttribSafe(node, "totalheightinit") ));
  setAttribSafe(node, "totalheightlast", getAttribSafe(node, "totalheightlast_init"));
  logger.log("      init totalHeightLast: " + getAttribSafe(node, "totalheightlast_init"));
  logger.log("    last init totalheightlast: " + getAttribSafe(node, "totalheightlast"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") ));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
      setAttribSafe(node, "totalheightlast", (getAttribSafe(child, "totalheightlast") ));
      logger.log("         step totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
    }
  })();

  setAttribSafe(node, "intrinsheight", wrapbox_intrinsHeight(getAttribSafe(node, "totalheightlast"), getAttribSafe(node, "maxlineh")));
  logger.log("    wrapbox_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        maxLineH: " + getAttribSafe(node, "maxlineh"));
  setAttribSafe(node, "computedheight", wrapbox_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    wrapbox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_row_6(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 6);

  setAttribSafe(node, "intrinsheight_init", (10));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_6(child); //recur
      logger.log("  resume loop visit Row: " + 6);
      setAttribSafe(node, "intrinsheight", (((isEmptyInt(getInputMaybeAttribSafe(child, "rowspan")) || valueInt(getInputMaybeAttribSafe(child, "rowspan")) == 1)) ? max(getAttribSafe(node, "intrinsheight"), getAttribSafe(child, "intrinsheight") + 10) : getAttribSafe(node, "intrinsheight") ));
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
      setAttribSafe(child, "computedheight", (getAttribSafe(node, "computedheight") - 10));
      logger.log("         step childs@computedHeight: " + getAttribSafe(child, "computedheight"));
    }
  })();

  return true;
}
function visit_wrappingcell_6(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 6);

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
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5) + getAttribSafe(child, "firstchildwidth") > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "oldlineh") : ((getAttribSafe(child, "relx") == 0) ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      setAttribSafe(child, "totalheightinit", (((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "totalheightinit") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_totalheightlast_init") : ("totalheightlast"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@totalHeightInit: " + getAttribSafe(child, "totalheightinit"));
      visit_6(child); //recur
      logger.log("  resume loop visit WrappingCell: " + 6);
    }
  })();


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
    setAttribSafe(node, "totalheightlast_init", (getAttribSafe(node, "totalheightinit") ));
  setAttribSafe(node, "totalheightlast", getAttribSafe(node, "totalheightlast_init"));
  logger.log("      init totalHeightLast: " + getAttribSafe(node, "totalheightlast_init"));
  logger.log("    last init totalheightlast: " + getAttribSafe(node, "totalheightlast"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") ));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
      setAttribSafe(node, "totalheightlast", (getAttribSafe(child, "totalheightlast") ));
      logger.log("         step totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
    }
  })();

  setAttribSafe(node, "intrinsheight", wrappingcell_intrinsHeight(getAttribSafe(node, "totalheightlast"), getAttribSafe(node, "maxlineh")));
  logger.log("    wrappingcell_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        maxLineH: " + getAttribSafe(node, "maxlineh"));
  return true;
}
function visit_vbox_6(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 6);
  setAttribSafe(node, "relrightx", vbox_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "computedwidth")));
  logger.log("    vbox_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  setAttribSafe(node, "relrighty", vbox_relRightY(getAttribSafe(node, "rely")));
  logger.log("    vbox_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  setAttribSafe(node, "totalheightlast", vbox_totalHeightLast(getAttribSafe(node, "totalheightinit")));
  logger.log("    vbox_totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        totalHeightInit: " + getAttribSafe(node, "totalheightinit"));

  setAttribSafe(node, "intrinsheight_init", ((getAttribSafe(node, "numchilds") == 0 ? 10 : (- 10))));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_6(child); //recur
      logger.log("  resume loop visit VBox: " + 6);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + 10));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", vbox_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    vbox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "maxlineh", vbox_maxLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight")));
  logger.log("    vbox_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  return true;
}
function visit_col_6(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 6);

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_6(child); //recur
      logger.log("  resume loop visit Col: " + 6);
    }
  })();

  return true;
}
function visit_cols_6(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 6);

(function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_6(child); //recur
      logger.log("  resume loop visit Cols: " + 6);
    }
  })();

  return true;
}
function visit_tablebox_6(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 6);
  setAttribSafe(node, "relrightx", tablebox_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "computedwidth")));
  logger.log("    tablebox_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  setAttribSafe(node, "relrighty", tablebox_relRightY(getAttribSafe(node, "rely")));
  logger.log("    tablebox_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  setAttribSafe(node, "totalheightlast", tablebox_totalHeightLast(getAttribSafe(node, "totalheightinit")));
  logger.log("    tablebox_totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        totalHeightInit: " + getAttribSafe(node, "totalheightinit"));
  visit_6(getChildByRefName(node, "columns")); //recur
  logger.log("  resume visit TableBox: " + 6);

  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "rows", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      visit_6(child); //recur
      logger.log("  resume loop visit TableBox: " + 6);
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(getChildByRefName(node,"columns"), "tablecontentheight", tablebox_columns_tableContentHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    tablebox_columns_tableContentHeight: " + getAttribSafe(getChildByRefName(node,"columns"), "tablecontentheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "computedheight", tablebox_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    tablebox_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "maxlineh", tablebox_maxLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight")));
  logger.log("    tablebox_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  return true;
}
function visit_img_6(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 6);
  setAttribSafe(node, "maxlineh", img_maxLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight")));
  logger.log("    img_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  setAttribSafe(node, "relrightx", img_relRightX(getAttribSafe(node, "relx"), getAttribSafe(node, "computedwidth")));
  logger.log("    img_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  setAttribSafe(node, "relrighty", img_relRightY(getAttribSafe(node, "rely")));
  logger.log("    img_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  setAttribSafe(node, "totalheightlast", img_totalHeightLast(getAttribSafe(node, "totalheightinit")));
  logger.log("    img_totalHeightLast: " + getAttribSafe(node, "totalheightlast"));
  logger.log("        totalHeightInit: " + getAttribSafe(node, "totalheightinit"));
  return true;
}
///// pass /////
function visit_top_7(node) {
  logger.log("  visit  Top (id: " + node.id + "): " + 7);
  return true;
}
function visit_stackingcell_7(node) {
  logger.log("  visit  StackingCell (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", stackingcell_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    stackingcell_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", stackingcell_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    stackingcell_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "maxlineh", stackingcell_maxLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight")));
  logger.log("    stackingcell_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  setAttribSafe(node, "render", stackingcell_render(getInputAttribSafe(node, "borderw", '0'), getInputAttribSafe(node, "borderc", '"none"'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getInputAttribSafe(node, "bgc", '"none"'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "borders", '"none"'), getAttribSafe(node, "computedheight")));
  logger.log("    stackingcell_render: " + getAttribSafe(node, "render"));
  logger.log("        borderw: " + getInputAttribSafe(node, "borderw", '0'));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '"none"'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        bgc: " + getInputAttribSafe(node, "bgc", '"none"'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));

  setAttribSafe(node, "childs_miny_init", (getAttribSafe(node, "absy") ));
  setAttribSafe(node, "childs_miny_last", getAttribSafe(node, "childs_miny_init"));
  logger.log("      init childs@minY: " + getAttribSafe(node, "childs_miny_init"));
  logger.log("    last init childs_miny_last: " + getAttribSafe(node, "childs_miny_last"));
    setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "absx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_miny_init") : ("miny")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + 10))));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_listitem_7(node) {
  logger.log("  visit  ListItem (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", listitem_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    listitem_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", listitem_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    listitem_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", listitem_render(getAttribSafe(node, "canvas"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx")));
  logger.log("    listitem_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "minx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(node, "miny") ));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
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
function visit_textbox_7(node) {
  logger.log("  visit  TextBox (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", textbox_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    textbox_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", textbox_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    textbox_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", textbox_render(getAttribSafe(node, "rendercolor"), getAttribSafe(node, "lineheight"), getAttribSafe(node, "relx"), getAttribSafe(node, "splittext"), getAttribSafe(node, "linespacing"), getAttribSafe(node, "renderfontsize"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "canvas"), getInputAttribSafe(node, "fontfamily", '"Arial"'), getAttribSafe(node, "rely"), getAttribSafe(node, "minx"), getAttribSafe(node, "miny")));
  logger.log("    textbox_render: " + getAttribSafe(node, "render"));
  logger.log("        renderColor: " + getAttribSafe(node, "rendercolor"));
  logger.log("        lineHeight: " + getAttribSafe(node, "lineheight"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        splitText: " + getAttribSafe(node, "splittext"));
  logger.log("        lineSpacing: " + getAttribSafe(node, "linespacing"));
  logger.log("        renderFontSize: " + getAttribSafe(node, "renderfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        fontFamily: " + getInputAttribSafe(node, "fontfamily", '"Arial"'));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  return true;
}
function visit_wrapbox_7(node) {
  logger.log("  visit  WrapBox (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", wrapbox_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    wrapbox_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", wrapbox_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    wrapbox_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", wrapbox_render(getInputAttribSafe(node, "borderw", '0'), getInputAttribSafe(node, "borderc", '"none"'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getInputAttribSafe(node, "bgc", '"none"'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "borders", '"none"'), getAttribSafe(node, "computedheight")));
  logger.log("    wrapbox_render: " + getAttribSafe(node, "render"));
  logger.log("        borderw: " + getInputAttribSafe(node, "borderw", '0'));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '"none"'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        bgc: " + getInputAttribSafe(node, "bgc", '"none"'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "minx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(node, "miny") ));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
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
function visit_row_7(node) {
  logger.log("  visit  Row (id: " + node.id + "): " + 7);
  setAttribSafe(node, "render", row_render(getInputAttribSafe(node, "borderw", '0'), getInputAttribSafe(node, "borderc", '"none"'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getInputAttribSafe(node, "bgc", '"none"'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "borders", '"none"'), getAttribSafe(node, "computedheight")));
  logger.log("    row_render: " + getAttribSafe(node, "render"));
  logger.log("        borderw: " + getInputAttribSafe(node, "borderw", '0'));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '"none"'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        bgc: " + getInputAttribSafe(node, "bgc", '"none"'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));

(function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "miny", (getAttribSafe(node, "absy") + 5));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      ;
    }
  })();

  return true;
}
function visit_wrappingcell_7(node) {
  logger.log("  visit  WrappingCell (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", wrappingcell_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    wrappingcell_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", wrappingcell_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    wrappingcell_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", wrappingcell_render(getAttribSafe(node, "canvas")));
  logger.log("    wrappingcell_render: " + getAttribSafe(node, "render"));
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

  return true;
}
function visit_vbox_7(node) {
  logger.log("  visit  VBox (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", vbox_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    vbox_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", vbox_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    vbox_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", vbox_render(getInputAttribSafe(node, "borderw", '0'), getInputAttribSafe(node, "borderc", '"none"'), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "absy"), getInputAttribSafe(node, "bgc", '"none"'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "borders", '"none"'), getAttribSafe(node, "computedheight")));
  logger.log("    vbox_render: " + getAttribSafe(node, "render"));
  logger.log("        borderw: " + getInputAttribSafe(node, "borderw", '0'));
  logger.log("        borderc: " + getInputAttribSafe(node, "borderc", '"none"'));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        bgc: " + getInputAttribSafe(node, "bgc", '"none"'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));

  setAttribSafe(node, "childs_miny_init", (getAttribSafe(node, "absy") ));
  setAttribSafe(node, "childs_miny_last", getAttribSafe(node, "childs_miny_init"));
  logger.log("      init childs@minY: " + getAttribSafe(node, "childs_miny_init"));
  logger.log("    last init childs_miny_last: " + getAttribSafe(node, "childs_miny_last"));
    setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "absx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_miny_init") : ("miny")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + 10))));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_col_7(node) {
  logger.log("  visit  Col (id: " + node.id + "): " + 7);
  setAttribSafe(node, "render", col_render(getAttribSafe(node, "canvas")));
  logger.log("    col_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));

  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "absx") + 5 + (getAttribSafe(node, "cellsready") ? 0 : 0)));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_cols_7(node) {
  logger.log("  visit  Cols (id: " + node.id + "): " + 7);

  setAttribSafe(node, "cols_canvas_init", (getAttribSafe(node, "canvas") + (getAttribSafe(node, "cellsready") ? 0 : 0)));
  setAttribSafe(node, "cols_canvas_last", getAttribSafe(node, "cols_canvas_init"));
  logger.log("      init cols@canvas: " + getAttribSafe(node, "cols_canvas_init"));
  logger.log("    last init cols_canvas_last: " + getAttribSafe(node, "cols_canvas_last"));
  (function () {
    var children = getChildren(node, "cols", true);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") + getAttribSafe(child, "relx") ));
      logger.log("         step cols@absX: " + getAttribSafe(child, "absx"));
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
function visit_tablebox_7(node) {
  logger.log("  visit  TableBox (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", tablebox_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    tablebox_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", tablebox_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    tablebox_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", tablebox_render(getAttribSafe(node, "canvas")));
  logger.log("    tablebox_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  setAttribSafe(getChildByRefName(node,"columns"), "absx", tablebox_columns_absX(getAttribSafe(node, "absx")));
  logger.log("    tablebox_columns_absX: " + getAttribSafe(getChildByRefName(node,"columns"), "absx"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  setAttribSafe(getChildByRefName(node,"columns"), "absy", tablebox_columns_absY(getAttribSafe(node, "absy")));
  logger.log("    tablebox_columns_absY: " + getAttribSafe(getChildByRefName(node,"columns"), "absy"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  setAttribSafe(getChildByRefName(node,"columns"), "canvas", tablebox_columns_canvas(getAttribSafe(node, "render")));
  logger.log("    tablebox_columns_canvas: " + getAttribSafe(getChildByRefName(node,"columns"), "canvas"));
  logger.log("        render: " + getAttribSafe(node, "render"));

  setAttribSafe(node, "rows_absy_init", (getAttribSafe(node, "absy") ));
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
      setAttribSafe(child, "absx", (getAttribSafe(node, "absx") ));
      logger.log("         step rows@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_absy_init") : ("absy")) + (getAttribSafe(child, "rownum") == 1 ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_computedheight_init") : ("computedheight")))));
      logger.log("         step rows@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("rows_canvas_init") : ("canvas")) ));
      logger.log("         step rows@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_img_7(node) {
  logger.log("  visit  Img (id: " + node.id + "): " + 7);
  setAttribSafe(node, "absx", img_absX(getAttribSafe(node, "relx"), getAttribSafe(node, "minx")));
  logger.log("    img_absX: " + getAttribSafe(node, "absx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", img_absY(getAttribSafe(node, "rely"), getAttribSafe(node, "miny")));
  logger.log("    img_absY: " + getAttribSafe(node, "absy"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", img_render(getAttribSafe(node, "imagehandle"), getAttribSafe(node, "canvas"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx")));
  logger.log("    img_render: " + getAttribSafe(node, "render"));
  logger.log("        imagehandle: " + getAttribSafe(node, "imagehandle"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  return true;
}
function visit_0 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_0(node);
      case "wrapbox":
        return visit_wrapbox_0(node);
      case "listitem":
        return visit_listitem_0(node);
      case "img":
        return visit_img_0(node);
      case "tablebox":
        return visit_tablebox_0(node);
      case "wrappingcell":
        return visit_wrappingcell_0(node);
      case "stackingcell":
        return visit_stackingcell_0(node);
      case "row":
        return visit_row_0(node);
      case "col":
        return visit_col_0(node);
      case "cols":
        return visit_cols_0(node);
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
      case "wrapbox":
        return visit_wrapbox_1(node);
      case "listitem":
        return visit_listitem_1(node);
      case "img":
        return visit_img_1(node);
      case "tablebox":
        return visit_tablebox_1(node);
      case "wrappingcell":
        return visit_wrappingcell_1(node);
      case "stackingcell":
        return visit_stackingcell_1(node);
      case "row":
        return visit_row_1(node);
      case "col":
        return visit_col_1(node);
      case "cols":
        return visit_cols_1(node);
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
      case "wrapbox":
        return visit_wrapbox_2(node);
      case "listitem":
        return visit_listitem_2(node);
      case "img":
        return visit_img_2(node);
      case "tablebox":
        return visit_tablebox_2(node);
      case "wrappingcell":
        return visit_wrappingcell_2(node);
      case "stackingcell":
        return visit_stackingcell_2(node);
      case "row":
        return visit_row_2(node);
      case "col":
        return visit_col_2(node);
      case "cols":
        return visit_cols_2(node);
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
      case "wrapbox":
        return visit_wrapbox_3(node);
      case "listitem":
        return visit_listitem_3(node);
      case "img":
        return visit_img_3(node);
      case "tablebox":
        return visit_tablebox_3(node);
      case "wrappingcell":
        return visit_wrappingcell_3(node);
      case "stackingcell":
        return visit_stackingcell_3(node);
      case "row":
        return visit_row_3(node);
      case "col":
        return visit_col_3(node);
      case "cols":
        return visit_cols_3(node);
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
      case "wrapbox":
        return visit_wrapbox_4(node);
      case "listitem":
        return visit_listitem_4(node);
      case "img":
        return visit_img_4(node);
      case "tablebox":
        return visit_tablebox_4(node);
      case "wrappingcell":
        return visit_wrappingcell_4(node);
      case "stackingcell":
        return visit_stackingcell_4(node);
      case "row":
        return visit_row_4(node);
      case "col":
        return visit_col_4(node);
      case "cols":
        return visit_cols_4(node);
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
      case "wrapbox":
        return visit_wrapbox_5(node);
      case "listitem":
        return visit_listitem_5(node);
      case "img":
        return visit_img_5(node);
      case "tablebox":
        return visit_tablebox_5(node);
      case "wrappingcell":
        return visit_wrappingcell_5(node);
      case "stackingcell":
        return visit_stackingcell_5(node);
      case "row":
        return visit_row_5(node);
      case "col":
        return visit_col_5(node);
      case "cols":
        return visit_cols_5(node);
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
      case "wrapbox":
        return visit_wrapbox_6(node);
      case "listitem":
        return visit_listitem_6(node);
      case "img":
        return visit_img_6(node);
      case "tablebox":
        return visit_tablebox_6(node);
      case "wrappingcell":
        return visit_wrappingcell_6(node);
      case "stackingcell":
        return visit_stackingcell_6(node);
      case "row":
        return visit_row_6(node);
      case "col":
        return visit_col_6(node);
      case "cols":
        return visit_cols_6(node);
      case "vbox":
        return visit_vbox_6(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_6(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_7 (node) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "top":
        return visit_top_7(node);
      case "wrapbox":
        return visit_wrapbox_7(node);
      case "listitem":
        return visit_listitem_7(node);
      case "img":
        return visit_img_7(node);
      case "tablebox":
        return visit_tablebox_7(node);
      case "wrappingcell":
        return visit_wrappingcell_7(node);
      case "stackingcell":
        return visit_stackingcell_7(node);
      case "row":
        return visit_row_7(node);
      case "col":
        return visit_col_7(node);
      case "cols":
        return visit_cols_7(node);
      case "vbox":
        return visit_vbox_7(node);
    }
  }
  if (node.nodeType == 3) return visit_textbox_7(node);
  throw ("unknown node type for dispatch: " + node.tagName);
}
function layout (root) {
  inherit(visit_0, root);
  inherit(visit_1, root);
  synthesize(visit_2, root);
  inherit(visit_3, root);
  inherit(visit_4, root);
  synthesize(visit_5, root);
  visit_6(root); //inorder visitors handle recursion 
  inherit(visit_7, root);
}
