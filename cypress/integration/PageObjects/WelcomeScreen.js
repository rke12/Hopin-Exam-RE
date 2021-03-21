class WelcomeScreen {
    getWelcomeScreen() {
        return cy.visit('http://localhost:3000');
    }

    checkOnPage() {
        return cy.get("div > h1");
    }

    checkTextBoxExists() {
        return cy.get("#name");
    }

    clickSubmitButton() {
        return cy.get("input[type=button]");
    }

}

export default WelcomeScreen