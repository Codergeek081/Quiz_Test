describe('Tech Quiz E2E', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001'); // adjust if using a different port
    });
  
    it('should start the quiz and display a question', () => {
      cy.contains('Start Quiz').click();
      cy.get('h2').should('exist'); // First question
    });
  
    it('should go to the next question when an answer is clicked', () => {
      cy.contains('Start Quiz').click();
  
      cy.get('h2').then(($q1) => {
        const first = $q1.text();
        cy.get('button').first().click();
  
        cy.get('h2').should(($q2) => {
          expect($q2.text()).not.to.equal(first); // next question
        });
      });
    });
  
    it('should complete the quiz and show score after answering all questions', () => {
      cy.contains('Start Quiz').click();
      cy.get('h2').should('exist');
  
      for (let i = 0; i < 10; i++) {
        cy.get('button')
          .first()
          .should('be.visible')
          .click();
      }
  
      cy.contains('Quiz Completed').should('exist');
      cy.contains('Your score').should('exist');
    });
  
    it('should allow restarting the quiz after completion', () => {
      cy.contains('Start Quiz').click();
      cy.get('h2').should('exist');
  
      for (let i = 0; i < 10; i++) {
        cy.get('button')
          .first()
          .should('be.visible')
          .click();
      }
  
      cy.contains('Take New Quiz').click();
      cy.get('h2').should('exist'); // New quiz starts
    });
  });
  