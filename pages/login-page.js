const { expect } = require('@playwright/test');

class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.USER_NAME = process.env.USER_NAME
        this.USER_PASSWORD = process.env.USER_PASSWORD

        this.usernameField = page.locator('css=input[name="username"]')
        this.passwordField = page.locator('css=input[name="password"]')
        this.logInSubmission = page.locator('css=button[type="submit"]')
    }

    async signIn() {

        await expect(this.usernameField).toBeVisible();
        await this.usernameField.fill(this.USER_NAME);
        await this.passwordField.fill(this.USER_PASSWORD);
        await this.logInSubmission.click();
    }
};

module.exports = LoginPage