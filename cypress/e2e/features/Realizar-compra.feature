#language: pt
@make_purchase @e2e
Funcionalidade: Realizar compra

  @desktop_view
  Cenário: Realizar compra de produto com sucesso
    Dado que o usuário esteja na página de inventário
    E adicione um produto ao carrinho de compras
    Quando o usuário realizar o checkout
    E confirmar a compra do produto
    Então mensagem de sucesso de compra deve ser exibida na página

  @mobile_view
  Cenário: Realizar compra de produto com sucesso - Mobile
    Dado que acesse o site com a resolução de um dispositivo mobile
    E que o usuário esteja na página de inventário
    E adicione um produto ao carrinho de compras
    Quando o usuário realizar o checkout
    E confirmar a compra do produto
    Então mensagem de sucesso de compra deve ser exibida na página

  @scenario_outline
  Esquema do Cenario: Realizar compra de um produto especifíco com sucesso
    Dado que o usuário esteja na página de inventário
    Quando selecionar o "<produto>"
    Então página do produto deve ser apresentada com o "<valor>"

    Exemplos:
      | produto                 | valor  |
      | Sauce Labs Backpack     | $29.99 |
      | Sauce Labs Bike Light   | $9.99  |
      | Sauce Labs Bolt T-Shirt | $15.99 |