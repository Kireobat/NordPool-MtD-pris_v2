import type { AddInfoReturnType } from './utils/api/addInfo';

interface PriceInterface {
    selector?: string,
    price: number,
    change?: number,
}

export interface PricesInterface {
    oslo: PriceInterface,
    kristiansand: PriceInterface,
    bergen: PriceInterface,
    molde: PriceInterface,
    trondheim: PriceInterface,
    tromso: PriceInterface,
    [key: string]: PriceInterface;
}

export interface DataToSaveInterface {
    info: AddInfoReturnType,
    sources: {
        name: string,
        url: string,
    }[],
    prices: {
        exchangeRate: {
            name: string,
            value: number,
        },
        convertedPrices: PricesInterface,
        rawPrices: PricesInterface,
    },
}

export interface EndpointInterface {
    method: string;
    path: string;
    description: string;
}

export interface RegionInterface {
    name: string;
    price: number;
    change?: number;
    prefix?: "+" | "-";
}

export interface EndpointColor {
    GET: string;
    POST: string;
    PUT: string;
    DELETE: string;
    [key: string]: string;
}