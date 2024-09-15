import { Before } from '@badeball/cypress-cucumber-preprocessor';

const environment = Cypress.env('ENV') || 'dev';
const envConfig = Cypress.env(environment);

Before(() => {
    // Realiza a chamada para o comando customizado enviando os dados de login e senha que estão no arquivo cypress.env.json
    cy.doLogin(envConfig.url, envConfig.user, envConfig.password);
})