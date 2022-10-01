describe("Mobile Carousel", () => {
  it("Next Slide", () => {
    // Expects
    const nextBtnId = '[data-testid="MobileCarouselNextBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

    // Setup
    cy.viewport("iphone-8");

    // Results
    cy.visit("http://localhost:3000/");

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
    const nextBtnId = '[data-testid="MobileCarouselNextBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

    // Setup
    cy.viewport("iphone-8");

    // Results
    cy.visit("http://localhost:3000/");

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

  it("Prev Slide", () => {
    // Expects
    const prevBtnId = '[data-testid="MobileCarouselPrevBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

    // Setup
    cy.viewport("iphone-8");

    // Results
    cy.visit("http://localhost:3000/");

    let firstTitle: string;
    cy.get(titleId).then(($span) => {
      firstTitle = $span.text();
      cy.get(prevBtnId).click();
      // Wait for slide change
      cy.wait(1000).then(() => expect(firstTitle).to.not.equal($span.text()));
    });
  });

  it("Prev slide, cycle back to start", () => {
    // Expects
    const prevBtnId = '[data-testid="MobileCarouselPrevBtn"]';
    const titleId = '[data-testid="CarouselTitle"]';

    // Setup
    cy.viewport("iphone-8");

    // Results
    cy.visit("http://localhost:3000/");

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

  it("Slide indicator click", () => {
    // Expects
    const titleId = '[data-testid="CarouselTitle"]';
    const stepId = '[data-testid="StepStatusIndicator"]';

    // Setup
    cy.viewport("iphone-8");

    // Results
    cy.visit("http://localhost:3000/");

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
});

export {};
