export type AddInfoReturnType = ReturnType<typeof addInfo>;

export const addInfo = (executionTime: number) => {
    return {
        date: new Date(),
        executionTimeMs: executionTime,
    }
};
