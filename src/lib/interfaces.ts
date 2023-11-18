import type { AddInfoReturnType } from './utils/api/addInfo';

interface PriceInterface {
    selector?: string,
    price: number,
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

export interface EndpointInteface {
    method: string;
    path: string;
    description: string;
}

export interface RegionInterface {
    name: string;
}