"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Navbar() {
    return (
        <nav className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-4 md:px-6 sticky top-0 z-50 transition-colors">
            {/* Left Spacer */}
            <div className="flex-1 flex justify-start hidden md:flex"></div>

            <Link href="/" className="font-bold text-sm md:text-xl tracking-tight text-slate-900 dark:text-slate-100 shrink-0 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max max-w-[50%] md:max-w-none truncate sm:overflow-visible">
                <span className="md:hidden">Ing. Luz Gabriela</span>
                <span className="hidden md:inline">Ing. Luz Gabriela Sanchez Saturnino - Product Designer</span>
            </Link>

            <div className="flex-1 flex items-center justify-end gap-2 md:gap-4 ml-auto">
                <LanguageToggle />
                <ThemeToggle />
                {/* Avatar Small */}
                <div className="w-8 h-8 rounded-full overflow-hidden relative border border-slate-200 dark:border-slate-700">
                    <Image
                        src="/images/ProfileImage.jpg"
                        alt="Luz Gabriela"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </nav>
    );
}
