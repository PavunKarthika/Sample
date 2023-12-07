package org.login;

import org.base.BClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpj extends BClass {

		
	public void Loginpj() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy (xpath ="//input[@id='email']")
	private WebElement Username;
	
	@FindBy (xpath ="//input[@id='password']")
	private WebElement password;
	
	@FindBy (xpath = "//button[@type='submit']")
	private WebElement loginbtn;
	

	public WebElement getUsername() {
		return Username;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginbtn() {
		return loginbtn;
	
	}
	
}
