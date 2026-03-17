import { Alert, AlertTitle } from "@shared/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface IRegistrarFormErrorAlert {
    title: string | undefined,
}
export function RegistrarFormErrorAlert({ title }: IRegistrarFormErrorAlert) {
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
