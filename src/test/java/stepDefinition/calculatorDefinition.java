package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import static org.junit.Assert.assertEquals;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;

public class calculatorDefinition {
  WebDriver driver;
  String pageTitle;
  
	
  @Given("^Open BMICalculator Page$")
  public void given() throws Throwable {
	  System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\KrishnaDhotre\\Documents\\selenium_workspace\\ChromeDriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.calculator.net");
  }

  @When("^Get Page Title$")
  public void when() throws Throwable {
	  pageTitle = driver.getTitle();
  }

  @Then("^Verify Page Title \"(.*)\"$")
  public void then(String title) throws Throwable {
	assertEquals("Here is Page title", pageTitle.toString(), title);
	  
  }
  
  @And("^Populate <value>$")
  public void populate(String value) throws Throwable {
	  driver.findElement(By.xpath(""));
  }
  
  @Then("^User enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
  public void user_enters_and_and(String age, String height, String weight) throws Throwable {
	  
	  driver.findElement(By.xpath("//*[@id=\"cage\"]")).clear();
	  driver.findElement(By.xpath("//*[@id=\"cage\"]")).sendKeys(age);
	  
	  driver.findElement(By.xpath("//*[@id=\"cheightmeter\"]")).clear();
	  driver.findElement(By.xpath("//*[@id=\"cheightmeter\"]")).sendKeys(height);
	  
	  driver.findElement(By.xpath("//*[@id=\"ckg\"]")).clear();
	  driver.findElement(By.xpath("//*[@id=\"ckg\"]")).sendKeys(weight);
	  
  }

  
  @Then("^Print BMIValue$")
  public void print_bmiValue() throws Throwable {
	  String bmi = driver.findElement(By.xpath("//*[@id=\"content\"]/div[4]/div/b")).getText();
	  System.out.println(bmi);
  }
  
  @When("^Click on BMICalculatorLink$")
  public void bmiCalculatorLink() throws Throwable {
	  driver.findElement(By.xpath("//*[@id=\"hl2\"]/li[1]/a")).click();
  }
  
  @Then("^Click on CalculateButton$")
  public void click_on_CalculateButton() throws Throwable {
	  driver.findElement(By.xpath("//*[@id=\"content\"]/div[4]/div[2]/table/tbody/tr/td/table[4]/tbody/tr/td/input[2]")).click();

  }
  
  @And("^Close Browser$")
  public void and() throws Throwable {
	  driver.close();
  }

}
