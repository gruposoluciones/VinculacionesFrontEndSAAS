export type RegisterRequest = {
    username: string
    email: string
    password: string
    primerNombre: string
    segundoNombre?: string
    apellidoPaterno: string
    apellidoMaterno: string
    fechaNacimiento: string
    idTipoDocIden: number
    nroDocIdentidad: string
    nroTelefono: string
}