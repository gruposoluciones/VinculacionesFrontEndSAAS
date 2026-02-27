"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProviderProps } from './Provider.interface';

const queryClient = new QueryClient();

export const QueryProvider = ({ children }: ProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
