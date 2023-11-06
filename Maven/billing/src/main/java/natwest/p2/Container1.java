package natwest.p2;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
public class Container1 {
	
	@Bean
	public ArithmeticImplement Bean1() {
		return new ArithmeticImplement();	
		
	}
	
	@Bean 
	public ValidateAspect Bean2() {
		return new ValidateAspect();
	}
	
	@Bean 
	public ValidateAspect2 Bean3() {
		return new ValidateAspect2();
	}
	

}