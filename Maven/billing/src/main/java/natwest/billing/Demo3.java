package natwest.billing;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Demo3 {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext ba = new AnnotationConfigApplicationContext();
		ba.scan("natwest.billing");
		ba.refresh();
		CompDemo ob = ba.getBean(CompDemo.class);
		ob.setName("Ram");
		ob.f1();
		System.out.println("Calling f2 method");
		f2();
	}

	public static void f2() {
		AnnotationConfigApplicationContext ba = new AnnotationConfigApplicationContext();
		ba.scan("natwest.billing");
		ba.refresh();
		CompDemo ob = ba.getBean(CompDemo.class);
		ob.f1();
		
	}

}