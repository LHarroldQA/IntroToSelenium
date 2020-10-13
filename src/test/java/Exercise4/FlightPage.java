package Exercise4;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class FlightPage {
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[1]/table/tbody/tr/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]/a")
	WebElement flightPageNav;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[3]/td[2]/b/select")
	WebElement passengerDropdown;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[4]/td[2]/select")
	WebElement departDropdown;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[6]/td[2]/select")
	WebElement destDropdown;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[9]/td[2]/font/font/input[2]")
	WebElement firstClass;
	
	@FindBy(xpath = "/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[5]/td/form/table/tbody/tr[6]/td[2]/select")
	WebElement airlineDropdown;
		
	public void findPage() {
		flightPageNav.click();
		
	}
	
	public void noOfPassengers() {
		Select dropdown = new Select(passengerDropdown);
		dropdown.selectByValue("2");
	}
	
	public void locations() {
		Select depart = new Select(departDropdown);
		Select destination = new Select(destDropdown);
		Select airline = new Select(airlineDropdown);
		
		depart.selectByValue("London");
		destination.selectByValue("Paris");
		
		firstClass.click();
		airline.selectByIndex(2);
		
	}

}
