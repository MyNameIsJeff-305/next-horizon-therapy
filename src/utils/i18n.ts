import { defaultLang, languages, type Lang } from "../data/site";

export type LocalizedString = Record<Lang, string>;

export type LocalizedHref = Record<Lang, string>;

export function isLang(value: string | undefined | null): value is Lang {
    return value === "en" || value === "es";
}

export function getLangFromUrl(pathname: string): Lang {
    return pathname.startsWith("/es") ? "es" : defaultLang;
}

export function getLocale(lang: Lang): string {
    return languages[lang].locale;
}

export function getLangLabel(lang: Lang): string {
    return languages[lang].label;
}

export function getLangShortLabel(lang: Lang): string {
    return languages[lang].shortLabel;
}

export function getLocalizedValue<T>(value: Record<Lang, T>, lang: Lang): T {
    return value[lang] ?? value[defaultLang];
}

export function getLocalizedHref(href: LocalizedHref, lang: Lang): string {
    return href[lang] ?? href[defaultLang];
}

export function isSpanishPath(pathname: string): boolean {
    return getLangFromUrl(pathname) === "es";
}

export function removeTrailingSlash(pathname: string): string {
    if (pathname === "/") return "/";
    return pathname.replace(/\/$/, "");
}

export function normalizePath(pathname: string): string {
    const cleanPath = removeTrailingSlash(pathname);

    if (cleanPath === "/es") return "/es";
    if (cleanPath === "") return "/";

    return cleanPath;
}

export function getEnglishPath(pathname: string): string {
    const cleanPath = normalizePath(pathname);

    if (cleanPath === "/es") return "/";

    if (cleanPath.startsWith("/es/")) {
        return cleanPath.replace(/^\/es/, "") || "/";
    }

    return cleanPath;
}

export function getSpanishPath(pathname: string): string {
    const cleanPath = normalizePath(pathname);

    if (cleanPath === "/") return "/es";
    if (cleanPath === "/es") return "/es";

    if (cleanPath.startsWith("/es/")) return cleanPath;

    return `/es${cleanPath}`;
}

export function getAlternatePath(pathname: string, lang: Lang): string {
    return lang === "es" ? getEnglishPath(pathname) : getSpanishPath(pathname);
}

export function getLocalizedPath(pathname: string, targetLang: Lang): string {
    return targetLang === "es" ? getSpanishPath(pathname) : getEnglishPath(pathname);
}

export function getPathWithoutLang(pathname: string): string {
    const cleanPath = normalizePath(pathname);

    if (cleanPath === "/es") return "/";
    if (cleanPath.startsWith("/es/")) return cleanPath.replace(/^\/es/, "") || "/";

    return cleanPath;
}

export function getCanonicalPath(pathname: string): string {
    return normalizePath(pathname);
}

export function createAlternatePaths(pathname: string) {
    return {
        en: getEnglishPath(pathname),
        es: getSpanishPath(pathname),
    };
}

export function localizeRoute(
    routes: Record<Lang, string>,
    lang: Lang,
    ): string {
    return routes[lang] ?? routes[defaultLang];
}

export function getCurrentNavState(currentPath: string, href: string): boolean {
    const normalizedCurrent = normalizePath(currentPath);
    const normalizedHref = normalizePath(href);

    if (normalizedHref === "/") {
        return normalizedCurrent === "/";
    }

    if (normalizedHref === "/es") {
        return normalizedCurrent === "/es";
    }

    return (
        normalizedCurrent === normalizedHref ||
        normalizedCurrent.startsWith(`${normalizedHref}/`)
    );
}

export function formatPhoneForHref(phone: string): string {
    return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function formatLanguagePrefix(lang: Lang): string {
    return lang === defaultLang ? "" : `/${lang}`;
}