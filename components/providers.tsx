"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "./language-provider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </NextThemesProvider>
    );
}
