package seleniumtest;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DemoAddUser {
	
	@FindBy(name = "username")
	WebElement usernameInput;
	
	@FindBy(name = "password")
	WebElement passwordInput;
	
	@FindBy(name = "FormsButton2")
	WebElement saveInput;
	
	public void createUser(String username, String password) {
		usernameInput.sendKeys(username);
		passwordInput.sendKeys(password);
		saveInput.click();
	}

}
