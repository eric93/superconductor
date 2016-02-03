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

public class IncrementalGenerator extends BackendBase implements Backend {

    private static boolean GENERATE_LOG = true; // Toggle flag to generate log statements
    private static boolean IS_INCREMENTAL;
    private IncrementalFieldsHelper fields;

    public IncrementalGenerator() {

    }


    public String replaceTypeVals(String body, ALEParser ast) {
        String res = body;
        for (String t : ast.typeVals)
            res = res.replace("ExtraDataHandler::TOK_" + t.toUpperCase(), "\"" + t.toLowerCase() + "\"");
        return res;
    }

    /*private String loopIterator(String nextfun, String loopVar) {
        if (nextfun != null && nextfun.contains("splituscoretouscorewidth")) {
            return "_split_iter()";
        } else if (nextfun != null && nextfun.equals("reverse")) {
            return ".mut_iter().rev()";
        } else if (loopVar.equals("text")) {
            return ".mut_iter()";
        } else {
            return ".mut_iter().map(|x| mut_base(x))";
        }
    }*/

    
    public void generateParseFiles(ALEParser ast, Schedule sched, String outputDir, boolean verbose, String functionHeaders) throws InvalidGrammarException {
        fields = new IncrementalFieldsHelper(ast, sched);
        try {
            if (IS_INCREMENTAL) {
                AGEvaluatorSwipl.writeFile(outputDir + File.separator + "fields.h", fields.generateDefinitions());
            }
		} catch (IOException e) {
			System.out.println("Could not write field header to " + outputDir + "; " + e.toString());
			System.exit(1);
		}

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


            params +=  " " + type + " " + assign._variables.get(arg);
        }
        params += ")";

        //System.out.println(fName + params);
        String retType = Generator.extendedGet(ast, assign._class, assign._sink).strType;
        return "//@type action\n" +
            retType + " " + fName + " " + params + " { return " + replaceTypeVals(assign._indexedBody, ast) + "; }\n";
    }

    public String visitBlockHeader(Class cls, ALEParser ast) throws InvalidGrammarException {
        return "";
    }

    public String visitBlockFooter(Class cls, ALEParser ast) throws InvalidGrammarException {
        return "";
    }

    public String visitHeader(Class cls, int visitNum, ALEParser ast) throws InvalidGrammarException {
        String fn_name = IS_INCREMENTAL ? cls.getName().toLowerCase() + "_" + visitNum + "_update" : cls.getName().toLowerCase() + "_" + visitNum;
        String res = " void visit_" + fn_name + "(" + cls.getName() + "* self, Tree* children, unsigned int num_children) {\n"
            + logStmt(2, 2, "visit " + " " + cls.getName(), "\"" + visitNum + "\"");
        return res;
    }

    public String visitFooter(Class cls, int visitNum, ALEParser ast) throws InvalidGrammarException {
        return " \n }\n";
    }


    public String openChildLoop (AGEval.Class parent_class, ALEParser.LoopOrdering loopVar, String loopExpr, ALEParser ast)
        throws InvalidGrammarException {

        AGEval.IFace iface = parent_class.getChildMappings().get("childs");
        if (iface == null)
            throw new InvalidGrammarException("Incremental backend only supports children names childs, found children named " + loopVar.childName);

        String ret = "{\n";
        ret += "  " + iface.getName() + "* old_child = NULL;\n";
        ret += "  for(int i = 0; i < num_children; i++) {\n";
        ret += "    " + iface.getName() + "* child = get_" + iface.getName().toLowerCase() + "_child(children+i);\n";
        return ret;
    }

    public String closeChildLoop(ALEParser.LoopOrdering loopVar) {
        String ret = "";
        ret += "    old_child = child;\n";
        ret += "  }\n}\n";
        return ret;
    }


    public String printCurrentPipelineBuild (Hashtable<Variable, Term> binding) throws InvalidGrammarException {
        /*String res = "fn get_traversals () -> Vec<Traversal<Fn(&mut Tree>> {\n";
        int pass = 0;
        for (Term visit : binding.get("P").toTermArray()) {
            String stencil = visit.arg(2).arg(1).toString();
            if (stencil.equals("tdLtrU")) throw new InvalidGrammarException("Rust backend does not support inorder traversals");
            else if (stencil.equals("td")) res += "  inherit(|node| node.visit_" + pass + "(), root);\n";
            else if (stencil.equals("bu")) res += "  synthesize(|node| node.visit_" + pass + "(), root);\n";
            else throw new InvalidGrammarException("Unknown stencil type: " + stencil);
            pass++;
        }
        return res + "}\n";*/
        return "";
    }


    public String logStmt(int indentSrc, int indentOut, String msg, String rhs) {
        if (! GENERATE_LOG) {
            return "";
        }

        String res = "";
        for (int i = 0; i < indentSrc; i++) res += " ";
        res += "printf(\"FTL: ";
        for (int i = 0; i < indentOut; i++) res += " ";
        res += msg + " %s\\n\", " + rhs + ");\n";
        return res;
    }

    public String logStmtVar(int indentSrc, int indentOut, String msg, ALEParser ast, AGEval.Class cls, String rhs, String rhsAddress) throws InvalidGrammarException {
        String res = "";
        for (int i = 0; i < indentSrc; i++) res += " ";
        res += "printf(\"FTL: ";
        for (int i = 0; i < indentOut; i++) res += " ";
        res += msg + " %s\\n\", to_string(" + rhsAddress + "));\n";
        return res;
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

    private String toBaseVal(Class cls, String prop, String propClean, boolean rhs) {
        HashSet<String> fieldsLowerCase = new HashSet<String>();
        for (String k : cls.getPrivFields().keySet()) {
            fieldsLowerCase.add(k.toLowerCase());
        }
        if (!(cls.getAttrsLowercase().contains(prop.toLowerCase())
              || fieldsLowerCase.contains(prop.toLowerCase())))
            // If the attribute is in the interface, it is not in the node struct
            // but the base field.
            return "base." + propClean;
        else
            return propClean;
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

        String loc;
        // Initial and final loop values are class variables.
        if (propClean.contains("_init") || propClean.contains("_last")) {
            loc =  "self->" + propClean;
        } else if (isParent) {
            // Parent attributes are all set in the top-level block of the visitor, so node is in
            // scope.
            loc = "self->" + toBaseVal(cls, prop, propClean, false);
        } else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child)) {
            // Children arrays are all assigned to inside loops, so child will be in scope.
            // We need to assign to child_prop_last as well, becuase thats where $- is expected next time.
            // Signal this by prepending "\n\nloop_var$\n"
            //return "\n\nself->" + child + "_" + propClean + "_last = " + "child->" + propClean + "$\n" +
            //    "child->" + propClean + " = (";

            //Ignore the above for now
            loc = "child->" + propClean;

        } else {
            loc =  "self->" + childClean + "->" + propClean;
        }

        //Make sure we keep the old value around in a temporary.
        if (IS_INCREMENTAL && !lhs.contains("uscoredelta") && !propClean.contains("_init") && !propClean.contains("_last")) {
            String ret = "\n";
            //ret += fields.getTypeForField(cls.getName(),prop) + " ";
            ret += "int ";
            ret += propClean + "_old = ";
            ret += loc;
            ret += ";\n";

            ret += loc + " = (";

            return ret;
        } else {
            return loc + " = (";
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

        child = child.toLowerCase();
        String ret;

        String baseval = toBaseVal(cls, originalProp, cleanProp, true);

        if (IS_INCREMENTAL) {
            // delta and delta_0 can be stored at the same location
            baseval = baseval.replace("uscoredeltauscore0","uscoredelta");

            // delta bits are in a special place
            if (baseval.contains("uscoredelta")) {
                if (baseval.contains("base")) {
                    baseval = baseval.replace("->","->delta_bits.");
                } else {
                    baseval = baseval.replace("base.","base.delta_bits.");
                }
            }

            // Special cases for old attributes
            if (baseval.contains("uscoreold")) {
                System.err.println(lhs);
                if (baseval.contains("uscoreolduscore0")) {
                    return cleanProp.replace("uscoreolduscore0","_old");
                } else {
                    // old values are at the same location
                    baseval = baseval.replace("uscoreold","");
                }
            }

        }

        // Special cases for loop elements
        if (prop.contains("$$")) {
            if (isParent)
                return "self->" + baseval;
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return child + "_" + cleanProp + "_last";
            else
                throw new InvalidGrammarException("Cannot access $$ attrib of " +
                                                  "a non-multi child / self reduction: " + lhs);
        } else if (prop.contains("$i")) {
            if (isParent)
                throw new InvalidGrammarException("Cannot access $i of self in class: " + cls.getName());
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return "child->" + cleanProp;
            else
                throw new InvalidGrammarException("Cannot access $i attrib of a non-multi child: " + cls.getName());
        } else if (prop.contains("$-")) {
            if (isParent)
                return "self->" + baseval;
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return "((i == 0) ? ( self->" + child + "_" + cleanProp + "_init ) : (  old_child->" + cleanProp + " ))";
            else
                throw new InvalidGrammarException("Cannot access $- attrib of " +
                                                  "a non-multi child / self reduction: " + lhs);
        } else if (prop.contains("[-1]")) {
            throw new InvalidGrammarException("[-1] is not supported by the Rust backend.");
        } else {
            // Initial and final loop values are always class variables.
            if (cleanProp.contains("_init") || cleanProp.contains("_last")) {
                return  "self->" + cleanProp;
            }
            if (isParent)
                return "self->" + baseval;
            else if (Generator.childrenContains(ast.extendedClasses.get(cls).multiChildren.keySet(), child))
                return "child->" + cleanProp;
            else
                return "self->" + child + "->" + cleanProp;
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





    public static void synthesizeIncremental (String alePath, String outputDir, String resourceDir, boolean verbose, boolean isFixedChildOrder, boolean useFirstParallel, boolean isExhaustive, boolean isIncremental, int maxLen) throws Exception {
        System.err.println("Setup for HTML5 build: ");
        System.err.println("  Grammar: " + alePath);
        System.err.println("  Return first found: " + useFirstParallel);
        System.err.println("  Fixed child orders (lexical): " + isFixedChildOrder);
        System.err.println("  Include non-greedy schedules: " + isExhaustive);
        System.err.println("  Max number of visits: " + maxLen);
        System.err.println("  Algorithm: " + resourceDir);
        System.err.println("  Output dest: " + outputDir);
        System.err.println("  Incremental: " + isIncremental);
        System.err.println("  Chain loops: " + AGEvaluatorSwipl.chainLoops);
        IS_INCREMENTAL = isIncremental;
        GeneratorI g = AGEvaluatorSwipl.chainLoops ? new AbstractGenerator(new IncrementalGenerator()) : new Generator(new IncrementalGenerator());
        if (useFirstParallel)
            g.synthesize(alePath, outputDir, resourceDir, verbose, isFixedChildOrder, isExhaustive, maxLen, true);
        else
            g.synthesizeAll(alePath, outputDir, resourceDir, verbose, isFixedChildOrder, isExhaustive, maxLen, true);
    }

    public static void main(String[] args) throws Exception {
        if (args.length == 8) {
            synthesizeIncremental(args[1], args[2], args[0], false, new Boolean(args[3]).booleanValue(), new Boolean(args[4]).booleanValue(), new Boolean(args[5]).booleanValue(), new Boolean(args[6]).booleanValue(), new Integer(args[7]).intValue());
        } else {
            System.err.println("Arg 0: resource dir (where to fine algorithm.pl");
            System.err.println("Arg 1: grammar path");
            System.err.println("Arg 2: output path");
            System.err.println("Arg 3: allow all child orderings?");
            System.err.println("Arg 4: use first parallel (vs. /variants subdirs)");
            System.err.println("Arg 5: exhaustive or greedy (first prefix)?");
            System.err.println("Arg 6: incremental update?");
            System.err.println("Arg 7: max length of traversal sequence");
            throw new Exception("Wrong number of arguments: " + args.length);
        }
    }

    public String openLastChild(AGEval.Class cls, ALEParser.LoopOrdering loopVar) {
        return "//Unsupported: ";
    }

    public String closeLastChild() {
        return "\n";
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
        String res = 
            "\n"+
            "#include <cstdio>\n"+
            "#include \"generated.h\"\n"+
            "#include \"visits.h\"\n"
            ;
        
        res += fHeaders;
        res += visitOut;

        res += printCurrentPipelineBuild(binding);

        String end  = ".cpp";

        AGEvaluatorSwipl.writeFile(outputDir + File.separator + baseName + end, res);
        return res;
    }

}
