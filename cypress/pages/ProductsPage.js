import faker from 'faker-br';

export class ProductsPage {

    addProduct() {
        cy.get(pageObjects.addToCartButton)
            .click();
    }

    checkout() {
        cy.get(pageObjects.shoppingCart)
            .click();
        cy.get(pageObjects.checkoutButton)
            .click();

        cy.get(pageObjects.firstNameInput)
            .type(faker.name.firstName());
        cy.get(pageObjects.lastNameInput)
            .type(faker.name.lastName());
        cy.get(pageObjects.postalCodeInput)
            .type(faker.address.zipCodeValid());

        cy.get(pageObjects.continueButton)
            .click();
    }

    confirmPurchase() {
        cy.get(pageObjects.finishButton)
            .click();
    }

    validateMessage(message) {
        cy.get(pageObjects.messageHeader)
            .should('be.visible')
            .should('have.text', message)
    }

    selectProductSpecific(product) {
        cy.get(pageObjects.productSpecific)
            .contains(product)
            .click();
    }

    validatePageProducts(value) {
        cy.get(detailsProduct("inventory_details_price"))
            .should('be.visible').should('contain', value);
    }
}
const pageObjects = {
    addToCartButton: 'button[data-test="add-to-cart-sauce-labs-backpack"]',
    shoppingCart: '#shopping_cart_container',
    checkoutButton: 'button[data-test="checkout"]',
    firstNameInput: 'input[data-test="firstName"]',
    lastNameInput: 'input[data-test="lastName"]',
    postalCodeInput: 'input[data-test="postalCode"]',
    continueButton: 'input[data-test="continue"]',
    finishButton: 'button[data-test="finish"]',
    messageHeader: 'h2[class="complete-header"]',
    productSpecific: 'div[class="inventory_item_name "]',
}

function detailsProduct(data) {
    return `div[class="${data}"]`
}