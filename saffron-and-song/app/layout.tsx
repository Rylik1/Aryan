import type { Metadata } from "next";
import { headers } from "next/headers";
import { Playfair_Display, Inter, Vazirmatn } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body-en",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-body-fa",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saffron & Song – Iranian Traditional Restaurant, London",
  description:
    "Authentic Persian cuisine in the heart of London. Kebabs, stews, rice, and traditional desserts. Halal-friendly.",
  applicationName: "Saffron & Song",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const locale = hdrs.get("x-locale") || "en";
  const dir = hdrs.get("x-dir") || (locale === "fa" ? "rtl" : "ltr");

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} ${vazirmatn.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
