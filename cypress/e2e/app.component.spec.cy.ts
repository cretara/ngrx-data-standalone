import {AppComponent} from "../../src/app/app.component";

describe("AppComponent", () => {
  it("should visit main page of AppComponent", () => {
    cy.visit("http://localhost:4200/")
  })
  it("should get counter initial value", () => {
    cy.visit("http://localhost:4200/");
    cy.contains("0");
  })
})
