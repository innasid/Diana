package natwest.p2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Demo4 {
	
	public static void main(String[] args) {
		
		//LHS is annotation and RHS is class
		ApplicationContext ac = new AnnotationConfigApplicationContext(Container1.class);
		Arithmetic ob = (Arithmetic) ac.getBean("Bean1");
		
		try {
			System.out.println(ob.Add(20.1, 20.3));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		try {
			System.out.println(ob.Subtract(21.1, 20.3));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		try {
			System.out.println(ob.Subtract(20.1, 20.3));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
		try {
			System.out.println(ob.Subtract(20.1, 20000.3));
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}


}