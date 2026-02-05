"use client";

import { useParams, useRouter } from "next/navigation";
import { getProjects } from "@/lib/data";
import { MoveLeft, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export default function ProjectDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const { t, language } = useLanguage();

    // Get projects for current language
    const currentProjects = getProjects(language);
    const project = currentProjects.find((p) => p.slug === slug);

    const router = useRouter();

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center dark:bg-slate-950">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
                    <Link href="/" className="text-primary hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // Combine cover image + gallery for the full display list
    const allImages = project.gallery
        ? project.gallery
        : [project.imageUrl];

    // Clean duplicates if the cover image is also in gallery (optional safety)
    const uniqueImages = Array.from(new Set(allImages));

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
            <div className="container-custom pt-10 pb-20">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors font-medium text-sm mb-8"
                >
                    <MoveLeft className="w-4 h-4" />
                    {t("nav.work") || "Back"}
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono border border-slate-200 dark:border-slate-700 uppercase tracking-wider">
                            {project.type}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        {project.title}
                    </h1>
                    {project.description && (
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
                            {project.description}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {project.techSpecs.map((spec) => (
                            <span
                                key={spec}
                                className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-md text-sm font-medium"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-1 gap-8 md:gap-12">
                    {uniqueImages.map((img, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            key={index}
                            className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm"
                        >
                            {/* Using simple <img> for full width, or next/image with responsive generic sizes */}
                            <Image
                                src={img}
                                alt={`${project.title} - View ${index + 1}`}
                                width={1920}
                                height={1080}
                                className="w-full h-auto object-cover"
                                quality={90}
                            />
                        </motion.div>
                    ))}
                </div>



                {/* Footer Navigation */}
                <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-slate-400 text-sm">
                    <span>© Ing.Luz Gabriela Sanchez Saturnino</span>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        {t("project.backToTop")}
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </main>
    );
}
