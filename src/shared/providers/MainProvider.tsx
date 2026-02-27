"use client"
import { ProviderProps } from "./Provider.interface";
import { QueryProvider } from "./QueryProvider"
import { ThemeProvider } from "./ThemeProvider";

export function MainProvider({ children }: ProviderProps) {
    return (
        <ThemeProvider>
            <QueryProvider>
                {children}
            </QueryProvider>
        </ThemeProvider>
    );
}