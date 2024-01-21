import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { ProductsPage } from '../../pages/ProductsPage';
const productsPage = new ProductsPage();

When("adicione um produto ao carrinho de compras", () => {
    productsPage.addProduct()
});

When(`o usuário realizar o checkout`, () => {
    productsPage.checkout()
});

When(`confirmar a compra do produto`, () => {
    productsPage.confirmPurchase()
});

Then(`mensagem de sucesso de compra deve ser exibida na página`, () => {
    productsPage.validateMessage("Thank you for your order!")
});

When("selecionar o {string}", (product) => {
    productsPage.selectProductSpecific(product)
});

Then(/^página do produto deve ser apresentada com o "(.*?)"$/, (value) => {
    productsPage.validatePageProducts(value)
});

Given(`que acesse o site com a resolução de um dispositivo mobile`, () => {
    cy.viewport('iphone-xr')
});