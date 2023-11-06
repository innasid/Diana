package natwest.billing;

public class CheckNumber {

	public String checkeven(String ar) {
		
		try {
			
			int n = Integer.parseInt(ar);
			if (n%2 ==0) {
				return "Even number" ;
			} else {
				return "Odd number";
			}
		}catch(Exception err) {
			throw new NumberFormatException();
		}
	}
}
