interface(node).
interface(top).
interfaceAttribute(node, relx).
interfaceAttribute(node, canvas).
interfaceAttribute(node, relrightx).
interfaceAttribute(node, relrighty).
interfaceAttribute(node, maxlineh).
interfaceAttribute(node, minx).
interfaceAttribute(node, render).
interfaceAttribute(node, computedheight).
interfaceAttribute(node, miny).
interfaceAttribute(node, intrinsminwidth).
interfaceAttribute(node, oldlineh).
interfaceAttribute(node, rightpadding).
interfaceAttribute(node, maxwidth).
interfaceAttribute(node, intrinsprefwidth).
interfaceAttribute(node, absy).
interfaceAttribute(node, absx).
interfaceAttribute(node, firstchildwidth).
interfaceAttribute(node, intrinsheight).
interfaceAttribute(node, childnum).
interfaceAttribute(node, rely).
class(root, top).
class(leaf, node).
class(wrapbox, node).
classChild(root, child, node).
classChild(wrapbox, childsunroll0, node).
classChild(wrapbox, childsunroll1, node).
classChild(wrapbox, childsunroll2, node).
classChild(wrapbox, childsunrolln, node).
classField(gensymattrib, gensymattrib) :- false.
classField(root, gensymattrib).
classField(root, borderc).
classField(root, maxwidth).
classField(leaf, gensymattrib).
classField(leaf, height).
classField(leaf, width).
classField(leaf, borderc).
classField(wrapbox, gensymattrib).
classField(wrapbox, borderc).
interfaceField(node, display).
interfaceField(node, refname).
interfaceField(top, display).
interfaceField(top, refname).
assignment(root, child, maxwidth, self, maxwidth). %a42
assignment(root, child, childnum, self, gensymattrib). %a40
assignment(root, child, rightpadding, self, gensymattrib). %a40
assignment(root, child, relx, self, gensymattrib). %a40
assignment(root, child, oldlineh, self, gensymattrib). %a40
assignment(root, child, miny, self, gensymattrib). %a40
assignment(root, child, minx, self, gensymattrib). %a40
assignment(root, child, canvas, child, miny). %a42
assignment(root, child, canvas, self, maxwidth). %a42
assignment(root, child, canvas, child, minx). %a42
assignment(root, child, canvas, self, borderc). %a42
assignment(root, child, canvas, self, maxwidth). %a42
assignment(root, child, canvas, child, computedheight). %a42
assignment(root, child, rely, self, gensymattrib). %a40
assignment(leaf, self, absx, self, relx). %a42
assignment(leaf, self, absx, self, minx). %a42
assignment(leaf, self, intrinsprefwidth, self, width). %a42
assignment(leaf, self, absy, self, rely). %a42
assignment(leaf, self, absy, self, miny). %a42
assignment(leaf, self, computedheight, self, height). %a42
assignment(leaf, self, relrightx, self, relx). %a42
assignment(leaf, self, relrightx, self, intrinsprefwidth). %a42
assignment(leaf, self, firstchildwidth, self, rightpadding). %a42
assignment(leaf, self, firstchildwidth, self, width). %a42
assignment(leaf, self, maxlineh, self, oldlineh). %a42
assignment(leaf, self, maxlineh, self, intrinsheight). %a42
assignment(leaf, self, intrinsheight, self, height). %a42
assignment(leaf, self, render, self, height). %a42
assignment(leaf, self, render, self, width). %a42
assignment(leaf, self, render, self, borderc). %a42
assignment(leaf, self, render, self, canvas). %a42
assignment(leaf, self, render, self, absy). %a42
assignment(leaf, self, render, self, absx). %a42
assignment(leaf, self, intrinsminwidth, self, width). %a42
assignment(leaf, self, relrighty, self, rely). %a42
assignment(wrapbox, self, absy, self, rely). %a42
assignment(wrapbox, self, absy, self, miny). %a42
assignment(wrapbox, self, absrightx, self, relrightx). %a42
assignment(wrapbox, self, absrightx, self, minx). %a42
assignment(wrapbox, self, intrinsheight, self, numchilds_stepn). %a41
assignment(wrapbox, self, absrighty, self, relrighty). %a42
assignment(wrapbox, self, absrighty, self, miny). %a42
assignment(wrapbox, self, render, self, absrightx). %a42
assignment(wrapbox, self, render, self, absrighty). %a42
assignment(wrapbox, self, render, self, firstlineh). %a42
assignment(wrapbox, self, render, self, borderc). %a42
assignment(wrapbox, self, render, self, canvas). %a42
assignment(wrapbox, self, render, self, absy). %a42
assignment(wrapbox, self, render, self, absx). %a42
assignment(wrapbox, self, render, self, maxlineh). %a42
assignment(wrapbox, self, computedheight, self, relrighty). %a42
assignment(wrapbox, self, computedheight, self, maxlineh). %a42
assignment(wrapbox, self, absx, self, relx). %a42
assignment(wrapbox, self, absx, self, minx). %a42
assignment(wrapbox, self, childs_rightpadding_step0, self, numchilds_stepn). %a16
assignment(wrapbox, self, childs_rightpadding_step0, self, rightpadding). %a17
assignment(wrapbox, self, childs_rightpadding_step0, self, childs_childnum_step0). %a8
assignment(wrapbox, self, childs_rightpadding_step1, self, childs_childnum_step1). %a9
assignment(wrapbox, self, childs_rightpadding_step2, self, childs_childnum_step2). %a10
assignment(wrapbox, self, childs_rightpadding_stepn, self, childs_childnum_stepn). %a11
assignment(wrapbox, self, childs_rightpadding_step0, self, gensymattrib). %a27 childs@rightPadding
assignment(wrapbox, self, childs_rightpadding_step1, self, childs_rightpadding_step0). %a28
assignment(wrapbox, self, childs_rightpadding_step2, self, childs_rightpadding_step1). %a29
assignment(wrapbox, self, childs_rightpadding_stepn, self, childs_rightpadding_step2). %a30
assignment(wrapbox, childsunroll0, rightpadding, self, childs_rightpadding_step0). %a31
assignment(wrapbox, childsunroll1, rightpadding, self, childs_rightpadding_step1). %a32
assignment(wrapbox, childsunroll2, rightpadding, self, childs_rightpadding_step2). %a33
assignment(wrapbox, childsunrolln, rightpadding, self, childs_rightpadding_stepn). %a34
assignment(wrapbox, childs, rightpadding, self, childs_rightpadding_stepn). %a35
assignment(wrapbox, self, childs_oldlineh_step0, self, oldlineh). %a18
assignment(wrapbox, self, childs_oldlineh_step0, self, childs_relx_step0). %a8
assignment(wrapbox, self, childs_oldlineh_step1, self, childs_relx_step1). %a9
assignment(wrapbox, self, childs_oldlineh_step2, self, childs_relx_step2). %a10
assignment(wrapbox, self, childs_oldlineh_stepn, self, childs_relx_stepn). %a11
assignment(wrapbox, self, childs_oldlineh_step0, self, oldlineh). %a17
assignment(wrapbox, self, childs_oldlineh_step0, self, childs_childnum_step0). %a8
assignment(wrapbox, self, childs_oldlineh_step1, self, childs_childnum_step1). %a9
assignment(wrapbox, self, childs_oldlineh_step2, self, childs_childnum_step2). %a10
assignment(wrapbox, self, childs_oldlineh_stepn, self, childs_childnum_stepn). %a11
assignment(wrapbox, self, childs_oldlineh_step1, self, childs_maxlineh_step0). %a12
assignment(wrapbox, self, childs_oldlineh_step2, self, childs_maxlineh_step1). %a13
assignment(wrapbox, self, childs_oldlineh_stepn, self, childs_maxlineh_step2). %a14
assignment(wrapbox, self, childs_oldlineh_step0, self, gensymattrib). %a27 childs@oldLineH
assignment(wrapbox, self, childs_oldlineh_step1, self, childs_oldlineh_step0). %a28
assignment(wrapbox, self, childs_oldlineh_step2, self, childs_oldlineh_step1). %a29
assignment(wrapbox, self, childs_oldlineh_stepn, self, childs_oldlineh_step2). %a30
assignment(wrapbox, childsunroll0, oldlineh, self, childs_oldlineh_step0). %a31
assignment(wrapbox, childsunroll1, oldlineh, self, childs_oldlineh_step1). %a32
assignment(wrapbox, childsunroll2, oldlineh, self, childs_oldlineh_step2). %a33
assignment(wrapbox, childsunrolln, oldlineh, self, childs_oldlineh_stepn). %a34
assignment(wrapbox, childs, oldlineh, self, childs_oldlineh_stepn). %a35
assignment(wrapbox, self, firstlineh_step0, self, firstlinebreakpos). %a18
assignment(wrapbox, self, firstlineh_step0, self, maxlineh). %a18
assignment(wrapbox, self, firstlineh_step0, self, childs_childnum_step0). %a8
assignment(wrapbox, self, firstlineh_step1, self, childs_childnum_step1). %a9
assignment(wrapbox, self, firstlineh_step2, self, childs_childnum_step2). %a10
assignment(wrapbox, self, firstlineh_stepn, self, childs_childnum_stepn). %a11
assignment(wrapbox, self, firstlineh_step0, self, childs_maxlineh_step0). %a8
assignment(wrapbox, self, firstlineh_step1, self, childs_maxlineh_step1). %a9
assignment(wrapbox, self, firstlineh_step2, self, childs_maxlineh_step2). %a10
assignment(wrapbox, self, firstlineh_stepn, self, childs_maxlineh_stepn). %a11
assignment(wrapbox, self, firstlineh_step0, self, firstlinebreakpos). %a17
assignment(wrapbox, self, firstlineh_step0, self, gensymattrib). %a27 firstLineH
assignment(wrapbox, self, firstlineh_step1, self, firstlineh_step0). %a28
assignment(wrapbox, self, firstlineh_step2, self, firstlineh_step1). %a29
assignment(wrapbox, self, firstlineh_stepn, self, firstlineh_step2). %a30
assignment(wrapbox, selfunroll0, firstlineh, self, firstlineh_step0). %a31
assignment(wrapbox, selfunroll1, firstlineh, self, firstlineh_step1). %a32
assignment(wrapbox, selfunroll2, firstlineh, self, firstlineh_step2). %a33
assignment(wrapbox, selfunrolln, firstlineh, self, firstlineh_stepn). %a34
assignment(wrapbox, self, firstlineh, self, firstlineh_stepn). %a35
assignment(wrapbox, self, numchilds_step0, self, gensymattrib). %a27 numChilds
assignment(wrapbox, self, numchilds_step1, self, numchilds_step0). %a28
assignment(wrapbox, self, numchilds_step2, self, numchilds_step1). %a29
assignment(wrapbox, self, numchilds_stepn, self, numchilds_step2). %a30
assignment(wrapbox, selfunroll0, numchilds, self, numchilds_step0). %a31
assignment(wrapbox, selfunroll1, numchilds, self, numchilds_step1). %a32
assignment(wrapbox, selfunroll2, numchilds, self, numchilds_step2). %a33
assignment(wrapbox, selfunrolln, numchilds, self, numchilds_stepn). %a34
assignment(wrapbox, self, numchilds, self, numchilds_stepn). %a35
assignment(wrapbox, self, childs_relx_step0, self, relx). %a18
assignment(wrapbox, self, childs_relx_step1, self, childs_relrightx_step0). %a12
assignment(wrapbox, self, childs_relx_step2, self, childs_relrightx_step1). %a13
assignment(wrapbox, self, childs_relx_stepn, self, childs_relrightx_step2). %a14
assignment(wrapbox, self, childs_relx_step0, self, relx). %a17
assignment(wrapbox, self, childs_relx_step0, self, childs_firstchildwidth_step0). %a8
assignment(wrapbox, self, childs_relx_step1, self, childs_firstchildwidth_step1). %a9
assignment(wrapbox, self, childs_relx_step2, self, childs_firstchildwidth_step2). %a10
assignment(wrapbox, self, childs_relx_stepn, self, childs_firstchildwidth_stepn). %a11
assignment(wrapbox, self, childs_relx_step0, self, maxwidth). %a17
assignment(wrapbox, self, childs_relx_step0, self, childs_childnum_step0). %a8
assignment(wrapbox, self, childs_relx_step1, self, childs_childnum_step1). %a9
assignment(wrapbox, self, childs_relx_step2, self, childs_childnum_step2). %a10
assignment(wrapbox, self, childs_relx_stepn, self, childs_childnum_stepn). %a11
assignment(wrapbox, self, childs_relx_step0, self, gensymattrib). %a27 childs@relX
assignment(wrapbox, self, childs_relx_step1, self, childs_relx_step0). %a28
assignment(wrapbox, self, childs_relx_step2, self, childs_relx_step1). %a29
assignment(wrapbox, self, childs_relx_stepn, self, childs_relx_step2). %a30
assignment(wrapbox, childsunroll0, relx, self, childs_relx_step0). %a31
assignment(wrapbox, childsunroll1, relx, self, childs_relx_step1). %a32
assignment(wrapbox, childsunroll2, relx, self, childs_relx_step2). %a33
assignment(wrapbox, childsunrolln, relx, self, childs_relx_stepn). %a34
assignment(wrapbox, childs, relx, self, childs_relx_stepn). %a35
assignment(wrapbox, self, childs_childnum_step0, self, gensymattrib). %a27 childs@childNum
assignment(wrapbox, self, childs_childnum_step1, self, childs_childnum_step0). %a28
assignment(wrapbox, self, childs_childnum_step2, self, childs_childnum_step1). %a29
assignment(wrapbox, self, childs_childnum_stepn, self, childs_childnum_step2). %a30
assignment(wrapbox, childsunroll0, childnum, self, childs_childnum_step0). %a31
assignment(wrapbox, childsunroll1, childnum, self, childs_childnum_step1). %a32
assignment(wrapbox, childsunroll2, childnum, self, childs_childnum_step2). %a33
assignment(wrapbox, childsunrolln, childnum, self, childs_childnum_stepn). %a34
assignment(wrapbox, childs, childnum, self, childs_childnum_stepn). %a35
assignment(wrapbox, self, relrighty_step0, self, rely). %a18
assignment(wrapbox, self, relrighty_step0, self, childs_relrighty_step0). %a8
assignment(wrapbox, self, relrighty_step1, self, childs_relrighty_step1). %a9
assignment(wrapbox, self, relrighty_step2, self, childs_relrighty_step2). %a10
assignment(wrapbox, self, relrighty_stepn, self, childs_relrighty_stepn). %a11
assignment(wrapbox, self, relrighty_step0, self, gensymattrib). %a27 relRightY
assignment(wrapbox, self, relrighty_step1, self, relrighty_step0). %a28
assignment(wrapbox, self, relrighty_step2, self, relrighty_step1). %a29
assignment(wrapbox, self, relrighty_stepn, self, relrighty_step2). %a30
assignment(wrapbox, selfunroll0, relrighty, self, relrighty_step0). %a31
assignment(wrapbox, selfunroll1, relrighty, self, relrighty_step1). %a32
assignment(wrapbox, selfunroll2, relrighty, self, relrighty_step2). %a33
assignment(wrapbox, selfunrolln, relrighty, self, relrighty_stepn). %a34
assignment(wrapbox, self, relrighty, self, relrighty_stepn). %a35
assignment(wrapbox, self, intrinsprefwidth_step0, self, numchilds_stepn). %a17
assignment(wrapbox, self, intrinsprefwidth_step0, self, childs_intrinsprefwidth_step0). %a8
assignment(wrapbox, self, intrinsprefwidth_step1, self, childs_intrinsprefwidth_step1). %a9
assignment(wrapbox, self, intrinsprefwidth_step2, self, childs_intrinsprefwidth_step2). %a10
assignment(wrapbox, self, intrinsprefwidth_stepn, self, childs_intrinsprefwidth_stepn). %a11
assignment(wrapbox, self, intrinsprefwidth_step0, self, gensymattrib). %a27 intrinsPrefWidth
assignment(wrapbox, self, intrinsprefwidth_step1, self, intrinsprefwidth_step0). %a28
assignment(wrapbox, self, intrinsprefwidth_step2, self, intrinsprefwidth_step1). %a29
assignment(wrapbox, self, intrinsprefwidth_stepn, self, intrinsprefwidth_step2). %a30
assignment(wrapbox, selfunroll0, intrinsprefwidth, self, intrinsprefwidth_step0). %a31
assignment(wrapbox, selfunroll1, intrinsprefwidth, self, intrinsprefwidth_step1). %a32
assignment(wrapbox, selfunroll2, intrinsprefwidth, self, intrinsprefwidth_step2). %a33
assignment(wrapbox, selfunrolln, intrinsprefwidth, self, intrinsprefwidth_stepn). %a34
assignment(wrapbox, self, intrinsprefwidth, self, intrinsprefwidth_stepn). %a35
assignment(wrapbox, self, intrinsminwidth_step0, self, childs_intrinsminwidth_step0). %a8
assignment(wrapbox, self, intrinsminwidth_step1, self, childs_intrinsminwidth_step1). %a9
assignment(wrapbox, self, intrinsminwidth_step2, self, childs_intrinsminwidth_step2). %a10
assignment(wrapbox, self, intrinsminwidth_stepn, self, childs_intrinsminwidth_stepn). %a11
assignment(wrapbox, self, intrinsminwidth_step0, self, gensymattrib). %a27 intrinsMinWidth
assignment(wrapbox, self, intrinsminwidth_step1, self, intrinsminwidth_step0). %a28
assignment(wrapbox, self, intrinsminwidth_step2, self, intrinsminwidth_step1). %a29
assignment(wrapbox, self, intrinsminwidth_stepn, self, intrinsminwidth_step2). %a30
assignment(wrapbox, selfunroll0, intrinsminwidth, self, intrinsminwidth_step0). %a31
assignment(wrapbox, selfunroll1, intrinsminwidth, self, intrinsminwidth_step1). %a32
assignment(wrapbox, selfunroll2, intrinsminwidth, self, intrinsminwidth_step2). %a33
assignment(wrapbox, selfunrolln, intrinsminwidth, self, intrinsminwidth_stepn). %a34
assignment(wrapbox, self, intrinsminwidth, self, intrinsminwidth_stepn). %a35
assignment(wrapbox, self, maxlineh_step0, self, oldlineh). %a18
assignment(wrapbox, self, maxlineh_step0, self, intrinsheight). %a18
assignment(wrapbox, self, maxlineh_step0, self, childs_maxlineh_step0). %a8
assignment(wrapbox, self, maxlineh_step1, self, childs_maxlineh_step1). %a9
assignment(wrapbox, self, maxlineh_step2, self, childs_maxlineh_step2). %a10
assignment(wrapbox, self, maxlineh_stepn, self, childs_maxlineh_stepn). %a11
assignment(wrapbox, self, maxlineh_step0, self, gensymattrib). %a27 maxLineH
assignment(wrapbox, self, maxlineh_step1, self, maxlineh_step0). %a28
assignment(wrapbox, self, maxlineh_step2, self, maxlineh_step1). %a29
assignment(wrapbox, self, maxlineh_stepn, self, maxlineh_step2). %a30
assignment(wrapbox, selfunroll0, maxlineh, self, maxlineh_step0). %a31
assignment(wrapbox, selfunroll1, maxlineh, self, maxlineh_step1). %a32
assignment(wrapbox, selfunroll2, maxlineh, self, maxlineh_step2). %a33
assignment(wrapbox, selfunrolln, maxlineh, self, maxlineh_stepn). %a34
assignment(wrapbox, self, maxlineh, self, maxlineh_stepn). %a35
assignment(wrapbox, self, firstlinebreakpos_step1, self, childs_relrighty_step0). %a12
assignment(wrapbox, self, firstlinebreakpos_step2, self, childs_relrighty_step1). %a13
assignment(wrapbox, self, firstlinebreakpos_stepn, self, childs_relrighty_step2). %a14
assignment(wrapbox, self, firstlinebreakpos_step0, self, childs_childnum_step0). %a8
assignment(wrapbox, self, firstlinebreakpos_step1, self, childs_childnum_step1). %a9
assignment(wrapbox, self, firstlinebreakpos_step2, self, childs_childnum_step2). %a10
assignment(wrapbox, self, firstlinebreakpos_stepn, self, childs_childnum_stepn). %a11
assignment(wrapbox, self, firstlinebreakpos_step0, self, childs_relrighty_step0). %a8
assignment(wrapbox, self, firstlinebreakpos_step1, self, childs_relrighty_step1). %a9
assignment(wrapbox, self, firstlinebreakpos_step2, self, childs_relrighty_step2). %a10
assignment(wrapbox, self, firstlinebreakpos_stepn, self, childs_relrighty_stepn). %a11
assignment(wrapbox, self, firstlinebreakpos_step0, self, gensymattrib). %a27 firstLineBreakPos
assignment(wrapbox, self, firstlinebreakpos_step1, self, firstlinebreakpos_step0). %a28
assignment(wrapbox, self, firstlinebreakpos_step2, self, firstlinebreakpos_step1). %a29
assignment(wrapbox, self, firstlinebreakpos_stepn, self, firstlinebreakpos_step2). %a30
assignment(wrapbox, selfunroll0, firstlinebreakpos, self, firstlinebreakpos_step0). %a31
assignment(wrapbox, selfunroll1, firstlinebreakpos, self, firstlinebreakpos_step1). %a32
assignment(wrapbox, selfunroll2, firstlinebreakpos, self, firstlinebreakpos_step2). %a33
assignment(wrapbox, selfunrolln, firstlinebreakpos, self, firstlinebreakpos_stepn). %a34
assignment(wrapbox, self, firstlinebreakpos, self, firstlinebreakpos_stepn). %a35
assignment(wrapbox, self, firstchildwidth_step0, self, numchilds_stepn). %a17
assignment(wrapbox, self, firstchildwidth_step0, self, childs_firstchildwidth_step0). %a8
assignment(wrapbox, self, firstchildwidth_step1, self, childs_firstchildwidth_step1). %a9
assignment(wrapbox, self, firstchildwidth_step2, self, childs_firstchildwidth_step2). %a10
assignment(wrapbox, self, firstchildwidth_stepn, self, childs_firstchildwidth_stepn). %a11
assignment(wrapbox, self, firstchildwidth_step0, self, childs_childnum_step0). %a8
assignment(wrapbox, self, firstchildwidth_step1, self, childs_childnum_step1). %a9
assignment(wrapbox, self, firstchildwidth_step2, self, childs_childnum_step2). %a10
assignment(wrapbox, self, firstchildwidth_stepn, self, childs_childnum_stepn). %a11
assignment(wrapbox, self, firstchildwidth_step0, self, gensymattrib). %a27 firstChildWidth
assignment(wrapbox, self, firstchildwidth_step1, self, firstchildwidth_step0). %a28
assignment(wrapbox, self, firstchildwidth_step2, self, firstchildwidth_step1). %a29
assignment(wrapbox, self, firstchildwidth_stepn, self, firstchildwidth_step2). %a30
assignment(wrapbox, selfunroll0, firstchildwidth, self, firstchildwidth_step0). %a31
assignment(wrapbox, selfunroll1, firstchildwidth, self, firstchildwidth_step1). %a32
assignment(wrapbox, selfunroll2, firstchildwidth, self, firstchildwidth_step2). %a33
assignment(wrapbox, selfunrolln, firstchildwidth, self, firstchildwidth_stepn). %a34
assignment(wrapbox, self, firstchildwidth, self, firstchildwidth_stepn). %a35
assignment(wrapbox, self, relrightx_step0, self, relx). %a18
assignment(wrapbox, self, relrightx_step0, self, intrinsprefwidth). %a18
assignment(wrapbox, self, relrightx_step0, self, childs_relrightx_step0). %a8
assignment(wrapbox, self, relrightx_step1, self, childs_relrightx_step1). %a9
assignment(wrapbox, self, relrightx_step2, self, childs_relrightx_step2). %a10
assignment(wrapbox, self, relrightx_stepn, self, childs_relrightx_stepn). %a11
assignment(wrapbox, self, relrightx_step0, self, gensymattrib). %a27 relRightX
assignment(wrapbox, self, relrightx_step1, self, relrightx_step0). %a28
assignment(wrapbox, self, relrightx_step2, self, relrightx_step1). %a29
assignment(wrapbox, self, relrightx_stepn, self, relrightx_step2). %a30
assignment(wrapbox, selfunroll0, relrightx, self, relrightx_step0). %a31
assignment(wrapbox, selfunroll1, relrightx, self, relrightx_step1). %a32
assignment(wrapbox, selfunroll2, relrightx, self, relrightx_step2). %a33
assignment(wrapbox, selfunrolln, relrightx, self, relrightx_stepn). %a34
assignment(wrapbox, self, relrightx, self, relrightx_stepn). %a35
assignment(wrapbox, self, childs_miny_step0, self, miny). %a17
assignment(wrapbox, self, childs_miny_step0, self, gensymattrib). %a27 childs@minY
assignment(wrapbox, self, childs_miny_step1, self, childs_miny_step0). %a28
assignment(wrapbox, self, childs_miny_step2, self, childs_miny_step1). %a29
assignment(wrapbox, self, childs_miny_stepn, self, childs_miny_step2). %a30
assignment(wrapbox, childsunroll0, miny, self, childs_miny_step0). %a31
assignment(wrapbox, childsunroll1, miny, self, childs_miny_step1). %a32
assignment(wrapbox, childsunroll2, miny, self, childs_miny_step2). %a33
assignment(wrapbox, childsunrolln, miny, self, childs_miny_stepn). %a34
assignment(wrapbox, childs, miny, self, childs_miny_stepn). %a35
assignment(wrapbox, self, childs_canvas_step0, self, render). %a18
assignment(wrapbox, self, childs_canvas_step0, self, gensymattrib). %a27 childs@canvas
assignment(wrapbox, self, childs_canvas_step1, self, childs_canvas_step0). %a28
assignment(wrapbox, self, childs_canvas_step2, self, childs_canvas_step1). %a29
assignment(wrapbox, self, childs_canvas_stepn, self, childs_canvas_step2). %a30
assignment(wrapbox, childsunroll0, canvas, self, childs_canvas_step0). %a31
assignment(wrapbox, childsunroll1, canvas, self, childs_canvas_step1). %a32
assignment(wrapbox, childsunroll2, canvas, self, childs_canvas_step2). %a33
assignment(wrapbox, childsunrolln, canvas, self, childs_canvas_stepn). %a34
assignment(wrapbox, childs, canvas, self, childs_canvas_stepn). %a35
assignment(wrapbox, self, childs_rely_step0, self, rely). %a18
assignment(wrapbox, self, childs_rely_step0, self, childs_relx_step0). %a8
assignment(wrapbox, self, childs_rely_step1, self, childs_relx_step1). %a9
assignment(wrapbox, self, childs_rely_step2, self, childs_relx_step2). %a10
assignment(wrapbox, self, childs_rely_stepn, self, childs_relx_stepn). %a11
assignment(wrapbox, self, childs_rely_step0, self, oldlineh). %a17
assignment(wrapbox, self, childs_rely_step1, self, childs_relrighty_step0). %a12
assignment(wrapbox, self, childs_rely_step2, self, childs_relrighty_step1). %a13
assignment(wrapbox, self, childs_rely_stepn, self, childs_relrighty_step2). %a14
assignment(wrapbox, self, childs_rely_step0, self, childs_childnum_step0). %a8
assignment(wrapbox, self, childs_rely_step1, self, childs_childnum_step1). %a9
assignment(wrapbox, self, childs_rely_step2, self, childs_childnum_step2). %a10
assignment(wrapbox, self, childs_rely_stepn, self, childs_childnum_stepn). %a11
assignment(wrapbox, self, childs_rely_step1, self, childs_maxlineh_step0). %a12
assignment(wrapbox, self, childs_rely_step2, self, childs_maxlineh_step1). %a13
assignment(wrapbox, self, childs_rely_stepn, self, childs_maxlineh_step2). %a14
assignment(wrapbox, self, childs_rely_step0, self, rely). %a17
assignment(wrapbox, self, childs_rely_step0, self, gensymattrib). %a27 childs@relY
assignment(wrapbox, self, childs_rely_step1, self, childs_rely_step0). %a28
assignment(wrapbox, self, childs_rely_step2, self, childs_rely_step1). %a29
assignment(wrapbox, self, childs_rely_stepn, self, childs_rely_step2). %a30
assignment(wrapbox, childsunroll0, rely, self, childs_rely_step0). %a31
assignment(wrapbox, childsunroll1, rely, self, childs_rely_step1). %a32
assignment(wrapbox, childsunroll2, rely, self, childs_rely_step2). %a33
assignment(wrapbox, childsunrolln, rely, self, childs_rely_stepn). %a34
assignment(wrapbox, childs, rely, self, childs_rely_stepn). %a35
assignment(wrapbox, self, childs_maxwidth_step0, self, maxwidth). %a17
assignment(wrapbox, self, childs_maxwidth_step0, self, gensymattrib). %a27 childs@maxWidth
assignment(wrapbox, self, childs_maxwidth_step1, self, childs_maxwidth_step0). %a28
assignment(wrapbox, self, childs_maxwidth_step2, self, childs_maxwidth_step1). %a29
assignment(wrapbox, self, childs_maxwidth_stepn, self, childs_maxwidth_step2). %a30
assignment(wrapbox, childsunroll0, maxwidth, self, childs_maxwidth_step0). %a31
assignment(wrapbox, childsunroll1, maxwidth, self, childs_maxwidth_step1). %a32
assignment(wrapbox, childsunroll2, maxwidth, self, childs_maxwidth_step2). %a33
assignment(wrapbox, childsunrolln, maxwidth, self, childs_maxwidth_stepn). %a34
assignment(wrapbox, childs, maxwidth, self, childs_maxwidth_stepn). %a35
assignment(wrapbox, self, childs_minx_step0, self, minx). %a17
assignment(wrapbox, self, childs_minx_step0, self, gensymattrib). %a27 childs@minX
assignment(wrapbox, self, childs_minx_step1, self, childs_minx_step0). %a28
assignment(wrapbox, self, childs_minx_step2, self, childs_minx_step1). %a29
assignment(wrapbox, self, childs_minx_stepn, self, childs_minx_step2). %a30
assignment(wrapbox, childsunroll0, minx, self, childs_minx_step0). %a31
assignment(wrapbox, childsunroll1, minx, self, childs_minx_step1). %a32
assignment(wrapbox, childsunroll2, minx, self, childs_minx_step2). %a33
assignment(wrapbox, childsunrolln, minx, self, childs_minx_stepn). %a34
assignment(wrapbox, childs, minx, self, childs_minx_stepn). %a35
assignment(wrapbox, self, childs_firstchildwidth_step0, self, gensymattrib). %a27 childs@firstChildWidth
assignment(wrapbox, self, childs_firstchildwidth_step1, self, childs_firstchildwidth_step0). %a28
assignment(wrapbox, self, childs_firstchildwidth_step2, self, childs_firstchildwidth_step1). %a29
assignment(wrapbox, self, childs_firstchildwidth_stepn, self, childs_firstchildwidth_step2). %a30
assignment(wrapbox, self, childs_firstchildwidth_step0, childsunroll0, firstchildwidth). %a45
assignment(wrapbox, self, childs_firstchildwidth_step1, childsunroll1, firstchildwidth). %a46
assignment(wrapbox, self, childs_firstchildwidth_step2, childsunroll2, firstchildwidth). %a47
assignment(wrapbox, self, childs_firstchildwidth_stepn, childsunrolln, firstchildwidth). %a48
assignment(wrapbox, self, childs_intrinsminwidth_step0, self, gensymattrib). %a27 childs@intrinsMinWidth
assignment(wrapbox, self, childs_intrinsminwidth_step1, self, childs_intrinsminwidth_step0). %a28
assignment(wrapbox, self, childs_intrinsminwidth_step2, self, childs_intrinsminwidth_step1). %a29
assignment(wrapbox, self, childs_intrinsminwidth_stepn, self, childs_intrinsminwidth_step2). %a30
assignment(wrapbox, self, childs_intrinsminwidth_step0, childsunroll0, intrinsminwidth). %a45
assignment(wrapbox, self, childs_intrinsminwidth_step1, childsunroll1, intrinsminwidth). %a46
assignment(wrapbox, self, childs_intrinsminwidth_step2, childsunroll2, intrinsminwidth). %a47
assignment(wrapbox, self, childs_intrinsminwidth_stepn, childsunrolln, intrinsminwidth). %a48
assignment(wrapbox, self, childs_maxlineh_step0, self, gensymattrib). %a27 childs@maxLineH
assignment(wrapbox, self, childs_maxlineh_step1, self, childs_maxlineh_step0). %a28
assignment(wrapbox, self, childs_maxlineh_step2, self, childs_maxlineh_step1). %a29
assignment(wrapbox, self, childs_maxlineh_stepn, self, childs_maxlineh_step2). %a30
assignment(wrapbox, self, childs_maxlineh_step0, childsunroll0, maxlineh). %a45
assignment(wrapbox, self, childs_maxlineh_step1, childsunroll1, maxlineh). %a46
assignment(wrapbox, self, childs_maxlineh_step2, childsunroll2, maxlineh). %a47
assignment(wrapbox, self, childs_maxlineh_stepn, childsunrolln, maxlineh). %a48
assignment(wrapbox, self, childs_intrinsprefwidth_step0, self, gensymattrib). %a27 childs@intrinsPrefWidth
assignment(wrapbox, self, childs_intrinsprefwidth_step1, self, childs_intrinsprefwidth_step0). %a28
assignment(wrapbox, self, childs_intrinsprefwidth_step2, self, childs_intrinsprefwidth_step1). %a29
assignment(wrapbox, self, childs_intrinsprefwidth_stepn, self, childs_intrinsprefwidth_step2). %a30
assignment(wrapbox, self, childs_intrinsprefwidth_step0, childsunroll0, intrinsprefwidth). %a45
assignment(wrapbox, self, childs_intrinsprefwidth_step1, childsunroll1, intrinsprefwidth). %a46
assignment(wrapbox, self, childs_intrinsprefwidth_step2, childsunroll2, intrinsprefwidth). %a47
assignment(wrapbox, self, childs_intrinsprefwidth_stepn, childsunrolln, intrinsprefwidth). %a48
assignment(wrapbox, self, childs_relrighty_step0, self, gensymattrib). %a27 childs@relRightY
assignment(wrapbox, self, childs_relrighty_step1, self, childs_relrighty_step0). %a28
assignment(wrapbox, self, childs_relrighty_step2, self, childs_relrighty_step1). %a29
assignment(wrapbox, self, childs_relrighty_stepn, self, childs_relrighty_step2). %a30
assignment(wrapbox, self, childs_relrighty_step0, childsunroll0, relrighty). %a45
assignment(wrapbox, self, childs_relrighty_step1, childsunroll1, relrighty). %a46
assignment(wrapbox, self, childs_relrighty_step2, childsunroll2, relrighty). %a47
assignment(wrapbox, self, childs_relrighty_stepn, childsunrolln, relrighty). %a48
assignment(wrapbox, self, childs_relrightx_step0, self, gensymattrib). %a27 childs@relRightX
assignment(wrapbox, self, childs_relrightx_step1, self, childs_relrightx_step0). %a28
assignment(wrapbox, self, childs_relrightx_step2, self, childs_relrightx_step1). %a29
assignment(wrapbox, self, childs_relrightx_stepn, self, childs_relrightx_step2). %a30
assignment(wrapbox, self, childs_relrightx_step0, childsunroll0, relrightx). %a45
assignment(wrapbox, self, childs_relrightx_step1, childsunroll1, relrightx). %a46
assignment(wrapbox, self, childs_relrightx_step2, childsunroll2, relrightx). %a47
assignment(wrapbox, self, childs_relrightx_stepn, childsunrolln, relrightx). %a48
assignment(gensymattrib, gensymattrib, gensymattrib, gensymattrib, gensymattrib) :- false.
classAttribute(wrapbox, absrightx). %s1
classAttribute(wrapbox, absrighty). %s1
classAttribute(wrapbox, firstlineh). %s1
classAttribute(wrapbox, numchilds). %s1
classAttribute(wrapbox, firstlinebreakpos). %s1
classAttribute(wrapbox, childs_maxlineh_step0). %s2 childs@maxlineh
classAttribute(wrapbox, childs_maxlineh_step1). %s3
classAttribute(wrapbox, childs_maxlineh_step2). %s4
classAttribute(wrapbox, childs_maxlineh_stepn). %s5
classAttribute(wrapbox, childs_maxwidth_step0). %s2 childs@maxwidth
classAttribute(wrapbox, childs_maxwidth_step1). %s3
classAttribute(wrapbox, childs_maxwidth_step2). %s4
classAttribute(wrapbox, childs_maxwidth_stepn). %s5
classAttribute(wrapbox, firstlineh_step0). %s2 self@firstlineh
classAttribute(wrapbox, firstlineh_step1). %s3
classAttribute(wrapbox, firstlineh_step2). %s4
classAttribute(wrapbox, firstlineh_stepn). %s5
classAttribute(wrapbox, firstlinebreakpos_step0). %s2 self@firstlinebreakpos
classAttribute(wrapbox, firstlinebreakpos_step1). %s3
classAttribute(wrapbox, firstlinebreakpos_step2). %s4
classAttribute(wrapbox, firstlinebreakpos_stepn). %s5
classAttribute(wrapbox, childs_intrinsminwidth_step0). %s2 childs@intrinsminwidth
classAttribute(wrapbox, childs_intrinsminwidth_step1). %s3
classAttribute(wrapbox, childs_intrinsminwidth_step2). %s4
classAttribute(wrapbox, childs_intrinsminwidth_stepn). %s5
classAttribute(wrapbox, childs_minx_step0). %s2 childs@minx
classAttribute(wrapbox, childs_minx_step1). %s3
classAttribute(wrapbox, childs_minx_step2). %s4
classAttribute(wrapbox, childs_minx_stepn). %s5
classAttribute(wrapbox, maxlineh_step0). %s2 self@maxlineh
classAttribute(wrapbox, maxlineh_step1). %s3
classAttribute(wrapbox, maxlineh_step2). %s4
classAttribute(wrapbox, maxlineh_stepn). %s5
classAttribute(wrapbox, intrinsminwidth_step0). %s2 self@intrinsminwidth
classAttribute(wrapbox, intrinsminwidth_step1). %s3
classAttribute(wrapbox, intrinsminwidth_step2). %s4
classAttribute(wrapbox, intrinsminwidth_stepn). %s5
classAttribute(wrapbox, childs_rightpadding_step0). %s2 childs@rightpadding
classAttribute(wrapbox, childs_rightpadding_step1). %s3
classAttribute(wrapbox, childs_rightpadding_step2). %s4
classAttribute(wrapbox, childs_rightpadding_stepn). %s5
classAttribute(wrapbox, childs_canvas_step0). %s2 childs@canvas
classAttribute(wrapbox, childs_canvas_step1). %s3
classAttribute(wrapbox, childs_canvas_step2). %s4
classAttribute(wrapbox, childs_canvas_stepn). %s5
classAttribute(wrapbox, numchilds_step0). %s2 self@numchilds
classAttribute(wrapbox, numchilds_step1). %s3
classAttribute(wrapbox, numchilds_step2). %s4
classAttribute(wrapbox, numchilds_stepn). %s5
classAttribute(wrapbox, firstchildwidth_step0). %s2 self@firstchildwidth
classAttribute(wrapbox, firstchildwidth_step1). %s3
classAttribute(wrapbox, firstchildwidth_step2). %s4
classAttribute(wrapbox, firstchildwidth_stepn). %s5
classAttribute(wrapbox, childs_relx_step0). %s2 childs@relx
classAttribute(wrapbox, childs_relx_step1). %s3
classAttribute(wrapbox, childs_relx_step2). %s4
classAttribute(wrapbox, childs_relx_stepn). %s5
classAttribute(wrapbox, childs_intrinsprefwidth_step0). %s2 childs@intrinsprefwidth
classAttribute(wrapbox, childs_intrinsprefwidth_step1). %s3
classAttribute(wrapbox, childs_intrinsprefwidth_step2). %s4
classAttribute(wrapbox, childs_intrinsprefwidth_stepn). %s5
classAttribute(wrapbox, childs_rely_step0). %s2 childs@rely
classAttribute(wrapbox, childs_rely_step1). %s3
classAttribute(wrapbox, childs_rely_step2). %s4
classAttribute(wrapbox, childs_rely_stepn). %s5
classAttribute(wrapbox, childs_childnum_step0). %s2 childs@childnum
classAttribute(wrapbox, childs_childnum_step1). %s3
classAttribute(wrapbox, childs_childnum_step2). %s4
classAttribute(wrapbox, childs_childnum_stepn). %s5
classAttribute(wrapbox, childs_oldlineh_step0). %s2 childs@oldlineh
classAttribute(wrapbox, childs_oldlineh_step1). %s3
classAttribute(wrapbox, childs_oldlineh_step2). %s4
classAttribute(wrapbox, childs_oldlineh_stepn). %s5
classAttribute(wrapbox, childs_firstchildwidth_step0). %s2 childs@firstchildwidth
classAttribute(wrapbox, childs_firstchildwidth_step1). %s3
classAttribute(wrapbox, childs_firstchildwidth_step2). %s4
classAttribute(wrapbox, childs_firstchildwidth_stepn). %s5
classAttribute(wrapbox, childs_relrighty_step0). %s2 childs@relrighty
classAttribute(wrapbox, childs_relrighty_step1). %s3
classAttribute(wrapbox, childs_relrighty_step2). %s4
classAttribute(wrapbox, childs_relrighty_stepn). %s5
classAttribute(wrapbox, intrinsprefwidth_step0). %s2 self@intrinsprefwidth
classAttribute(wrapbox, intrinsprefwidth_step1). %s3
classAttribute(wrapbox, intrinsprefwidth_step2). %s4
classAttribute(wrapbox, intrinsprefwidth_stepn). %s5
classAttribute(wrapbox, childs_relrightx_step0). %s2 childs@relrightx
classAttribute(wrapbox, childs_relrightx_step1). %s3
classAttribute(wrapbox, childs_relrightx_step2). %s4
classAttribute(wrapbox, childs_relrightx_stepn). %s5
classAttribute(wrapbox, childs_miny_step0). %s2 childs@miny
classAttribute(wrapbox, childs_miny_step1). %s3
classAttribute(wrapbox, childs_miny_step2). %s4
classAttribute(wrapbox, childs_miny_stepn). %s5
classAttribute(wrapbox, relrighty_step0). %s2 self@relrighty
classAttribute(wrapbox, relrighty_step1). %s3
classAttribute(wrapbox, relrighty_step2). %s4
classAttribute(wrapbox, relrighty_stepn). %s5
classAttribute(wrapbox, relrightx_step0). %s2 self@relrightx
classAttribute(wrapbox, relrightx_step1). %s3
classAttribute(wrapbox, relrightx_step2). %s4
classAttribute(wrapbox, relrightx_stepn). %s5
