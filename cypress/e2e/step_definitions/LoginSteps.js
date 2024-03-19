import { Given, Before, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from '../../pages/LoginPage';
const loginPage = new LoginPage();
const baseUrl = Cypress.config("baseUrl");

Before(() => {
    cy.visit(baseUrl)
})

When(`que realize login na aplicação`, () => {
    loginPage.realizarLogin("test@test.com", "test123")
    loginPage.selecionarBotaoEntrar()
});

When(`que insira um usuário {string} e senha {string}`, (email, senha) => {
    loginPage.realizarLogin(email, senha)
});

When(`selecionar a opção de entrar`, () => {
    loginPage.selecionarBotaoEntrar()
});

Then(`mensagem indicando usuário e senha inválida é exibida na página`, () => {
    loginPage.validarMensagemErro()
});

Then(`login é efetuado com sucesso na aplicação`, () => {
    loginPage.validarLoginEfetuado()
});
