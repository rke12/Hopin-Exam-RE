class WelcomeScreen {
    getWelcomeScreen() {
        return cy.visit('http://localhost:3001');
    }
}

export default WelcomeScreen