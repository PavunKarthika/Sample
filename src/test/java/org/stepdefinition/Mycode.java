package org.stepdefinition;

import org.base.BClass;
import org.login.Loginpj;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Mycode extends BClass {
	Loginpj L;

	@Given("To launch the Inmakes app and maximize the window")
	public void to_launch_the_Inmakes_app_and_maximize_the_window() {
		launchBrowser();
		WindowMaximize();

	}

	@When("To launch the url of the application")
	public void to_launch_the_url_of_the_application() {
		launchUrl("https://lh.inmakesedu.com/home/login");

	}

	@When("To pass the valid username to the Username field")
	public void to_pass_the_valid_username_to_the_Username_field() {

		WebElement name = driver.findElement(By.xpath("//input[@id='email']"));
		name.sendKeys("SeleniumInamkes123@gmail.com");
	}

	@When("To pass the valid password to the password field")
	public void to_pass_the_valid_password_to_the_password_field() {

		WebElement pass = driver.findElement(By.xpath("//input[@id='password']"));
		pass.sendKeys("12345");
	}

	@When("To click the Login button")
	public void to_click_the_Login_button() {

		WebElement login = driver.findElement(By.xpath("//button[@type='submit']"));
		login.click();

	}

	@When("To check whether navigate to the Home page")
	public void to_check_whether_navigate_to_the_Home_page() {
		System.out.println(pageurl());

	}

	@When("To print the title of the home page")
	public void to_print_the_title_of_the_home_page() {

		System.out.println(pageTitle());
	}

	@Then("To close the Entire Application")
	public void to_close_the_Entire_Application() {
		closeEntireBrowser();

	}

}
