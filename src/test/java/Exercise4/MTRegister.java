package Exercise4;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MTRegister {
	
	@FindBy(xpath = "//*[@id=\"email\"]")
	WebElement usernameInput;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[14]/td[2]/input")
	WebElement passwordInput;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[15]/td[2]/input")
	WebElement confirmPasswordInput;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[17]/td/input")
	WebElement submitButton;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[3]/td/p[2]/font/a")
	WebElement loginPageNav;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[1]/td[2]/input")
	WebElement loginPageUsername;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[2]/td[2]/input")
	WebElement loginPagePassword;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[4]/td/input")
	WebElement loginButton;
	
	public void createUser(String username, String password) {
		usernameInput.sendKeys(username);
		passwordInput.sendKeys(password);
		confirmPasswordInput.sendKeys(password);
		submitButton.click();
		logIn(username,password);
	}
	
	public void logIn(String username,String password) {
		loginPageNav.click();
		loginPageUsername.sendKeys(username);
		loginPagePassword.sendKeys(password);
		loginButton.click();
	}
}
