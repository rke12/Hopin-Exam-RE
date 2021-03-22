//CSS selectors for Welcome Screen
const welcomeScreen = "div > h1";
const nameTextBox = "#name";
const submitButton = "input[type=button]";

const nameOfUser = 'Rachel Egan';

class WelcomeScreen {
    getWelcomeScreen() {
        return cy.visit('http://localhost:3000');
    }

    checkOnPage() {
        cy.get(welcomeScreen).should('be.visible');
    }

    checkTextBoxExists() {
        cy.get(nameTextBox).should('be.visible');
    }

    enterName() {
        cy.get(nameTextBox).type(nameOfUser);
    }

    clickSubmitButton() {
        cy.get(submitButton).click();
    }

}

export default WelcomeScreen