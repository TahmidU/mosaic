describe("MovieList", () => {
  it("Next", () => {
    // Expects
    const expectedScroll = 0;
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

    cy.get(nextBtnId).click();
    cy.wait(1000);

    cy.get(listId).then(($element) => {
      const currentScrollLeft = $element[0].scrollLeft;
      expect(expectedScroll).to.not.equal(currentScrollLeft);
    });
  });

  it("Prev", () => {
    // Expects
    const expectedScroll = 0;
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

    cy.get(prevBtnId).click();
    cy.wait(1000);

    cy.get(listId).then(($element) => {
      const currentScrollLeft = $element[0].scrollLeft;
      expect(expectedScroll).to.not.equal(currentScrollLeft);
    });
  });

  it("Next cycle back to start", () => {
    // Expects
    const expectedScroll = 0;
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

    cy.get(listId)
      .then(($element) => {
        expect($element[0].scrollLeft).to.equal(expectedScroll);
      })
      .then(() => {
        cy.get(listId).then(($element) => {
          let scrollWidth = $element[0].scrollWidth;
          let childrenWidth = $element.children()[0].offsetWidth;

          const numOfClickRequired = Math.ceil(
            scrollWidth / (childrenWidth * 8)
          );
          cy.log(numOfClickRequired + "");

          for (let i = 0; i < numOfClickRequired; i++) {
            cy.get(nextBtnId).click();
            cy.wait(1000); // Wait for clicks to finish
          }

          const currentScrollLeft = $element[0].scrollLeft;
          expect(expectedScroll).to.equal(currentScrollLeft);
        });
      });
  });

  it("Prev cycle back to start", () => {
    // Expects
    const expectedScroll = 0;
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

    cy.get(listId)
      .then(($element) => {
        expect($element[0].scrollLeft).to.equal(expectedScroll);
      })
      .then(() => {
        cy.get(listId).then(($element) => {
          let scrollWidth = $element[0].scrollWidth;
          let childrenWidth = $element.children()[0].offsetWidth;

          const numOfClickRequired = Math.ceil(
            scrollWidth / (childrenWidth * 8)
          );
          cy.log(numOfClickRequired + "");

          for (let i = 0; i < numOfClickRequired; i++) {
            cy.get(prevBtnId).click();
            cy.wait(1000); // Wait for clicks to finish
          }

          const currentScrollLeft = $element[0].scrollLeft;
          expect(expectedScroll).to.equal(currentScrollLeft);
        });
      });
  });
  /*
  it("Change type", () => {});*/
});

export {};
