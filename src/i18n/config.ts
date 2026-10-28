// The languages the landing page speaks. Every code matches a locale the app
// itself ships (`src/crates/concat/locales/*.json` in the Concat repository),
// so the site never advertises a language the editor does not have. Adding a
// language means adding a dictionary in this folder and one entry here; the
// routes, the hreflang set and the picker all follow.

export interface Locale {
        /** BCP-47 tag, spelled as the app spells it: `pt-BR`, `zh-Hans`. */
        code: string;
        /** English name, for reference and the picker's fallback order. */
        name: string;
        /** The language's own name for itself, as the picker shows it. */
        native: string;
        /** Reading direction. */
        dir: 'ltr' | 'rtl';
}

export const locales: Locale[] = [
        { code: 'en', name: 'English', native: 'English', dir: 'ltr' },
        { code: 'es', name: 'Spanish', native: 'Español', dir: 'ltr' },
        { code: 'fr', name: 'French', native: 'Français', dir: 'ltr' },
        { code: 'de', name: 'German', native: 'Deutsch', dir: 'ltr' },
        { code: 'pt-BR', name: 'Portuguese (Brazil)', native: 'Português (Brasil)', dir: 'ltr' },
        { code: 'ru', name: 'Russian', native: 'Русский', dir: 'ltr' },
        { code: 'tr', name: 'Turkish', native: 'Türkçe', dir: 'ltr' },
        { code: 'id', name: 'Indonesian', native: 'Bahasa Indonesia', dir: 'ltr' },
        { code: 'hi', name: 'Hindi', native: 'हिन्दी', dir: 'ltr' },
        { code: 'bn', name: 'Bengali', native: 'বাংলা', dir: 'ltr' },
        { code: 'ur', name: 'Urdu', native: 'اردو', dir: 'rtl' },
        { code: 'zh-Hans', name: 'Chinese (Simplified)', native: '简体中文', dir: 'ltr' },
        { code: 'ja', name: 'Japanese', native: '日本語', dir: 'ltr' },
];

/** The language an unprefixed URL is written in. */
export const defaultLocale = locales[0];

export function localeByCode(code: string | undefined): Locale | undefined {
        return locales.find((l) => l.code === code);
}

/** Where a language's page lives. The default locale keeps the bare `/`. */
export function pathFor(code: string, hash = ''): string {
        const base = code === defaultLocale.code ? '/' : `/${code}/`;
        return base + hash;
}

/**
 * Tags a browser may report that mean one of ours: the regional variants
 * the site does not carry on their own, standing in for the baseline the
 * site does have. Shared by the server-side matcher below and the little
 * script that meets a first-time visitor on the default page.
 */
export const baseAliases: Record<string, string> = {
        'zh': 'zh-Hans',
        'zh-cn': 'zh-Hans',
        'zh-sg': 'zh-Hans',
        'zh-tw': 'zh-Hans',
        'zh-hant': 'zh-Hans',
        'zh-hk': 'zh-Hans',
        'zh-mo': 'zh-Hans',
        'pt': 'pt-BR',
        'pt-pt': 'pt-BR',
        'in': 'id',
};

/**
 * The language a browser speaks, as one of ours. `navigator.languages`
 * in preference order: an exact tag wins (`pt-BR`), then the tag's base
 * language (`es-AR` → `es`), then the aliases above. `null` when nothing
 * matches, which means the default.
 */
export function localeForNavigator(preferred: readonly string[]): Locale | null {
        const variants = new Map<string, Locale>();
        for (const locale of locales) variants.set(locale.code.toLowerCase(), locale);
        for (const [tag, code] of Object.entries(baseAliases)) {
                const locale = locales.find((l) => l.code === code);
                if (locale) variants.set(tag, locale);
        }

        for (const tag of preferred) {
                const lower = tag.toLowerCase();
                const exact = variants.get(lower);
                if (exact) return exact;
                const base = variants.get(lower.split('-')[0]);
                if (base) return base;
        }
        return null;
}
