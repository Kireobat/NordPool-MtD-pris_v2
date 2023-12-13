import pricesJSON from '$lib/data/prices.json';
import { addInfo } from '$lib/utils/api/addInfo';
import type { PricesInterface } from '$lib/interfaces';

export async function GET() {

    const timerStart = Date.now();

    const currentMonth = new Date().getMonth();

    const filteredPrices = pricesJSON.filter(price => new Date(price.info.date).getMonth() === currentMonth -1);

    const averagePrices: PricesInterface = {
        oslo: {
            price: 0,
        },
        kristiansand: {
            price: 0,
        },
        bergen: {
            price: 0,
        },
        molde: {
            price: 0,
        },
        trondheim: {
            price: 0,
        },
        tromso: {
            price: 0,
        },
    };

    filteredPrices.forEach(price => {
        for (const key in price.prices.convertedPrices) {
            if (averagePrices.hasOwnProperty(key)) {
                averagePrices[key as keyof typeof averagePrices].price += price.prices.convertedPrices[key as keyof typeof price.prices.convertedPrices].price;
            }
        }
    });

    for (const key in averagePrices) {
        if (averagePrices.hasOwnProperty(key)) {
            averagePrices[key as keyof typeof averagePrices].price /= filteredPrices.length;
        }
    }

    const timerEnd = Date.now();

    const body = {
        info: addInfo(timerEnd - timerStart),
        data: averagePrices,
    };

    const init = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return new Response(JSON.stringify(body), init);
}