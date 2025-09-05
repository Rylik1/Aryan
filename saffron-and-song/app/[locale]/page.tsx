import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Container, SectionTitle } from "@/components/Section";
import { getDictionary, type Locale } from "@/lib/i18n";
import reviewsData from "@/data/reviews.json";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleHome({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'en';
  const dict = getDictionary(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-[color:var(--ivory)] to-white">
        <Container className="text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-[color:var(--navy)] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              {dict.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-[color:var(--navy)]/80">
              {dict.home.hero.subtitle}
            </p>
            <p className="text-lg text-[color:var(--navy)]/70 max-w-2xl mx-auto">
              {dict.home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href={`/${locale}/reservations`}>
                <Button size="lg" className="min-w-[200px]">
                  {dict.home.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href={`/${locale}/menu`}>
                <Button size="lg" variant="outline" className="min-w-[200px]">
                  {dict.home.hero.viewMenu}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[color:var(--saffron)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[color:var(--navy)]">
                {dict.home.features.authentic.title}
              </h3>
              <p className="text-[color:var(--navy)]/70">
                {dict.home.features.authentic.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[color:var(--saffron)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[color:var(--navy)]">
                {dict.home.features.fresh.title}
              </h3>
              <p className="text-[color:var(--navy)]/70">
                {dict.home.features.fresh.description}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[color:var(--saffron)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[color:var(--navy)]">
                {dict.home.features.atmosphere.title}
              </h3>
              <p className="text-[color:var(--navy)]/70">
                {dict.home.features.atmosphere.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reviews Preview */}
      <Section>
        <Container>
          <SectionTitle 
            title="Customer Reviews" 
            subtitle="What our guests are saying"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsData.reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-[color:var(--saffron)]" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[color:var(--navy)]/80 mb-4">
                  &ldquo;{locale === 'fa' ? review.text_fa : review.text_en}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[color:var(--navy)]">
                  {review.name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}


