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
import Link from "next/link"
import { useForm } from "react-hook-form"
import { LoginRequest } from "@Auth/features/Login/dtos/LoginRequest"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "./validations/LoginSchema"
import { LoginFormErrorAlert } from "./LoginErrorAlert"
import { useState } from "react"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useLoginMutation } from "../hooks/useLoginMutation"
import { LoginResponse } from "../dtos/LoginResponse"
import { redirect } from "next/navigation"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Result } from "@shared/types/Result"

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const { mutate, isPending, error } = useLoginMutation();
    const { handleSubmit, register, formState: { errors } } = useForm<LoginRequest>({
        resolver: zodResolver(LoginSchema),
    });

    const handleLogin = (credentials: LoginRequest) => {

        mutate(credentials, {
            onSuccess: (res: Result<LoginResponse>) => {
                if (!res.error) {
                    console.log(res.data);
                    toast.success("Sesion iniciada satisfactoriamente.");
                    router.push("/");
                }
                if (res.error) {
                    toast.success(res.error);
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
                    <CardTitle className="text-center">Iniciar Sesión</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Correo</FieldLabel>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="tucorreo@example.com"
                                    disabled={isPending}
                                    {...register("email")}
                                />
                                <LoginFormErrorAlert title={errors.email?.message} />
                            </Field>
                            <Field>
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                                    <Link
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>
                                <div className="flex items-center">
                                    <Input id="password" type={showPassword ? 'text' : 'password'} {...register("password")} disabled={isPending} />
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


                                <LoginFormErrorAlert title={errors.password?.message} />
                            </Field>
                            <Field>
                                <Button type="submit" disabled={isPending}>
                                    {isPending ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Cargando...</span>
                                        </div>
                                    ) : (
                                        'Iniciar Sesión'
                                    )}
                                </Button>
                                <FieldDescription className="text-center">
                                    ¿Aún no tienes una cuenta? <Link href="/auth/registrar">Registrate</Link>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
