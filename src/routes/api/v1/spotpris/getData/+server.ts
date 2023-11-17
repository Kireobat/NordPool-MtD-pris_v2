import { apiAuth } from '$lib/utils/api/apiAuth.js';
import { convertFromEUROperMWhToNOKperKWh } from '$lib/utils/api/convertFromEUROperMWhToNOKperKWh';
import { NORDPOOL_URL, getTodaysPriceRaw } from '$lib/utils/api/getTodaysPriceRaw.js';
import type { PricesInterface, DataToSaveInterface } from '$lib/interfaces.js';
import { EURO_URL, getNOKperEURO } from '$lib/utils/api/getNOKperEURO';
import fs from 'fs';
import { addInfo } from '$lib/utils/api/addInfo.js';

export async function GET(request) {

    const timerStart = Date.now();

    try {
        apiAuth(request);
    } catch (error) {
        return new Response(`Unauthorized: ${(error as Error).message}`, { status: 401 });
    }

    const pathToJSON = 'src/lib/data/prices.json';

    // Read existing data from the file
    const existingData = JSON.parse(fs.readFileSync(pathToJSON, 'utf-8'));

    const newstDate = new Date(existingData[existingData.length - 1]?.info.date);

    if (newstDate.toDateString() === new Date().toDateString()) {
        const body = "already saved";

        const init = {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return new Response(JSON.stringify(body), init);
    }


    const rawPrices: PricesInterface = await getTodaysPriceRaw();

    const NOKperEURO = await getNOKperEURO();

    const convertedPrices: PricesInterface = {
        oslo: {
            price: await convertFromEUROperMWhToNOKperKWh(rawPrices.oslo.price, NOKperEURO),
        },
        kristiansand: {
            price: await convertFromEUROperMWhToNOKperKWh(rawPrices.kristiansand.price, NOKperEURO),
        },
        bergen: {
            price: await convertFromEUROperMWhToNOKperKWh(rawPrices.bergen.price, NOKperEURO),
        },
        molde: {
            price: await convertFromEUROperMWhToNOKperKWh(rawPrices.molde.price, NOKperEURO),
        },
        trondheim: {
            price: await convertFromEUROperMWhToNOKperKWh(rawPrices.trondheim.price, NOKperEURO),
        },
        tromso: {
            price: await convertFromEUROperMWhToNOKperKWh(rawPrices.tromso.price, NOKperEURO),
        },
    };

    const timerEnd = Date.now();

    const dataToSave: DataToSaveInterface = {
        info: addInfo(timerEnd - timerStart),
        sources: [
            {
                name: "Nordpool",
                url: NORDPOOL_URL,
            },
            {
                name: "Norges Bank",
                url: EURO_URL,
            }
        ],
        prices: {
            exchangeRate: {
                name: "NOK per EURO",
                value: NOKperEURO,
            },
            convertedPrices: convertedPrices,
            rawPrices: rawPrices,
        }
    }

    // Append the new data to the existing data
    existingData.push(dataToSave);

    // Write the updated data back to the file
    fs.writeFileSync(pathToJSON, JSON.stringify(existingData));

    const body = "success";

    const init = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return new Response(JSON.stringify(body), init);
}