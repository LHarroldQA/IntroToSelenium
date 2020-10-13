package cuke.stepdefs;

import static org.junit.Assert.assertEquals;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TeaTesting {
	
	public static WebDriver driver;
	
	public static WebElement target;
	
	@Before
	public static void init() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
		driver = new ChromeDriver(chromeCfg());
	}
	
	@Given("^the correct web address$")
	public void the_correct_web_address() throws Throwable {
		driver.get("http://www.practiceselenium.com/welcome.html");
	}

	@When("^I navigate to the 'Menu' page$")
	public void i_navigate_to_the_Menu_page() throws Throwable {
		target = driver.findElement(By.xpath("//*[@id=\"wsb-nav-00000000-0000-0000-0000-000450914915\"]/ul/li[3]/a"));
		target.click();
	}

	@Then("^I can browse a list of the available products\\.$")
	public void i_can_browse_a_list_of_the_available_products() throws Throwable {
		System.out.println("This is the " + driver.getTitle());
		assertEquals("Menu",driver.getTitle());
	}

	@When("^I click the checkout button$")
	public void i_click_the_checkout_button() throws Throwable {
		target = driver.findElement(By.xpath("//*[@id=\"wsb-nav-00000000-0000-0000-0000-000450914915\"]/ul/li[3]/a"));
		target.click();
		
		target = driver.findElement(By.xpath("//*[@id=\"wsb-button-00000000-0000-0000-0000-000451955160\"]/span"));
		target.click();
	}

	@Then("^I am taken to the checkout page$")
	public void i_am_taken_to_the_checkout_page() throws Throwable {
		System.out.println("You have found the "+ driver.getTitle());
		assertEquals("Check Out",driver.getTitle());
	}
	
	
	@After
	public static void cleanup() {
		driver.close();
		driver.quit();
	}
	
	public static ChromeOptions chromeCfg() {
		 Map<String, Object> prefs = new HashMap<String, Object>();
		 ChromeOptions cOptions = new ChromeOptions();
		  
		 // Settings
		 prefs.put("profile.default_content_setting_values.cookies", 2);
		 prefs.put("network.cookie.cookieBehavior", 2);
		 prefs.put("profile.block_third_party_cookies", true);

		 // Create ChromeOptions to disable Cookies pop-up
		 cOptions.setExperimentalOption("prefs", prefs);

		 return cOptions;
	}

}
