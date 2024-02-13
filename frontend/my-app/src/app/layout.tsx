import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next App Blog",
  description: "Interdimensional blog from Create Next App",
};

const testLocale = {
    lang: "fr"
}

const { lang } = testLocale;

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {lang: string;};
}>) {
  
  // const { testLocale } = params;
  const localLang = params.lang !== undefined ? params.lang : "en";
  console.log(params.lang);
  console.log("lang in app.layout.tsx: " + localLang);

  return (
    // <html lang="en">
    <html lang={localLang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
