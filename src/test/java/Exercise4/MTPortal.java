package Exercise4;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MTPortal {
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[2]/td/table/tbody/tr/td[2]/a")
	WebElement registerPage;
	
	public static WebDriver driver;
	
	MTRegister createUser;
	
	FlightPage flightDetails;
	
	public MTPortal(WebDriver driver) {
		driver.get("http://demo.guru99.com/test/newtours/");
		createUser = PageFactory.initElements(driver, MTRegister.class);
		flightDetails = PageFactory.initElements(driver, FlightPage.class);
	}
	
	public void registerUser() {
		registerPage.click();
	}
}
