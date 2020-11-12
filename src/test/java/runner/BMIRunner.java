package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= "src/test/java/features/bmiCalculator.feature",
	glue={"stepDefinition"},
	tags={"@Regression"},
	plugin = { "pretty", "html:target/cucumber-pretty"} //Skipping Scenario
)

public class BMIRunner {

}
