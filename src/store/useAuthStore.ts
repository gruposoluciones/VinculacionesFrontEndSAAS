import { MenuItem } from '@shared/types/MenuItem';
import { UserAuth, UserLogged } from '@shared/types/UserAuth';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

const initialStateUser: UserAuth = {
    id: null,
    role: "",
    username: null,
};

const initialStateMenus: MenuItem[] = [];

type UserAuthStoreState = {
    user: UserAuth;
    menu: MenuItem[]
}
type AuthStoreActions = {
    login: (user: UserLogged) => void;
    setMenu: (menu: MenuItem[]) => void;
    logout: () => void;
}

type AuthStore = AuthStoreActions & UserAuthStoreState;

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: initialStateUser,
            menu: [],
            login: (user: UserLogged) => set({ user }),
            setMenu: (menu: MenuItem[]) => set({ menu }),
            logout: () => set({ user: initialStateUser, menu: initialStateMenus }),
        }),
        { name: 'as' }
    )
);