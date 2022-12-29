// const sizes = [[1920, 1080], [1366, 768], "iphone-se2"];
const sizes = [[1920, 1080]];

const waitOnURL = "http://localhost:5173";

describe.only("List of countries", () => {
  beforeEach(() => {
    cy.visit(waitOnURL);
    cy.intercept("GET", "https://restcountries.com/v3.1/all").as("getCountries");
  });

  sizes.forEach((size) => {
    context(`${size} screen`, () => {
      it.only("Changes the theme", () => {
        cy.setSize(size);
        cy.getByData("theme-toggler").click();
        cy.getByData("theme-toggler").click();
      });

      it("Notifes user when a country doesn't exist", () => {
        cy.setSize(size);
        cy.intercept("GET", "https://restcountries.com/v3.1/name/NotExistingCountry").as(
          "findNotExistingCountry"
        );
        cy.wait("@getCountries");
        cy.getByData("search-field").type("NotExistingCountry");
        cy.wait("@findNotExistingCountry");
        cy.getByData("nothing-found").should("be.visible");
      });

      it("Searches for countries from search field", () => {
        cy.setSize(size);
        cy.wait("@getCountries");
        cy.getByData("search-field").type("rus");
        cy.getByData("country-card-header").contains("Russia");
        cy.getByData("clear-search-field").click();
        cy.getByData("search-field").type("usa");
        cy.getByData("country-card-header").contains("United States");
      });

      it("Searches for countries by regions", () => {
        cy.setSize(size);
        cy.wait("@getCountries");
        cy.getByData("select-region").click();
        cy.getByData("select-region-options").contains("Africa").click();
        cy.getByData("country-card-header").contains("Eritrea");
        cy.getByData("country-card-header").contains("South Africa");
        cy.getByData("select-region").click();
        cy.getByData("select-region-options").contains("Europe").click();
        cy.getByData("country-card-header").contains("Sweden");
        cy.getByData("country-card-header").contains("Ukraine");
      });

      it("Clears others filters when one filter is selected", () => {
        cy.setSize(size);
        cy.getByData("search-field").type("usa");
        cy.getByData("select-region").click();
        cy.getByData("select-region-options").contains("Africa").click();
        cy.getByData("search-field").should("be.empty");
        cy.getByData("search-field").type("usa");
        cy.getByData("selected-value").should("be.empty");
      });

      it("Saves filter values after reload", () => {
        cy.setSize(size);
        cy.getByData("search-field").type("usa");
        cy.reload();
        cy.getByData("search-field").should("have.value", "usa");
        cy.getByData("select-region").click();
        cy.getByData("select-region-options").contains("Africa").click();
        cy.reload();
        cy.getByData("selected-value").should("contain", "Africa");
      });

      it("Opens a country card and allows to return back", () => {
        cy.setSize(size);
        cy.wait("@getCountries");
        cy.getByData("search-field").type("usa");
        cy.getByData("country-card-header").contains("United States").click();
        cy.url().should("include", "/USA");
        cy.getByData("go-back").click();
        cy.url().should("not.include", "/USA");
      });
    });
  });
});

describe("Country Page", () => {
  beforeEach(() => {
    cy.visit(`${waitOnURL}/#/USA`);
    cy.intercept("GET", "https://restcountries.com/v3.1/alpha/USA").as("getCountry");
  });

  sizes.forEach((size) => {
    context(`${size} screen`, () => {
      it("Opens pages of border countries and returns back", () => {
        cy.intercept("GET", "https://restcountries.com/v3.1/alpha/MEX").as("getMexico");
        cy.intercept("GET", "https://restcountries.com/v3.1/alpha/GTM").as("getGuatemala");
        cy.intercept("GET", "https://restcountries.com/v3.1/alpha/HND").as("getHonduras");
        cy.wait("@getMexico");
        cy.getByData("chip").contains("Mexico").click();
        cy.wait("@getGuatemala");
        cy.getByData("chip").contains("Guatemala").click();
        cy.wait("@getHonduras");
        cy.getByData("chip").contains("Honduras").click();
        cy.getByData("go-back").click();
        cy.url().should("include", "GTM");
        cy.getByData("go-back").click();
        cy.url().should("include", "MEX");
        cy.getByData("go-back").click();
        cy.url().should("include", "USA");
      });

      it("Safely returns back to the list when we open country page from URL", () => {
        cy.visit(`${waitOnURL}/#/USA`);
        cy.getByData("go-back").click();
        cy.url().should("include", "/");
      });

      it("Notifies user when unable to find country with not existing code", () => {
        cy.intercept("GET", "https://restcountries.com/v3.1/alpha/NotExistingCountry").as(
          "getNotExistingCountry"
        );
        cy.visit("http://localhost:5173/#/NotExistingCountry");
        cy.wait("@getNotExistingCountry");
        cy.getByData("country-not-found").should("be.visible");
      });
    });
  });
});
