import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given(`que o usuário esteja na página de inventário`, () => {
    cy.contains('span.title', 'Products').should('be.visible');
});

Given(`que acesse o site com a resolução de um dispositivo mobile`, () => {
    cy.viewport('iphone-xr')
});