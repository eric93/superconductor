interface(top).
interface(hvbox).
interfaceAttribute(hvbox, widthuscoredelta).
interfaceAttribute(hvbox, bottomuscoredeltauscore0).
interfaceAttribute(hvbox, height).
interfaceAttribute(hvbox, rightuscoredelta).
interfaceAttribute(hvbox, widthuscoredeltauscore0).
interfaceAttribute(hvbox, bottomuscoredelta).
interfaceAttribute(hvbox, rightuscoredeltauscore0).
interfaceAttribute(hvbox, width).
interfaceAttribute(hvbox, bottom).
interfaceAttribute(hvbox, heightuscoredelta).
interfaceAttribute(hvbox, heightuscoredeltauscore0).
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
classField(hbox, childswidthuscoreold).
classField(hbox, childsheightuscoreolduscore0).
classField(hbox, childswidthuscoreolduscore0).
classField(hbox, childsheightuscoreold).
classField(vbox, gensymattrib).
classField(vbox, childswidthuscoreold).
classField(vbox, childsheightuscoreolduscore0).
classField(vbox, childswidthuscoreolduscore0).
classField(vbox, childsheightuscoreold).
classField(leaf, gensymattrib).
classField(leaf, heightuscoreinuscoredelta).
classField(leaf, heightuscorein).
classField(leaf, widthuscorein).
classField(leaf, widthuscoreinuscoredelta).
interfaceField(top, a).
interfaceField(top, display).
interfaceField(top, refname).
interfaceField(top, auscoredelta).
interfaceField(hvbox, widthuscoreolduscore0).
interfaceField(hvbox, visible).
interfaceField(hvbox, bottomuscoreolduscore0).
interfaceField(hvbox, heightuscoreold).
interfaceField(hvbox, widthuscoreold).
interfaceField(hvbox, display).
interfaceField(hvbox, refname).
interfaceField(hvbox, rightuscoreolduscore0).
interfaceField(hvbox, visibleuscoredelta).
interfaceField(hvbox, bottomuscoreold).
interfaceField(hvbox, rightuscoreold).
interfaceField(hvbox, heightuscoreolduscore0).
assignment(root, root, rightuscoredeltauscore0, root, widthuscoredelta). %a42
assignment(root, root, rightuscoredelta, root, rightuscoreolduscore0). %a42
assignment(root, root, rightuscoredelta, root, right). %a42
assignment(root, root, bottomuscoredeltauscore0, root, heightuscoredelta). %a42
assignment(root, root, right, root, width). %a42
assignment(root, root, right, root, rightuscoredeltauscore0). %a42
assignment(root, root, right, root, rightuscoreolduscore0). %a42
assignment(root, root, bottom, root, height). %a42
assignment(root, root, bottom, root, bottomuscoreolduscore0). %a42
assignment(root, root, bottom, root, bottomuscoredeltauscore0). %a42
assignment(root, root, bottomuscoredelta, root, bottom). %a42
assignment(root, root, bottomuscoredelta, root, bottomuscoreolduscore0). %a42
assignment(hbox, self, width, self, widthuscoreolduscore0). %a42
assignment(hbox, self, width, self, visible). %a42
assignment(hbox, self, width, self, widthuscoredeltauscore0). %a42
assignment(hbox, self, width, self, childswidth). %a42
assignment(hbox, self, childsheightuscoredelta, self, childsheight). %a42
assignment(hbox, self, childsheightuscoredelta, self, childsheightuscoreolduscore0). %a42
assignment(hbox, self, height, self, visible). %a42
assignment(hbox, self, height, self, childsheight). %a42
assignment(hbox, self, height, self, heightuscoredeltauscore0). %a42
assignment(hbox, self, height, self, heightuscoreolduscore0). %a42
assignment(hbox, self, heightuscoredeltauscore0, self, childsheightuscoredelta). %a42
assignment(hbox, self, heightuscoredeltauscore0, self, visibleuscoredelta). %a42
assignment(hbox, self, heightuscoredelta, self, height). %a42
assignment(hbox, self, heightuscoredelta, self, heightuscoreolduscore0). %a42
assignment(hbox, self, widthuscoredeltauscore0, self, childswidthuscoredelta). %a42
assignment(hbox, self, widthuscoredeltauscore0, self, visibleuscoredelta). %a42
assignment(hbox, self, widthuscoredelta, self, widthuscoreolduscore0). %a42
assignment(hbox, self, widthuscoredelta, self, width). %a42
assignment(hbox, self, childswidthuscoredelta, self, childswidth). %a42
assignment(hbox, self, childswidthuscoredelta, self, childswidthuscoreolduscore0). %a42
assignment(hbox, self, childsheight_step0, self, childsheightuscoredeltauscore0). %a18
assignment(hbox, self, childsheight_step0, self, childsheightuscoreold). %a18
assignment(hbox, self, childsheight_step0, self, childs_height_step0). %a8
assignment(hbox, self, childsheight_step1, self, childs_height_step1). %a9
assignment(hbox, self, childsheight_step2, self, childs_height_step2). %a10
assignment(hbox, self, childsheight_stepn, self, childs_height_stepn). %a11
assignment(hbox, self, childsheight_step0, self, childs_height_stepn). %a8
assignment(hbox, self, childsheight_step0, self, childsheightuscoredeltauscore0). %a17
assignment(hbox, self, childsheight_step0, self, gensymattrib). %a27 childsHeight
assignment(hbox, self, childsheight_step1, self, childsheight_step0). %a28
assignment(hbox, self, childsheight_step2, self, childsheight_step1). %a29
assignment(hbox, self, childsheight_stepn, self, childsheight_step2). %a30
assignment(hbox, self, childsheight, self, childsheight_stepn). %a35
assignment(hbox, self, childs_rightuscoredeltauscore0_step0, self, rightuscoredelta). %a18
assignment(hbox, self, childs_rightuscoredeltauscore0_step1, self, childs_rightuscoredelta_step0). %a12
assignment(hbox, self, childs_rightuscoredeltauscore0_step2, self, childs_rightuscoredelta_step1). %a13
assignment(hbox, self, childs_rightuscoredeltauscore0_stepn, self, childs_rightuscoredelta_step2). %a14
assignment(hbox, self, childs_rightuscoredeltauscore0_step0, self, childs_widthuscoredelta_step0). %a8
assignment(hbox, self, childs_rightuscoredeltauscore0_step1, self, childs_widthuscoredelta_step1). %a9
assignment(hbox, self, childs_rightuscoredeltauscore0_step2, self, childs_widthuscoredelta_step2). %a10
assignment(hbox, self, childs_rightuscoredeltauscore0_stepn, self, childs_widthuscoredelta_stepn). %a11
assignment(hbox, self, childs_rightuscoredeltauscore0_step0, self, childs_widthuscoredelta_stepn). %a8
assignment(hbox, self, childs_rightuscoredeltauscore0_step0, self, gensymattrib). %a27 childs@rightuscoredeltauscore0
assignment(hbox, self, childs_rightuscoredeltauscore0_step1, self, childs_rightuscoredeltauscore0_step0). %a28
assignment(hbox, self, childs_rightuscoredeltauscore0_step2, self, childs_rightuscoredeltauscore0_step1). %a29
assignment(hbox, self, childs_rightuscoredeltauscore0_stepn, self, childs_rightuscoredeltauscore0_step2). %a30
assignment(hbox, childsunroll0, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_step0). %a31b
assignment(hbox, childsunroll1, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_step1). %a32
assignment(hbox, childsunroll2, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_step2). %a33
assignment(hbox, childsunrolln, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_stepn). %a34
assignment(hbox, self, childs_bottomuscoredeltauscore0_step0, self, bottomuscoredelta). %a17
assignment(hbox, self, childs_bottomuscoredeltauscore0_step0, self, gensymattrib). %a27 childs@bottomuscoredeltauscore0
assignment(hbox, self, childs_bottomuscoredeltauscore0_step1, self, childs_bottomuscoredeltauscore0_step0). %a28
assignment(hbox, self, childs_bottomuscoredeltauscore0_step2, self, childs_bottomuscoredeltauscore0_step1). %a29
assignment(hbox, self, childs_bottomuscoredeltauscore0_stepn, self, childs_bottomuscoredeltauscore0_step2). %a30
assignment(hbox, childsunroll0, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_step0). %a31b
assignment(hbox, childsunroll1, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_step1). %a32
assignment(hbox, childsunroll2, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_step2). %a33
assignment(hbox, childsunrolln, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_stepn). %a34
assignment(hbox, self, childs_bottom_step0, self, childs_bottomuscoreolduscore0_step0). %a8
assignment(hbox, self, childs_bottom_step1, self, childs_bottomuscoreolduscore0_step1). %a9
assignment(hbox, self, childs_bottom_step2, self, childs_bottomuscoreolduscore0_step2). %a10
assignment(hbox, self, childs_bottom_stepn, self, childs_bottomuscoreolduscore0_stepn). %a11
assignment(hbox, self, childs_bottom_step0, self, childs_bottomuscoreolduscore0_stepn). %a8
assignment(hbox, self, childs_bottom_step0, self, childs_bottomuscoredeltauscore0_step0). %a8
assignment(hbox, self, childs_bottom_step1, self, childs_bottomuscoredeltauscore0_step1). %a9
assignment(hbox, self, childs_bottom_step2, self, childs_bottomuscoredeltauscore0_step2). %a10
assignment(hbox, self, childs_bottom_stepn, self, childs_bottomuscoredeltauscore0_stepn). %a11
assignment(hbox, self, childs_bottom_step0, self, bottom). %a17
assignment(hbox, self, childs_bottom_step0, self, gensymattrib). %a27 childs@bottom
assignment(hbox, self, childs_bottom_step1, self, childs_bottom_step0). %a28
assignment(hbox, self, childs_bottom_step2, self, childs_bottom_step1). %a29
assignment(hbox, self, childs_bottom_stepn, self, childs_bottom_step2). %a30
assignment(hbox, childsunroll0, bottom, self, childs_bottom_step0). %a31b
assignment(hbox, childsunroll1, bottom, self, childs_bottom_step1). %a32
assignment(hbox, childsunroll2, bottom, self, childs_bottom_step2). %a33
assignment(hbox, childsunrolln, bottom, self, childs_bottom_stepn). %a34
assignment(hbox, self, childs_rightuscoredelta_step0, self, childs_right_step0). %a8
assignment(hbox, self, childs_rightuscoredelta_step1, self, childs_right_step1). %a9
assignment(hbox, self, childs_rightuscoredelta_step2, self, childs_right_step2). %a10
assignment(hbox, self, childs_rightuscoredelta_stepn, self, childs_right_stepn). %a11
assignment(hbox, self, childs_rightuscoredelta_step0, self, childs_rightuscoreolduscore0_step0). %a8
assignment(hbox, self, childs_rightuscoredelta_step1, self, childs_rightuscoreolduscore0_step1). %a9
assignment(hbox, self, childs_rightuscoredelta_step2, self, childs_rightuscoreolduscore0_step2). %a10
assignment(hbox, self, childs_rightuscoredelta_stepn, self, childs_rightuscoreolduscore0_stepn). %a11
assignment(hbox, self, childs_rightuscoredelta_step0, self, childs_rightuscoreolduscore0_stepn). %a8
assignment(hbox, self, childs_rightuscoredelta_step0, self, gensymattrib). %a27 childs@rightuscoredelta
assignment(hbox, self, childs_rightuscoredelta_step1, self, childs_rightuscoredelta_step0). %a28
assignment(hbox, self, childs_rightuscoredelta_step2, self, childs_rightuscoredelta_step1). %a29
assignment(hbox, self, childs_rightuscoredelta_stepn, self, childs_rightuscoredelta_step2). %a30
assignment(hbox, childsunroll0, rightuscoredelta, self, childs_rightuscoredelta_step0). %a31b
assignment(hbox, childsunroll1, rightuscoredelta, self, childs_rightuscoredelta_step1). %a32
assignment(hbox, childsunroll2, rightuscoredelta, self, childs_rightuscoredelta_step2). %a33
assignment(hbox, childsunrolln, rightuscoredelta, self, childs_rightuscoredelta_stepn). %a34
assignment(hbox, self, childs_bottomuscoredelta_step0, self, childs_bottom_step0). %a8
assignment(hbox, self, childs_bottomuscoredelta_step1, self, childs_bottom_step1). %a9
assignment(hbox, self, childs_bottomuscoredelta_step2, self, childs_bottom_step2). %a10
assignment(hbox, self, childs_bottomuscoredelta_stepn, self, childs_bottom_stepn). %a11
assignment(hbox, self, childs_bottomuscoredelta_step0, self, childs_bottomuscoreolduscore0_step0). %a8
assignment(hbox, self, childs_bottomuscoredelta_step1, self, childs_bottomuscoreolduscore0_step1). %a9
assignment(hbox, self, childs_bottomuscoredelta_step2, self, childs_bottomuscoreolduscore0_step2). %a10
assignment(hbox, self, childs_bottomuscoredelta_stepn, self, childs_bottomuscoreolduscore0_stepn). %a11
assignment(hbox, self, childs_bottomuscoredelta_step0, self, childs_bottomuscoreolduscore0_stepn). %a8
assignment(hbox, self, childs_bottomuscoredelta_step0, self, gensymattrib). %a27 childs@bottomuscoredelta
assignment(hbox, self, childs_bottomuscoredelta_step1, self, childs_bottomuscoredelta_step0). %a28
assignment(hbox, self, childs_bottomuscoredelta_step2, self, childs_bottomuscoredelta_step1). %a29
assignment(hbox, self, childs_bottomuscoredelta_stepn, self, childs_bottomuscoredelta_step2). %a30
assignment(hbox, childsunroll0, bottomuscoredelta, self, childs_bottomuscoredelta_step0). %a31b
assignment(hbox, childsunroll1, bottomuscoredelta, self, childs_bottomuscoredelta_step1). %a32
assignment(hbox, childsunroll2, bottomuscoredelta, self, childs_bottomuscoredelta_step2). %a33
assignment(hbox, childsunrolln, bottomuscoredelta, self, childs_bottomuscoredelta_stepn). %a34
assignment(hbox, self, childsheightuscoredeltauscore0_step0, self, childs_heightuscoredelta_step0). %a8
assignment(hbox, self, childsheightuscoredeltauscore0_step1, self, childs_heightuscoredelta_step1). %a9
assignment(hbox, self, childsheightuscoredeltauscore0_step2, self, childs_heightuscoredelta_step2). %a10
assignment(hbox, self, childsheightuscoredeltauscore0_stepn, self, childs_heightuscoredelta_stepn). %a11
assignment(hbox, self, childsheightuscoredeltauscore0_step0, self, childs_heightuscoredelta_stepn). %a8
assignment(hbox, self, childsheightuscoredeltauscore0_step0, self, gensymattrib). %a27 childsHeightuscoredeltauscore0
assignment(hbox, self, childsheightuscoredeltauscore0_step1, self, childsheightuscoredeltauscore0_step0). %a28
assignment(hbox, self, childsheightuscoredeltauscore0_step2, self, childsheightuscoredeltauscore0_step1). %a29
assignment(hbox, self, childsheightuscoredeltauscore0_stepn, self, childsheightuscoredeltauscore0_step2). %a30
assignment(hbox, self, childsheightuscoredeltauscore0, self, childsheightuscoredeltauscore0_stepn). %a35
assignment(hbox, self, childs_right_step0, self, right). %a18
assignment(hbox, self, childs_right_step0, self, childs_width_step0). %a8
assignment(hbox, self, childs_right_step1, self, childs_width_step1). %a9
assignment(hbox, self, childs_right_step2, self, childs_width_step2). %a10
assignment(hbox, self, childs_right_stepn, self, childs_width_stepn). %a11
assignment(hbox, self, childs_right_step0, self, childs_width_stepn). %a8
assignment(hbox, self, childs_right_step0, self, childs_rightuscoreolduscore0_step0). %a8
assignment(hbox, self, childs_right_step1, self, childs_rightuscoreolduscore0_step1). %a9
assignment(hbox, self, childs_right_step2, self, childs_rightuscoreolduscore0_step2). %a10
assignment(hbox, self, childs_right_stepn, self, childs_rightuscoreolduscore0_stepn). %a11
assignment(hbox, self, childs_right_step0, self, childs_rightuscoreolduscore0_stepn). %a8
assignment(hbox, self, childs_right_step0, self, childs_rightuscoredeltauscore0_step0). %a8
assignment(hbox, self, childs_right_step1, self, childs_rightuscoredeltauscore0_step1). %a9
assignment(hbox, self, childs_right_step2, self, childs_rightuscoredeltauscore0_step2). %a10
assignment(hbox, self, childs_right_stepn, self, childs_rightuscoredeltauscore0_stepn). %a11
assignment(hbox, self, childs_right_step0, self, gensymattrib). %a27 childs@right
assignment(hbox, self, childs_right_step1, self, childs_right_step0). %a28
assignment(hbox, self, childs_right_step2, self, childs_right_step1). %a29
assignment(hbox, self, childs_right_stepn, self, childs_right_step2). %a30
assignment(hbox, childsunroll0, right, self, childs_right_step0). %a31b
assignment(hbox, childsunroll1, right, self, childs_right_step1). %a32
assignment(hbox, childsunroll2, right, self, childs_right_step2). %a33
assignment(hbox, childsunrolln, right, self, childs_right_stepn). %a34
assignment(hbox, self, childswidthuscoredeltauscore0_step0, self, childs_widthuscoredelta_step0). %a8
assignment(hbox, self, childswidthuscoredeltauscore0_step1, self, childs_widthuscoredelta_step1). %a9
assignment(hbox, self, childswidthuscoredeltauscore0_step2, self, childs_widthuscoredelta_step2). %a10
assignment(hbox, self, childswidthuscoredeltauscore0_stepn, self, childs_widthuscoredelta_stepn). %a11
assignment(hbox, self, childswidthuscoredeltauscore0_step0, self, childs_widthuscoredelta_stepn). %a8
assignment(hbox, self, childswidthuscoredeltauscore0_step0, self, gensymattrib). %a27 childsWidthuscoredeltauscore0
assignment(hbox, self, childswidthuscoredeltauscore0_step1, self, childswidthuscoredeltauscore0_step0). %a28
assignment(hbox, self, childswidthuscoredeltauscore0_step2, self, childswidthuscoredeltauscore0_step1). %a29
assignment(hbox, self, childswidthuscoredeltauscore0_stepn, self, childswidthuscoredeltauscore0_step2). %a30
assignment(hbox, self, childswidthuscoredeltauscore0, self, childswidthuscoredeltauscore0_stepn). %a35
assignment(hbox, self, childswidth_step0, self, childswidthuscoreold). %a18
assignment(hbox, self, childswidth_step0, self, childswidthuscoredeltauscore0). %a18
assignment(hbox, self, childswidth_step0, self, childswidthuscoredeltauscore0). %a17
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
assignment(hbox, self, childs_height_step0, self, gensymattrib). %a27 childs@height
assignment(hbox, self, childs_height_step1, self, childs_height_step0). %a28
assignment(hbox, self, childs_height_step2, self, childs_height_step1). %a29
assignment(hbox, self, childs_height_stepn, self, childs_height_step2). %a30
assignment(hbox, self, childs_height_step0, childsunroll0, height). %a45
assignment(hbox, self, childs_height_step1, childsunroll1, height). %a46
assignment(hbox, self, childs_height_step2, childsunroll2, height). %a47
assignment(hbox, self, childs_height_stepn, childsunrolln, height). %a48
assignment(hbox, self, childs_bottomuscoreolduscore0_step0, self, gensymattrib). %a27 childs@bottomuscoreolduscore0
assignment(hbox, self, childs_bottomuscoreolduscore0_step1, self, childs_bottomuscoreolduscore0_step0). %a28
assignment(hbox, self, childs_bottomuscoreolduscore0_step2, self, childs_bottomuscoreolduscore0_step1). %a29
assignment(hbox, self, childs_bottomuscoreolduscore0_stepn, self, childs_bottomuscoreolduscore0_step2). %a30
assignment(hbox, self, childs_bottomuscoreolduscore0_step0, childsunroll0, bottomuscoreolduscore0). %a45
assignment(hbox, self, childs_bottomuscoreolduscore0_step1, childsunroll1, bottomuscoreolduscore0). %a46
assignment(hbox, self, childs_bottomuscoreolduscore0_step2, childsunroll2, bottomuscoreolduscore0). %a47
assignment(hbox, self, childs_bottomuscoreolduscore0_stepn, childsunrolln, bottomuscoreolduscore0). %a48
assignment(hbox, self, childs_heightuscoredelta_step0, self, gensymattrib). %a27 childs@heightuscoredelta
assignment(hbox, self, childs_heightuscoredelta_step1, self, childs_heightuscoredelta_step0). %a28
assignment(hbox, self, childs_heightuscoredelta_step2, self, childs_heightuscoredelta_step1). %a29
assignment(hbox, self, childs_heightuscoredelta_stepn, self, childs_heightuscoredelta_step2). %a30
assignment(hbox, self, childs_heightuscoredelta_step0, childsunroll0, heightuscoredelta). %a45
assignment(hbox, self, childs_heightuscoredelta_step1, childsunroll1, heightuscoredelta). %a46
assignment(hbox, self, childs_heightuscoredelta_step2, childsunroll2, heightuscoredelta). %a47
assignment(hbox, self, childs_heightuscoredelta_stepn, childsunrolln, heightuscoredelta). %a48
assignment(hbox, self, childs_width_step0, self, gensymattrib). %a27 childs@width
assignment(hbox, self, childs_width_step1, self, childs_width_step0). %a28
assignment(hbox, self, childs_width_step2, self, childs_width_step1). %a29
assignment(hbox, self, childs_width_stepn, self, childs_width_step2). %a30
assignment(hbox, self, childs_width_step0, childsunroll0, width). %a45
assignment(hbox, self, childs_width_step1, childsunroll1, width). %a46
assignment(hbox, self, childs_width_step2, childsunroll2, width). %a47
assignment(hbox, self, childs_width_stepn, childsunrolln, width). %a48
assignment(hbox, self, childs_rightuscoreolduscore0_step0, self, gensymattrib). %a27 childs@rightuscoreolduscore0
assignment(hbox, self, childs_rightuscoreolduscore0_step1, self, childs_rightuscoreolduscore0_step0). %a28
assignment(hbox, self, childs_rightuscoreolduscore0_step2, self, childs_rightuscoreolduscore0_step1). %a29
assignment(hbox, self, childs_rightuscoreolduscore0_stepn, self, childs_rightuscoreolduscore0_step2). %a30
assignment(hbox, self, childs_rightuscoreolduscore0_step0, childsunroll0, rightuscoreolduscore0). %a45
assignment(hbox, self, childs_rightuscoreolduscore0_step1, childsunroll1, rightuscoreolduscore0). %a46
assignment(hbox, self, childs_rightuscoreolduscore0_step2, childsunroll2, rightuscoreolduscore0). %a47
assignment(hbox, self, childs_rightuscoreolduscore0_stepn, childsunrolln, rightuscoreolduscore0). %a48
assignment(hbox, self, childs_widthuscoredelta_step0, self, gensymattrib). %a27 childs@widthuscoredelta
assignment(hbox, self, childs_widthuscoredelta_step1, self, childs_widthuscoredelta_step0). %a28
assignment(hbox, self, childs_widthuscoredelta_step2, self, childs_widthuscoredelta_step1). %a29
assignment(hbox, self, childs_widthuscoredelta_stepn, self, childs_widthuscoredelta_step2). %a30
assignment(hbox, self, childs_widthuscoredelta_step0, childsunroll0, widthuscoredelta). %a45
assignment(hbox, self, childs_widthuscoredelta_step1, childsunroll1, widthuscoredelta). %a46
assignment(hbox, self, childs_widthuscoredelta_step2, childsunroll2, widthuscoredelta). %a47
assignment(hbox, self, childs_widthuscoredelta_stepn, childsunrolln, widthuscoredelta). %a48
assignment(vbox, self, heightuscoredelta, self, height). %a42
assignment(vbox, self, heightuscoredelta, self, heightuscoreolduscore0). %a42
assignment(vbox, self, widthuscoredeltauscore0, self, childswidthuscoredelta). %a42
assignment(vbox, self, widthuscoredeltauscore0, self, visibleuscoredelta). %a42
assignment(vbox, self, height, self, visible). %a42
assignment(vbox, self, height, self, childsheight). %a42
assignment(vbox, self, height, self, heightuscoredeltauscore0). %a42
assignment(vbox, self, height, self, heightuscoreolduscore0). %a42
assignment(vbox, self, childsheightuscoredelta, self, childsheight). %a42
assignment(vbox, self, childsheightuscoredelta, self, childsheightuscoreolduscore0). %a42
assignment(vbox, self, heightuscoredeltauscore0, self, childsheightuscoredelta). %a42
assignment(vbox, self, heightuscoredeltauscore0, self, visibleuscoredelta). %a42
assignment(vbox, self, width, self, widthuscoreolduscore0). %a42
assignment(vbox, self, width, self, visible). %a42
assignment(vbox, self, width, self, widthuscoredeltauscore0). %a42
assignment(vbox, self, width, self, childswidth). %a42
assignment(vbox, self, widthuscoredelta, self, widthuscoreolduscore0). %a42
assignment(vbox, self, widthuscoredelta, self, width). %a42
assignment(vbox, self, childswidthuscoredelta, self, childswidth). %a42
assignment(vbox, self, childswidthuscoredelta, self, childswidthuscoreolduscore0). %a42
assignment(vbox, self, childs_rightuscoredelta_step0, self, childs_right_step0). %a8
assignment(vbox, self, childs_rightuscoredelta_step1, self, childs_right_step1). %a9
assignment(vbox, self, childs_rightuscoredelta_step2, self, childs_right_step2). %a10
assignment(vbox, self, childs_rightuscoredelta_stepn, self, childs_right_stepn). %a11
assignment(vbox, self, childs_rightuscoredelta_step0, self, childs_rightuscoreolduscore0_step0). %a8
assignment(vbox, self, childs_rightuscoredelta_step1, self, childs_rightuscoreolduscore0_step1). %a9
assignment(vbox, self, childs_rightuscoredelta_step2, self, childs_rightuscoreolduscore0_step2). %a10
assignment(vbox, self, childs_rightuscoredelta_stepn, self, childs_rightuscoreolduscore0_stepn). %a11
assignment(vbox, self, childs_rightuscoredelta_step0, self, childs_rightuscoreolduscore0_stepn). %a8
assignment(vbox, self, childs_rightuscoredelta_step0, self, gensymattrib). %a27 childs@rightuscoredelta
assignment(vbox, self, childs_rightuscoredelta_step1, self, childs_rightuscoredelta_step0). %a28
assignment(vbox, self, childs_rightuscoredelta_step2, self, childs_rightuscoredelta_step1). %a29
assignment(vbox, self, childs_rightuscoredelta_stepn, self, childs_rightuscoredelta_step2). %a30
assignment(vbox, childsunroll0, rightuscoredelta, self, childs_rightuscoredelta_step0). %a31b
assignment(vbox, childsunroll1, rightuscoredelta, self, childs_rightuscoredelta_step1). %a32
assignment(vbox, childsunroll2, rightuscoredelta, self, childs_rightuscoredelta_step2). %a33
assignment(vbox, childsunrolln, rightuscoredelta, self, childs_rightuscoredelta_stepn). %a34
assignment(vbox, self, childswidth_step0, self, childswidthuscoreold). %a18
assignment(vbox, self, childswidth_step0, self, childswidthuscoredeltauscore0). %a18
assignment(vbox, self, childswidth_step0, self, childswidthuscoredeltauscore0). %a17
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
assignment(vbox, self, childs_rightuscoredeltauscore0_step0, self, rightuscoredelta). %a17
assignment(vbox, self, childs_rightuscoredeltauscore0_step0, self, gensymattrib). %a27 childs@rightuscoredeltauscore0
assignment(vbox, self, childs_rightuscoredeltauscore0_step1, self, childs_rightuscoredeltauscore0_step0). %a28
assignment(vbox, self, childs_rightuscoredeltauscore0_step2, self, childs_rightuscoredeltauscore0_step1). %a29
assignment(vbox, self, childs_rightuscoredeltauscore0_stepn, self, childs_rightuscoredeltauscore0_step2). %a30
assignment(vbox, childsunroll0, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_step0). %a31b
assignment(vbox, childsunroll1, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_step1). %a32
assignment(vbox, childsunroll2, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_step2). %a33
assignment(vbox, childsunrolln, rightuscoredeltauscore0, self, childs_rightuscoredeltauscore0_stepn). %a34
assignment(vbox, self, childs_bottomuscoredelta_step0, self, childs_bottom_step0). %a8
assignment(vbox, self, childs_bottomuscoredelta_step1, self, childs_bottom_step1). %a9
assignment(vbox, self, childs_bottomuscoredelta_step2, self, childs_bottom_step2). %a10
assignment(vbox, self, childs_bottomuscoredelta_stepn, self, childs_bottom_stepn). %a11
assignment(vbox, self, childs_bottomuscoredelta_step0, self, childs_bottomuscoreolduscore0_step0). %a8
assignment(vbox, self, childs_bottomuscoredelta_step1, self, childs_bottomuscoreolduscore0_step1). %a9
assignment(vbox, self, childs_bottomuscoredelta_step2, self, childs_bottomuscoreolduscore0_step2). %a10
assignment(vbox, self, childs_bottomuscoredelta_stepn, self, childs_bottomuscoreolduscore0_stepn). %a11
assignment(vbox, self, childs_bottomuscoredelta_step0, self, childs_bottomuscoreolduscore0_stepn). %a8
assignment(vbox, self, childs_bottomuscoredelta_step0, self, gensymattrib). %a27 childs@bottomuscoredelta
assignment(vbox, self, childs_bottomuscoredelta_step1, self, childs_bottomuscoredelta_step0). %a28
assignment(vbox, self, childs_bottomuscoredelta_step2, self, childs_bottomuscoredelta_step1). %a29
assignment(vbox, self, childs_bottomuscoredelta_stepn, self, childs_bottomuscoredelta_step2). %a30
assignment(vbox, childsunroll0, bottomuscoredelta, self, childs_bottomuscoredelta_step0). %a31b
assignment(vbox, childsunroll1, bottomuscoredelta, self, childs_bottomuscoredelta_step1). %a32
assignment(vbox, childsunroll2, bottomuscoredelta, self, childs_bottomuscoredelta_step2). %a33
assignment(vbox, childsunrolln, bottomuscoredelta, self, childs_bottomuscoredelta_stepn). %a34
assignment(vbox, self, childs_bottom_step0, self, bottom). %a18
assignment(vbox, self, childs_bottom_step0, self, childs_bottomuscoreolduscore0_step0). %a8
assignment(vbox, self, childs_bottom_step1, self, childs_bottomuscoreolduscore0_step1). %a9
assignment(vbox, self, childs_bottom_step2, self, childs_bottomuscoreolduscore0_step2). %a10
assignment(vbox, self, childs_bottom_stepn, self, childs_bottomuscoreolduscore0_stepn). %a11
assignment(vbox, self, childs_bottom_step0, self, childs_bottomuscoreolduscore0_stepn). %a8
assignment(vbox, self, childs_bottom_step0, self, childs_height_step0). %a8
assignment(vbox, self, childs_bottom_step1, self, childs_height_step1). %a9
assignment(vbox, self, childs_bottom_step2, self, childs_height_step2). %a10
assignment(vbox, self, childs_bottom_stepn, self, childs_height_stepn). %a11
assignment(vbox, self, childs_bottom_step0, self, childs_height_stepn). %a8
assignment(vbox, self, childs_bottom_step0, self, childs_bottomuscoredeltauscore0_step0). %a8
assignment(vbox, self, childs_bottom_step1, self, childs_bottomuscoredeltauscore0_step1). %a9
assignment(vbox, self, childs_bottom_step2, self, childs_bottomuscoredeltauscore0_step2). %a10
assignment(vbox, self, childs_bottom_stepn, self, childs_bottomuscoredeltauscore0_stepn). %a11
assignment(vbox, self, childs_bottom_step0, self, gensymattrib). %a27 childs@bottom
assignment(vbox, self, childs_bottom_step1, self, childs_bottom_step0). %a28
assignment(vbox, self, childs_bottom_step2, self, childs_bottom_step1). %a29
assignment(vbox, self, childs_bottom_stepn, self, childs_bottom_step2). %a30
assignment(vbox, childsunroll0, bottom, self, childs_bottom_step0). %a31b
assignment(vbox, childsunroll1, bottom, self, childs_bottom_step1). %a32
assignment(vbox, childsunroll2, bottom, self, childs_bottom_step2). %a33
assignment(vbox, childsunrolln, bottom, self, childs_bottom_stepn). %a34
assignment(vbox, self, childs_right_step0, self, childs_rightuscoreolduscore0_step0). %a8
assignment(vbox, self, childs_right_step1, self, childs_rightuscoreolduscore0_step1). %a9
assignment(vbox, self, childs_right_step2, self, childs_rightuscoreolduscore0_step2). %a10
assignment(vbox, self, childs_right_stepn, self, childs_rightuscoreolduscore0_stepn). %a11
assignment(vbox, self, childs_right_step0, self, childs_rightuscoreolduscore0_stepn). %a8
assignment(vbox, self, childs_right_step0, self, right). %a17
assignment(vbox, self, childs_right_step0, self, childs_rightuscoredeltauscore0_step0). %a8
assignment(vbox, self, childs_right_step1, self, childs_rightuscoredeltauscore0_step1). %a9
assignment(vbox, self, childs_right_step2, self, childs_rightuscoredeltauscore0_step2). %a10
assignment(vbox, self, childs_right_stepn, self, childs_rightuscoredeltauscore0_stepn). %a11
assignment(vbox, self, childs_right_step0, self, gensymattrib). %a27 childs@right
assignment(vbox, self, childs_right_step1, self, childs_right_step0). %a28
assignment(vbox, self, childs_right_step2, self, childs_right_step1). %a29
assignment(vbox, self, childs_right_stepn, self, childs_right_step2). %a30
assignment(vbox, childsunroll0, right, self, childs_right_step0). %a31b
assignment(vbox, childsunroll1, right, self, childs_right_step1). %a32
assignment(vbox, childsunroll2, right, self, childs_right_step2). %a33
assignment(vbox, childsunrolln, right, self, childs_right_stepn). %a34
assignment(vbox, self, childswidthuscoredeltauscore0_step0, self, childs_widthuscoredelta_step0). %a8
assignment(vbox, self, childswidthuscoredeltauscore0_step1, self, childs_widthuscoredelta_step1). %a9
assignment(vbox, self, childswidthuscoredeltauscore0_step2, self, childs_widthuscoredelta_step2). %a10
assignment(vbox, self, childswidthuscoredeltauscore0_stepn, self, childs_widthuscoredelta_stepn). %a11
assignment(vbox, self, childswidthuscoredeltauscore0_step0, self, childs_widthuscoredelta_stepn). %a8
assignment(vbox, self, childswidthuscoredeltauscore0_step0, self, gensymattrib). %a27 childsWidthuscoredeltauscore0
assignment(vbox, self, childswidthuscoredeltauscore0_step1, self, childswidthuscoredeltauscore0_step0). %a28
assignment(vbox, self, childswidthuscoredeltauscore0_step2, self, childswidthuscoredeltauscore0_step1). %a29
assignment(vbox, self, childswidthuscoredeltauscore0_stepn, self, childswidthuscoredeltauscore0_step2). %a30
assignment(vbox, self, childswidthuscoredeltauscore0, self, childswidthuscoredeltauscore0_stepn). %a35
assignment(vbox, self, childsheight_step0, self, childsheightuscoredeltauscore0). %a18
assignment(vbox, self, childsheight_step0, self, childsheightuscoreold). %a18
assignment(vbox, self, childsheight_step0, self, childs_height_step0). %a8
assignment(vbox, self, childsheight_step1, self, childs_height_step1). %a9
assignment(vbox, self, childsheight_step2, self, childs_height_step2). %a10
assignment(vbox, self, childsheight_stepn, self, childs_height_stepn). %a11
assignment(vbox, self, childsheight_step0, self, childs_height_stepn). %a8
assignment(vbox, self, childsheight_step0, self, childsheightuscoredeltauscore0). %a17
assignment(vbox, self, childsheight_step0, self, gensymattrib). %a27 childsHeight
assignment(vbox, self, childsheight_step1, self, childsheight_step0). %a28
assignment(vbox, self, childsheight_step2, self, childsheight_step1). %a29
assignment(vbox, self, childsheight_stepn, self, childsheight_step2). %a30
assignment(vbox, self, childsheight, self, childsheight_stepn). %a35
assignment(vbox, self, childsheightuscoredeltauscore0_step0, self, childs_heightuscoredelta_step0). %a8
assignment(vbox, self, childsheightuscoredeltauscore0_step1, self, childs_heightuscoredelta_step1). %a9
assignment(vbox, self, childsheightuscoredeltauscore0_step2, self, childs_heightuscoredelta_step2). %a10
assignment(vbox, self, childsheightuscoredeltauscore0_stepn, self, childs_heightuscoredelta_stepn). %a11
assignment(vbox, self, childsheightuscoredeltauscore0_step0, self, childs_heightuscoredelta_stepn). %a8
assignment(vbox, self, childsheightuscoredeltauscore0_step0, self, gensymattrib). %a27 childsHeightuscoredeltauscore0
assignment(vbox, self, childsheightuscoredeltauscore0_step1, self, childsheightuscoredeltauscore0_step0). %a28
assignment(vbox, self, childsheightuscoredeltauscore0_step2, self, childsheightuscoredeltauscore0_step1). %a29
assignment(vbox, self, childsheightuscoredeltauscore0_stepn, self, childsheightuscoredeltauscore0_step2). %a30
assignment(vbox, self, childsheightuscoredeltauscore0, self, childsheightuscoredeltauscore0_stepn). %a35
assignment(vbox, self, childs_bottomuscoredeltauscore0_step0, self, bottomuscoredelta). %a18
assignment(vbox, self, childs_bottomuscoredeltauscore0_step1, self, childs_bottomuscoredelta_step0). %a12
assignment(vbox, self, childs_bottomuscoredeltauscore0_step2, self, childs_bottomuscoredelta_step1). %a13
assignment(vbox, self, childs_bottomuscoredeltauscore0_stepn, self, childs_bottomuscoredelta_step2). %a14
assignment(vbox, self, childs_bottomuscoredeltauscore0_step0, self, childs_heightuscoredelta_step0). %a8
assignment(vbox, self, childs_bottomuscoredeltauscore0_step1, self, childs_heightuscoredelta_step1). %a9
assignment(vbox, self, childs_bottomuscoredeltauscore0_step2, self, childs_heightuscoredelta_step2). %a10
assignment(vbox, self, childs_bottomuscoredeltauscore0_stepn, self, childs_heightuscoredelta_stepn). %a11
assignment(vbox, self, childs_bottomuscoredeltauscore0_step0, self, childs_heightuscoredelta_stepn). %a8
assignment(vbox, self, childs_bottomuscoredeltauscore0_step0, self, gensymattrib). %a27 childs@bottomuscoredeltauscore0
assignment(vbox, self, childs_bottomuscoredeltauscore0_step1, self, childs_bottomuscoredeltauscore0_step0). %a28
assignment(vbox, self, childs_bottomuscoredeltauscore0_step2, self, childs_bottomuscoredeltauscore0_step1). %a29
assignment(vbox, self, childs_bottomuscoredeltauscore0_stepn, self, childs_bottomuscoredeltauscore0_step2). %a30
assignment(vbox, childsunroll0, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_step0). %a31b
assignment(vbox, childsunroll1, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_step1). %a32
assignment(vbox, childsunroll2, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_step2). %a33
assignment(vbox, childsunrolln, bottomuscoredeltauscore0, self, childs_bottomuscoredeltauscore0_stepn). %a34
assignment(vbox, self, childs_height_step0, self, gensymattrib). %a27 childs@height
assignment(vbox, self, childs_height_step1, self, childs_height_step0). %a28
assignment(vbox, self, childs_height_step2, self, childs_height_step1). %a29
assignment(vbox, self, childs_height_stepn, self, childs_height_step2). %a30
assignment(vbox, self, childs_height_step0, childsunroll0, height). %a45
assignment(vbox, self, childs_height_step1, childsunroll1, height). %a46
assignment(vbox, self, childs_height_step2, childsunroll2, height). %a47
assignment(vbox, self, childs_height_stepn, childsunrolln, height). %a48
assignment(vbox, self, childs_bottomuscoreolduscore0_step0, self, gensymattrib). %a27 childs@bottomuscoreolduscore0
assignment(vbox, self, childs_bottomuscoreolduscore0_step1, self, childs_bottomuscoreolduscore0_step0). %a28
assignment(vbox, self, childs_bottomuscoreolduscore0_step2, self, childs_bottomuscoreolduscore0_step1). %a29
assignment(vbox, self, childs_bottomuscoreolduscore0_stepn, self, childs_bottomuscoreolduscore0_step2). %a30
assignment(vbox, self, childs_bottomuscoreolduscore0_step0, childsunroll0, bottomuscoreolduscore0). %a45
assignment(vbox, self, childs_bottomuscoreolduscore0_step1, childsunroll1, bottomuscoreolduscore0). %a46
assignment(vbox, self, childs_bottomuscoreolduscore0_step2, childsunroll2, bottomuscoreolduscore0). %a47
assignment(vbox, self, childs_bottomuscoreolduscore0_stepn, childsunrolln, bottomuscoreolduscore0). %a48
assignment(vbox, self, childs_heightuscoredelta_step0, self, gensymattrib). %a27 childs@heightuscoredelta
assignment(vbox, self, childs_heightuscoredelta_step1, self, childs_heightuscoredelta_step0). %a28
assignment(vbox, self, childs_heightuscoredelta_step2, self, childs_heightuscoredelta_step1). %a29
assignment(vbox, self, childs_heightuscoredelta_stepn, self, childs_heightuscoredelta_step2). %a30
assignment(vbox, self, childs_heightuscoredelta_step0, childsunroll0, heightuscoredelta). %a45
assignment(vbox, self, childs_heightuscoredelta_step1, childsunroll1, heightuscoredelta). %a46
assignment(vbox, self, childs_heightuscoredelta_step2, childsunroll2, heightuscoredelta). %a47
assignment(vbox, self, childs_heightuscoredelta_stepn, childsunrolln, heightuscoredelta). %a48
assignment(vbox, self, childs_width_step0, self, gensymattrib). %a27 childs@width
assignment(vbox, self, childs_width_step1, self, childs_width_step0). %a28
assignment(vbox, self, childs_width_step2, self, childs_width_step1). %a29
assignment(vbox, self, childs_width_stepn, self, childs_width_step2). %a30
assignment(vbox, self, childs_width_step0, childsunroll0, width). %a45
assignment(vbox, self, childs_width_step1, childsunroll1, width). %a46
assignment(vbox, self, childs_width_step2, childsunroll2, width). %a47
assignment(vbox, self, childs_width_stepn, childsunrolln, width). %a48
assignment(vbox, self, childs_rightuscoreolduscore0_step0, self, gensymattrib). %a27 childs@rightuscoreolduscore0
assignment(vbox, self, childs_rightuscoreolduscore0_step1, self, childs_rightuscoreolduscore0_step0). %a28
assignment(vbox, self, childs_rightuscoreolduscore0_step2, self, childs_rightuscoreolduscore0_step1). %a29
assignment(vbox, self, childs_rightuscoreolduscore0_stepn, self, childs_rightuscoreolduscore0_step2). %a30
assignment(vbox, self, childs_rightuscoreolduscore0_step0, childsunroll0, rightuscoreolduscore0). %a45
assignment(vbox, self, childs_rightuscoreolduscore0_step1, childsunroll1, rightuscoreolduscore0). %a46
assignment(vbox, self, childs_rightuscoreolduscore0_step2, childsunroll2, rightuscoreolduscore0). %a47
assignment(vbox, self, childs_rightuscoreolduscore0_stepn, childsunrolln, rightuscoreolduscore0). %a48
assignment(vbox, self, childs_widthuscoredelta_step0, self, gensymattrib). %a27 childs@widthuscoredelta
assignment(vbox, self, childs_widthuscoredelta_step1, self, childs_widthuscoredelta_step0). %a28
assignment(vbox, self, childs_widthuscoredelta_step2, self, childs_widthuscoredelta_step1). %a29
assignment(vbox, self, childs_widthuscoredelta_stepn, self, childs_widthuscoredelta_step2). %a30
assignment(vbox, self, childs_widthuscoredelta_step0, childsunroll0, widthuscoredelta). %a45
assignment(vbox, self, childs_widthuscoredelta_step1, childsunroll1, widthuscoredelta). %a46
assignment(vbox, self, childs_widthuscoredelta_step2, childsunroll2, widthuscoredelta). %a47
assignment(vbox, self, childs_widthuscoredelta_stepn, childsunrolln, widthuscoredelta). %a48
assignment(leaf, self, widthuscoredeltauscore0, self, widthuscoreinuscoredelta). %a42
assignment(leaf, self, height, self, heightuscorein). %a42
assignment(leaf, self, height, self, heightuscoredeltauscore0). %a42
assignment(leaf, self, height, self, heightuscoreolduscore0). %a42
assignment(leaf, self, heightuscoredelta, self, height). %a42
assignment(leaf, self, heightuscoredelta, self, heightuscoreolduscore0). %a42
assignment(leaf, self, heightuscoredeltauscore0, self, heightuscoreinuscoredelta). %a42
assignment(leaf, self, width, self, widthuscoreolduscore0). %a42
assignment(leaf, self, width, self, widthuscoredeltauscore0). %a42
assignment(leaf, self, width, self, widthuscorein). %a42
assignment(leaf, self, widthuscoredelta, self, widthuscoreolduscore0). %a42
assignment(leaf, self, widthuscoredelta, self, width). %a42
assignment(gensymattrib, gensymattrib, gensymattrib, gensymattrib, gensymattrib) :- false.
classAttribute(hbox, childswidthuscoredelta). %s1
classAttribute(hbox, childsheightuscoredelta). %s1
classAttribute(hbox, childsheightuscoredeltauscore0). %s1
classAttribute(hbox, childswidthuscoredeltauscore0). %s1
classAttribute(hbox, childswidth). %s1
classAttribute(hbox, childsheight). %s1
classAttribute(hbox, childs_bottom_step0). %s2 childs@bottom
classAttribute(hbox, childs_bottom_step1). %s3
classAttribute(hbox, childs_bottom_step2). %s4
classAttribute(hbox, childs_bottom_stepn). %s5
classAttribute(hbox, childsheight_step0). %s2 self@childsheight
classAttribute(hbox, childsheight_step1). %s3
classAttribute(hbox, childsheight_step2). %s4
classAttribute(hbox, childsheight_stepn). %s5
classAttribute(hbox, childs_rightuscoredelta_step0). %s2 childs@rightuscoredelta
classAttribute(hbox, childs_rightuscoredelta_step1). %s3
classAttribute(hbox, childs_rightuscoredelta_step2). %s4
classAttribute(hbox, childs_rightuscoredelta_stepn). %s5
classAttribute(hbox, childs_rightuscoreolduscore0_step0). %s2 childs@rightuscoreolduscore0
classAttribute(hbox, childs_rightuscoreolduscore0_step1). %s3
classAttribute(hbox, childs_rightuscoreolduscore0_step2). %s4
classAttribute(hbox, childs_rightuscoreolduscore0_stepn). %s5
classAttribute(hbox, childs_width_step0). %s2 childs@width
classAttribute(hbox, childs_width_step1). %s3
classAttribute(hbox, childs_width_step2). %s4
classAttribute(hbox, childs_width_stepn). %s5
classAttribute(hbox, childs_widthuscoredelta_step0). %s2 childs@widthuscoredelta
classAttribute(hbox, childs_widthuscoredelta_step1). %s3
classAttribute(hbox, childs_widthuscoredelta_step2). %s4
classAttribute(hbox, childs_widthuscoredelta_stepn). %s5
classAttribute(hbox, childswidth_step0). %s2 self@childswidth
classAttribute(hbox, childswidth_step1). %s3
classAttribute(hbox, childswidth_step2). %s4
classAttribute(hbox, childswidth_stepn). %s5
classAttribute(hbox, childs_rightuscoredeltauscore0_step0). %s2 childs@rightuscoredeltauscore0
classAttribute(hbox, childs_rightuscoredeltauscore0_step1). %s3
classAttribute(hbox, childs_rightuscoredeltauscore0_step2). %s4
classAttribute(hbox, childs_rightuscoredeltauscore0_stepn). %s5
classAttribute(hbox, childs_height_step0). %s2 childs@height
classAttribute(hbox, childs_height_step1). %s3
classAttribute(hbox, childs_height_step2). %s4
classAttribute(hbox, childs_height_stepn). %s5
classAttribute(hbox, childswidthuscoredeltauscore0_step0). %s2 self@childswidthuscoredeltauscore0
classAttribute(hbox, childswidthuscoredeltauscore0_step1). %s3
classAttribute(hbox, childswidthuscoredeltauscore0_step2). %s4
classAttribute(hbox, childswidthuscoredeltauscore0_stepn). %s5
classAttribute(hbox, childs_bottomuscoreolduscore0_step0). %s2 childs@bottomuscoreolduscore0
classAttribute(hbox, childs_bottomuscoreolduscore0_step1). %s3
classAttribute(hbox, childs_bottomuscoreolduscore0_step2). %s4
classAttribute(hbox, childs_bottomuscoreolduscore0_stepn). %s5
classAttribute(hbox, childs_bottomuscoredeltauscore0_step0). %s2 childs@bottomuscoredeltauscore0
classAttribute(hbox, childs_bottomuscoredeltauscore0_step1). %s3
classAttribute(hbox, childs_bottomuscoredeltauscore0_step2). %s4
classAttribute(hbox, childs_bottomuscoredeltauscore0_stepn). %s5
classAttribute(hbox, childs_heightuscoredelta_step0). %s2 childs@heightuscoredelta
classAttribute(hbox, childs_heightuscoredelta_step1). %s3
classAttribute(hbox, childs_heightuscoredelta_step2). %s4
classAttribute(hbox, childs_heightuscoredelta_stepn). %s5
classAttribute(hbox, childsheightuscoredeltauscore0_step0). %s2 self@childsheightuscoredeltauscore0
classAttribute(hbox, childsheightuscoredeltauscore0_step1). %s3
classAttribute(hbox, childsheightuscoredeltauscore0_step2). %s4
classAttribute(hbox, childsheightuscoredeltauscore0_stepn). %s5
classAttribute(hbox, childs_right_step0). %s2 childs@right
classAttribute(hbox, childs_right_step1). %s3
classAttribute(hbox, childs_right_step2). %s4
classAttribute(hbox, childs_right_stepn). %s5
classAttribute(hbox, childs_bottomuscoredelta_step0). %s2 childs@bottomuscoredelta
classAttribute(hbox, childs_bottomuscoredelta_step1). %s3
classAttribute(hbox, childs_bottomuscoredelta_step2). %s4
classAttribute(hbox, childs_bottomuscoredelta_stepn). %s5
classAttribute(vbox, childswidthuscoredelta). %s1
classAttribute(vbox, childsheightuscoredelta). %s1
classAttribute(vbox, childsheightuscoredeltauscore0). %s1
classAttribute(vbox, childswidthuscoredeltauscore0). %s1
classAttribute(vbox, childswidth). %s1
classAttribute(vbox, childsheight). %s1
classAttribute(vbox, childs_bottom_step0). %s2 childs@bottom
classAttribute(vbox, childs_bottom_step1). %s3
classAttribute(vbox, childs_bottom_step2). %s4
classAttribute(vbox, childs_bottom_stepn). %s5
classAttribute(vbox, childsheight_step0). %s2 self@childsheight
classAttribute(vbox, childsheight_step1). %s3
classAttribute(vbox, childsheight_step2). %s4
classAttribute(vbox, childsheight_stepn). %s5
classAttribute(vbox, childs_rightuscoredelta_step0). %s2 childs@rightuscoredelta
classAttribute(vbox, childs_rightuscoredelta_step1). %s3
classAttribute(vbox, childs_rightuscoredelta_step2). %s4
classAttribute(vbox, childs_rightuscoredelta_stepn). %s5
classAttribute(vbox, childs_rightuscoreolduscore0_step0). %s2 childs@rightuscoreolduscore0
classAttribute(vbox, childs_rightuscoreolduscore0_step1). %s3
classAttribute(vbox, childs_rightuscoreolduscore0_step2). %s4
classAttribute(vbox, childs_rightuscoreolduscore0_stepn). %s5
classAttribute(vbox, childs_width_step0). %s2 childs@width
classAttribute(vbox, childs_width_step1). %s3
classAttribute(vbox, childs_width_step2). %s4
classAttribute(vbox, childs_width_stepn). %s5
classAttribute(vbox, childs_widthuscoredelta_step0). %s2 childs@widthuscoredelta
classAttribute(vbox, childs_widthuscoredelta_step1). %s3
classAttribute(vbox, childs_widthuscoredelta_step2). %s4
classAttribute(vbox, childs_widthuscoredelta_stepn). %s5
classAttribute(vbox, childswidth_step0). %s2 self@childswidth
classAttribute(vbox, childswidth_step1). %s3
classAttribute(vbox, childswidth_step2). %s4
classAttribute(vbox, childswidth_stepn). %s5
classAttribute(vbox, childs_rightuscoredeltauscore0_step0). %s2 childs@rightuscoredeltauscore0
classAttribute(vbox, childs_rightuscoredeltauscore0_step1). %s3
classAttribute(vbox, childs_rightuscoredeltauscore0_step2). %s4
classAttribute(vbox, childs_rightuscoredeltauscore0_stepn). %s5
classAttribute(vbox, childs_height_step0). %s2 childs@height
classAttribute(vbox, childs_height_step1). %s3
classAttribute(vbox, childs_height_step2). %s4
classAttribute(vbox, childs_height_stepn). %s5
classAttribute(vbox, childswidthuscoredeltauscore0_step0). %s2 self@childswidthuscoredeltauscore0
classAttribute(vbox, childswidthuscoredeltauscore0_step1). %s3
classAttribute(vbox, childswidthuscoredeltauscore0_step2). %s4
classAttribute(vbox, childswidthuscoredeltauscore0_stepn). %s5
classAttribute(vbox, childs_bottomuscoreolduscore0_step0). %s2 childs@bottomuscoreolduscore0
classAttribute(vbox, childs_bottomuscoreolduscore0_step1). %s3
classAttribute(vbox, childs_bottomuscoreolduscore0_step2). %s4
classAttribute(vbox, childs_bottomuscoreolduscore0_stepn). %s5
classAttribute(vbox, childs_bottomuscoredeltauscore0_step0). %s2 childs@bottomuscoredeltauscore0
classAttribute(vbox, childs_bottomuscoredeltauscore0_step1). %s3
classAttribute(vbox, childs_bottomuscoredeltauscore0_step2). %s4
classAttribute(vbox, childs_bottomuscoredeltauscore0_stepn). %s5
classAttribute(vbox, childs_heightuscoredelta_step0). %s2 childs@heightuscoredelta
classAttribute(vbox, childs_heightuscoredelta_step1). %s3
classAttribute(vbox, childs_heightuscoredelta_step2). %s4
classAttribute(vbox, childs_heightuscoredelta_stepn). %s5
classAttribute(vbox, childsheightuscoredeltauscore0_step0). %s2 self@childsheightuscoredeltauscore0
classAttribute(vbox, childsheightuscoredeltauscore0_step1). %s3
classAttribute(vbox, childsheightuscoredeltauscore0_step2). %s4
classAttribute(vbox, childsheightuscoredeltauscore0_stepn). %s5
classAttribute(vbox, childs_right_step0). %s2 childs@right
classAttribute(vbox, childs_right_step1). %s3
classAttribute(vbox, childs_right_step2). %s4
classAttribute(vbox, childs_right_stepn). %s5
classAttribute(vbox, childs_bottomuscoredelta_step0). %s2 childs@bottomuscoredelta
classAttribute(vbox, childs_bottomuscoredelta_step1). %s3
classAttribute(vbox, childs_bottomuscoredelta_step2). %s4
classAttribute(vbox, childs_bottomuscoredelta_stepn). %s5
