// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
        // User page: served from the domain root, so no `base` is needed.
        site: 'https://jub0t.github.io',

        // The languages the site speaks. The default keeps the bare `/`;
        // every other one is served from `/<code>/` by `src/pages/[locale]`.
        // Codes and spellings match the app's own locales.
        i18n: {
                defaultLocale: 'en',
                locales: ['en', 'es', 'fr', 'de', 'pt-BR', 'ru', 'tr', 'id', 'hi', 'bn', 'ur', 'zh-Hans', 'ja'],
                routing: {
                        prefixDefaultLocale: false,
                },
        },

        vite: {
                plugins: [tailwindcss()],
        },

        integrations: [mdx(), icon()],
});
