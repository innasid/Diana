package natwest.billing;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Demo2 {
	
	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(Container2.class);
		Holiday obj,obj1;
		obj = ac.getBean("getHoliday",Holiday.class);
		obj.display();
		obj1 = ac.getBean("getHoliday1", Holiday.class);
		obj1.display();
	}
	
}