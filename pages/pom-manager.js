const Homepage = require('../pages/homepage')
const LoginPage = require('../pages/login-page')
const PortfolioPage = require('../pages/portfolio-page')

class POMManager {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.homepage = new Homepage(page)
        this.loginPage = new LoginPage(page)
        this.portfolioPage = new PortfolioPage(page)
    }
};

module.exports = POMManager