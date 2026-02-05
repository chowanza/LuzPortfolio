"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Navbar() {
    return (
        <nav className="h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-50 transition-colors">
            <Link href="/" className="font-bold text-sm md:text-xl tracking-tight text-slate-900 dark:text-slate-100 truncate max-w-[200px] md:max-w-none">
                <span className="md:hidden">Ing. Luz Gabriela</span>
                <span className="hidden md:inline">Ing. Luz Gabriela Sanchez Saturnino - Product Designer</span>
            </Link>

            <div className="flex items-center gap-4">
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
