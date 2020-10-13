package cuke.stepdefs;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

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

public class GoogleTest {
	
	public static WebDriver driver;
	
	public static WebElement target;
	
	@Before
	public static void init() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
		driver = new ChromeDriver(chromeCfg());
		System.out.println("Before");
	}
	
	@Given("^we can open google$")
	public void we_can_open_google() throws Throwable {
		driver.get("https://google.com");
		
		assertEquals("Google",driver.getTitle());
	}

	@When("^we search for \"([^\"]*)\"$")
	public void we_search_for(String arg1) throws Throwable {
		target = driver.findElement(By.name("q"));
		assertNotNull(target);
		target.sendKeys(arg1);
		assertEquals(arg1,target.getAttribute("value"));
		target.submit();
	}

	@Then("^google will return us images of \"([^\"]*)\"$")
	public void google_will_return_us_images_of(String arg1) throws Throwable {
		target = driver.findElement(By.xpath("//*[@id=\"hdtb-msb-vis\"]/div[2]/a"));
		target.click();
		
		assertEquals(arg1 + " - Google Search",driver.getTitle());
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
	
	@Given("^we can open the demo site$")
	public void we_can_open_the_demo_site() throws Throwable {
		driver.get("http://thedemosite.co.uk/index.php");
		assertEquals("FREE example PHP code and online MySQL database - example username password protected site",driver.getTitle());
	}

	@When("^we can great a user with the username: \"([^\"]*)\" and password: \"([^\"]*)\"$")
	public void we_can_great_a_user_with_the_username_and_password(String arg1, String arg2) throws Throwable {
		WebElement userInput,passInput;
		target = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[3]"));
		target.click();
		userInput = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[1]/td[2]/p/input"));
		passInput = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[2]/td[2]/p/input"));
		userInput.sendKeys(arg1);
		passInput.sendKeys(arg2);
		
		assertEquals(arg1,userInput.getAttribute("value"));
		assertEquals(arg2,passInput.getAttribute("value"));
		
		target = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[3]/td[2]/p/input"));
		target.click();
	}

	@Then("^use those credintials to login\\. username: \"([^\"]*)\" and password: \"([^\"]*)\"$")
	public void use_those_credintials_to_login_username_and_password(String arg1, String arg2) throws Throwable {
		WebElement userInput,passInput;
		target = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[4]"));
		target.click();
		userInput = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[1]/td[2]/p/input"));
		passInput = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[2]/td[2]/p/input"));
		userInput.sendKeys(arg1);
		passInput.sendKeys(arg2);
		
		assertEquals(arg1,userInput.getAttribute("value"));
		assertEquals(arg2,passInput.getAttribute("value"));
		
		target = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/table/tbody/tr[3]/td[2]/p/input"));
		target.click();
	}
	
	@After
	public static void cleanup() {
		System.out.println("Clean");
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
