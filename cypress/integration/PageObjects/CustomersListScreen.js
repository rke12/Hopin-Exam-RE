//CSS selectors for Customer List Screen
const customerScreen = "div > p";
const userName = "div > p > b:nth-child(1)";
const customerTable = "div > table > tbody";
const firstCustomer = "div > table > tbody > tr:nth-child(1) > td:nth-child(1)";

const nameEntered = 'Rachel Egan';

class CustomersListScreen {
    checkOnPage() {
        cy.get(customerScreen).should('be.visible');
    }

    returnNameEntered() {
        cy.get(userName).should('be.visible');
    }

    checkNameIsCorrect() {
        cy.get(userName).should('have.text', nameEntered);
    }

    isCustomerListVisible() {
        cy.get(customerTable).should('be.visible');
    }

    clickFirstCustomer() {
        cy.get(firstCustomer).click();
    }

    getFirstCustomer() {
        cy.get(firstCustomer);
    }
}

export default CustomersListScreen