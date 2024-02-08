// @type {import('next').NextConfig}

/**@type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],  
  },
  // i18n: {
    
    // localeDetection: false,
  //   // These are all the locales you want to support in
  //   // your application

    // locales: ["en-US", "fr", "nl-NL", "de"],
    // locales: ["en", "fr", "nl", "de"],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
    // defaultLocale: "en",
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
  //     {
  //       domain: "example.com",
  //       defaultLocale: "en",
  //     },
  //     {
  //       domain: "example.nl",
  //       defaultLocale: "nl",
  //     },
  //     {
  //       domain: "example.de",
  //       defaultLocale: "de",
  //       http: true,
  //     },
  //     {
  //       domain: "example.fr",
  //       defaultLocale: "fr",
  //       // an optional http field can also be used to test
  //       // locale domains locally with http instead of https
  //       http: true,
  //     }
    // ],
  // },
};

module.exports = nextConfig;
// export default nextConfig;
