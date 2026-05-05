import type { Lang } from "./site";

export type NavItem = {
    label: Record<Lang, string>;
    href: Record<Lang, string>;
    description?: Record<Lang, string>;
    children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
    {
        label: {
        en: "Home",
        es: "Inicio",
        },
        href: {
        en: "/",
        es: "/es",
        },
    },
    {
        label: {
        en: "About",
        es: "Nosotros",
        },
        href: {
        en: "/about",
        es: "/es/sobre-nosotros",
        },
        description: {
        en: "Learn more about Next Horizon Therapy and our family-centered approach.",
        es: "Conozca más sobre Next Horizon Therapy y nuestro enfoque centrado en la familia.",
        },
    },
    {
        label: {
        en: "Services",
        es: "Servicios",
        },
        href: {
        en: "/services",
        es: "/es/servicios",
        },
        description: {
        en: "Explore ABA therapy services for children and families in Miami.",
        es: "Explore servicios de terapia ABA para niños y familias en Miami.",
        },
        children: [
        {
            label: {
            en: "ABA Therapy",
            es: "Terapia ABA",
            },
            href: {
            en: "/services/aba-therapy",
            es: "/es/servicios/terapia-aba",
            },
            description: {
            en: "Individualized Applied Behavior Analysis therapy for communication, behavior, social skills, and daily living skills.",
            es: "Terapia individualizada de Análisis Aplicado de la Conducta para comunicación, conducta, habilidades sociales y rutinas diarias.",
            },
        },
        {
            label: {
            en: "In-Home ABA Therapy",
            es: "Terapia ABA en Casa",
            },
            href: {
            en: "/services/in-home-aba-therapy",
            es: "/es/servicios/terapia-aba-en-casa",
            },
            description: {
            en: "ABA therapy delivered in the child’s home environment to support real-life routines and family goals.",
            es: "Terapia ABA en el hogar para apoyar rutinas reales y metas familiares.",
            },
        },
        {
            label: {
            en: "School-Based ABA Support",
            es: "Apoyo ABA en la Escuela",
            },
            href: {
            en: "/services/school-based-aba-support",
            es: "/es/servicios/apoyo-aba-en-la-escuela",
            },
            description: {
            en: "Support for classroom routines, transitions, peer interaction, and skill generalization when appropriate.",
            es: "Apoyo para rutinas escolares, transiciones, interacción con compañeros y generalización de habilidades cuando sea apropiado.",
            },
        },
        {
            label: {
            en: "Parent Training",
            es: "Entrenamiento para Padres",
            },
            href: {
            en: "/services/parent-training",
            es: "/es/servicios/entrenamiento-para-padres",
            },
            description: {
            en: "Practical caregiver coaching to help families support progress beyond therapy sessions.",
            es: "Orientación práctica para cuidadores que ayuda a las familias a apoyar el progreso fuera de las sesiones.",
            },
        },
        {
            label: {
            en: "Behavior Assessments",
            es: "Evaluaciones de Conducta",
            },
            href: {
            en: "/services/behavior-assessments",
            es: "/es/servicios/evaluaciones-de-conducta",
            },
            description: {
            en: "Clinical assessments used to understand strengths, needs, behaviors, and family priorities.",
            es: "Evaluaciones clínicas para comprender fortalezas, necesidades, conductas y prioridades familiares.",
            },
        },
        ],
    },
    {
        label: {
        en: "Insurance",
        es: "Seguros",
        },
        href: {
        en: "/insurance",
        es: "/es/seguros",
        },
        description: {
        en: "Learn about Medicaid, private insurance, and benefit verification for ABA therapy.",
        es: "Conozca sobre Medicaid, seguros privados y verificación de beneficios para terapia ABA.",
        },
    },
    {
        label: {
        en: "Start Services",
        es: "Comenzar",
        },
        href: {
        en: "/intake",
        es: "/es/admision",
        },
        description: {
        en: "View the intake process and learn how to begin ABA therapy services.",
        es: "Vea el proceso de admisión y conozca cómo comenzar servicios de terapia ABA.",
        },
    },
    {
        label: {
        en: "Careers",
        es: "Carreras",
        },
        href: {
        en: "/careers",
        es: "/es/carreras",
        },
        description: {
        en: "Join our ABA therapy team in Miami and South Florida.",
        es: "Únase a nuestro equipo de terapia ABA en Miami y el sur de la Florida.",
        },
    },
    {
        label: {
        en: "Contact",
        es: "Contacto",
        },
        href: {
        en: "/contact",
        es: "/es/contacto",
        },
    },
] as const;

export const footerNavigation = {
    services: {
        title: {
        en: "Services",
        es: "Servicios",
        },
        links: [
        {
            label: {
            en: "ABA Therapy",
            es: "Terapia ABA",
            },
            href: {
            en: "/services/aba-therapy",
            es: "/es/servicios/terapia-aba",
            },
        },
        {
            label: {
            en: "In-Home ABA Therapy",
            es: "Terapia ABA en Casa",
            },
            href: {
            en: "/services/in-home-aba-therapy",
            es: "/es/servicios/terapia-aba-en-casa",
            },
        },
        {
            label: {
            en: "Parent Training",
            es: "Entrenamiento para Padres",
            },
            href: {
            en: "/services/parent-training",
            es: "/es/servicios/entrenamiento-para-padres",
            },
        },
        {
            label: {
            en: "Behavior Assessments",
            es: "Evaluaciones de Conducta",
            },
            href: {
            en: "/services/behavior-assessments",
            es: "/es/servicios/evaluaciones-de-conducta",
            },
        },
        ],
    },
    company: {
        title: {
        en: "Company",
        es: "Agencia",
        },
        links: [
        {
            label: {
            en: "About",
            es: "Nosotros",
            },
            href: {
            en: "/about",
            es: "/es/sobre-nosotros",
            },
        },
        {
            label: {
            en: "Insurance",
            es: "Seguros",
            },
            href: {
            en: "/insurance",
            es: "/es/seguros",
            },
        },
        {
            label: {
            en: "Start Services",
            es: "Comenzar Servicios",
            },
            href: {
            en: "/intake",
            es: "/es/admision",
            },
        },
        {
            label: {
            en: "Careers",
            es: "Carreras",
            },
            href: {
            en: "/careers",
            es: "/es/carreras",
            },
        },
        {
            label: {
            en: "Contact",
            es: "Contacto",
            },
            href: {
            en: "/contact",
            es: "/es/contacto",
            },
        },
        ],
    },
    serviceAreas: {
        title: {
        en: "Service Areas",
        es: "Áreas de Servicio",
        },
        links: [
        {
            label: {
            en: "ABA Therapy in Miami",
            es: "Terapia ABA en Miami",
            },
            href: {
            en: "/aba-therapy-miami-fl",
            es: "/es/terapia-aba-miami-fl",
            },
        },
        {
            label: {
            en: "ABA Therapy in Kendall",
            es: "Terapia ABA en Kendall",
            },
            href: {
            en: "/aba-therapy-kendall-fl",
            es: "/es/terapia-aba-kendall-fl",
            },
        },
        {
            label: {
            en: "ABA Therapy in Doral",
            es: "Terapia ABA en Doral",
            },
            href: {
            en: "/aba-therapy-doral-fl",
            es: "/es/terapia-aba-doral-fl",
            },
        },
        {
            label: {
            en: "ABA Therapy in Hialeah",
            es: "Terapia ABA en Hialeah",
            },
            href: {
            en: "/aba-therapy-hialeah-fl",
            es: "/es/terapia-aba-hialeah-fl",
            },
        },
        {
            label: {
            en: "ABA Therapy in South Florida",
            es: "Terapia ABA en el Sur de la Florida",
            },
            href: {
            en: "/aba-therapy-south-florida",
            es: "/es/terapia-aba-sur-de-la-florida",
            },
        },
        ],
    },
    legal: {
        title: {
        en: "Legal",
        es: "Legal",
        },
        links: [
        {
            label: {
            en: "Privacy Policy",
            es: "Política de Privacidad",
            },
            href: {
            en: "/privacy-policy",
            es: "/es/politica-de-privacidad",
            },
        },
        {
            label: {
            en: "Terms of Service",
            es: "Términos de Servicio",
            },
            href: {
            en: "/terms",
            es: "/es/terminos",
            },
        },
        {
            label: {
            en: "Accessibility",
            es: "Accesibilidad",
            },
            href: {
            en: "/accessibility",
            es: "/es/accesibilidad",
            },
        },
        ],
    },
} as const;

export const utilityNavigation = {
    language: {
        en: {
        label: "Español",
        shortLabel: "ES",
        href: "/es",
        ariaLabel: "Switch to Spanish",
        },
        es: {
        label: "English",
        shortLabel: "EN",
        href: "/",
        ariaLabel: "Cambiar a inglés",
        },
    },
    theme: {
        en: {
        label: "Theme",
        light: "Light mode",
        dark: "Dark mode",
        toggle: "Toggle theme",
        },
        es: {
        label: "Tema",
        light: "Modo claro",
        dark: "Modo oscuro",
        toggle: "Cambiar tema",
        },
    },
} as const;

export const mobileNavigationLabels = {
    en: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
        menu: "Menu",
    },
    es: {
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
        menu: "Menú",
    },
} as const;