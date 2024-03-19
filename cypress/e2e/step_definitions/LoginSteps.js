import { Before } from '@badeball/cypress-cucumber-preprocessor';
const baseUrl = Cypress.config("baseUrl");

Before(() => {
    cy.visit(baseUrl)
})