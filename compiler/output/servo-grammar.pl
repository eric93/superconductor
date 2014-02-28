interface(baseflow).
interfaceAttribute(baseflow, position).
interfaceAttribute(baseflow, height).
interfaceAttribute(baseflow, bottom).
class(blockflow, baseflow).
class(inlineflow, baseflow).
classChild(blockflow, flowuscorechildrenunroll0, baseflow).
classChild(blockflow, flowuscorechildrenunroll1, baseflow).
classChild(blockflow, flowuscorechildrenunroll2, baseflow).
classChild(blockflow, flowuscorechildrenunrolln, baseflow).
classField(gensymattrib, gensymattrib) :- false.
classField(blockflow, gensymattrib).
classField(blockflow, style).
classField(inlineflow, gensymattrib).
interfaceField(baseflow, display).
interfaceField(baseflow, refname).
assignment(blockflow, self, boxuscore, self, position). %a42
assignment(blockflow, self, myuscoreheight, self, style). %a42
assignment(blockflow, self, height, self, myuscoreheight). %a42
assignment(blockflow, self, height, self, childsuscoreheight). %a42
assignment(blockflow, self, flowuscorechildren_position_step0, self, flowuscorechildren_height_step0). %a8
assignment(blockflow, self, flowuscorechildren_position_step1, self, flowuscorechildren_height_step1). %a9
assignment(blockflow, self, flowuscorechildren_position_step2, self, flowuscorechildren_height_step2). %a10
assignment(blockflow, self, flowuscorechildren_position_stepn, self, flowuscorechildren_height_stepn). %a11
assignment(blockflow, self, flowuscorechildren_position_step0, self, flowuscorechildren_bottom_step0). %a8
assignment(blockflow, self, flowuscorechildren_position_step1, self, flowuscorechildren_bottom_step1). %a9
assignment(blockflow, self, flowuscorechildren_position_step2, self, flowuscorechildren_bottom_step2). %a10
assignment(blockflow, self, flowuscorechildren_position_stepn, self, flowuscorechildren_bottom_stepn). %a11
assignment(blockflow, self, flowuscorechildren_position_step0, self, gensymattrib). %a27 flowuscorechildren@position
assignment(blockflow, self, flowuscorechildren_position_step1, self, flowuscorechildren_position_step0). %a28
assignment(blockflow, self, flowuscorechildren_position_step2, self, flowuscorechildren_position_step1). %a29
assignment(blockflow, self, flowuscorechildren_position_stepn, self, flowuscorechildren_position_step2). %a30
assignment(blockflow, flowuscorechildrenunroll0, position, self, flowuscorechildren_position_step0). %a31b
assignment(blockflow, flowuscorechildrenunroll1, position, self, flowuscorechildren_position_step1). %a32
assignment(blockflow, flowuscorechildrenunroll2, position, self, flowuscorechildren_position_step2). %a33
assignment(blockflow, flowuscorechildrenunrolln, position, self, flowuscorechildren_position_stepn). %a34
assignment(blockflow, self, childsuscoreheight_step0, self, flowuscorechildren_position_step0). %a8
assignment(blockflow, self, childsuscoreheight_step1, self, flowuscorechildren_position_step1). %a9
assignment(blockflow, self, childsuscoreheight_step2, self, flowuscorechildren_position_step2). %a10
assignment(blockflow, self, childsuscoreheight_stepn, self, flowuscorechildren_position_stepn). %a11
assignment(blockflow, self, childsuscoreheight_step0, self, gensymattrib). %a27 childsuscoreheight
assignment(blockflow, self, childsuscoreheight_step1, self, childsuscoreheight_step0). %a28
assignment(blockflow, self, childsuscoreheight_step2, self, childsuscoreheight_step1). %a29
assignment(blockflow, self, childsuscoreheight_stepn, self, childsuscoreheight_step2). %a30
assignment(blockflow, self, childsuscoreheight, self, childsuscoreheight_stepn). %a35
assignment(blockflow, self, flowuscorechildren_bottom_step0, self, flowuscorechildren_height_step0). %a8
assignment(blockflow, self, flowuscorechildren_bottom_step1, self, flowuscorechildren_height_step1). %a9
assignment(blockflow, self, flowuscorechildren_bottom_step2, self, flowuscorechildren_height_step2). %a10
assignment(blockflow, self, flowuscorechildren_bottom_stepn, self, flowuscorechildren_height_stepn). %a11
assignment(blockflow, self, flowuscorechildren_bottom_step0, self, gensymattrib). %a27 flowuscorechildren@bottom
assignment(blockflow, self, flowuscorechildren_bottom_step1, self, flowuscorechildren_bottom_step0). %a28
assignment(blockflow, self, flowuscorechildren_bottom_step2, self, flowuscorechildren_bottom_step1). %a29
assignment(blockflow, self, flowuscorechildren_bottom_stepn, self, flowuscorechildren_bottom_step2). %a30
assignment(blockflow, flowuscorechildrenunroll0, bottom, self, flowuscorechildren_bottom_step0). %a31b
assignment(blockflow, flowuscorechildrenunroll1, bottom, self, flowuscorechildren_bottom_step1). %a32
assignment(blockflow, flowuscorechildrenunroll2, bottom, self, flowuscorechildren_bottom_step2). %a33
assignment(blockflow, flowuscorechildrenunrolln, bottom, self, flowuscorechildren_bottom_stepn). %a34
assignment(blockflow, self, flowuscorechildren_height_step0, self, gensymattrib). %a27 flowuscorechildren@height
assignment(blockflow, self, flowuscorechildren_height_step1, self, flowuscorechildren_height_step0). %a28
assignment(blockflow, self, flowuscorechildren_height_step2, self, flowuscorechildren_height_step1). %a29
assignment(blockflow, self, flowuscorechildren_height_stepn, self, flowuscorechildren_height_step2). %a30
assignment(blockflow, self, flowuscorechildren_height_step0, flowuscorechildrenunroll0, height). %a45
assignment(blockflow, self, flowuscorechildren_height_step1, flowuscorechildrenunroll1, height). %a46
assignment(blockflow, self, flowuscorechildren_height_step2, flowuscorechildrenunroll2, height). %a47
assignment(blockflow, self, flowuscorechildren_height_stepn, flowuscorechildrenunrolln, height). %a48
assignment(inlineflow, self, height, self, gensymattrib). %a40
assignment(gensymattrib, gensymattrib, gensymattrib, gensymattrib, gensymattrib) :- false.
classAttribute(blockflow, myuscoreheight). %s1
classAttribute(blockflow, childsuscoreheight). %s1
classAttribute(blockflow, boxuscore). %s1
classAttribute(blockflow, flowuscorechildren_height_step0). %s2 flowuscorechildren@height
classAttribute(blockflow, flowuscorechildren_height_step1). %s3
classAttribute(blockflow, flowuscorechildren_height_step2). %s4
classAttribute(blockflow, flowuscorechildren_height_stepn). %s5
classAttribute(blockflow, flowuscorechildren_position_step0). %s2 flowuscorechildren@position
classAttribute(blockflow, flowuscorechildren_position_step1). %s3
classAttribute(blockflow, flowuscorechildren_position_step2). %s4
classAttribute(blockflow, flowuscorechildren_position_stepn). %s5
classAttribute(blockflow, childsuscoreheight_step0). %s2 self@childsuscoreheight
classAttribute(blockflow, childsuscoreheight_step1). %s3
classAttribute(blockflow, childsuscoreheight_step2). %s4
classAttribute(blockflow, childsuscoreheight_stepn). %s5
classAttribute(blockflow, flowuscorechildren_bottom_step0). %s2 flowuscorechildren@bottom
classAttribute(blockflow, flowuscorechildren_bottom_step1). %s3
classAttribute(blockflow, flowuscorechildren_bottom_step2). %s4
classAttribute(blockflow, flowuscorechildren_bottom_stepn). %s5
