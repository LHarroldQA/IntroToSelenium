package seleniumtest;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DemoLoginUser {

	@FindBy(name = "username")
	WebElement usernameInput;
	
	@FindBy(name = "password")
	WebElement passwordInput;
	
	@FindBy(name = "FormsButton2")
	WebElement saveInput;
	
	public void loginUser(String username, String password) {
		usernameInput.sendKeys(username);
		passwordInput.sendKeys(password);
		saveInput.click();
	}
}
