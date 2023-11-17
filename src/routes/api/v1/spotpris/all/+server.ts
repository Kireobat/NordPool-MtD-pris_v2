import pricesJSON from '$lib/data/prices.json';
import { addInfo } from '$lib/utils/api/addInfo';

export function GET() {

    const timerStart = Date.now();

    const timerEnd = Date.now();
    const body = {
        info: addInfo(timerEnd - timerStart),
        data: pricesJSON,
    };

    const init = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return new Response(JSON.stringify(body), init);
}