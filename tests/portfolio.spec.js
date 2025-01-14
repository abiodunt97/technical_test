// @ts-check
const { test } = require('@playwright/test');
const POMManager = require('../pages/pom-manager');

test('Validate Portfolio Value', async ({ page }) => {
  const pm = new POMManager(page)

  await pm.homepage.goto();
  await pm.homepage.login();
  await pm.loginPage.signIn();
  await pm.portfolioPage.validatePortolioValue("£", "3.43");
});
