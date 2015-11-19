interface(node).
interface(root).
interface(celli).
interface(rowi).
interface(coli).
interface(colsi).
interfaceAttribute(node, relx).
interfaceAttribute(node, canvas).
interfaceAttribute(node, relrightx).
interfaceAttribute(node, relboty).
interfaceAttribute(node, computedwidth).
interfaceAttribute(node, displayborder).
interfaceAttribute(node, render).
interfaceAttribute(node, computedheight).
interfaceAttribute(node, intrinsminwidth).
interfaceAttribute(node, lineh).
interfaceAttribute(node, availablewidth).
interfaceAttribute(node, absy).
interfaceAttribute(node, intrinsprefwidth).
interfaceAttribute(node, absx).
interfaceAttribute(node, intrinsheight).
interfaceAttribute(node, rely).
interfaceAttribute(celli, cellnum).
interfaceAttribute(celli, relx).
interfaceAttribute(celli, canvas).
interfaceAttribute(celli, relboty).
interfaceAttribute(celli, computedwidth).
interfaceAttribute(celli, row).
interfaceAttribute(celli, render).
interfaceAttribute(celli, computedheight).
interfaceAttribute(celli, displayborder).
interfaceAttribute(celli, intrinsminwidth).
interfaceAttribute(celli, availablewidth).
interfaceAttribute(celli, column).
interfaceAttribute(celli, absy).
interfaceAttribute(celli, intrinsprefwidth).
interfaceAttribute(celli, absx).
interfaceAttribute(celli, intrinsheight).
interfaceAttribute(celli, rely).
interfaceAttribute(rowi, cells).
interfaceAttribute(rowi, tablecontentwidth).
interfaceAttribute(rowi, relboty).
interfaceAttribute(rowi, canvas).
interfaceAttribute(rowi, computedwidth).
interfaceAttribute(rowi, colcount).
interfaceAttribute(rowi, render).
interfaceAttribute(rowi, computedheight).
interfaceAttribute(rowi, displayborder).
interfaceAttribute(rowi, intrinscolcount).
interfaceAttribute(rowi, absy).
interfaceAttribute(rowi, colassignment).
interfaceAttribute(rowi, absx).
interfaceAttribute(rowi, intrinsheight).
interfaceAttribute(rowi, rownum).
interfaceAttribute(rowi, rely).
interfaceAttribute(coli, relx).
interfaceAttribute(coli, borderc).
interfaceAttribute(coli, canvas).
interfaceAttribute(coli, relrightx).
interfaceAttribute(coli, computedwidth).
interfaceAttribute(coli, colcount).
interfaceAttribute(coli, tablecontentheight).
interfaceAttribute(coli, displayborder).
interfaceAttribute(coli, render).
interfaceAttribute(coli, colnum).
interfaceAttribute(coli, computedheight).
interfaceAttribute(coli, intrinsminwidth).
interfaceAttribute(coli, cellsready).
interfaceAttribute(coli, availablewidth).
interfaceAttribute(coli, intrinsprefwidth).
interfaceAttribute(coli, absy).
interfaceAttribute(coli, absx).
interfaceAttribute(coli, intrinsheight).
interfaceAttribute(coli, rely).
interfaceAttribute(colsi, intrinsminwidth).
interfaceAttribute(colsi, cellsready).
interfaceAttribute(colsi, availablewidth).
interfaceAttribute(colsi, tablecontentwidth).
interfaceAttribute(colsi, canvas).
interfaceAttribute(colsi, absy).
interfaceAttribute(colsi, intrinsprefwidth).
interfaceAttribute(colsi, absx).
interfaceAttribute(colsi, colcount).
interfaceAttribute(colsi, tablecontentheight).
interfaceAttribute(colsi, displayborder).
class(top, root).
class(leaf, node).
class(wrapbox, node).
class(img, node).
class(cell, celli).
class(row, rowi).
class(col, coli).
class(cols, colsi).
class(tablebox, node).
class(vbox, node).
class(textbox, node).
classChild(top, child, node).
classChild(wrapbox, childsunroll0, node).
classChild(wrapbox, childsunroll1, node).
classChild(wrapbox, childsunroll2, node).
classChild(wrapbox, childsunrolln, node).
classChild(cell, childsunroll0, node).
classChild(cell, childsunroll1, node).
classChild(cell, childsunroll2, node).
classChild(cell, childsunrolln, node).
classChild(row, childsunroll0, celli).
classChild(row, childsunroll1, celli).
classChild(row, childsunroll2, celli).
classChild(row, childsunrolln, celli).
classChild(col, childsunroll0, celli).
classChild(col, childsunroll1, celli).
classChild(col, childsunroll2, celli).
classChild(col, childsunrolln, celli).
classChild(cols, colsunroll0, coli).
classChild(cols, colsunroll1, coli).
classChild(cols, colsunroll2, coli).
classChild(cols, colsunrolln, coli).
classChild(tablebox, columns, colsi).
classChild(tablebox, rowsunroll0, rowi).
classChild(tablebox, rowsunroll1, rowi).
classChild(tablebox, rowsunroll2, rowi).
classChild(tablebox, rowsunrolln, rowi).
classChild(vbox, childsunroll0, node).
classChild(vbox, childsunroll1, node).
classChild(vbox, childsunroll2, node).
classChild(vbox, childsunrolln, node).
classField(gensymattrib, gensymattrib) :- false.
classField(top, gensymattrib).
classField(leaf, gensymattrib).
classField(leaf, borderc).
classField(wrapbox, gensymattrib).
classField(wrapbox, borderc).
classField(img, gensymattrib).
classField(img, imagehandle).
classField(cell, gensymattrib).
classField(cell, borderc).
classField(row, gensymattrib).
classField(row, borderc).
classField(col, gensymattrib).
classField(cols, gensymattrib).
classField(cols, borderc).
classField(tablebox, gensymattrib).
classField(tablebox, borderc).
classField(vbox, gensymattrib).
classField(vbox, borderc).
classField(textbox, gensymattrib).
classField(textbox, text).
classField(textbox, color).
classField(textbox, borderc).
classField(textbox, fontfamily).
classField(textbox, fontsize).
interfaceField(node, height).
interfaceField(node, minwidth).
interfaceField(node, width).
interfaceField(node, maxwidth).
interfaceField(node, display).
interfaceField(node, refname).
interfaceField(node, percentwidth).
interfaceField(root, w).
interfaceField(root, display).
interfaceField(root, refname).
interfaceField(root, h).
interfaceField(root, displayborder).
interfaceField(celli, height).
interfaceField(celli, minwidth).
interfaceField(celli, colspan).
interfaceField(celli, width).
interfaceField(celli, maxwidth).
interfaceField(celli, rowspan).
interfaceField(celli, display).
interfaceField(celli, refname).
interfaceField(celli, percentwidth).
interfaceField(rowi, height).
interfaceField(rowi, display).
interfaceField(rowi, refname).
interfaceField(coli, height).
interfaceField(coli, minwidth).
interfaceField(coli, width).
interfaceField(coli, maxwidth).
interfaceField(coli, display).
interfaceField(coli, refname).
interfaceField(coli, percentwidth).
interfaceField(colsi, display).
interfaceField(colsi, refname).
assignment(top, child, rely, self, gensymattrib). %a40
assignment(top, child, availablewidth, self, gensymattrib). %a40
assignment(top, child, canvas, child, computedwidth). %a42
assignment(top, child, canvas, child, computedheight). %a42
assignment(top, child, absy, self, gensymattrib). %a40
assignment(top, child, displayborder, self, displayborder). %a42
assignment(top, child, relx, self, gensymattrib). %a40
assignment(top, child, lineh, self, gensymattrib). %a40
assignment(top, child, absx, self, gensymattrib). %a40
assignment(top, child, relboty, self, gensymattrib). %a40
assignment(top, child, relrightx, self, gensymattrib). %a40
assignment(leaf, self, computedwidth, self, intrinsminwidth). %a42
assignment(leaf, self, computedwidth, self, availablewidth). %a42
assignment(leaf, self, computedwidth, self, minwidth). %a42
assignment(leaf, self, computedwidth, self, width). %a42
assignment(leaf, self, computedwidth, self, maxwidth). %a42
assignment(leaf, self, computedwidth, self, intrinsprefwidth). %a42
assignment(leaf, self, computedwidth, self, percentwidth). %a42
assignment(leaf, self, computedheight, self, height). %a42
assignment(leaf, self, computedheight, self, intrinsheight). %a42
assignment(leaf, self, intrinsheight, self, gensymattrib). %a40
assignment(leaf, self, intrinsminwidth, self, gensymattrib). %a40
assignment(leaf, self, render, self, borderc). %a42
assignment(leaf, self, render, self, canvas). %a42
assignment(leaf, self, render, self, computedwidth). %a42
assignment(leaf, self, render, self, absy). %a42
assignment(leaf, self, render, self, absx). %a42
assignment(leaf, self, render, self, computedheight). %a42
assignment(leaf, self, render, self, displayborder). %a42
assignment(leaf, self, intrinsprefwidth, self, gensymattrib). %a40
assignment(wrapbox, self, computedwidth, self, intrinsminwidth). %a42
assignment(wrapbox, self, computedwidth, self, availablewidth). %a42
assignment(wrapbox, self, computedwidth, self, minwidth). %a42
assignment(wrapbox, self, computedwidth, self, width). %a42
assignment(wrapbox, self, computedwidth, self, maxwidth). %a42
assignment(wrapbox, self, computedwidth, self, intrinsprefwidth). %a42
assignment(wrapbox, self, computedwidth, self, percentwidth). %a42
assignment(wrapbox, self, computedheight, self, height). %a42
assignment(wrapbox, self, computedheight, self, intrinsheight). %a42
assignment(wrapbox, self, render, self, borderc). %a42
assignment(wrapbox, self, render, self, canvas). %a42
assignment(wrapbox, self, render, self, computedwidth). %a42
assignment(wrapbox, self, render, self, absy). %a42
assignment(wrapbox, self, render, self, absx). %a42
assignment(wrapbox, self, render, self, computedheight). %a42
assignment(wrapbox, self, render, self, displayborder). %a42
assignment(wrapbox, self, childs_relx_step0, self, childs_relrightx_step0). %a8
assignment(wrapbox, self, childs_relx_step1, self, childs_relrightx_step1). %a9
assignment(wrapbox, self, childs_relx_step2, self, childs_relrightx_step2). %a10
assignment(wrapbox, self, childs_relx_stepn, self, childs_relrightx_stepn). %a11
assignment(wrapbox, self, childs_relx_step0, self, childs_computedwidth_step0). %a8
assignment(wrapbox, self, childs_relx_step1, self, childs_computedwidth_step1). %a9
assignment(wrapbox, self, childs_relx_step2, self, childs_computedwidth_step2). %a10
assignment(wrapbox, self, childs_relx_stepn, self, childs_computedwidth_stepn). %a11
assignment(wrapbox, self, childs_relx_step0, self, gensymattrib). %a27 childs@relX
assignment(wrapbox, self, childs_relx_step1, self, childs_relx_step0). %a28
assignment(wrapbox, self, childs_relx_step2, self, childs_relx_step1). %a29
assignment(wrapbox, self, childs_relx_stepn, self, childs_relx_step2). %a30
assignment(wrapbox, childsunroll0, relx, self, childs_relx_step0). %a31
assignment(wrapbox, childsunroll1, relx, self, childs_relx_step1). %a32
assignment(wrapbox, childsunroll2, relx, self, childs_relx_step2). %a33
assignment(wrapbox, childsunrolln, relx, self, childs_relx_stepn). %a34
assignment(wrapbox, childs, relx, self, childs_relx_stepn). %a35
assignment(wrapbox, self, childs_relrightx_step0, self, displayborder). %a18
assignment(wrapbox, self, childs_relrightx_step0, self, computedwidth). %a17
assignment(wrapbox, self, childs_relrightx_step0, self, childs_computedwidth_step0). %a8
assignment(wrapbox, self, childs_relrightx_step1, self, childs_computedwidth_step1). %a9
assignment(wrapbox, self, childs_relrightx_step2, self, childs_computedwidth_step2). %a10
assignment(wrapbox, self, childs_relrightx_stepn, self, childs_computedwidth_stepn). %a11
assignment(wrapbox, self, childs_relrightx_step0, self, displayborder). %a17
assignment(wrapbox, self, childs_relrightx_step0, self, gensymattrib). %a27 childs@relRightX
assignment(wrapbox, self, childs_relrightx_step1, self, childs_relrightx_step0). %a28
assignment(wrapbox, self, childs_relrightx_step2, self, childs_relrightx_step1). %a29
assignment(wrapbox, self, childs_relrightx_stepn, self, childs_relrightx_step2). %a30
assignment(wrapbox, childsunroll0, relrightx, self, childs_relrightx_step0). %a31
assignment(wrapbox, childsunroll1, relrightx, self, childs_relrightx_step1). %a32
assignment(wrapbox, childsunroll2, relrightx, self, childs_relrightx_step2). %a33
assignment(wrapbox, childsunrolln, relrightx, self, childs_relrightx_stepn). %a34
assignment(wrapbox, childs, relrightx, self, childs_relrightx_stepn). %a35
assignment(wrapbox, self, childs_availablewidth_step0, self, computedwidth). %a17
assignment(wrapbox, self, childs_availablewidth_step0, self, displayborder). %a17
assignment(wrapbox, self, childs_availablewidth_step0, self, gensymattrib). %a27 childs@availableWidth
assignment(wrapbox, self, childs_availablewidth_step1, self, childs_availablewidth_step0). %a28
assignment(wrapbox, self, childs_availablewidth_step2, self, childs_availablewidth_step1). %a29
assignment(wrapbox, self, childs_availablewidth_stepn, self, childs_availablewidth_step2). %a30
assignment(wrapbox, childsunroll0, availablewidth, self, childs_availablewidth_step0). %a31
assignment(wrapbox, childsunroll1, availablewidth, self, childs_availablewidth_step1). %a32
assignment(wrapbox, childsunroll2, availablewidth, self, childs_availablewidth_step2). %a33
assignment(wrapbox, childsunrolln, availablewidth, self, childs_availablewidth_stepn). %a34
assignment(wrapbox, childs, availablewidth, self, childs_availablewidth_stepn). %a35
assignment(wrapbox, self, childs_lineh_step0, self, childs_relx_step0). %a8
assignment(wrapbox, self, childs_lineh_step1, self, childs_relx_step1). %a9
assignment(wrapbox, self, childs_lineh_step2, self, childs_relx_step2). %a10
assignment(wrapbox, self, childs_lineh_stepn, self, childs_relx_stepn). %a11
assignment(wrapbox, self, childs_lineh_step0, self, childs_computedheight_step0). %a8
assignment(wrapbox, self, childs_lineh_step1, self, childs_computedheight_step1). %a9
assignment(wrapbox, self, childs_lineh_step2, self, childs_computedheight_step2). %a10
assignment(wrapbox, self, childs_lineh_stepn, self, childs_computedheight_stepn). %a11
assignment(wrapbox, self, childs_lineh_step0, self, displayborder). %a17
assignment(wrapbox, self, childs_lineh_step0, self, gensymattrib). %a27 childs@lineH
assignment(wrapbox, self, childs_lineh_step1, self, childs_lineh_step0). %a28
assignment(wrapbox, self, childs_lineh_step2, self, childs_lineh_step1). %a29
assignment(wrapbox, self, childs_lineh_stepn, self, childs_lineh_step2). %a30
assignment(wrapbox, childsunroll0, lineh, self, childs_lineh_step0). %a31
assignment(wrapbox, childsunroll1, lineh, self, childs_lineh_step1). %a32
assignment(wrapbox, childsunroll2, lineh, self, childs_lineh_step2). %a33
assignment(wrapbox, childsunrolln, lineh, self, childs_lineh_stepn). %a34
assignment(wrapbox, childs, lineh, self, childs_lineh_stepn). %a35
assignment(wrapbox, self, numchilds_step0, self, gensymattrib). %a27 numChilds
assignment(wrapbox, self, numchilds_step1, self, numchilds_step0). %a28
assignment(wrapbox, self, numchilds_step2, self, numchilds_step1). %a29
assignment(wrapbox, self, numchilds_stepn, self, numchilds_step2). %a30
assignment(wrapbox, selfunroll0, numchilds, self, numchilds_step0). %a31
assignment(wrapbox, selfunroll1, numchilds, self, numchilds_step1). %a32
assignment(wrapbox, selfunroll2, numchilds, self, numchilds_step2). %a33
assignment(wrapbox, selfunrolln, numchilds, self, numchilds_stepn). %a34
assignment(wrapbox, self, numchilds, self, numchilds_stepn). %a35
assignment(wrapbox, self, childs_rely_step0, self, displayborder). %a18
assignment(wrapbox, self, childs_rely_step0, self, childs_relx_step0). %a8
assignment(wrapbox, self, childs_rely_step1, self, childs_relx_step1). %a9
assignment(wrapbox, self, childs_rely_step2, self, childs_relx_step2). %a10
assignment(wrapbox, self, childs_rely_stepn, self, childs_relx_stepn). %a11
assignment(wrapbox, self, childs_rely_step1, self, childs_lineh_step0). %a12
assignment(wrapbox, self, childs_rely_step2, self, childs_lineh_step1). %a13
assignment(wrapbox, self, childs_rely_stepn, self, childs_lineh_step2). %a14
assignment(wrapbox, self, childs_rely_step0, self, displayborder). %a17
assignment(wrapbox, self, childs_rely_step0, self, gensymattrib). %a27 childs@relY
assignment(wrapbox, self, childs_rely_step1, self, childs_rely_step0). %a28
assignment(wrapbox, self, childs_rely_step2, self, childs_rely_step1). %a29
assignment(wrapbox, self, childs_rely_stepn, self, childs_rely_step2). %a30
assignment(wrapbox, childsunroll0, rely, self, childs_rely_step0). %a31
assignment(wrapbox, childsunroll1, rely, self, childs_rely_step1). %a32
assignment(wrapbox, childsunroll2, rely, self, childs_rely_step2). %a33
assignment(wrapbox, childsunrolln, rely, self, childs_rely_stepn). %a34
assignment(wrapbox, childs, rely, self, childs_rely_stepn). %a35
assignment(wrapbox, self, childs_absx_step0, self, childs_relx_step0). %a8
assignment(wrapbox, self, childs_absx_step1, self, childs_relx_step1). %a9
assignment(wrapbox, self, childs_absx_step2, self, childs_relx_step2). %a10
assignment(wrapbox, self, childs_absx_stepn, self, childs_relx_stepn). %a11
assignment(wrapbox, self, childs_absx_step0, self, absx). %a17
assignment(wrapbox, self, childs_absx_step0, self, gensymattrib). %a27 childs@absX
assignment(wrapbox, self, childs_absx_step1, self, childs_absx_step0). %a28
assignment(wrapbox, self, childs_absx_step2, self, childs_absx_step1). %a29
assignment(wrapbox, self, childs_absx_stepn, self, childs_absx_step2). %a30
assignment(wrapbox, childsunroll0, absx, self, childs_absx_step0). %a31
assignment(wrapbox, childsunroll1, absx, self, childs_absx_step1). %a32
assignment(wrapbox, childsunroll2, absx, self, childs_absx_step2). %a33
assignment(wrapbox, childsunrolln, absx, self, childs_absx_stepn). %a34
assignment(wrapbox, childs, absx, self, childs_absx_stepn). %a35
assignment(wrapbox, self, childs_relboty_step0, self, childs_computedheight_step0). %a8
assignment(wrapbox, self, childs_relboty_step1, self, childs_computedheight_step1). %a9
assignment(wrapbox, self, childs_relboty_step2, self, childs_computedheight_step2). %a10
assignment(wrapbox, self, childs_relboty_stepn, self, childs_computedheight_stepn). %a11
assignment(wrapbox, self, childs_relboty_step0, self, childs_rely_step0). %a8
assignment(wrapbox, self, childs_relboty_step1, self, childs_rely_step1). %a9
assignment(wrapbox, self, childs_relboty_step2, self, childs_rely_step2). %a10
assignment(wrapbox, self, childs_relboty_stepn, self, childs_rely_stepn). %a11
assignment(wrapbox, self, childs_relboty_step0, self, gensymattrib). %a27 childs@relBotY
assignment(wrapbox, self, childs_relboty_step1, self, childs_relboty_step0). %a28
assignment(wrapbox, self, childs_relboty_step2, self, childs_relboty_step1). %a29
assignment(wrapbox, self, childs_relboty_stepn, self, childs_relboty_step2). %a30
assignment(wrapbox, childsunroll0, relboty, self, childs_relboty_step0). %a31
assignment(wrapbox, childsunroll1, relboty, self, childs_relboty_step1). %a32
assignment(wrapbox, childsunroll2, relboty, self, childs_relboty_step2). %a33
assignment(wrapbox, childsunrolln, relboty, self, childs_relboty_stepn). %a34
assignment(wrapbox, childs, relboty, self, childs_relboty_stepn). %a35
assignment(wrapbox, self, intrinsminwidth_step0, self, numchilds_stepn). %a17
assignment(wrapbox, self, intrinsminwidth_step0, self, displayborder). %a18
assignment(wrapbox, self, intrinsminwidth_step0, self, childs_intrinsminwidth_step0). %a8
assignment(wrapbox, self, intrinsminwidth_step1, self, childs_intrinsminwidth_step1). %a9
assignment(wrapbox, self, intrinsminwidth_step2, self, childs_intrinsminwidth_step2). %a10
assignment(wrapbox, self, intrinsminwidth_stepn, self, childs_intrinsminwidth_stepn). %a11
assignment(wrapbox, self, intrinsminwidth_step0, self, displayborder). %a17
assignment(wrapbox, self, intrinsminwidth_step0, self, gensymattrib). %a27 intrinsMinWidth
assignment(wrapbox, self, intrinsminwidth_step1, self, intrinsminwidth_step0). %a28
assignment(wrapbox, self, intrinsminwidth_step2, self, intrinsminwidth_step1). %a29
assignment(wrapbox, self, intrinsminwidth_stepn, self, intrinsminwidth_step2). %a30
assignment(wrapbox, selfunroll0, intrinsminwidth, self, intrinsminwidth_step0). %a31
assignment(wrapbox, selfunroll1, intrinsminwidth, self, intrinsminwidth_step1). %a32
assignment(wrapbox, selfunroll2, intrinsminwidth, self, intrinsminwidth_step2). %a33
assignment(wrapbox, selfunrolln, intrinsminwidth, self, intrinsminwidth_stepn). %a34
assignment(wrapbox, self, intrinsminwidth, self, intrinsminwidth_stepn). %a35
assignment(wrapbox, self, intrinsheight_step0, self, childs_lineh_step0). %a8
assignment(wrapbox, self, intrinsheight_step1, self, childs_lineh_step1). %a9
assignment(wrapbox, self, intrinsheight_step2, self, childs_lineh_step2). %a10
assignment(wrapbox, self, intrinsheight_stepn, self, childs_lineh_stepn). %a11
assignment(wrapbox, self, intrinsheight_step0, self, childs_rely_step0). %a8
assignment(wrapbox, self, intrinsheight_step1, self, childs_rely_step1). %a9
assignment(wrapbox, self, intrinsheight_step2, self, childs_rely_step2). %a10
assignment(wrapbox, self, intrinsheight_stepn, self, childs_rely_stepn). %a11
assignment(wrapbox, self, intrinsheight_step0, self, displayborder). %a17
assignment(wrapbox, self, intrinsheight_step0, self, gensymattrib). %a27 intrinsHeight
assignment(wrapbox, self, intrinsheight_step1, self, intrinsheight_step0). %a28
assignment(wrapbox, self, intrinsheight_step2, self, intrinsheight_step1). %a29
assignment(wrapbox, self, intrinsheight_stepn, self, intrinsheight_step2). %a30
assignment(wrapbox, selfunroll0, intrinsheight, self, intrinsheight_step0). %a31
assignment(wrapbox, selfunroll1, intrinsheight, self, intrinsheight_step1). %a32
assignment(wrapbox, selfunroll2, intrinsheight, self, intrinsheight_step2). %a33
assignment(wrapbox, selfunrolln, intrinsheight, self, intrinsheight_stepn). %a34
assignment(wrapbox, self, intrinsheight, self, intrinsheight_stepn). %a35
assignment(wrapbox, self, childs_displayborder_step0, self, displayborder). %a17
assignment(wrapbox, self, childs_displayborder_step0, self, gensymattrib). %a27 childs@displayBorder
assignment(wrapbox, self, childs_displayborder_step1, self, childs_displayborder_step0). %a28
assignment(wrapbox, self, childs_displayborder_step2, self, childs_displayborder_step1). %a29
assignment(wrapbox, self, childs_displayborder_stepn, self, childs_displayborder_step2). %a30
assignment(wrapbox, childsunroll0, displayborder, self, childs_displayborder_step0). %a31
assignment(wrapbox, childsunroll1, displayborder, self, childs_displayborder_step1). %a32
assignment(wrapbox, childsunroll2, displayborder, self, childs_displayborder_step2). %a33
assignment(wrapbox, childsunrolln, displayborder, self, childs_displayborder_stepn). %a34
assignment(wrapbox, childs, displayborder, self, childs_displayborder_stepn). %a35
assignment(wrapbox, self, childs_absy_step0, self, absy). %a17
assignment(wrapbox, self, childs_absy_step0, self, childs_rely_step0). %a8
assignment(wrapbox, self, childs_absy_step1, self, childs_rely_step1). %a9
assignment(wrapbox, self, childs_absy_step2, self, childs_rely_step2). %a10
assignment(wrapbox, self, childs_absy_stepn, self, childs_rely_stepn). %a11
assignment(wrapbox, self, childs_absy_step0, self, gensymattrib). %a27 childs@absY
assignment(wrapbox, self, childs_absy_step1, self, childs_absy_step0). %a28
assignment(wrapbox, self, childs_absy_step2, self, childs_absy_step1). %a29
assignment(wrapbox, self, childs_absy_stepn, self, childs_absy_step2). %a30
assignment(wrapbox, childsunroll0, absy, self, childs_absy_step0). %a31
assignment(wrapbox, childsunroll1, absy, self, childs_absy_step1). %a32
assignment(wrapbox, childsunroll2, absy, self, childs_absy_step2). %a33
assignment(wrapbox, childsunrolln, absy, self, childs_absy_stepn). %a34
assignment(wrapbox, childs, absy, self, childs_absy_stepn). %a35
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
assignment(wrapbox, self, intrinsprefwidth_step0, self, numchilds_stepn). %a17
assignment(wrapbox, self, intrinsprefwidth_step0, self, displayborder). %a18
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
assignment(wrapbox, self, childs_intrinsminwidth_step0, self, gensymattrib). %a27 childs@intrinsMinWidth
assignment(wrapbox, self, childs_intrinsminwidth_step1, self, childs_intrinsminwidth_step0). %a28
assignment(wrapbox, self, childs_intrinsminwidth_step2, self, childs_intrinsminwidth_step1). %a29
assignment(wrapbox, self, childs_intrinsminwidth_stepn, self, childs_intrinsminwidth_step2). %a30
assignment(wrapbox, self, childs_intrinsminwidth_step0, childsunroll0, intrinsminwidth). %a45
assignment(wrapbox, self, childs_intrinsminwidth_step1, childsunroll1, intrinsminwidth). %a46
assignment(wrapbox, self, childs_intrinsminwidth_step2, childsunroll2, intrinsminwidth). %a47
assignment(wrapbox, self, childs_intrinsminwidth_stepn, childsunrolln, intrinsminwidth). %a48
assignment(wrapbox, self, childs_intrinsprefwidth_step0, self, gensymattrib). %a27 childs@intrinsPrefWidth
assignment(wrapbox, self, childs_intrinsprefwidth_step1, self, childs_intrinsprefwidth_step0). %a28
assignment(wrapbox, self, childs_intrinsprefwidth_step2, self, childs_intrinsprefwidth_step1). %a29
assignment(wrapbox, self, childs_intrinsprefwidth_stepn, self, childs_intrinsprefwidth_step2). %a30
assignment(wrapbox, self, childs_intrinsprefwidth_step0, childsunroll0, intrinsprefwidth). %a45
assignment(wrapbox, self, childs_intrinsprefwidth_step1, childsunroll1, intrinsprefwidth). %a46
assignment(wrapbox, self, childs_intrinsprefwidth_step2, childsunroll2, intrinsprefwidth). %a47
assignment(wrapbox, self, childs_intrinsprefwidth_stepn, childsunrolln, intrinsprefwidth). %a48
assignment(wrapbox, self, childs_computedwidth_step0, self, gensymattrib). %a27 childs@computedWidth
assignment(wrapbox, self, childs_computedwidth_step1, self, childs_computedwidth_step0). %a28
assignment(wrapbox, self, childs_computedwidth_step2, self, childs_computedwidth_step1). %a29
assignment(wrapbox, self, childs_computedwidth_stepn, self, childs_computedwidth_step2). %a30
assignment(wrapbox, self, childs_computedwidth_step0, childsunroll0, computedwidth). %a45
assignment(wrapbox, self, childs_computedwidth_step1, childsunroll1, computedwidth). %a46
assignment(wrapbox, self, childs_computedwidth_step2, childsunroll2, computedwidth). %a47
assignment(wrapbox, self, childs_computedwidth_stepn, childsunrolln, computedwidth). %a48
assignment(wrapbox, self, childs_computedheight_step0, self, gensymattrib). %a27 childs@computedHeight
assignment(wrapbox, self, childs_computedheight_step1, self, childs_computedheight_step0). %a28
assignment(wrapbox, self, childs_computedheight_step2, self, childs_computedheight_step1). %a29
assignment(wrapbox, self, childs_computedheight_stepn, self, childs_computedheight_step2). %a30
assignment(wrapbox, self, childs_computedheight_step0, childsunroll0, computedheight). %a45
assignment(wrapbox, self, childs_computedheight_step1, childsunroll1, computedheight). %a46
assignment(wrapbox, self, childs_computedheight_step2, childsunroll2, computedheight). %a47
assignment(wrapbox, self, childs_computedheight_stepn, childsunrolln, computedheight). %a48
assignment(img, self, computedwidth, self, intrinsminwidth). %a42
assignment(img, self, computedwidth, self, availablewidth). %a42
assignment(img, self, computedwidth, self, minwidth). %a42
assignment(img, self, computedwidth, self, width). %a42
assignment(img, self, computedwidth, self, maxwidth). %a42
assignment(img, self, computedwidth, self, intrinsprefwidth). %a42
assignment(img, self, computedwidth, self, percentwidth). %a42
assignment(img, self, intrinsprefwidth, self, imagehandle). %a42
assignment(img, self, intrinsheight, self, imagehandle). %a42
assignment(img, self, render, self, imagehandle). %a42
assignment(img, self, render, self, canvas). %a42
assignment(img, self, render, self, absy). %a42
assignment(img, self, render, self, absx). %a42
assignment(img, self, computedheight, self, height). %a42
assignment(img, self, computedheight, self, intrinsheight). %a42
assignment(img, self, intrinsminwidth, self, imagehandle). %a42
assignment(cell, self, render, self, borderc). %a42
assignment(cell, self, render, self, canvas). %a42
assignment(cell, self, render, self, computedwidth). %a42
assignment(cell, self, render, self, absy). %a42
assignment(cell, self, render, self, absx). %a42
assignment(cell, self, render, self, computedheight). %a42
assignment(cell, self, render, self, displayborder). %a42
assignment(cell, self, computedwidth, self, intrinsminwidth). %a42
assignment(cell, self, computedwidth, self, availablewidth). %a42
assignment(cell, self, computedwidth, self, minwidth). %a42
assignment(cell, self, computedwidth, self, width). %a42
assignment(cell, self, computedwidth, self, maxwidth). %a42
assignment(cell, self, computedwidth, self, intrinsprefwidth). %a42
assignment(cell, self, computedwidth, self, percentwidth). %a42
assignment(cell, self, computedheight, self, height). %a42
assignment(cell, self, computedheight, self, intrinsheight). %a42
assignment(cell, self, childs_canvas_step0, self, render). %a18
assignment(cell, self, childs_canvas_step0, self, gensymattrib). %a27 childs@canvas
assignment(cell, self, childs_canvas_step1, self, childs_canvas_step0). %a28
assignment(cell, self, childs_canvas_step2, self, childs_canvas_step1). %a29
assignment(cell, self, childs_canvas_stepn, self, childs_canvas_step2). %a30
assignment(cell, childsunroll0, canvas, self, childs_canvas_step0). %a31
assignment(cell, childsunroll1, canvas, self, childs_canvas_step1). %a32
assignment(cell, childsunroll2, canvas, self, childs_canvas_step2). %a33
assignment(cell, childsunrolln, canvas, self, childs_canvas_stepn). %a34
assignment(cell, childs, canvas, self, childs_canvas_stepn). %a35
assignment(cell, self, intrinsheight_step0, self, childs_lineh_step0). %a8
assignment(cell, self, intrinsheight_step1, self, childs_lineh_step1). %a9
assignment(cell, self, intrinsheight_step2, self, childs_lineh_step2). %a10
assignment(cell, self, intrinsheight_stepn, self, childs_lineh_stepn). %a11
assignment(cell, self, intrinsheight_step0, self, childs_rely_step0). %a8
assignment(cell, self, intrinsheight_step1, self, childs_rely_step1). %a9
assignment(cell, self, intrinsheight_step2, self, childs_rely_step2). %a10
assignment(cell, self, intrinsheight_stepn, self, childs_rely_stepn). %a11
assignment(cell, self, intrinsheight_step0, self, displayborder). %a17
assignment(cell, self, intrinsheight_step0, self, gensymattrib). %a27 intrinsHeight
assignment(cell, self, intrinsheight_step1, self, intrinsheight_step0). %a28
assignment(cell, self, intrinsheight_step2, self, intrinsheight_step1). %a29
assignment(cell, self, intrinsheight_stepn, self, intrinsheight_step2). %a30
assignment(cell, selfunroll0, intrinsheight, self, intrinsheight_step0). %a31
assignment(cell, selfunroll1, intrinsheight, self, intrinsheight_step1). %a32
assignment(cell, selfunroll2, intrinsheight, self, intrinsheight_step2). %a33
assignment(cell, selfunrolln, intrinsheight, self, intrinsheight_stepn). %a34
assignment(cell, self, intrinsheight, self, intrinsheight_stepn). %a35
assignment(cell, self, childs_relx_step0, self, childs_relrightx_step0). %a8
assignment(cell, self, childs_relx_step1, self, childs_relrightx_step1). %a9
assignment(cell, self, childs_relx_step2, self, childs_relrightx_step2). %a10
assignment(cell, self, childs_relx_stepn, self, childs_relrightx_stepn). %a11
assignment(cell, self, childs_relx_step0, self, childs_computedwidth_step0). %a8
assignment(cell, self, childs_relx_step1, self, childs_computedwidth_step1). %a9
assignment(cell, self, childs_relx_step2, self, childs_computedwidth_step2). %a10
assignment(cell, self, childs_relx_stepn, self, childs_computedwidth_stepn). %a11
assignment(cell, self, childs_relx_step0, self, gensymattrib). %a27 childs@relX
assignment(cell, self, childs_relx_step1, self, childs_relx_step0). %a28
assignment(cell, self, childs_relx_step2, self, childs_relx_step1). %a29
assignment(cell, self, childs_relx_stepn, self, childs_relx_step2). %a30
assignment(cell, childsunroll0, relx, self, childs_relx_step0). %a31
assignment(cell, childsunroll1, relx, self, childs_relx_step1). %a32
assignment(cell, childsunroll2, relx, self, childs_relx_step2). %a33
assignment(cell, childsunrolln, relx, self, childs_relx_stepn). %a34
assignment(cell, childs, relx, self, childs_relx_stepn). %a35
assignment(cell, self, childs_lineh_step0, self, childs_relx_step0). %a8
assignment(cell, self, childs_lineh_step1, self, childs_relx_step1). %a9
assignment(cell, self, childs_lineh_step2, self, childs_relx_step2). %a10
assignment(cell, self, childs_lineh_stepn, self, childs_relx_stepn). %a11
assignment(cell, self, childs_lineh_step0, self, childs_computedheight_step0). %a8
assignment(cell, self, childs_lineh_step1, self, childs_computedheight_step1). %a9
assignment(cell, self, childs_lineh_step2, self, childs_computedheight_step2). %a10
assignment(cell, self, childs_lineh_stepn, self, childs_computedheight_stepn). %a11
assignment(cell, self, childs_lineh_step0, self, displayborder). %a17
assignment(cell, self, childs_lineh_step0, self, gensymattrib). %a27 childs@lineH
assignment(cell, self, childs_lineh_step1, self, childs_lineh_step0). %a28
assignment(cell, self, childs_lineh_step2, self, childs_lineh_step1). %a29
assignment(cell, self, childs_lineh_stepn, self, childs_lineh_step2). %a30
assignment(cell, childsunroll0, lineh, self, childs_lineh_step0). %a31
assignment(cell, childsunroll1, lineh, self, childs_lineh_step1). %a32
assignment(cell, childsunroll2, lineh, self, childs_lineh_step2). %a33
assignment(cell, childsunrolln, lineh, self, childs_lineh_stepn). %a34
assignment(cell, childs, lineh, self, childs_lineh_stepn). %a35
assignment(cell, self, childs_relboty_step0, self, childs_computedheight_step0). %a8
assignment(cell, self, childs_relboty_step1, self, childs_computedheight_step1). %a9
assignment(cell, self, childs_relboty_step2, self, childs_computedheight_step2). %a10
assignment(cell, self, childs_relboty_stepn, self, childs_computedheight_stepn). %a11
assignment(cell, self, childs_relboty_step0, self, childs_rely_step0). %a8
assignment(cell, self, childs_relboty_step1, self, childs_rely_step1). %a9
assignment(cell, self, childs_relboty_step2, self, childs_rely_step2). %a10
assignment(cell, self, childs_relboty_stepn, self, childs_rely_stepn). %a11
assignment(cell, self, childs_relboty_step0, self, gensymattrib). %a27 childs@relBotY
assignment(cell, self, childs_relboty_step1, self, childs_relboty_step0). %a28
assignment(cell, self, childs_relboty_step2, self, childs_relboty_step1). %a29
assignment(cell, self, childs_relboty_stepn, self, childs_relboty_step2). %a30
assignment(cell, childsunroll0, relboty, self, childs_relboty_step0). %a31
assignment(cell, childsunroll1, relboty, self, childs_relboty_step1). %a32
assignment(cell, childsunroll2, relboty, self, childs_relboty_step2). %a33
assignment(cell, childsunrolln, relboty, self, childs_relboty_stepn). %a34
assignment(cell, childs, relboty, self, childs_relboty_stepn). %a35
assignment(cell, self, numchilds_step0, self, gensymattrib). %a27 numChilds
assignment(cell, self, numchilds_step1, self, numchilds_step0). %a28
assignment(cell, self, numchilds_step2, self, numchilds_step1). %a29
assignment(cell, self, numchilds_stepn, self, numchilds_step2). %a30
assignment(cell, selfunroll0, numchilds, self, numchilds_step0). %a31
assignment(cell, selfunroll1, numchilds, self, numchilds_step1). %a32
assignment(cell, selfunroll2, numchilds, self, numchilds_step2). %a33
assignment(cell, selfunrolln, numchilds, self, numchilds_stepn). %a34
assignment(cell, self, numchilds, self, numchilds_stepn). %a35
assignment(cell, self, childs_relrightx_step0, self, displayborder). %a18
assignment(cell, self, childs_relrightx_step0, self, computedwidth). %a17
assignment(cell, self, childs_relrightx_step0, self, childs_computedwidth_step0). %a8
assignment(cell, self, childs_relrightx_step1, self, childs_computedwidth_step1). %a9
assignment(cell, self, childs_relrightx_step2, self, childs_computedwidth_step2). %a10
assignment(cell, self, childs_relrightx_stepn, self, childs_computedwidth_stepn). %a11
assignment(cell, self, childs_relrightx_step0, self, displayborder). %a17
assignment(cell, self, childs_relrightx_step0, self, gensymattrib). %a27 childs@relRightX
assignment(cell, self, childs_relrightx_step1, self, childs_relrightx_step0). %a28
assignment(cell, self, childs_relrightx_step2, self, childs_relrightx_step1). %a29
assignment(cell, self, childs_relrightx_stepn, self, childs_relrightx_step2). %a30
assignment(cell, childsunroll0, relrightx, self, childs_relrightx_step0). %a31
assignment(cell, childsunroll1, relrightx, self, childs_relrightx_step1). %a32
assignment(cell, childsunroll2, relrightx, self, childs_relrightx_step2). %a33
assignment(cell, childsunrolln, relrightx, self, childs_relrightx_stepn). %a34
assignment(cell, childs, relrightx, self, childs_relrightx_stepn). %a35
assignment(cell, self, childs_rely_step0, self, displayborder). %a18
assignment(cell, self, childs_rely_step0, self, childs_relx_step0). %a8
assignment(cell, self, childs_rely_step1, self, childs_relx_step1). %a9
assignment(cell, self, childs_rely_step2, self, childs_relx_step2). %a10
assignment(cell, self, childs_rely_stepn, self, childs_relx_stepn). %a11
assignment(cell, self, childs_rely_step1, self, childs_lineh_step0). %a12
assignment(cell, self, childs_rely_step2, self, childs_lineh_step1). %a13
assignment(cell, self, childs_rely_stepn, self, childs_lineh_step2). %a14
assignment(cell, self, childs_rely_step0, self, displayborder). %a17
assignment(cell, self, childs_rely_step0, self, gensymattrib). %a27 childs@relY
assignment(cell, self, childs_rely_step1, self, childs_rely_step0). %a28
assignment(cell, self, childs_rely_step2, self, childs_rely_step1). %a29
assignment(cell, self, childs_rely_stepn, self, childs_rely_step2). %a30
assignment(cell, childsunroll0, rely, self, childs_rely_step0). %a31
assignment(cell, childsunroll1, rely, self, childs_rely_step1). %a32
assignment(cell, childsunroll2, rely, self, childs_rely_step2). %a33
assignment(cell, childsunrolln, rely, self, childs_rely_stepn). %a34
assignment(cell, childs, rely, self, childs_rely_stepn). %a35
assignment(cell, self, intrinsminwidth_step0, self, numchilds_stepn). %a17
assignment(cell, self, intrinsminwidth_step0, self, displayborder). %a18
assignment(cell, self, intrinsminwidth_step0, self, childs_intrinsminwidth_step0). %a8
assignment(cell, self, intrinsminwidth_step1, self, childs_intrinsminwidth_step1). %a9
assignment(cell, self, intrinsminwidth_step2, self, childs_intrinsminwidth_step2). %a10
assignment(cell, self, intrinsminwidth_stepn, self, childs_intrinsminwidth_stepn). %a11
assignment(cell, self, intrinsminwidth_step0, self, displayborder). %a17
assignment(cell, self, intrinsminwidth_step0, self, gensymattrib). %a27 intrinsMinWidth
assignment(cell, self, intrinsminwidth_step1, self, intrinsminwidth_step0). %a28
assignment(cell, self, intrinsminwidth_step2, self, intrinsminwidth_step1). %a29
assignment(cell, self, intrinsminwidth_stepn, self, intrinsminwidth_step2). %a30
assignment(cell, selfunroll0, intrinsminwidth, self, intrinsminwidth_step0). %a31
assignment(cell, selfunroll1, intrinsminwidth, self, intrinsminwidth_step1). %a32
assignment(cell, selfunroll2, intrinsminwidth, self, intrinsminwidth_step2). %a33
assignment(cell, selfunrolln, intrinsminwidth, self, intrinsminwidth_stepn). %a34
assignment(cell, self, intrinsminwidth, self, intrinsminwidth_stepn). %a35
assignment(cell, self, intrinsprefwidth_step0, self, numchilds_stepn). %a17
assignment(cell, self, intrinsprefwidth_step0, self, displayborder). %a18
assignment(cell, self, intrinsprefwidth_step0, self, childs_intrinsprefwidth_step0). %a8
assignment(cell, self, intrinsprefwidth_step1, self, childs_intrinsprefwidth_step1). %a9
assignment(cell, self, intrinsprefwidth_step2, self, childs_intrinsprefwidth_step2). %a10
assignment(cell, self, intrinsprefwidth_stepn, self, childs_intrinsprefwidth_stepn). %a11
assignment(cell, self, intrinsprefwidth_step0, self, gensymattrib). %a27 intrinsPrefWidth
assignment(cell, self, intrinsprefwidth_step1, self, intrinsprefwidth_step0). %a28
assignment(cell, self, intrinsprefwidth_step2, self, intrinsprefwidth_step1). %a29
assignment(cell, self, intrinsprefwidth_stepn, self, intrinsprefwidth_step2). %a30
assignment(cell, selfunroll0, intrinsprefwidth, self, intrinsprefwidth_step0). %a31
assignment(cell, selfunroll1, intrinsprefwidth, self, intrinsprefwidth_step1). %a32
assignment(cell, selfunroll2, intrinsprefwidth, self, intrinsprefwidth_step2). %a33
assignment(cell, selfunrolln, intrinsprefwidth, self, intrinsprefwidth_stepn). %a34
assignment(cell, self, intrinsprefwidth, self, intrinsprefwidth_stepn). %a35
assignment(cell, self, childs_availablewidth_step0, self, computedwidth). %a17
assignment(cell, self, childs_availablewidth_step0, self, displayborder). %a17
assignment(cell, self, childs_availablewidth_step0, self, gensymattrib). %a27 childs@availableWidth
assignment(cell, self, childs_availablewidth_step1, self, childs_availablewidth_step0). %a28
assignment(cell, self, childs_availablewidth_step2, self, childs_availablewidth_step1). %a29
assignment(cell, self, childs_availablewidth_stepn, self, childs_availablewidth_step2). %a30
assignment(cell, childsunroll0, availablewidth, self, childs_availablewidth_step0). %a31
assignment(cell, childsunroll1, availablewidth, self, childs_availablewidth_step1). %a32
assignment(cell, childsunroll2, availablewidth, self, childs_availablewidth_step2). %a33
assignment(cell, childsunrolln, availablewidth, self, childs_availablewidth_stepn). %a34
assignment(cell, childs, availablewidth, self, childs_availablewidth_stepn). %a35
assignment(cell, self, childs_absx_step0, self, childs_relx_step0). %a8
assignment(cell, self, childs_absx_step1, self, childs_relx_step1). %a9
assignment(cell, self, childs_absx_step2, self, childs_relx_step2). %a10
assignment(cell, self, childs_absx_stepn, self, childs_relx_stepn). %a11
assignment(cell, self, childs_absx_step0, self, absx). %a17
assignment(cell, self, childs_absx_step0, self, gensymattrib). %a27 childs@absX
assignment(cell, self, childs_absx_step1, self, childs_absx_step0). %a28
assignment(cell, self, childs_absx_step2, self, childs_absx_step1). %a29
assignment(cell, self, childs_absx_stepn, self, childs_absx_step2). %a30
assignment(cell, childsunroll0, absx, self, childs_absx_step0). %a31
assignment(cell, childsunroll1, absx, self, childs_absx_step1). %a32
assignment(cell, childsunroll2, absx, self, childs_absx_step2). %a33
assignment(cell, childsunrolln, absx, self, childs_absx_stepn). %a34
assignment(cell, childs, absx, self, childs_absx_stepn). %a35
assignment(cell, self, childs_displayborder_step0, self, displayborder). %a17
assignment(cell, self, childs_displayborder_step0, self, gensymattrib). %a27 childs@displayBorder
assignment(cell, self, childs_displayborder_step1, self, childs_displayborder_step0). %a28
assignment(cell, self, childs_displayborder_step2, self, childs_displayborder_step1). %a29
assignment(cell, self, childs_displayborder_stepn, self, childs_displayborder_step2). %a30
assignment(cell, childsunroll0, displayborder, self, childs_displayborder_step0). %a31
assignment(cell, childsunroll1, displayborder, self, childs_displayborder_step1). %a32
assignment(cell, childsunroll2, displayborder, self, childs_displayborder_step2). %a33
assignment(cell, childsunrolln, displayborder, self, childs_displayborder_stepn). %a34
assignment(cell, childs, displayborder, self, childs_displayborder_stepn). %a35
assignment(cell, self, childs_absy_step0, self, absy). %a17
assignment(cell, self, childs_absy_step0, self, childs_rely_step0). %a8
assignment(cell, self, childs_absy_step1, self, childs_rely_step1). %a9
assignment(cell, self, childs_absy_step2, self, childs_rely_step2). %a10
assignment(cell, self, childs_absy_stepn, self, childs_rely_stepn). %a11
assignment(cell, self, childs_absy_step0, self, gensymattrib). %a27 childs@absY
assignment(cell, self, childs_absy_step1, self, childs_absy_step0). %a28
assignment(cell, self, childs_absy_step2, self, childs_absy_step1). %a29
assignment(cell, self, childs_absy_stepn, self, childs_absy_step2). %a30
assignment(cell, childsunroll0, absy, self, childs_absy_step0). %a31
assignment(cell, childsunroll1, absy, self, childs_absy_step1). %a32
assignment(cell, childsunroll2, absy, self, childs_absy_step2). %a33
assignment(cell, childsunrolln, absy, self, childs_absy_stepn). %a34
assignment(cell, childs, absy, self, childs_absy_stepn). %a35
assignment(cell, self, childs_intrinsminwidth_step0, self, gensymattrib). %a27 childs@intrinsMinWidth
assignment(cell, self, childs_intrinsminwidth_step1, self, childs_intrinsminwidth_step0). %a28
assignment(cell, self, childs_intrinsminwidth_step2, self, childs_intrinsminwidth_step1). %a29
assignment(cell, self, childs_intrinsminwidth_stepn, self, childs_intrinsminwidth_step2). %a30
assignment(cell, self, childs_intrinsminwidth_step0, childsunroll0, intrinsminwidth). %a45
assignment(cell, self, childs_intrinsminwidth_step1, childsunroll1, intrinsminwidth). %a46
assignment(cell, self, childs_intrinsminwidth_step2, childsunroll2, intrinsminwidth). %a47
assignment(cell, self, childs_intrinsminwidth_stepn, childsunrolln, intrinsminwidth). %a48
assignment(cell, self, childs_intrinsprefwidth_step0, self, gensymattrib). %a27 childs@intrinsPrefWidth
assignment(cell, self, childs_intrinsprefwidth_step1, self, childs_intrinsprefwidth_step0). %a28
assignment(cell, self, childs_intrinsprefwidth_step2, self, childs_intrinsprefwidth_step1). %a29
assignment(cell, self, childs_intrinsprefwidth_stepn, self, childs_intrinsprefwidth_step2). %a30
assignment(cell, self, childs_intrinsprefwidth_step0, childsunroll0, intrinsprefwidth). %a45
assignment(cell, self, childs_intrinsprefwidth_step1, childsunroll1, intrinsprefwidth). %a46
assignment(cell, self, childs_intrinsprefwidth_step2, childsunroll2, intrinsprefwidth). %a47
assignment(cell, self, childs_intrinsprefwidth_stepn, childsunrolln, intrinsprefwidth). %a48
assignment(cell, self, childs_computedwidth_step0, self, gensymattrib). %a27 childs@computedWidth
assignment(cell, self, childs_computedwidth_step1, self, childs_computedwidth_step0). %a28
assignment(cell, self, childs_computedwidth_step2, self, childs_computedwidth_step1). %a29
assignment(cell, self, childs_computedwidth_stepn, self, childs_computedwidth_step2). %a30
assignment(cell, self, childs_computedwidth_step0, childsunroll0, computedwidth). %a45
assignment(cell, self, childs_computedwidth_step1, childsunroll1, computedwidth). %a46
assignment(cell, self, childs_computedwidth_step2, childsunroll2, computedwidth). %a47
assignment(cell, self, childs_computedwidth_stepn, childsunrolln, computedwidth). %a48
assignment(cell, self, childs_computedheight_step0, self, gensymattrib). %a27 childs@computedHeight
assignment(cell, self, childs_computedheight_step1, self, childs_computedheight_step0). %a28
assignment(cell, self, childs_computedheight_step2, self, childs_computedheight_step1). %a29
assignment(cell, self, childs_computedheight_stepn, self, childs_computedheight_step2). %a30
assignment(cell, self, childs_computedheight_step0, childsunroll0, computedheight). %a45
assignment(cell, self, childs_computedheight_step1, childsunroll1, computedheight). %a46
assignment(cell, self, childs_computedheight_step2, childsunroll2, computedheight). %a47
assignment(cell, self, childs_computedheight_stepn, childsunrolln, computedheight). %a48
assignment(row, self, computedheight, self, height). %a42
assignment(row, self, computedheight, self, intrinsheight). %a42
assignment(row, self, render, self, tablecontentwidth). %a42
assignment(row, self, render, self, borderc). %a42
assignment(row, self, render, self, canvas). %a42
assignment(row, self, render, self, absy). %a42
assignment(row, self, render, self, absx). %a42
assignment(row, self, render, self, computedheight). %a42
assignment(row, self, render, self, displayborder). %a42
assignment(row, self, childs_row_step0, self, rownum). %a17
assignment(row, self, childs_row_step0, self, gensymattrib). %a27 childs@row
assignment(row, self, childs_row_step1, self, childs_row_step0). %a28
assignment(row, self, childs_row_step2, self, childs_row_step1). %a29
assignment(row, self, childs_row_stepn, self, childs_row_step2). %a30
assignment(row, childsunroll0, row, self, childs_row_step0). %a31
assignment(row, childsunroll1, row, self, childs_row_step1). %a32
assignment(row, childsunroll2, row, self, childs_row_step2). %a33
assignment(row, childsunrolln, row, self, childs_row_stepn). %a34
assignment(row, childs, row, self, childs_row_stepn). %a35
assignment(row, self, childs_relboty_step0, self, childs_computedheight_step0). %a8
assignment(row, self, childs_relboty_step1, self, childs_computedheight_step1). %a9
assignment(row, self, childs_relboty_step2, self, childs_computedheight_step2). %a10
assignment(row, self, childs_relboty_stepn, self, childs_computedheight_stepn). %a11
assignment(row, self, childs_relboty_step0, self, gensymattrib). %a27 childs@relBotY
assignment(row, self, childs_relboty_step1, self, childs_relboty_step0). %a28
assignment(row, self, childs_relboty_step2, self, childs_relboty_step1). %a29
assignment(row, self, childs_relboty_stepn, self, childs_relboty_step2). %a30
assignment(row, childsunroll0, relboty, self, childs_relboty_step0). %a31
assignment(row, childsunroll1, relboty, self, childs_relboty_step1). %a32
assignment(row, childsunroll2, relboty, self, childs_relboty_step2). %a33
assignment(row, childsunrolln, relboty, self, childs_relboty_stepn). %a34
assignment(row, childs, relboty, self, childs_relboty_stepn). %a35
assignment(row, self, intrinscolcount_step0, self, childs_colspan_step0). %a8
assignment(row, self, intrinscolcount_step1, self, childs_colspan_step1). %a9
assignment(row, self, intrinscolcount_step2, self, childs_colspan_step2). %a10
assignment(row, self, intrinscolcount_stepn, self, childs_colspan_stepn). %a11
assignment(row, self, intrinscolcount_step0, self, gensymattrib). %a27 intrinsColCount
assignment(row, self, intrinscolcount_step1, self, intrinscolcount_step0). %a28
assignment(row, self, intrinscolcount_step2, self, intrinscolcount_step1). %a29
assignment(row, self, intrinscolcount_stepn, self, intrinscolcount_step2). %a30
assignment(row, selfunroll0, intrinscolcount, self, intrinscolcount_step0). %a31
assignment(row, selfunroll1, intrinscolcount, self, intrinscolcount_step1). %a32
assignment(row, selfunroll2, intrinscolcount, self, intrinscolcount_step2). %a33
assignment(row, selfunrolln, intrinscolcount, self, intrinscolcount_stepn). %a34
assignment(row, self, intrinscolcount, self, intrinscolcount_stepn). %a35
assignment(row, self, childs_relx_step0, self, gensymattrib). %a27 childs@relX
assignment(row, self, childs_relx_step1, self, childs_relx_step0). %a28
assignment(row, self, childs_relx_step2, self, childs_relx_step1). %a29
assignment(row, self, childs_relx_stepn, self, childs_relx_step2). %a30
assignment(row, childsunroll0, relx, self, childs_relx_step0). %a31
assignment(row, childsunroll1, relx, self, childs_relx_step1). %a32
assignment(row, childsunroll2, relx, self, childs_relx_step2). %a33
assignment(row, childsunrolln, relx, self, childs_relx_stepn). %a34
assignment(row, childs, relx, self, childs_relx_stepn). %a35
assignment(row, self, childs_canvas_step0, self, gensymattrib). %a27 childs@canvas
assignment(row, self, childs_canvas_step1, self, childs_canvas_step0). %a28
assignment(row, self, childs_canvas_step2, self, childs_canvas_step1). %a29
assignment(row, self, childs_canvas_stepn, self, childs_canvas_step2). %a30
assignment(row, childsunroll0, canvas, self, childs_canvas_step0). %a31
assignment(row, childsunroll1, canvas, self, childs_canvas_step1). %a32
assignment(row, childsunroll2, canvas, self, childs_canvas_step2). %a33
assignment(row, childsunrolln, canvas, self, childs_canvas_stepn). %a34
assignment(row, childs, canvas, self, childs_canvas_stepn). %a35
assignment(row, self, childs_rely_step0, self, gensymattrib). %a27 childs@relY
assignment(row, self, childs_rely_step1, self, childs_rely_step0). %a28
assignment(row, self, childs_rely_step2, self, childs_rely_step1). %a29
assignment(row, self, childs_rely_stepn, self, childs_rely_step2). %a30
assignment(row, childsunroll0, rely, self, childs_rely_step0). %a31
assignment(row, childsunroll1, rely, self, childs_rely_step1). %a32
assignment(row, childsunroll2, rely, self, childs_rely_step2). %a33
assignment(row, childsunrolln, rely, self, childs_rely_stepn). %a34
assignment(row, childs, rely, self, childs_rely_stepn). %a35
assignment(row, self, childs_cellnum_step0, self, gensymattrib). %a27 childs@cellNum
assignment(row, self, childs_cellnum_step1, self, childs_cellnum_step0). %a28
assignment(row, self, childs_cellnum_step2, self, childs_cellnum_step1). %a29
assignment(row, self, childs_cellnum_stepn, self, childs_cellnum_step2). %a30
assignment(row, childsunroll0, cellnum, self, childs_cellnum_step0). %a31
assignment(row, childsunroll1, cellnum, self, childs_cellnum_step1). %a32
assignment(row, childsunroll2, cellnum, self, childs_cellnum_step2). %a33
assignment(row, childsunrolln, cellnum, self, childs_cellnum_stepn). %a34
assignment(row, childs, cellnum, self, childs_cellnum_stepn). %a35
assignment(row, self, childs_absy_step0, self, absy). %a17
assignment(row, self, childs_absy_step0, self, childs_rely_step0). %a8
assignment(row, self, childs_absy_step1, self, childs_rely_step1). %a9
assignment(row, self, childs_absy_step2, self, childs_rely_step2). %a10
assignment(row, self, childs_absy_stepn, self, childs_rely_stepn). %a11
assignment(row, self, childs_absy_step0, self, gensymattrib). %a27 childs@absY
assignment(row, self, childs_absy_step1, self, childs_absy_step0). %a28
assignment(row, self, childs_absy_step2, self, childs_absy_step1). %a29
assignment(row, self, childs_absy_stepn, self, childs_absy_step2). %a30
assignment(row, childsunroll0, absy, self, childs_absy_step0). %a31
assignment(row, childsunroll1, absy, self, childs_absy_step1). %a32
assignment(row, childsunroll2, absy, self, childs_absy_step2). %a33
assignment(row, childsunrolln, absy, self, childs_absy_stepn). %a34
assignment(row, childs, absy, self, childs_absy_stepn). %a35
assignment(row, self, childs_canvas_step0, self, render). %a18
assignment(row, self, childs_canvas_step0, self, gensymattrib). %a27 childs@canvas
assignment(row, self, childs_canvas_step1, self, childs_canvas_step0). %a28
assignment(row, self, childs_canvas_step2, self, childs_canvas_step1). %a29
assignment(row, self, childs_canvas_stepn, self, childs_canvas_step2). %a30
assignment(row, childsunroll0, canvas, self, childs_canvas_step0). %a31
assignment(row, childsunroll1, canvas, self, childs_canvas_step1). %a32
assignment(row, childsunroll2, canvas, self, childs_canvas_step2). %a33
assignment(row, childsunrolln, canvas, self, childs_canvas_stepn). %a34
assignment(row, childs, canvas, self, childs_canvas_stepn). %a35
assignment(row, self, cells_step0, self, childs_colspan_step0). %a8
assignment(row, self, cells_step1, self, childs_colspan_step1). %a9
assignment(row, self, cells_step2, self, childs_colspan_step2). %a10
assignment(row, self, cells_stepn, self, childs_colspan_stepn). %a11
assignment(row, self, cells_step0, self, childs_rowspan_step0). %a8
assignment(row, self, cells_step1, self, childs_rowspan_step1). %a9
assignment(row, self, cells_step2, self, childs_rowspan_step2). %a10
assignment(row, self, cells_stepn, self, childs_rowspan_stepn). %a11
assignment(row, self, cells_step0, self, gensymattrib). %a27 cells
assignment(row, self, cells_step1, self, cells_step0). %a28
assignment(row, self, cells_step2, self, cells_step1). %a29
assignment(row, self, cells_stepn, self, cells_step2). %a30
assignment(row, selfunroll0, cells, self, cells_step0). %a31
assignment(row, selfunroll1, cells, self, cells_step1). %a32
assignment(row, selfunroll2, cells, self, cells_step2). %a33
assignment(row, selfunrolln, cells, self, cells_stepn). %a34
assignment(row, self, cells, self, cells_stepn). %a35
assignment(row, self, childs_availablewidth_step0, self, gensymattrib). %a27 childs@availableWidth
assignment(row, self, childs_availablewidth_step1, self, childs_availablewidth_step0). %a28
assignment(row, self, childs_availablewidth_step2, self, childs_availablewidth_step1). %a29
assignment(row, self, childs_availablewidth_stepn, self, childs_availablewidth_step2). %a30
assignment(row, childsunroll0, availablewidth, self, childs_availablewidth_step0). %a31
assignment(row, childsunroll1, availablewidth, self, childs_availablewidth_step1). %a32
assignment(row, childsunroll2, availablewidth, self, childs_availablewidth_step2). %a33
assignment(row, childsunrolln, availablewidth, self, childs_availablewidth_stepn). %a34
assignment(row, childs, availablewidth, self, childs_availablewidth_stepn). %a35
assignment(row, self, childs_column_step0, childs, cellnum). %a17
assignment(row, self, childs_column_step0, self, colassignment). %a17
assignment(row, self, childs_column_step0, self, gensymattrib). %a27 childs@column
assignment(row, self, childs_column_step1, self, childs_column_step0). %a28
assignment(row, self, childs_column_step2, self, childs_column_step1). %a29
assignment(row, self, childs_column_stepn, self, childs_column_step2). %a30
assignment(row, childsunroll0, column, self, childs_column_step0). %a31
assignment(row, childsunroll1, column, self, childs_column_step1). %a32
assignment(row, childsunroll2, column, self, childs_column_step2). %a33
assignment(row, childsunrolln, column, self, childs_column_stepn). %a34
assignment(row, childs, column, self, childs_column_stepn). %a35
assignment(row, self, childs_displayborder_step0, self, displayborder). %a17
assignment(row, self, childs_displayborder_step0, self, gensymattrib). %a27 childs@displayBorder
assignment(row, self, childs_displayborder_step1, self, childs_displayborder_step0). %a28
assignment(row, self, childs_displayborder_step2, self, childs_displayborder_step1). %a29
assignment(row, self, childs_displayborder_stepn, self, childs_displayborder_step2). %a30
assignment(row, childsunroll0, displayborder, self, childs_displayborder_step0). %a31
assignment(row, childsunroll1, displayborder, self, childs_displayborder_step1). %a32
assignment(row, childsunroll2, displayborder, self, childs_displayborder_step2). %a33
assignment(row, childsunrolln, displayborder, self, childs_displayborder_stepn). %a34
assignment(row, childs, displayborder, self, childs_displayborder_stepn). %a35
assignment(row, self, intrinsheight_step0, self, childs_computedheight_step0). %a8
assignment(row, self, intrinsheight_step1, self, childs_computedheight_step1). %a9
assignment(row, self, intrinsheight_step2, self, childs_computedheight_step2). %a10
assignment(row, self, intrinsheight_stepn, self, childs_computedheight_stepn). %a11
assignment(row, self, intrinsheight_step0, self, childs_rowspan_step0). %a8
assignment(row, self, intrinsheight_step1, self, childs_rowspan_step1). %a9
assignment(row, self, intrinsheight_step2, self, childs_rowspan_step2). %a10
assignment(row, self, intrinsheight_stepn, self, childs_rowspan_stepn). %a11
assignment(row, self, intrinsheight_step0, self, gensymattrib). %a27 intrinsHeight
assignment(row, self, intrinsheight_step1, self, intrinsheight_step0). %a28
assignment(row, self, intrinsheight_step2, self, intrinsheight_step1). %a29
assignment(row, self, intrinsheight_stepn, self, intrinsheight_step2). %a30
assignment(row, selfunroll0, intrinsheight, self, intrinsheight_step0). %a31
assignment(row, selfunroll1, intrinsheight, self, intrinsheight_step1). %a32
assignment(row, selfunroll2, intrinsheight, self, intrinsheight_step2). %a33
assignment(row, selfunrolln, intrinsheight, self, intrinsheight_stepn). %a34
assignment(row, self, intrinsheight, self, intrinsheight_stepn). %a35
assignment(row, self, childs_absx_step0, self, gensymattrib). %a27 childs@absX
assignment(row, self, childs_absx_step1, self, childs_absx_step0). %a28
assignment(row, self, childs_absx_step2, self, childs_absx_step1). %a29
assignment(row, self, childs_absx_stepn, self, childs_absx_step2). %a30
assignment(row, childsunroll0, absx, self, childs_absx_step0). %a31
assignment(row, childsunroll1, absx, self, childs_absx_step1). %a32
assignment(row, childsunroll2, absx, self, childs_absx_step2). %a33
assignment(row, childsunrolln, absx, self, childs_absx_stepn). %a34
assignment(row, childs, absx, self, childs_absx_stepn). %a35
assignment(row, self, computedwidth_step0, self, childs_intrinsminwidth_step0). %a8
assignment(row, self, computedwidth_step1, self, childs_intrinsminwidth_step1). %a9
assignment(row, self, computedwidth_step2, self, childs_intrinsminwidth_step2). %a10
assignment(row, self, computedwidth_stepn, self, childs_intrinsminwidth_stepn). %a11
assignment(row, self, computedwidth_step0, self, gensymattrib). %a27 computedWidth
assignment(row, self, computedwidth_step1, self, computedwidth_step0). %a28
assignment(row, self, computedwidth_step2, self, computedwidth_step1). %a29
assignment(row, self, computedwidth_stepn, self, computedwidth_step2). %a30
assignment(row, selfunroll0, computedwidth, self, computedwidth_step0). %a31
assignment(row, selfunroll1, computedwidth, self, computedwidth_step1). %a32
assignment(row, selfunroll2, computedwidth, self, computedwidth_step2). %a33
assignment(row, selfunrolln, computedwidth, self, computedwidth_stepn). %a34
assignment(row, self, computedwidth, self, computedwidth_stepn). %a35
assignment(row, self, childs_colspan_step0, self, gensymattrib). %a27 childs@colSpan
assignment(row, self, childs_colspan_step1, self, childs_colspan_step0). %a28
assignment(row, self, childs_colspan_step2, self, childs_colspan_step1). %a29
assignment(row, self, childs_colspan_stepn, self, childs_colspan_step2). %a30
assignment(row, self, childs_colspan_step0, childsunroll0, colspan). %a45
assignment(row, self, childs_colspan_step1, childsunroll1, colspan). %a46
assignment(row, self, childs_colspan_step2, childsunroll2, colspan). %a47
assignment(row, self, childs_colspan_stepn, childsunrolln, colspan). %a48
assignment(row, self, childs_intrinsminwidth_step0, self, gensymattrib). %a27 childs@intrinsMinWidth
assignment(row, self, childs_intrinsminwidth_step1, self, childs_intrinsminwidth_step0). %a28
assignment(row, self, childs_intrinsminwidth_step2, self, childs_intrinsminwidth_step1). %a29
assignment(row, self, childs_intrinsminwidth_stepn, self, childs_intrinsminwidth_step2). %a30
assignment(row, self, childs_intrinsminwidth_step0, childsunroll0, intrinsminwidth). %a45
assignment(row, self, childs_intrinsminwidth_step1, childsunroll1, intrinsminwidth). %a46
assignment(row, self, childs_intrinsminwidth_step2, childsunroll2, intrinsminwidth). %a47
assignment(row, self, childs_intrinsminwidth_stepn, childsunrolln, intrinsminwidth). %a48
assignment(row, self, childs_rowspan_step0, self, gensymattrib). %a27 childs@rowSpan
assignment(row, self, childs_rowspan_step1, self, childs_rowspan_step0). %a28
assignment(row, self, childs_rowspan_step2, self, childs_rowspan_step1). %a29
assignment(row, self, childs_rowspan_stepn, self, childs_rowspan_step2). %a30
assignment(row, self, childs_rowspan_step0, childsunroll0, rowspan). %a45
assignment(row, self, childs_rowspan_step1, childsunroll1, rowspan). %a46
assignment(row, self, childs_rowspan_step2, childsunroll2, rowspan). %a47
assignment(row, self, childs_rowspan_stepn, childsunrolln, rowspan). %a48
assignment(row, self, childs_computedheight_step0, self, gensymattrib). %a27 childs@computedHeight
assignment(row, self, childs_computedheight_step1, self, childs_computedheight_step0). %a28
assignment(row, self, childs_computedheight_step2, self, childs_computedheight_step1). %a29
assignment(row, self, childs_computedheight_stepn, self, childs_computedheight_step2). %a30
assignment(row, self, childs_computedheight_step0, childsunroll0, computedheight). %a45
assignment(row, self, childs_computedheight_step1, childsunroll1, computedheight). %a46
assignment(row, self, childs_computedheight_step2, childsunroll2, computedheight). %a47
assignment(row, self, childs_computedheight_stepn, childsunrolln, computedheight). %a48
assignment(col, self, computedwidth, self, intrinsminwidth). %a42
assignment(col, self, computedwidth, self, availablewidth). %a42
assignment(col, self, computedwidth, self, minwidth). %a42
assignment(col, self, computedwidth, self, width). %a42
assignment(col, self, computedwidth, self, maxwidth). %a42
assignment(col, self, computedwidth, self, intrinsprefwidth). %a42
assignment(col, self, computedwidth, self, percentwidth). %a42
assignment(col, self, render, self, borderc). %a42
assignment(col, self, render, self, canvas). %a42
assignment(col, self, render, self, computedwidth). %a42
assignment(col, self, render, self, absy). %a42
assignment(col, self, render, self, absx). %a42
assignment(col, self, render, self, tablecontentheight). %a42
assignment(col, self, render, self, displayborder). %a42
assignment(col, self, computedheight, self, height). %a42
assignment(col, self, computedheight, self, intrinsheight). %a42
assignment(col, self, intrinsminwidth_step0, self, cellsready). %a18
assignment(col, self, intrinsminwidth_step0, self, childs_colspan_step0). %a8
assignment(col, self, intrinsminwidth_step1, self, childs_colspan_step1). %a9
assignment(col, self, intrinsminwidth_step2, self, childs_colspan_step2). %a10
assignment(col, self, intrinsminwidth_stepn, self, childs_colspan_stepn). %a11
assignment(col, self, intrinsminwidth_step0, self, childs_intrinsminwidth_step0). %a8
assignment(col, self, intrinsminwidth_step1, self, childs_intrinsminwidth_step1). %a9
assignment(col, self, intrinsminwidth_step2, self, childs_intrinsminwidth_step2). %a10
assignment(col, self, intrinsminwidth_stepn, self, childs_intrinsminwidth_stepn). %a11
assignment(col, self, intrinsminwidth_step0, self, gensymattrib). %a27 intrinsMinWidth
assignment(col, self, intrinsminwidth_step1, self, intrinsminwidth_step0). %a28
assignment(col, self, intrinsminwidth_step2, self, intrinsminwidth_step1). %a29
assignment(col, self, intrinsminwidth_stepn, self, intrinsminwidth_step2). %a30
assignment(col, selfunroll0, intrinsminwidth, self, intrinsminwidth_step0). %a31
assignment(col, selfunroll1, intrinsminwidth, self, intrinsminwidth_step1). %a32
assignment(col, selfunroll2, intrinsminwidth, self, intrinsminwidth_step2). %a33
assignment(col, selfunrolln, intrinsminwidth, self, intrinsminwidth_stepn). %a34
assignment(col, self, intrinsminwidth, self, intrinsminwidth_stepn). %a35
assignment(col, self, childs_absx_step0, self, childs_relx_step0). %a8
assignment(col, self, childs_absx_step1, self, childs_relx_step1). %a9
assignment(col, self, childs_absx_step2, self, childs_relx_step2). %a10
assignment(col, self, childs_absx_stepn, self, childs_relx_stepn). %a11
assignment(col, self, childs_absx_step0, self, absx). %a17
assignment(col, self, childs_absx_step0, self, gensymattrib). %a27 childs@absX
assignment(col, self, childs_absx_step1, self, childs_absx_step0). %a28
assignment(col, self, childs_absx_step2, self, childs_absx_step1). %a29
assignment(col, self, childs_absx_stepn, self, childs_absx_step2). %a30
assignment(col, childsunroll0, absx, self, childs_absx_step0). %a31
assignment(col, childsunroll1, absx, self, childs_absx_step1). %a32
assignment(col, childsunroll2, absx, self, childs_absx_step2). %a33
assignment(col, childsunrolln, absx, self, childs_absx_stepn). %a34
assignment(col, childs, absx, self, childs_absx_stepn). %a35
assignment(col, self, numchilds_step0, self, gensymattrib). %a27 numChilds
assignment(col, self, numchilds_step1, self, numchilds_step0). %a28
assignment(col, self, numchilds_step2, self, numchilds_step1). %a29
assignment(col, self, numchilds_stepn, self, numchilds_step2). %a30
assignment(col, selfunroll0, numchilds, self, numchilds_step0). %a31
assignment(col, selfunroll1, numchilds, self, numchilds_step1). %a32
assignment(col, selfunroll2, numchilds, self, numchilds_step2). %a33
assignment(col, selfunrolln, numchilds, self, numchilds_stepn). %a34
assignment(col, self, numchilds, self, numchilds_stepn). %a35
assignment(col, self, intrinsheight_step0, self, numchilds_stepn). %a17
assignment(col, self, intrinsheight_step0, self, cellsready). %a18
assignment(col, self, intrinsheight_step0, self, childs_computedheight_step0). %a8
assignment(col, self, intrinsheight_step1, self, childs_computedheight_step1). %a9
assignment(col, self, intrinsheight_step2, self, childs_computedheight_step2). %a10
assignment(col, self, intrinsheight_stepn, self, childs_computedheight_stepn). %a11
assignment(col, self, intrinsheight_step0, self, gensymattrib). %a27 intrinsHeight
assignment(col, self, intrinsheight_step1, self, intrinsheight_step0). %a28
assignment(col, self, intrinsheight_step2, self, intrinsheight_step1). %a29
assignment(col, self, intrinsheight_stepn, self, intrinsheight_step2). %a30
assignment(col, selfunroll0, intrinsheight, self, intrinsheight_step0). %a31
assignment(col, selfunroll1, intrinsheight, self, intrinsheight_step1). %a32
assignment(col, selfunroll2, intrinsheight, self, intrinsheight_step2). %a33
assignment(col, selfunrolln, intrinsheight, self, intrinsheight_stepn). %a34
assignment(col, self, intrinsheight, self, intrinsheight_stepn). %a35
assignment(col, self, childs_cellnum_step0, self, gensymattrib). %a27 childs@cellNum
assignment(col, self, childs_cellnum_step1, self, childs_cellnum_step0). %a28
assignment(col, self, childs_cellnum_step2, self, childs_cellnum_step1). %a29
assignment(col, self, childs_cellnum_stepn, self, childs_cellnum_step2). %a30
assignment(col, childsunroll0, cellnum, self, childs_cellnum_step0). %a31
assignment(col, childsunroll1, cellnum, self, childs_cellnum_step1). %a32
assignment(col, childsunroll2, cellnum, self, childs_cellnum_step2). %a33
assignment(col, childsunrolln, cellnum, self, childs_cellnum_stepn). %a34
assignment(col, childs, cellnum, self, childs_cellnum_stepn). %a35
assignment(col, self, childs_column_step0, self, gensymattrib). %a27 childs@column
assignment(col, self, childs_column_step1, self, childs_column_step0). %a28
assignment(col, self, childs_column_step2, self, childs_column_step1). %a29
assignment(col, self, childs_column_stepn, self, childs_column_step2). %a30
assignment(col, childsunroll0, column, self, childs_column_step0). %a31
assignment(col, childsunroll1, column, self, childs_column_step1). %a32
assignment(col, childsunroll2, column, self, childs_column_step2). %a33
assignment(col, childsunrolln, column, self, childs_column_stepn). %a34
assignment(col, childs, column, self, childs_column_stepn). %a35
assignment(col, self, childs_rely_step0, self, gensymattrib). %a27 childs@relY
assignment(col, self, childs_rely_step1, self, childs_rely_step0). %a28
assignment(col, self, childs_rely_step2, self, childs_rely_step1). %a29
assignment(col, self, childs_rely_stepn, self, childs_rely_step2). %a30
assignment(col, childsunroll0, rely, self, childs_rely_step0). %a31
assignment(col, childsunroll1, rely, self, childs_rely_step1). %a32
assignment(col, childsunroll2, rely, self, childs_rely_step2). %a33
assignment(col, childsunrolln, rely, self, childs_rely_stepn). %a34
assignment(col, childs, rely, self, childs_rely_stepn). %a35
assignment(col, self, childs_displayborder_step0, self, displayborder). %a17
assignment(col, self, childs_displayborder_step0, self, gensymattrib). %a27 childs@displayBorder
assignment(col, self, childs_displayborder_step1, self, childs_displayborder_step0). %a28
assignment(col, self, childs_displayborder_step2, self, childs_displayborder_step1). %a29
assignment(col, self, childs_displayborder_stepn, self, childs_displayborder_step2). %a30
assignment(col, childsunroll0, displayborder, self, childs_displayborder_step0). %a31
assignment(col, childsunroll1, displayborder, self, childs_displayborder_step1). %a32
assignment(col, childsunroll2, displayborder, self, childs_displayborder_step2). %a33
assignment(col, childsunrolln, displayborder, self, childs_displayborder_stepn). %a34
assignment(col, childs, displayborder, self, childs_displayborder_stepn). %a35
assignment(col, self, childs_absy_step0, self, gensymattrib). %a27 childs@absY
assignment(col, self, childs_absy_step1, self, childs_absy_step0). %a28
assignment(col, self, childs_absy_step2, self, childs_absy_step1). %a29
assignment(col, self, childs_absy_stepn, self, childs_absy_step2). %a30
assignment(col, childsunroll0, absy, self, childs_absy_step0). %a31
assignment(col, childsunroll1, absy, self, childs_absy_step1). %a32
assignment(col, childsunroll2, absy, self, childs_absy_step2). %a33
assignment(col, childsunrolln, absy, self, childs_absy_stepn). %a34
assignment(col, childs, absy, self, childs_absy_stepn). %a35
assignment(col, self, childs_row_step0, self, gensymattrib). %a27 childs@row
assignment(col, self, childs_row_step1, self, childs_row_step0). %a28
assignment(col, self, childs_row_step2, self, childs_row_step1). %a29
assignment(col, self, childs_row_stepn, self, childs_row_step2). %a30
assignment(col, childsunroll0, row, self, childs_row_step0). %a31
assignment(col, childsunroll1, row, self, childs_row_step1). %a32
assignment(col, childsunroll2, row, self, childs_row_step2). %a33
assignment(col, childsunrolln, row, self, childs_row_stepn). %a34
assignment(col, childs, row, self, childs_row_stepn). %a35
assignment(col, self, childs_availablewidth_step0, self, cellsready). %a17
assignment(col, self, childs_availablewidth_step0, self, computedwidth). %a17
assignment(col, self, childs_availablewidth_step0, self, gensymattrib). %a27 childs@availableWidth
assignment(col, self, childs_availablewidth_step1, self, childs_availablewidth_step0). %a28
assignment(col, self, childs_availablewidth_step2, self, childs_availablewidth_step1). %a29
assignment(col, self, childs_availablewidth_stepn, self, childs_availablewidth_step2). %a30
assignment(col, childsunroll0, availablewidth, self, childs_availablewidth_step0). %a31
assignment(col, childsunroll1, availablewidth, self, childs_availablewidth_step1). %a32
assignment(col, childsunroll2, availablewidth, self, childs_availablewidth_step2). %a33
assignment(col, childsunrolln, availablewidth, self, childs_availablewidth_stepn). %a34
assignment(col, childs, availablewidth, self, childs_availablewidth_stepn). %a35
assignment(col, self, childs_relx_step0, self, cellsready). %a17
assignment(col, self, childs_relx_step0, self, gensymattrib). %a27 childs@relX
assignment(col, self, childs_relx_step1, self, childs_relx_step0). %a28
assignment(col, self, childs_relx_step2, self, childs_relx_step1). %a29
assignment(col, self, childs_relx_stepn, self, childs_relx_step2). %a30
assignment(col, childsunroll0, relx, self, childs_relx_step0). %a31
assignment(col, childsunroll1, relx, self, childs_relx_step1). %a32
assignment(col, childsunroll2, relx, self, childs_relx_step2). %a33
assignment(col, childsunrolln, relx, self, childs_relx_stepn). %a34
assignment(col, childs, relx, self, childs_relx_stepn). %a35
assignment(col, self, intrinsprefwidth_step0, self, cellsready). %a18
assignment(col, self, intrinsprefwidth_step0, self, childs_colspan_step0). %a8
assignment(col, self, intrinsprefwidth_step1, self, childs_colspan_step1). %a9
assignment(col, self, intrinsprefwidth_step2, self, childs_colspan_step2). %a10
assignment(col, self, intrinsprefwidth_stepn, self, childs_colspan_stepn). %a11
assignment(col, self, intrinsprefwidth_step0, self, childs_intrinsprefwidth_step0). %a8
assignment(col, self, intrinsprefwidth_step1, self, childs_intrinsprefwidth_step1). %a9
assignment(col, self, intrinsprefwidth_step2, self, childs_intrinsprefwidth_step2). %a10
assignment(col, self, intrinsprefwidth_stepn, self, childs_intrinsprefwidth_stepn). %a11
assignment(col, self, intrinsprefwidth_step0, self, gensymattrib). %a27 intrinsPrefWidth
assignment(col, self, intrinsprefwidth_step1, self, intrinsprefwidth_step0). %a28
assignment(col, self, intrinsprefwidth_step2, self, intrinsprefwidth_step1). %a29
assignment(col, self, intrinsprefwidth_stepn, self, intrinsprefwidth_step2). %a30
assignment(col, selfunroll0, intrinsprefwidth, self, intrinsprefwidth_step0). %a31
assignment(col, selfunroll1, intrinsprefwidth, self, intrinsprefwidth_step1). %a32
assignment(col, selfunroll2, intrinsprefwidth, self, intrinsprefwidth_step2). %a33
assignment(col, selfunrolln, intrinsprefwidth, self, intrinsprefwidth_stepn). %a34
assignment(col, self, intrinsprefwidth, self, intrinsprefwidth_stepn). %a35
assignment(col, self, childs_canvas_step0, self, cellsready). %a18
assignment(col, self, childs_canvas_step0, self, render). %a18
assignment(col, self, childs_canvas_step0, self, gensymattrib). %a27 childs@canvas
assignment(col, self, childs_canvas_step1, self, childs_canvas_step0). %a28
assignment(col, self, childs_canvas_step2, self, childs_canvas_step1). %a29
assignment(col, self, childs_canvas_stepn, self, childs_canvas_step2). %a30
assignment(col, childsunroll0, canvas, self, childs_canvas_step0). %a31
assignment(col, childsunroll1, canvas, self, childs_canvas_step1). %a32
assignment(col, childsunroll2, canvas, self, childs_canvas_step2). %a33
assignment(col, childsunrolln, canvas, self, childs_canvas_stepn). %a34
assignment(col, childs, canvas, self, childs_canvas_stepn). %a35
assignment(col, self, childs_relboty_step0, self, gensymattrib). %a27 childs@relBotY
assignment(col, self, childs_relboty_step1, self, childs_relboty_step0). %a28
assignment(col, self, childs_relboty_step2, self, childs_relboty_step1). %a29
assignment(col, self, childs_relboty_stepn, self, childs_relboty_step2). %a30
assignment(col, childsunroll0, relboty, self, childs_relboty_step0). %a31
assignment(col, childsunroll1, relboty, self, childs_relboty_step1). %a32
assignment(col, childsunroll2, relboty, self, childs_relboty_step2). %a33
assignment(col, childsunrolln, relboty, self, childs_relboty_stepn). %a34
assignment(col, childs, relboty, self, childs_relboty_stepn). %a35
assignment(col, self, childs_colspan_step0, self, gensymattrib). %a27 childs@colSpan
assignment(col, self, childs_colspan_step1, self, childs_colspan_step0). %a28
assignment(col, self, childs_colspan_step2, self, childs_colspan_step1). %a29
assignment(col, self, childs_colspan_stepn, self, childs_colspan_step2). %a30
assignment(col, self, childs_colspan_step0, childsunroll0, colspan). %a45
assignment(col, self, childs_colspan_step1, childsunroll1, colspan). %a46
assignment(col, self, childs_colspan_step2, childsunroll2, colspan). %a47
assignment(col, self, childs_colspan_stepn, childsunrolln, colspan). %a48
assignment(col, self, childs_intrinsminwidth_step0, self, gensymattrib). %a27 childs@intrinsMinWidth
assignment(col, self, childs_intrinsminwidth_step1, self, childs_intrinsminwidth_step0). %a28
assignment(col, self, childs_intrinsminwidth_step2, self, childs_intrinsminwidth_step1). %a29
assignment(col, self, childs_intrinsminwidth_stepn, self, childs_intrinsminwidth_step2). %a30
assignment(col, self, childs_intrinsminwidth_step0, childsunroll0, intrinsminwidth). %a45
assignment(col, self, childs_intrinsminwidth_step1, childsunroll1, intrinsminwidth). %a46
assignment(col, self, childs_intrinsminwidth_step2, childsunroll2, intrinsminwidth). %a47
assignment(col, self, childs_intrinsminwidth_stepn, childsunrolln, intrinsminwidth). %a48
assignment(col, self, childs_intrinsprefwidth_step0, self, gensymattrib). %a27 childs@intrinsPrefWidth
assignment(col, self, childs_intrinsprefwidth_step1, self, childs_intrinsprefwidth_step0). %a28
assignment(col, self, childs_intrinsprefwidth_step2, self, childs_intrinsprefwidth_step1). %a29
assignment(col, self, childs_intrinsprefwidth_stepn, self, childs_intrinsprefwidth_step2). %a30
assignment(col, self, childs_intrinsprefwidth_step0, childsunroll0, intrinsprefwidth). %a45
assignment(col, self, childs_intrinsprefwidth_step1, childsunroll1, intrinsprefwidth). %a46
assignment(col, self, childs_intrinsprefwidth_step2, childsunroll2, intrinsprefwidth). %a47
assignment(col, self, childs_intrinsprefwidth_stepn, childsunrolln, intrinsprefwidth). %a48
assignment(col, self, childs_computedheight_step0, self, gensymattrib). %a27 childs@computedHeight
assignment(col, self, childs_computedheight_step1, self, childs_computedheight_step0). %a28
assignment(col, self, childs_computedheight_step2, self, childs_computedheight_step1). %a29
assignment(col, self, childs_computedheight_stepn, self, childs_computedheight_step2). %a30
assignment(col, self, childs_computedheight_step0, childsunroll0, computedheight). %a45
assignment(col, self, childs_computedheight_step1, childsunroll1, computedheight). %a46
assignment(col, self, childs_computedheight_step2, childsunroll2, computedheight). %a47
assignment(col, self, childs_computedheight_stepn, childsunrolln, computedheight). %a48
assignment(cols, self, cols_colcount_step0, self, colcount). %a17
assignment(cols, self, cols_colcount_step0, self, gensymattrib). %a27 cols@colCount
assignment(cols, self, cols_colcount_step1, self, cols_colcount_step0). %a28
assignment(cols, self, cols_colcount_step2, self, cols_colcount_step1). %a29
assignment(cols, self, cols_colcount_stepn, self, cols_colcount_step2). %a30
assignment(cols, colsunroll0, colcount, self, cols_colcount_step0). %a31
assignment(cols, colsunroll1, colcount, self, cols_colcount_step1). %a32
assignment(cols, colsunroll2, colcount, self, cols_colcount_step2). %a33
assignment(cols, colsunrolln, colcount, self, cols_colcount_stepn). %a34
assignment(cols, cols, colcount, self, cols_colcount_stepn). %a35
assignment(cols, self, intrinsprefwidth_step0, self, cellsready). %a18
assignment(cols, self, intrinsprefwidth_step0, self, cols_intrinsprefwidth_step0). %a8
assignment(cols, self, intrinsprefwidth_step1, self, cols_intrinsprefwidth_step1). %a9
assignment(cols, self, intrinsprefwidth_step2, self, cols_intrinsprefwidth_step2). %a10
assignment(cols, self, intrinsprefwidth_stepn, self, cols_intrinsprefwidth_stepn). %a11
assignment(cols, self, intrinsprefwidth_step0, self, gensymattrib). %a27 intrinsPrefWidth
assignment(cols, self, intrinsprefwidth_step1, self, intrinsprefwidth_step0). %a28
assignment(cols, self, intrinsprefwidth_step2, self, intrinsprefwidth_step1). %a29
assignment(cols, self, intrinsprefwidth_stepn, self, intrinsprefwidth_step2). %a30
assignment(cols, selfunroll0, intrinsprefwidth, self, intrinsprefwidth_step0). %a31
assignment(cols, selfunroll1, intrinsprefwidth, self, intrinsprefwidth_step1). %a32
assignment(cols, selfunroll2, intrinsprefwidth, self, intrinsprefwidth_step2). %a33
assignment(cols, selfunrolln, intrinsprefwidth, self, intrinsprefwidth_stepn). %a34
assignment(cols, self, intrinsprefwidth, self, intrinsprefwidth_stepn). %a35
assignment(cols, self, cols_absx_step0, self, cols_relx_step0). %a8
assignment(cols, self, cols_absx_step1, self, cols_relx_step1). %a9
assignment(cols, self, cols_absx_step2, self, cols_relx_step2). %a10
assignment(cols, self, cols_absx_stepn, self, cols_relx_stepn). %a11
assignment(cols, self, cols_absx_step0, self, absx). %a17
assignment(cols, self, cols_absx_step0, self, gensymattrib). %a27 cols@absX
assignment(cols, self, cols_absx_step1, self, cols_absx_step0). %a28
assignment(cols, self, cols_absx_step2, self, cols_absx_step1). %a29
assignment(cols, self, cols_absx_stepn, self, cols_absx_step2). %a30
assignment(cols, colsunroll0, absx, self, cols_absx_step0). %a31
assignment(cols, colsunroll1, absx, self, cols_absx_step1). %a32
assignment(cols, colsunroll2, absx, self, cols_absx_step2). %a33
assignment(cols, colsunrolln, absx, self, cols_absx_stepn). %a34
assignment(cols, cols, absx, self, cols_absx_stepn). %a35
assignment(cols, self, cols_absy_step0, self, absy). %a17
assignment(cols, self, cols_absy_step0, self, cols_rely_step0). %a8
assignment(cols, self, cols_absy_step1, self, cols_rely_step1). %a9
assignment(cols, self, cols_absy_step2, self, cols_rely_step2). %a10
assignment(cols, self, cols_absy_stepn, self, cols_rely_stepn). %a11
assignment(cols, self, cols_absy_step0, self, gensymattrib). %a27 cols@absY
assignment(cols, self, cols_absy_step1, self, cols_absy_step0). %a28
assignment(cols, self, cols_absy_step2, self, cols_absy_step1). %a29
assignment(cols, self, cols_absy_stepn, self, cols_absy_step2). %a30
assignment(cols, colsunroll0, absy, self, cols_absy_step0). %a31
assignment(cols, colsunroll1, absy, self, cols_absy_step1). %a32
assignment(cols, colsunroll2, absy, self, cols_absy_step2). %a33
assignment(cols, colsunrolln, absy, self, cols_absy_stepn). %a34
assignment(cols, cols, absy, self, cols_absy_stepn). %a35
assignment(cols, self, cols_displayborder_step0, self, cellsready). %a17
assignment(cols, self, cols_displayborder_step0, self, displayborder). %a17
assignment(cols, self, cols_displayborder_step0, self, gensymattrib). %a27 cols@displayBorder
assignment(cols, self, cols_displayborder_step1, self, cols_displayborder_step0). %a28
assignment(cols, self, cols_displayborder_step2, self, cols_displayborder_step1). %a29
assignment(cols, self, cols_displayborder_stepn, self, cols_displayborder_step2). %a30
assignment(cols, colsunroll0, displayborder, self, cols_displayborder_step0). %a31
assignment(cols, colsunroll1, displayborder, self, cols_displayborder_step1). %a32
assignment(cols, colsunroll2, displayborder, self, cols_displayborder_step2). %a33
assignment(cols, colsunrolln, displayborder, self, cols_displayborder_stepn). %a34
assignment(cols, cols, displayborder, self, cols_displayborder_stepn). %a35
assignment(cols, self, cols_availablewidth_step0, self, cellsready). %a17
assignment(cols, self, cols_availablewidth_step0, self, availablewidth). %a17
assignment(cols, self, cols_availablewidth_step0, self, numgreedycols). %a17
assignment(cols, self, cols_availablewidth_step0, self, colcount). %a17
assignment(cols, self, cols_availablewidth_step0, self, cols_intrinsminwidth_step0). %a8
assignment(cols, self, cols_availablewidth_step1, self, cols_intrinsminwidth_step1). %a9
assignment(cols, self, cols_availablewidth_step2, self, cols_intrinsminwidth_step2). %a10
assignment(cols, self, cols_availablewidth_stepn, self, cols_intrinsminwidth_stepn). %a11
assignment(cols, self, cols_availablewidth_step0, self, notusedwidth). %a17
assignment(cols, self, cols_availablewidth_step0, self, gensymattrib). %a27 cols@availableWidth
assignment(cols, self, cols_availablewidth_step1, self, cols_availablewidth_step0). %a28
assignment(cols, self, cols_availablewidth_step2, self, cols_availablewidth_step1). %a29
assignment(cols, self, cols_availablewidth_stepn, self, cols_availablewidth_step2). %a30
assignment(cols, colsunroll0, availablewidth, self, cols_availablewidth_step0). %a31
assignment(cols, colsunroll1, availablewidth, self, cols_availablewidth_step1). %a32
assignment(cols, colsunroll2, availablewidth, self, cols_availablewidth_step2). %a33
assignment(cols, colsunrolln, availablewidth, self, cols_availablewidth_stepn). %a34
assignment(cols, cols, availablewidth, self, cols_availablewidth_stepn). %a35
assignment(cols, self, cols_tablecontentheight_step0, self, tablecontentheight). %a17
assignment(cols, self, cols_tablecontentheight_step0, self, gensymattrib). %a27 cols@tableContentHeight
assignment(cols, self, cols_tablecontentheight_step1, self, cols_tablecontentheight_step0). %a28
assignment(cols, self, cols_tablecontentheight_step2, self, cols_tablecontentheight_step1). %a29
assignment(cols, self, cols_tablecontentheight_stepn, self, cols_tablecontentheight_step2). %a30
assignment(cols, colsunroll0, tablecontentheight, self, cols_tablecontentheight_step0). %a31
assignment(cols, colsunroll1, tablecontentheight, self, cols_tablecontentheight_step1). %a32
assignment(cols, colsunroll2, tablecontentheight, self, cols_tablecontentheight_step2). %a33
assignment(cols, colsunrolln, tablecontentheight, self, cols_tablecontentheight_stepn). %a34
assignment(cols, cols, tablecontentheight, self, cols_tablecontentheight_stepn). %a35
assignment(cols, self, cols_canvas_step0, self, cellsready). %a18
assignment(cols, self, cols_canvas_step0, self, canvas). %a18
assignment(cols, self, cols_canvas_step0, self, gensymattrib). %a27 cols@canvas
assignment(cols, self, cols_canvas_step1, self, cols_canvas_step0). %a28
assignment(cols, self, cols_canvas_step2, self, cols_canvas_step1). %a29
assignment(cols, self, cols_canvas_stepn, self, cols_canvas_step2). %a30
assignment(cols, colsunroll0, canvas, self, cols_canvas_step0). %a31
assignment(cols, colsunroll1, canvas, self, cols_canvas_step1). %a32
assignment(cols, colsunroll2, canvas, self, cols_canvas_step2). %a33
assignment(cols, colsunrolln, canvas, self, cols_canvas_stepn). %a34
assignment(cols, cols, canvas, self, cols_canvas_stepn). %a35
assignment(cols, self, cols_rely_step0, self, cellsready). %a17
assignment(cols, self, cols_rely_step0, self, gensymattrib). %a27 cols@relY
assignment(cols, self, cols_rely_step1, self, cols_rely_step0). %a28
assignment(cols, self, cols_rely_step2, self, cols_rely_step1). %a29
assignment(cols, self, cols_rely_stepn, self, cols_rely_step2). %a30
assignment(cols, colsunroll0, rely, self, cols_rely_step0). %a31
assignment(cols, colsunroll1, rely, self, cols_rely_step1). %a32
assignment(cols, colsunroll2, rely, self, cols_rely_step2). %a33
assignment(cols, colsunrolln, rely, self, cols_rely_stepn). %a34
assignment(cols, cols, rely, self, cols_rely_stepn). %a35
assignment(cols, self, cols_relrightx_step0, self, cellsready). %a18
assignment(cols, self, cols_relrightx_step0, self, cols_computedwidth_step0). %a8
assignment(cols, self, cols_relrightx_step1, self, cols_computedwidth_step1). %a9
assignment(cols, self, cols_relrightx_step2, self, cols_computedwidth_step2). %a10
assignment(cols, self, cols_relrightx_stepn, self, cols_computedwidth_stepn). %a11
assignment(cols, self, cols_relrightx_step0, self, gensymattrib). %a27 cols@relRightX
assignment(cols, self, cols_relrightx_step1, self, cols_relrightx_step0). %a28
assignment(cols, self, cols_relrightx_step2, self, cols_relrightx_step1). %a29
assignment(cols, self, cols_relrightx_stepn, self, cols_relrightx_step2). %a30
assignment(cols, colsunroll0, relrightx, self, cols_relrightx_step0). %a31
assignment(cols, colsunroll1, relrightx, self, cols_relrightx_step1). %a32
assignment(cols, colsunroll2, relrightx, self, cols_relrightx_step2). %a33
assignment(cols, colsunrolln, relrightx, self, cols_relrightx_stepn). %a34
assignment(cols, cols, relrightx, self, cols_relrightx_stepn). %a35
assignment(cols, self, notusedwidth_step0, self, cellsready). %a18
assignment(cols, self, notusedwidth_step0, self, availablewidth). %a18
assignment(cols, self, notusedwidth_step0, self, cols_intrinsprefwidth_step0). %a8
assignment(cols, self, notusedwidth_step1, self, cols_intrinsprefwidth_step1). %a9
assignment(cols, self, notusedwidth_step2, self, cols_intrinsprefwidth_step2). %a10
assignment(cols, self, notusedwidth_stepn, self, cols_intrinsprefwidth_stepn). %a11
assignment(cols, self, notusedwidth_step0, self, availablewidth). %a17
assignment(cols, self, notusedwidth_step0, self, colcount). %a17
assignment(cols, self, notusedwidth_step0, self, cols_intrinsminwidth_step0). %a8
assignment(cols, self, notusedwidth_step1, self, cols_intrinsminwidth_step1). %a9
assignment(cols, self, notusedwidth_step2, self, cols_intrinsminwidth_step2). %a10
assignment(cols, self, notusedwidth_stepn, self, cols_intrinsminwidth_stepn). %a11
assignment(cols, self, notusedwidth_step0, self, gensymattrib). %a27 notUsedWidth
assignment(cols, self, notusedwidth_step1, self, notusedwidth_step0). %a28
assignment(cols, self, notusedwidth_step2, self, notusedwidth_step1). %a29
assignment(cols, self, notusedwidth_stepn, self, notusedwidth_step2). %a30
assignment(cols, selfunroll0, notusedwidth, self, notusedwidth_step0). %a31
assignment(cols, selfunroll1, notusedwidth, self, notusedwidth_step1). %a32
assignment(cols, selfunroll2, notusedwidth, self, notusedwidth_step2). %a33
assignment(cols, selfunrolln, notusedwidth, self, notusedwidth_stepn). %a34
assignment(cols, self, notusedwidth, self, notusedwidth_stepn). %a35
assignment(cols, self, cols_cellsready_step0, self, cellsready). %a17
assignment(cols, self, cols_cellsready_step0, self, gensymattrib). %a27 cols@cellsReady
assignment(cols, self, cols_cellsready_step1, self, cols_cellsready_step0). %a28
assignment(cols, self, cols_cellsready_step2, self, cols_cellsready_step1). %a29
assignment(cols, self, cols_cellsready_stepn, self, cols_cellsready_step2). %a30
assignment(cols, colsunroll0, cellsready, self, cols_cellsready_step0). %a31
assignment(cols, colsunroll1, cellsready, self, cols_cellsready_step1). %a32
assignment(cols, colsunroll2, cellsready, self, cols_cellsready_step2). %a33
assignment(cols, colsunrolln, cellsready, self, cols_cellsready_stepn). %a34
assignment(cols, cols, cellsready, self, cols_cellsready_stepn). %a35
assignment(cols, self, tablecontentwidth_step0, self, cols_computedwidth_step0). %a8
assignment(cols, self, tablecontentwidth_step1, self, cols_computedwidth_step1). %a9
assignment(cols, self, tablecontentwidth_step2, self, cols_computedwidth_step2). %a10
assignment(cols, self, tablecontentwidth_stepn, self, cols_computedwidth_stepn). %a11
assignment(cols, self, tablecontentwidth_step0, self, gensymattrib). %a27 tableContentWidth
assignment(cols, self, tablecontentwidth_step1, self, tablecontentwidth_step0). %a28
assignment(cols, self, tablecontentwidth_step2, self, tablecontentwidth_step1). %a29
assignment(cols, self, tablecontentwidth_stepn, self, tablecontentwidth_step2). %a30
assignment(cols, selfunroll0, tablecontentwidth, self, tablecontentwidth_step0). %a31
assignment(cols, selfunroll1, tablecontentwidth, self, tablecontentwidth_step1). %a32
assignment(cols, selfunroll2, tablecontentwidth, self, tablecontentwidth_step2). %a33
assignment(cols, selfunrolln, tablecontentwidth, self, tablecontentwidth_stepn). %a34
assignment(cols, self, tablecontentwidth, self, tablecontentwidth_stepn). %a35
assignment(cols, self, numgreedycols_step0, self, cellsready). %a18
assignment(cols, self, numgreedycols_step0, self, cols_intrinsprefwidth_step0). %a8
assignment(cols, self, numgreedycols_step1, self, cols_intrinsprefwidth_step1). %a9
assignment(cols, self, numgreedycols_step2, self, cols_intrinsprefwidth_step2). %a10
assignment(cols, self, numgreedycols_stepn, self, cols_intrinsprefwidth_stepn). %a11
assignment(cols, self, numgreedycols_step0, self, availablewidth). %a17
assignment(cols, self, numgreedycols_step0, self, colcount). %a17
assignment(cols, self, numgreedycols_step0, self, cols_intrinsminwidth_step0). %a8
assignment(cols, self, numgreedycols_step1, self, cols_intrinsminwidth_step1). %a9
assignment(cols, self, numgreedycols_step2, self, cols_intrinsminwidth_step2). %a10
assignment(cols, self, numgreedycols_stepn, self, cols_intrinsminwidth_stepn). %a11
assignment(cols, self, numgreedycols_step0, self, gensymattrib). %a27 numGreedyCols
assignment(cols, self, numgreedycols_step1, self, numgreedycols_step0). %a28
assignment(cols, self, numgreedycols_step2, self, numgreedycols_step1). %a29
assignment(cols, self, numgreedycols_stepn, self, numgreedycols_step2). %a30
assignment(cols, selfunroll0, numgreedycols, self, numgreedycols_step0). %a31
assignment(cols, selfunroll1, numgreedycols, self, numgreedycols_step1). %a32
assignment(cols, selfunroll2, numgreedycols, self, numgreedycols_step2). %a33
assignment(cols, selfunrolln, numgreedycols, self, numgreedycols_stepn). %a34
assignment(cols, self, numgreedycols, self, numgreedycols_stepn). %a35
assignment(cols, self, cols_colnum_step0, self, cellsready). %a18
assignment(cols, self, cols_colnum_step0, self, gensymattrib). %a27 cols@colNum
assignment(cols, self, cols_colnum_step1, self, cols_colnum_step0). %a28
assignment(cols, self, cols_colnum_step2, self, cols_colnum_step1). %a29
assignment(cols, self, cols_colnum_stepn, self, cols_colnum_step2). %a30
assignment(cols, colsunroll0, colnum, self, cols_colnum_step0). %a31
assignment(cols, colsunroll1, colnum, self, cols_colnum_step1). %a32
assignment(cols, colsunroll2, colnum, self, cols_colnum_step2). %a33
assignment(cols, colsunrolln, colnum, self, cols_colnum_stepn). %a34
assignment(cols, cols, colnum, self, cols_colnum_stepn). %a35
assignment(cols, self, cols_relx_step0, self, cols_computedwidth_step0). %a8
assignment(cols, self, cols_relx_step1, self, cols_computedwidth_step1). %a9
assignment(cols, self, cols_relx_step2, self, cols_computedwidth_step2). %a10
assignment(cols, self, cols_relx_stepn, self, cols_computedwidth_stepn). %a11
assignment(cols, self, cols_relx_step0, self, cols_relrightx_step0). %a8
assignment(cols, self, cols_relx_step1, self, cols_relrightx_step1). %a9
assignment(cols, self, cols_relx_step2, self, cols_relrightx_step2). %a10
assignment(cols, self, cols_relx_stepn, self, cols_relrightx_stepn). %a11
assignment(cols, self, cols_relx_step0, self, gensymattrib). %a27 cols@relX
assignment(cols, self, cols_relx_step1, self, cols_relx_step0). %a28
assignment(cols, self, cols_relx_step2, self, cols_relx_step1). %a29
assignment(cols, self, cols_relx_stepn, self, cols_relx_step2). %a30
assignment(cols, colsunroll0, relx, self, cols_relx_step0). %a31
assignment(cols, colsunroll1, relx, self, cols_relx_step1). %a32
assignment(cols, colsunroll2, relx, self, cols_relx_step2). %a33
assignment(cols, colsunrolln, relx, self, cols_relx_stepn). %a34
assignment(cols, cols, relx, self, cols_relx_stepn). %a35
assignment(cols, self, cols_borderc_step0, self, cellsready). %a17
assignment(cols, self, cols_borderc_step0, self, borderc). %a17
assignment(cols, self, cols_borderc_step0, self, gensymattrib). %a27 cols@borderc
assignment(cols, self, cols_borderc_step1, self, cols_borderc_step0). %a28
assignment(cols, self, cols_borderc_step2, self, cols_borderc_step1). %a29
assignment(cols, self, cols_borderc_stepn, self, cols_borderc_step2). %a30
assignment(cols, colsunroll0, borderc, self, cols_borderc_step0). %a31
assignment(cols, colsunroll1, borderc, self, cols_borderc_step1). %a32
assignment(cols, colsunroll2, borderc, self, cols_borderc_step2). %a33
assignment(cols, colsunrolln, borderc, self, cols_borderc_stepn). %a34
assignment(cols, cols, borderc, self, cols_borderc_stepn). %a35
assignment(cols, self, intrinsminwidth_step0, self, cellsready). %a18
assignment(cols, self, intrinsminwidth_step0, self, cols_intrinsminwidth_step0). %a8
assignment(cols, self, intrinsminwidth_step1, self, cols_intrinsminwidth_step1). %a9
assignment(cols, self, intrinsminwidth_step2, self, cols_intrinsminwidth_step2). %a10
assignment(cols, self, intrinsminwidth_stepn, self, cols_intrinsminwidth_stepn). %a11
assignment(cols, self, intrinsminwidth_step0, self, gensymattrib). %a27 intrinsMinWidth
assignment(cols, self, intrinsminwidth_step1, self, intrinsminwidth_step0). %a28
assignment(cols, self, intrinsminwidth_step2, self, intrinsminwidth_step1). %a29
assignment(cols, self, intrinsminwidth_stepn, self, intrinsminwidth_step2). %a30
assignment(cols, selfunroll0, intrinsminwidth, self, intrinsminwidth_step0). %a31
assignment(cols, selfunroll1, intrinsminwidth, self, intrinsminwidth_step1). %a32
assignment(cols, selfunroll2, intrinsminwidth, self, intrinsminwidth_step2). %a33
assignment(cols, selfunrolln, intrinsminwidth, self, intrinsminwidth_stepn). %a34
assignment(cols, self, intrinsminwidth, self, intrinsminwidth_stepn). %a35
assignment(cols, self, cols_intrinsminwidth_step0, self, gensymattrib). %a27 cols@intrinsMinWidth
assignment(cols, self, cols_intrinsminwidth_step1, self, cols_intrinsminwidth_step0). %a28
assignment(cols, self, cols_intrinsminwidth_step2, self, cols_intrinsminwidth_step1). %a29
assignment(cols, self, cols_intrinsminwidth_stepn, self, cols_intrinsminwidth_step2). %a30
assignment(cols, self, cols_intrinsminwidth_step0, colsunroll0, intrinsminwidth). %a45
assignment(cols, self, cols_intrinsminwidth_step1, colsunroll1, intrinsminwidth). %a46
assignment(cols, self, cols_intrinsminwidth_step2, colsunroll2, intrinsminwidth). %a47
assignment(cols, self, cols_intrinsminwidth_stepn, colsunrolln, intrinsminwidth). %a48
assignment(cols, self, cols_intrinsprefwidth_step0, self, gensymattrib). %a27 cols@intrinsPrefWidth
assignment(cols, self, cols_intrinsprefwidth_step1, self, cols_intrinsprefwidth_step0). %a28
assignment(cols, self, cols_intrinsprefwidth_step2, self, cols_intrinsprefwidth_step1). %a29
assignment(cols, self, cols_intrinsprefwidth_stepn, self, cols_intrinsprefwidth_step2). %a30
assignment(cols, self, cols_intrinsprefwidth_step0, colsunroll0, intrinsprefwidth). %a45
assignment(cols, self, cols_intrinsprefwidth_step1, colsunroll1, intrinsprefwidth). %a46
assignment(cols, self, cols_intrinsprefwidth_step2, colsunroll2, intrinsprefwidth). %a47
assignment(cols, self, cols_intrinsprefwidth_stepn, colsunrolln, intrinsprefwidth). %a48
assignment(cols, self, cols_computedwidth_step0, self, gensymattrib). %a27 cols@computedWidth
assignment(cols, self, cols_computedwidth_step1, self, cols_computedwidth_step0). %a28
assignment(cols, self, cols_computedwidth_step2, self, cols_computedwidth_step1). %a29
assignment(cols, self, cols_computedwidth_stepn, self, cols_computedwidth_step2). %a30
assignment(cols, self, cols_computedwidth_step0, colsunroll0, computedwidth). %a45
assignment(cols, self, cols_computedwidth_step1, colsunroll1, computedwidth). %a46
assignment(cols, self, cols_computedwidth_step2, colsunroll2, computedwidth). %a47
assignment(cols, self, cols_computedwidth_stepn, colsunrolln, computedwidth). %a48
assignment(tablebox, self, intrinsprefwidth, columns, intrinsprefwidth). %a42
assignment(tablebox, columns, absx, self, absx). %a42
assignment(tablebox, self, intrinsminwidth, columns, intrinsminwidth). %a42
assignment(tablebox, columns, tablecontentheight, self, intrinsheight). %a42
assignment(tablebox, columns, canvas, self, render). %a42
assignment(tablebox, self, computedheight, self, height). %a42
assignment(tablebox, self, computedheight, self, intrinsheight). %a42
assignment(tablebox, columns, absy, self, absy). %a42
assignment(tablebox, columns, colcount, self, colcount). %a42
assignment(tablebox, columns, availablewidth, self, computedwidth). %a42
assignment(tablebox, columns, displayborder, self, displayborder). %a42
assignment(tablebox, self, cellsready, self, rows_colassignment_stepn). %a41
assignment(tablebox, self, render, self, canvas). %a42
assignment(tablebox, columns, cellsready, self, cellsready). %a42
assignment(tablebox, self, computedwidth, self, intrinsminwidth). %a42
assignment(tablebox, self, computedwidth, self, availablewidth). %a42
assignment(tablebox, self, computedwidth, self, minwidth). %a42
assignment(tablebox, self, computedwidth, self, width). %a42
assignment(tablebox, self, computedwidth, self, maxwidth). %a42
assignment(tablebox, self, computedwidth, self, intrinsprefwidth). %a42
assignment(tablebox, self, computedwidth, self, percentwidth). %a42
assignment(tablebox, self, rows_colassignment_step0, self, colcount). %a18
assignment(tablebox, self, rows_colassignment_step0, self, rows_cells_step0). %a8
assignment(tablebox, self, rows_colassignment_step1, self, rows_cells_step1). %a9
assignment(tablebox, self, rows_colassignment_step2, self, rows_cells_step2). %a10
assignment(tablebox, self, rows_colassignment_stepn, self, rows_cells_stepn). %a11
assignment(tablebox, self, rows_colassignment_step0, self, rows_rownum_step0). %a8
assignment(tablebox, self, rows_colassignment_step1, self, rows_rownum_step1). %a9
assignment(tablebox, self, rows_colassignment_step2, self, rows_rownum_step2). %a10
assignment(tablebox, self, rows_colassignment_stepn, self, rows_rownum_stepn). %a11
assignment(tablebox, self, rows_colassignment_step0, self, gensymattrib). %a27 rows@colAssignment
assignment(tablebox, self, rows_colassignment_step1, self, rows_colassignment_step0). %a28
assignment(tablebox, self, rows_colassignment_step2, self, rows_colassignment_step1). %a29
assignment(tablebox, self, rows_colassignment_stepn, self, rows_colassignment_step2). %a30
assignment(tablebox, rowsunroll0, colassignment, self, rows_colassignment_step0). %a31
assignment(tablebox, rowsunroll1, colassignment, self, rows_colassignment_step1). %a32
assignment(tablebox, rowsunroll2, colassignment, self, rows_colassignment_step2). %a33
assignment(tablebox, rowsunrolln, colassignment, self, rows_colassignment_stepn). %a34
assignment(tablebox, rows, colassignment, self, rows_colassignment_stepn). %a35
assignment(tablebox, self, rows_rely_step0, self, rows_computedheight_step0). %a8
assignment(tablebox, self, rows_rely_step1, self, rows_computedheight_step1). %a9
assignment(tablebox, self, rows_rely_step2, self, rows_computedheight_step2). %a10
assignment(tablebox, self, rows_rely_stepn, self, rows_computedheight_stepn). %a11
assignment(tablebox, self, rows_rely_step0, self, rows_relboty_step0). %a8
assignment(tablebox, self, rows_rely_step1, self, rows_relboty_step1). %a9
assignment(tablebox, self, rows_rely_step2, self, rows_relboty_step2). %a10
assignment(tablebox, self, rows_rely_stepn, self, rows_relboty_stepn). %a11
assignment(tablebox, self, rows_rely_step0, self, gensymattrib). %a27 rows@relY
assignment(tablebox, self, rows_rely_step1, self, rows_rely_step0). %a28
assignment(tablebox, self, rows_rely_step2, self, rows_rely_step1). %a29
assignment(tablebox, self, rows_rely_stepn, self, rows_rely_step2). %a30
assignment(tablebox, rowsunroll0, rely, self, rows_rely_step0). %a31
assignment(tablebox, rowsunroll1, rely, self, rows_rely_step1). %a32
assignment(tablebox, rowsunroll2, rely, self, rows_rely_step2). %a33
assignment(tablebox, rowsunrolln, rely, self, rows_rely_stepn). %a34
assignment(tablebox, rows, rely, self, rows_rely_stepn). %a35
assignment(tablebox, self, rows_displayborder_step0, self, displayborder). %a17
assignment(tablebox, self, rows_displayborder_step0, self, gensymattrib). %a27 rows@displayBorder
assignment(tablebox, self, rows_displayborder_step1, self, rows_displayborder_step0). %a28
assignment(tablebox, self, rows_displayborder_step2, self, rows_displayborder_step1). %a29
assignment(tablebox, self, rows_displayborder_stepn, self, rows_displayborder_step2). %a30
assignment(tablebox, rowsunroll0, displayborder, self, rows_displayborder_step0). %a31
assignment(tablebox, rowsunroll1, displayborder, self, rows_displayborder_step1). %a32
assignment(tablebox, rowsunroll2, displayborder, self, rows_displayborder_step2). %a33
assignment(tablebox, rowsunrolln, displayborder, self, rows_displayborder_stepn). %a34
assignment(tablebox, rows, displayborder, self, rows_displayborder_stepn). %a35
assignment(tablebox, self, rows_absx_step0, self, absx). %a17
assignment(tablebox, self, rows_absx_step0, self, gensymattrib). %a27 rows@absX
assignment(tablebox, self, rows_absx_step1, self, rows_absx_step0). %a28
assignment(tablebox, self, rows_absx_step2, self, rows_absx_step1). %a29
assignment(tablebox, self, rows_absx_stepn, self, rows_absx_step2). %a30
assignment(tablebox, rowsunroll0, absx, self, rows_absx_step0). %a31
assignment(tablebox, rowsunroll1, absx, self, rows_absx_step1). %a32
assignment(tablebox, rowsunroll2, absx, self, rows_absx_step2). %a33
assignment(tablebox, rowsunrolln, absx, self, rows_absx_stepn). %a34
assignment(tablebox, rows, absx, self, rows_absx_stepn). %a35
assignment(tablebox, self, rows_canvas_step0, self, render). %a18
assignment(tablebox, self, rows_canvas_step0, self, gensymattrib). %a27 rows@canvas
assignment(tablebox, self, rows_canvas_step1, self, rows_canvas_step0). %a28
assignment(tablebox, self, rows_canvas_step2, self, rows_canvas_step1). %a29
assignment(tablebox, self, rows_canvas_stepn, self, rows_canvas_step2). %a30
assignment(tablebox, rowsunroll0, canvas, self, rows_canvas_step0). %a31
assignment(tablebox, rowsunroll1, canvas, self, rows_canvas_step1). %a32
assignment(tablebox, rowsunroll2, canvas, self, rows_canvas_step2). %a33
assignment(tablebox, rowsunrolln, canvas, self, rows_canvas_stepn). %a34
assignment(tablebox, rows, canvas, self, rows_canvas_stepn). %a35
assignment(tablebox, self, rows_colcount_step0, self, colcount_stepn). %a16
assignment(tablebox, self, rows_colcount_step0, self, gensymattrib). %a27 rows@colCount
assignment(tablebox, self, rows_colcount_step1, self, rows_colcount_step0). %a28
assignment(tablebox, self, rows_colcount_step2, self, rows_colcount_step1). %a29
assignment(tablebox, self, rows_colcount_stepn, self, rows_colcount_step2). %a30
assignment(tablebox, rowsunroll0, colcount, self, rows_colcount_step0). %a31
assignment(tablebox, rowsunroll1, colcount, self, rows_colcount_step1). %a32
assignment(tablebox, rowsunroll2, colcount, self, rows_colcount_step2). %a33
assignment(tablebox, rowsunrolln, colcount, self, rows_colcount_stepn). %a34
assignment(tablebox, rows, colcount, self, rows_colcount_stepn). %a35
assignment(tablebox, self, rows_tablecontentwidth_step0, columns, tablecontentwidth). %a17
assignment(tablebox, self, rows_tablecontentwidth_step0, self, gensymattrib). %a27 rows@tableContentWidth
assignment(tablebox, self, rows_tablecontentwidth_step1, self, rows_tablecontentwidth_step0). %a28
assignment(tablebox, self, rows_tablecontentwidth_step2, self, rows_tablecontentwidth_step1). %a29
assignment(tablebox, self, rows_tablecontentwidth_stepn, self, rows_tablecontentwidth_step2). %a30
assignment(tablebox, rowsunroll0, tablecontentwidth, self, rows_tablecontentwidth_step0). %a31
assignment(tablebox, rowsunroll1, tablecontentwidth, self, rows_tablecontentwidth_step1). %a32
assignment(tablebox, rowsunroll2, tablecontentwidth, self, rows_tablecontentwidth_step2). %a33
assignment(tablebox, rowsunrolln, tablecontentwidth, self, rows_tablecontentwidth_stepn). %a34
assignment(tablebox, rows, tablecontentwidth, self, rows_tablecontentwidth_stepn). %a35
assignment(tablebox, self, intrinsheight_step0, self, rows_computedheight_step0). %a8
assignment(tablebox, self, intrinsheight_step1, self, rows_computedheight_step1). %a9
assignment(tablebox, self, intrinsheight_step2, self, rows_computedheight_step2). %a10
assignment(tablebox, self, intrinsheight_stepn, self, rows_computedheight_stepn). %a11
assignment(tablebox, self, intrinsheight_step0, self, gensymattrib). %a27 intrinsHeight
assignment(tablebox, self, intrinsheight_step1, self, intrinsheight_step0). %a28
assignment(tablebox, self, intrinsheight_step2, self, intrinsheight_step1). %a29
assignment(tablebox, self, intrinsheight_stepn, self, intrinsheight_step2). %a30
assignment(tablebox, selfunroll0, intrinsheight, self, intrinsheight_step0). %a31
assignment(tablebox, selfunroll1, intrinsheight, self, intrinsheight_step1). %a32
assignment(tablebox, selfunroll2, intrinsheight, self, intrinsheight_step2). %a33
assignment(tablebox, selfunrolln, intrinsheight, self, intrinsheight_stepn). %a34
assignment(tablebox, self, intrinsheight, self, intrinsheight_stepn). %a35
assignment(tablebox, self, rows_absy_step0, self, rows_rely_step0). %a8
assignment(tablebox, self, rows_absy_step1, self, rows_rely_step1). %a9
assignment(tablebox, self, rows_absy_step2, self, rows_rely_step2). %a10
assignment(tablebox, self, rows_absy_stepn, self, rows_rely_stepn). %a11
assignment(tablebox, self, rows_absy_step0, self, absy). %a17
assignment(tablebox, self, rows_absy_step0, self, gensymattrib). %a27 rows@absY
assignment(tablebox, self, rows_absy_step1, self, rows_absy_step0). %a28
assignment(tablebox, self, rows_absy_step2, self, rows_absy_step1). %a29
assignment(tablebox, self, rows_absy_stepn, self, rows_absy_step2). %a30
assignment(tablebox, rowsunroll0, absy, self, rows_absy_step0). %a31
assignment(tablebox, rowsunroll1, absy, self, rows_absy_step1). %a32
assignment(tablebox, rowsunroll2, absy, self, rows_absy_step2). %a33
assignment(tablebox, rowsunrolln, absy, self, rows_absy_stepn). %a34
assignment(tablebox, rows, absy, self, rows_absy_stepn). %a35
assignment(tablebox, self, rows_rownum_step0, self, gensymattrib). %a27 rows@rowNum
assignment(tablebox, self, rows_rownum_step1, self, rows_rownum_step0). %a28
assignment(tablebox, self, rows_rownum_step2, self, rows_rownum_step1). %a29
assignment(tablebox, self, rows_rownum_stepn, self, rows_rownum_step2). %a30
assignment(tablebox, rowsunroll0, rownum, self, rows_rownum_step0). %a31
assignment(tablebox, rowsunroll1, rownum, self, rows_rownum_step1). %a32
assignment(tablebox, rowsunroll2, rownum, self, rows_rownum_step2). %a33
assignment(tablebox, rowsunrolln, rownum, self, rows_rownum_stepn). %a34
assignment(tablebox, rows, rownum, self, rows_rownum_stepn). %a35
assignment(tablebox, self, rows_relboty_step0, self, rows_computedheight_step0). %a8
assignment(tablebox, self, rows_relboty_step1, self, rows_computedheight_step1). %a9
assignment(tablebox, self, rows_relboty_step2, self, rows_computedheight_step2). %a10
assignment(tablebox, self, rows_relboty_stepn, self, rows_computedheight_stepn). %a11
assignment(tablebox, self, rows_relboty_step0, self, gensymattrib). %a27 rows@relBotY
assignment(tablebox, self, rows_relboty_step1, self, rows_relboty_step0). %a28
assignment(tablebox, self, rows_relboty_step2, self, rows_relboty_step1). %a29
assignment(tablebox, self, rows_relboty_stepn, self, rows_relboty_step2). %a30
assignment(tablebox, rowsunroll0, relboty, self, rows_relboty_step0). %a31
assignment(tablebox, rowsunroll1, relboty, self, rows_relboty_step1). %a32
assignment(tablebox, rowsunroll2, relboty, self, rows_relboty_step2). %a33
assignment(tablebox, rowsunrolln, relboty, self, rows_relboty_stepn). %a34
assignment(tablebox, rows, relboty, self, rows_relboty_stepn). %a35
assignment(tablebox, self, colcount_step0, self, rows_intrinscolcount_step0). %a8
assignment(tablebox, self, colcount_step1, self, rows_intrinscolcount_step1). %a9
assignment(tablebox, self, colcount_step2, self, rows_intrinscolcount_step2). %a10
assignment(tablebox, self, colcount_stepn, self, rows_intrinscolcount_stepn). %a11
assignment(tablebox, self, colcount_step0, self, gensymattrib). %a27 colCount
assignment(tablebox, self, colcount_step1, self, colcount_step0). %a28
assignment(tablebox, self, colcount_step2, self, colcount_step1). %a29
assignment(tablebox, self, colcount_stepn, self, colcount_step2). %a30
assignment(tablebox, selfunroll0, colcount, self, colcount_step0). %a31
assignment(tablebox, selfunroll1, colcount, self, colcount_step1). %a32
assignment(tablebox, selfunroll2, colcount, self, colcount_step2). %a33
assignment(tablebox, selfunrolln, colcount, self, colcount_stepn). %a34
assignment(tablebox, self, colcount, self, colcount_stepn). %a35
assignment(tablebox, self, rows_cells_step0, self, gensymattrib). %a27 rows@cells
assignment(tablebox, self, rows_cells_step1, self, rows_cells_step0). %a28
assignment(tablebox, self, rows_cells_step2, self, rows_cells_step1). %a29
assignment(tablebox, self, rows_cells_stepn, self, rows_cells_step2). %a30
assignment(tablebox, self, rows_cells_step0, rowsunroll0, cells). %a45
assignment(tablebox, self, rows_cells_step1, rowsunroll1, cells). %a46
assignment(tablebox, self, rows_cells_step2, rowsunroll2, cells). %a47
assignment(tablebox, self, rows_cells_stepn, rowsunrolln, cells). %a48
assignment(tablebox, self, rows_computedheight_step0, self, gensymattrib). %a27 rows@computedHeight
assignment(tablebox, self, rows_computedheight_step1, self, rows_computedheight_step0). %a28
assignment(tablebox, self, rows_computedheight_step2, self, rows_computedheight_step1). %a29
assignment(tablebox, self, rows_computedheight_stepn, self, rows_computedheight_step2). %a30
assignment(tablebox, self, rows_computedheight_step0, rowsunroll0, computedheight). %a45
assignment(tablebox, self, rows_computedheight_step1, rowsunroll1, computedheight). %a46
assignment(tablebox, self, rows_computedheight_step2, rowsunroll2, computedheight). %a47
assignment(tablebox, self, rows_computedheight_stepn, rowsunrolln, computedheight). %a48
assignment(tablebox, self, rows_intrinscolcount_step0, self, gensymattrib). %a27 rows@intrinsColCount
assignment(tablebox, self, rows_intrinscolcount_step1, self, rows_intrinscolcount_step0). %a28
assignment(tablebox, self, rows_intrinscolcount_step2, self, rows_intrinscolcount_step1). %a29
assignment(tablebox, self, rows_intrinscolcount_stepn, self, rows_intrinscolcount_step2). %a30
assignment(tablebox, self, rows_intrinscolcount_step0, rowsunroll0, intrinscolcount). %a45
assignment(tablebox, self, rows_intrinscolcount_step1, rowsunroll1, intrinscolcount). %a46
assignment(tablebox, self, rows_intrinscolcount_step2, rowsunroll2, intrinscolcount). %a47
assignment(tablebox, self, rows_intrinscolcount_stepn, rowsunrolln, intrinscolcount). %a48
assignment(vbox, self, computedheight, self, height). %a42
assignment(vbox, self, computedheight, self, intrinsheight). %a42
assignment(vbox, self, render, self, borderc). %a42
assignment(vbox, self, render, self, canvas). %a42
assignment(vbox, self, render, self, computedwidth). %a42
assignment(vbox, self, render, self, absy). %a42
assignment(vbox, self, render, self, absx). %a42
assignment(vbox, self, render, self, computedheight). %a42
assignment(vbox, self, render, self, displayborder). %a42
assignment(vbox, self, computedwidth, self, intrinsminwidth). %a42
assignment(vbox, self, computedwidth, self, availablewidth). %a42
assignment(vbox, self, computedwidth, self, minwidth). %a42
assignment(vbox, self, computedwidth, self, width). %a42
assignment(vbox, self, computedwidth, self, maxwidth). %a42
assignment(vbox, self, computedwidth, self, intrinsprefwidth). %a42
assignment(vbox, self, computedwidth, self, percentwidth). %a42
assignment(vbox, self, childs_displayborder_step0, self, displayborder). %a17
assignment(vbox, self, childs_displayborder_step0, self, gensymattrib). %a27 childs@displayBorder
assignment(vbox, self, childs_displayborder_step1, self, childs_displayborder_step0). %a28
assignment(vbox, self, childs_displayborder_step2, self, childs_displayborder_step1). %a29
assignment(vbox, self, childs_displayborder_stepn, self, childs_displayborder_step2). %a30
assignment(vbox, childsunroll0, displayborder, self, childs_displayborder_step0). %a31
assignment(vbox, childsunroll1, displayborder, self, childs_displayborder_step1). %a32
assignment(vbox, childsunroll2, displayborder, self, childs_displayborder_step2). %a33
assignment(vbox, childsunrolln, displayborder, self, childs_displayborder_stepn). %a34
assignment(vbox, childs, displayborder, self, childs_displayborder_stepn). %a35
assignment(vbox, self, childs_lineh_step0, self, gensymattrib). %a27 childs@lineH
assignment(vbox, self, childs_lineh_step1, self, childs_lineh_step0). %a28
assignment(vbox, self, childs_lineh_step2, self, childs_lineh_step1). %a29
assignment(vbox, self, childs_lineh_stepn, self, childs_lineh_step2). %a30
assignment(vbox, childsunroll0, lineh, self, childs_lineh_step0). %a31
assignment(vbox, childsunroll1, lineh, self, childs_lineh_step1). %a32
assignment(vbox, childsunroll2, lineh, self, childs_lineh_step2). %a33
assignment(vbox, childsunrolln, lineh, self, childs_lineh_stepn). %a34
assignment(vbox, childs, lineh, self, childs_lineh_stepn). %a35
assignment(vbox, self, childs_relx_step0, self, displayborder). %a17
assignment(vbox, self, childs_relx_step0, self, gensymattrib). %a27 childs@relX
assignment(vbox, self, childs_relx_step1, self, childs_relx_step0). %a28
assignment(vbox, self, childs_relx_step2, self, childs_relx_step1). %a29
assignment(vbox, self, childs_relx_stepn, self, childs_relx_step2). %a30
assignment(vbox, childsunroll0, relx, self, childs_relx_step0). %a31
assignment(vbox, childsunroll1, relx, self, childs_relx_step1). %a32
assignment(vbox, childsunroll2, relx, self, childs_relx_step2). %a33
assignment(vbox, childsunrolln, relx, self, childs_relx_stepn). %a34
assignment(vbox, childs, relx, self, childs_relx_stepn). %a35
assignment(vbox, self, childs_relboty_step0, self, displayborder). %a18
assignment(vbox, self, childs_relboty_step0, self, childs_computedheight_step0). %a8
assignment(vbox, self, childs_relboty_step1, self, childs_computedheight_step1). %a9
assignment(vbox, self, childs_relboty_step2, self, childs_computedheight_step2). %a10
assignment(vbox, self, childs_relboty_stepn, self, childs_computedheight_stepn). %a11
assignment(vbox, self, childs_relboty_step0, self, gensymattrib). %a27 childs@relBotY
assignment(vbox, self, childs_relboty_step1, self, childs_relboty_step0). %a28
assignment(vbox, self, childs_relboty_step2, self, childs_relboty_step1). %a29
assignment(vbox, self, childs_relboty_stepn, self, childs_relboty_step2). %a30
assignment(vbox, childsunroll0, relboty, self, childs_relboty_step0). %a31
assignment(vbox, childsunroll1, relboty, self, childs_relboty_step1). %a32
assignment(vbox, childsunroll2, relboty, self, childs_relboty_step2). %a33
assignment(vbox, childsunrolln, relboty, self, childs_relboty_stepn). %a34
assignment(vbox, childs, relboty, self, childs_relboty_stepn). %a35
assignment(vbox, self, childs_relrightx_step0, self, displayborder). %a18
assignment(vbox, self, childs_relrightx_step0, self, childs_computedwidth_step0). %a8
assignment(vbox, self, childs_relrightx_step1, self, childs_computedwidth_step1). %a9
assignment(vbox, self, childs_relrightx_step2, self, childs_computedwidth_step2). %a10
assignment(vbox, self, childs_relrightx_stepn, self, childs_computedwidth_stepn). %a11
assignment(vbox, self, childs_relrightx_step0, self, gensymattrib). %a27 childs@relRightX
assignment(vbox, self, childs_relrightx_step1, self, childs_relrightx_step0). %a28
assignment(vbox, self, childs_relrightx_step2, self, childs_relrightx_step1). %a29
assignment(vbox, self, childs_relrightx_stepn, self, childs_relrightx_step2). %a30
assignment(vbox, childsunroll0, relrightx, self, childs_relrightx_step0). %a31
assignment(vbox, childsunroll1, relrightx, self, childs_relrightx_step1). %a32
assignment(vbox, childsunroll2, relrightx, self, childs_relrightx_step2). %a33
assignment(vbox, childsunrolln, relrightx, self, childs_relrightx_stepn). %a34
assignment(vbox, childs, relrightx, self, childs_relrightx_stepn). %a35
assignment(vbox, self, childs_availablewidth_step0, self, computedwidth). %a17
assignment(vbox, self, childs_availablewidth_step0, self, displayborder). %a17
assignment(vbox, self, childs_availablewidth_step0, self, gensymattrib). %a27 childs@availableWidth
assignment(vbox, self, childs_availablewidth_step1, self, childs_availablewidth_step0). %a28
assignment(vbox, self, childs_availablewidth_step2, self, childs_availablewidth_step1). %a29
assignment(vbox, self, childs_availablewidth_stepn, self, childs_availablewidth_step2). %a30
assignment(vbox, childsunroll0, availablewidth, self, childs_availablewidth_step0). %a31
assignment(vbox, childsunroll1, availablewidth, self, childs_availablewidth_step1). %a32
assignment(vbox, childsunroll2, availablewidth, self, childs_availablewidth_step2). %a33
assignment(vbox, childsunrolln, availablewidth, self, childs_availablewidth_stepn). %a34
assignment(vbox, childs, availablewidth, self, childs_availablewidth_stepn). %a35
assignment(vbox, self, numchilds_step0, self, gensymattrib). %a27 numChilds
assignment(vbox, self, numchilds_step1, self, numchilds_step0). %a28
assignment(vbox, self, numchilds_step2, self, numchilds_step1). %a29
assignment(vbox, self, numchilds_stepn, self, numchilds_step2). %a30
assignment(vbox, selfunroll0, numchilds, self, numchilds_step0). %a31
assignment(vbox, selfunroll1, numchilds, self, numchilds_step1). %a32
assignment(vbox, selfunroll2, numchilds, self, numchilds_step2). %a33
assignment(vbox, selfunrolln, numchilds, self, numchilds_stepn). %a34
assignment(vbox, self, numchilds, self, numchilds_stepn). %a35
assignment(vbox, self, childs_absy_step0, self, absy). %a17
assignment(vbox, self, childs_absy_step0, self, childs_rely_step0). %a8
assignment(vbox, self, childs_absy_step1, self, childs_rely_step1). %a9
assignment(vbox, self, childs_absy_step2, self, childs_rely_step2). %a10
assignment(vbox, self, childs_absy_stepn, self, childs_rely_stepn). %a11
assignment(vbox, self, childs_absy_step0, self, gensymattrib). %a27 childs@absY
assignment(vbox, self, childs_absy_step1, self, childs_absy_step0). %a28
assignment(vbox, self, childs_absy_step2, self, childs_absy_step1). %a29
assignment(vbox, self, childs_absy_stepn, self, childs_absy_step2). %a30
assignment(vbox, childsunroll0, absy, self, childs_absy_step0). %a31
assignment(vbox, childsunroll1, absy, self, childs_absy_step1). %a32
assignment(vbox, childsunroll2, absy, self, childs_absy_step2). %a33
assignment(vbox, childsunrolln, absy, self, childs_absy_stepn). %a34
assignment(vbox, childs, absy, self, childs_absy_stepn). %a35
assignment(vbox, self, intrinsminwidth_step0, self, childs_intrinsminwidth_step0). %a8
assignment(vbox, self, intrinsminwidth_step1, self, childs_intrinsminwidth_step1). %a9
assignment(vbox, self, intrinsminwidth_step2, self, childs_intrinsminwidth_step2). %a10
assignment(vbox, self, intrinsminwidth_stepn, self, childs_intrinsminwidth_stepn). %a11
assignment(vbox, self, intrinsminwidth_step0, self, displayborder). %a17
assignment(vbox, self, intrinsminwidth_step0, self, gensymattrib). %a27 intrinsMinWidth
assignment(vbox, self, intrinsminwidth_step1, self, intrinsminwidth_step0). %a28
assignment(vbox, self, intrinsminwidth_step2, self, intrinsminwidth_step1). %a29
assignment(vbox, self, intrinsminwidth_stepn, self, intrinsminwidth_step2). %a30
assignment(vbox, selfunroll0, intrinsminwidth, self, intrinsminwidth_step0). %a31
assignment(vbox, selfunroll1, intrinsminwidth, self, intrinsminwidth_step1). %a32
assignment(vbox, selfunroll2, intrinsminwidth, self, intrinsminwidth_step2). %a33
assignment(vbox, selfunrolln, intrinsminwidth, self, intrinsminwidth_stepn). %a34
assignment(vbox, self, intrinsminwidth, self, intrinsminwidth_stepn). %a35
assignment(vbox, self, intrinsheight_step0, self, numchilds_stepn). %a17
assignment(vbox, self, intrinsheight_step0, self, displayborder). %a18
assignment(vbox, self, intrinsheight_step0, self, childs_computedheight_step0). %a8
assignment(vbox, self, intrinsheight_step1, self, childs_computedheight_step1). %a9
assignment(vbox, self, intrinsheight_step2, self, childs_computedheight_step2). %a10
assignment(vbox, self, intrinsheight_stepn, self, childs_computedheight_stepn). %a11
assignment(vbox, self, intrinsheight_step0, self, gensymattrib). %a27 intrinsHeight
assignment(vbox, self, intrinsheight_step1, self, intrinsheight_step0). %a28
assignment(vbox, self, intrinsheight_step2, self, intrinsheight_step1). %a29
assignment(vbox, self, intrinsheight_stepn, self, intrinsheight_step2). %a30
assignment(vbox, selfunroll0, intrinsheight, self, intrinsheight_step0). %a31
assignment(vbox, selfunroll1, intrinsheight, self, intrinsheight_step1). %a32
assignment(vbox, selfunroll2, intrinsheight, self, intrinsheight_step2). %a33
assignment(vbox, selfunrolln, intrinsheight, self, intrinsheight_stepn). %a34
assignment(vbox, self, intrinsheight, self, intrinsheight_stepn). %a35
assignment(vbox, self, childs_absx_step0, self, childs_relx_step0). %a8
assignment(vbox, self, childs_absx_step1, self, childs_relx_step1). %a9
assignment(vbox, self, childs_absx_step2, self, childs_relx_step2). %a10
assignment(vbox, self, childs_absx_stepn, self, childs_relx_stepn). %a11
assignment(vbox, self, childs_absx_step0, self, absx). %a17
assignment(vbox, self, childs_absx_step0, self, gensymattrib). %a27 childs@absX
assignment(vbox, self, childs_absx_step1, self, childs_absx_step0). %a28
assignment(vbox, self, childs_absx_step2, self, childs_absx_step1). %a29
assignment(vbox, self, childs_absx_stepn, self, childs_absx_step2). %a30
assignment(vbox, childsunroll0, absx, self, childs_absx_step0). %a31
assignment(vbox, childsunroll1, absx, self, childs_absx_step1). %a32
assignment(vbox, childsunroll2, absx, self, childs_absx_step2). %a33
assignment(vbox, childsunrolln, absx, self, childs_absx_stepn). %a34
assignment(vbox, childs, absx, self, childs_absx_stepn). %a35
assignment(vbox, self, intrinsprefwidth_step0, self, childs_intrinsprefwidth_step0). %a8
assignment(vbox, self, intrinsprefwidth_step1, self, childs_intrinsprefwidth_step1). %a9
assignment(vbox, self, intrinsprefwidth_step2, self, childs_intrinsprefwidth_step2). %a10
assignment(vbox, self, intrinsprefwidth_stepn, self, childs_intrinsprefwidth_stepn). %a11
assignment(vbox, self, intrinsprefwidth_step0, self, displayborder). %a17
assignment(vbox, self, intrinsprefwidth_step0, self, gensymattrib). %a27 intrinsPrefWidth
assignment(vbox, self, intrinsprefwidth_step1, self, intrinsprefwidth_step0). %a28
assignment(vbox, self, intrinsprefwidth_step2, self, intrinsprefwidth_step1). %a29
assignment(vbox, self, intrinsprefwidth_stepn, self, intrinsprefwidth_step2). %a30
assignment(vbox, selfunroll0, intrinsprefwidth, self, intrinsprefwidth_step0). %a31
assignment(vbox, selfunroll1, intrinsprefwidth, self, intrinsprefwidth_step1). %a32
assignment(vbox, selfunroll2, intrinsprefwidth, self, intrinsprefwidth_step2). %a33
assignment(vbox, selfunrolln, intrinsprefwidth, self, intrinsprefwidth_stepn). %a34
assignment(vbox, self, intrinsprefwidth, self, intrinsprefwidth_stepn). %a35
assignment(vbox, self, childs_rely_step1, self, childs_relboty_step0). %a12
assignment(vbox, self, childs_rely_step2, self, childs_relboty_step1). %a13
assignment(vbox, self, childs_rely_stepn, self, childs_relboty_step2). %a14
assignment(vbox, self, childs_rely_step0, self, gensymattrib). %a27 childs@relY
assignment(vbox, self, childs_rely_step1, self, childs_rely_step0). %a28
assignment(vbox, self, childs_rely_step2, self, childs_rely_step1). %a29
assignment(vbox, self, childs_rely_stepn, self, childs_rely_step2). %a30
assignment(vbox, childsunroll0, rely, self, childs_rely_step0). %a31
assignment(vbox, childsunroll1, rely, self, childs_rely_step1). %a32
assignment(vbox, childsunroll2, rely, self, childs_rely_step2). %a33
assignment(vbox, childsunrolln, rely, self, childs_rely_stepn). %a34
assignment(vbox, childs, rely, self, childs_rely_stepn). %a35
assignment(vbox, self, childs_canvas_step0, self, render). %a18
assignment(vbox, self, childs_canvas_step0, self, gensymattrib). %a27 childs@canvas
assignment(vbox, self, childs_canvas_step1, self, childs_canvas_step0). %a28
assignment(vbox, self, childs_canvas_step2, self, childs_canvas_step1). %a29
assignment(vbox, self, childs_canvas_stepn, self, childs_canvas_step2). %a30
assignment(vbox, childsunroll0, canvas, self, childs_canvas_step0). %a31
assignment(vbox, childsunroll1, canvas, self, childs_canvas_step1). %a32
assignment(vbox, childsunroll2, canvas, self, childs_canvas_step2). %a33
assignment(vbox, childsunrolln, canvas, self, childs_canvas_stepn). %a34
assignment(vbox, childs, canvas, self, childs_canvas_stepn). %a35
assignment(vbox, self, childs_intrinsminwidth_step0, self, gensymattrib). %a27 childs@intrinsMinWidth
assignment(vbox, self, childs_intrinsminwidth_step1, self, childs_intrinsminwidth_step0). %a28
assignment(vbox, self, childs_intrinsminwidth_step2, self, childs_intrinsminwidth_step1). %a29
assignment(vbox, self, childs_intrinsminwidth_stepn, self, childs_intrinsminwidth_step2). %a30
assignment(vbox, self, childs_intrinsminwidth_step0, childsunroll0, intrinsminwidth). %a45
assignment(vbox, self, childs_intrinsminwidth_step1, childsunroll1, intrinsminwidth). %a46
assignment(vbox, self, childs_intrinsminwidth_step2, childsunroll2, intrinsminwidth). %a47
assignment(vbox, self, childs_intrinsminwidth_stepn, childsunrolln, intrinsminwidth). %a48
assignment(vbox, self, childs_intrinsprefwidth_step0, self, gensymattrib). %a27 childs@intrinsPrefWidth
assignment(vbox, self, childs_intrinsprefwidth_step1, self, childs_intrinsprefwidth_step0). %a28
assignment(vbox, self, childs_intrinsprefwidth_step2, self, childs_intrinsprefwidth_step1). %a29
assignment(vbox, self, childs_intrinsprefwidth_stepn, self, childs_intrinsprefwidth_step2). %a30
assignment(vbox, self, childs_intrinsprefwidth_step0, childsunroll0, intrinsprefwidth). %a45
assignment(vbox, self, childs_intrinsprefwidth_step1, childsunroll1, intrinsprefwidth). %a46
assignment(vbox, self, childs_intrinsprefwidth_step2, childsunroll2, intrinsprefwidth). %a47
assignment(vbox, self, childs_intrinsprefwidth_stepn, childsunrolln, intrinsprefwidth). %a48
assignment(vbox, self, childs_computedwidth_step0, self, gensymattrib). %a27 childs@computedWidth
assignment(vbox, self, childs_computedwidth_step1, self, childs_computedwidth_step0). %a28
assignment(vbox, self, childs_computedwidth_step2, self, childs_computedwidth_step1). %a29
assignment(vbox, self, childs_computedwidth_stepn, self, childs_computedwidth_step2). %a30
assignment(vbox, self, childs_computedwidth_step0, childsunroll0, computedwidth). %a45
assignment(vbox, self, childs_computedwidth_step1, childsunroll1, computedwidth). %a46
assignment(vbox, self, childs_computedwidth_step2, childsunroll2, computedwidth). %a47
assignment(vbox, self, childs_computedwidth_stepn, childsunrolln, computedwidth). %a48
assignment(vbox, self, childs_computedheight_step0, self, gensymattrib). %a27 childs@computedHeight
assignment(vbox, self, childs_computedheight_step1, self, childs_computedheight_step0). %a28
assignment(vbox, self, childs_computedheight_step2, self, childs_computedheight_step1). %a29
assignment(vbox, self, childs_computedheight_stepn, self, childs_computedheight_step2). %a30
assignment(vbox, self, childs_computedheight_step0, childsunroll0, computedheight). %a45
assignment(vbox, self, childs_computedheight_step1, childsunroll1, computedheight). %a46
assignment(vbox, self, childs_computedheight_step2, childsunroll2, computedheight). %a47
assignment(vbox, self, childs_computedheight_stepn, childsunrolln, computedheight). %a48
assignment(textbox, self, rendercolor, self, color). %a42
assignment(textbox, self, rendercolor, self, inhcolor). %a42
assignment(textbox, self, numberlines, self, text). %a42
assignment(textbox, self, numberlines, self, metrics). %a42
assignment(textbox, self, numberlines, self, overflow). %a42
assignment(textbox, self, numberlines, self, renderfontsize). %a42
assignment(textbox, self, numberlines, self, computedwidth). %a42
assignment(textbox, self, numberlines, self, fontfamily). %a42
assignment(textbox, self, computedheight, self, height). %a42
assignment(textbox, self, computedheight, self, intrinsheight). %a42
assignment(textbox, self, renderfontsize, self, inhfontsize). %a42
assignment(textbox, self, renderfontsize, self, fontsize). %a42
assignment(textbox, self, intrinsminwidth, self, text). %a42
assignment(textbox, self, intrinsminwidth, self, metrics). %a42
assignment(textbox, self, intrinsminwidth, self, renderfontsize). %a42
assignment(textbox, self, intrinsminwidth, self, fontfamily). %a42
assignment(textbox, self, metrics, self, gensymattrib). %a40
assignment(textbox, self, render, self, rendercolor). %a42
assignment(textbox, self, render, self, lineheight). %a42
assignment(textbox, self, render, self, text). %a42
assignment(textbox, self, render, self, linespacing). %a42
assignment(textbox, self, render, self, overflow). %a42
assignment(textbox, self, render, self, renderfontsize). %a42
assignment(textbox, self, render, self, canvas). %a42
assignment(textbox, self, render, self, computedwidth). %a42
assignment(textbox, self, render, self, absy). %a42
assignment(textbox, self, render, self, absx). %a42
assignment(textbox, self, render, self, fontfamily). %a42
assignment(textbox, self, lineheight, self, text). %a42
assignment(textbox, self, lineheight, self, metrics). %a42
assignment(textbox, self, lineheight, self, renderfontsize). %a42
assignment(textbox, self, lineheight, self, fontfamily). %a42
assignment(textbox, self, intrinsprefwidth, self, text). %a42
assignment(textbox, self, intrinsprefwidth, self, metrics). %a42
assignment(textbox, self, intrinsprefwidth, self, renderfontsize). %a42
assignment(textbox, self, intrinsprefwidth, self, fontfamily). %a42
assignment(textbox, self, inhfontsize, self, gensymattrib). %a40
assignment(textbox, self, intrinsheight, self, lineheight). %a42
assignment(textbox, self, intrinsheight, self, numberlines). %a42
assignment(textbox, self, intrinsheight, self, linespacing). %a42
assignment(textbox, self, computedwidth, self, intrinsminwidth). %a42
assignment(textbox, self, computedwidth, self, availablewidth). %a42
assignment(textbox, self, computedwidth, self, minwidth). %a42
assignment(textbox, self, computedwidth, self, width). %a42
assignment(textbox, self, computedwidth, self, maxwidth). %a42
assignment(textbox, self, computedwidth, self, intrinsprefwidth). %a42
assignment(textbox, self, computedwidth, self, percentwidth). %a42
assignment(textbox, self, inhcolor, self, gensymattrib). %a40
assignment(textbox, self, overflow, self, gensymattrib). %a40
assignment(textbox, self, linespacing, self, lineheight). %a42
assignment(gensymattrib, gensymattrib, gensymattrib, gensymattrib, gensymattrib) :- false.
classAttribute(wrapbox, numchilds). %s1
classAttribute(wrapbox, childs_relboty_step0). %s2 childs@relboty
classAttribute(wrapbox, childs_relboty_step1). %s3
classAttribute(wrapbox, childs_relboty_step2). %s4
classAttribute(wrapbox, childs_relboty_stepn). %s5
classAttribute(wrapbox, childs_intrinsminwidth_step0). %s2 childs@intrinsminwidth
classAttribute(wrapbox, childs_intrinsminwidth_step1). %s3
classAttribute(wrapbox, childs_intrinsminwidth_step2). %s4
classAttribute(wrapbox, childs_intrinsminwidth_stepn). %s5
classAttribute(wrapbox, intrinsminwidth_step0). %s2 self@intrinsminwidth
classAttribute(wrapbox, intrinsminwidth_step1). %s3
classAttribute(wrapbox, intrinsminwidth_step2). %s4
classAttribute(wrapbox, intrinsminwidth_stepn). %s5
classAttribute(wrapbox, intrinsheight_step0). %s2 self@intrinsheight
classAttribute(wrapbox, intrinsheight_step1). %s3
classAttribute(wrapbox, intrinsheight_step2). %s4
classAttribute(wrapbox, intrinsheight_stepn). %s5
classAttribute(wrapbox, childs_displayborder_step0). %s2 childs@displayborder
classAttribute(wrapbox, childs_displayborder_step1). %s3
classAttribute(wrapbox, childs_displayborder_step2). %s4
classAttribute(wrapbox, childs_displayborder_stepn). %s5
classAttribute(wrapbox, numchilds_step0). %s2 self@numchilds
classAttribute(wrapbox, numchilds_step1). %s3
classAttribute(wrapbox, numchilds_step2). %s4
classAttribute(wrapbox, numchilds_stepn). %s5
classAttribute(wrapbox, childs_absx_step0). %s2 childs@absx
classAttribute(wrapbox, childs_absx_step1). %s3
classAttribute(wrapbox, childs_absx_step2). %s4
classAttribute(wrapbox, childs_absx_stepn). %s5
classAttribute(wrapbox, childs_canvas_step0). %s2 childs@canvas
classAttribute(wrapbox, childs_canvas_step1). %s3
classAttribute(wrapbox, childs_canvas_step2). %s4
classAttribute(wrapbox, childs_canvas_stepn). %s5
classAttribute(wrapbox, childs_relx_step0). %s2 childs@relx
classAttribute(wrapbox, childs_relx_step1). %s3
classAttribute(wrapbox, childs_relx_step2). %s4
classAttribute(wrapbox, childs_relx_stepn). %s5
classAttribute(wrapbox, childs_intrinsprefwidth_step0). %s2 childs@intrinsprefwidth
classAttribute(wrapbox, childs_intrinsprefwidth_step1). %s3
classAttribute(wrapbox, childs_intrinsprefwidth_step2). %s4
classAttribute(wrapbox, childs_intrinsprefwidth_stepn). %s5
classAttribute(wrapbox, childs_lineh_step0). %s2 childs@lineh
classAttribute(wrapbox, childs_lineh_step1). %s3
classAttribute(wrapbox, childs_lineh_step2). %s4
classAttribute(wrapbox, childs_lineh_stepn). %s5
classAttribute(wrapbox, childs_rely_step0). %s2 childs@rely
classAttribute(wrapbox, childs_rely_step1). %s3
classAttribute(wrapbox, childs_rely_step2). %s4
classAttribute(wrapbox, childs_rely_stepn). %s5
classAttribute(wrapbox, childs_absy_step0). %s2 childs@absy
classAttribute(wrapbox, childs_absy_step1). %s3
classAttribute(wrapbox, childs_absy_step2). %s4
classAttribute(wrapbox, childs_absy_stepn). %s5
classAttribute(wrapbox, childs_computedheight_step0). %s2 childs@computedheight
classAttribute(wrapbox, childs_computedheight_step1). %s3
classAttribute(wrapbox, childs_computedheight_step2). %s4
classAttribute(wrapbox, childs_computedheight_stepn). %s5
classAttribute(wrapbox, childs_availablewidth_step0). %s2 childs@availablewidth
classAttribute(wrapbox, childs_availablewidth_step1). %s3
classAttribute(wrapbox, childs_availablewidth_step2). %s4
classAttribute(wrapbox, childs_availablewidth_stepn). %s5
classAttribute(wrapbox, intrinsprefwidth_step0). %s2 self@intrinsprefwidth
classAttribute(wrapbox, intrinsprefwidth_step1). %s3
classAttribute(wrapbox, intrinsprefwidth_step2). %s4
classAttribute(wrapbox, intrinsprefwidth_stepn). %s5
classAttribute(wrapbox, childs_relrightx_step0). %s2 childs@relrightx
classAttribute(wrapbox, childs_relrightx_step1). %s3
classAttribute(wrapbox, childs_relrightx_step2). %s4
classAttribute(wrapbox, childs_relrightx_stepn). %s5
classAttribute(wrapbox, childs_computedwidth_step0). %s2 childs@computedwidth
classAttribute(wrapbox, childs_computedwidth_step1). %s3
classAttribute(wrapbox, childs_computedwidth_step2). %s4
classAttribute(wrapbox, childs_computedwidth_stepn). %s5
classAttribute(cell, numchilds). %s1
classAttribute(cell, childs_relboty_step0). %s2 childs@relboty
classAttribute(cell, childs_relboty_step1). %s3
classAttribute(cell, childs_relboty_step2). %s4
classAttribute(cell, childs_relboty_stepn). %s5
classAttribute(cell, childs_intrinsminwidth_step0). %s2 childs@intrinsminwidth
classAttribute(cell, childs_intrinsminwidth_step1). %s3
classAttribute(cell, childs_intrinsminwidth_step2). %s4
classAttribute(cell, childs_intrinsminwidth_stepn). %s5
classAttribute(cell, intrinsheight_step0). %s2 self@intrinsheight
classAttribute(cell, intrinsheight_step1). %s3
classAttribute(cell, intrinsheight_step2). %s4
classAttribute(cell, intrinsheight_stepn). %s5
classAttribute(cell, intrinsminwidth_step0). %s2 self@intrinsminwidth
classAttribute(cell, intrinsminwidth_step1). %s3
classAttribute(cell, intrinsminwidth_step2). %s4
classAttribute(cell, intrinsminwidth_stepn). %s5
classAttribute(cell, childs_displayborder_step0). %s2 childs@displayborder
classAttribute(cell, childs_displayborder_step1). %s3
classAttribute(cell, childs_displayborder_step2). %s4
classAttribute(cell, childs_displayborder_stepn). %s5
classAttribute(cell, childs_canvas_step0). %s2 childs@canvas
classAttribute(cell, childs_canvas_step1). %s3
classAttribute(cell, childs_canvas_step2). %s4
classAttribute(cell, childs_canvas_stepn). %s5
classAttribute(cell, numchilds_step0). %s2 self@numchilds
classAttribute(cell, numchilds_step1). %s3
classAttribute(cell, numchilds_step2). %s4
classAttribute(cell, numchilds_stepn). %s5
classAttribute(cell, childs_absx_step0). %s2 childs@absx
classAttribute(cell, childs_absx_step1). %s3
classAttribute(cell, childs_absx_step2). %s4
classAttribute(cell, childs_absx_stepn). %s5
classAttribute(cell, childs_relx_step0). %s2 childs@relx
classAttribute(cell, childs_relx_step1). %s3
classAttribute(cell, childs_relx_step2). %s4
classAttribute(cell, childs_relx_stepn). %s5
classAttribute(cell, childs_intrinsprefwidth_step0). %s2 childs@intrinsprefwidth
classAttribute(cell, childs_intrinsprefwidth_step1). %s3
classAttribute(cell, childs_intrinsprefwidth_step2). %s4
classAttribute(cell, childs_intrinsprefwidth_stepn). %s5
classAttribute(cell, childs_absy_step0). %s2 childs@absy
classAttribute(cell, childs_absy_step1). %s3
classAttribute(cell, childs_absy_step2). %s4
classAttribute(cell, childs_absy_stepn). %s5
classAttribute(cell, childs_lineh_step0). %s2 childs@lineh
classAttribute(cell, childs_lineh_step1). %s3
classAttribute(cell, childs_lineh_step2). %s4
classAttribute(cell, childs_lineh_stepn). %s5
classAttribute(cell, childs_rely_step0). %s2 childs@rely
classAttribute(cell, childs_rely_step1). %s3
classAttribute(cell, childs_rely_step2). %s4
classAttribute(cell, childs_rely_stepn). %s5
classAttribute(cell, childs_computedheight_step0). %s2 childs@computedheight
classAttribute(cell, childs_computedheight_step1). %s3
classAttribute(cell, childs_computedheight_step2). %s4
classAttribute(cell, childs_computedheight_stepn). %s5
classAttribute(cell, childs_availablewidth_step0). %s2 childs@availablewidth
classAttribute(cell, childs_availablewidth_step1). %s3
classAttribute(cell, childs_availablewidth_step2). %s4
classAttribute(cell, childs_availablewidth_stepn). %s5
classAttribute(cell, intrinsprefwidth_step0). %s2 self@intrinsprefwidth
classAttribute(cell, intrinsprefwidth_step1). %s3
classAttribute(cell, intrinsprefwidth_step2). %s4
classAttribute(cell, intrinsprefwidth_stepn). %s5
classAttribute(cell, childs_relrightx_step0). %s2 childs@relrightx
classAttribute(cell, childs_relrightx_step1). %s3
classAttribute(cell, childs_relrightx_step2). %s4
classAttribute(cell, childs_relrightx_stepn). %s5
classAttribute(cell, childs_computedwidth_step0). %s2 childs@computedwidth
classAttribute(cell, childs_computedwidth_step1). %s3
classAttribute(cell, childs_computedwidth_step2). %s4
classAttribute(cell, childs_computedwidth_stepn). %s5
classAttribute(row, childs_relboty_step0). %s2 childs@relboty
classAttribute(row, childs_relboty_step1). %s3
classAttribute(row, childs_relboty_step2). %s4
classAttribute(row, childs_relboty_stepn). %s5
classAttribute(row, childs_cellnum_step0). %s2 childs@cellnum
classAttribute(row, childs_cellnum_step1). %s3
classAttribute(row, childs_cellnum_step2). %s4
classAttribute(row, childs_cellnum_stepn). %s5
classAttribute(row, childs_intrinsminwidth_step0). %s2 childs@intrinsminwidth
classAttribute(row, childs_intrinsminwidth_step1). %s3
classAttribute(row, childs_intrinsminwidth_step2). %s4
classAttribute(row, childs_intrinsminwidth_stepn). %s5
classAttribute(row, childs_displayborder_step0). %s2 childs@displayborder
classAttribute(row, childs_displayborder_step1). %s3
classAttribute(row, childs_displayborder_step2). %s4
classAttribute(row, childs_displayborder_stepn). %s5
classAttribute(row, intrinsheight_step0). %s2 self@intrinsheight
classAttribute(row, intrinsheight_step1). %s3
classAttribute(row, intrinsheight_step2). %s4
classAttribute(row, intrinsheight_stepn). %s5
classAttribute(row, childs_rowspan_step0). %s2 childs@rowspan
classAttribute(row, childs_rowspan_step1). %s3
classAttribute(row, childs_rowspan_step2). %s4
classAttribute(row, childs_rowspan_stepn). %s5
classAttribute(row, childs_absx_step0). %s2 childs@absx
classAttribute(row, childs_absx_step1). %s3
classAttribute(row, childs_absx_step2). %s4
classAttribute(row, childs_absx_stepn). %s5
classAttribute(row, childs_canvas_step0). %s2 childs@canvas
classAttribute(row, childs_canvas_step1). %s3
classAttribute(row, childs_canvas_step2). %s4
classAttribute(row, childs_canvas_stepn). %s5
classAttribute(row, intrinscolcount_step0). %s2 self@intrinscolcount
classAttribute(row, intrinscolcount_step1). %s3
classAttribute(row, intrinscolcount_step2). %s4
classAttribute(row, intrinscolcount_stepn). %s5
classAttribute(row, childs_row_step0). %s2 childs@row
classAttribute(row, childs_row_step1). %s3
classAttribute(row, childs_row_step2). %s4
classAttribute(row, childs_row_stepn). %s5
classAttribute(row, childs_relx_step0). %s2 childs@relx
classAttribute(row, childs_relx_step1). %s3
classAttribute(row, childs_relx_step2). %s4
classAttribute(row, childs_relx_stepn). %s5
classAttribute(row, childs_rely_step0). %s2 childs@rely
classAttribute(row, childs_rely_step1). %s3
classAttribute(row, childs_rely_step2). %s4
classAttribute(row, childs_rely_stepn). %s5
classAttribute(row, childs_absy_step0). %s2 childs@absy
classAttribute(row, childs_absy_step1). %s3
classAttribute(row, childs_absy_step2). %s4
classAttribute(row, childs_absy_stepn). %s5
classAttribute(row, childs_column_step0). %s2 childs@column
classAttribute(row, childs_column_step1). %s3
classAttribute(row, childs_column_step2). %s4
classAttribute(row, childs_column_stepn). %s5
classAttribute(row, childs_computedheight_step0). %s2 childs@computedheight
classAttribute(row, childs_computedheight_step1). %s3
classAttribute(row, childs_computedheight_step2). %s4
classAttribute(row, childs_computedheight_stepn). %s5
classAttribute(row, childs_availablewidth_step0). %s2 childs@availablewidth
classAttribute(row, childs_availablewidth_step1). %s3
classAttribute(row, childs_availablewidth_step2). %s4
classAttribute(row, childs_availablewidth_stepn). %s5
classAttribute(row, cells_step0). %s2 self@cells
classAttribute(row, cells_step1). %s3
classAttribute(row, cells_step2). %s4
classAttribute(row, cells_stepn). %s5
classAttribute(row, computedwidth_step0). %s2 self@computedwidth
classAttribute(row, computedwidth_step1). %s3
classAttribute(row, computedwidth_step2). %s4
classAttribute(row, computedwidth_stepn). %s5
classAttribute(row, childs_colspan_step0). %s2 childs@colspan
classAttribute(row, childs_colspan_step1). %s3
classAttribute(row, childs_colspan_step2). %s4
classAttribute(row, childs_colspan_stepn). %s5
classAttribute(col, numchilds). %s1
classAttribute(col, childs_relboty_step0). %s2 childs@relboty
classAttribute(col, childs_relboty_step1). %s3
classAttribute(col, childs_relboty_step2). %s4
classAttribute(col, childs_relboty_stepn). %s5
classAttribute(col, childs_cellnum_step0). %s2 childs@cellnum
classAttribute(col, childs_cellnum_step1). %s3
classAttribute(col, childs_cellnum_step2). %s4
classAttribute(col, childs_cellnum_stepn). %s5
classAttribute(col, childs_intrinsminwidth_step0). %s2 childs@intrinsminwidth
classAttribute(col, childs_intrinsminwidth_step1). %s3
classAttribute(col, childs_intrinsminwidth_step2). %s4
classAttribute(col, childs_intrinsminwidth_stepn). %s5
classAttribute(col, intrinsminwidth_step0). %s2 self@intrinsminwidth
classAttribute(col, intrinsminwidth_step1). %s3
classAttribute(col, intrinsminwidth_step2). %s4
classAttribute(col, intrinsminwidth_stepn). %s5
classAttribute(col, intrinsheight_step0). %s2 self@intrinsheight
classAttribute(col, intrinsheight_step1). %s3
classAttribute(col, intrinsheight_step2). %s4
classAttribute(col, intrinsheight_stepn). %s5
classAttribute(col, childs_displayborder_step0). %s2 childs@displayborder
classAttribute(col, childs_displayborder_step1). %s3
classAttribute(col, childs_displayborder_step2). %s4
classAttribute(col, childs_displayborder_stepn). %s5
classAttribute(col, childs_canvas_step0). %s2 childs@canvas
classAttribute(col, childs_canvas_step1). %s3
classAttribute(col, childs_canvas_step2). %s4
classAttribute(col, childs_canvas_stepn). %s5
classAttribute(col, childs_absx_step0). %s2 childs@absx
classAttribute(col, childs_absx_step1). %s3
classAttribute(col, childs_absx_step2). %s4
classAttribute(col, childs_absx_stepn). %s5
classAttribute(col, numchilds_step0). %s2 self@numchilds
classAttribute(col, numchilds_step1). %s3
classAttribute(col, numchilds_step2). %s4
classAttribute(col, numchilds_stepn). %s5
classAttribute(col, childs_row_step0). %s2 childs@row
classAttribute(col, childs_row_step1). %s3
classAttribute(col, childs_row_step2). %s4
classAttribute(col, childs_row_stepn). %s5
classAttribute(col, childs_relx_step0). %s2 childs@relx
classAttribute(col, childs_relx_step1). %s3
classAttribute(col, childs_relx_step2). %s4
classAttribute(col, childs_relx_stepn). %s5
classAttribute(col, childs_intrinsprefwidth_step0). %s2 childs@intrinsprefwidth
classAttribute(col, childs_intrinsprefwidth_step1). %s3
classAttribute(col, childs_intrinsprefwidth_step2). %s4
classAttribute(col, childs_intrinsprefwidth_stepn). %s5
classAttribute(col, childs_column_step0). %s2 childs@column
classAttribute(col, childs_column_step1). %s3
classAttribute(col, childs_column_step2). %s4
classAttribute(col, childs_column_stepn). %s5
classAttribute(col, childs_rely_step0). %s2 childs@rely
classAttribute(col, childs_rely_step1). %s3
classAttribute(col, childs_rely_step2). %s4
classAttribute(col, childs_rely_stepn). %s5
classAttribute(col, childs_absy_step0). %s2 childs@absy
classAttribute(col, childs_absy_step1). %s3
classAttribute(col, childs_absy_step2). %s4
classAttribute(col, childs_absy_stepn). %s5
classAttribute(col, childs_computedheight_step0). %s2 childs@computedheight
classAttribute(col, childs_computedheight_step1). %s3
classAttribute(col, childs_computedheight_step2). %s4
classAttribute(col, childs_computedheight_stepn). %s5
classAttribute(col, childs_availablewidth_step0). %s2 childs@availablewidth
classAttribute(col, childs_availablewidth_step1). %s3
classAttribute(col, childs_availablewidth_step2). %s4
classAttribute(col, childs_availablewidth_stepn). %s5
classAttribute(col, intrinsprefwidth_step0). %s2 self@intrinsprefwidth
classAttribute(col, intrinsprefwidth_step1). %s3
classAttribute(col, intrinsprefwidth_step2). %s4
classAttribute(col, intrinsprefwidth_stepn). %s5
classAttribute(col, childs_colspan_step0). %s2 childs@colspan
classAttribute(col, childs_colspan_step1). %s3
classAttribute(col, childs_colspan_step2). %s4
classAttribute(col, childs_colspan_stepn). %s5
classAttribute(cols, numgreedycols). %s1
classAttribute(cols, notusedwidth). %s1
classAttribute(cols, cols_absx_step0). %s2 cols@absx
classAttribute(cols, cols_absx_step1). %s3
classAttribute(cols, cols_absx_step2). %s4
classAttribute(cols, cols_absx_stepn). %s5
classAttribute(cols, cols_displayborder_step0). %s2 cols@displayborder
classAttribute(cols, cols_displayborder_step1). %s3
classAttribute(cols, cols_displayborder_step2). %s4
classAttribute(cols, cols_displayborder_stepn). %s5
classAttribute(cols, cols_canvas_step0). %s2 cols@canvas
classAttribute(cols, cols_canvas_step1). %s3
classAttribute(cols, cols_canvas_step2). %s4
classAttribute(cols, cols_canvas_stepn). %s5
classAttribute(cols, cols_absy_step0). %s2 cols@absy
classAttribute(cols, cols_absy_step1). %s3
classAttribute(cols, cols_absy_step2). %s4
classAttribute(cols, cols_absy_stepn). %s5
classAttribute(cols, cols_cellsready_step0). %s2 cols@cellsready
classAttribute(cols, cols_cellsready_step1). %s3
classAttribute(cols, cols_cellsready_step2). %s4
classAttribute(cols, cols_cellsready_stepn). %s5
classAttribute(cols, numgreedycols_step0). %s2 self@numgreedycols
classAttribute(cols, numgreedycols_step1). %s3
classAttribute(cols, numgreedycols_step2). %s4
classAttribute(cols, numgreedycols_stepn). %s5
classAttribute(cols, cols_relrightx_step0). %s2 cols@relrightx
classAttribute(cols, cols_relrightx_step1). %s3
classAttribute(cols, cols_relrightx_step2). %s4
classAttribute(cols, cols_relrightx_stepn). %s5
classAttribute(cols, intrinsminwidth_step0). %s2 self@intrinsminwidth
classAttribute(cols, intrinsminwidth_step1). %s3
classAttribute(cols, intrinsminwidth_step2). %s4
classAttribute(cols, intrinsminwidth_stepn). %s5
classAttribute(cols, cols_colnum_step0). %s2 cols@colnum
classAttribute(cols, cols_colnum_step1). %s3
classAttribute(cols, cols_colnum_step2). %s4
classAttribute(cols, cols_colnum_stepn). %s5
classAttribute(cols, cols_intrinsminwidth_step0). %s2 cols@intrinsminwidth
classAttribute(cols, cols_intrinsminwidth_step1). %s3
classAttribute(cols, cols_intrinsminwidth_step2). %s4
classAttribute(cols, cols_intrinsminwidth_stepn). %s5
classAttribute(cols, cols_tablecontentheight_step0). %s2 cols@tablecontentheight
classAttribute(cols, cols_tablecontentheight_step1). %s3
classAttribute(cols, cols_tablecontentheight_step2). %s4
classAttribute(cols, cols_tablecontentheight_stepn). %s5
classAttribute(cols, cols_intrinsprefwidth_step0). %s2 cols@intrinsprefwidth
classAttribute(cols, cols_intrinsprefwidth_step1). %s3
classAttribute(cols, cols_intrinsprefwidth_step2). %s4
classAttribute(cols, cols_intrinsprefwidth_stepn). %s5
classAttribute(cols, tablecontentwidth_step0). %s2 self@tablecontentwidth
classAttribute(cols, tablecontentwidth_step1). %s3
classAttribute(cols, tablecontentwidth_step2). %s4
classAttribute(cols, tablecontentwidth_stepn). %s5
classAttribute(cols, intrinsprefwidth_step0). %s2 self@intrinsprefwidth
classAttribute(cols, intrinsprefwidth_step1). %s3
classAttribute(cols, intrinsprefwidth_step2). %s4
classAttribute(cols, intrinsprefwidth_stepn). %s5
classAttribute(cols, notusedwidth_step0). %s2 self@notusedwidth
classAttribute(cols, notusedwidth_step1). %s3
classAttribute(cols, notusedwidth_step2). %s4
classAttribute(cols, notusedwidth_stepn). %s5
classAttribute(cols, cols_colcount_step0). %s2 cols@colcount
classAttribute(cols, cols_colcount_step1). %s3
classAttribute(cols, cols_colcount_step2). %s4
classAttribute(cols, cols_colcount_stepn). %s5
classAttribute(cols, cols_borderc_step0). %s2 cols@borderc
classAttribute(cols, cols_borderc_step1). %s3
classAttribute(cols, cols_borderc_step2). %s4
classAttribute(cols, cols_borderc_stepn). %s5
classAttribute(cols, cols_computedwidth_step0). %s2 cols@computedwidth
classAttribute(cols, cols_computedwidth_step1). %s3
classAttribute(cols, cols_computedwidth_step2). %s4
classAttribute(cols, cols_computedwidth_stepn). %s5
classAttribute(cols, cols_relx_step0). %s2 cols@relx
classAttribute(cols, cols_relx_step1). %s3
classAttribute(cols, cols_relx_step2). %s4
classAttribute(cols, cols_relx_stepn). %s5
classAttribute(cols, cols_rely_step0). %s2 cols@rely
classAttribute(cols, cols_rely_step1). %s3
classAttribute(cols, cols_rely_step2). %s4
classAttribute(cols, cols_rely_stepn). %s5
classAttribute(cols, cols_availablewidth_step0). %s2 cols@availablewidth
classAttribute(cols, cols_availablewidth_step1). %s3
classAttribute(cols, cols_availablewidth_step2). %s4
classAttribute(cols, cols_availablewidth_stepn). %s5
classAttribute(tablebox, cellsready). %s1
classAttribute(tablebox, colcount). %s1
classAttribute(tablebox, rows_tablecontentwidth_step0). %s2 rows@tablecontentwidth
classAttribute(tablebox, rows_tablecontentwidth_step1). %s3
classAttribute(tablebox, rows_tablecontentwidth_step2). %s4
classAttribute(tablebox, rows_tablecontentwidth_stepn). %s5
classAttribute(tablebox, rows_canvas_step0). %s2 rows@canvas
classAttribute(tablebox, rows_canvas_step1). %s3
classAttribute(tablebox, rows_canvas_step2). %s4
classAttribute(tablebox, rows_canvas_stepn). %s5
classAttribute(tablebox, rows_cells_step0). %s2 rows@cells
classAttribute(tablebox, rows_cells_step1). %s3
classAttribute(tablebox, rows_cells_step2). %s4
classAttribute(tablebox, rows_cells_stepn). %s5
classAttribute(tablebox, intrinsheight_step0). %s2 self@intrinsheight
classAttribute(tablebox, intrinsheight_step1). %s3
classAttribute(tablebox, intrinsheight_step2). %s4
classAttribute(tablebox, intrinsheight_stepn). %s5
classAttribute(tablebox, rows_absx_step0). %s2 rows@absx
classAttribute(tablebox, rows_absx_step1). %s3
classAttribute(tablebox, rows_absx_step2). %s4
classAttribute(tablebox, rows_absx_stepn). %s5
classAttribute(tablebox, rows_absy_step0). %s2 rows@absy
classAttribute(tablebox, rows_absy_step1). %s3
classAttribute(tablebox, rows_absy_step2). %s4
classAttribute(tablebox, rows_absy_stepn). %s5
classAttribute(tablebox, rows_rownum_step0). %s2 rows@rownum
classAttribute(tablebox, rows_rownum_step1). %s3
classAttribute(tablebox, rows_rownum_step2). %s4
classAttribute(tablebox, rows_rownum_stepn). %s5
classAttribute(tablebox, rows_relboty_step0). %s2 rows@relboty
classAttribute(tablebox, rows_relboty_step1). %s3
classAttribute(tablebox, rows_relboty_step2). %s4
classAttribute(tablebox, rows_relboty_stepn). %s5
classAttribute(tablebox, rows_displayborder_step0). %s2 rows@displayborder
classAttribute(tablebox, rows_displayborder_step1). %s3
classAttribute(tablebox, rows_displayborder_step2). %s4
classAttribute(tablebox, rows_displayborder_stepn). %s5
classAttribute(tablebox, rows_colassignment_step0). %s2 rows@colassignment
classAttribute(tablebox, rows_colassignment_step1). %s3
classAttribute(tablebox, rows_colassignment_step2). %s4
classAttribute(tablebox, rows_colassignment_stepn). %s5
classAttribute(tablebox, rows_intrinscolcount_step0). %s2 rows@intrinscolcount
classAttribute(tablebox, rows_intrinscolcount_step1). %s3
classAttribute(tablebox, rows_intrinscolcount_step2). %s4
classAttribute(tablebox, rows_intrinscolcount_stepn). %s5
classAttribute(tablebox, rows_colcount_step0). %s2 rows@colcount
classAttribute(tablebox, rows_colcount_step1). %s3
classAttribute(tablebox, rows_colcount_step2). %s4
classAttribute(tablebox, rows_colcount_stepn). %s5
classAttribute(tablebox, rows_computedheight_step0). %s2 rows@computedheight
classAttribute(tablebox, rows_computedheight_step1). %s3
classAttribute(tablebox, rows_computedheight_step2). %s4
classAttribute(tablebox, rows_computedheight_stepn). %s5
classAttribute(tablebox, colcount_step0). %s2 self@colcount
classAttribute(tablebox, colcount_step1). %s3
classAttribute(tablebox, colcount_step2). %s4
classAttribute(tablebox, colcount_stepn). %s5
classAttribute(tablebox, rows_rely_step0). %s2 rows@rely
classAttribute(tablebox, rows_rely_step1). %s3
classAttribute(tablebox, rows_rely_step2). %s4
classAttribute(tablebox, rows_rely_stepn). %s5
classAttribute(vbox, numchilds). %s1
classAttribute(vbox, childs_relboty_step0). %s2 childs@relboty
classAttribute(vbox, childs_relboty_step1). %s3
classAttribute(vbox, childs_relboty_step2). %s4
classAttribute(vbox, childs_relboty_stepn). %s5
classAttribute(vbox, childs_intrinsminwidth_step0). %s2 childs@intrinsminwidth
classAttribute(vbox, childs_intrinsminwidth_step1). %s3
classAttribute(vbox, childs_intrinsminwidth_step2). %s4
classAttribute(vbox, childs_intrinsminwidth_stepn). %s5
classAttribute(vbox, childs_displayborder_step0). %s2 childs@displayborder
classAttribute(vbox, childs_displayborder_step1). %s3
classAttribute(vbox, childs_displayborder_step2). %s4
classAttribute(vbox, childs_displayborder_stepn). %s5
classAttribute(vbox, intrinsminwidth_step0). %s2 self@intrinsminwidth
classAttribute(vbox, intrinsminwidth_step1). %s3
classAttribute(vbox, intrinsminwidth_step2). %s4
classAttribute(vbox, intrinsminwidth_stepn). %s5
classAttribute(vbox, intrinsheight_step0). %s2 self@intrinsheight
classAttribute(vbox, intrinsheight_step1). %s3
classAttribute(vbox, intrinsheight_step2). %s4
classAttribute(vbox, intrinsheight_stepn). %s5
classAttribute(vbox, childs_canvas_step0). %s2 childs@canvas
classAttribute(vbox, childs_canvas_step1). %s3
classAttribute(vbox, childs_canvas_step2). %s4
classAttribute(vbox, childs_canvas_stepn). %s5
classAttribute(vbox, numchilds_step0). %s2 self@numchilds
classAttribute(vbox, numchilds_step1). %s3
classAttribute(vbox, numchilds_step2). %s4
classAttribute(vbox, numchilds_stepn). %s5
classAttribute(vbox, childs_absx_step0). %s2 childs@absx
classAttribute(vbox, childs_absx_step1). %s3
classAttribute(vbox, childs_absx_step2). %s4
classAttribute(vbox, childs_absx_stepn). %s5
classAttribute(vbox, childs_relx_step0). %s2 childs@relx
classAttribute(vbox, childs_relx_step1). %s3
classAttribute(vbox, childs_relx_step2). %s4
classAttribute(vbox, childs_relx_stepn). %s5
classAttribute(vbox, childs_intrinsprefwidth_step0). %s2 childs@intrinsprefwidth
classAttribute(vbox, childs_intrinsprefwidth_step1). %s3
classAttribute(vbox, childs_intrinsprefwidth_step2). %s4
classAttribute(vbox, childs_intrinsprefwidth_stepn). %s5
classAttribute(vbox, childs_lineh_step0). %s2 childs@lineh
classAttribute(vbox, childs_lineh_step1). %s3
classAttribute(vbox, childs_lineh_step2). %s4
classAttribute(vbox, childs_lineh_stepn). %s5
classAttribute(vbox, childs_absy_step0). %s2 childs@absy
classAttribute(vbox, childs_absy_step1). %s3
classAttribute(vbox, childs_absy_step2). %s4
classAttribute(vbox, childs_absy_stepn). %s5
classAttribute(vbox, childs_rely_step0). %s2 childs@rely
classAttribute(vbox, childs_rely_step1). %s3
classAttribute(vbox, childs_rely_step2). %s4
classAttribute(vbox, childs_rely_stepn). %s5
classAttribute(vbox, childs_computedheight_step0). %s2 childs@computedheight
classAttribute(vbox, childs_computedheight_step1). %s3
classAttribute(vbox, childs_computedheight_step2). %s4
classAttribute(vbox, childs_computedheight_stepn). %s5
classAttribute(vbox, childs_availablewidth_step0). %s2 childs@availablewidth
classAttribute(vbox, childs_availablewidth_step1). %s3
classAttribute(vbox, childs_availablewidth_step2). %s4
classAttribute(vbox, childs_availablewidth_stepn). %s5
classAttribute(vbox, intrinsprefwidth_step0). %s2 self@intrinsprefwidth
classAttribute(vbox, intrinsprefwidth_step1). %s3
classAttribute(vbox, intrinsprefwidth_step2). %s4
classAttribute(vbox, intrinsprefwidth_stepn). %s5
classAttribute(vbox, childs_relrightx_step0). %s2 childs@relrightx
classAttribute(vbox, childs_relrightx_step1). %s3
classAttribute(vbox, childs_relrightx_step2). %s4
classAttribute(vbox, childs_relrightx_stepn). %s5
classAttribute(vbox, childs_computedwidth_step0). %s2 childs@computedwidth
classAttribute(vbox, childs_computedwidth_step1). %s3
classAttribute(vbox, childs_computedwidth_step2). %s4
classAttribute(vbox, childs_computedwidth_stepn). %s5
classAttribute(textbox, inhfontsize). %s1
classAttribute(textbox, rendercolor). %s1
classAttribute(textbox, lineheight). %s1
classAttribute(textbox, numberlines). %s1
classAttribute(textbox, metrics). %s1
classAttribute(textbox, linespacing). %s1
classAttribute(textbox, renderfontsize). %s1
classAttribute(textbox, overflow). %s1
classAttribute(textbox, inhcolor). %s1
