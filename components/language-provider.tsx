"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");

    // Simple translation dictionary
    const translations: Record<Language, Record<string, string>> = {
        en: {
            "nav.work": "View Work",
            "nav.about": "About Me",
            "nav.contact": "Contact Me",
            "hero.badge": "Available for new projects",
            "hero.title.prefix": "Designing",
            "hero.title.highlight": "scalable systems",
            "hero.title.suffix": "not just screens.",
            "hero.desc": "I'm Luz Gabriela Sanchez. A Product Designer with a Systems Engineering background using logic and structure to build high-performance interfaces.",
            "work.title": "Selected Work",
            "work.desc": "Engineering-driven design case studies.",
            "about.title": "Engineering meets Design",
            "about.p1": "With 3 years of experience and a background in Systems Engineering, I bridge the gap between complex logic and intuitive user experiences.",
            "about.p2": "My approach is rooted in component-based architecture. I don't just draw rectangles; I build scalable design systems that make developer handoff seamless and future iterations effortless.",
            "footer.rights": "All rights reserved.",
            "project.view": "View Project",
            "project.backToTop": "Back to top",
            "project.web": "Web Design",
            "project.mobile": "Mobile Design",
            "contact.title": "Let's Connect",
            "contact.desc": "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            "contact.form.name": "Name",
            "contact.form.email": "Email",
            "contact.form.message": "Message",
            "contact.form.send": "Send Message",
            "contact.info.phone": "Phone",
            "contact.info.email": "Email",
            "contact.social.linkedin": "LinkedIn",
            "contact.social.figma": "Figma",
            "contact.social.whatsapp": "WhatsApp"
        },
        es: {
            "nav.work": "Ver Trabajos",
            "nav.about": "Sobre Mí",
            "nav.contact": "Contáctame",
            "hero.badge": "Disponible para nuevos proyectos",
            "hero.title.prefix": "Diseñando",
            "hero.title.highlight": "sistemas escalables",
            "hero.title.suffix": "no solo pantallas.",
            "hero.desc": "Soy Luz Gabriela Sánchez. Diseñadora de Producto con formación en Ingeniería de Sistemas, usando lógica y estructura para crear interfaces de alto rendimiento.",
            "work.title": "Trabajos Seleccionados",
            "work.desc": "Casos de estudio impulsados por ingeniería.",
            "about.title": "Ingeniería y Diseño",
            "about.p1": "Con 3 años de experiencia y formación en Ingeniería de Sistemas, uno la lógica compleja con experiencias de usuario intuitivas.",
            "about.p2": "Mi enfoque se basa en la arquitectura de componentes. No solo dibujo rectángulos; construyo sistemas de diseño escalables que facilitan la entrega a desarrollo y las futuras iteraciones.",
            "footer.rights": "Todos los derechos reservados.",
            "project.view": "Ver Proyecto",
            "project.backToTop": "Volver arriba",
            "project.web": "Diseño Web",
            "project.mobile": "Diseño Mobile",
            "contact.title": "Contáctame",
            "contact.desc": "Siempre estoy abierta a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
            "contact.form.name": "Nombre",
            "contact.form.email": "Correo",
            "contact.form.message": "Mensaje",
            "contact.form.send": "Enviar Mensaje",
            "contact.info.phone": "Teléfono",
            "contact.info.email": "Correo",
            "contact.social.linkedin": "LinkedIn",
            "contact.social.figma": "Figma",
            "contact.social.whatsapp": "WhatsApp"
        }
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
