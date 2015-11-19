function inlineleaf_intrinsHeight ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg1, _ale_arg2, 0)); }
function inlineleaf_minLeft ( _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg0) { return max(minLeftX(_ale_arg0, _ale_arg1, _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4), 0); }
function inlineleaf_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function inlineleaf_intrinsPrefWidth ( _ale_arg0) { return _ale_arg0; }
function inlineleaf_absX ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineleaf_relRightX ( _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg1,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineleaf_ml () { return 0; }
function inlineleaf_adjRelY ( _ale_arg3,  _ale_arg4,  _ale_arg5,  _ale_arg0,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 ? minTopY(_ale_arg1, _ale_arg2 + _ale_arg3 + 5, _ale_arg4, _ale_arg5, _ale_arg6) : _ale_arg2; }
function inlineleaf_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function inlineleaf_mr () { return 0; }
function inlineleaf_absY ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineleaf_computedWidth ( _ale_arg0) { return _ale_arg0; }
function inlineleaf_pl () { return 0; }
function inlineleaf_floatCollision ( _ale_arg6,  _ale_arg12,  _ale_arg8,  _ale_arg7,  _ale_arg0,  _ale_arg2,  _ale_arg4,  _ale_arg3,  _ale_arg5,  _ale_arg9,  _ale_arg11,  _ale_arg1,  _ale_arg10) { return min(maxRightX(_ale_arg0, _ale_arg1, _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4), _ale_arg5) < ((_ale_arg6 == 0 ? _ale_arg7 : _ale_arg6) + _ale_arg8 + _ale_arg9 + _ale_arg10 + _ale_arg11 + _ale_arg12) ? true : false; }
function inlineleaf_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function inlineleaf_computedHeight ( _ale_arg0) { return _ale_arg0; }
function inlineleaf_firstChildWidth ( _ale_arg5,  _ale_arg1,  _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineleaf_adjRelX ( _ale_arg6,  _ale_arg2,  _ale_arg5,  _ale_arg4,  _ale_arg7,  _ale_arg0,  _ale_arg3,  _ale_arg1) { return _ale_arg0 ? max(minLeftX(_ale_arg1, _ale_arg2, _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5), 0) : (_ale_arg6 == 0 ? _ale_arg7 : _ale_arg6); }
function inlineleaf_offsetX ( _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function inlineleaf_adjOldLineH ( _ale_arg1,  _ale_arg0) { return _ale_arg0 ? 0 : _ale_arg1; }
function inlineleaf_pt () { return 0; }
function inlineleaf_floatLstOut ( _ale_arg0) { return _ale_arg0; }
function inlineleaf_relRightY ( _ale_arg0) { return _ale_arg0; }
function inlineleaf_intrinsMinWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg1, _ale_arg2, 0)); }
function inlineleaf_mt () { return 0; }
function inlineleaf_offsetY ( _ale_arg1,  _ale_arg0,  _ale_arg4,  _ale_arg5,  _ale_arg3,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function inlineleaf_pb () { return 0; }
function inlineleaf_maxLineH ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1 + _ale_arg2 + _ale_arg3); }
function inlineleaf_pr () { return 0; }
function inlineleaf_mb () { return 0; }
function normalblock_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function normalblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function normalblock_pb ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_mb ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalblock_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function normalblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function normalblock_mt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalblock_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function normalblock_childs_posContY ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function normalblock_computedX ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalblock_computedY ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg3,  _ale_arg0,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalblock_childs_floatLstIn ( _ale_arg11,  _ale_arg10,  _ale_arg5,  _ale_arg3,  _ale_arg6,  _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg9,  _ale_arg4,  _ale_arg8,  _ale_arg7) { return (_ale_arg0 == 1) ? translate(_ale_arg1, (- (_ale_arg2 + _ale_arg3)), (- (_ale_arg4 + _ale_arg5))) : translate(_ale_arg6, _ale_arg7 + _ale_arg8 - (_ale_arg2 + _ale_arg3), (- (_ale_arg9 + _ale_arg10 + _ale_arg11 + _ale_arg4 + _ale_arg5))); }
function normalblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function normalblock_pl ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_clearance ( _ale_arg0,  _ale_arg1) { return _ale_arg0 == "left" ? getLeftOverhang(_ale_arg1) : (_ale_arg0 == "right" ? getRightOverhang(_ale_arg1) : (_ale_arg0 == "both" ? max(getLeftOverhang(_ale_arg1), getRightOverhang(_ale_arg1)) : 0)); }
function normalblock_mr ( _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg5) { return ((getTag(_ale_arg0) != CONST_AUTO()) && ((getTag(_ale_arg1) == CONST_AUTO() || getTag(_ale_arg2) == CONST_AUTO()))) ? getValue(_ale_arg0, _ale_arg3, _ale_arg4) : (getTag(_ale_arg1) == CONST_AUTO() ? 0 : (getTag(_ale_arg2) == CONST_AUTO() ? (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4)) / 2 : (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4) - getValue(_ale_arg2, _ale_arg3, _ale_arg4)))); }
function normalblock_childs_posContWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function normalblock_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg5,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg4,  _ale_arg7) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : max(_ale_arg3, _ale_arg2) - _ale_arg4 - _ale_arg5 - _ale_arg6 - _ale_arg7; }
function normalblock_pr ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_computedHeight ( _ale_arg0) { return _ale_arg0; }
function normalblock_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function normalblock_childs_posContX ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function normalblock_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function normalblock_usedFloatLst ( _ale_arg1,  _ale_arg0) { return translate(_ale_arg0, 0, (- _ale_arg1)); }
function normalblock_pt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function normalblock_ml ( _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg6,  _ale_arg5) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (getTag(_ale_arg4) == CONST_AUTO() ? (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2)) / 2 : (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2) - getVal(_ale_arg4, _ale_arg1, _ale_arg2)))); }
function flowblock_child_posContWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function flowblock_pb ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowblock_child_minY ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function flowblock_mb ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowblock_usedFloatLst ( _ale_arg1,  _ale_arg0) { return translate(_ale_arg0, 0, (- _ale_arg1)); }
function flowblock_clearance ( _ale_arg0,  _ale_arg1) { return _ale_arg0 == "left" ? getLeftOverhang(_ale_arg1) : (_ale_arg0 == "right" ? getRightOverhang(_ale_arg1) : (_ale_arg0 == "both" ? max(getLeftOverhang(_ale_arg1), getRightOverhang(_ale_arg1)) : 0)); }
function flowblock_intrinsPrefWidth ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return _ale_arg0 == 0 ? _ale_arg1 + _ale_arg2 : _ale_arg0 + _ale_arg2; }
function flowblock_child_rightPadding () { return 0; }
function flowblock_child_relX () { return 0; }
function flowblock_intrinsHeight ( _ale_arg4,  _ale_arg6,  _ale_arg3,  _ale_arg2,  _ale_arg0,  _ale_arg5,  _ale_arg1) { return _ale_arg0 + _ale_arg1 - _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5 + _ale_arg6; }
function flowblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function flowblock_computedHeight ( _ale_arg0) { return _ale_arg0; }
function flowblock_pl ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowblock_ml ( _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg6,  _ale_arg5) { return (getTag(_ale_arg0) != CONST_AUTO()) ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (getTag(_ale_arg4) == CONST_AUTO() ? (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2)) / 2 : (_ale_arg2 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg3, _ale_arg1, _ale_arg2) - getVal(_ale_arg4, _ale_arg1, _ale_arg2)))); }
function flowblock_intrinsMinWidth ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return max(_ale_arg0 + _ale_arg1, _ale_arg2 + _ale_arg1); }
function flowblock_child_posContX ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function flowblock_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function flowblock_pt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowblock_child_relY () { return 0; }
function flowblock_mr ( _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg5) { return ((getTag(_ale_arg0) != CONST_AUTO()) && ((getTag(_ale_arg1) == CONST_AUTO() || getTag(_ale_arg2) == CONST_AUTO()))) ? getValue(_ale_arg0, _ale_arg3, _ale_arg4) : (getTag(_ale_arg1) == CONST_AUTO() ? 0 : (getTag(_ale_arg2) == CONST_AUTO() ? (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4)) / 2 : (_ale_arg4 - _ale_arg5 - _ale_arg6 - getValue(_ale_arg1, _ale_arg3, _ale_arg4) - getValue(_ale_arg2, _ale_arg3, _ale_arg4)))); }
function flowblock_child_minX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function flowblock_child_posContY ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function flowblock_computedX ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function flowblock_computedY ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg3,  _ale_arg0,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function flowblock_floatLstOut ( _ale_arg1,  _ale_arg3,  _ale_arg0,  _ale_arg4,  _ale_arg2) { return translate(_ale_arg0, _ale_arg1 + _ale_arg2, _ale_arg3 + _ale_arg4); }
function flowblock_child_canvas ( _ale_arg0) { return _ale_arg0; }
function flowblock_mt ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function flowblock_child_maxWidth ( _ale_arg0) { return _ale_arg0; }
function flowblock_child_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function flowblock_child_oldLineH () { return 0; }
function flowblock_computedWidth ( _ale_arg3,  _ale_arg2,  _ale_arg5,  _ale_arg1,  _ale_arg0,  _ale_arg6,  _ale_arg4,  _ale_arg7) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : max(_ale_arg3, _ale_arg2) - _ale_arg4 - _ale_arg5 - _ale_arg6 - _ale_arg7; }
function flowblock_child_inhColor ( _ale_arg0) { return _ale_arg0; }
function flowblock_child_floatLstIn ( _ale_arg1,  _ale_arg3,  _ale_arg0,  _ale_arg4,  _ale_arg2) { return translate(_ale_arg0, (- (_ale_arg1 + _ale_arg2)), (- (_ale_arg3 + _ale_arg4))); }
function flowblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function flowblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function flowblock_pr ( _ale_arg2,  _ale_arg1,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function root_child_inhFontSize () { return 20; }
function root_child_inhColor () { return "black"; }
function root_child_floatLstIn () { return emptyFloatLst(); }
function root_child_absX ( _ale_arg0) { return _ale_arg0 ? 0 : 0; }
function root_child_availableWidth () { return getPageWidth() - 15; }
function root_child_absY ( _ale_arg0) { return _ale_arg0 ? 0 : 0; }
function root_child_childNum () { return 1; }
function root_child_canvas ( _ale_arg7,  _ale_arg2,  _ale_arg3,  _ale_arg1,  _ale_arg9,  _ale_arg6,  _ale_arg0,  _ale_arg8,  _ale_arg5,  _ale_arg4) { return paintStart(_ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4, _ale_arg5 + _ale_arg6 + _ale_arg7 + _ale_arg8 + _ale_arg9); }
function flowrootc_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function flowrootc_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowrootc_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function flowrootc_childs_oldLineH ( _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg3) { return (_ale_arg0 == 1) ? _ale_arg1 : ((_ale_arg2 == 0) ? 0 : _ale_arg3); }
function flowrootc_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function flowrootc_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function flowrootc_childs_prevRelX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function flowrootc_childs_inhOffsetY () { return 0; }
function flowrootc_pt () { return 0; }
function flowrootc_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowrootc_mt () { return 0; }
function flowrootc_pb () { return 0; }
function flowrootc_offsetX () { return 0; }
function flowrootc_childs_minY ( _ale_arg0) { return _ale_arg0; }
function flowrootc_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function flowrootc_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function flowrootc_childs_canvas ( _ale_arg0) { return _ale_arg0; }
function flowrootc_render ( _ale_arg0) { return _ale_arg0; }
function flowrootc_childs_floatLstIn ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function flowrootc_childs_inhOffsetX () { return 0; }
function flowrootc_childs_posContX ( _ale_arg0,  _ale_arg3,  _ale_arg4,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2 + _ale_arg3 + _ale_arg4; }
function flowrootc_childs_posContY ( _ale_arg0,  _ale_arg4,  _ale_arg1,  _ale_arg3,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2 + _ale_arg3 + _ale_arg4; }
function flowrootc_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function flowrootc_childs_prevRelY ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function flowrootc_childs_posContWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function flowrootc_mb () { return 0; }
function flowrootc_childs_minX ( _ale_arg0) { return _ale_arg0; }
function flowrootc_childs_prevLineH ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function flowrootc_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function flowrootc_offsetY () { return 0; }
function inlineblock_floatCollision ( _ale_arg6,  _ale_arg12,  _ale_arg8,  _ale_arg7,  _ale_arg0,  _ale_arg2,  _ale_arg4,  _ale_arg3,  _ale_arg5,  _ale_arg9,  _ale_arg11,  _ale_arg1,  _ale_arg10) { return min(maxRightX(_ale_arg0, _ale_arg1, _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4), _ale_arg5) < ((_ale_arg6 == 0 ? _ale_arg7 : _ale_arg6) + _ale_arg8 + _ale_arg9 + _ale_arg10 + _ale_arg11 + _ale_arg12) ? true : false; }
function inlineblock_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function inlineblock_childs_floatLstIn ( _ale_arg10,  _ale_arg8,  _ale_arg7,  _ale_arg5,  _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg9,  _ale_arg6,  _ale_arg3,  _ale_arg2) { return (_ale_arg0 == 1) ? emptyFloatLst() : translate(_ale_arg1, _ale_arg2 + _ale_arg3 - (_ale_arg4 + _ale_arg5), (- (_ale_arg6 + _ale_arg7 + _ale_arg8 + _ale_arg9 + _ale_arg10))); }
function inlineblock_pb ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_childs_posContWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function inlineblock_childs_posContX ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function inlineblock_adjOldLineH ( _ale_arg1,  _ale_arg0) { return _ale_arg0 ? 0 : _ale_arg1; }
function inlineblock_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function inlineblock_floatLstOut ( _ale_arg0) { return _ale_arg0; }
function inlineblock_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_mt ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function inlineblock_offsetY ( _ale_arg1,  _ale_arg0,  _ale_arg4,  _ale_arg5,  _ale_arg3,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function inlineblock_computedHeight ( _ale_arg0) { return _ale_arg0; }
function inlineblock_firstChildWidth ( _ale_arg5,  _ale_arg1,  _ale_arg2,  _ale_arg0,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineblock_computedWidth ( _ale_arg3,  _ale_arg6,  _ale_arg1,  _ale_arg0,  _ale_arg7,  _ale_arg2,  _ale_arg4,  _ale_arg5,  _ale_arg8) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : min(max(_ale_arg3, _ale_arg2), _ale_arg4) - _ale_arg5 - _ale_arg6 - _ale_arg7 - _ale_arg8; }
function inlineblock_minLeft ( _ale_arg4,  _ale_arg3,  _ale_arg1,  _ale_arg2,  _ale_arg0) { return max(minLeftX(_ale_arg0, _ale_arg1, _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4), 0); }
function inlineblock_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_adjRelX ( _ale_arg6,  _ale_arg2,  _ale_arg5,  _ale_arg4,  _ale_arg7,  _ale_arg0,  _ale_arg3,  _ale_arg1) { return _ale_arg0 ? max(minLeftX(_ale_arg1, _ale_arg2, _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5), 0) : (_ale_arg6 == 0 ? _ale_arg7 : _ale_arg6); }
function inlineblock_mb ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function inlineblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function inlineblock_computedX ( _ale_arg0) { return _ale_arg0; }
function inlineblock_pt ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function inlineblock_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function inlineblock_relRightY ( _ale_arg0) { return _ale_arg0; }
function inlineblock_maxLineH ( _ale_arg0,  _ale_arg3,  _ale_arg2,  _ale_arg1) { return max(_ale_arg0, _ale_arg1 + _ale_arg2 + _ale_arg3); }
function inlineblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function inlineblock_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineblock_relRightX ( _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg1,  _ale_arg4,  _ale_arg3) { return _ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 + _ale_arg4 + _ale_arg5; }
function inlineblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function inlineblock_childs_posContY ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function inlineblock_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function inlineblock_computedY ( _ale_arg0) { return _ale_arg0; }
function inlineblock_absY ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineblock_absX ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function inlineblock_adjRelY ( _ale_arg3,  _ale_arg4,  _ale_arg5,  _ale_arg0,  _ale_arg2,  _ale_arg6,  _ale_arg1) { return _ale_arg0 ? minTopY(_ale_arg1, _ale_arg2 + _ale_arg3 + 5, _ale_arg4, _ale_arg5, _ale_arg6) : _ale_arg2; }
function inlineblock_offsetX ( _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function floatedinline_childs_posContY ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function floatedinline_relRightY ( _ale_arg0) { return _ale_arg0; }
function floatedinline_offsetY () { return 0; }
function floatedinline_floatWidth ( _ale_arg4,  _ale_arg6,  _ale_arg1,  _ale_arg0,  _ale_arg7,  _ale_arg3,  _ale_arg2,  _ale_arg5,  _ale_arg8) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : min(max(_ale_arg3, _ale_arg2), _ale_arg4) - _ale_arg5 - _ale_arg6 - _ale_arg7 - _ale_arg8; }
function floatedinline_ml () { return 0; }
function floatedinline_pb () { return 0; }
function floatedinline_floatLstOut ( _ale_arg6,  _ale_arg2,  _ale_arg3,  _ale_arg4,  _ale_arg5,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == "left" ? addLeftFloat(_ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg6) : addRightFloat(_ale_arg1, _ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5, _ale_arg6); }
function floatedinline_pt () { return 0; }
function floatedinline_childs_floatLstIn ( _ale_arg10,  _ale_arg8,  _ale_arg7,  _ale_arg5,  _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg9,  _ale_arg6,  _ale_arg3,  _ale_arg2) { return (_ale_arg0 == 1) ? emptyFloatLst() : translate(_ale_arg1, _ale_arg2 + _ale_arg3 - (_ale_arg4 + _ale_arg5), (- (_ale_arg6 + _ale_arg7 + _ale_arg8 + _ale_arg9 + _ale_arg10))); }
function floatedinline_firstChildWidth ( _ale_arg0) { return _ale_arg0; }
function floatedinline_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function floatedinline_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg2,  _ale_arg6,  _ale_arg4,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg3,  _ale_arg9,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function floatedinline_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function floatedinline_mt () { return 0; }
function floatedinline_relRightX ( _ale_arg0) { return _ale_arg0; }
function floatedinline_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function floatedinline_mr () { return 0; }
function floatedinline_offsetX () { return 0; }
function floatedinline_childs_posContX ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function floatedinline_intrinsPrefWidth () { return 0; }
function floatedinline_pl () { return 0; }
function floatedinline_mb () { return 0; }
function floatedinline_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function floatedinline_computedX ( _ale_arg0,  _ale_arg1) { return getLastX(_ale_arg0) + _ale_arg1; }
function floatedinline_computedY ( _ale_arg0,  _ale_arg1) { return getLastY(_ale_arg0) + _ale_arg1; }
function floatedinline_intrinsMinWidth () { return 0; }
function floatedinline_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function floatedinline_maxLineH ( _ale_arg0) { return _ale_arg0; }
function floatedinline_childs_posContWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function floatedinline_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function floatedinline_pr () { return 0; }
function floatedinline_adjRelY ( _ale_arg6,  _ale_arg2,  _ale_arg1,  _ale_arg5,  _ale_arg3,  _ale_arg0,  _ale_arg4) { return (_ale_arg0 + _ale_arg1 + _ale_arg2 + _ale_arg3 > maxRightX(_ale_arg4, _ale_arg0, _ale_arg0 + _ale_arg5)) ? _ale_arg0 + _ale_arg6 + 5 : _ale_arg0; }
function floatedinline_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function floatedinline_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function floatedblock_clearance () { return 0; }
function floatedblock_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function floatedblock_computedHeight () { return 0; }
function floatedblock_pb () { return 0; }
function floatedblock_floatWidth ( _ale_arg4,  _ale_arg2,  _ale_arg6,  _ale_arg1,  _ale_arg0,  _ale_arg7,  _ale_arg3,  _ale_arg5,  _ale_arg8) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : min(max(_ale_arg3, _ale_arg2), _ale_arg4) - _ale_arg5 - _ale_arg6 - _ale_arg7 - _ale_arg8; }
function floatedblock_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function floatedblock_pt () { return 0; }
function floatedblock_childs_posContX ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function floatedblock_computedWidth () { return 0; }
function floatedblock_pr () { return 0; }
function floatedblock_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function floatedblock_mr () { return 0; }
function floatedblock_mt () { return 0; }
function floatedblock_childs_absX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 + _ale_arg1 + _ale_arg2; }
function floatedblock_childs_availableWidth ( _ale_arg0) { return _ale_arg0; }
function floatedblock_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg2,  _ale_arg6,  _ale_arg4,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg3,  _ale_arg9,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function floatedblock_childs_posContWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function floatedblock_selfIntrinsWidth ( _ale_arg1,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)); }
function floatedblock_floatLstOut ( _ale_arg5,  _ale_arg2,  _ale_arg3,  _ale_arg4,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == "left" ? addLeftFloat(_ale_arg1, 0, _ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5) : addRightFloat(_ale_arg1, 0, _ale_arg2, _ale_arg3, _ale_arg4, _ale_arg5); }
function floatedblock_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function floatedblock_usedFloatLst ( _ale_arg0) { return _ale_arg0; }
function floatedblock_ml () { return 0; }
function floatedblock_intrinsPrefWidth () { return 0; }
function floatedblock_pl () { return 0; }
function floatedblock_childs_floatLstIn ( _ale_arg10,  _ale_arg8,  _ale_arg7,  _ale_arg5,  _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg9,  _ale_arg6,  _ale_arg3,  _ale_arg2) { return (_ale_arg0 == 1) ? emptyFloatLst() : translate(_ale_arg1, _ale_arg2 + _ale_arg3 - (_ale_arg4 + _ale_arg5), (- (_ale_arg6 + _ale_arg7 + _ale_arg8 + _ale_arg9 + _ale_arg10))); }
function floatedblock_mb () { return 0; }
function floatedblock_childs_posContY ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function floatedblock_intrinsMinWidth () { return 0; }
function floatedblock_computedY ( _ale_arg0,  _ale_arg1) { return getLastY(_ale_arg0) + _ale_arg1; }
function floatedblock_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function floatedblock_computedX ( _ale_arg0,  _ale_arg1) { return getLastX(_ale_arg0) + _ale_arg1; }
function blockleaf_mr () { return 0; }
function blockleaf_mb () { return 0; }
function blockleaf_usedFloatLst ( _ale_arg1,  _ale_arg0) { return translate(_ale_arg0, 0, (- _ale_arg1)); }
function blockleaf_intrinsMinWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg1, _ale_arg2, 0)); }
function blockleaf_pr () { return 0; }
function blockleaf_ml () { return 0; }
function blockleaf_floatLstOut ( _ale_arg0) { return _ale_arg0; }
function blockleaf_clearance ( _ale_arg0,  _ale_arg1) { return _ale_arg0 == "left" ? getLeftOverhang(_ale_arg1) : (_ale_arg0 == "right" ? getRightOverhang(_ale_arg1) : (_ale_arg0 == "both" ? max(getLeftOverhang(_ale_arg1), getRightOverhang(_ale_arg1)) : 0)); }
function blockleaf_computedY ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg3,  _ale_arg0,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function blockleaf_intrinsPrefWidth ( _ale_arg0) { return _ale_arg0; }
function blockleaf_intrinsHeight ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg1, _ale_arg2, 0)); }
function blockleaf_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function blockleaf_computedWidth ( _ale_arg0) { return _ale_arg0; }
function blockleaf_render ( _ale_arg5,  _ale_arg14,  _ale_arg0,  _ale_arg6,  _ale_arg9,  _ale_arg13,  _ale_arg11,  _ale_arg7,  _ale_arg10,  _ale_arg1,  _ale_arg4,  _ale_arg2,  _ale_arg3,  _ale_arg8,  _ale_arg12) { return _ale_arg0 + (validColor(_ale_arg1) ? paintRect(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg6 + _ale_arg7 + _ale_arg8, _ale_arg9 + _ale_arg10 + _ale_arg11, getColor(_ale_arg1)) : 0) + (_ale_arg12 != "solid" ? 0 : paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5, _ale_arg2 + _ale_arg3 + _ale_arg7 + _ale_arg8 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3 + _ale_arg8 + _ale_arg7 + _ale_arg6, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg13, getColor(_ale_arg14)) + paintLine(_ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5 + _ale_arg10 + _ale_arg11 + _ale_arg9, _ale_arg2 + _ale_arg3, _ale_arg4 + _ale_arg5, _ale_arg13, getColor(_ale_arg14))); }
function blockleaf_pt () { return 0; }
function blockleaf_computedHeight ( _ale_arg0) { return _ale_arg0; }
function blockleaf_pb () { return 0; }
function blockleaf_mt () { return 0; }
function blockleaf_pl () { return 0; }
function blockleaf_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function blockleaf_computedX ( _ale_arg1,  _ale_arg5,  _ale_arg4,  _ale_arg2,  _ale_arg0,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalinline_childs_posContX ( _ale_arg0,  _ale_arg3,  _ale_arg4,  _ale_arg1,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2 + _ale_arg3 + _ale_arg4; }
function normalinline_childs_prevRelY ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function normalinline_pr ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalinline_render ( _ale_arg0) { return _ale_arg0; }
function normalinline_offsetX ( _ale_arg1,  _ale_arg4,  _ale_arg0,  _ale_arg5,  _ale_arg2,  _ale_arg3) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalinline_sumMarginsPadding ( _ale_arg0,  _ale_arg2,  _ale_arg1,  _ale_arg3,  _ale_arg4) { return (getTag(_ale_arg0) == CONST_AUTO() ? 0 : getValue(_ale_arg0, _ale_arg1, 0)) + (getTag(_ale_arg2) == CONST_AUTO() ? 0 : getValue(_ale_arg2, _ale_arg1, 0)) + (getTag(_ale_arg3) == CONST_AUTO() ? 0 : getValue(_ale_arg3, _ale_arg1, 0)) + (getTag(_ale_arg4) == CONST_AUTO() ? 0 : getValue(_ale_arg4, _ale_arg1, 0)); }
function normalinline_pl ( _ale_arg1,  _ale_arg2,  _ale_arg0) { return getValue(_ale_arg0, _ale_arg1, _ale_arg2); }
function normalinline_usedColor ( _ale_arg0,  _ale_arg1) { return validColor(_ale_arg0) ? getColor(_ale_arg0) : _ale_arg1; }
function normalinline_childs_inhOffsetY ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_prevLineH ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function normalinline_childs_inhOffsetX ( _ale_arg0) { return _ale_arg0; }
function normalinline_mb () { return 0; }
function normalinline_ml ( _ale_arg1,  _ale_arg0,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalinline_childs_maxWidth ( _ale_arg0) { return _ale_arg0; }
function normalinline_mr ( _ale_arg0,  _ale_arg1,  _ale_arg2) { return getTag(_ale_arg0) != CONST_AUTO() ? getValue(_ale_arg0, _ale_arg1, _ale_arg2) : 0; }
function normalinline_usedFontSize ( _ale_arg1,  _ale_arg0) { return validFontSize(_ale_arg0) ? getFontSize(_ale_arg0, _ale_arg1) : _ale_arg1; }
function normalinline_pt () { return 0; }
function normalinline_pb () { return 0; }
function normalinline_childs_oldLineH ( _ale_arg2,  _ale_arg1,  _ale_arg0,  _ale_arg3) { return (_ale_arg0 == 1) ? _ale_arg1 : ((_ale_arg2 == 0) ? 0 : _ale_arg3); }
function normalinline_childs_minX ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_floatLstIn ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function normalinline_childs_inhColor ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_posContWidth ( _ale_arg0,  _ale_arg2,  _ale_arg1) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2; }
function normalinline_childs_prevRelX ( _ale_arg2,  _ale_arg0,  _ale_arg1) { return _ale_arg0 == 1 ? _ale_arg1 : _ale_arg2; }
function normalinline_childs_inhFontSize ( _ale_arg0) { return _ale_arg0; }
function normalinline_mt () { return 0; }
function normalinline_offsetY ( _ale_arg1,  _ale_arg0,  _ale_arg4,  _ale_arg5,  _ale_arg3,  _ale_arg2) { return _ale_arg0 + (_ale_arg1 == "relative" ? (getTag(_ale_arg2) == CONST_AUTO() ? (getTag(_ale_arg3) == CONST_AUTO() ? 0 : (- getValue(_ale_arg3, _ale_arg4, _ale_arg5))) : getValue(_ale_arg2, _ale_arg4, _ale_arg5)) : 0); }
function normalinline_childs_minY ( _ale_arg0) { return _ale_arg0; }
function normalinline_childs_posContY ( _ale_arg0,  _ale_arg4,  _ale_arg1,  _ale_arg3,  _ale_arg2) { return ((_ale_arg0 == "static" || _ale_arg0 == "\"static\"")) ? _ale_arg1 : _ale_arg2 + _ale_arg3 + _ale_arg4; }
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
    default: throw ("unknown pass " + pass);
  }
}
///// pass /////
function visit_inlineleaf_0(node) {
  logger.log("  visit  InlineLeaf (id: " + node.id + "): " + 0);
  setAttribSafe(node, "mb", inlineleaf_mb());
  logger.log("    inlineleaf_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "ml", inlineleaf_ml());
  logger.log("    inlineleaf_ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(node, "mr", inlineleaf_mr());
  logger.log("    inlineleaf_mr: " + getAttribSafe(node, "mr"));
  setAttribSafe(node, "mt", inlineleaf_mt());
  logger.log("    inlineleaf_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "pb", inlineleaf_pb());
  logger.log("    inlineleaf_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pl", inlineleaf_pl());
  logger.log("    inlineleaf_pl: " + getAttribSafe(node, "pl"));
  setAttribSafe(node, "pr", inlineleaf_pr());
  logger.log("    inlineleaf_pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "pt", inlineleaf_pt());
  logger.log("    inlineleaf_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", inlineleaf_usedColor(getInputAttribSafe(node, "color", '"inherit"'), getAttribSafe(node, "inhcolor")));
  logger.log("    inlineleaf_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"inherit"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", inlineleaf_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    inlineleaf_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "intrinsheight", inlineleaf_intrinsHeight(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    inlineleaf_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "intrinsminwidth", inlineleaf_intrinsMinWidth(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    inlineleaf_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "computedheight", inlineleaf_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    inlineleaf_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "intrinsprefwidth", inlineleaf_intrinsPrefWidth(getAttribSafe(node, "intrinsminwidth")));
  logger.log("    inlineleaf_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  setAttribSafe(node, "computedwidth", inlineleaf_computedWidth(getAttribSafe(node, "intrinsprefwidth")));
  logger.log("    inlineleaf_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", false);
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
function visit_root_0(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 0);
  setAttribSafe(getChildByRefName(node,"child"), "availablewidth", root_child_availableWidth());
  logger.log("    root_child_availableWidth: " + getAttribSafe(getChildByRefName(node,"child"), "availablewidth"));
  setAttribSafe(getChildByRefName(node,"child"), "childnum", root_child_childNum());
  logger.log("    root_child_childNum: " + getAttribSafe(getChildByRefName(node,"child"), "childnum"));
  setAttribSafe(getChildByRefName(node,"child"), "floatlstin", root_child_floatLstIn());
  logger.log("    root_child_floatLstIn: " + getAttribSafe(getChildByRefName(node,"child"), "floatlstin"));
  setAttribSafe(getChildByRefName(node,"child"), "inhcolor", root_child_inhColor());
  logger.log("    root_child_inhColor: " + getAttribSafe(getChildByRefName(node,"child"), "inhcolor"));
  setAttribSafe(getChildByRefName(node,"child"), "inhfontsize", root_child_inhFontSize());
  logger.log("    root_child_inhFontSize: " + getAttribSafe(getChildByRefName(node,"child"), "inhfontsize"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", false);
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
    var children = getChildren(node, "childs", false);
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
    var children = getChildren(node, "childs", false);
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
function visit_floatedinline_0(node) {
  logger.log("  visit  FloatedInline (id: " + node.id + "): " + 0);
  setAttribSafe(node, "intrinsminwidth", floatedinline_intrinsMinWidth());
  logger.log("    floatedinline_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  setAttribSafe(node, "intrinsprefwidth", floatedinline_intrinsPrefWidth());
  logger.log("    floatedinline_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  setAttribSafe(node, "mb", floatedinline_mb());
  logger.log("    floatedinline_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "ml", floatedinline_ml());
  logger.log("    floatedinline_ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(node, "mr", floatedinline_mr());
  logger.log("    floatedinline_mr: " + getAttribSafe(node, "mr"));
  setAttribSafe(node, "mt", floatedinline_mt());
  logger.log("    floatedinline_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "offsetx", floatedinline_offsetX());
  logger.log("    floatedinline_offsetX: " + getAttribSafe(node, "offsetx"));
  setAttribSafe(node, "offsety", floatedinline_offsetY());
  logger.log("    floatedinline_offsetY: " + getAttribSafe(node, "offsety"));
  setAttribSafe(node, "pb", floatedinline_pb());
  logger.log("    floatedinline_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pl", floatedinline_pl());
  logger.log("    floatedinline_pl: " + getAttribSafe(node, "pl"));
  setAttribSafe(node, "pr", floatedinline_pr());
  logger.log("    floatedinline_pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "pt", floatedinline_pt());
  logger.log("    floatedinline_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", floatedinline_usedColor(getInputAttribSafe(node, "color", '"inherit"'), getAttribSafe(node, "inhcolor")));
  logger.log("    floatedinline_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputAttribSafe(node, "color", '"inherit"'));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", floatedinline_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    floatedinline_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "selfintrinswidth", floatedinline_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    floatedinline_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", floatedinline_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    floatedinline_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", false);
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
function visit_floatedblock_0(node) {
  logger.log("  visit  FloatedBlock (id: " + node.id + "): " + 0);
  setAttribSafe(node, "clearance", floatedblock_clearance());
  logger.log("    floatedblock_clearance: " + getAttribSafe(node, "clearance"));
  setAttribSafe(node, "computedheight", floatedblock_computedHeight());
  logger.log("    floatedblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  setAttribSafe(node, "computedwidth", floatedblock_computedWidth());
  logger.log("    floatedblock_computedWidth: " + getAttribSafe(node, "computedwidth"));
  setAttribSafe(node, "intrinsminwidth", floatedblock_intrinsMinWidth());
  logger.log("    floatedblock_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  setAttribSafe(node, "intrinsprefwidth", floatedblock_intrinsPrefWidth());
  logger.log("    floatedblock_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  setAttribSafe(node, "mb", floatedblock_mb());
  logger.log("    floatedblock_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "ml", floatedblock_ml());
  logger.log("    floatedblock_ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(node, "mr", floatedblock_mr());
  logger.log("    floatedblock_mr: " + getAttribSafe(node, "mr"));
  setAttribSafe(node, "mt", floatedblock_mt());
  logger.log("    floatedblock_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "pb", floatedblock_pb());
  logger.log("    floatedblock_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pl", floatedblock_pl());
  logger.log("    floatedblock_pl: " + getAttribSafe(node, "pl"));
  setAttribSafe(node, "pr", floatedblock_pr());
  logger.log("    floatedblock_pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "pt", floatedblock_pt());
  logger.log("    floatedblock_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", floatedblock_usedColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    floatedblock_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", floatedblock_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    floatedblock_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "selfintrinswidth", floatedblock_selfIntrinsWidth(getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    floatedblock_selfIntrinsWidth: " + getAttribSafe(node, "selfintrinswidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "summarginspadding", floatedblock_sumMarginsPadding(getInputAttribSafe(node, "marginleft", '{302,0}'), getInputAttribSafe(node, "marginright", '{302,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "paddingleft", '{302,0}'), getInputAttribSafe(node, "paddingright", '{302,0}')));
  logger.log("    floatedblock_sumMarginsPadding: " + getAttribSafe(node, "summarginspadding"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", false);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "childnum", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_childnum_init") : ("childnum")) + 1));
      logger.log("         step childs@childNum: " + getAttribSafe(child, "childnum"));
      setAttribSafe(node, "numchilds", (getAttribSafe(node, "numchilds") + 1));
      logger.log("         step numChilds: " + getAttribSafe(node, "numchilds"));
    }
  })();


(function () {
    var children = getChildren(node, "childs", false);
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
function visit_blockleaf_0(node) {
  logger.log("  visit  BlockLeaf (id: " + node.id + "): " + 0);
  setAttribSafe(node, "mb", blockleaf_mb());
  logger.log("    blockleaf_mb: " + getAttribSafe(node, "mb"));
  setAttribSafe(node, "ml", blockleaf_ml());
  logger.log("    blockleaf_ml: " + getAttribSafe(node, "ml"));
  setAttribSafe(node, "mr", blockleaf_mr());
  logger.log("    blockleaf_mr: " + getAttribSafe(node, "mr"));
  setAttribSafe(node, "mt", blockleaf_mt());
  logger.log("    blockleaf_mt: " + getAttribSafe(node, "mt"));
  setAttribSafe(node, "pb", blockleaf_pb());
  logger.log("    blockleaf_pb: " + getAttribSafe(node, "pb"));
  setAttribSafe(node, "pl", blockleaf_pl());
  logger.log("    blockleaf_pl: " + getAttribSafe(node, "pl"));
  setAttribSafe(node, "pr", blockleaf_pr());
  logger.log("    blockleaf_pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "pt", blockleaf_pt());
  logger.log("    blockleaf_pt: " + getAttribSafe(node, "pt"));
  setAttribSafe(node, "usedcolor", blockleaf_usedColor(getInputMaybeAttribSafe(node, "color"), getAttribSafe(node, "inhcolor")));
  logger.log("    blockleaf_usedColor: " + getAttribSafe(node, "usedcolor"));
  logger.log("        color: " + getInputMaybeAttribSafe(node, "color"));
  logger.log("        inhColor: " + getAttribSafe(node, "inhcolor"));
  setAttribSafe(node, "usedfontsize", blockleaf_usedFontSize(getAttribSafe(node, "inhfontsize"), getInputAttribSafe(node, "intrinsfontsize", '{2,0}')));
  logger.log("    blockleaf_usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhFontSize: " + getAttribSafe(node, "inhfontsize"));
  logger.log("        intrinsFontSize: " + getInputAttribSafe(node, "intrinsfontsize", '{2,0}'));
  setAttribSafe(node, "intrinsheight", blockleaf_intrinsHeight(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    blockleaf_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "intrinsminwidth", blockleaf_intrinsMinWidth(getInputAttribSafe(node, "height", '{1,0}'), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}')));
  logger.log("    blockleaf_intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  logger.log("        height: " + getInputAttribSafe(node, "height", '{1,0}'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  setAttribSafe(node, "computedheight", blockleaf_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    blockleaf_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "intrinsprefwidth", blockleaf_intrinsPrefWidth(getAttribSafe(node, "intrinsminwidth")));
  logger.log("    blockleaf_intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  logger.log("        intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
  setAttribSafe(node, "computedwidth", blockleaf_computedWidth(getAttribSafe(node, "intrinsprefwidth")));
  logger.log("    blockleaf_computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
  return true;
}
///// pass /////
function visit_inlineleaf_1(node) {
  logger.log("  visit  InlineLeaf (id: " + node.id + "): " + 1);
  return true;
}
function visit_normalblock_1(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", false);
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
    var children = getChildren(node, "childs", false);
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
function visit_flowblock_1(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 1);
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
function visit_root_1(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 1);
  return true;
}
function visit_inlineblock_1(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", false);
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
    var children = getChildren(node, "childs", false);
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
function visit_flowrootc_1(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", false);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_floatedinline_1(node) {
  logger.log("  visit  FloatedInline (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "floatminwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "floatminwidth", getAttribSafe(node, "floatminwidth_init"));
  logger.log("      init floatMinWidth: " + getAttribSafe(node, "floatminwidth_init"));
  logger.log("    last init floatminwidth: " + getAttribSafe(node, "floatminwidth"));
    setAttribSafe(node, "floatprefwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "floatprefwidth", getAttribSafe(node, "floatprefwidth_init"));
  logger.log("      init floatPrefWidth: " + getAttribSafe(node, "floatprefwidth_init"));
  logger.log("    last init floatprefwidth: " + getAttribSafe(node, "floatprefwidth"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "floatminwidth", (max(getAttribSafe(node, "floatminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step floatMinWidth: " + getAttribSafe(node, "floatminwidth"));
      setAttribSafe(node, "floatprefwidth", (getAttribSafe(node, "selfintrinswidth") == 0 ? max(getAttribSafe(node, "floatprefwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "floatprefwidth") ));
      logger.log("         step floatPrefWidth: " + getAttribSafe(node, "floatprefwidth"));
    }
  })();

  return true;
}
function visit_floatedblock_1(node) {
  logger.log("  visit  FloatedBlock (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "floatminwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "floatminwidth", getAttribSafe(node, "floatminwidth_init"));
  logger.log("      init floatMinWidth: " + getAttribSafe(node, "floatminwidth_init"));
  logger.log("    last init floatminwidth: " + getAttribSafe(node, "floatminwidth"));
    setAttribSafe(node, "floatprefwidth_init", (getAttribSafe(node, "selfintrinswidth") + getAttribSafe(node, "summarginspadding") ));
  setAttribSafe(node, "floatprefwidth", getAttribSafe(node, "floatprefwidth_init"));
  logger.log("      init floatPrefWidth: " + getAttribSafe(node, "floatprefwidth_init"));
  logger.log("    last init floatprefwidth: " + getAttribSafe(node, "floatprefwidth"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "floatminwidth", (max(getAttribSafe(node, "floatminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step floatMinWidth: " + getAttribSafe(node, "floatminwidth"));
      setAttribSafe(node, "floatprefwidth", (getAttribSafe(node, "selfintrinswidth") == 0 ? max(getAttribSafe(node, "floatprefwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsprefwidth")) : getAttribSafe(node, "floatprefwidth") ));
      logger.log("         step floatPrefWidth: " + getAttribSafe(node, "floatprefwidth"));
    }
  })();

  return true;
}
function visit_normalinline_1(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 1);

(function () {
    var children = getChildren(node, "childs", false);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsminwidth", (max(getAttribSafe(node, "intrinsminwidth"), getAttribSafe(node, "summarginspadding") + getAttribSafe(child, "intrinsminwidth"))));
      logger.log("         step intrinsMinWidth: " + getAttribSafe(node, "intrinsminwidth"));
      setAttribSafe(node, "intrinsprefwidth", (getAttribSafe(node, "intrinsprefwidth") + getAttribSafe(child, "intrinsprefwidth") + 5));
      logger.log("         step intrinsPrefWidth: " + getAttribSafe(node, "intrinsprefwidth"));
    }
  })();

  return true;
}
function visit_blockleaf_1(node) {
  logger.log("  visit  BlockLeaf (id: " + node.id + "): " + 1);
  return true;
}
///// pass /////
function visit_inlineleaf_2(node) {
  logger.log("  visit  InlineLeaf (id: " + node.id + "): " + 2);
  setAttribSafe(node, "firstchildwidth", inlineleaf_firstChildWidth(getAttribSafe(node, "mr"), getAttribSafe(node, "rightpadding"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineleaf_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        rightPadding: " + getAttribSafe(node, "rightpadding"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "offsetx", inlineleaf_offsetX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "inhoffsetx"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "left", '{1,0}'), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    inlineleaf_offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        inhOffsetX: " + getAttribSafe(node, "inhoffsetx"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "offsety", inlineleaf_offsetY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "inhoffsety"), getAttribSafe(node, "usedfontsize"), getAttribSafe(node, "maxwidth"), getInputAttribSafe(node, "bottom", '{1,0}'), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    inlineleaf_offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        inhOffsetY: " + getAttribSafe(node, "inhoffsety"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  return true;
}
function visit_normalblock_2(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 2);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
      setAttribSafe(child, "poscontwidth", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontwidth") : getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@posContWidth: " + getAttribSafe(child, "poscontwidth"));
    }
  })();

  return true;
}
function visit_flowblock_2(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 2);
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
  setAttribSafe(getChildByRefName(node,"child"), "poscontwidth", flowblock_child_posContWidth(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "poscontwidth")));
  logger.log("    flowblock_child_posContWidth: " + getAttribSafe(getChildByRefName(node,"child"), "poscontwidth"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        posContWidth: " + getAttribSafe(node, "poscontwidth"));
  return true;
}
function visit_root_2(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 2);
  return true;
}
function visit_inlineblock_2(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 2);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
      setAttribSafe(child, "poscontwidth", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontwidth") : getAttribSafe(node, "computedwidth") ));
      logger.log("         step childs@posContWidth: " + getAttribSafe(child, "poscontwidth"));
    }
  })();

  return true;
}
function visit_flowrootc_2(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 2);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
      setAttribSafe(child, "poscontwidth", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontwidth") : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step childs@posContWidth: " + getAttribSafe(child, "poscontwidth"));
    }
  })();


  setAttribSafe(node, "childs_rightpadding_init", (0));
  setAttribSafe(node, "childs_rightpadding_last", getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("      init childs@rightPadding: " + getAttribSafe(node, "childs_rightpadding_init"));
  logger.log("    last init childs_rightpadding_last: " + getAttribSafe(node, "childs_rightpadding_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? getAttribSafe(node, "rightpadding") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

  return true;
}
function visit_floatedinline_2(node) {
  logger.log("  visit  FloatedInline (id: " + node.id + "): " + 2);
  setAttribSafe(node, "floatwidth", floatedinline_floatWidth(getAttribSafe(node, "floatprefwidth"), getAttribSafe(node, "mr"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "floatminwidth"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    floatedinline_floatWidth: " + getAttribSafe(node, "floatwidth"));
  logger.log("        floatPrefWidth: " + getAttribSafe(node, "floatprefwidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        floatMinWidth: " + getAttribSafe(node, "floatminwidth"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "firstchildwidth", floatedinline_firstChildWidth(getAttribSafe(node, "floatwidth")));
  logger.log("    floatedinline_firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
  logger.log("        floatWidth: " + getAttribSafe(node, "floatwidth"));

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "floatwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
      setAttribSafe(child, "poscontwidth", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontwidth") : getAttribSafe(node, "floatwidth") ));
      logger.log("         step childs@posContWidth: " + getAttribSafe(child, "poscontwidth"));
    }
  })();

  return true;
}
function visit_floatedblock_2(node) {
  logger.log("  visit  FloatedBlock (id: " + node.id + "): " + 2);
  setAttribSafe(node, "floatwidth", floatedblock_floatWidth(getAttribSafe(node, "floatprefwidth"), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "mr"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "width", '{1,0}'), getAttribSafe(node, "pl"), getAttribSafe(node, "floatminwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    floatedblock_floatWidth: " + getAttribSafe(node, "floatwidth"));
  logger.log("        floatPrefWidth: " + getAttribSafe(node, "floatprefwidth"));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        width: " + getInputAttribSafe(node, "width", '{1,0}'));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        floatMinWidth: " + getAttribSafe(node, "floatminwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "availablewidth", (getAttribSafe(node, "floatwidth") ));
      logger.log("         step childs@availableWidth: " + getAttribSafe(child, "availablewidth"));
      setAttribSafe(child, "poscontwidth", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontwidth") : getAttribSafe(node, "floatwidth") ));
      logger.log("         step childs@posContWidth: " + getAttribSafe(child, "poscontwidth"));
    }
  })();

  return true;
}
function visit_normalinline_2(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 2);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "maxwidth", (getAttribSafe(node, "maxwidth") ));
      logger.log("         step childs@maxWidth: " + getAttribSafe(child, "maxwidth"));
      setAttribSafe(child, "poscontwidth", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontwidth") : getAttribSafe(node, "intrinsprefwidth") ));
      logger.log("         step childs@posContWidth: " + getAttribSafe(child, "poscontwidth"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "rightpadding", ((getAttribSafe(child, "childnum") == getAttribSafe(node, "numchilds")) ? getAttribSafe(node, "rightpadding") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") : 0));
      logger.log("         step childs@rightPadding: " + getAttribSafe(child, "rightpadding"));
    }
  })();

  return true;
}
function visit_blockleaf_2(node) {
  logger.log("  visit  BlockLeaf (id: " + node.id + "): " + 2);
  return true;
}
///// pass /////
function visit_inlineleaf_3(node) {
  logger.log("  visit  InlineLeaf (id: " + node.id + "): " + 3);
  return true;
}
function visit_normalblock_3(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_flowblock_3(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 3);
  return true;
}
function visit_root_3(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 3);
  return true;
}
function visit_inlineblock_3(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_flowrootc_3(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "firstchildwidth_init", (getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(child, "firstchildwidth") + getAttribSafe(node, "ml") + getAttribSafe(node, "mr") + getAttribSafe(node, "pl") + getAttribSafe(node, "pr") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
    }
  })();

  return true;
}
function visit_floatedinline_3(node) {
  logger.log("  visit  FloatedInline (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_floatedblock_3(node) {
  logger.log("  visit  FloatedBlock (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();

  return true;
}
function visit_normalinline_3(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 3);

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
    }
  })();


  setAttribSafe(node, "firstchildwidth_init", (getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
  setAttribSafe(node, "firstchildwidth", getAttribSafe(node, "firstchildwidth_init"));
  logger.log("      init firstChildWidth: " + getAttribSafe(node, "firstchildwidth_init"));
  logger.log("    last init firstchildwidth: " + getAttribSafe(node, "firstchildwidth"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "firstchildwidth", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(child, "firstchildwidth") + getAttribSafe(node, "ml") + getAttribSafe(node, "mr") + getAttribSafe(node, "pl") + getAttribSafe(node, "pr") : getAttribSafe(node, "firstchildwidth") ));
      logger.log("         step firstChildWidth: " + getAttribSafe(node, "firstchildwidth"));
    }
  })();

  return true;
}
function visit_blockleaf_3(node) {
  logger.log("  visit  BlockLeaf (id: " + node.id + "): " + 3);
  return true;
}
///// pass /////
function visit_inlineleaf_4(node) {
  logger.log("  visit  InlineLeaf (id: " + node.id + "): " + 4);
  setAttribSafe(node, "floatlstout", inlineleaf_floatLstOut(getAttribSafe(node, "floatlstin")));
  logger.log("    inlineleaf_floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "minleft", inlineleaf_minLeft(getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "floatlstin")));
  logger.log("    inlineleaf_minLeft: " + getAttribSafe(node, "minleft"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "floatcollision", inlineleaf_floatCollision(getAttribSafe(node, "relx"), getAttribSafe(node, "mr"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "minleft"), getAttribSafe(node, "floatlstin"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "pl"), getAttribSafe(node, "ml"), getAttribSafe(node, "rely"), getAttribSafe(node, "pr")));
  logger.log("    inlineleaf_floatCollision: " + getAttribSafe(node, "floatcollision"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        minLeft: " + getAttribSafe(node, "minleft"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "adjoldlineh", inlineleaf_adjOldLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "floatcollision")));
  logger.log("    inlineleaf_adjOldLineH: " + getAttribSafe(node, "adjoldlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        floatCollision: " + getAttribSafe(node, "floatcollision"));
  setAttribSafe(node, "adjrely", inlineleaf_adjRelY(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "floatcollision"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "floatlstin")));
  logger.log("    inlineleaf_adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        floatCollision: " + getAttribSafe(node, "floatcollision"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "adjrelx", inlineleaf_adjRelX(getAttribSafe(node, "relx"), getAttribSafe(node, "adjrely"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "minleft"), getAttribSafe(node, "floatcollision"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "floatlstin")));
  logger.log("    inlineleaf_adjRelX: " + getAttribSafe(node, "adjrelx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        minLeft: " + getAttribSafe(node, "minleft"));
  logger.log("        floatCollision: " + getAttribSafe(node, "floatcollision"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "maxlineh", inlineleaf_maxLineH(getAttribSafe(node, "adjoldlineh"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "computedheight")));
  logger.log("    inlineleaf_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        adjOldLineH: " + getAttribSafe(node, "adjoldlineh"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  setAttribSafe(node, "relrighty", inlineleaf_relRightY(getAttribSafe(node, "adjrely")));
  logger.log("    inlineleaf_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        adjRelY: " + getAttribSafe(node, "adjrely"));
  setAttribSafe(node, "relrightx", inlineleaf_relRightX(getAttribSafe(node, "adjrelx"), getAttribSafe(node, "mr"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineleaf_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        adjRelX: " + getAttribSafe(node, "adjrelx"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  return true;
}
function visit_normalblock_4(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "clearance", normalblock_clearance(getInputAttribSafe(node, "clear", '"none"'), getAttribSafe(node, "floatlstin")));
  logger.log("    normalblock_clearance: " + getAttribSafe(node, "clearance"));
  logger.log("        clear: " + getInputAttribSafe(node, "clear", '"none"'));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "usedfloatlst", normalblock_usedFloatLst(getAttribSafe(node, "clearance"), getAttribSafe(node, "floatlstin")));
  logger.log("    normalblock_usedFloatLst: " + getAttribSafe(node, "usedfloatlst"));
  logger.log("        clearance: " + getAttribSafe(node, "clearance"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "floatlstin", ((getAttribSafe(child, "childnum") == 1) ? translate(getAttribSafe(node, "usedfloatlst"), (- (getAttribSafe(child, "ml") + getAttribSafe(child, "pl"))), (- (getAttribSafe(child, "mt") + getAttribSafe(child, "pt")))) : translate(getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_floatlstout_init") : ("floatlstout")), getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_ml_init") : ("ml")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pl_init") : ("pl")) - (getAttribSafe(child, "ml") + getAttribSafe(child, "pl")), (- (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb")) + getAttribSafe(child, "mt") + getAttribSafe(child, "pt"))))));
      logger.log("         step childs@floatLstIn: " + getAttribSafe(child, "floatlstin"));
      visit_4(child, false, node); //recur
      logger.log("  resume loop visit NormalBlock: " + 4);
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") + getAttribSafe(child, "clearance") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", normalblock_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    normalblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));

  setAttribSafe(node, "floatlstout_init", (getAttribSafe(node, "floatlstin") ));
  setAttribSafe(node, "floatlstout", getAttribSafe(node, "floatlstout_init"));
  logger.log("      init floatLstOut: " + getAttribSafe(node, "floatlstout_init"));
  logger.log("    last init floatlstout: " + getAttribSafe(node, "floatlstout"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "floatlstout", (translate(getAttribSafe(child, "floatlstout"), getAttribSafe(child, "ml") + getAttribSafe(child, "pl"), getAttribSafe(node, "computedheight") - (getAttribSafe(child, "computedheight") + getAttribSafe(child, "pb") + getAttribSafe(child, "mb")))));
      logger.log("         step floatLstOut: " + getAttribSafe(node, "floatlstout"));
    }
  })();

  return true;
}
function visit_flowblock_4(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "clearance", flowblock_clearance(getInputAttribSafe(node, "clear", '"none"'), getAttribSafe(node, "floatlstin")));
  logger.log("    flowblock_clearance: " + getAttribSafe(node, "clearance"));
  logger.log("        clear: " + getInputAttribSafe(node, "clear", '"none"'));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "usedfloatlst", flowblock_usedFloatLst(getAttribSafe(node, "clearance"), getAttribSafe(node, "floatlstin")));
  logger.log("    flowblock_usedFloatLst: " + getAttribSafe(node, "usedfloatlst"));
  logger.log("        clearance: " + getAttribSafe(node, "clearance"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(getChildByRefName(node,"child"), "floatlstin", flowblock_child_floatLstIn(getAttribSafe(getChildByRefName(node,"child"), "pl"), getAttribSafe(getChildByRefName(node,"child"), "mt"), getAttribSafe(node, "usedfloatlst"), getAttribSafe(getChildByRefName(node,"child"), "pt"), getAttribSafe(getChildByRefName(node,"child"), "ml")));
  logger.log("    flowblock_child_floatLstIn: " + getAttribSafe(getChildByRefName(node,"child"), "floatlstin"));
  logger.log("        child@pl: " + getAttribSafe(getChildByRefName(node,"child"), "pl"));
  logger.log("        child@mt: " + getAttribSafe(getChildByRefName(node,"child"), "mt"));
  logger.log("        usedFloatLst: " + getAttribSafe(node, "usedfloatlst"));
  logger.log("        child@pt: " + getAttribSafe(getChildByRefName(node,"child"), "pt"));
  logger.log("        child@ml: " + getAttribSafe(getChildByRefName(node,"child"), "ml"));
  visit_4(getChildByRefName(node, "child"), false, node); //recur
  logger.log("  resume visit FlowBlock: " + 4);
  setAttribSafe(node, "floatlstout", flowblock_floatLstOut(getAttribSafe(getChildByRefName(node,"child"), "pl"), getAttribSafe(getChildByRefName(node,"child"), "mt"), getAttribSafe(getChildByRefName(node,"child"), "floatlstout"), getAttribSafe(getChildByRefName(node,"child"), "pt"), getAttribSafe(getChildByRefName(node,"child"), "ml")));
  logger.log("    flowblock_floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        child@pl: " + getAttribSafe(getChildByRefName(node,"child"), "pl"));
  logger.log("        child@mt: " + getAttribSafe(getChildByRefName(node,"child"), "mt"));
  logger.log("        child@floatLstOut: " + getAttribSafe(getChildByRefName(node,"child"), "floatlstout"));
  logger.log("        child@pt: " + getAttribSafe(getChildByRefName(node,"child"), "pt"));
  logger.log("        child@ml: " + getAttribSafe(getChildByRefName(node,"child"), "ml"));
  setAttribSafe(node, "intrinsheight", flowblock_intrinsHeight(getAttribSafe(getChildByRefName(node,"child"), "mb"), getAttribSafe(getChildByRefName(node,"child"), "pb"), getAttribSafe(getChildByRefName(node,"child"), "mt"), getAttribSafe(getChildByRefName(node,"child"), "rely"), getAttribSafe(getChildByRefName(node,"child"), "relrighty"), getAttribSafe(getChildByRefName(node,"child"), "pt"), getAttribSafe(getChildByRefName(node,"child"), "maxlineh")));
  logger.log("    flowblock_intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        child@mb: " + getAttribSafe(getChildByRefName(node,"child"), "mb"));
  logger.log("        child@pb: " + getAttribSafe(getChildByRefName(node,"child"), "pb"));
  logger.log("        child@mt: " + getAttribSafe(getChildByRefName(node,"child"), "mt"));
  logger.log("        child@relY: " + getAttribSafe(getChildByRefName(node,"child"), "rely"));
  logger.log("        child@relRightY: " + getAttribSafe(getChildByRefName(node,"child"), "relrighty"));
  logger.log("        child@pt: " + getAttribSafe(getChildByRefName(node,"child"), "pt"));
  logger.log("        child@maxLineH: " + getAttribSafe(getChildByRefName(node,"child"), "maxlineh"));
  setAttribSafe(node, "computedheight", flowblock_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    flowblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  return true;
}
function visit_root_4(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 4);
  visit_4(getChildByRefName(node, "child"), false, node); //recur
  logger.log("  resume visit Root: " + 4);
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
function visit_inlineblock_4(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "floatlstout", inlineblock_floatLstOut(getAttribSafe(node, "floatlstin")));
  logger.log("    inlineblock_floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "floatlstin", ((getAttribSafe(child, "childnum") == 1) ? emptyFloatLst() : translate(getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_floatlstout_init") : ("floatlstout")), getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_ml_init") : ("ml")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pl_init") : ("pl")) - (getAttribSafe(child, "ml") + getAttribSafe(child, "pl")), (- (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb")) + getAttribSafe(child, "mt") + getAttribSafe(child, "pt"))))));
      logger.log("         step childs@floatLstIn: " + getAttribSafe(child, "floatlstin"));
      visit_4(child, false, node); //recur
      logger.log("  resume loop visit InlineBlock: " + 4);
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") + getAttribSafe(child, "clearance") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "computedheight", inlineblock_computedHeight(getAttribSafe(node, "intrinsheight")));
  logger.log("    inlineblock_computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  setAttribSafe(node, "minleft", inlineblock_minLeft(getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "floatlstin")));
  logger.log("    inlineblock_minLeft: " + getAttribSafe(node, "minleft"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "floatcollision", inlineblock_floatCollision(getAttribSafe(node, "relx"), getAttribSafe(node, "mr"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "minleft"), getAttribSafe(node, "floatlstin"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "pl"), getAttribSafe(node, "ml"), getAttribSafe(node, "rely"), getAttribSafe(node, "pr")));
  logger.log("    inlineblock_floatCollision: " + getAttribSafe(node, "floatcollision"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        minLeft: " + getAttribSafe(node, "minleft"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  setAttribSafe(node, "adjoldlineh", inlineblock_adjOldLineH(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "floatcollision")));
  logger.log("    inlineblock_adjOldLineH: " + getAttribSafe(node, "adjoldlineh"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        floatCollision: " + getAttribSafe(node, "floatcollision"));
  setAttribSafe(node, "adjrely", inlineblock_adjRelY(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "floatcollision"), getAttribSafe(node, "rely"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "floatlstin")));
  logger.log("    inlineblock_adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        floatCollision: " + getAttribSafe(node, "floatcollision"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "adjrelx", inlineblock_adjRelX(getAttribSafe(node, "relx"), getAttribSafe(node, "adjrely"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "minleft"), getAttribSafe(node, "floatcollision"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "floatlstin")));
  logger.log("    inlineblock_adjRelX: " + getAttribSafe(node, "adjrelx"));
  logger.log("        relX: " + getAttribSafe(node, "relx"));
  logger.log("        adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        minLeft: " + getAttribSafe(node, "minleft"));
  logger.log("        floatCollision: " + getAttribSafe(node, "floatcollision"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "maxlineh", inlineblock_maxLineH(getAttribSafe(node, "adjoldlineh"), getAttribSafe(node, "pb"), getAttribSafe(node, "pt"), getAttribSafe(node, "computedheight")));
  logger.log("    inlineblock_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        adjOldLineH: " + getAttribSafe(node, "adjoldlineh"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        computedHeight: " + getAttribSafe(node, "computedheight"));
  setAttribSafe(node, "relrighty", inlineblock_relRightY(getAttribSafe(node, "adjrely")));
  logger.log("    inlineblock_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        adjRelY: " + getAttribSafe(node, "adjrely"));
  setAttribSafe(node, "relrightx", inlineblock_relRightX(getAttribSafe(node, "adjrelx"), getAttribSafe(node, "mr"), getAttribSafe(node, "pl"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr")));
  logger.log("    inlineblock_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        adjRelX: " + getAttribSafe(node, "adjrelx"));
  logger.log("        mr: " + getAttribSafe(node, "mr"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        computedWidth: " + getAttribSafe(node, "computedwidth"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  return true;
}
function visit_flowrootc_4(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 4);

  setAttribSafe(node, "childs_relx_init", (0));
  setAttribSafe(node, "childs_relx_last", getAttribSafe(node, "childs_relx_init"));
  logger.log("      init childs@relX: " + getAttribSafe(node, "childs_relx_init"));
  logger.log("    last init childs_relx_last: " + getAttribSafe(node, "childs_relx_last"));
    setAttribSafe(node, "childs_rely_init", (0));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "floatlstin", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "floatlstin") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_floatlstout_init") : ("floatlstout")) ));
      logger.log("         step childs@floatLstIn: " + getAttribSafe(child, "floatlstin"));
      setAttribSafe(child, "prevlineh", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) ));
      logger.log("         step childs@prevLineH: " + getAttribSafe(child, "prevlineh"));
      setAttribSafe(child, "prevrelx", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) ));
      logger.log("         step childs@prevRelX: " + getAttribSafe(child, "prevrelx"));
      setAttribSafe(child, "prevrely", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty")) ));
      logger.log("         step childs@prevRelY: " + getAttribSafe(child, "prevrely"));
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5) + getAttribSafe(child, "firstchildwidth") > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "oldlineh") : ((getAttribSafe(child, "relx") == 0) ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      visit_4(child, false, node); //recur
      logger.log("  resume loop visit FlowRootC: " + 4);
    }
  })();


  setAttribSafe(node, "floatlstout_init", (getAttribSafe(node, "floatlstin") ));
  setAttribSafe(node, "floatlstout", getAttribSafe(node, "floatlstout_init"));
  logger.log("      init floatLstOut: " + getAttribSafe(node, "floatlstout_init"));
  logger.log("    last init floatlstout: " + getAttribSafe(node, "floatlstout"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "floatlstout", (getAttribSafe(child, "floatlstout") ));
      logger.log("         step floatLstOut: " + getAttribSafe(node, "floatlstout"));
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") ));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
    }
  })();

  return true;
}
function visit_floatedinline_4(node) {
  logger.log("  visit  FloatedInline (id: " + node.id + "): " + 4);
  setAttribSafe(node, "maxlineh", floatedinline_maxLineH(getAttribSafe(node, "prevlineh")));
  logger.log("    floatedinline_maxLineH: " + getAttribSafe(node, "maxlineh"));
  logger.log("        prevLineH: " + getAttribSafe(node, "prevlineh"));
  setAttribSafe(node, "relrightx", floatedinline_relRightX(getAttribSafe(node, "prevrelx")));
  logger.log("    floatedinline_relRightX: " + getAttribSafe(node, "relrightx"));
  logger.log("        prevRelX: " + getAttribSafe(node, "prevrelx"));
  setAttribSafe(node, "relrighty", floatedinline_relRightY(getAttribSafe(node, "prevrely")));
  logger.log("    floatedinline_relRightY: " + getAttribSafe(node, "relrighty"));
  logger.log("        prevRelY: " + getAttribSafe(node, "prevrely"));

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "floatlstin", ((getAttribSafe(child, "childnum") == 1) ? emptyFloatLst() : translate(getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_floatlstout_init") : ("floatlstout")), getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_ml_init") : ("ml")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pl_init") : ("pl")) - (getAttribSafe(child, "ml") + getAttribSafe(child, "pl")), (- (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb")) + getAttribSafe(child, "mt") + getAttribSafe(child, "pt"))))));
      logger.log("         step childs@floatLstIn: " + getAttribSafe(child, "floatlstin"));
      visit_4(child, false, node); //recur
      logger.log("  resume loop visit FloatedInline: " + 4);
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "adjrely", floatedinline_adjRelY(getAttribSafe(node, "oldlineh"), getAttribSafe(node, "pl"), getAttribSafe(node, "floatwidth"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "pr"), getAttribSafe(node, "rely"), getAttribSafe(node, "floatlstin")));
  logger.log("    floatedinline_adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        oldLineH: " + getAttribSafe(node, "oldlineh"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        floatWidth: " + getAttribSafe(node, "floatwidth"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        relY: " + getAttribSafe(node, "rely"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "floatlstout", floatedinline_floatLstOut(getAttribSafe(node, "clear"), getAttribSafe(node, "adjrely"), getAttribSafe(node, "maxwidth"), getAttribSafe(node, "floatwidth"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "float"), getAttribSafe(node, "floatlstin")));
  logger.log("    floatedinline_floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        clear: " + getAttribSafe(node, "clear"));
  logger.log("        adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        maxWidth: " + getAttribSafe(node, "maxwidth"));
  logger.log("        floatWidth: " + getAttribSafe(node, "floatwidth"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        float: " + getAttribSafe(node, "float"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  return true;
}
function visit_floatedblock_4(node) {
  logger.log("  visit  FloatedBlock (id: " + node.id + "): " + 4);
  setAttribSafe(node, "usedfloatlst", floatedblock_usedFloatLst(getAttribSafe(node, "floatlstin")));
  logger.log("    floatedblock_usedFloatLst: " + getAttribSafe(node, "usedfloatlst"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "floatlstin", ((getAttribSafe(child, "childnum") == 1) ? emptyFloatLst() : translate(getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_floatlstout_init") : ("floatlstout")), getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_ml_init") : ("ml")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pl_init") : ("pl")) - (getAttribSafe(child, "ml") + getAttribSafe(child, "pl")), (- (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb")) + getAttribSafe(child, "mt") + getAttribSafe(child, "pt"))))));
      logger.log("         step childs@floatLstIn: " + getAttribSafe(child, "floatlstin"));
      visit_4(child, false, node); //recur
      logger.log("  resume loop visit FloatedBlock: " + 4);
    }
  })();


  setAttribSafe(node, "intrinsheight_init", (0));
  setAttribSafe(node, "intrinsheight", getAttribSafe(node, "intrinsheight_init"));
  logger.log("      init intrinsHeight: " + getAttribSafe(node, "intrinsheight_init"));
  logger.log("    last init intrinsheight: " + getAttribSafe(node, "intrinsheight"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "intrinsheight", (getAttribSafe(node, "intrinsheight") + getAttribSafe(child, "computedheight") + getAttribSafe(child, "mt") + getAttribSafe(child, "mb") + getAttribSafe(child, "pt") + getAttribSafe(child, "pb") ));
      logger.log("         step intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
    }
  })();

  setAttribSafe(node, "floatlstout", floatedblock_floatLstOut(getInputAttribSafe(node, "clear", '"none"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "floatwidth"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "float"), getAttribSafe(node, "floatlstin")));
  logger.log("    floatedblock_floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        clear: " + getInputAttribSafe(node, "clear", '"none"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        floatWidth: " + getAttribSafe(node, "floatwidth"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        float: " + getAttribSafe(node, "float"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  return true;
}
function visit_normalinline_4(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 4);

  setAttribSafe(node, "childs_relx_init", (0));
  setAttribSafe(node, "childs_relx_last", getAttribSafe(node, "childs_relx_init"));
  logger.log("      init childs@relX: " + getAttribSafe(node, "childs_relx_init"));
  logger.log("    last init childs_relx_last: " + getAttribSafe(node, "childs_relx_last"));
    setAttribSafe(node, "childs_rely_init", (0));
  setAttribSafe(node, "childs_rely_last", getAttribSafe(node, "childs_rely_init"));
  logger.log("      init childs@relY: " + getAttribSafe(node, "childs_rely_init"));
  logger.log("    last init childs_rely_last: " + getAttribSafe(node, "childs_rely_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "floatlstin", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "floatlstin") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_floatlstout_init") : ("floatlstout")) ));
      logger.log("         step childs@floatLstIn: " + getAttribSafe(child, "floatlstin"));
      setAttribSafe(child, "prevlineh", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) ));
      logger.log("         step childs@prevLineH: " + getAttribSafe(child, "prevlineh"));
      setAttribSafe(child, "prevrelx", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) ));
      logger.log("         step childs@prevRelX: " + getAttribSafe(child, "prevrelx"));
      setAttribSafe(child, "prevrely", (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty")) ));
      logger.log("         step childs@prevRelY: " + getAttribSafe(child, "prevrely"));
      setAttribSafe(child, "relx", (((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5) + getAttribSafe(child, "firstchildwidth") > getAttribSafe(node, "maxwidth")) ? 0 : (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "relx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrightx_init") : ("relrightx")) + 5)));
      logger.log("         step childs@relX: " + getAttribSafe(child, "relx"));
      setAttribSafe(child, "oldlineh", ((getAttribSafe(child, "childnum") == 1) ? getAttribSafe(node, "oldlineh") : ((getAttribSafe(child, "relx") == 0) ? 0 : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")))));
      logger.log("         step childs@oldLineH: " + getAttribSafe(child, "oldlineh"));
      setAttribSafe(child, "rely", ((getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "rely") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_relrighty_init") : ("relrighty"))) + (getAttribSafe(child, "relx") == 0 ? (getAttribSafe(child, "childnum") == 1 ? getAttribSafe(node, "oldlineh") : getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_maxlineh_init") : ("maxlineh")) + 5) : 0)));
      logger.log("         step childs@relY: " + getAttribSafe(child, "rely"));
      visit_4(child, false, node); //recur
      logger.log("  resume loop visit NormalInline: " + 4);
    }
  })();


  setAttribSafe(node, "floatlstout_init", (getAttribSafe(node, "floatlstin") ));
  setAttribSafe(node, "floatlstout", getAttribSafe(node, "floatlstout_init"));
  logger.log("      init floatLstOut: " + getAttribSafe(node, "floatlstout_init"));
  logger.log("    last init floatlstout: " + getAttribSafe(node, "floatlstout"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(node, "floatlstout", (getAttribSafe(child, "floatlstout") ));
      logger.log("         step floatLstOut: " + getAttribSafe(node, "floatlstout"));
      setAttribSafe(node, "maxlineh", (getAttribSafe(child, "maxlineh") ));
      logger.log("         step maxLineH: " + getAttribSafe(node, "maxlineh"));
      setAttribSafe(node, "relrightx", (getAttribSafe(child, "relrightx") + getAttribSafe(node, "mr") + getAttribSafe(node, "pr") ));
      logger.log("         step relRightX: " + getAttribSafe(node, "relrightx"));
      setAttribSafe(node, "relrighty", (getAttribSafe(child, "relrighty") ));
      logger.log("         step relRightY: " + getAttribSafe(node, "relrighty"));
    }
  })();

  return true;
}
function visit_blockleaf_4(node) {
  logger.log("  visit  BlockLeaf (id: " + node.id + "): " + 4);
  setAttribSafe(node, "clearance", blockleaf_clearance(getInputAttribSafe(node, "clear", '"none"'), getAttribSafe(node, "floatlstin")));
  logger.log("    blockleaf_clearance: " + getAttribSafe(node, "clearance"));
  logger.log("        clear: " + getInputAttribSafe(node, "clear", '"none"'));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "floatlstout", blockleaf_floatLstOut(getAttribSafe(node, "floatlstin")));
  logger.log("    blockleaf_floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  setAttribSafe(node, "usedfloatlst", blockleaf_usedFloatLst(getAttribSafe(node, "clearance"), getAttribSafe(node, "floatlstin")));
  logger.log("    blockleaf_usedFloatLst: " + getAttribSafe(node, "usedfloatlst"));
  logger.log("        clearance: " + getAttribSafe(node, "clearance"));
  logger.log("        floatLstIn: " + getAttribSafe(node, "floatlstin"));
  return true;
}
///// pass /////
function visit_inlineleaf_5(node) {
  logger.log("  visit  InlineLeaf (id: " + node.id + "): " + 5);
  setAttribSafe(node, "absx", inlineleaf_absX(getAttribSafe(node, "adjrelx"), getAttribSafe(node, "offsetx"), getAttribSafe(node, "minx")));
  logger.log("    inlineleaf_absX: " + getAttribSafe(node, "absx"));
  logger.log("        adjRelX: " + getAttribSafe(node, "adjrelx"));
  logger.log("        offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", inlineleaf_absY(getAttribSafe(node, "adjrely"), getAttribSafe(node, "offsety"), getAttribSafe(node, "miny")));
  logger.log("    inlineleaf_absY: " + getAttribSafe(node, "absy"));
  logger.log("        adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        offsetY: " + getAttribSafe(node, "offsety"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", inlineleaf_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    inlineleaf_render: " + getAttribSafe(node, "render"));
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
  return true;
}
function visit_normalblock_5(node) {
  logger.log("  visit  NormalBlock (id: " + node.id + "): " + 5);
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "clearance") - getAttribSafe(child, "mt")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
      setAttribSafe(child, "poscontx", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontx") : getAttribSafe(node, "computedx") ));
      logger.log("         step childs@posContX: " + getAttribSafe(child, "poscontx"));
      setAttribSafe(child, "posconty", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "posconty") : getAttribSafe(node, "computedy") ));
      logger.log("         step childs@posContY: " + getAttribSafe(child, "posconty"));
    }
  })();

  return true;
}
function visit_flowblock_5(node) {
  logger.log("  visit  FlowBlock (id: " + node.id + "): " + 5);
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
  setAttribSafe(getChildByRefName(node,"child"), "poscontx", flowblock_child_posContX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "poscontx"), getAttribSafe(node, "computedx")));
  logger.log("    flowblock_child_posContX: " + getAttribSafe(getChildByRefName(node,"child"), "poscontx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        posContX: " + getAttribSafe(node, "poscontx"));
  logger.log("        computedX: " + getAttribSafe(node, "computedx"));
  setAttribSafe(getChildByRefName(node,"child"), "posconty", flowblock_child_posContY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "posconty"), getAttribSafe(node, "computedy")));
  logger.log("    flowblock_child_posContY: " + getAttribSafe(getChildByRefName(node,"child"), "posconty"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        posContY: " + getAttribSafe(node, "posconty"));
  logger.log("        computedY: " + getAttribSafe(node, "computedy"));
  return true;
}
function visit_root_5(node) {
  logger.log("  visit  Root (id: " + node.id + "): " + 5);
  return true;
}
function visit_inlineblock_5(node) {
  logger.log("  visit  InlineBlock (id: " + node.id + "): " + 5);
  setAttribSafe(node, "absx", inlineblock_absX(getAttribSafe(node, "adjrelx"), getAttribSafe(node, "offsetx"), getAttribSafe(node, "minx")));
  logger.log("    inlineblock_absX: " + getAttribSafe(node, "absx"));
  logger.log("        adjRelX: " + getAttribSafe(node, "adjrelx"));
  logger.log("        offsetX: " + getAttribSafe(node, "offsetx"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "absy", inlineblock_absY(getAttribSafe(node, "adjrely"), getAttribSafe(node, "offsety"), getAttribSafe(node, "miny")));
  logger.log("    inlineblock_absY: " + getAttribSafe(node, "absy"));
  logger.log("        adjRelY: " + getAttribSafe(node, "adjrely"));
  logger.log("        offsetY: " + getAttribSafe(node, "offsety"));
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
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "clearance") - getAttribSafe(child, "mt")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
      setAttribSafe(child, "poscontx", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontx") : getAttribSafe(node, "computedx") ));
      logger.log("         step childs@posContX: " + getAttribSafe(child, "poscontx"));
      setAttribSafe(child, "posconty", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "posconty") : getAttribSafe(node, "computedy") ));
      logger.log("         step childs@posContY: " + getAttribSafe(child, "posconty"));
    }
  })();

  return true;
}
function visit_flowrootc_5(node) {
  logger.log("  visit  FlowRootC (id: " + node.id + "): " + 5);
  setAttribSafe(node, "render", flowrootc_render(getAttribSafe(node, "canvas")));
  logger.log("    flowrootc_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));

(function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "minx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(node, "miny") ));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      setAttribSafe(child, "poscontx", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontx") : getAttribSafe(node, "minx") + getAttribSafe(node, "relx") + getAttribSafe(node, "offsetx") ));
      logger.log("         step childs@posContX: " + getAttribSafe(child, "poscontx"));
      setAttribSafe(child, "posconty", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "posconty") : getAttribSafe(node, "miny") + getAttribSafe(node, "rely") + getAttribSafe(node, "offsety") ));
      logger.log("         step childs@posContY: " + getAttribSafe(child, "posconty"));
      setAttribSafe(child, "canvas", (getAttribSafe(node, "render") ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_floatedinline_5(node) {
  logger.log("  visit  FloatedInline (id: " + node.id + "): " + 5);
  setAttribSafe(node, "computedx", floatedinline_computedX(getAttribSafe(node, "floatlstout"), getAttribSafe(node, "minx")));
  logger.log("    floatedinline_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        minX: " + getAttribSafe(node, "minx"));
  setAttribSafe(node, "computedy", floatedinline_computedY(getAttribSafe(node, "floatlstout"), getAttribSafe(node, "miny")));
  logger.log("    floatedinline_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        minY: " + getAttribSafe(node, "miny"));
  setAttribSafe(node, "render", floatedinline_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedx"), getAttribSafe(node, "floatwidth"), getAttribSafe(node, "computedy"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "ml"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    floatedinline_render: " + getAttribSafe(node, "render"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        borderc: " + getInputMaybeAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        floatWidth: " + getAttribSafe(node, "floatwidth"));
  logger.log("        computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        borderw: " + getAttribSafe(node, "borderw"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        bgc: " + getInputMaybeAttribSafe(node, "bgc"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));

  setAttribSafe(node, "childs_absy_init", (getAttribSafe(node, "computedy") + getAttribSafe(node, "mt") + getAttribSafe(node, "pt") ));
  setAttribSafe(node, "childs_absy_last", getAttribSafe(node, "childs_absy_init"));
  logger.log("      init childs@absY: " + getAttribSafe(node, "childs_absy_init"));
  logger.log("    last init childs_absy_last: " + getAttribSafe(node, "childs_absy_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "poscontx", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontx") : getAttribSafe(node, "computedx") ));
      logger.log("         step childs@posContX: " + getAttribSafe(child, "poscontx"));
      setAttribSafe(child, "posconty", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "posconty") : getAttribSafe(node, "computedy") ));
      logger.log("         step childs@posContY: " + getAttribSafe(child, "posconty"));
    }
  })();


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
function visit_floatedblock_5(node) {
  logger.log("  visit  FloatedBlock (id: " + node.id + "): " + 5);
  setAttribSafe(node, "computedx", floatedblock_computedX(getAttribSafe(node, "floatlstout"), getAttribSafe(node, "absx")));
  logger.log("    floatedblock_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  setAttribSafe(node, "computedy", floatedblock_computedY(getAttribSafe(node, "floatlstout"), getAttribSafe(node, "absy")));
  logger.log("    floatedblock_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        floatLstOut: " + getAttribSafe(node, "floatlstout"));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  setAttribSafe(node, "render", floatedblock_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedx"), getAttribSafe(node, "floatwidth"), getAttribSafe(node, "computedy"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "ml"), getAttribSafe(node, "intrinsheight"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    floatedblock_render: " + getAttribSafe(node, "render"));
  logger.log("        mt: " + getAttribSafe(node, "mt"));
  logger.log("        borderc: " + getInputMaybeAttribSafe(node, "borderc"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));
  logger.log("        computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        floatWidth: " + getAttribSafe(node, "floatwidth"));
  logger.log("        computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        borderw: " + getAttribSafe(node, "borderw"));
  logger.log("        pb: " + getAttribSafe(node, "pb"));
  logger.log("        pl: " + getAttribSafe(node, "pl"));
  logger.log("        pt: " + getAttribSafe(node, "pt"));
  logger.log("        bgc: " + getInputMaybeAttribSafe(node, "bgc"));
  logger.log("        ml: " + getAttribSafe(node, "ml"));
  logger.log("        intrinsHeight: " + getAttribSafe(node, "intrinsheight"));
  logger.log("        pr: " + getAttribSafe(node, "pr"));
  logger.log("        borders: " + getInputAttribSafe(node, "borders", '"none"'));

  setAttribSafe(node, "childs_absy_init", (getAttribSafe(node, "computedy") + getAttribSafe(node, "mt") + getAttribSafe(node, "pt") ));
  setAttribSafe(node, "childs_absy_last", getAttribSafe(node, "childs_absy_init"));
  logger.log("      init childs@absY: " + getAttribSafe(node, "childs_absy_init"));
  logger.log("    last init childs_absy_last: " + getAttribSafe(node, "childs_absy_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "absx", (getAttribSafe(node, "computedx") + getAttribSafe(node, "ml") + getAttribSafe(node, "pl") ));
      logger.log("         step childs@absX: " + getAttribSafe(child, "absx"));
      setAttribSafe(child, "absy", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_absy_init") : ("absy")) + (getAttribSafe(child, "childnum") == 1 ? 0 : (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_computedheight_init") : ("computedheight")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pt_init") : ("pt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_pb_init") : ("pb")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mt_init") : ("mt")) + getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_mb_init") : ("mb"))))));
      logger.log("         step childs@absY: " + getAttribSafe(child, "absy"));
      setAttribSafe(child, "poscontx", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontx") : getAttribSafe(node, "computedx") ));
      logger.log("         step childs@posContX: " + getAttribSafe(child, "poscontx"));
      setAttribSafe(child, "posconty", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "posconty") : getAttribSafe(node, "computedy") ));
      logger.log("         step childs@posContY: " + getAttribSafe(child, "posconty"));
    }
  })();


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
function visit_normalinline_5(node) {
  logger.log("  visit  NormalInline (id: " + node.id + "): " + 5);
  setAttribSafe(node, "render", normalinline_render(getAttribSafe(node, "canvas")));
  logger.log("    normalinline_render: " + getAttribSafe(node, "render"));
  logger.log("        canvas: " + getAttribSafe(node, "canvas"));

  setAttribSafe(node, "childs_canvas_init", (getAttribSafe(node, "render") ));
  setAttribSafe(node, "childs_canvas_last", getAttribSafe(node, "childs_canvas_init"));
  logger.log("      init childs@canvas: " + getAttribSafe(node, "childs_canvas_init"));
  logger.log("    last init childs_canvas_last: " + getAttribSafe(node, "childs_canvas_last"));
  (function () {
    var children = getChildren(node, "childs", false);
    for (var i = 0; i < children.length; i++) {
      var child = children[i]; 
      setAttribSafe(child, "minx", (getAttribSafe(node, "minx") ));
      logger.log("         step childs@minX: " + getAttribSafe(child, "minx"));
      setAttribSafe(child, "miny", (getAttribSafe(node, "miny") ));
      logger.log("         step childs@minY: " + getAttribSafe(child, "miny"));
      setAttribSafe(child, "poscontx", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "poscontx") : getAttribSafe(node, "minx") + getAttribSafe(node, "relx") + getAttribSafe(node, "offsetx") ));
      logger.log("         step childs@posContX: " + getAttribSafe(child, "poscontx"));
      setAttribSafe(child, "posconty", (((getInputAttribSafe(node, "position", '"static"') == "static" || getInputAttribSafe(node, "position", '"static"') == "\"static\"")) ? getAttribSafe(node, "posconty") : getAttribSafe(node, "miny") + getAttribSafe(node, "rely") + getAttribSafe(node, "offsety") ));
      logger.log("         step childs@posContY: " + getAttribSafe(child, "posconty"));
      setAttribSafe(child, "canvas", (getAttribSafe(i == 0 ? node : children[i-1], i == 0 ? ("childs_canvas_init") : ("canvas")) ));
      logger.log("         step childs@canvas: " + getAttribSafe(child, "canvas"));
    }
  })();

  return true;
}
function visit_blockleaf_5(node) {
  logger.log("  visit  BlockLeaf (id: " + node.id + "): " + 5);
  setAttribSafe(node, "computedx", blockleaf_computedX(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "left", '{1,0}'), getAttribSafe(node, "absx"), getInputAttribSafe(node, "right", '{1,0}')));
  logger.log("    blockleaf_computedX: " + getAttribSafe(node, "computedx"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        left: " + getInputAttribSafe(node, "left", '{1,0}'));
  logger.log("        absX: " + getAttribSafe(node, "absx"));
  logger.log("        right: " + getInputAttribSafe(node, "right", '{1,0}'));
  setAttribSafe(node, "computedy", blockleaf_computedY(getInputAttribSafe(node, "position", '"static"'), getAttribSafe(node, "availablewidth"), getAttribSafe(node, "usedfontsize"), getInputAttribSafe(node, "bottom", '{1,0}'), getAttribSafe(node, "absy"), getInputAttribSafe(node, "top", '{1,0}')));
  logger.log("    blockleaf_computedY: " + getAttribSafe(node, "computedy"));
  logger.log("        position: " + getInputAttribSafe(node, "position", '"static"'));
  logger.log("        availableWidth: " + getAttribSafe(node, "availablewidth"));
  logger.log("        usedFontSize: " + getAttribSafe(node, "usedfontsize"));
  logger.log("        bottom: " + getInputAttribSafe(node, "bottom", '{1,0}'));
  logger.log("        absY: " + getAttribSafe(node, "absy"));
  logger.log("        top: " + getInputAttribSafe(node, "top", '{1,0}'));
  setAttribSafe(node, "render", blockleaf_render(getAttribSafe(node, "mt"), getInputMaybeAttribSafe(node, "borderc"), getAttribSafe(node, "canvas"), getAttribSafe(node, "computedwidth"), getAttribSafe(node, "computedheight"), getAttribSafe(node, "borderw"), getAttribSafe(node, "pb"), getAttribSafe(node, "pl"), getAttribSafe(node, "pt"), getInputMaybeAttribSafe(node, "bgc"), getAttribSafe(node, "absy"), getAttribSafe(node, "absx"), getAttribSafe(node, "ml"), getAttribSafe(node, "pr"), getInputAttribSafe(node, "borders", '"none"')));
  logger.log("    blockleaf_render: " + getAttribSafe(node, "render"));
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
  return true;
}
function visit_0 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_0(node);
      case "blockleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockleaf_0(node);
      case "inlineleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineleaf_0(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_0(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_0(node);
      case "floatedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedblock_0(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_0(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_0(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_0(node);
      case "floatedinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedinline_0(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_1 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_1(node);
      case "blockleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockleaf_1(node);
      case "inlineleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineleaf_1(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_1(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_1(node);
      case "floatedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedblock_1(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_1(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_1(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_1(node);
      case "floatedinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedinline_1(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_2 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_2(node);
      case "blockleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockleaf_2(node);
      case "inlineleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineleaf_2(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_2(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_2(node);
      case "floatedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedblock_2(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_2(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_2(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_2(node);
      case "floatedinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedinline_2(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_3 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_3(node);
      case "blockleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockleaf_3(node);
      case "inlineleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineleaf_3(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_3(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_3(node);
      case "floatedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedblock_3(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_3(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_3(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_3(node);
      case "floatedinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedinline_3(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_4 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_4(node);
      case "blockleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockleaf_4(node);
      case "inlineleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineleaf_4(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_4(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_4(node);
      case "floatedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedblock_4(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_4(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_4(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_4(node);
      case "floatedinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedinline_4(node);
    }
  }
  if (node.nodeType == 3) { logger.log("skipping text node 2"); return; }
  throw ("unknown node type for dispatch: " + node.tagName);
}
function visit_5 (node, isGlobalCall, parent) {
  if (node.nodeType == 1) {
    switch (node.tagName.toLowerCase()) {
      case "root":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_root_5(node);
      case "blockleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_blockleaf_5(node);
      case "inlineleaf":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineleaf_5(node);
      case "flowblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowblock_5(node);
      case "normalblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalblock_5(node);
      case "floatedblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedblock_5(node);
      case "flowrootc":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_flowrootc_5(node);
      case "normalinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_normalinline_5(node);
      case "inlineblock":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_inlineblock_5(node);
      case "floatedinline":
        logger.log("global: " + isGlobalCall + ", parent: " + parent);
        return visit_floatedinline_5(node);
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
  visit_4(root); //inorder visitors handle recursion 
  inherit(visit_5, root);
}
