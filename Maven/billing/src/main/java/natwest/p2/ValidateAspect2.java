package natwest.p2;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Order;

@Aspect
@Order(0) 
public class ValidateAspect2 {

	@Before("execution(* *.*(Double,Double))")
	public void check(JoinPoint jp) throws Exception{
	for (Object x : jp.getArgs()) {
		Double temp = (Double) x;
		if (temp>10000) {
			throw new IllegalArgumentException("You have crossed 10000 limit");
		}
		
	}
}
}