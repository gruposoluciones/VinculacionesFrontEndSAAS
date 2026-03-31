"use server";

import { CreateResult, Result } from "@shared/types/Result";
import { LoginRequest } from "../dtos/LoginRequest";
import { LoginResponse } from "../dtos/LoginResponse";
import { ResultCode } from "@shared/types/ResultCode";
import { cookies } from "next/headers";
import { LoginResponseDto } from "../dtos/LoginResponseDto";
import { fromLoginResponseToLoginResponseDto } from "../adapters/LoginResponseAdapter";
import { getAllowedRoutesFromLoginResponseDto } from "../helpers/getAllowedRoutes";

export const LoginAction = async (credentials: LoginRequest): Promise<Result<LoginResponseDto>> => {
    const cookieStore = await cookies();
    try {
        const response = await fetch("http://localhost:5197/api/Auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        if (!response.ok) {
            return CreateResult.fail("Error al conectar con el servidor", ResultCode.INTERNAL_SERVER_ERROR);
        }
        const res: Result<LoginResponse> = await response.json();
        if (!res.data) {
            return CreateResult.fail(res.error ?? "Error al conectar con el servidor", res.statusCode);
        }
        const LoginResponseDto = fromLoginResponseToLoginResponseDto(res.data as LoginResponse);
        const allowedRoutes = getAllowedRoutesFromLoginResponseDto(LoginResponseDto);
        cookieStore.set("session", JSON.stringify(
            {
                token: LoginResponseDto.token,
                allowedRoutes: allowedRoutes,
            }
        ), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 30,
        });

        return CreateResult.success(LoginResponseDto, ResultCode.SUCCESS);
    } catch (error) {
        const err = error as Error;
        console.error(err.message);
        return CreateResult.fail("Hubo un error al iniciar sesion", ResultCode.INTERNAL_SERVER_ERROR);
    }
}

export const LoginActionMock = async (credentials: LoginRequest): Promise<Result<LoginResponseDto>> => {

    return new Promise(async (resolve) => {
        const cookieStore = await cookies();
        setTimeout(() => {
            if (credentials.email === "admin@ejemplo.com" && credentials.password === "123") {
                const data: LoginResponse = {
                    id: 1,
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                    username: "admin",
                    roles: JSON.stringify([
                        {
                            "RoleId": 1,
                            "RoleName": "admin"
                        }
                    ]),
                    establishments: JSON.stringify([
                        {
                            "EstablishmentId": 1,
                            "EstablishmentName": "Diviac"
                        }
                    ]),
                    menus: JSON.stringify([
                        {
                            MenuId: 1,
                            MenuName: "Dashboard",
                            Route: "/dashboard",
                            ParentId: null,
                            Read: true,
                            Created: true,
                            Updated: true,
                            Deleted: true,
                        },
                    ])
                };
                cookieStore.set("session", JSON.stringify(
                    {
                        token: data.token,
                        allowedRoutes: [
                            "/dashboard",
                            "/dashboard/usuarios",
                            "/dashboard/establecimientos",
                            "/perfil"
                        ],
                    }
                ), {
                    httpOnly: true,
                    secure: true,
                    maxAge: 60 * 60 * 24 * 30,
                });
                const LoginResponseDto = fromLoginResponseToLoginResponseDto(data as LoginResponse);
                resolve(CreateResult.success(LoginResponseDto, ResultCode.SUCCESS));
            }
            resolve(CreateResult.fail("Usuario o contraseña incorrectos", ResultCode.UNAUTHORIZED));
        }, 2000);
    });
}