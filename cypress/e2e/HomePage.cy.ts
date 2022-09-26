describe("Home page", () => {
  it("Basic structure", () => {
    // Expects
    const expectedSubTitleExploreMovies = [
      "In Theatres",
      "Popular",
      "Upcoming",
    ];
    const expectedSubTitleExploreTV = ["On Air", "Popular"];

    // Setup
    cy.viewport("macbook-16");
    const getMoviesIntercept = "getMovies",
      getExploreIntercept = "getExplore";

    cy.intercept({
      method: "GET",
      url: "/api/movies/**",
      hostname: "localhost",
    }).as(getMoviesIntercept);

    cy.intercept({
      method: "GET",
      url: "/api/explore/**",
      hostname: "localhost",
    }).as(getExploreIntercept);

    // Result
    cy.visit("http://localhost:3000/");

    cy.wait(`@${getMoviesIntercept}`);
    cy.get("span").contains("Trailers & Clips");

    cy.get(`@${getExploreIntercept}`);
    cy.get("h1").contains("Explore Movies");
    expectedSubTitleExploreMovies.forEach((_val) => {
      cy.get("span").contains(_val);
    });

    cy.get(`@${getExploreIntercept}`);
    cy.get("h1").contains("Explore TV Shows");
    expectedSubTitleExploreTV.forEach((_val) => {
      cy.get("span").contains(_val);
    });
  });

  describe("Carousel", () => {
    it("Next slide", () => {
      cy.viewport("macbook-16");
    });

    it("Next slide, cycle back to start", () => {
      cy.viewport("macbook-16");
    });

    it("Prev slide, cycle to end", () => {
      cy.viewport("macbook-16");
    });

    it("Prev slide", () => {
      cy.viewport("macbook-16");
    });

    it("Slide indicator", () => {
      cy.viewport("macbook-16");
    });

    it("Review", () => {
      cy.viewport("macbook-16");
    });
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
