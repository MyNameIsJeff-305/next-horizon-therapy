export type Lang = "en" | "es";

export const defaultLang: Lang = "en";

export const languages = {
    en: {
        code: "en",
        locale: "en-US",
        label: "English",
        shortLabel: "EN",
    },
    es: {
        code: "es",
        locale: "es-US",
        label: "Español",
        shortLabel: "ES",
    },
} as const;

export const siteConfig = {
    name: "Next Horizon Therapy",
    legalName: "Next Horizon Therapy",
    tagline: {
        en: "Helping Children Reach Their Next Horizon",
        es: "Ayudando a los niños a alcanzar su próximo horizonte",
    },
    description: {
        en: "Next Horizon Therapy provides compassionate, evidence-based ABA therapy for children and families in Miami and South Florida.",
        es: "Next Horizon Therapy ofrece terapia ABA compasiva y basada en evidencia para niños y familias en Miami y el sur de la Florida.",
    },
    url: "https://nexthorizontherapy.com",
    phone: {
        display: "(305) 954-1866",
        href: "tel:+13059541866",
        raw: "+13059541866",
    },
    email: {
        display: "info@nexthorizontherapy.com",
        href: "mailto:info@nexthorizontherapy.com",
    },
    location: {
        city: "Miami",
        state: "FL",
        region: "South Florida",
        country: "United States",
        display: {
        en: "Miami, FL",
        es: "Miami, FL",
        },
    },
    address: {
        street: "",
        city: "Miami",
        state: "FL",
        zip: "",
        country: "US",
        display: {
        en: "Miami, FL",
        es: "Miami, FL",
        },
    },
    serviceArea: {
        en: [
        "Miami",
        "Kendall",
        "Doral",
        "Hialeah",
        "Homestead",
        "Coral Gables",
        "Westchester",
        "Fontainebleau",
        "Tamiami",
        "South Florida",
        ],
        es: [
        "Miami",
        "Kendall",
        "Doral",
        "Hialeah",
        "Homestead",
        "Coral Gables",
        "Westchester",
        "Fontainebleau",
        "Tamiami",
        "Sur de la Florida",
        ],
    },
    brand: {
        colors: {
        saffron: "#ff931d",
        blue: "#079fd9",
        mint: "#19c892",
        },
        fonts: {
        heading: "Poppins",
        body: "Nunito",
        },
    },
    assets: {
        favicon: "/favicon.png",
        logo: "/images/logo/next-horizon-logo.webp",
        logoDark: "/images/logo/next-horizon-logo-dark.webp",
        ogImage: "/images/og/next-horizon-og.webp",
    },
    social: {
        facebook: "",
        instagram: "",
        linkedin: "",
    },
    business: {
        type: "ABA Therapy Agency",
        niche: "Applied Behavior Analysis therapy for children and families",
        medicalSpecialties: [
        "Applied Behavior Analysis",
        "Autism Therapy",
        "Behavioral Therapy",
        "Child Development Support",
        "Parent Training",
        ],
        languages: ["English", "Spanish"],
        insurance: {
        acceptsInsurance: true,
        summary: {
            en: "Medicaid and private insurance accepted. Coverage may vary by plan, eligibility, medical necessity, and authorization requirements.",
            es: "Aceptamos Medicaid y seguros privados. La cobertura puede variar según el plan, elegibilidad, necesidad médica y requisitos de autorización.",
        },
        acceptedTypes: {
            en: ["Medicaid", "Private Insurance"],
            es: ["Medicaid", "Seguros Privados"],
        },
        },
        audience: {
        en: [
            "Children with autism spectrum disorder",
            "Children with developmental delays",
            "Children with behavioral challenges",
            "Children needing communication support",
            "Families seeking parent training",
            "English and Spanish-speaking families",
        ],
        es: [
            "Niños con trastorno del espectro autista",
            "Niños con retrasos del desarrollo",
            "Niños con desafíos de conducta",
            "Niños que necesitan apoyo en la comunicación",
            "Familias que buscan entrenamiento para padres",
            "Familias que hablan inglés y español",
        ],
        },
    },
    cta: {
        primary: {
        en: "Start ABA Therapy",
        es: "Comenzar Terapia ABA",
        href: {
            en: "/intake",
            es: "/es/admision",
        },
        },
        secondary: {
        en: "Verify Insurance",
        es: "Verificar Seguro",
        href: {
            en: "/insurance",
            es: "/es/seguros",
        },
        },
        call: {
        en: "Call Now",
        es: "Llamar Ahora",
        },
    },
    forms: {
        privacyNote: {
        en: "Please do not include sensitive medical information in this form. Our team will contact you to complete the next steps securely.",
        es: "Por favor, no incluya información médica sensible en este formulario. Nuestro equipo le contactará para completar los próximos pasos de forma segura.",
        },
    },
    } as const;

    export const seoDefaults = {
    title: {
        en: "ABA Therapy in Miami & South Florida | Next Horizon Therapy",
        es: "Terapia ABA en Miami y el Sur de la Florida | Next Horizon Therapy",
    },
    description: {
        en: "Next Horizon Therapy provides compassionate ABA therapy in Miami and South Florida for children with autism, developmental delays, behavioral challenges, and special needs. Medicaid and private insurance accepted.",
        es: "Next Horizon Therapy ofrece terapia ABA compasiva en Miami y el sur de la Florida para niños con autismo, retrasos del desarrollo, desafíos de conducta y necesidades especiales. Aceptamos Medicaid y seguros privados.",
    },
    keywords: {
        en: [
        "ABA therapy Miami",
        "ABA therapy South Florida",
        "autism therapy Miami",
        "in-home ABA therapy Miami",
        "Medicaid ABA therapy Miami",
        "private insurance ABA therapy Miami",
        "parent training ABA Miami",
        "behavior therapy for children Miami",
        "BCBA services Miami",
        "RBT services Miami",
        ],
        es: [
        "terapia ABA Miami",
        "terapia ABA sur de la Florida",
        "terapia para autismo Miami",
        "terapia ABA en casa Miami",
        "terapia ABA con Medicaid Miami",
        "terapia ABA con seguro privado Miami",
        "entrenamiento para padres ABA Miami",
        "terapia conductual para niños Miami",
        ],
    },
} as const;