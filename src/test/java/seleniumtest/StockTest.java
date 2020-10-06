package seleniumtest;

import java.util.ArrayList;
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
		
		driver.get("https://www.hl.co.uk/shares/stock-market-summary/ftse-100/risers");
		targList = driver.findElements(By.xpath("//*[@id=\"view-constituents\"]/div/table/tbody/*"));
		
		String msg;
		
		ArrayList<String[]> myRisers = new ArrayList();
		
		System.out.println("Size of the list: " + targList.toArray().length);
		for(WebElement element:targList) {
			msg = element.getText();
			myRisers.add(msg.split("\n"));
		}
		
		int x = 0;
		double highestValue = 0;
		
		for(String[] strArr : myRisers) {
			for(String item : strArr) {
				if(x==1) {
					System.out.println("- price:" + item + ",\t");
					item = item.replace(",", "");
					if(Double.parseDouble(item)>highestValue) {
						highestValue = Double.parseDouble(item);
					}
				}
				x++;
			}
			System.out.println();
			x=0;
		}
		
		System.out.println("Highest price: " + highestValue);


	
	}

	@AfterClass
	public static void cleanUp() {
		driver.quit();
	}

}
