package org.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BClass {

	
	public static WebDriver driver;
	public static void launchBrowser()		
	{
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
	}

	public static void WindowMaximize() {
		driver.manage().window().maximize();
	}

	public static void launchUrl (String url)
	{
		driver.get(url);
	}

	public String pageTitle() {
		String title = driver.getTitle();
		return title;
	}
	
	public String pageurl() {
		String currentUrl = driver.getCurrentUrl();
		return currentUrl;
	}
	
	public static void passText (String txt, WebElement ele) {
		ele.sendKeys(txt);
	}
	
	public static void closeEntireBrowser() {
		driver.quit();
	}
	
	public void ClickBtn( WebElement ele) {
		ele.click();
	}
	
}
