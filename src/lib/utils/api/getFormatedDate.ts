
export const getFormatedDate = (date: Date) => {
    const formatedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate() - 1);
    return formatedDate;
}