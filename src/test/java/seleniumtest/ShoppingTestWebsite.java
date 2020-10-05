package seleniumtest;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ShoppingTestWebsite {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void init() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
        driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
	}

	@Test
	public void shoppingTest() throws Exception {
		WebElement target;
		
		driver.get("http://automationpractice.com/index.php");
		
		target = driver.findElement(By.xpath("//*[@id=\"block_top_menu\"]/ul/li[3]/a"));
		target.click();
		
		WebDriverWait wait = new WebDriverWait(driver, 200);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"center_column\"]/ul/li/div/div[2]/div[2]/a[1]/span")));
		
		target = driver.findElement(By.xpath("//*[@id=\"center_column\"]/ul/li/div/div[2]/div[2]/a[1]/span"));
		target.click();
		
		
	}
	
	
	
	@AfterClass
	public static void cleanUp() {
		driver.quit();
	}
	
//	public static ChromeOptions chromeCfg() {
//		 Map<String, Object> prefs = new HashMap<String, Object>();
//		 ChromeOptions cOptions = new ChromeOptions();
//		  
//		 // Settings
//		 prefs.put("profile.default_content_setting_values.cookies", 2);
//		 prefs.put("network.cookie.cookieBehavior", 2);
//		 prefs.put("profile.block_third_party_cookies", true);
//
//		 // Create ChromeOptions to disable Cookies pop-up
//		 cOptions.setExperimentalOption("prefs", prefs);
//
//		 return cOptions;
//		 }

}
