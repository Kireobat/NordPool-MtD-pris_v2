import puppeteer from 'puppeteer';
import { delay } from "$lib/utils/api/delay";
import type { PricesInterface } from '$lib/interfaces';

export const NORDPOOL_URL = 'https://www.nordpoolgroup.com/en/Market-data1/Dayahead/Area-Prices/NO/Daily/?view=table';

export const getTodaysPriceRaw = async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto(NORDPOOL_URL);

    // Wait for the table to load
    await delay(1000);

    let cities: PricesInterface = {
        oslo: {
            selector: 'td[class="sortable"]:nth-of-type(2)',
            price: 0,
        },
        kristiansand: {
            selector: 'td[class="sortable"]:nth-of-type(3)',
            price: 0,
        },
        bergen: {
            selector: 'td[class="sortable"]:nth-of-type(4)',
            price: 0,
        },
        molde: {
            selector: 'td[class="sortable"]:nth-of-type(5)',
            price: 0,
        },
        trondheim: {
            selector: 'td[class="sortable"]:nth-of-type(6)',
            price: 0,
        },
        tromso: {
            selector: 'td[class="sortable"]:nth-of-type(7)',
            price: 0,
        },
    }

    // Get the price for each city

    for (let key in cities) {
        const selector = cities[key].selector;
        if (!selector) {
            throw new Error(`Selector for ${key} is undefined or null`);
        }
        const priceString = await page.$eval(selector, el => el.textContent);
        if (priceString == null || priceString == undefined) {
            throw new Error("Price string is null");
        }
        cities[key].price = parseFloat(priceString.replace(',', '.'));
    }

    // Remove the selector property from the cities object

    for (let key in cities) {
        delete cities[key].selector;
    }

    await page.close();
    await browser.close();

    return cities;
}