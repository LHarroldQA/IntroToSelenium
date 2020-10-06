package seleniumtest;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DemoSitePortal {
	
	@FindBy(xpath = "/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[3]")
	WebElement addNewUserPage;
	
	@FindBy(xpath = "/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[4]")
	WebElement loginPage;
	
	DemoAddUser addUserPage;
	
	DemoLoginUser addLoginPage;
	
	public DemoSitePortal(WebDriver driver) {
		driver.get("http://thedemosite.co.uk/index.php");
		addUserPage = PageFactory.initElements(driver, DemoAddUser.class);
		addLoginPage = PageFactory.initElements(driver, DemoLoginUser.class);
	}
	
	public void navUserPage() {
		addNewUserPage.click();
	}
	
	public void navLoginPage() {
		loginPage.click();
	}

}
