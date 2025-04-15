import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import questions from '../fixtures/questions.json'; // 🔴 Import mock data from fixture

describe('<Quiz />', () => {
  const mockGetQuestions = () => Promise.resolve(questions); // 🔴 Create mock function

  it('renders the start button before quiz starts', () => {
    cy.mount(<Quiz fetchQuestions={mockGetQuestions} />); // 🔴 Inject mock fetch function
    cy.contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz and shows first question', () => {
    cy.mount(<Quiz fetchQuestions={mockGetQuestions} />); // 🔴 Inject mock again
    cy.contains('Start Quiz').click();
    cy.get('h2').should('exist');
  });

  it('shows next question after clicking an answer', () => {
    cy.mount(<Quiz fetchQuestions={mockGetQuestions} />);
    cy.contains('Start Quiz').click();

    cy.get('h2').then(($question1) => {
      const firstText = $question1.text();
      cy.get('button').eq(0).click();

      cy.get('h2').should(($question2) => {
        expect($question2.text()).not.to.equal(firstText);
      });
    });
  });

  it('shows final score after all questions are answered', () => {
    cy.mount(<Quiz fetchQuestions={mockGetQuestions} />);
    cy.contains('Start Quiz').click();

    for (let i = 0; i < questions.length; i++) {
      cy.get('button').eq(0).click();
    }

    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score').should('exist');
  });
});
