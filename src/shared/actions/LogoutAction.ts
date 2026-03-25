"use server";

import { CreateResult, Result } from "@shared/types/Result";
import { cookies } from "next/headers";

export const LogoutAction = async (): Promise<Result<null>> => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    if (!cookieStore.get("session")) {
        return CreateResult.fail("No se pudo cerrar sesión", 401);
    }
    return CreateResult.success(null, 200);
}
