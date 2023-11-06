package natwest.springmvc.controller;

public class addBO {
	public void computeAdd(addTO x) throws Exception{
		int n = Integer.parseInt(x.getNum1())+Integer.parseInt(x.getNum2());
		x.setNum3(String.valueOf(n));
	}
}
