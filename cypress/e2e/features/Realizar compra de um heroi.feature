#language: pt
@make_purchase @e2e
Funcionalidade: Realizar compra de um heroi

Contexto: 
  Dado que realize login na aplicação

  @realizar_compra
  Cenário: Realizar compra de um heroi
    Quando efetuar a compra de um heroi
    Então compra deve ser efetuada com sucesso