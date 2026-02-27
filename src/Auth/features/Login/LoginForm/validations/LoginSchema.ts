import * as z from "zod";

export const LoginSchema = z.object({
    email: z.email("Debe ingresar un formato de correo válido."),
    password: z.string().min(1, { error: "La contraseña es requerida." }),
});