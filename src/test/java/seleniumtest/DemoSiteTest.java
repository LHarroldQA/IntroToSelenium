package seleniumtest;

import static org.junit.Assert.assertEquals;

import java.util.HashMap;
import java.util.Map;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.PageFactory;

public class DemoSiteTest {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void init() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
        driver = new ChromeDriver(chromeCfg());
        driver.manage().window().setSize(new Dimension(1366, 768));
	}
	
	@Test
	public void webpageTesting() throws Exception{
//		WebElement target;
//		WebElement user;
//		WebElement pass;
		
        DemoSitePortal homePage = PageFactory.initElements(driver, DemoSitePortal.class);
        homePage.navUserPage();
        homePage.addUserPage.createUser("user", "user");
        homePage.navLoginPage();
        homePage.addLoginPage.loginUser("user", "user");
		
//		target = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[3]"));
//		target.click();
		
//		user = driver.findElement(By.name("username"));
//		user.sendKeys("guest");
//		
//		pass = driver.findElement(By.name("password"));
//		pass.sendKeys("guest");
//		
//		target = driver.findElement(By.name("FormsButton2"));
//		target.click();
//		
//		target = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[4]"));
//		target.click();
//		
//		user = driver.findElement(By.name("username"));
//		user.sendKeys("guest");
//		
//		pass = driver.findElement(By.name("password"));
//		pass.sendKeys("guest");
//		
//		target = driver.findElement(By.name("FormsButton2"));
//		target.click();
		
		
		
		String result = driver.getTitle();
		assertEquals("Login example page to test the PHP MySQL online system",result);
		

	}
	
	@AfterClass
	public static void cleanUp() {
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
