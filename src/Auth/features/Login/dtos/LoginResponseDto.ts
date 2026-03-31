import { Establishment } from "@shared/types/Establishment";
import { MenuItem } from "@shared/types/MenuItem";
import { Role } from "@shared/types/Role";
export type LoginResponseDto = {
    id: number;
    username: string;
    token: string;
    role: Role;
    establishment: Establishment;
    menu: MenuItem[];
}