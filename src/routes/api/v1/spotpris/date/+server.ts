import pricesJSON from '$lib/data/prices.json';

export function GET(request) {

    const timerStart = Date.now();
    
    const date = request.url.searchParams.get('date');

    if (!date) {
        const body = {
            error: "No date provided",
        };

        const init = {
            status: 400,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return new Response(JSON.stringify(body), init);
    }

    const filteredPrice = pricesJSON.filter(price =>
        new Date(price.info.date).getFullYear() === new Date(Date.parse(date)).getFullYear() &&
        new Date(price.info.date).getMonth() === new Date(Date.parse(date)).getMonth() &&
        new Date(price.info.date).getDate() === new Date(Date.parse(date)).getDate());

    const timerEnd = Date.now();

    const body = {
        info: {
            date: date,
            ms: timerEnd - timerStart,
        },
        data: filteredPrice,
    };
    
    const init = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return new Response(JSON.stringify(body), init);
}