export const i18n = {
    locales: ['fr', 'de', 'en', 'nl'],
    defaultLocale: 'en',
    // defaultLocale: 'en-US',
    domains: [
        {
          domain: "example.com",
          defaultLocale: "en",
        //   defaultLocale: "en-US",
        },
        {
          domain: "example.nl",
          defaultLocale: "nl",
        },
        {
          domain: "example.de",
          defaultLocale: "de",
          http: true,
        },
        {
          domain: "example.fr",
          defaultLocale: "fr",
          // an optional http field can also be used to test
          // locale domains locally with http instead of https
          http: true,
        }
      ],
} as const;

export type Locale = typeof i18n['locales'][number];


// export const i18n = {
//     defaultLocale: 'en',
//     locales: ['en', 'de', 'cs'],
// } as const;

// export type Locale = typeof i18n\['locales'\][number];
