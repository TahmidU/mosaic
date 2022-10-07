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
    cy.wait(1000); // Wait for elements in list to appear;

    cy.get(listId).then(($element) => {
      cy.wrap($element[0].scrollLeft).as("initialScroll");
    });

    cy.get(nextBtnId).click();
    cy.wait(1000);

    cy.get(listId).then(($element) => {
      const currentScrollLeft = $element[0].scrollLeft;
      expect(cy.get("@initialScroll")).to.not.equal(currentScrollLeft);
    });
  });

  it("Prev", () => {
    // Expects
    const prevBtnId = '[data-testid="HomePageMovieList-LeftBtn"]';
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
    cy.wait(1000); // Wait for elements in list to appear;

    cy.get(listId).then(($element) => {
      cy.wrap($element[0].scrollLeft).as("initialScroll");
    });

    cy.get(prevBtnId).click();
    cy.wait(1000);

    cy.get(listId).then(($element) => {
      const currentScrollLeft = $element[0].scrollLeft;
      expect(cy.get("@initialScroll")).to.not.equal(currentScrollLeft);
    });
  });

  /*
  it("Next cycle back to start", () => {});

  it("Prev cycle back to start", () => {});

  it("Change type", () => {});*/
});

export {};
