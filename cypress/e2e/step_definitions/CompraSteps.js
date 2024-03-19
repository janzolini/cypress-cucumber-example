import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CompraPage } from '../../pages/CompraPage';
const compraPage = new CompraPage();

When("efetuar a compra de um heroi", () => {
    compraPage.verificarNumeroAtualDeVendas()
    compraPage.efetuarCompra()
    compraPage.confirmarCompra()
});

Then("compra deve ser efetuada com sucesso", () => {
    compraPage.compraEfetuadaComSucesso()
});