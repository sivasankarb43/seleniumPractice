package stepDefnition;

import io.cucumber.java.en.Given;

public class loginSteps {
	
	@Given("I want to write a step with (.*)")
	public void logInFirstStep(String name) {
		System.out.println("my name is: "+name);
	}

}
