// @ts-check
const { test, expect } = require('@playwright/test');
const Homepage = require('../pages/homepage')
const LoginPage = require('../pages/login-page')

test('Portfolio', async ({ page }) => {
  const homepage = new Homepage(page);
  const loginPage = new LoginPage(page);

  await homepage.goto();
  await homepage.login();
  await loginPage.signIn();
});
