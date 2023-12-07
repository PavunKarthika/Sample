package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.Base.BClass;
import io.cucumber.datatable.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class RegCode extends BClass {

	@Given("To launch the inmakes website and maximize the window")
	public void to_launch_the_inmakes_website_and_maximize_the_window() {
		launchBrowser();
		WindowMaximize();
	}

	@When("To launch the url of the application")
	public void to_launch_the_url_of_the_application() {
		launchUrl("https://inmakeslh.in/register.php");
	}

	@When("TO click the Registration for free link")
	public void to_click_the_Registration_for_free_link() throws InterruptedException {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//a[contains(text(),'REGISTER FOR FREE')]")).click();
	}

	@When("TO enter the full name to the Name Field")
	public void to_enter_the_full_name_to_the_Name_Field() throws InterruptedException {
		
		
		WebElement name = driver.findElement(By.xpath("//input[@id='name']"));
		name.sendKeys("karthika");
	}

	@When("To enter the valid email id to the email field")
	public void to_enter_the_valid_email_id_to_the_email_field() {
		
		
		WebElement email = driver.findElement(By.xpath("//input[@id='email']"));
		email.sendKeys("seleniuminmakes123@gmail.com");
	}

	@When("To enter the valid Mobile number to the phone field")
	public void to_enter_the_valid_Mobile_number_to_the_phone_field() {
		
	
		WebElement PhoneNo = driver.findElement(By.xpath("//input[@id='phone']"));
		PhoneNo.sendKeys("5689715975");
	}

	@When("TO enter the place name to the place field")
	public void to_enter_the_place_name_to_the_place_field() {
	
		
		WebElement Native = driver.findElement(By.xpath("//input[@id='place']"));
		Native.sendKeys("Nagercoil");
	}

	@Then("To click the registration button")
	public void to_click_the_registration_button() throws InterruptedException {
		Thread.sleep(3000);
		WebElement reg = driver.findElement(By.xpath("//button[@id='btnbtnSubmit']"));
		reg.click();
	}

}
