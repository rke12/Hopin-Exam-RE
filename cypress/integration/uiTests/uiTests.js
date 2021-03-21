import { Given , And , When , Then} from "cypress-cucumber-preprocessor/steps";
import WelcomeScreen from '../PageObjects/WelcomeScreen.js';
import CustomersListScreen from '../PageObjects/CustomersListScreen.js';
import { expect } from "chai";

const welcomeScreen = new WelcomeScreen();
const customersListScreen = new CustomersListScreen();

const name = 'Rachel Egan';

//test steps
Given('I am on the Customers App screen', () => {
    welcomeScreen.getWelcomeScreen();
    welcomeScreen.checkOnPage();
})

And('I see the text box to enter my name', () => {
    welcomeScreen.checkTextBoxExists();
})

And('I enter a name in to the text box', () => {
    welcomeScreen.checkTextBoxExists().type(name);
})

When('I click the Submit button', () => {
    welcomeScreen.clickSubmitButton().click();
})

Then('I am on the Customers List screen', () => {
    customersListScreen.checkOnPage();
})

And('I see the name is correct', () => {
    var nameEntertered = customersListScreen.returnNameEntered();
    expect(name, nameEntertered);
})