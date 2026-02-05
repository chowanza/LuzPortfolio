"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

import Link from "next/link";

interface ProjectCardProps {
    slug: string;
    title: string;
    type: string;
    techSpecs: string[];
    imageUrl?: string;
    className?: string;
}

export function ProjectCard({
    slug,
    title,
    type,
    techSpecs,
    imageUrl,
    className,
}: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`} className="block h-full">
            <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                    "group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-primary/20 transition-all h-full flex flex-col",
                    className
                )}
            >
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-100 shrink-0">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-50">
                            <span className="font-mono text-sm">No Preview</span>
                        </div>
                    )}
                </div>

                <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
                            {type}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {techSpecs.map((spec) => (
                            <span
                                key={spec}
                                className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-mono border border-slate-200"
                            >
                                {spec}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
