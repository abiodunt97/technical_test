const { expect } = require('@playwright/test');

class Homepage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.URL = process.env.URL

        this.logInButton = page.locator('css=a[data-testid="sign-in"]')
    }

    async goto() {
        await this.page.goto(this.URL);
    }

    async login() {
        await expect(this.logInButton).toBeVisible();
        await this.logInButton.click();
    }
};

module.exports = Homepage