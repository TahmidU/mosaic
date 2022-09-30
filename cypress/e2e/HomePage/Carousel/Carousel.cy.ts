describe("Carousel", () => {
  it("Next slide", () => {
    // Expects
    const nextBtnId = '[data-testid="CarouselNextBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

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

    let firstTitle: string;
    cy.get(titleId).then(($span) => {
      firstTitle = $span.text();
      cy.get(nextBtnId).click();
      // Wait for slide change
      cy.wait(1000).then(() => expect(firstTitle).to.not.equal($span.text()));
    });
  });

  it("Next slide, cycle back to start", () => {
    // Expects
    const nextBtnId = '[data-testid="CarouselNextBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

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

    let firstTitle: string;
    cy.get(titleId).then(($span) => {
      firstTitle = $span.text();
      for (let i = 0; i < 10; i++) {
        cy.get(nextBtnId).click();
      }
      // Wait for slide change
      cy.wait(1000).then(() => expect(firstTitle).to.equal($span.text()));
    });
  });

  it("Prev slide, cycle to end", () => {
    // Expects
    const prevBtnId = '[data-testid="CarouselPrevBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

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

    let firstTitle: string;
    cy.get(titleId).then(($span) => {
      firstTitle = $span.text();
      for (let i = 0; i < 10; i++) {
        cy.get(prevBtnId).click();
      }
      // Wait for slide change
      cy.wait(1000).then(() => expect(firstTitle).to.equal($span.text()));
    });
  });

  it("Prev slide", () => {
    // Expects
    const prevBtnId = '[data-testid="CarouselPrevBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

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

    let firstTitle: string;
    cy.get(titleId).then(($span) => {
      firstTitle = $span.text();
      cy.get(prevBtnId).click();
      // Wait for slide change
      cy.wait(1000).then(() => expect(firstTitle).to.not.equal($span.text()));
    });
  });

  it("Slide indicator", () => {
    // Expects
    const titleId = '[data-testid="CarouselTitle"]';
    const stepId = '[data-testid="StepStatusIndicator"]';

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

    cy.get(titleId).then(($span) => {
      let firstTitle = $span.text();

      cy.get(stepId)
        .should("have.length", 10)
        .then(($step) => {
          cy.log(`${$step[3]}`);
          $step[3].click();
          cy.wait(1000).then(() => {
            expect(firstTitle).to.not.equal($span.text());
          });
        });
    });
  });

  it("Review", () => {
    // Expects
    const reviewContainerClass = '[class="CircularProgressbar-text"]';

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

    cy.get(reviewContainerClass).then(($text) => {
      expect($text.text()).to.match(new RegExp(/^\d{0,2}(\.\d{1,2})?[%]$/g));
    });
  });

  it("Carousel videos", () => {
    // Expects
    const clipsId = '[data-testid="ClipsResults"]';

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

    cy.get(clipsId)
      .invoke("text")
      .then(($resultsText) => {
        expect($resultsText).to.match(new RegExp(/Results: \d/gm));
      });
  });

  it("Video modal pop-up", () => {
    cy.viewport("macbook-16");
  });
});
export {};
