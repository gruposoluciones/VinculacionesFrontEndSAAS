export interface UserLogged {
    id: number;
    role: string;
    username: string;
    establishmentId: number;
}
export interface UserAnonymous {
    id: null;
    role: "";
    username: null;
}

export type UserAuth = UserLogged | UserAnonymous;