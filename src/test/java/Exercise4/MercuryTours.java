package Exercise4;

import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;


public class MercuryTours {
	
	public static WebDriver driver;
	
	@BeforeClass
	public static void init() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Liam\\Documents\\workspace-spring-tool-suite-4-4.8.0.RELEASE\\seleniumtest\\src\\test\\resources\\drivers\\chromedriver1.exe");
        driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
	}
	
	
	@Test
	public void webpageTesting() throws Exception{
		MTPortal homePage = PageFactory.initElements(driver, MTPortal.class);
		homePage.registerUser();
		homePage.createUser.createUser("user","pass");
		
		homePage.flightDetails.findPage();
		homePage.flightDetails.noOfPassengers();
		homePage.flightDetails.locations();
	}

}
