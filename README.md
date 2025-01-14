# Technical Test

## Overview
This repository contains an automated test written using Playwright to validate the value of a portfolio. The tests are configured to run using the Firefox browser only and to cycle user agents each test run in order to avoid 403 errors and detection by Cloudflare security measures.

## Prerequisites

* Node.js (version 14 or higher)
* npm (usually comes with Node.js)
* Firefox

## Installation

### Clone Repository
```bash
git clone https://github.com/abiodunt97/technical_test
cd technical_test
```

### Install Dependencies

To install all relevant dependencies listed in the `package.json`, simply run the below command:
```bash
npm install
```

## Project Structure
```bash
├── config/                  # Contains .env files where environment variables can be configured
├── pages/                   # Page Object Model files directory
├── tests/                   # Test files directory
├── playwright.config.js     # Playwright configuration
├── package.json             # Project dependencies and scripts
├── .gitignore               # Gitignore file
└── README.md                # README file
```

## Running Tests

### Environment Initialisation

In order to run the tests, you must first define the `TEST_ENVIRONMENT` environment variable. You must also ensure that values are assigned to each of the environment variables.

Valid values are:

- `local`
- `sit`
- `prod`

Below is an example on how to do this:

Powershell

```pwsh
$env:TEST_ENVIRONMENT="prod"
```

Bash

```bash
export TEST_ENVIRONMENT="prod"
```

Ensure to update the assertion in `portfolio.spec.js` before running the test to the expected currency and portfolio value. Both values should be given as strings.

### Run Tests

To run the tests in UI Mode (Headed) you can use either of the below scripts:

```bash
    npm run test
```

```bash
    npx playwright test tests/portfolio.spec.js --headed
```

To run the tests in headless mode you can use either of the below scripts:

```bash
    npm run test-headless
```

```bash
    npx playwright test tests/portfolio.spec.js
```

## Configuration
The `playwright.config.js` file contains all the configuration options for the test suite:

* Browser selection (Limited to Firefox for the purpose of this test)
* Timeout settings
* Parallel execution options
* Reporter settings
* Screenshot and video capture settings

## Test Reports

Test reports are automatically generated after each test run in the `playwright-report` directory.

A screenshot is taken on test failure and can be found within the `test-results` directory.

## Notes

### Addressing Potential Flakiness

1. Due to the site being a production website, it has various security measures to protect against bots, Cloudflare being one. Other browsers have a higher chance to be flagged by such systems and therefore Firefox is used for this test as it has a lower likelihood of such interference.

2. Depending on internet speeds, it's possible timeouts may have to be adjusted. Information on how to do so can be found here: https://playwright.dev/docs/test-timeouts