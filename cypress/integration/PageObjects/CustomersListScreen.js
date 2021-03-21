//CSS selectors for Customer List Screen
const customerScreen = "div > p";
const userName = "div > p > b:nth-child(1)";
const customerTable = "div > table > tbody";
const firstCustomer = "div > table > tbody > tr:nth-child(1) > td:nth-child(1)";

class CustomersListScreen {
    checkOnPage() {
        cy.get(customerScreen).should('be.visible');
    }

    returnNameEntered() {
        cy.get(userName).should('be.visible');
    }

    isCustomerListVisible() {
        cy.get(customerTable);        
        expect(customerTable).to.not.be.oneOf([null, ""]);
    }

    clickFirstCustomer() {
        cy.get(firstCustomer).click();
    }

    getFirstCustomer() {
        cy.get(firstCustomer);
    }
}

export default CustomersListScreen