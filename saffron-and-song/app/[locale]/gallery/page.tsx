import { Section, Container, SectionTitle } from "@/components/Section";
import { getDictionary, type Locale } from "@/lib/i18n";
import { GalleryGrid } from "./GalleryGrid";

// Gallery images data
const galleryImages = [
  { id: 1, src: "/images/gallery/restaurant-interior.jpg", alt: "Restaurant interior with Persian decor" },
  { id: 2, src: "/images/gallery/kebab-platter.jpg", alt: "Assorted kebab platter" },
  { id: 3, src: "/images/gallery/saffron-rice.jpg", alt: "Saffron rice with barberries" },
  { id: 4, src: "/images/gallery/dining-area.jpg", alt: "Main dining area" },
  { id: 5, src: "/images/gallery/ghormeh-sabzi.jpg", alt: "Ghormeh Sabzi herb stew" },
  { id: 6, src: "/images/gallery/persian-tea.jpg", alt: "Traditional Persian tea service" },
  { id: 7, src: "/images/gallery/fesenjan.jpg", alt: "Fesenjan pomegranate walnut stew" },
  { id: 8, src: "/images/gallery/private-dining.jpg", alt: "Private dining room" },
  { id: 9, src: "/images/gallery/desserts.jpg", alt: "Persian desserts display" },
];

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const resolvedParams = await params;
  const locale = (resolvedParams.locale as Locale) || 'en';
  const dict = getDictionary(locale);

  return (
    <Section>
      <Container>
        <SectionTitle 
          title={dict.gallery.title}
          subtitle={dict.gallery.subtitle}
        />
        <GalleryGrid images={galleryImages} />
      </Container>
    </Section>
  );
}