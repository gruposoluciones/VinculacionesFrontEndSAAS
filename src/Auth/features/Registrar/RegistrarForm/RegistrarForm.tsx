"use client"
import { cn } from "@shared/lib/utils"
import { Button } from "@shared/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@shared/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@shared/components/ui/field"
import { Input } from "@shared/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@shared/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@shared/components/ui/popover"
import { Calendar } from "@shared/components/ui/calendar"
import Link from "next/link"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema, RegisterFormData } from "./validations/RegisterSchema"
import { RegistrarFormErrorAlert } from "./RegistrarErrorAlert"
import { useState } from "react"
import { Eye, EyeOff, Loader2, Calendar as CalendarIcon } from "lucide-react"
import { useRegisterMutation } from "../hooks/useRegisterMutation"
import { RegisterResponse } from "../dtos/RegisterResponse"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Result } from "@shared/types/Result"
import { format } from "date-fns"

export function RegistrarForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const { mutate, isPending } = useRegisterMutation();
    const { handleSubmit, register, setValue, formState: { errors }, control } = useForm({
        resolver: zodResolver(RegisterSchema),
    });
    const fechaNacimientoValue = useWatch({ control, name: "fechaNacimiento" });

    const handleRegister = (data: RegisterFormData) => {
        mutate(data, {
            onSuccess: (res: Result<RegisterResponse>) => {
                if (!res.error) {
                    toast.success("Usuario registrado correctamente.");
                }
            },
            onError: (error) => {
                toast.error(error.message);
            },
        });
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-center">Crear Cuenta</CardTitle>
                    <CardDescription className="text-center">
                        Ingresa tus datos para registrarte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="username">Username</FieldLabel>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Tu username"
                                    disabled={isPending}
                                    {...register("username")}
                                />
                                <RegistrarFormErrorAlert title={errors.username?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">Correo</FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="tucorreo@example.com"
                                    disabled={isPending}
                                    {...register("email")}
                                />
                                <RegistrarFormErrorAlert title={errors.email?.message} />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                                </div>
                                <div className="flex items-center">
                                    <Input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        {...register("password")}
                                        disabled={isPending}
                                        placeholder="Mínimo 8 caracteres"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        disabled={isPending}
                                        className="transition-colors disabled:cursor-not-allowed -ml-10 z-10 p-2"
                                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                    >
                                        {showPassword ? (
                                            <Eye className="w-5 h-5" />
                                        ) : (
                                            <EyeOff className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <RegistrarFormErrorAlert title={errors.password?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="primerNombre">Primer Nombre</FieldLabel>
                                <Input
                                    id="primerNombre"
                                    type="text"
                                    placeholder="Tu primer nombre"
                                    disabled={isPending}
                                    {...register("primerNombre")}
                                />
                                <RegistrarFormErrorAlert title={errors.primerNombre?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="segundoNombre">Segundo Nombre (Opcional)</FieldLabel>
                                <Input
                                    id="segundoNombre"
                                    type="text"
                                    placeholder="Tu segundo nombre"
                                    disabled={isPending}
                                    {...register("segundoNombre")}
                                />
                                <RegistrarFormErrorAlert title={errors.segundoNombre?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="apellidoPaterno">Apellido Paterno</FieldLabel>
                                <Input
                                    id="apellidoPaterno"
                                    type="text"
                                    placeholder="Tu apellido paterno"
                                    disabled={isPending}
                                    {...register("apellidoPaterno")}
                                />
                                <RegistrarFormErrorAlert title={errors.apellidoPaterno?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="apellidoMaterno">Apellido Materno</FieldLabel>
                                <Input
                                    id="apellidoMaterno"
                                    type="text"
                                    placeholder="Tu apellido materno"
                                    disabled={isPending}
                                    {...register("apellidoMaterno")}
                                />
                                <RegistrarFormErrorAlert title={errors.apellidoMaterno?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="fechaNacimiento">Fecha de Nacimiento</FieldLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !fechaNacimientoValue && "text-muted-foreground"
                                            )}
                                            disabled={isPending}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {fechaNacimientoValue ? format(new Date(fechaNacimientoValue), "dd/MM/yyyy") : "Selecciona una fecha"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={fechaNacimientoValue ? new Date(fechaNacimientoValue) : undefined}
                                            onSelect={(date) => {
                                                if (date) {
                                                    setValue("fechaNacimiento", date.toISOString(), { shouldValidate: true });
                                                }
                                            }}
                                            captionLayout="dropdown"
                                            fromYear={1900}
                                            toYear={new Date().getFullYear()}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            className="rounded-md border"
                                        />
                                    </PopoverContent>
                                </Popover>
                                <RegistrarFormErrorAlert title={errors.fechaNacimiento?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="idTipoDocIden">Tipo de Documento</FieldLabel>
                                <Select defaultValue="1" disabled>
                                    <SelectTrigger id="idTipoDocIden">
                                        <SelectValue placeholder="DNI" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">DNI</SelectItem>
                                    </SelectContent>
                                </Select>
                                <RegistrarFormErrorAlert title={errors.idTipoDocIden?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="nroDocIdentidad">Número de Documento</FieldLabel>
                                <Input
                                    id="nroDocIdentidad"
                                    type="text"
                                    placeholder="Tu número de documento"
                                    disabled={isPending}
                                    {...register("nroDocIdentidad")}
                                    maxLength={8}
                                />
                                <RegistrarFormErrorAlert title={errors.nroDocIdentidad?.message} />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="nroTelefono">Teléfono</FieldLabel>
                                <Input
                                    id="nroTelefono"
                                    type="tel"
                                    placeholder="Tu número de teléfono"
                                    disabled={isPending}
                                    {...register("nroTelefono")}
                                />
                                <RegistrarFormErrorAlert title={errors.nroTelefono?.message} />
                            </Field>
                            <Field>
                                <Button type="submit" disabled={isPending} className="w-full">
                                    {isPending ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Registrando...</span>
                                        </div>
                                    ) : (
                                        'Registrarse'
                                    )}
                                </Button>
                                <FieldDescription className="text-center">
                                    ¿Ya tienes una cuenta? <Link href="/auth/login">Inicia sesión</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
