#language: pt
@make_purchase @e2e
Funcionalidade: Realizar login na aplicação

  @login_erro
  Cenário: Efetuar login inserir usuário e senha invalidos
    Dado que insira um usuário "usuario.invalido@test.com" e senha "teste123"
    Quando selecionar a opção de entrar
    Então mensagem indicando usuário e senha inválida é exibida na página
  
  @login_sucesso
  Cenário: Realizar login com sucesso
    Dado que insira um usuário "<usuario>" e senha "<senha>"
    Quando selecionar a opção de entrar
    Então login é efetuado com sucesso na aplicação

    Exemplos:
    | usuario        | senha   |
    | test@test.com  | test123 |
    | admin@test.com | test123 |