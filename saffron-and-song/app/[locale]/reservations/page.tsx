import { Section, Container, SectionTitle } from "@/components/Section";
import { ReservationForm } from "@/components/ReservationForm";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'en';
  const dict = getDictionary(locale);
  
  return {
    title: `${dict.reservations.title} | Saffron & Song`,
    description: dict.reservations.subtitle,
  };
}

export default async function ReservationsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'en';
  const dict = getDictionary(locale);

  return (
    <>
      <Section>
        <Container>
          <SectionTitle 
            title={dict.reservations.title}
            subtitle={dict.reservations.subtitle}
          />
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <ReservationForm locale={locale} />
            </div>
            
            <div className="mt-8 text-center text-sm text-[color:var(--navy)]/70">
              <p>For parties larger than 20 people or special events,</p>
              <p>please call us at +44 20 7123 4567</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Saffron & Song",
            acceptsReservations: "True",
            servesCuisine: ["Persian", "Iranian"],
            priceRange: "££",
            telephone: "+44 20 7123 4567",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Kensington High Street",
              addressLocality: "London",
              postalCode: "W8 5SA",
              addressCountry: "GB"
            }
          })
        }}
      />
    </>
  );
}