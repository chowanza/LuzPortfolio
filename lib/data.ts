export interface Project {
    slug: string;
    title: string;
    type: string;
    techSpecs: string[];
    imageUrl: string;
    gallery?: string[];
    description?: string;
}

const projectsEn: Project[] = [
    {
        slug: "roulette-view",
        title: "Roulette View",
        type: "Trading Analytics Platform",
        techSpecs: ["Real-time Data", "Data Visualization", "Strategy Tools"],
        imageUrl: "/images/RouletteLandingPage.jpg",
        gallery: [
            "/images/RouletteLandingPage.jpg",
            "/images/RouletteLandingPageMobile.png"
        ],
        description: "A real-time analytics platform for trading strategies, featuring complex data visualization and responsive dashboards."
    },
    {
        slug: "sektor-dashboard",
        title: "SEKTOR Dashboard",
        type: "Admin Interface",
        techSpecs: ["News Management", "Role-Based Access", "Dashboard"],
        imageUrl: "/images/SektorNoticias.png",
        gallery: [
            "/images/SektorDetalle.png",
            "/images/SektorDetalle1.png",
            "/images/SektorNoticias.png",
            "/images/SektorNoticias1.png",
            "/images/SektorNoticias2.png",
            "/images/SektorNoticias3.png",
            "/images/SektorNoticias4.png",
            "/images/SektorNoticias5.png",
            "/images/SektorNoticias6.png",
            "/images/SektorNoticias7.png",
            "/images/SektorModulos.png",
            "/images/SektorModulos1.png",
            "/images/SektorModulos2.png",
            "/images/SektorModulos3.png",
            "/images/SektorModulos4.png",
            "/images/SektorModulos5.png",
            "/images/SektorModulos6.png",
            "/images/SektorModulos7.png",
            "/images/SektorModulos8.png",
            "/images/SektorModulos9.png",
            "/images/SektorModulos10.png",
            "/images/SektorModulos11.png",
            "/images/SektorModulos12.png"
        ],
        description: "A comprehensive admin interface for managing news content, user roles, and system modules. Designed for efficiency and clarity."
    },
    {
        slug: "ristorante-il-palazzo",
        title: "Ristorante Il Palazzo",
        type: "Food Delivery Platform",
        techSpecs: ["UX/UI Design", "Ordering System", "Branding"],
        imageUrl: "/images/HomeRistorante.jpg",
        gallery: [
            "/images/HomeRistorante.jpg",
            "/images/PastasRistorante.jpg",
            "/images/Pastas2Ristorante.png",
            "/images/CarritoRistorante.png",
            "/images/PagarRistorante.png",
            "/images/FinalRistorante.png",
            "/images/FinalRistorante2.png"
        ],
        description: "A complete food delivery experience for Ristorante Il Palazzo, featuring an intuitive ordering system, mouth-watering visuals, and a seamless checkout process."
    }
];

const projectsEs: Project[] = [
    {
        slug: "roulette-view",
        title: "Roulette View",
        type: "Plataforma de Análisis de Trading",
        techSpecs: ["Datos en Tiempo Real", "Visualización de Datos", "Estrategia"],
        imageUrl: "/images/RouletteLandingPage.jpg",
        gallery: [
            "/images/RouletteLandingPage.jpg",
            "/images/RouletteLandingPageMobile.png"
        ],
        description: "Una plataforma de análisis en tiempo real para estrategias de trading, con visualización de datos compleja y paneles responsivos."
    },
    {
        slug: "sektor-dashboard",
        title: "SEKTOR Dashboard",
        type: "Interfaz Administrativa",
        techSpecs: ["Gestión de Noticias", "Roles de Usuario", "Panel de Control"],
        imageUrl: "/images/SektorNoticias.png",
        gallery: [
            "/images/SektorDetalle.png",
            "/images/SektorDetalle1.png",

            "/images/SektorNoticias.png",
            "/images/SektorNoticias1.png",
            "/images/SektorNoticias2.png",
            "/images/SektorNoticias3.png",
            "/images/SektorNoticias4.png",
            "/images/SektorNoticias5.png",
            "/images/SektorNoticias6.png",
            "/images/SektorNoticias7.png",
            "/images/SektorModulos.png",
            "/images/SektorModulos1.png",
            "/images/SektorModulos2.png",
            "/images/SektorModulos3.png",
            "/images/SektorModulos4.png",
            "/images/SektorModulos5.png",
            "/images/SektorModulos6.png",
            "/images/SektorModulos7.png",
            "/images/SektorModulos8.png",
            "/images/SektorModulos9.png",
            "/images/SektorModulos10.png",
            "/images/SektorModulos11.png",
            "/images/SektorModulos12.png"
        ],
        description: "Una interfaz administrativa completa para gestionar contenido de noticias, roles de usuario y módulos del sistema. Diseñada para la eficiencia y claridad."
    },
    {
        slug: "ristorante-il-palazzo",
        title: "Ristorante Il Palazzo",
        type: "Plataforma de Delivery",
        techSpecs: ["Diseño UX/UI", "Sistema de Pedidos", "Branding"],
        imageUrl: "/images/HomeRistorante.jpg",
        gallery: [
            "/images/HomeRistorante.jpg",
            "/images/PastasRistorante.jpg",
            "/images/Pastas2Ristorante.png",
            "/images/CarritoRistorante.png",
            "/images/PagarRistorante.png",
            "/images/FinalRistorante.png",
            "/images/FinalRistorante2.png"
        ],
        description: "Una experiencia completa de delivery para Ristorante Il Palazzo, con un sistema de pedidos intuitivo, visuales atractivos y un proceso de pago fluido."
    },
];

export const getProjects = (lang: "en" | "es") => {
    return lang === "es" ? projectsEs : projectsEn;
};

// Default export if needed, or keeping explicit named exports
export const projects = projectsEn; 
