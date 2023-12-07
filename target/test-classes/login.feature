@Feature1


Feature:
 To validate the login Fuctionality of Inmakes learning hub

Background: 
Given  TO launch the Inmakes app and maximize the window 

@Regression
Scenario: To validate with valid username and valid password
When  To launch the url of the application
And To pass the valid username to the Username field
And To pass the valid password to the password field
And To click the Login button
And To check whether navigate to the Home page
And To print the title of the home page
Then To close the Entire Application

@Sanity
Scenario Outline: To validate the Positive and Negative Combination Login Funcyionality
When User has to hit the url of the Application
And Enter the username "<Userdatas>" to the Username Field
And Enter the password "<Password>" to the password field
And Click the login button
Then Close the entire browser


Examples:
|Userdatas             |Password    	|
|Selenium123@gmail.com|123456789abc|
|pavun678@gmail.com|Shashu@90|
|DivyaSree@yahoo.com |ISEEYoupeekaboo|
|HeadandShouler@gmail.com|987654321|
|mamaAthai@Yahoo.com|inamkessv|
|SeleniumTrainer|Viyayakumar|