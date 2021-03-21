class CustomersListScreen {
    checkOnPage() {
        return cy.get("div > p");
    }

    returnNameEntered() {
        return cy.get("div > p > b:nth-child(1)").toString();
    }
}

export default CustomersListScreen