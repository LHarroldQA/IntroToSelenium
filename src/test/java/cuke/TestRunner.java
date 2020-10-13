package cuke;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/cuke",
		glue = {"cuke.stepdefs"},
		plugin = {"pretty", "html:target/html-reports/report","json:target/json-reports/report","junit:target/junit-reports/report"},
		monochrome = false,
		tags = {"~@ignore"}
		)

public class TestRunner {
	
	public TestRunner() {
		
	}

}
