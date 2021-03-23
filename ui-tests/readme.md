# UI Tests

This is the readme file for the UI Tests.

The code for the UI tests is in the "Cypress/Integration" folder in the root of the repo.  

To run the api-tests, please make sure to have followed the readme in the root of the repo. They will not run if Cypress is not installed beforehand.  

To run the UI tests please run the following command in the terminal:
```
npm run cypress:open
```

This will open the Cypress GUI. Click on the 'uiTests.feature' link. This will open a browser window and will run the automated tests.  

To run the UI tests in the terminal (without opening the Cypress GUI) please run the following command:
```
npm run cypress:ui
``` 

### UI Tests Explained
The UI tests are written using Cucumber/Gherkin to follow Behaviour Driven Development. You will find the three scenarios in the "Cypress/Integration" folder in the file "uiTests.feature".  
This file will clearly outline the three scenarios that are executed.  
The three scenarios follow the requirements set out, which check that the user can enter a name, view the Customer details, and that the user remains on the Welcome screen if they do not enter a name.