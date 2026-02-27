export type SuccessResponse<T> = {
    success: true;
} & T;

export type ErrorResponse = {
    success: false;
    statusCode: number;
    error: string;
    message: string;
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;