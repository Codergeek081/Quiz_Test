Table of Contents
Project Overview

Features

Getting Started

Prerequisites

Installation

Environment Variables

Running the Application

Testing

Component Tests

End-to-End Tests

Project Structure

Walkthrough Video

Contributing

License

Project Overview
The Tech Quiz Application is a modern web app built with the MERN stack (MongoDB, Express.js, React, Node.js). It delivers ten randomized tech questions per quiz session, tracks user answers, and calculates a final score. This repository extends the starter code by integrating Cypress for:

Component Testing of the React Quiz component

End-to-End (E2E) Testing to validate the full quiz flow

Features
Start a new quiz of 10 random questions

Navigate through questions one at a time

View results and final score upon completion

Restart quiz without page reload

Client-side and server-side validation

Comprehensive Cypress test coverage

Getting Started
Prerequisites
Node.js v16+

npm v8+

MongoDB (local or Atlas)

Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/<your-username>/tech-quiz-app.git
cd tech-quiz-app
Install dependencies

bash
Copy
Edit
npm install
cd client
npm install
cd ../server
npm install
cd ..
Environment Variables
Copy and configure your environment file:

bash
Copy
Edit
cd server
cp .env.example .env
Then update .env with your MongoDB connection string and any other secrets:

ini
Copy
Edit
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=<your_jwt_secret>
PORT=5000
Running the Application
From the root directory, start both server and client concurrently:

bash
Copy
Edit
npm run dev
Client (React) will run on http://localhost:3000

Server (Node/Express) will run on http://localhost:5000

Testing
All tests are executed via:

bash
Copy
Edit
npm run test
This command runs both the component and end-to-end suites.

Component Tests
Located in cypress/component/Quiz.cy.jsx

Leverages Cypress Component Testing to mount and verify the Quiz React component in isolation.

End-to-End Tests
Located in cypress/e2e/quiz.cy.js

Simulates real user flows: starting the quiz, answering questions, viewing the score, and restarting.

Walkthrough Video
A full walkthrough demonstrating all tests passing and app usage is available here:

<video controls src="screen-capture.webm" title="Title"></video>

Note: The video shows:

Cloning the repo

Installing dependencies

Invoking npm run dev

Running npm run test to execute both component and E2E tests

Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. Ensure all new functionality is covered by tests.

License
This project is licensed under the MIT License.