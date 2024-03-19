export class LoginPage {

    realizarLogin(email, senha) {
        cy.contains('button', 'Login').click()
        cy.get(pageObjects.inputEmail).type(email);
        cy.get(pageObjects.inputPassword).type(senha);
    }

    selecionarBotaoEntrar() {
        cy.contains('button', 'Sign in').click()
    }

    validarMensagemErro() {
        cy.get(pageObjects.mensagemErroLogin)
            .should('be.visible')
            .should('contain', "Invalid email or password")
    }

    validarLoginEfetuado() {
        cy.contains('button', 'Logout')
            .should('be.visible')
    }
}

const pageObjects = {
    inputEmail: "[data-cy='email']",
    inputPassword: "[data-cy='password']",
    mensagemErroLogin: "div[class='text-red-500']"
}