package natwest.billing;

public class ArithmeticImplement implements Arithmetic {

	@Override
	public Double Add(Double x, Double y) {
		
		return x+y;
	}
	
	@Override
	public Double Subtract(Double x, Double y) {
		
		return x-y;
	}
	
	@Override
	public Double Divide(Double x, Double y) {
		
		return x/y;
	}
	
	@Override
	public Double Multiply(Double x, Double y) {
		
		return x*y;
	}
	
	
	
	
}
