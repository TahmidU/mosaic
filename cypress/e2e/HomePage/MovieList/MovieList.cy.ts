describe("MovieList", () => {
  it("Next", () => {
    // Expects
    const expectedNumberOfChildrenScrolled = 8;
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

    let initialScrollLeft = 0;
    cy.get(listId)
      .then(($element) => {
        initialScrollLeft = $element[0].scrollLeft;
        cy.get(nextBtnId).click();
        cy.wait(1000);
      })
      .then(() => {
        cy.get(listId).then(($element) => {
          const currentScrollLeft = $element[0].scrollLeft;
          expect(initialScrollLeft).to.not.equal(currentScrollLeft);

          const childrenWidth = $element.children()[0].offsetWidth;

          expect(expectedNumberOfChildrenScrolled).to.equal(
            Math.round(currentScrollLeft / childrenWidth)
          );
        });
      });
  });

  /*
  it("Prev", () => {});

  it("Next cycle back to start", () => {});

  it("Prev cycle back to start", () => {});

  it("Change type", () => {});*/
});

export {};
