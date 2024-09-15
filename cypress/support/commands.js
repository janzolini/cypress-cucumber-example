Cypress.Commands.add('doLogin', (url, user, password) => {
    cy.visit(url);
    cy.get("input[data-test='username']").type(user);
    cy.get("input[data-test='password']").type(password, { log: false, });
    cy.get("input[data-test='login-button']").click();
    cy.contains('span.title', 'Products').should('be.visible');
});

Cypress.Commands.add('clearPage', () => {
    cy.window().then(win => {
        win.sessionStorage.clear()
        win.localStorage.clear()
    })
});