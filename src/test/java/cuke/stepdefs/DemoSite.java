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

public class DemoSite {
	
	public static WebDriver driver;
	
	public static WebElement target;
	
	@Before
	public static void init() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
		driver = new ChromeDriver(chromeCfg());
	}
	
	@Given("^we can open the demo site$")
	public void we_can_open_the_demo_site() throws Throwable {
		driver.get("http://thedemosite.co.uk/index.php");
		assertEquals("FREE example PHP code and online MySQL database - example username password protected site",driver.getTitle());
	}
	
	@Given("^open the add a user page$")
	public void open_the_add_a_user_page() throws Throwable {
		target = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[3]"));
		target.click();
		assertEquals("Add a user - FREE PHP code and SQL",driver.getTitle());
	}

	@When("^we can great a user with the username: \"([^\"]*)\" and password: \"([^\"]*)\"$")
	public void we_can_great_a_user_with_the_username_and_password(String arg1, String arg2) throws Throwable {
		WebElement userInput,passInput;
		
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
