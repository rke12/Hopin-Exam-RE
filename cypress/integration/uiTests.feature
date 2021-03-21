Feature: UI tests for Customers App for Hopin QE exam

Scenario: As a user I want to enter my name successfully on the Customers App
    Given I am on the Customers App screen
    And I see the text box to enter my name
    And I enter a name in to the text box
    When I click the Submit button
    Then I am on the Customers List screen
    And I see the name is correct