import { LoginResponseDto } from "../dtos/LoginResponseDto";

export const getAllowedRoutesFromLoginResponseDto = (loginResponse: LoginResponseDto) => {
    const allowedRoutes = loginResponse.menu.map((menu) => menu.Route);
    return allowedRoutes;
}