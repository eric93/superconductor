package AGEvalSwipl;

import java.util.Map;

import org.jpl7.Query;
import org.jpl7.Term;
import AGEval.InvalidGrammarException;
//import aleGrammar.AleFrontend;

public class AGDebugger {
	
	public String getError () {
		String error = "Unsolvable: \n";		
		Query rem = new Query("countSteps(N, Remaining), member([C, [RefName, Attrib, RefNameType]], Remaining)");
		String nSteps = "0";
		while (rem.hasNext()) {
			@SuppressWarnings("unchecked")
			Map<String, Term> binding = rem.next();
			nSteps = binding.get("N").toString(); //FIXME do just once
			error += "  Cannot solve for class '" + binding.get("C") + "': " + binding.get("RefName") + "." + binding.get("Attrib") + "\n";
		}
		error += "Exhausted search after " + nSteps + " inorder traversals.";
		return error;		
	}
	public AGDebugger (AGEvaluatorSwipl g) throws InvalidGrammarException {
	
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
