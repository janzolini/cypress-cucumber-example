import { Given, Before } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/LoginPage';
const loginPage = new LoginPage();
const baseUrl = Cypress.config("baseUrl");

Before(() => {
    cy.visit(baseUrl)
})

Given(`que o usuário esteja na página de inventário`, () => {
    loginPage.logIn("standard_user", "secret_sauce")
});