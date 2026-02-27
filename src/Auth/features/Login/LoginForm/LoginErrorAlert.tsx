import { Alert, AlertTitle } from "@shared/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface ILoginFormErrorAlert {
    title: string | undefined,
}
export function LoginFormErrorAlert({ title }: ILoginFormErrorAlert) {
    return (
        <>
            {
                title && <div className="grid w-full max-w-md items-start gap-4">
                    <Alert variant="destructive">
                        <AlertCircle />
                        <AlertTitle>{title}</AlertTitle>
                    </Alert>
                </div>
            }
        </>
    )
}
