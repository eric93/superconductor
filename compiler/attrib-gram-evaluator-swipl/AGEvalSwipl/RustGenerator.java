package AGEvalSwipl;

import java.io.File;
import java.io.IOException;
import java.util.Set;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.ArrayList;
import java.util.Map.Entry;

//import org.antlr.runtime.RecognitionException;

import aleGrammar.ALEParser;
import AGEval.AGEvaluator;
import AGEval.Class;
import AGEval.IFace;
import AGEval.InvalidGrammarException;
import AGEvalSwipl.AGEvaluatorSwipl.Schedule;

import jpl.Term;
import jpl.Variable;

public class RustGenerator extends BackendBase implements Backend {

    private static boolean GENERATE_LOG = true; // Toggle flag to generate log statements

    private Hashtable<String, String> nameLookup;
    private HashSet<String> notFtlAttrs;

    public RustGenerator() {
        nameLookup = new Hashtable<String, String>();
        nameLookup.put("flowheight", "position.size.height");
        nameLookup.put("flowwidth", "position.size.width");
        nameLookup.put("flowx", "position.origin.x");
        nameLookup.put("flowy", "position.origin.y");
        nameLookup.put("flowchildren", "base.children");
        nameLookup.put("boxheight", "box_.as_ref().unwrap().border_box.borrow_mut().get().size.height");
        nameLookup.put("boxwidth",  "box_.as_ref().unwrap().border_box.borrow_mut().get().size.width");
        nameLookup.put("boxx", "box_.as_ref().unwrap().border_box.borrow_mut().get().origin.x");
        nameLookup.put("boxy",  "box_.as_ref().unwrap().border_box.borrow_mut().get().origin.y");
        nameLookup.put("boxstyleheight", "box_.as_ref().unwrap().style.get().Box.get().height");
        nameLookup.put("boxstylewidth", "box_.as_ref().unwrap().style.get().Box.get().width");

        nameLookup.put("margintop", "box_.as_ref().unwrap().style.get().Margin.get().margin_top");
        nameLookup.put("marginbottom", "box_.as_ref().unwrap().style.get().Margin.get().margin_bottom");
        nameLookup.put("marginleft", "box_.as_ref().unwrap().style.get().Margin.get().margin_left");
        nameLookup.put("marginright", "box_.as_ref().unwrap().style.get().Margin.get().margin_right");

        nameLookup.put("paddingtop", "box_.as_ref().unwrap().style.get().Padding.get().padding_top");
        nameLookup.put("paddingbottom", "box_.as_ref().unwrap().style.get().Padding.get().padding_bottom");
        nameLookup.put("paddingleft", "box_.as_ref().unwrap().style.get().Padding.get().padding_left");
        nameLookup.put("paddingright", "box_.as_ref().unwrap().style.get().Padding.get().padding_right");

        nameLookup.put("bordertop",    "box_.as_ref().unwrap().style.get().Border.get().border_top_width");
        nameLookup.put("borderbottom", "box_.as_ref().unwrap().style.get().Border.get().border_bottom_width");
        nameLookup.put("borderleft",   "box_.as_ref().unwrap().style.get().Border.get().border_left_width");
        nameLookup.put("borderright",  "box_.as_ref().unwrap().style.get().Border.get().border_right_width");

        nameLookup.put("cpt",  "box_.as_ref().unwrap().padding.borrow_mut().get().top");
        nameLookup.put("cpb",  "box_.as_ref().unwrap().padding.borrow_mut().get().bottom");
        nameLookup.put("cpl",  "box_.as_ref().unwrap().padding.borrow_mut().get().left");
        nameLookup.put("cpr",  "box_.as_ref().unwrap().padding.borrow_mut().get().right");

        nameLookup.put("cmt",  "box_.as_ref().unwrap().margin.borrow_mut().get().top");
        nameLookup.put("cmb",  "box_.as_ref().unwrap().margin.borrow_mut().get().bottom");
        nameLookup.put("cml",  "box_.as_ref().unwrap().margin.borrow_mut().get().left");
        nameLookup.put("cmr",  "box_.as_ref().unwrap().margin.borrow_mut().get().right");

        // This can fail, better to use for-in loop in rust
        nameLookup.put("box_", "box_.as_ref().unwrap()");
        nameLookup.put("boxuscore", "boxuscore.as_ref().unwrap()");

        notFtlAttrs = new HashSet<String>();
        // notFtlAttrs.add("flowposition");
        // notFtlAttrs.add("flowheight");
        // notFtlAttrs.add("flowwidth");
        // notFtlAttrs.add("flowx");
        // notFtlAttrs.add("flowy");
        notFtlAttrs.add("is_root");
        notFtlAttrs.add("screenwidth");
        notFtlAttrs.add("position");
    }

    private String servoVal(String val) {
        // Weird escaping...
        val = val.toLowerCase().replace("uscore", "_");

        if (nameLookup.containsKey(val)) {
            val =  nameLookup.get(val);
        } else if (! notFtlAttrs.contains(val)) {
            val =  "ftl_attrs." + val;
        }
        return val.replace("_", "uscore");
    }

    private String typeConstructor(String type) {
        if (type.equals("Au"))
            return "Au::new(0)";
        if (type.equals("bool"))
            return "false";

        return type + "::new()";
    }

    private String generateFtlStruct(IFace iface, ALEParser ast) throws InvalidGrammarException {
        Set<String> attrs= iface.getAttrsLowercase();
        attrs.removeAll(notFtlAttrs);
        if (attrs.size() == 0) {
            return "";
        }

        String structName = iface.getName() + "FtlAttrs";
        String res = "pub struct " + structName + " {\n";

        for (String attr : attrs) {
            String type = Generator.extendedGet(ast, iface, attr).strType;
            res += "  " + attr + ": "+ type +",\n";
        }

        res += "}\n\n";

        res += "impl " + structName + " {\n";
        res += "  #[inline]\n";
        res += "  pub fn new() ->" + structName + " {\n";
        res += "    " + structName + " {\n";

        for (String attr : attrs) {
            String type = Generator.extendedGet(ast, iface, attr).strType;
            res += "      " + attr + ": "+ typeConstructor(type) +",\n";
        }

        res += "    }\n";
        res += "  }\n";
        res += "}\n\n";
        return res;
    }


    public String replaceTypeVals(String body, ALEParser ast) {
        String res = body;
        for (String t : ast.typeVals)
            res = res.replace("ExtraDataHandler::TOK_" + t.toUpperCase(), "\"" + t.toLowerCase() + "\"");
        return res;
    }

    public void generateParseFiles(ALEParser ast, Schedule sched, String outputDir, boolean verbose, String functionHeaders) throws InvalidGrammarException {
        //nothing
    }

    public String functionHeader(ALEParser.Assignment assign, ALEParser ast) throws InvalidGrammarException {
        String fName = assign._class.getName().toLowerCase() + "_" + assign._sink.replace('.','_').replace('@','_').replace("[-1]", "_init");
        String params = "(";
        boolean isFirst = true;
        for (String arg : assign._variables.keySet()) {
            if (!isFirst) {
                params += ", ";
            } else {
                isFirst = false;
            }
            //System.out.println(fName + params);
            String type = Generator.extendedGet(ast, assign._class, arg).strType;

            params +=  " " + assign._variables.get(arg) + ": " + type;
        }
        params += ")";

        //System.out.println(fName + params);
        String retType = Generator.extendedGet(ast, assign._class, assign._sink).strType;
        return "//@type action\n" +
            "fn " + fName + " " + params + " -> " + retType + " { " + replaceTypeVals(assign._indexedBody, ast) + " }\n";
    }

    public String visitBlockHeader(Class cls, ALEParser ast) throws InvalidGrammarException {
        ArrayList<AGEval.IFace> child_ifaces = new ArrayList<AGEval.IFace>();

        for(AGEval.IFace child_iface : cls.getChildMappings().values()){
            child_ifaces.add(child_iface);
        }

        String res = "impl FtlNode" + " for " + cls.getName() + "{\n";
        res += " fn with_all_children(&mut self, func: |&mut FtlNode|) {\n";

        for (AGEval.IFace child_iface : child_ifaces) {
            res += "  for child in self." + servoVal(cls.getChildNamesForType(child_iface).get(0)) + ".mut_iter() {\n";
            res += "    func(as_ftl_node(child));\n";
            res += "  }\n";
        }

        res += " }\n";

        return res;
    }

    public String visitBlockFooter(Class cls, ALEParser ast) throws InvalidGrammarException {
        return "}\n";
    }

    public String visitHeader(Class cls, int visitNum, ALEParser ast) throws InvalidGrammarException {
        String res = " fn visit_" + visitNum + "(&mut self) {\n"
            + logStmt(2, 2, "visit " + " " + cls.getName(), "\"" + visitNum + "\"");
        return res;
    }

    public String visitFooter(Class cls, int visitNum, ALEParser ast) throws InvalidGrammarException {
        return " \n }\n";
    }


    public String openChildLoop (AGEval.Class parent_class, String loopVar, ALEParser ast) {

        AGEval.IFace iface = parent_class.getChildMappings().get(loopVar);
        //System.out.println("Loopvar: " + loopVar);
        String ret = "let mut children = util::replace(&mut self." + servoVal(loopVar) + ", FlowList::new());\n";
        ret += "  let mut first = true;\n";
        ret += "  for child in children.mut_iter() {\n";
        ret += "    let child = mut_base(child);\n";
        return ret;
    }

    public String closeChildLoop(String loopVar) {
        String ret = "";
        ret += "    first = false;\n";
        ret += "  }\n";
        ret += "  self." + servoVal(loopVar) + " = children;\n";
        return ret;
    }


    public String printCurrentPipelineBuild (Hashtable<Variable, Term> binding) throws InvalidGrammarException {
        String res = "pub fn layout (root: &mut FtlNode) {\n";
        int pass = 0;
        for (Term visit : binding.get("P").toTermArray()) {
            String stencil = visit.arg(2).arg(1).toString();
            if (stencil.equals("tdLtrU")) throw new InvalidGrammarException("Rust backend does not support inorder traversals");
            else if (stencil.equals("td")) res += "  inherit(|node| node.visit_" + pass + "(), root);\n";
            else if (stencil.equals("bu")) res += "  synthesize(|node| node.visit_" + pass + "(), root);\n";
            else throw new InvalidGrammarException("Unknown stencil type: " + stencil);
            pass++;
        }
        return res + "}\n";
    }


    public String logStmt(int indentSrc, int indentOut, String msg, String rhs) {
        if (! GENERATE_LOG) {
            return "";
        }

        // Hack to get rid of rust compiler errors, this cannot be borrowed again
        if (rhs.contains("borrowuscoremut()")) {
            return "";
        }

        String res = "";
        for (int i = 0; i < indentSrc; i++) res += " ";
        res += "debug!(\"FTL: ";
        for (int i = 0; i < indentOut; i++) res += " ";
        res += msg + " {}\", " + rhs + ");\n";
        return res;
    }

    public String logStmtVar(int indentSrc, int indentOut, String msg, ALEParser ast, AGEval.Class cls, String rhs, String rhsAddress) throws InvalidGrammarException {
        return logStmt(indentSrc, indentOut, msg, rhsAddress);
    }

    public String asgnE(String lhs, String rhs) {
        if (!lhs.substring(0,2).equals("\n\n"))
            return lhs + rhs + ")";

        // If lhs begins with two newlines, that means it's a loop temporary.
        int end = lhs.indexOf("$\n");

        return lhs.substring(end+2) + rhs + ");\n" + lhs.substring(2,end);

    }
    //TODO(eatkinson): why is this never called?
    public String asgnS(String lhs, String rhs) { //return asgnE(lhs, rhs) + ";/*asgnS*/\n";
        return "";
    }

    // Translate accessor paths so they line up with Servo's
    String lhsServoTranslate(String lhsOrig) {
        return lhsOrig;
    }
    String rhsServoTranslate(String rhsOrig) {
        if (rhsOrig.equals("self.boxuscore")){
            return "&self.boxuscore";
        }
        return rhsOrig;
    }


    private String toBaseVal(Class cls, String prop, String propClean) {
        if (!(cls.getAttrsLowercase().contains(prop.toLowerCase())
              || cls.hasField(prop)))
            // If the attribute is in the interface, it is not in the node struct
            // but the base field.
            return "base." + servoVal(propClean);
        else
            return servoVal(propClean);
    }


    public String lhsToAddress(String lhs, Class cls, ALEParser ast)
        throws InvalidGrammarException {
        boolean isParent;
        String child;
        String prop;
        if (lhs.split("@").length == 2) {
            child = lhs.split("@")[0];
            isParent = child.equals("self");
            prop = lhs.split("@")[1];
        } else {
            child = ""; //silly Java
            isParent = true;
            prop = lhs;
        }
        String childClean = child.toLowerCase();
        String propClean = prop.toLowerCase();

        child = child.toLowerCase();
        String ret;

        // Initial and final loop values are local variables.
        if (propClean.contains("_init")) {
            return  "let " + propClean + " = (";
        } else if (propClean.contains("_last")) {
            return  "let mut " + propClean + " = (";
        }

        if (isParent) {
            // Parent attributes are all set in the top-level block of the visitor, so node is in
            // scope.
            return "self." + toBaseVal(cls, prop, propClean) + " = (";
        } else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child)) {
            // Children arrays are all assigned to inside loops, so child will be in scope.
            // We need to assigne to child_prop_last as well, becuase thats where $- is expected next time.
            // Signal this by prepending "\n\nloop_var$\n"
            return "\n\n" + child + "_" + propClean + "_last = " + "child." + servoVal(propClean) + "$\n" +
                "child." + servoVal(propClean) + " = (";
        } else {
            return "self." + childClean + "." + servoVal(propClean) + " = (";
        }
    }


    //TODO(eatkinson): Figure out what this method does
    public String getInputDefaultMaybe (AGEval.IFace cls, String cleanProp, ALEParser ast) {
        ALEParser.ExtendedVertex v = null;
        //class or interface
        try {
            for (Entry<String, ALEParser.ExtendedVertex> e : ast.extendedClasses.get(cls).extendedVertices.entrySet()) {
                if (e.getKey().toLowerCase().equals(cleanProp)) {
                    v = e.getValue();
                    break;
                }
            }
        } catch (NullPointerException e) {
            System.err.println("null ptr ongetInputDefaultMaybe");
            System.err.println("prop: " + cleanProp);
            System.err.println("class: " + (cls == null ? "null" : cls.getName()));
            throw e;
        }
        if (v == null) {
            //interface
            for (Entry<String, ALEParser.ExtendedVertex> e : ast.extendedClasses.get(cls.getInterface()).extendedVertices.entrySet()) {
                if (e.getKey().toLowerCase().equals(cleanProp)) {
                    v = e.getValue();
                    break;
                }
            }
        }
        if (v == null || v.maybeDefault == null) return null;
        else {
            for (String t : ast.typeVals)
                if (t.toLowerCase().equals(v.maybeDefault.toLowerCase()))
                    return "'" + t.toLowerCase() + "'";
            return "'" + v.maybeDefault + "'";
        }
    }

    public String rhsToVal(String lhs, AGEval.Class cls, ALEParser ast)
        throws InvalidGrammarException{
        boolean isParent;
        String child;
        String prop;
        if (lhs.split("@").length == 2) {
            child = lhs.split("@")[0];
            isParent = child.equals("self");
            prop = lhs.split("@")[1];
        } else {
            child = ""; //silly Java
            isParent = true;
            prop = lhs;
        }

        String originalProp = prop.replace("$$", "").replace("$i","").replace("$-", "").replace("[-1]", "");
        String cleanProp = originalProp.toLowerCase();

        // TODO: this doesn't work properly right now,
        // generates .base for non-interface variables
        //
        // if (isParent && !cleanProp.contains("_init") && !(cls.getPrivAttributes().containsKey(prop) || cls.hasField(prop))) {
        //     cleanProp = "base." + cleanProp;
        // }

        child = child.toLowerCase();
        String ret;

        String baseval = toBaseVal(cls, originalProp, cleanProp);

        // Special cases for loop elements
        if (prop.contains("$$")) {
            if (isParent)
                return "self." + baseval;
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return  child + "_" + cleanProp;
            else
                throw new InvalidGrammarException("Cannot access $$ attrib of " +
                                                  "a non-multi child / self reduction: " + lhs);
        } else if (prop.contains("$i")) {
            if (isParent)
                throw new InvalidGrammarException("Cannot access $i of self in class: " + cls.getName());
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return "child." + servoVal(cleanProp);
            else
                throw new InvalidGrammarException("Cannot access $i attrib of a non-multi child: " + cls.getName());
        } else if (prop.contains("$-")) {
            if (isParent)
                return "self." + baseval;
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return  "(if first { " + child + "_" + cleanProp + "_init } else { " + child + "_" + cleanProp + "_last })";
            else
                throw new InvalidGrammarException("Cannot access $- attrib of " +
                                                  "a non-multi child / self reduction: " + lhs);
        } else if (prop.contains("[-1]")) {
            throw new InvalidGrammarException("[-1] is not supported by the Rust backend.");
        } else {
            // Initial loop values are local variables.
            if (cleanProp.contains("_init") || cleanProp.contains("_last")) {
                return cleanProp;
            }

            // We can assume here that the attribute is not a special loop construct.
            if (isParent)
                return "self." + baseval;
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return "child." + servoVal(cleanProp);
            else
                return "self." + child + "." + servoVal(cleanProp);
        }
    }

    public String toAcc(String lhsRaw, AGEval.Class c) {
        String lhs = lhsRaw.toLowerCase();
        if (!lhs.contains("@"))
            return "self." + lhs + "_last";
        if(lhs.contains("self@"))
            return "self." + lhs + "_last";

        return lhs.replace("@", "_") + "_last";
    }





    public static void synthesizeRust (String alePath, String outputDir, String resourceDir, boolean verbose, boolean isFixedChildOrder, boolean useFirstParallel, boolean isExhaustive, int maxLen) throws Exception {
        System.err.println("Setup for HTML5 build: ");
        System.err.println("  Grammar: " + alePath);
        System.err.println("  Return first found: " + useFirstParallel);
        System.err.println("  Fixed child orders (lexical): " + isFixedChildOrder);
        System.err.println("  Include non-greedy schedules: " + isExhaustive);
        System.err.println("  Max number of visits: " + maxLen);
        System.err.println("  Algorithm: " + resourceDir);
        System.err.println("  Output dest: " + outputDir);
        System.err.println("  Chain loops: " + AGEvaluatorSwipl.chainLoops);
        GeneratorI g = AGEvaluatorSwipl.chainLoops ? new AbstractGenerator(new RustGenerator()) : new Generator(new RustGenerator());
        if (useFirstParallel)
            g.synthesize(alePath, outputDir, resourceDir, verbose, isFixedChildOrder, isExhaustive, maxLen, true);
        else
            g.synthesizeAll(alePath, outputDir, resourceDir, verbose, isFixedChildOrder, isExhaustive, maxLen, true);
    }

    public static void main(String[] args) throws Exception {
        if (args.length == 7) {
            synthesizeRust(args[1], args[2], args[0], false, new Boolean(args[3]).booleanValue(), new Boolean(args[4]).booleanValue(), new Boolean(args[5]).booleanValue(), new Integer(args[6]).intValue());
        } else {
            System.err.println("Arg 0: resource dir (where to fine algorithm.pl");
            System.err.println("Arg 1: grammar path");
            System.err.println("Arg 2: output path");
            System.err.println("Arg 3: allow all child orderings?");
            System.err.println("Arg 4: use first parallel (vs. /variants subdirs)");
            System.err.println("Arg 5: exhaustive or greedy (first prefix)?");
            System.err.println("Arg 6: max length of traversal sequence");
            throw new Exception("Wrong number of arguments");
        }
    }

    public String openLastChild(AGEval.Class cls, String loopVar) {
        return "      if (i + 1 == children.length) {\n";
    }

    public String closeLastChild() {
        return "      }\n";
    }

    public boolean anyVisitAllowsText (ALEParser ast) {
        return true;
        //for (AGEval.Class c : ast.classes) if (c.getName().toLowerCase().equals("textbox")) return true;
        //return false;
    }

    public String childrenRecur (AGEval.Class cls, String childName, int visitNum, ALEParser ast) throws InvalidGrammarException {
        return "      visit_" + visitNum + "(child); //recur\n";
    }

    public String childRecur(AGEval.Class cls, String childName, int visitNum) throws InvalidGrammarException {
        return "visit_" + visitNum + "(getChildByRefName(node, \"" + childName + "\"), false, node); //recur\n";
    }


    public String visitDispatcher(int visit, AGEvaluator aleg, HashSet<AGEval.Class> buIns, HashSet<AGEval.Class> bus) {
        // Generates visits for FtlNode trait
        return "  fn visit_" + visit + "(&mut self);\n";
    }


    //TODO(eatkinson): figure out what this method does
    public String preVisits(AGEvaluator aleg, Schedule sched) {
        /*
          String res =
          "function isInorder(node, pass) {\n" +
          "  switch (pass) {\n";
          for (int i = 0; i < sched.buSubInorderBuIn.size(); i++) {
          res += "    case " + i + ":\n";
          HashSet<AGEval.Class>bus = sched.buSubInorderBus.get(i);
          if (bus == null) {
          res += "     throw \"did not expect inorder call for pass " + i + "\";\n";
          } else {
          HashSet<AGEval.Class> ios = new HashSet<AGEval.Class>(aleg.classes);
          ios.removeAll(bus);
          res += "      switch (node.tagName.toLowerCase()) {\n";
          for (AGEval.Class cls : ios)
          res += "        case \"" + cls.getName().toLowerCase() + "\": return true; \n";
          res += "        default: return false;\n";
          res += "      }\n";
          }
          }
          res += "    default: throw (\"unknown pass \" + pass);\n";
          res += "  }\n";
          res += "}\n";
          return res;
        */
        return "";
    }

    //TODO(eatkinson): figure out what this method does
    public String postVisits(AGEvaluator aleg, Schedule sched) {
        return "";
    }

    public String output(String baseName, String visitOut, String visitDispatches, String outputDir, boolean write,
                         boolean verbose, ALEParser ast, Schedule sched, String fHeaders, Hashtable<Variable, Term> binding, AGEvaluator aleg) throws IOException,
                                                                                                                                                      InvalidGrammarException {
        String res = "#[feature(globs)]\n" +
            "use layout::ftl_lib::*;\n" +
            "use layout::block::BlockFlow;\n" +
            "use layout::inline::InlineFlow;\n" +
            "use layout::box_::Box;\n" +
            "use layout::flow::{BaseFlow, Flow, ImmutableFlowUtils, MutableFlowUtils, MutableOwnedFlowUtils, mut_base};\n" +
            "use layout::flow_list::{FlowList};\n" +
            "use style::{ComputedValues};\n" +
            "use layout::model::{specified,MaybeAuto};\n" +
            "use style::computed_values::{LengthOrPercentageOrAuto,LengthOrPercentage};\n" +
            "use geom::{Point2D, Rect, SideOffsets2D, Size2D};\n" +
            "use servo_util::geometry::Au;\n" +
            "use extra::arc::Arc;\n" +
            "use std::int::to_str_bytes;\n" +
            "use std::util;\n\n";

        res += "pub trait FtlNode {\n";
        res += "  fn with_all_children(&mut self, func: |&mut FtlNode|);\n";
        res += visitDispatches;
        res += "}\n\n";

        for (IFace iface: ast.interfaces) {
            res += generateFtlStruct(iface,ast);
        }

        for (Class cls: ast.classes) {
            res += generateFtlStruct(cls,ast);
        };

        res += fHeaders;
        res += visitOut;

        res += printCurrentPipelineBuild(binding);

        AGEvaluatorSwipl.writeFile(outputDir + File.separator + baseName +".rs", res);
        return res;
    }

}
