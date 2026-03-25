"use client"
import { LogoutAction } from "@shared/actions/LogoutAction";
import { useAuthStore } from "../../../../../store/useAuthStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useSidebar = () => {
    const { user, menu, logout: logoutStore } = useAuthStore();
    const router = useRouter();
    const logout = async () => {
        const result = await LogoutAction();
        if (!result.success) {
            toast.error(result.error);
        }
        logoutStore();
        toast.success("Sesión cerrada satisfactoriamente.");
        router.refresh();
    }
    return { user, menu, logout }
}