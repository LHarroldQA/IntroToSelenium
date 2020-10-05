package seleniumtest;

import java.util.List;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class StockTest {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void init() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
        driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
	}
	
	@Test
	public void stockTests() {
		List<WebElement> targList;
		WebElement riser;
		
		driver.get("https://www.hl.co.uk/shares/stock-market-summary/ftse-100");
		targList = driver.findElements(By.xpath("//*[@id=\"view-constituents\"]/*"));
		
		for(WebElement element:targList) {
			System.out.println(element.getText());
		}

	
	}

	@AfterClass
	public static void cleanUp() {
		driver.quit();
	}

}
