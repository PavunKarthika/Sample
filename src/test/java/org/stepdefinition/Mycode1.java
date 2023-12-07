package org.stepdefinition;

import org.base.BClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Mycode1 extends BClass {

	@Given("TO launch the Inmakes app and maximize the window")
	public void to_launch_the_Inmakes_app_and_maximize_the_window() {
		launchBrowser();
		WindowMaximize();
	}

	@When("User has to hit the url of the Application")
	public void user_has_to_hit_the_url_of_the_Application() {
		launchUrl("https://lh.inmakesedu.com/home/login");
	}

	@When("Enter the username {string} to the Username Field")
	public void enter_the_username_to_the_Username_Field(String em) {

		WebElement name = driver.findElement(By.xpath("//input[@id='email']"));
		name.sendKeys(em);
	}

	@When("Enter the password {string} to the password field")
	public void enter_the_password_to_the_password_field(String password1) {
		WebElement pass = driver.findElement(By.xpath("//input[@id='password']"));
		pass.sendKeys(password1);
	}

	@When("Click the login button")
	public void click_the_login_button() {
		WebElement login = driver.findElement(By.xpath("//button[@type='submit']"));
		login.click();
	}

	@Then("Close the entire browser")
	public void close_the_entire_browser() {
		closeEntireBrowser();

	}

}
