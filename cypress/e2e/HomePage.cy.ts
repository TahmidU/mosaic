describe("Home page", () => {
  it("Basic structure", () => {
    cy.viewport("macbook-16");
    const expectedSubTitleExploreMovies = [
      "In Theatres",
      "Popular",
      "Upcoming",
    ];
    const expectedSubTitleExploreTV = ["On Air", "Popular"];

    cy.visit("http://localhost:3000/");

    cy.get("span").contains("Trailers & Clips");

    cy.get("h1").contains("Explore Movies");
    expectedSubTitleExploreMovies.forEach((_val) => {
      cy.get("span").contains(_val);
    });

    cy.get("h1").contains("Explore TV Shows");
    expectedSubTitleExploreTV.forEach((_val) => {
      cy.get("span").contains(_val);
    });
  });

  describe("Carousel", () => {
    it("Next slide", () => {});

    it("Next slide, cycle back to start", () => {});

    it("Prev slide, cycle to end", () => {});

    it("Prev slide", () => {});

    it("Slide indicator", () => {});

    it("Review", () => {});
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
