package natwest.billing;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Demo1 {

	public static void main(String[] args) {
	
		ApplicationContext ac = new ClassPathXmlApplicationContext("container1.xml");
		Holiday obj,obj1;
		obj = (Holiday) ac.getBean("h1");
		obj.display();
		obj1 = (Holiday) ac.getBean("h2");
		obj1.display();
		
	}
}
