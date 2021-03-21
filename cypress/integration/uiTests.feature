Feature: UI tests for Customers App for Hopin QE exam

Scenario: As a user I want to enter my name successfully on the Customers App
    Given I am on the Customers App screen
    And I see the text box to enter my name
    And I enter a name in to the text box
    When I click the Submit button
    Then I am on the Customers List screen
    And I see the name is visible

Scenario: As a user I want to click on a Customer to view their details
    Given I am on the Customers App screen
    And I enter a name in to the text box
    And I click the Submit button
    And I am on the Customers List screen
    And I see the Customer List is not empty
    When I click on the first Customer in the Customer List
    Then I am on the Customer Details screen
    And I see the mandatory Customer Details are visible

Scenario: As a user I wish to see an alert message when I leave the name field blank
    Given I am on the Customers App screen
    And I see the text box to enter my name
    When I click the Submit button
    Then I see the alert message