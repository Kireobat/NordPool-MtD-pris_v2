export const convertFromEUROperMWhToNOKperKWh = async (EUROperMWh: number, NOKperEURO: number) => {

    const NOKperKWh = (NOKperEURO / 10); // Divide by 10 to convert from MWh to KWh
    const NOK = EUROperMWh * NOKperKWh;

    return NOK;
}