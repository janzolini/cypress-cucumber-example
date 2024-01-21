export class LoginPage {

    logIn(user, password) {
        cy.get(pageObjects.inputUser).type(user);
        cy.get(pageObjects.inputPassword).type(password);
        cy.get(pageObjects.buttonSubmit).click();
    }
}

const pageObjects = {
    inputUser: "input[data-test='username']",
    inputPassword: "input[data-test='password']",
    buttonSubmit: "input[data-test='login-button']",
}