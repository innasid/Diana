package natwest.billing;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.context.annotation.Scope;

@Configuration
public class Container2 {      //after adding configuration it becomes a container till then it is a class.
	
	@Scope
	 (value = "singleton")  //scope to be used before bean. by default it will be there.
	//lazy only when first time called it appears. when required it creates object.
	
	@Lazy
	
	
	
	@Bean
	public Holiday getHoliday() {
		
		return new Holiday("Gandhi Jayanti ", "2nd October");
	}
	
	@Bean
	public Holiday getHoliday1() {
		Holiday obj = new Holiday();
		obj.setHolidaydate("14th January");
		obj.setHolidayname("Pongal");
		return obj;
	}
	
	

}