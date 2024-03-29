# API Tests

This is the readme file for the API tests.

To run the api-tests, please make sure to have followed the readme in the root of the repo. They will not run if Cypress is not installed beforehand.

To run the api tests please run the following command in the terminal:
```
npm run cypress:api
```
The API tests will execute in the terminal.

Four API tests will be executed. 

The code for the API tests can be found in the 'api-tests/cypress/integration' folder.  

### API Tests eplained
- The first test checks for the correct HTTP response (200) when passing a valid body in a POST request.  
- The second test checks that a HTTP 400 status code is returned when passing an invalid POST request in the request. This test is operating on the assumption that the name text field prompted to the user does not accept invalid characters. This test will fail as the name field accepts any type of character.  
- The third test checks that the content-type of the response is application/json;charset=utf-8 as expected.  
- The fourth test checks that the key fields in the body of the response (for the first value in the list only) are not null or empty. This ensures that the mandatory fields for each company is returned (id, name, no. of employees and size).   