// Every dictionary, behind one door. The default locale's dictionary is the
// type every other one is checked against, so a key missed in a translation
// is a type error, not a silent fallback to English on a live page.
import en from './en';
import type { UI } from './en';
import es from './es';
import fr from './fr';
import de from './de';
import ptBR from './pt-BR';
import ru from './ru';
import tr from './tr';
import id from './id';
import hi from './hi';
import bn from './bn';
import ur from './ur';
import zhHans from './zh-Hans';
import ja from './ja';
import { defaultLocale } from './config';

export type { UI };

export const dictionaries: Record<string, UI> = {
        en,
        es,
        fr,
        de,
        'pt-BR': ptBR,
        ru,
        tr,
        id,
        hi,
        bn,
        ur,
        'zh-Hans': zhHans,
        ja,
};

/** The dictionary a locale speaks, always: unknown codes get the default. */
export function dictFor(code: string): UI {
        return dictionaries[code] ?? dictionaries[defaultLocale.code]!;
}
