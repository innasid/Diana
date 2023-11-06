package natwest.billing;

import org.springframework.stereotype.Component;

@Component
public class CompDemo {   
	
	String name;
	
	
	public void setName(String name) {
		this.name = name;
	}


	public void f1() {
		System.out.println("I am in Component demo class " + name);
	}

}
