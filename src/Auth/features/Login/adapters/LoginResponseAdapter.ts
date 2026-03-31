import { LoginResponse } from "../dtos/LoginResponse"
import { LoginResponseDto } from "../dtos/LoginResponseDto"
import { MenuItem } from "@shared/types/MenuItem";
import { Establishment } from "@shared/types/Establishment";
import { Role } from "@shared/types/Role";

export const fromLoginResponseToLoginResponseDto = (loginResponse: LoginResponse): LoginResponseDto => {
    const menu = JSON.parse(loginResponse.menus) as MenuItem[]
    const establishments = JSON.parse(loginResponse.establishments) as Establishment[];
    const roles = JSON.parse(loginResponse.roles) as Role[];
    return {
        id: loginResponse.id,
        username: loginResponse.username,
        token: loginResponse.token,
        role: roles.at(0) as Role,
        establishment: establishments.at(0) as Establishment,
        menu: menu
    }
}