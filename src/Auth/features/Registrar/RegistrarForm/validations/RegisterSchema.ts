import * as z from "zod";

export const RegisterSchema = z.object({
    username: z.string().min(5, "El username debe tener al menos 5 caracteres."),
    email: z.string().email("Debe ingresar un formato de correo válido."),
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres."),
    primerNombre: z.string().min(1, "El primer nombre es requerido."),
    segundoNombre: z.string().optional(),
    apellidoPaterno: z.string().min(1, "El apellido paterno es requerido."),
    apellidoMaterno: z.string().min(1, "El apellido materno es requerido."),
    fechaNacimiento: z.string().min(1, "La fecha de nacimiento es requerida."),
    idTipoDocIden: z.number().optional().default(1),
    nroDocIdentidad: z.string().regex(/^\d{8}$/, "Debe tener exactamente 8 dígitos."),
    nroTelefono: z.string().min(1, "El número de teléfono es requerido."),
}).refine((data) => {
    const birthDate = new Date(data.fechaNacimiento);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 18;
}, {
    message: "Debes ser mayor de 18 años para registrarte.",
    path: ["fechaNacimiento"],
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;