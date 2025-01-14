const { expect } = require('@playwright/test');

class PortfolioPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.USER_NAME = process.env.USER_NAME
        this.USER_EMAIL = process.env.USER_EMAIL
        this.USER_PASSWORD = process.env.USER_PASSWORD

        this.portolioValueText = page.getByText('Portfolio value')
        this.portfolioCurrency = page.locator('xpath=//*[@id="__next"]/div[2]/div/div/div[2]/div[1]/main/section/div[1]/div[1]/div[1]/div[1]/div/div/div/div[2]/div/span/div/div/span[1]')
        this.porfolioValue = page.locator('xpath=//*[@id="__next"]/div[2]/div/div/div[2]/div[1]/main/section/div[1]/div[1]/div[1]/div[1]/div/div/div/div[2]/div/span/div/div/span[2]')
    }

    async validatePortolioValue(currency, value) {

        await expect(this.portolioValueText).toBeVisible();

        await expect(this.portfolioCurrency).toHaveText(`${currency}`);
        await expect(this.porfolioValue).toHaveText(`${value}`)
    }
};

module.exports = PortfolioPage