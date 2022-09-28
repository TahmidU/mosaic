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
});

// Prevent TypeScript from reading file as legacy script
export {};
