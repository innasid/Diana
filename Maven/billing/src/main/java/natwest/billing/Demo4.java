package natwest.billing;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Demo4 {

	public static void main(String[] args) {
		ApplicationContext ac = new ClassPathXmlApplicationContext("aopcontainer.xml");
		Arithmetic obj = (Arithmetic) ac.getBean("a2");
		
		try {
			System.out.println(obj.Add(20.1,30.2));
			
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		
		try {
			System.out.println(obj.Subtract(20.1,-30.3));
			
		}catch (Exception e) {
			System.err.println(e.getMessage());
		}
		
		try {
			System.out.println(obj.Multiply(20.1,30.2));
	
		}catch (Exception e) {
	System.err.println(e.getMessage());
}
		
		try {
			System.out.println(obj.Subtract(20.1, 20.3));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		try {
			System.out.println(obj.Subtract(20.1, 20000.3));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}
}
