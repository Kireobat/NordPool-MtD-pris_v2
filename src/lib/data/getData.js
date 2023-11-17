import puppeteer from 'puppeteer';
import fs from 'fs';
import fetch from 'node-fetch';
import { get } from 'http';

const date = new Date();
const formatedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);
console.log(formatedDate);

const NORDPOOL_URL = 'https://www.nordpoolgroup.com/en/Market-data1/Dayahead/Area-Prices/NO/Daily/?view=table';
const EURO_URL = `https://data.norges-bank.no/api/data/EXR/B.EUR.NOK.SP?format=sdmx-json&startPeriod=${formatedDate}&endPeriod=${formatedDate}&locale=no`;

let NOKperEURO = 0;


const getNOKperEURO = async () => {
    try {
        const response = await fetch(EURO_URL);
        /**
         * @type {any}
         */
        const data = await response.json();

        return NOKperEURO = data.data.dataSets[0].series['0:0:0:0'].observations['0'][0]
    } catch (error) {
        console.log(error);
    }
}

getNOKperEURO();

/**
 * Retrieves the current electricity prices for different cities from NordPool's website.
 * @async
 * @function getPrice
 * @returns {Promise<void>}
 */
const getPrice = async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto(NORDPOOL_URL);

    // Wait for the table to load
    await page.waitForSelector('div[nps-sortable-data-table]');

    /**
     * @typedef {Object} City
     * @property {string} selector - The CSS selector for the city's price element.
     * @property {number} price - The current price for the city.
     */

    /** @type {Object<string, City>} */
    const cities = {
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

    for (let key in cities) {

        /**
         * @type {string}
         */
        const cityKey = key;

        const priceString = await page.$eval(cities[cityKey].selector, el => el.textContent);

        /**
         * @type {number}
         */
        if (priceString != null) {
            const price = parseFloat(priceString.replace(',', '.'));
        }
        
    }
}

getPrice();