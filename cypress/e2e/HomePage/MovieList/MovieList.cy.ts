describe("MovieList", () => {
  it("Next", () => {
    // Expects
    const nextBtnId = '[data-testid="HomePageMovieList-RightBtn"]';
    const listId = '[data-testid="HomePageMovieList-List"]';

    // Setup
    cy.viewport("macbook-16");
    const getMoviesIntercept = "getMovies";

    cy.intercept({
      method: "GET",
      url: "/api/movies/**",
      hostname: "localhost",
    }).as(getMoviesIntercept);

    // Results
    cy.visit("http://localhost:3000/");

    cy.wait(`@${getMoviesIntercept}`);

    cy.get(listId)
      .children()
      .then(($elms: any) => {
        for (let i = 0; i < 5; i++) {
          cy.get(`[href="${$elms[i].getAttribute("href")}"]`).should(
            "be.visible"
          );
        }
        cy.get(nextBtnId).click();
        for (let i = 5; i < 11; i++) {
          cy.get(`[href="${$elms[i].getAttribute("href")}"]`).should(
            "be.visible"
          );
        }
      });
  });

  it("Prev", () => {});

  it("Next cycle back to start", () => {});

  it("Prev cycle back to start", () => {});

  it("Change type", () => {});
});

export {};
