"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import Image from "next/image";
import { getProjects } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ContactSection } from "@/components/contact-section";
import { MailIcon, ArrowDownIcon, UserIcon } from "lucide-react";

export default function Home() {
  const { t, language } = useLanguage();
  // Fetch projects based on current language
  const projects = getProjects(language);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 relative selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none opacity-[0.03] dark:opacity-[0.01]" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-600 dark:text-slate-300 mb-6 transition-colors">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t("hero.badge")}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 transition-colors">
            {t("hero.title.prefix")} <span className="text-primary">{t("hero.title.highlight")}</span>, <br />
            {t("hero.title.suffix")}
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed transition-colors">
            {t("hero.desc")}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              {t("nav.contact")}
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <UserIcon className="w-4 h-4" />
              {t("nav.about")}
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t("nav.work")}
              <ArrowDownIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Work Section (Bento Grid) */}
      <section id="work" className="py-20 container-custom">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{t("work.title")}</h2>
            <p className="text-slate-500 dark:text-slate-400 transition-colors">{t("work.desc")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className={index === 0 || index === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
              {t("about.title")}
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
              <p>
                {t("about.p1")}
              </p>
              <p>
                {t("about.p2")}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <FeatureItem icon={<CodeIcon />} title="Developer Friendly" />
              <FeatureItem icon={<LayersIcon />} title="Atomic Design" />
              <FeatureItem icon={<ZapIcon />} title="Performance First" />
              <FeatureItem icon={<LayoutIcon />} title="Systematic" />
            </div>
          </div>

          <div className="relative aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center transition-colors">
            <Image
              src="/images/ProfileImage.jpg"
              alt="Luz Gabriela Sanchez Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="py-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">
            © {new Date().getFullYear()} Luz Gabriela Sanchez Saturnino. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Figma</a>
            <a href="mailto:Luzgabrielass.03@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Feature Item Component
function FeatureItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transition-colors">
      <div className="text-primary">{icon}</div>
      <span className="font-medium text-slate-700 dark:text-slate-300 text-sm">{title}</span>
    </div>
  );
}

// Icons (CodeIcon, LayersIcon, ZapIcon, LayoutIcon) are likely imported or need to be if used.
// If they are not imported, I should check if I deleted them too.
// Checking earlier context, CodeIcon etc might be used in FeatureItem.
// If they were local, I should enable them or import them.
// Let's assume standard lucide imports for now or keep ONLY the ones not imported.
// But the error complained about MailIcon specifically.
// I'll delete MailIcon and ArrowDownIcon. UserIcon too if present.
// I will start by deleting the ones I KNOW are duplicates.

// Actually, safe bet is to delete the ones causing conflict.
// The user error says line 146 is MailIcon.

// Let's look at the view_file output first to be precise.
// I will wait for view_file result? No, I must generate tool calls now.
// I'll optimistically delete the duplicate ones if I can target them.
// But I don't know the exact lines without view_file.
// I'll risk a view_file and then a replace in next turn.
// BUT I am required to fix it now?
// I'll wait effectively by asking to view first.
// Oh wait, I can just do view_file now.

function CodeIcon() {
  return <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
}
function LayersIcon() {
  return <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
}
function ZapIcon() {
  return <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
}
function LayoutIcon() {
  return <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
}


