//CSS selectors for Customer Details Screen
const detailsScreen = "div > p:nth-child(1) > b";
const customerName = "div > p:nth-child(2)";
const noOfEmployees = "div > p:nth-child(3)";
const companySzie = "div > p:nth-child(4)";

class CustomerDetailsScreen {
    checkOnPage() {
        cy.get(detailsScreen).should('be.visible');
    }

    isCustomerNameVisible() {
        cy.get(customerName);
        expect(customerName).to.not.be.oneOf([null, ""])      
    }

    isNoOfEmployeesVisible() {
        cy.get(noOfEmployees);
        expect(noOfEmployees).to.not.be.oneOf([null, ""]);
    }

    isCompanySizeVisible() {
        cy.get(companySzie);
        expect(companySzie).to.not.be.oneOf([null, ""]);
    }
}

export default CustomerDetailsScreen