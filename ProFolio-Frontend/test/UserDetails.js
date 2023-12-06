import puppeteer from 'puppeteer';
import { expect } from 'chai';

describe('UserDetails Page Test', function () {
    this.timeout(20000); // Increase timeout for asynchronous operations

    let browser;
    let page;

    before(async function () {
        browser = await puppeteer.launch({ headless: true });
        page = await browser.newPage();
        await page.goto('http://localhost:5173//user-details'); // Update URL to your application's
    });

    after(async function () {
        if (browser) {
            await browser.close();
        }
    });

    it('should have an input for the name', async function () {
        const nameInputExists = await page.$('input[name="name"]') !== null;
        expect(nameInputExists).to.be.true;
    });

    it('should have an input for the title', async function () {
        const titleInputExists = await page.$('input[name="title"]') !== null;
        expect(titleInputExists).to.be.true;
    });

    // More tests...
    // For each field and button, you can write similar tests to check their existence

    it('should submit the form and navigate to the next page', async function () {
        // Fill in form fields
        await page.type('input[name="name"]', 'John Doe');
        await page.type('input[name="title"]', 'Developer');

        // Submit the form
        await page.click('button[type="submit"]');

        // Wait for navigation and check URL
        await page.waitForNavigation();
        const url = page.url();
        expect(url).to.include('/next-page'); // Replace with the URL you expect after submission
    });
});
