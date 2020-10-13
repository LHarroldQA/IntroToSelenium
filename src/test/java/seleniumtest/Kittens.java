package seleniumtest;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Kittens {
	
	WebDriver driver;
	
	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");

		driver = new ChromeDriver();
	}
	
	
	@Test
	public void test() throws InterruptedException{
		driver.get("https://google.com");
	}
	
	
	@After
	public void tearDown() {
		driver.close();
	}
}
