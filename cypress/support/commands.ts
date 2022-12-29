/// <reference types="cypress" />

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test="${selector}"]`);
});

Cypress.Commands.add("setSize", (size: number[] | string) => {
  if (Cypress._.isArray(size)) {
    return cy.viewport(size[0], size[1]);
  } else {
    return cy.viewport(size as any);
  }
});
