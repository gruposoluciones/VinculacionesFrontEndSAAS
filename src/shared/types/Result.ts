export type Result<T> = {
    success: boolean;
    data: T | null;
    error: string | null;
    statusCode: number;
};

export const CreateResult = {
    success: <T>(data: T, statusCode: number): Result<T> => ({
        success: true, data, error: null, statusCode
    }),
    fail: <T>(error: string, statusCode: number): Result<T> => ({
        success: false, data: null, error, statusCode
    }),
};