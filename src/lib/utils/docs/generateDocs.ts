import type { Endpoint } from "$lib/interfaces";

/**
 * Returns an array of all endpoints within the /api/v1/ path.
 * @returns {Endpoint[]} An array of Endpoint objects.
 */
export function getV1Endpoints(): Endpoint[] {
    // FILEPATH
    const endpoints: Endpoint[] = [
        {
            method: 'GET',
            path: '/api/v1/spotpris/all',
            description: 'Returns all data availiable.'
        },
        {
            method: 'GET',
            path: '/api/v1/spotpris/average_this_month',
            description: 'Returns the average price this month.'
        },
        {
            method: 'GET',
            path: '/api/v1/spotpris/date?date=[replace with date]',
            description: 'Returns the price at the given date. Format: YYYY-MM-DD'
        },
        {
            method: 'GET',
            path: '/api/v1/spotpris/getData?key=[replace with key]',
            description: 'Updates the data in the database. Requires a key.'
        }
        // Add more endpoints here...
    ];

    return endpoints;
}
