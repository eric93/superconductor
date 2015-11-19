interface(top).
interface(edge).
interface(node).
interfaceAttribute(top, w).
interfaceAttribute(top, h).
interfaceAttribute(top, y).
interfaceAttribute(top, x).
interfaceAttribute(edge, w).
interfaceAttribute(edge, h).
interfaceAttribute(edge, y).
interfaceAttribute(edge, x).
interfaceAttribute(node, maxuscoreh).
interfaceAttribute(node, maxuscorew).
interfaceAttribute(node, y).
interfaceAttribute(node, x).
class(baseedge, edge).
class(root, top).
class(box, node).
class(leafbox, node).
classChild(root, child, node).
classChild(box, luscoreedge, edge).
classChild(box, duscorechild, node).
classChild(box, duscoreedge, edge).
classChild(box, luscorechild, node).
classField(gensymattrib, gensymattrib) :- false.
classField(baseedge, gensymattrib).
classField(root, gensymattrib).
classField(box, gensymattrib).
classField(leafbox, gensymattrib).
interfaceField(top, backgroundcolor).
interfaceField(top, display).
interfaceField(top, refname).
interfaceField(top, shape).
interfaceField(edge, display).
interfaceField(edge, refname).
interfaceField(node, parentuscorelen).
interfaceField(node, w).
interfaceField(node, backgroundcolor).
interfaceField(node, display).
interfaceField(node, refname).
interfaceField(node, shape).
interfaceField(node, h).
assignment(root, child, y, self, gensymattrib).
assignment(root, self, h, child, maxuscoreh).
assignment(root, self, y, self, gensymattrib).
assignment(root, self, x, self, gensymattrib).
assignment(root, child, x, self, gensymattrib).
assignment(root, self, w, child, maxuscorew).
assignment(box, duscorechild, x, self, w).
assignment(box, duscorechild, x, duscorechild, w).
assignment(box, duscorechild, x, self, x).
assignment(box, duscoreedge, x, self, w).
assignment(box, duscoreedge, x, self, x).
assignment(box, luscoreedge, h, self, gensymattrib).
assignment(box, self, maxuscoreh, luscorechild, maxuscoreh).
assignment(box, self, maxuscoreh, duscorechild, maxuscoreh).
assignment(box, self, maxuscoreh, duscorechild, parentuscorelen).
assignment(box, self, maxuscoreh, self, y).
assignment(box, self, maxuscoreh, luscorechild, y).
assignment(box, self, maxuscoreh, self, h).
assignment(box, luscorechild, y, luscorechild, h).
assignment(box, luscorechild, y, self, h).
assignment(box, luscorechild, y, self, y).
assignment(box, luscoreedge, x, self, w).
assignment(box, luscoreedge, x, self, x).
assignment(box, luscorechild, x, luscorechild, parentuscorelen).
assignment(box, luscorechild, x, self, w).
assignment(box, luscorechild, x, self, x).
assignment(box, duscoreedge, h, duscorechild, parentuscorelen).
assignment(box, duscorechild, y, duscorechild, parentuscorelen).
assignment(box, duscorechild, y, self, h).
assignment(box, duscorechild, y, self, y).
assignment(box, luscoreedge, y, self, h).
assignment(box, luscoreedge, y, self, y).
assignment(box, luscoreedge, w, luscorechild, parentuscorelen).
assignment(box, duscoreedge, y, self, h).
assignment(box, duscoreedge, y, self, y).
assignment(box, self, maxuscorew, duscorechild, maxuscorew).
assignment(box, self, maxuscorew, luscorechild, parentuscorelen).
assignment(box, self, maxuscorew, self, w).
assignment(box, self, maxuscorew, luscorechild, maxuscorew).
assignment(box, self, maxuscorew, duscorechild, x).
assignment(box, self, maxuscorew, self, x).
assignment(box, duscoreedge, w, self, gensymattrib).
assignment(leafbox, self, maxuscoreh, self, h).
assignment(leafbox, self, maxuscorew, self, w).
classAttribute(gensymattrib, gensymattrib) :- false.
