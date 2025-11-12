# 🧪 Cypress API Test Suite - Rick and Morty

This project is a **QA Automation skills demonstration** focused on API testing using **Cypress**.

The objective is to validate the [Rick and Morty public API](https://rickandmortyapi.com/) *endpoints*, covering not only basic "happy path" cases but also error handling, data schema validation, and relational integrity between *endpoints*.

---

## 🚀 Technologies Used

* **Cypress:** As the main testing framework to run `cy.request()`.
* **JavaScript (ES6+):** For writing the test *scripts*.
* **Node.js:** For package management (npm) and Cypress execution.
* **Chai:** (Integrated with Cypress) for `expect()` assertions.

---

## 🎯 Test Coverage

The test suite (`/cypress/e2e/rick-morty-api.cy.js`) is designed to demonstrate a complete QA mindset, covering the following scenarios:

1.  **"Happy Path" Test (Status 200):**
    * Validates that a `GET` request to a valid resource (`/character/2`) returns a `200 OK`.
    * Verifies that the response data (the `body`) is correct (e.g., `name: "Morty Smith"`).

2.  **Error Handling (Status 404):**
    * Validates that a request to a non-existent resource (`/character/99999`) returns a `404 Not Found` error.
    * Uses `failOnStatusCode: false` to correctly handle and verify the error response.

3.  **Business Logic Validation (Filters):**
    * Tests the API's *query parameters* functionality (e.g., `?name=rick&status=alive`).
    * Verifies that *all* results in the response meet the filter criteria.

4.  **Schema Validation (Data Types):**
    * Verifies the API "contract" for a resource (`/character/1`).
    * Validates that each key field (`id`, `name`, `status`, `episode`) has the correct data type (e.g., `number`, `string`, `array`).

5.  **Specific Feature Testing (Multiple IDs):**
    * Validates the API's ability to handle a request for multiple resources in a single *request* (e.g., `/character/1,2,3`).
    * Verifies that the response is an `array` with the exact number of items requested.

6.  **Relational Integrity Test (Chained Requests):**
    * Demonstrates the ability to handle asynchronous tests (`.then()`).
    * **Step 1:** Fetches a character (`/character/1`).
    * **Step 2:** Extracts its origin URL (`origin.url`) from the first response.
    * **Step 3:** Makes a *second request* to that origin URL.
    * **Step 4:** Validates the data from the second response (e.g., `name: "Earth (C-137)"`).

---

## ▶️ How to Run the Tests

To run this test suite on your local machine:

### Prerequisites

* Have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/FranMayer/cypress-api-tests-rickandmorty.git](https://github.com/FranMayer/cypress-api-tests-rickandmorty.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd cypress-api-tests-rickandmorty
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the tests:**

    * ***Headless* Mode (via console):**
        ```bash
        npx cypress run --spec "cypress/e2e/rick-morty-api.cy.js"
        ```

    * **(Optional) Interactive Mode (with UI):**
        ```bash
        npx cypress open
        ```
        (And then click on `rick-morty-api.cy.js` in the Cypress explorer)

---

### Author

* **Franco Mayer**
    * [LinkedIn](https://www.linkedin.com/in/franmayer/)
    * [GitHub](https://github.com/FranMayer)
