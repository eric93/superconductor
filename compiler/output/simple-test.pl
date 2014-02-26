interface(node).
interfaceAttribute(node, num).
class(midnode, node).
class(leaf, node).
classChild(midnode, kidsunroll0, node).
classChild(midnode, kidsunroll1, node).
classChild(midnode, kidsunroll2, node).
classChild(midnode, kidsunrolln, node).
classField(gensymattrib, gensymattrib) :- false.
classField(midnode, gensymattrib).
classField(leaf, gensymattrib).
classField(leaf, numin).
interfaceField(node, display).
interfaceField(node, refname).
assignment(midnode, self, num_step0, self, kids_num_step0). %a8
assignment(midnode, self, num_step1, self, kids_num_step1). %a9
assignment(midnode, self, num_step2, self, kids_num_step2). %a10
assignment(midnode, self, num_stepn, self, kids_num_stepn). %a11
assignment(midnode, self, num_step0, self, gensymattrib). %a27 num
assignment(midnode, self, num_step1, self, num_step0). %a28
assignment(midnode, self, num_step2, self, num_step1). %a29
assignment(midnode, self, num_stepn, self, num_step2). %a30
assignment(midnode, self, num, self, num_stepn). %a35
assignment(midnode, self, kids_num_step0, self, gensymattrib). %a27 kids@num
assignment(midnode, self, kids_num_step1, self, kids_num_step0). %a28
assignment(midnode, self, kids_num_step2, self, kids_num_step1). %a29
assignment(midnode, self, kids_num_stepn, self, kids_num_step2). %a30
assignment(midnode, self, kids_num_step0, kidsunroll0, num). %a45
assignment(midnode, self, kids_num_step1, kidsunroll1, num). %a46
assignment(midnode, self, kids_num_step2, kidsunroll2, num). %a47
assignment(midnode, self, kids_num_stepn, kidsunrolln, num). %a48
assignment(leaf, self, num, self, numin). %a42
assignment(gensymattrib, gensymattrib, gensymattrib, gensymattrib, gensymattrib) :- false.
classAttribute(midnode, num_step0). %s2 self@num
classAttribute(midnode, num_step1). %s3
classAttribute(midnode, num_step2). %s4
classAttribute(midnode, num_stepn). %s5
classAttribute(midnode, kids_num_step0). %s2 kids@num
classAttribute(midnode, kids_num_step1). %s3
classAttribute(midnode, kids_num_step2). %s4
classAttribute(midnode, kids_num_stepn). %s5
