//CSS selectors for Welcome Screen
const welcomeScreen = "div > h1";
const nameTextBox = "#name";
const submitButton = "input[type=button]";

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
        cy.get(nameTextBox).type('Rachel Egan');
    }

    clickSubmitButton() {
        cy.get(submitButton).click();
    }

}

export default WelcomeScreen