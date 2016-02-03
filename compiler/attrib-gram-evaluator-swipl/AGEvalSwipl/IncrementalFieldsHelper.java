package AGEvalSwipl;

import AGEval.InvalidGrammarException;
import AGEval.IFace;
import AGEvalSwipl.AGEvaluatorSwipl.Schedule;
import aleGrammar.ALEParser;
import aleGrammar.ALEParser.ExtendedVertex;
import java.util.ArrayList;

class IncrementalFieldsHelper {
    class GenInterface {
        ArrayList<Field> properties;
        ArrayList<Field> delta_bits;
        String name;
        public GenInterface(IFace i) {
            properties = new ArrayList<Field>();
            delta_bits = new ArrayList<Field>();
            name = i.getName();
        }
    }
    class GenClass extends GenInterface {
        String ifname;
        public GenClass(AGEval.Class c) {
            super(c.getInterface());
            name = c.getName();
            ifname = c.getInterface().getName();
        }
    }

    ArrayList<GenInterface> ifaces;
    ArrayList<GenClass> classes;
    ALEParser ast;

    public IncrementalFieldsHelper(ALEParser ast, Schedule sched) {
        this.ast = ast;
        classes = new ArrayList<GenClass>(ast.classes.size());
        ifaces = new ArrayList<GenInterface>(ast.interfaces.size());
        indexFields(ast, sched);
    }

    public String getTypeForField(String className, String fName) throws InvalidGrammarException {
        GenClass thisClass = null;
        for (GenClass c : classes) {
            if (c.name.equals(className)) {
                thisClass = c;
            }
        }

        if (thisClass == null) {
            throw new InvalidGrammarException("No such class: " + className);
        }

        Field thisField = null;
        for (Field f : thisClass.properties) {
            if (f.name.equals(fName)) {
                thisField = f;
            }
        }

        if (thisField == null) {
            GenInterface thisInterface = null;
            for (GenInterface i : ifaces) {
                if(i.name.equals(thisClass.ifname)){
                    thisInterface = i;
                }
            }

            if (thisInterface == null) {
                throw new InvalidGrammarException("No such interface: " + thisClass.ifname);
            }

            for (Field f : thisInterface.properties) {
                System.err.println("Found field " + f.name);
                if (f.name.equals(fName)) {
                    thisField = f;
                }
            }
        }

        if (thisField == null) {
            throw new InvalidGrammarException("No such field: " + fName);
        }
        
        return thisField.type;
    }

    private void indexFields(ALEParser ast, Schedule sched) {
		for (IFace interf : ast.interfaces) {
            GenInterface geninterf = new GenInterface(interf);
            ifaces.add(geninterf);
			ALEParser.ExtendedClass ec = ast.extendedClasses.get(interf);
			
			for(String property : ec.positionedInputs.values()) {
				addField(geninterf, property, interf, false);
			}
			
			for(String property : interf.getPubAttributes().keySet()) {
				addField(geninterf, property, interf, false);
			}

			for(String property : interf.getPubFields().keySet()) {
				addField(geninterf, property, interf, true);
			}
		}
		
		for (AGEval.Class c : ast.classes) {
            GenClass genc = new GenClass(c);
            classes.add(genc);
			for (String property : c.getPrivFields().keySet()) {
				addField(genc, property, c, true);
			}
			
			for (String property : c.getPrivAttributes().keySet()) {
				addField(genc, property, c, false);
			}
			
			for (String sink : sched.reductions.sinks.get(c)) {
				String sink_type;
				
				if(sink.contains("@") && !sink.contains("self@")) {
					String child_name = sink.split("@")[0];
					AGEval.IFace child_iface = c.getChildMappings().get(child_name);
					sink_type = getType(sink.split("@")[1], child_iface);
				} else {
					sink_type = getType(sink, c);
				}
				
				if(sink.contains("@") && !sink.contains("self@")) {
					sink = sink.replace("@", "_");
				}
				addField(genc, sink + "_init", sink_type,false);
				addField(genc, sink + "_last", sink_type,false);
			}
		}
    }

    private String getType(String property, IFace i) {
        if(ast.extendedClasses.get(i).extendedVertices.get(property) == null) {
			i = i.getInterface();
		}
		
		return ast.extendedClasses.get(i).extendedVertices.get(property).strType;
    }

    private void addField(GenInterface i, String fname, String type, boolean input) {
        if(!fname.equals("display") && !fname.equals("refname")){
            if (fname.endsWith("uscoredelta")){
                i.delta_bits.add(new Field(fname, type, input));
            } else if (!fname.endsWith("uscoredeltauscore0") && !fname.endsWith("uscoreold")) {
                i.properties.add(new Field(fname, type, input));
            }
        }
    }

    private void addField(GenInterface i, String fname, IFace iface, boolean input) {
        if(!fname.equals("display") && !fname.equals("refname")){
            if (fname.endsWith("uscoredelta")){
                i.delta_bits.add(new Field(fname, getType(fname, iface), input));
            } else if (!fname.endsWith("uscoredeltauscore0") && !fname.endsWith("uscoreold")) {
                i.properties.add(new Field(fname, getType(fname, iface), input));
            }
        }
    }

    public String defaultValue(String type) throws InvalidGrammarException {
        if (type.equals("int"))
            return "0";
        if (type.equals("DisplayList"))
            return "new_display_list()";
        if (type.equals("InputLength"))
            return "fixed_input_length(0)";
        if (type.equals("bool"))
            return "false";

        throw new InvalidGrammarException("Type " + type + " not supported.");
    }

    private String generateDeltaDefinitions(String name, ArrayList<Field> bits) throws InvalidGrammarException {
        String ret = "";
        ret += "struct " + name + "_delta {\n";
        for (Field f : bits) {
            if (!f.type.equals("bool")){
                throw new InvalidGrammarException("Invalid delta bit: " + f.name.toLowerCase());
            }
            ret += "    " + f.type + " " + f.name.toLowerCase() + ";\n";
        }

        ret += "    " + name + "_delta (){\n";
        for(Field f : bits) {
            ret += "        " + f.name + " = false;\n";
        }
        ret += "    }\n}\n";
        return ret;
    }

    public String generateDefinitions() throws InvalidGrammarException {
        String ret = "";
        ret += "#ifndef __FIELDS_H__\n";
        ret += "#define __FIELDS_H__\n";
        ret += "#include \"util.h\"\n";
        
        for (GenInterface i : ifaces) {
            ret += generateDeltaDefinitions(i.name, i.delta_bits);
            ret += "struct " + i.name + " {\n";
            ret += "    " + i.name + "_delta delta_bits;\n";
            for (Field f : i.properties) {
                ret += "    " + (f.input ? "/*input*/" : "") + f.type + " " + f.name.toLowerCase() + ";\n";
            }

            //Generate the constructor
            String args = "";
            String body = "";
            String spacing = "      ";
            for (Field f : i.properties) {
                if (f.input) {
                    args += spacing + f.type + " " + f.name.toLowerCase();
                    if (spacing.equals("      ")) {
                        spacing = ",\n      ";
                    }
                    body += "         this->" + f.name.toLowerCase() + " = " + f.name.toLowerCase() + ";\n";
                } else {
                    body += "         this->" + f.name.toLowerCase() + " = " + defaultValue(f.type) + ";\n";
                }
            }


            ret += "    " + i.name + "(\n";
            ret += args + "\n";
            ret += "    ){\n";
            ret += body;
            ret += "    }\n";

            ret += "};\n";
        }

        for (GenClass c : classes) {
            ret += "struct " + c.name + " {\n";
            ret += "    " + c.ifname + " base;\n";
            for (Field f : c.properties) {
                ret += "    " + (f.input ? "/*input*/" : "") + f.type + " " + f.name.toLowerCase() + ";\n";
            }

            //Generate the constructor
            String args = "      " + c.ifname + " base";
            String body = "      ";
            for (Field f : c.properties) {
                if (f.input) {
                    args += ",\n      " + f.type + " " + f.name.toLowerCase();
                    body += "         this->" + f.name.toLowerCase() + " = " + f.name.toLowerCase() + ";\n";
                } else {
                    body += "         this->" + f.name.toLowerCase() + " = " + defaultValue(f.type) + ";\n";
                }
            }


            ret += "    " + c.name + "(\n";
            ret += args + "\n";
            ret += "    ) : base(base) {\n";
            ret += body;
            ret += "    }\n";

            ret += "};\n";
        }

        ret += "#endif\n";
        return ret;
    }


    static class Field {
        String type;
        String name;
        boolean input;

        public Field(String n, String t, boolean i) {
            type = t;
            name = n;
            input=i;
        }
    }
}
