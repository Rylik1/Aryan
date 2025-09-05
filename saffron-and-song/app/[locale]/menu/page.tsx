import { Suspense } from "react";
import { Section, Container, SectionTitle } from "@/components/Section";
import { MenuFilters } from "@/components/MenuFilters";
import { getDictionary, type Locale } from "@/lib/i18n";
import menuData from "@/data/menu.json";
import { MenuContent } from "./MenuContent";

interface MenuPageProps {
  params: Promise<{ locale: string }>;
}

export default async function MenuPage({ params }: MenuPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'en';
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionTitle 
          title={dict.menu.title}
          subtitle={dict.menu.subtitle}
        />
        
        <MenuFilters categories={menuData.categories} locale={locale} />
        
        <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
          <MenuContent locale={locale} />
        </Suspense>
      </Container>
    </Section>
  );
}