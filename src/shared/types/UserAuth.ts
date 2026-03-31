import { Establishment } from "./Establishment";
import { Role } from "./Role";

export interface UserLogged {
    id: number;
    role: Role;
    username: string;
    establishment: Establishment;
}
export interface UserAnonymous {
    id: null;
    role: null;
    username: null;
    establishment: null;
}

export type UserAuth = UserLogged | UserAnonymous;