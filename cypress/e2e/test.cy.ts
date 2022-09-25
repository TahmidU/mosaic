describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.viewport("macbook-16");

    cy.visit("http://localhost:3000/");

    cy.get("span").contains("Trailers & Clips");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
