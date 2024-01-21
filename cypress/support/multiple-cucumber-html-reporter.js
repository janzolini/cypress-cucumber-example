const reporter = require('multiple-cucumber-html-reporter');
const dataAtual = new Date();

const options = {
    jsonDir: 'cypress/report', // Diretório onde os arquivos JSON dos resultados do Cucumber estão armazenados
    reportPath: 'cypress/cucumber-report', // Diretório de saída para o relatório HTML
    pageTitle: 'Cypress E2E Test',
    reportName: 'Cypress E2E Test',
    displayDuration: true,
    metadata: {
        browser: {
            name: 'Chrome',
        },
        device: 'Local test machine',
        platform: {
            name: 'osx',
            version: '13.0.0'
        }
    },
    customData: {
        title: 'Test Run Info',
        data: [
            { label: 'Project', value: 'Cypress E2E Test' },
            { label: 'Release', value: '1.0.0' },
        ]
    }
};

reporter.generate(options);