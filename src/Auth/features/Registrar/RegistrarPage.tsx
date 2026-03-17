
"use client"

import { RegistrarForm } from "./RegistrarForm/RegistrarForm"

export const RegistrarPage = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-md">
                <RegistrarForm />
            </div>
        </div>
    )
}
