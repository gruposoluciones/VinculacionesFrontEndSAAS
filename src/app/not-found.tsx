import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";

const page = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl">
                <div className="space-y-8 text-center">
                    {/* Decorative Element */}
                    <div className="flex justify-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute inset-8 bg-linear-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
                            <div className="flex items-center justify-center h-full">
                                {/* <div className="text-6xl">😕</div> */}
                                <div className="text-8xl md:text-9xl font-bold bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                                    404
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Página no encontrada
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-md mx-auto">
                            Lo sentimos, la página que buscas no existe. Parece que tomamos un desvío equivocado.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-4 justify-center pt-8">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
                        >
                            <Home size={20} />
                            Ir al inicio
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary/30 text-foreground rounded-full font-semibold hover:bg-primary/10 transition-colors"
                        >
                            Explorar sitio
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Footer Help Text */}
                    {/* <div className="pt-8 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                            ¿Necesitas ayuda? Contáctanos en{' '}
                            <a
                                href="mailto:support@example.com"
                                className="text-primary hover:underline font-semibold"
                            >
                                support@example.com
                            </a>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default page;