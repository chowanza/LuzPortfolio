"use client";

import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all uppercase"
        >
            {language === "en" ? "ES" : "EN"}
        </button>
    );
}
