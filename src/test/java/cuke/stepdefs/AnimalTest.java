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

public class AnimalTest {
	
	public static WebDriver driver;
	
	public static WebElement target;
	
	@Before
	public static void init() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
		driver = new ChromeDriver(chromeCfg());
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
	
	@Then("^google will return us videos of \"([^\"]*)\"$")
	public void google_will_return_us_videos_of(String arg1) throws Throwable {
		target = driver.findElement(By.xpath("//*[@id=\"yDmH0d\"]/div[2]/c-wiz/div[1]/div/div[1]/div[1]/div/div/a[2]"));
		target.click();
		
		assertEquals(arg1 + " - Google Search",driver.getTitle());
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
