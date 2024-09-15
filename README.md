# 🚀 Projeto de testes e2e automatizados com Cypress e Cucumber

> Esse é um exemplo de uma estrutura inicial de testes automatizados web com o "Cypress" e "cypress-cucumber-preprocessor" que dá suporte para a escrita dos cenários com as regras gramaticais do Gherkin.
> 
> Cypress10 está sendo utilizado no projeto.


## :open_file_folder: Organização do projeto

A organização de pastas do projeto.

```
root
├── cypress
│   ├── cucumber-report
│   ├── e2e
│   │   ├── features
│   │   ├── step_definitions
│   ├── fixtures
│   ├── pages
│   ├── report
│   ├── support
├── cypress.config.js
├── cypress.env.json
├── package.json
├── .gitignore
```

<br>

### :wrench: Principais Tecnologias

- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)

<br>

## 💻 Pre-requisitos

1. Node JS (v22.5.1)
2. Opcional: Json-formatter de acordo com o sistema operacional: https://github.com/cucumber/json-formatter
 
## :scroll: Setup

- Para fazer o download das dependências, execute este comando na raiz do projeto:

<br>

```
$ npm install
```
ou
```
$ yarn install
```
<br>

## Executando os testes:

Executando o Cypress via interface:

```
$ yarn cypress:open
```

Executando o Cypress em headles:
```
$ yarn cypress:run
```

Comando utilizado para geração do relatório de execução local:
```
$ yarn generate-local-report
```

<img src="https://media.licdn.com/dms/image/D4D12AQGoFi4cMbApzQ/article-cover_image-shrink_720_1280/0/1691404661944?e=2147483647&v=beta&t=sOa1js9lZj2HWfEmEDMO4u0LT_1s1mYRIRrI2YOgG9Q" alt="exemplo imagem">