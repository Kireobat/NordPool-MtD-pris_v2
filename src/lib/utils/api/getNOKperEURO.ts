import { getFormatedDate } from "./getFormatedDate";
import fetch from 'node-fetch';

const formatedDate = getFormatedDate(new Date());

export const EURO_URL = `https://data.norges-bank.no/api/data/EXR/B.EUR.NOK.SP?format=sdmx-json&startPeriod=${formatedDate}&endPeriod=${formatedDate}&locale=no`;

let NOKperEURO = 0;

export const getNOKperEURO = async () => {
    try {
        const response = await fetch(EURO_URL);
        // fix this
        const data: any = await response.json();

        return NOKperEURO = data.data.dataSets[0].series['0:0:0:0'].observations['0'][0]
    } catch (error) {
        console.log(error);
        return error+""
    }
}