package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {
		"src/test/java/features/practice.feature" }, dryRun = false, monochrome = true, glue = "", 
				plugin = { "pretty",
				"html:target/report"})

public class Runner extends AbstractTestNGCucumberTests {

}
