import { NextRequest, NextResponse } from "next/server";
import { validateAccess } from "./routing/helper/validateAccess";

export const proxy = (request: NextRequest) => {

    const { cookies, nextUrl: { pathname } } = request;
    const session = cookies.get("session")?.value;

    if (pathname.startsWith("/auth/login") && !session) {
        return NextResponse.next();
    }
    if (pathname.startsWith("/auth/registrar") && !session) {
        return NextResponse.next();
    }
    if (pathname.startsWith("/not-found")) {
        return NextResponse.next();
    }
    if (!session) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    const { token, allowedRoutes } = JSON.parse(session);

    return validateAccess(allowedRoutes, request);
}

export const config = {
    matcher: [
        // Exclude API routes, static files, image optimizations, and .png files
        '/((?!api|_next/static|_next/image|.*\\.png$).*)',
    ],
}