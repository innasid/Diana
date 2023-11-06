package natwest.billing;

import org.junit.jupiter.api.Test; 
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import static org.junit.jupiter.api.Assertions.*
;/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void testcase1() {
    	CheckNumber ob = new CheckNumber();
    	assertEquals("Even number", ob.checkeven("2"));
    }
    
    @Test
    public void testcase2() {
    	CheckNumber ob = new CheckNumber();
    	assertEquals("Odd number", ob.checkeven("3"));
    }
    
    @Test
    public void testcase3() {
    	CheckNumber ob = new CheckNumber();
    		assertThrows(NumberFormatException.class,()->ob.checkeven("abc"));
    }
    
    @Test
    public void testcase4() {
    			
    			try {
    				ApplicationContext ac = new ClassPathXmlApplicationContext("container1.xml");
    				Holiday ob;
    				ob = (Holiday) ac.getBean("h1"); 
    				ob.display();
    				
    			}catch(Exception e) {
    				fail();
    			}
    		}
    }
    
