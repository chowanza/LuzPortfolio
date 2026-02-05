"use client";

import { useLanguage } from "@/components/language-provider";
import { Mail, Phone, Linkedin, Figma, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        {t("contact.title")}
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t("contact.desc")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Contact Details</h3>

                            <div className="space-y-6">
                                <a href="mailto:Luzgabrielass.03@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">Luzgabrielass.03@gmail.com</span>
                                </a>

                                <a href="tel:+584249579812" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-lg">+58 424-9579812</span>
                                </a>
                            </div>
                        </div>



                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="https://www.linkedin.com/in/luzgabriela-ux/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 w-full sm:w-auto"
                            >
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>

                            <a
                                href="https://www.figma.com/design/i7z7FK87DexzaBxenmGNIH/Portafolio---Luz-Gabriela-Sanchez?node-id=0-1&t=piljulM2iqhbiRpY-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-white/10 w-full sm:w-auto"
                            >
                                <Figma className="w-5 h-5" />
                                Figma
                            </a>

                            <a
                                href="https://wa.link/blyf3x"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 w-full sm:w-auto"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Quick Form (mailto) */}
                    <form
                        action="mailto:Luzgabrielass.03@gmail.com"
                        method="post"
                        encType="text/plain"
                        className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-colors"
                    >
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.form.name")}</label>
                                <input type="text" name="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.form.email")}</label>
                                <input type="email" name="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t("contact.form.message")}</label>
                                <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" required></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                                {t("contact.form.send")}
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section >
    );
}
