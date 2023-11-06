Feature: To check front end login page
Scenario: validate the user and password
Given Open chrome browser
And use Login URL
When Username and Password is entered
And enter key is pressed
Then navigate to home page