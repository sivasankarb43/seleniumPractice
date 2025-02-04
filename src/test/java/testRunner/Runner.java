package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
		"src/test/java/features/practice.feature" }, dryRun = false, monochrome = true, glue = "stepDefnition", 
				plugin = { "pretty",
				"html:target/report", "json:target/report/jsonReport.json"})

public class Runner {

}
