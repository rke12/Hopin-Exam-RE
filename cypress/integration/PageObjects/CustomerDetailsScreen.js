//CSS selectors for Customer Details Screen
const detailsScreen = "div > p:nth-child(1) > b";
const customerName = "div > p:nth-child(2)";
const noOfEmployees = "div > p:nth-child(3)";
const companySzie = "div > p:nth-child(4)";

const firstCustName = 'Name:'
const firstCustEmployeeNo = '# of Employees';
const firstCustSize = 'Size:';

class CustomerDetailsScreen {
    checkOnPage() {
        cy.get(detailsScreen).should('be.visible');
    }

    isCustomerNameVisible() {
        cy.get(customerName).should('be.visible');
        cy.get(customerName).contains(firstCustName);   
    }

    isNoOfEmployeesVisible() {
        cy.get(noOfEmployees).should('be.visible');
        cy.get(noOfEmployees).contains(firstCustEmployeeNo);
    }

    isCompanySizeVisible() {
        cy.get(companySzie).should('be.visible');
        cy.get(companySzie).contains(firstCustSize);
    }
}

export default CustomerDetailsScreen