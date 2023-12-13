import type { EndpointInterface } from "$lib/interfaces";

/**
 * Returns an array of all endpoints within the /api/v1/ path.
 * @returns {EndpointInterface[]} An array of Endpoint objects.
 */

// TODO automatically generate this file from the endpoints in the routes folder.
export function getV1Endpoints(): EndpointInterface[] {
    // FILEPATH
    const endpoints: EndpointInterface[] = [
        {
            method: 'GET',
            path: '/api/v1/spotpris/all',
            description: 'Returns all data availiable.'
        },
        {
            method: 'GET',
            path: '/api/v1/spotpris/averageThisMonth',
            description: 'Returns the average price this month for all regions with the change from last month.'
        },
        {
            method: 'GET',
            path: '/api/v1/spotpris/averageLastMonth',
            description: 'Returns the average price last month for all regions.'
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
