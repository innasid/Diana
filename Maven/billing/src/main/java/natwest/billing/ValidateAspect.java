package natwest.billing;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Order;

@Aspect
@Order(0) 
public class ValidateAspect {

	@Before("execution(* *.*(Double,Double))")
	public void check(JoinPoint jp) throws Exception{
	for (Object x : jp.getArgs()) {
		Double temp = (Double) x;
		if (temp<0) {
			throw new IllegalArgumentException("The value cannot be negative");
		}
		
	}
}

	@AfterReturning(pointcut  = "execution(* *.*(Double,Double))", returning = "result")
	
	public void check1(Object result) throws Exception {
		Double temp = (Double) result;
		if (temp < 0) {
			throw new IllegalArgumentException("the return value cannot be Negative");
		}
	}
	
}