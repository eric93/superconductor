package AGEvalSwipl;

import java.util.Map;

import org.jpl7.Compound;
import org.jpl7.Query;
import org.jpl7.Term;
import org.jpl7.Variable;

public class TestSwiplJpl {
	
	public static boolean testExternalCallAst () {
		Variable N = new Variable("N");
		org.jpl7.Integer One = new org.jpl7.Integer(1);
		org.jpl7.Integer Thirteen = new org.jpl7.Integer(13);
		Query q = new Query(
				new Compound(";", new Term[]{
						new Compound("succ", new Term[] { Thirteen, N}),
						new Compound("succ", new Term[] { One, N})}));
						
		int sum = 0;
		while (q.hasNext()) {
			@SuppressWarnings("unchecked")
			Map<String, Term> binding = q.next();
			sum += ((org.jpl7.Integer) binding.get("N")).intValue();
		}		
		return sum == (14 + 2);
	}
	
	public static boolean testExternalCallString () {
		Query q = new Query("succ(13, N) ; succ(1, N)");
		int sum = 0;
		while (q.hasNext()) {
			@SuppressWarnings("unchecked")
			Map<String, Term> binding = q.next();
			sum += ((org.jpl7.Integer) binding.get("N")).intValue();
		}		
		return sum == (14 + 2);
	}
	
	public static void main(String[] args) {

		try {
		  if (!testExternalCallAst()) throw new Exception();		  
		  System.out.println("Can compute in PL (AST)");
		} catch (Exception e) {
			System.err.println("Cannot compute in PL (AST)");
		}
		try {
			if (!testExternalCallString()) throw new Exception();
			System.out.println("Can compute in PL (string)");
		} catch (Exception e) {
			System.err.println("Cannot compute in PL (string)");
		}
	}
}
