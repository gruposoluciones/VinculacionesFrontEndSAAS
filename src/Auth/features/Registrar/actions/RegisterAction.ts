"use server";

import { CreateResult, Result } from "@shared/types/Result";
import { RegisterRequest } from "../dtos/RegisterRequest";
import { RegisterResponse } from "../dtos/RegisterResponse";
import { ResultCode } from "@shared/types/ResultCode";

export const RegisterAction = async (data: RegisterRequest): Promise<Result<RegisterResponse>> => {
    try {
        const response = await fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const res: Result<RegisterResponse> = await response.json();
        if (!res.data) {
            return CreateResult.fail(res.error ?? "Error al conectar con el servidor", res.statusCode);
        }
        return CreateResult.success(res.data, ResultCode.SUCCESS);
    } catch (error) {
        const err = error as Error;
        console.error(err.message);
        return CreateResult.fail("Hubo un error al registrar el usuario", ResultCode.INTERNAL_SERVER_ERROR);
    }
}

export const RegisterActionMock = async (data: RegisterRequest): Promise<Result<RegisterResponse>> => {
    return new Promise(async (resolve) => {
        setTimeout(() => {
            if (data.email && data.password && data.username) {
                const response: RegisterResponse = {
                    id: "1",
                    username: data.username,
                    email: data.email,
                    createdAt: "2023-03-01T00:00:00.000Z",
                };
                resolve(CreateResult.success(response, ResultCode.SUCCESS));
            }
            resolve(CreateResult.fail("Error al registrar el usuario", ResultCode.BAD_REQUEST));
        }, 2000);
    });
}
