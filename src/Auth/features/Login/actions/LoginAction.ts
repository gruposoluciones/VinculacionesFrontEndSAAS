"use server";

import { CreateResult, Result } from "@shared/types/Result";
import { LoginRequest } from "../dtos/LoginRequest";
import { LoginResponse } from "../dtos/LoginResponse";
import { ResultCode } from "@shared/types/ResultCode";

export const LoginAction = async (credentials: LoginRequest): Promise<Result<LoginResponse>> => {
    try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const res: Result<LoginResponse> = await response.json();
        if (!res.data) {
            return CreateResult.fail(res.error ?? "Error al conectar con el servidor", res.statusCode);
        }
        return CreateResult.success(res.data, ResultCode.SUCCESS);
    } catch (error) {

        const err = error as Error;
        console.error(err.message);

        return CreateResult.fail("Hubo un error al iniciar sesion", ResultCode.INTERNAL_SERVER_ERROR);
    }
}

export const LoginActionMock = async (credentials: LoginRequest): Promise<Result<LoginResponse>> => {
    return new Promise(async (resolve) => {
        setTimeout(() => {
            if (credentials.email === "admin@ejemplo.com" && credentials.password === "123") {
                const data: LoginResponse = {
                    id: "1",
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                    username: "admin",
                };
                resolve(CreateResult.success(data, ResultCode.SUCCESS));
            }
            resolve(CreateResult.fail("Usuario o contraseña incorrectos", ResultCode.UNAUTHORIZED));
        }, 2000);
    });
}