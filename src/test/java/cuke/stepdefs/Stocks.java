package cuke.stepdefs;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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

public class Stocks {
	
	public static WebDriver driver;
	
	public static WebElement target;
	
	public List<WebElement> targList;
	
	@Before
	public static void init() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
		driver = new ChromeDriver(chromeCfg());
	}
	
	@Given("^the FTSE market overview$")
	public void we_can_open_the_demo_site() throws Throwable {
		driver.get("https://www.hl.co.uk/shares/stock-market-summary/ftse-100/risers");
		String title = "FTSE 100: Top 20 risers | View the FTSE 100 top 20 rising stocks on the day";
		assertEquals(title,driver.getTitle());
	}
	
	@When("^Order the market in terms of the risers$")
	public void order_the_market_in_terms_of_the_risers() throws Throwable {
		targList = driver.findElements(By.xpath("//*[@id=\"view-constituents\"]/div/table/tbody/*"));
		
		System.out.println("Size of the list: " + targList.toArray().length);
	}

	@Then("^I can work out which one has the highest price$")
	public void i_can_work_out_which_one_is_the_largest_riser() throws Throwable {
		ArrayList<String[]> myRisers = new ArrayList<String[]>();
		String msg;
		
		for(WebElement element:targList) {
			msg = element.getText();
			myRisers.add(msg.split("\n"));
		}
		
		int x = 0;
		double highestValue = 0;
		
		for(String[] strArr : myRisers) {
			for(String item : strArr) {
				if(x==1) {
					System.out.println("- price:" + item + ",\t");
					item = item.replace(",", "");
					if(Double.parseDouble(item)>highestValue) {
						highestValue = Double.parseDouble(item);
					}
				}
				x++;
			}
			System.out.println();
			x=0;
		}
		
		System.out.println("Highest price: " + highestValue);

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
