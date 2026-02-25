"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Navbar() {
    return (
        <nav className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-4 md:px-6 sticky top-0 z-50 transition-colors">
            {/* Left Spacer (Desktop only) */}
            <div className="flex-1 hidden md:block"></div>

            <Link href="/" className="font-bold text-[15px] sm:text-base md:text-xl tracking-tight text-slate-900 dark:text-slate-100 truncate flex-1 min-w-0 md:flex-initial md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 mr-2 md:mr-0">
                <span className="md:hidden">Ing. Luz Gabriela</span>
                <span className="hidden md:inline">Ing. Luz Gabriela Sanchez Saturnino - Product Designer</span>
            </Link>

            <div className="flex-1 flex items-center justify-end gap-1.5 sm:gap-2 md:gap-4 shrink-0 relative z-20">
                <LanguageToggle />
                <ThemeToggle />
                {/* Avatar Small */}
                <div className="w-8 h-8 rounded-full overflow-hidden relative border border-slate-200 dark:border-slate-700 shrink-0 ml-1">
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
