interface(top).
interface(hvbox).
interfaceAttribute(hvbox, height).
interfaceAttribute(hvbox, width).
interfaceAttribute(hvbox, bottom).
interfaceAttribute(hvbox, right).
class(root, top).
class(hbox, hvbox).
class(vbox, hvbox).
class(leaf, hvbox).
classChild(root, root, hvbox).
classChild(hbox, childsunroll0, hvbox).
classChild(hbox, childsunroll1, hvbox).
classChild(hbox, childsunroll2, hvbox).
classChild(hbox, childsunrolln, hvbox).
classChild(vbox, childsunroll0, hvbox).
classChild(vbox, childsunroll1, hvbox).
classChild(vbox, childsunroll2, hvbox).
classChild(vbox, childsunrolln, hvbox).
classField(gensymattrib, gensymattrib) :- false.
classField(root, gensymattrib).
classField(hbox, gensymattrib).
classField(vbox, gensymattrib).
classField(leaf, gensymattrib).
classField(leaf, heightuscorein).
classField(leaf, widthuscorein).
interfaceField(top, a).
interfaceField(top, display).
interfaceField(top, refname).
interfaceField(hvbox, visible).
interfaceField(hvbox, display).
interfaceField(hvbox, refname).
assignment(root, root, right, root, width). %a42
assignment(root, root, bottom, root, height). %a42
assignment(hbox, self, width, self, visible). %a42
assignment(hbox, self, width, self, childswidth). %a42
assignment(hbox, self, height, self, visible). %a42
assignment(hbox, self, height, self, childsheight). %a42
assignment(hbox, self, childswidth_step0, self, childs_width_step0). %a8
assignment(hbox, self, childswidth_step1, self, childs_width_step1). %a9
assignment(hbox, self, childswidth_step2, self, childs_width_step2). %a10
assignment(hbox, self, childswidth_stepn, self, childs_width_stepn). %a11
assignment(hbox, self, childswidth_step0, self, childs_width_stepn). %a8
assignment(hbox, self, childswidth_step0, self, gensymattrib). %a27 childsWidth
assignment(hbox, self, childswidth_step1, self, childswidth_step0). %a28
assignment(hbox, self, childswidth_step2, self, childswidth_step1). %a29
assignment(hbox, self, childswidth_stepn, self, childswidth_step2). %a30
assignment(hbox, self, childswidth, self, childswidth_stepn). %a35
assignment(hbox, self, childs_bottom_step0, self, bottom). %a17
assignment(hbox, self, childs_bottom_step0, self, gensymattrib). %a27 childs@bottom
assignment(hbox, self, childs_bottom_step1, self, childs_bottom_step0). %a28
assignment(hbox, self, childs_bottom_step2, self, childs_bottom_step1). %a29
assignment(hbox, self, childs_bottom_stepn, self, childs_bottom_step2). %a30
assignment(hbox, childsunroll0, bottom, self, childs_bottom_step0). %a31b
assignment(hbox, childsunroll1, bottom, self, childs_bottom_step1). %a32
assignment(hbox, childsunroll2, bottom, self, childs_bottom_step2). %a33
assignment(hbox, childsunrolln, bottom, self, childs_bottom_stepn). %a34
assignment(hbox, self, childs_right_step0, self, right). %a18
assignment(hbox, self, childs_right_step0, self, childs_width_step0). %a8
assignment(hbox, self, childs_right_step1, self, childs_width_step1). %a9
assignment(hbox, self, childs_right_step2, self, childs_width_step2). %a10
assignment(hbox, self, childs_right_stepn, self, childs_width_stepn). %a11
assignment(hbox, self, childs_right_step0, self, childs_width_stepn). %a8
assignment(hbox, self, childs_right_step0, self, gensymattrib). %a27 childs@right
assignment(hbox, self, childs_right_step1, self, childs_right_step0). %a28
assignment(hbox, self, childs_right_step2, self, childs_right_step1). %a29
assignment(hbox, self, childs_right_stepn, self, childs_right_step2). %a30
assignment(hbox, childsunroll0, right, self, childs_right_step0). %a31b
assignment(hbox, childsunroll1, right, self, childs_right_step1). %a32
assignment(hbox, childsunroll2, right, self, childs_right_step2). %a33
assignment(hbox, childsunrolln, right, self, childs_right_stepn). %a34
assignment(hbox, self, childsheight_step0, self, childs_height_step0). %a8
assignment(hbox, self, childsheight_step1, self, childs_height_step1). %a9
assignment(hbox, self, childsheight_step2, self, childs_height_step2). %a10
assignment(hbox, self, childsheight_stepn, self, childs_height_stepn). %a11
assignment(hbox, self, childsheight_step0, self, childs_height_stepn). %a8
assignment(hbox, self, childsheight_step0, self, gensymattrib). %a27 childsHeight
assignment(hbox, self, childsheight_step1, self, childsheight_step0). %a28
assignment(hbox, self, childsheight_step2, self, childsheight_step1). %a29
assignment(hbox, self, childsheight_stepn, self, childsheight_step2). %a30
assignment(hbox, self, childsheight, self, childsheight_stepn). %a35
assignment(hbox, self, childs_height_step0, self, gensymattrib). %a27 childs@height
assignment(hbox, self, childs_height_step1, self, childs_height_step0). %a28
assignment(hbox, self, childs_height_step2, self, childs_height_step1). %a29
assignment(hbox, self, childs_height_stepn, self, childs_height_step2). %a30
assignment(hbox, self, childs_height_step0, childsunroll0, height). %a45
assignment(hbox, self, childs_height_step1, childsunroll1, height). %a46
assignment(hbox, self, childs_height_step2, childsunroll2, height). %a47
assignment(hbox, self, childs_height_stepn, childsunrolln, height). %a48
assignment(hbox, self, childs_width_step0, self, gensymattrib). %a27 childs@width
assignment(hbox, self, childs_width_step1, self, childs_width_step0). %a28
assignment(hbox, self, childs_width_step2, self, childs_width_step1). %a29
assignment(hbox, self, childs_width_stepn, self, childs_width_step2). %a30
assignment(hbox, self, childs_width_step0, childsunroll0, width). %a45
assignment(hbox, self, childs_width_step1, childsunroll1, width). %a46
assignment(hbox, self, childs_width_step2, childsunroll2, width). %a47
assignment(hbox, self, childs_width_stepn, childsunrolln, width). %a48
assignment(vbox, self, height, self, visible). %a42
assignment(vbox, self, height, self, childsheight). %a42
assignment(vbox, self, width, self, visible). %a42
assignment(vbox, self, width, self, childswidth). %a42
assignment(vbox, self, childsheight_step0, self, childs_height_step0). %a8
assignment(vbox, self, childsheight_step1, self, childs_height_step1). %a9
assignment(vbox, self, childsheight_step2, self, childs_height_step2). %a10
assignment(vbox, self, childsheight_stepn, self, childs_height_stepn). %a11
assignment(vbox, self, childsheight_step0, self, childs_height_stepn). %a8
assignment(vbox, self, childsheight_step0, self, gensymattrib). %a27 childsHeight
assignment(vbox, self, childsheight_step1, self, childsheight_step0). %a28
assignment(vbox, self, childsheight_step2, self, childsheight_step1). %a29
assignment(vbox, self, childsheight_stepn, self, childsheight_step2). %a30
assignment(vbox, self, childsheight, self, childsheight_stepn). %a35
assignment(vbox, self, childs_bottom_step0, self, bottom). %a18
assignment(vbox, self, childs_bottom_step0, self, childs_height_step0). %a8
assignment(vbox, self, childs_bottom_step1, self, childs_height_step1). %a9
assignment(vbox, self, childs_bottom_step2, self, childs_height_step2). %a10
assignment(vbox, self, childs_bottom_stepn, self, childs_height_stepn). %a11
assignment(vbox, self, childs_bottom_step0, self, childs_height_stepn). %a8
assignment(vbox, self, childs_bottom_step0, self, gensymattrib). %a27 childs@bottom
assignment(vbox, self, childs_bottom_step1, self, childs_bottom_step0). %a28
assignment(vbox, self, childs_bottom_step2, self, childs_bottom_step1). %a29
assignment(vbox, self, childs_bottom_stepn, self, childs_bottom_step2). %a30
assignment(vbox, childsunroll0, bottom, self, childs_bottom_step0). %a31b
assignment(vbox, childsunroll1, bottom, self, childs_bottom_step1). %a32
assignment(vbox, childsunroll2, bottom, self, childs_bottom_step2). %a33
assignment(vbox, childsunrolln, bottom, self, childs_bottom_stepn). %a34
assignment(vbox, self, childs_right_step0, self, right). %a17
assignment(vbox, self, childs_right_step0, self, gensymattrib). %a27 childs@right
assignment(vbox, self, childs_right_step1, self, childs_right_step0). %a28
assignment(vbox, self, childs_right_step2, self, childs_right_step1). %a29
assignment(vbox, self, childs_right_stepn, self, childs_right_step2). %a30
assignment(vbox, childsunroll0, right, self, childs_right_step0). %a31b
assignment(vbox, childsunroll1, right, self, childs_right_step1). %a32
assignment(vbox, childsunroll2, right, self, childs_right_step2). %a33
assignment(vbox, childsunrolln, right, self, childs_right_stepn). %a34
assignment(vbox, self, childswidth_step0, self, childs_width_step0). %a8
assignment(vbox, self, childswidth_step1, self, childs_width_step1). %a9
assignment(vbox, self, childswidth_step2, self, childs_width_step2). %a10
assignment(vbox, self, childswidth_stepn, self, childs_width_stepn). %a11
assignment(vbox, self, childswidth_step0, self, childs_width_stepn). %a8
assignment(vbox, self, childswidth_step0, self, gensymattrib). %a27 childsWidth
assignment(vbox, self, childswidth_step1, self, childswidth_step0). %a28
assignment(vbox, self, childswidth_step2, self, childswidth_step1). %a29
assignment(vbox, self, childswidth_stepn, self, childswidth_step2). %a30
assignment(vbox, self, childswidth, self, childswidth_stepn). %a35
assignment(vbox, self, childs_height_step0, self, gensymattrib). %a27 childs@height
assignment(vbox, self, childs_height_step1, self, childs_height_step0). %a28
assignment(vbox, self, childs_height_step2, self, childs_height_step1). %a29
assignment(vbox, self, childs_height_stepn, self, childs_height_step2). %a30
assignment(vbox, self, childs_height_step0, childsunroll0, height). %a45
assignment(vbox, self, childs_height_step1, childsunroll1, height). %a46
assignment(vbox, self, childs_height_step2, childsunroll2, height). %a47
assignment(vbox, self, childs_height_stepn, childsunrolln, height). %a48
assignment(vbox, self, childs_width_step0, self, gensymattrib). %a27 childs@width
assignment(vbox, self, childs_width_step1, self, childs_width_step0). %a28
assignment(vbox, self, childs_width_step2, self, childs_width_step1). %a29
assignment(vbox, self, childs_width_stepn, self, childs_width_step2). %a30
assignment(vbox, self, childs_width_step0, childsunroll0, width). %a45
assignment(vbox, self, childs_width_step1, childsunroll1, width). %a46
assignment(vbox, self, childs_width_step2, childsunroll2, width). %a47
assignment(vbox, self, childs_width_stepn, childsunrolln, width). %a48
assignment(leaf, self, height, self, heightuscorein). %a42
assignment(leaf, self, width, self, widthuscorein). %a42
assignment(gensymattrib, gensymattrib, gensymattrib, gensymattrib, gensymattrib) :- false.
classAttribute(hbox, childswidth). %s1
classAttribute(hbox, childsheight). %s1
classAttribute(hbox, childs_bottom_step0). %s2 childs@bottom
classAttribute(hbox, childs_bottom_step1). %s3
classAttribute(hbox, childs_bottom_step2). %s4
classAttribute(hbox, childs_bottom_stepn). %s5
classAttribute(hbox, childs_height_step0). %s2 childs@height
classAttribute(hbox, childs_height_step1). %s3
classAttribute(hbox, childs_height_step2). %s4
classAttribute(hbox, childs_height_stepn). %s5
classAttribute(hbox, childsheight_step0). %s2 self@childsheight
classAttribute(hbox, childsheight_step1). %s3
classAttribute(hbox, childsheight_step2). %s4
classAttribute(hbox, childsheight_stepn). %s5
classAttribute(hbox, childs_width_step0). %s2 childs@width
classAttribute(hbox, childs_width_step1). %s3
classAttribute(hbox, childs_width_step2). %s4
classAttribute(hbox, childs_width_stepn). %s5
classAttribute(hbox, childswidth_step0). %s2 self@childswidth
classAttribute(hbox, childswidth_step1). %s3
classAttribute(hbox, childswidth_step2). %s4
classAttribute(hbox, childswidth_stepn). %s5
classAttribute(hbox, childs_right_step0). %s2 childs@right
classAttribute(hbox, childs_right_step1). %s3
classAttribute(hbox, childs_right_step2). %s4
classAttribute(hbox, childs_right_stepn). %s5
classAttribute(vbox, childswidth). %s1
classAttribute(vbox, childsheight). %s1
classAttribute(vbox, childs_bottom_step0). %s2 childs@bottom
classAttribute(vbox, childs_bottom_step1). %s3
classAttribute(vbox, childs_bottom_step2). %s4
classAttribute(vbox, childs_bottom_stepn). %s5
classAttribute(vbox, childs_height_step0). %s2 childs@height
classAttribute(vbox, childs_height_step1). %s3
classAttribute(vbox, childs_height_step2). %s4
classAttribute(vbox, childs_height_stepn). %s5
classAttribute(vbox, childsheight_step0). %s2 self@childsheight
classAttribute(vbox, childsheight_step1). %s3
classAttribute(vbox, childsheight_step2). %s4
classAttribute(vbox, childsheight_stepn). %s5
classAttribute(vbox, childs_width_step0). %s2 childs@width
classAttribute(vbox, childs_width_step1). %s3
classAttribute(vbox, childs_width_step2). %s4
classAttribute(vbox, childs_width_stepn). %s5
classAttribute(vbox, childs_right_step0). %s2 childs@right
classAttribute(vbox, childs_right_step1). %s3
classAttribute(vbox, childs_right_step2). %s4
classAttribute(vbox, childs_right_stepn). %s5
classAttribute(vbox, childswidth_step0). %s2 self@childswidth
classAttribute(vbox, childswidth_step1). %s3
classAttribute(vbox, childswidth_step2). %s4
classAttribute(vbox, childswidth_stepn). %s5
