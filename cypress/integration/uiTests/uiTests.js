import { Given , And , When , Then} from "cypress-cucumber-preprocessor/steps";
import WelcomeScreen from '../PageObjects/WelcomeScreen.js';
import CustomersListScreen from '../PageObjects/CustomersListScreen.js';
import CustomerDetailsScreen from "../PageObjects/CustomerDetailsScreen.js";
import { expect } from "chai";

const welcomeScreen = new WelcomeScreen();
const customersListScreen = new CustomersListScreen();
const customerDetailsScreen = new CustomerDetailsScreen();

const name = 'Rachel Egan';
const alertBoxMessage = "Please provide your name"

//test steps
Given('I am on the Customers App screen', () => {
    welcomeScreen.getWelcomeScreen();
    welcomeScreen.checkOnPage();
})

And('I see the text box to enter my name', () => {
    welcomeScreen.checkTextBoxExists();
})

And('I enter a name in to the text box', () => {
    welcomeScreen.enterName();
})

When('I click the Submit button', () => {
    welcomeScreen.clickSubmitButton();
})

Then('I am on the Customers List screen', () => {
    customersListScreen.checkOnPage();
})

And('I see the name is visible', () => {
     customersListScreen.returnNameEntered();
     customersListScreen.checkNameIsCorrect();
})

And('I see the Customer List is not empty', () => {
    customersListScreen.isCustomerListVisible();
})

When('I click on the first Customer in the Customer List', () => {
    customersListScreen.clickFirstCustomer();
})

Then('I am on the Customer Details screen', () => {
    customerDetailsScreen.checkOnPage();
})

And("I see the mandatory Customer Details are visible", () => {
    //validate Customer Name is visible
    customerDetailsScreen.isCustomerNameVisible();

    //validate No. Of Emoloyees is visible
    customerDetailsScreen.isNoOfEmployeesVisible();
    
    //validate company size is visible
    customerDetailsScreen.isCompanySizeVisible();
})

Then('I am still on the Welcome Screen', () => {
    welcomeScreen.checkOnPage();
})