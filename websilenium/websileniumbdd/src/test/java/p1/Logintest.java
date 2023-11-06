package p1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Logintest {

	WebDriver driver = null;
	
	public static void wait1() {
		try {
			Thread.sleep(2000);
		}catch (Exception e) {
	}
	}
	@Given("Open Chrome browser")
	public void open_chrome_browser() {
		System.setProperty("webdriver.chrome.driver", "/home/ubuntu/eclipse-workspace/webseeniumbdd/src/driver");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicityWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	
	@And("use Login URL")
	public void use_Login_URL() {
		driver.navigate().to("http://localhost:3000/");
		wait1();
	}
	
	@When("Username and Password is entered")
	public void username_and_password_is_entered() {
	driver.findElement(By.id("user")).sendKeys("root");
	driver.findElement(By.id("pass")).sendKeys("password");
	
	}
	
	@And("Enter key is pressed")
	public void enter_key_is_pressed() {
		driver.findElement(By.id("login_btn")).click();
		wait1();
	}
	
	@Then("Navigate to Home page")
	public void navigate_to_Home_page() {
		driver.getPageSource().contains("Home");
		wait1();
		driver.close();
		driver.quit();
	}
}
