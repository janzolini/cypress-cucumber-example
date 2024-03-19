export class CompraPage {

    efetuarCompra() {
        cy.get(pageObjects.botaoCompra)
            .first()
            .click()
    }

    confirmarCompra() {
        cy.contains('button', 'Yes').click()
    }

    verificarNumeroAtualDeVendas() {
        cy.get(pageObjects.numeroVendas)
            .first()
            .invoke('text').as('numeroVendas')
    }

    compraEfetuadaComSucesso() {
        cy.get('@numeroVendas').then((valor) => {
            cy.get(pageObjects.numeroVendas).first()
                .should('contain.text', parseInt(valor) + 1)
        });
    }
}
const pageObjects = {
    botaoCompra: '[data-cy="money"]',
    numeroVendas: '[data-cy="saves"]',
}