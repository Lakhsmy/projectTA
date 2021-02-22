// https://docs.cypress.io/api/introduction/api.html

describe("Testing Register Form", () => {
  it("Visits Register URL", () => {
    cy.visit("/register");
  });
  it("Fill Form", () => {
    cy.get("[data-test='fullName']").type("testing");
    cy.get("[data-test='email']").type("antoniusjoshua47@gmail.com");
    cy.get("[data-test='password']").type("joshuakeren123");
    cy.get("[data-test='birthPlace']").type("Jakarta");
    const birthDate = cy.get("[data-test='birthDate']").click();
    birthDate.get("[data-date='2021-02-21']").click();
    cy.get("[data-test='ktp']").type("123123123123");
    cy.get("[data-test='latestEducation']").select("S3");
    cy.get("[data-test='ipk']")
      .clear()
      .type("3.5");
    cy.get("[data-test='major']").select("Ciputat - Bintaro");
  });
  it("Submit Form", () => {
    cy.get("[data-test='registerButton']").click();
  });
});
