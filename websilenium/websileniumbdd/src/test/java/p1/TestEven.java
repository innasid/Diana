package p1;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class TestEven {
	CheckEvenorOdd ob;
	int n;
	String output;
	
@Given("a number is given to test")
public void a_number_is_given_to_test() {
	ob = new CheckEvenorOdd();
	n = 20;
}

@When("number is divisible by two")
public void number_is_divisible_by_two() {
   
 output = ob.checkNumber(n);
}

@Then("get a message even")
public void get_a_message_even() {
	if(!output.equals("Number is Even"))
    throw new io.cucumber.java.PendingException();
}


	
}
