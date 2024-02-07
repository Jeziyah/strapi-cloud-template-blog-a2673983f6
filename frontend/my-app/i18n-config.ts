export const i18n = {
    locales: ['fr', 'de', 'en'],
    defaultLocale: 'en',
} as const;

export type Locale = typeof i18n['locales'][number];


// export const i18n = {
//     defaultLocale: 'en',
//     locales: ['en', 'de', 'cs'],
// } as const;

// export type Locale = typeof i18n\['locales'\][number];
