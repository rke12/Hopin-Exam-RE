/* describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  }) */
var valid_body = {"name":"Rachel Egan"}
var invalid_body = {"name":"$%!!"}

describe('Testing API requests', () => {

    it('Testing simple POST request', () => {
      cy.request("POST", "http://localhost:3001", valid_body).then((response) => {
        expect(response.status).to.eq(200);
    })
  })
})

describe('Testing API with invalid body', () => {

  it('Testing POST request with invalid body', () => {
    cy.request("POST", "http://localhost:3001", invalid_body).then((response) => {
      expect(response.status).to.eq(400);
    })
  })
})

describe('Testing API headers', () => {

  it('Testing API header is json', () => {
    cy.request("POST", "http://localhost:3001", valid_body).then((response) => {
      expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
    })
  })
})

const todays_date = new Date().toDateString();

describe('Testing API response body contains key fields', () => {

  it('Testing API response body', () => {
    cy.request("POST", "http://localhost:3001", valid_body).then((response) => {
      const response_body = response.body;

      expect(response.body).property('name').eq(valid_body["name"]);
      expect(response.body).property('timestamp').eq(todays_date);

      const customer_body = response_body["customers"][0];
      expect(customer_body).property('id').to.not.be.oneOf([null, ""]);
      expect(customer_body).property('name').to.not.be.oneOf([null, ""]);
      expect(customer_body).property('employees').to.not.be.oneOf([null, ""]);
      expect(customer_body).property('size').to.not.be.oneOf([null, ""]);
    })
  })
})
