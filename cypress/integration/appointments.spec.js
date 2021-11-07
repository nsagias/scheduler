describe("Appointments", () => {
  it ("should book an interview", ()=> {
    cy.visit("/")
    cy.get("li").contains("li","Monday")
    cy.get("[alt=Add]")
    .first()
    .click()
    .get("[data-testid=student-name-input]").type("Lydia Miller-Jones")
    cy.get("[alt='Sylvia Palmer']").click()
    cy.contains("Save").click()
    cy.request("GET", "localhost:8001/api/debug/reset")

  })
});