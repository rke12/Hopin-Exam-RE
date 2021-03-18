
This markdown file will contain the results of the test plan executed for task 2.

  

## Test Plan Scope:

The scope of this test plan is to provide sufficient coverage for the Customers App provided. All testing in this Test plan will cover manual testing only.

The objective of this Test Plan is to ensure that the average user for the Customers App can naviagte through the app screens and to ensure that the expected results are achieved. This Test Plan will cover some scenarios to handle errors that may be expected also.

  

## Scenarios covered:

**Scenario 1:** As a user I want to successfully navigate the "Welcome Screen" of the Customers App  
Given I am on the Welcome screen  
And I see the text box prompting me to enter my name  
And I enter a name into the text box  
When I click on the submit button  
Then I am redirected to the Customer List screen    

**Expected:** User can successfully navigate from the welcome screen to the customer list screen, with the name entered visible on the customer list screen and today's date showing.  
**Actual:** The user was successfully redirected to the Customer List screen with the correct name and today's date showing above the list of customers.  
**Notes:** Any number or character is accepted, as a name is the prompt it would be nice for only characters to be accepted.  

  

**Scenario 2:** As a user I want to see an error message when the name text field is left blank  
Given I am on the Welcome Screen  
And I see the text box prompting me to enter my name  
And I do not enter any text into the text box  
When I click on the submit button  
Then I see a pop-up that prompts me to enter my name  

**Expected:** The user sees a pop-up prompting them to enter their name.  
**Actual:** The user left the text box empty and the pop-up appears on the page after clicking the submit button.   

**Scenario 3:** As a user I want to see a list of Customers, the no. of employees, and size for each customer  
Given I have successfully navigated to the Customer List screen  
And I see my name and today's date on the screen  
And I see a list of customers in a table  
And I see that the customer name is a hyperlink  
And I see the number of employees for each customer  
And I see the size of the company for each customer  

**Expected:** The user see's a list of customers in a table containing the following: the customer name, which is a hyperlink, the number of employees, and the size of the company which follows these rules: less than or equal to 100 is Small, greater than 100 or less than or equal to 1000 is Medium, greater than 1000 is Large.  
**Actual:** The user was on the Customer List screen and could see all information for each customer as expected.  

**Scenario 4:** As a user I wish to click on the Customer name and be redirected to the Customer Details screen  
Given I have successfully navigated to the Customer List screen  
And I see a list of customers in a table  
When I click on a Customer name  
Then I am redirected to the Customer Details screen  

**Notes:** The user is to cycle through all customer names repeating the above scenario.  
**Expected:** Once the user has clicked on a Customer name they are to be redirected to another page containing the Customer details.  
**Actual:** Results recorded for all customers below:  
 - Americas Inc: The user was redirected successfully to the Customer Details screen.
- Caribian Airlnis: The user was redirected successfully to the Customer Details screen.
- MacroSoft: The user was redirected successfully to the Customer Details screen.
- United Brands: The user was not redirected to the Customer Details screen. A TypeError was displayed instead.
- Bananas Corp: The user was redirected successfully to the Customer Details screen.
- XPTO.com: The user was redirected successfully to the Customer Details screen.

**Scenario 5:** As a user I want to see the relevant information when redirected to the Customer Details screen  
Given I have successfully navigated to the Customer List screen  
And I see a list of customers in a table  
When I click on a Customer name  
And I am redirected to the Customer Details screen  
Then I can see the Customer name  
And I can see the # of Employees  
And I can see the size of the company  
And I can see a contact name and email address    

**Notes:** The user is to select one Customer to view. In this case Caribian Airlnis was chosen.  
**Expected:** The user successfully navigates to the Customer Details screen and the customer name, number of employees, size of the company and a contact name and email address are populated.  
**Actual:** The user was successfully redirected to the Customer Details page for Caribian Airlnis where all expected information detailed above was shown.  

**Scenario 6:** As a user I want to go back to the Customer List screen from the Customer Details screen  
Given I have successfully navigated to the Customer List screen  
And I see a list of customers in a table  
When I click on a Customer name  
And I redirected to the Customer Details screen  
And I see the Back to the List button  
When I click the Back to the List button  
Then I am redirected back to the Customer List screen  
  
**Notes:** The user only selected one customer as this test is just to check the correct functionality of the back button.  
**Expected:** The user is to be successfully redirected to the Customer List screen after clicking on the "Back to the list" button on the Customer Details screen.  
**Actual:** The user was successfully redirected back to the Customer List screen after clicking the back button.  