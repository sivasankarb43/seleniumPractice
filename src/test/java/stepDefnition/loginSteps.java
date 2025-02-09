package stepDefnition;

import io.cucumber.java.en.Given;

public class loginSteps {

	@Given("I want to write a step with (.*)")
	public void logInFirstStep(String name) {
		System.out.println("my name is: " + name);
	}

	@Given("just print hello iam working fine")
	public void print_working_fine() {
		System.out.println("just print hello iam working fine");
	}

}
