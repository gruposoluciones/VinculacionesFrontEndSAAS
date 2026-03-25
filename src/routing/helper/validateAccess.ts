import { NextRequest, NextResponse } from "next/server";
import { IRoute } from "../interfaces/IRoute";

export const validateAccess = (routes: IRoute[], request: NextRequest) => {
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith("/auth/login")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    if (pathname.startsWith("/auth/registrar")) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    const route = routes.includes(pathname);
    if (!route) {
        return NextResponse.redirect(new URL("/not-found", request.url));
    }
    return NextResponse.next();
}

