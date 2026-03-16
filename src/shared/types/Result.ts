export class Result<T> {
    public success: boolean;
    public data: T | null;
    public error: string | null;
    public statusCode: number;

    private constructor(success: boolean, data: T | null, error: string | null, statusCode: number) {
        this.success = success;
        this.data = data;
        this.error = error;
        this.statusCode = statusCode;
    }

    static success<U>(data: U, statusCode: number): Result<U> {
        return new Result<U>(true, data, null, statusCode);
    }

    static fail<U>(error: string, statusCode: number): Result<U> {
        return new Result<U>(false, null, error, statusCode);
    }
}
