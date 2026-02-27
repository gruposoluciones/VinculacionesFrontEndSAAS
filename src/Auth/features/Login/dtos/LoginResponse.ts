import { ApiResponse } from "@shared/types/api";

type LoginSuccessData = {
    token: string;
    userId: string;
}

export type LoginResponse = ApiResponse<LoginSuccessData>;