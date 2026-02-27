"use client"
import { Button } from "@shared/components/ui/button"
import { ToogleTheme } from "@shared/components/ui/toogle-theme"
import Link from "next/link"

export const AuthNavbar = () => {
    return (
        <div className="w-full flex justify-end fixed">
            <div className="p-4 flex gap-3">
                <Link href={"/auth/login"}>
                    <Button variant={"outline"} className="hover:cursor-pointer">
                        Login
                    </Button>
                </Link>
                <Link href={"/auth/register"}>
                    <Button variant={"outline"} className="hover:cursor-pointer">
                        Registrarse
                    </Button>
                </Link>
                <ToogleTheme />
            </div>
        </div>
    )
}
