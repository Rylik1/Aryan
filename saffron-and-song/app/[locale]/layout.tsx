import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { type Locale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'en';

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen bg-[color:var(--ivory)]">
        {children}
      </main>
      <Footer locale={locale} />
      <Toaster 
        position={locale === 'fa' ? 'bottom-left' : 'bottom-right'}
        dir={locale === 'fa' ? 'rtl' : 'ltr'}
      />
    </>
  );
}


