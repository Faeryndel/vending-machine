import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5000/');

    await expect(page.locator('#message')).toHaveText(/INSERT COIN/);

    await expect(page.locator('.coin[data-weight="2.35"]')).toHaveText(/Penny/)
    await expect(page.locator('.coin[data-weight="3.95"]')).toHaveText(/Nikel/)
    await expect(page.locator('.coin[data-weight="7.75"]')).toHaveText(/Dime/)
    await expect(page.locator('.coin[data-weight="4.4"]')).toHaveText(/Quarter/)

    await expect(page.locator('.product[data-product-id="0"]')).toHaveText(/Cola/)
    await expect(page.locator('.product[data-product-id="1"]')).toHaveText(/Chips/)
    await expect(page.locator('.product[data-product-id="2"]')).toHaveText(/Candy/)
});

test.describe('Vending machine Kata', () => {

    test('Test INVALID COIN', async ({ page }) => {
        await page.locator('.coin[data-weight="2.35"]').click()
        await expect(page.locator('#message')).toHaveText(/INVALID COIN/)
    });

    test('Test VALID COIN', async ({ page }) => {
        await page.locator('.coin[data-weight="3.95"]').click()
        await expect(page.locator('#message')).toHaveText(/\$0.05/)

        await page.locator('#return-coin').click()
        await expect(page.locator('#message')).toHaveText(/INSERT COIN/)

        await page.locator('.coin[data-weight="7.75"]').click()
        await expect(page.locator('#message')).toHaveText(/\$0.1/)

        await page.locator('#return-coin').click()
        await expect(page.locator('#message')).toHaveText(/INSERT COIN/)

        await page.locator('.coin[data-weight="4.4"]').click()
        await expect(page.locator('#message')).toHaveText(/\$0.25/)

        await page.locator('#return-coin').click()
        await expect(page.locator('#message')).toHaveText(/INSERT COIN/)
    });

    test('Test SOLD OUT', async ({ page }) => {
        await page.locator('.product[data-product-id="1"]').click()
        await expect(page.locator('#message')).toHaveText(/SOLD OUT/)
    });

    test('Test EXACT CHANGE ONLY', async ({ page }) => {

        await page.locator('.coin[data-weight="3.95"]').click()
        await expect(page.locator('#message')).toHaveText(/\$0.05/)

        await page.locator('.product[data-product-id="0"]').click()
        await expect(page.locator('#message')).toHaveText(/EXACT CHANGE ONLY/)

        await page.waitForSelector('#message')

        await page.locator('.product[data-product-id="2"]').click()
        await expect(page.locator('#message')).toHaveText(/EXACT CHANGE ONLY/)
    });

    test('Test THANK YOU', async ({ page }) => {

        await page.locator('.coin[data-weight="4.4"]').click()
        await page.locator('.coin[data-weight="4.4"]').click()
        await page.locator('.coin[data-weight="7.75"]').click()
        await page.locator('.coin[data-weight="3.95"]').click()
        await expect(page.locator('#message')).toHaveText(/\$0.65/)

        await page.locator('.product[data-product-id="2"]').click()
        await expect(page.locator('#message')).toHaveText(/THANK YOU/)
    });
    
})
