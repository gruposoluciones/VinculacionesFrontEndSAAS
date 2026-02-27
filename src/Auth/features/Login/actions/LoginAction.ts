"use server";

import { LoginRequest } from "../dtos/LoginRequest";
import { LoginResponse } from "../dtos/LoginResponse";

export const LoginAction = async (credentials: LoginRequest) => {
    const data = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const response = await data.json();
    return response;
}

export const LoginActionMock = async (credentials: LoginRequest): Promise<LoginResponse> => {
    return new Promise(async (resolve) => {
        setTimeout(() => {

            if (credentials.email === "admin@ejemplo.com" && credentials.password === "123") {
                resolve({
                    success: true,
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                    userId: "1",
                });
            }
            resolve({
                success: false,
                statusCode: 404,
                error: "Not found",
                message: "Las credenciales son incorrectas.",
            });
        }, 2000);
    });
}