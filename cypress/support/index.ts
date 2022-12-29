/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
    setSize(size: number[] | string): Chainable<JQuery<HTMLElement>>;
  }
}
