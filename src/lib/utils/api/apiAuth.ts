import type { RequestEvent } from "../../../routes/api/v1/spotpris/getData/$types";
import { UnauthorizedError } from "$lib/errors/errors";

export const apiAuth = (request: RequestEvent) => {

    const API_KEY = request.url.searchParams.get('key');

    if (API_KEY !== "test") {
        throw new UnauthorizedError("Invalid API key");
    }
}