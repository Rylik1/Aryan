import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Section, Container, SectionTitle } from "@/components/Section";
import { getDictionary, type Locale } from "@/lib/i18n";
import siteData from "@/data/site.json";
import hoursData from "@/data/hours.json";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'en';
  const dict = getDictionary(locale);

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

  return (
    <>
      <Section>
        <Container>
          <SectionTitle 
            title={dict.contact.title}
            subtitle={dict.contact.subtitle}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-[color:var(--navy)] mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[color:var(--saffron)]" />
                  {dict.contact.visitUs}
                </h3>
                <p className="text-[color:var(--navy)]/80">
                  {siteData.address.full}
                </p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteData.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[color:var(--saffron)] hover:underline"
                >
                  {dict.contact.getDirections} →
                </a>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[color:var(--navy)] mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[color:var(--saffron)]" />
                  {dict.contact.callUs}
                </h3>
                <p className="text-[color:var(--navy)]/80">
                  <a href={`tel:${siteData.contact.phone}`} className="hover:text-[color:var(--saffron)] transition-colors">
                    {siteData.contact.phone}
                  </a>
                </p>
                <p className="text-[color:var(--navy)]/80 mt-2">
                  <a 
                    href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[color:var(--saffron)] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[color:var(--navy)] mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[color:var(--saffron)]" />
                  {dict.contact.writeUs}
                </h3>
                <p className="text-[color:var(--navy)]/80">
                  <a href={`mailto:${siteData.contact.email}`} className="hover:text-[color:var(--saffron)] transition-colors">
                    {siteData.contact.email}
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[color:var(--navy)] mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[color:var(--saffron)]" />
                  {dict.contact.hours}
                </h3>
                <div className="space-y-1 text-[color:var(--navy)]/80">
                  {days.map((day) => {
                    const hours = hoursData.hours[day];
                    const dayName = dict.common[day as keyof typeof dict.common] || day;
                    return (
                      <div key={day} className="flex justify-between">
                        <span>{dayName}:</span>
                        <span>{hours.open} - {hours.close}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[400px]">
                <iframe
                  src={siteData.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Saffron & Song location map"
                />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-[color:var(--navy)] mb-4">
                  Accessibility & Transport
                </h3>
                <ul className="space-y-2 text-[color:var(--navy)]/80">
                  <li>• High Street Kensington Station - 2 min walk</li>
                  <li>• Notting Hill Gate Station - 8 min walk</li>
                  <li>• Bus routes: 9, 10, 27, 28, 49, 52</li>
                  <li>• Wheelchair accessible entrance and facilities</li>
                  <li>• Limited street parking available</li>
                </ul>
              </div>
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
            image: "https://saffronandsong.co.uk/images/restaurant.jpg",
            "@id": "https://saffronandsong.co.uk",
            url: "https://saffronandsong.co.uk",
            telephone: siteData.contact.phone,
            priceRange: "££",
            address: {
              "@type": "PostalAddress",
              streetAddress: siteData.address.street,
              addressLocality: siteData.address.city,
              postalCode: siteData.address.postcode,
              addressCountry: "GB"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: siteData.coordinates.lat,
              longitude: siteData.coordinates.lng
            },
            openingHoursSpecification: Object.entries(hoursData.hours).map(([day, hours]) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
              opens: hours.open,
              closes: hours.close
            }))
          })
        }}
      />
    </>
  );
}