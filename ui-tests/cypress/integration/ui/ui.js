import { Given , And , When , Then} from "cypress-cucumber-preprocessor";
import WelcomeScreen from '../support/PageObjects/WelcomeScreen.js';

const welcomeScreen = new WelcomeScreen();

//test steps
Given('I am on the Customers App screen', () => {
    welcomeScreen.getWelcomeScreen();
})