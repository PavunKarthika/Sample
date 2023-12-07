$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/login.feature");
formatter.feature({
  "name": "",
  "description": " To validate the login Fuctionality of Inmakes learning hub",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "TO launch the Inmakes app and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Mycode1.to_launch_the_Inmakes_app_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate with valid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch the url of the application",
  "keyword": "When "
});
formatter.match({
  "location": "Mycode.to_launch_the_url_of_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valid username to the Username field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode.to_pass_the_valid_username_to_the_Username_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valid password to the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode.to_pass_the_valid_password_to_the_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode.to_click_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigate to the Home page",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode.to_check_whether_navigate_to_the_Home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To print the title of the home page",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode.to_print_the_title_of_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the Entire Application",
  "keyword": "Then "
});
formatter.match({
  "location": "Mycode.to_close_the_Entire_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the Positive and Negative Combination Login Funcyionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has to hit the url of the Application",
  "keyword": "When "
});
formatter.step({
  "name": "Enter the username \"\u003cUserdatas\u003e\" to the Username Field",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the password \"\u003cPassword\u003e\" to the password field",
  "keyword": "And "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "Close the entire browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Userdatas",
        "Password"
      ]
    },
    {
      "cells": [
        "Selenium123@gmail.com",
        "123456789abc"
      ]
    },
    {
      "cells": [
        "pavun678@gmail.com",
        "Shashu@90"
      ]
    },
    {
      "cells": [
        "DivyaSree@yahoo.com",
        "ISEEYoupeekaboo"
      ]
    },
    {
      "cells": [
        "HeadandShouler@gmail.com",
        "987654321"
      ]
    },
    {
      "cells": [
        "mamaAthai@Yahoo.com",
        "inamkessv"
      ]
    },
    {
      "cells": [
        "SeleniumTrainer",
        "Viyayakumar"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "TO launch the Inmakes app and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Mycode1.to_launch_the_Inmakes_app_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Positive and Negative Combination Login Funcyionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has to hit the url of the Application",
  "keyword": "When "
});
formatter.match({
  "location": "Mycode1.user_has_to_hit_the_url_of_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"Selenium123@gmail.com\" to the Username Field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_username_to_the_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password \"123456789abc\" to the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_password_to_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Mycode1.close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "TO launch the Inmakes app and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Mycode1.to_launch_the_Inmakes_app_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Positive and Negative Combination Login Funcyionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has to hit the url of the Application",
  "keyword": "When "
});
formatter.match({
  "location": "Mycode1.user_has_to_hit_the_url_of_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"pavun678@gmail.com\" to the Username Field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_username_to_the_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password \"Shashu@90\" to the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_password_to_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Mycode1.close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "TO launch the Inmakes app and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Mycode1.to_launch_the_Inmakes_app_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Positive and Negative Combination Login Funcyionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has to hit the url of the Application",
  "keyword": "When "
});
formatter.match({
  "location": "Mycode1.user_has_to_hit_the_url_of_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"DivyaSree@yahoo.com\" to the Username Field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_username_to_the_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password \"ISEEYoupeekaboo\" to the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_password_to_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Mycode1.close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "TO launch the Inmakes app and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Mycode1.to_launch_the_Inmakes_app_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Positive and Negative Combination Login Funcyionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has to hit the url of the Application",
  "keyword": "When "
});
formatter.match({
  "location": "Mycode1.user_has_to_hit_the_url_of_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"HeadandShouler@gmail.com\" to the Username Field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_username_to_the_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password \"987654321\" to the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_password_to_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Mycode1.close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "TO launch the Inmakes app and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Mycode1.to_launch_the_Inmakes_app_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Positive and Negative Combination Login Funcyionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has to hit the url of the Application",
  "keyword": "When "
});
formatter.match({
  "location": "Mycode1.user_has_to_hit_the_url_of_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"mamaAthai@Yahoo.com\" to the Username Field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_username_to_the_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password \"inamkessv\" to the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_password_to_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Mycode1.close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "TO launch the Inmakes app and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Mycode1.to_launch_the_Inmakes_app_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Positive and Negative Combination Login Funcyionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has to hit the url of the Application",
  "keyword": "When "
});
formatter.match({
  "location": "Mycode1.user_has_to_hit_the_url_of_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username \"SeleniumTrainer\" to the Username Field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_username_to_the_Username_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password \"Viyayakumar\" to the password field",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.enter_the_password_to_the_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Mycode1.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Mycode1.close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
});