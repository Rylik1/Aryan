import Image from "next/image";
import { Section, Container, SectionTitle } from "@/components/Section";
import { getDictionary, type Locale } from "@/lib/i18n";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale || 'en';
  const dict = getDictionary(locale);

  return (
    <>
      <Section>
        <Container>
          <SectionTitle 
            title={dict.about.title}
            subtitle={dict.about.subtitle}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-[color:var(--navy)] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {dict.about.story.title}
              </h3>
              <p className="text-[color:var(--navy)]/80 leading-relaxed mb-4">
                {dict.about.story.content}
              </p>
              <p className="text-[color:var(--navy)]/80 leading-relaxed">
                Our name, &ldquo;Saffron & Song,&rdquo; reflects the essence of Persian culture – saffron, 
                the golden spice that flavors our dishes and represents the warmth of our hospitality, 
                and song, symbolizing the joy and celebration that food brings to life.
              </p>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about/restaurant.jpg"
                alt="Saffron & Song restaurant interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about/spices.jpg"
                alt="Persian spices and ingredients"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-[color:var(--navy)] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                {dict.about.heritage.title}
              </h3>
              <p className="text-[color:var(--navy)]/80 leading-relaxed mb-4">
                {dict.about.heritage.content}
              </p>
              <p className="text-[color:var(--navy)]/80 leading-relaxed">
                From the aromatic herbs of Ghormeh Sabzi to the delicate balance of sweet and sour 
                in Fesenjan, each dish tells a story of ancient Persia. We source the finest saffron 
                from Iran, pomegranates from the best orchards, and herbs that are as fresh as those 
                found in Tehran&apos;s grand bazaar.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionTitle title={dict.about.team.title} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/chef-reza.jpg"
                  alt={dict.about.team.chef.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-[color:var(--navy)]">
                {dict.about.team.chef.name}
              </h4>
              <p className="text-[color:var(--saffron)] mb-2">
                {dict.about.team.chef.title}
              </p>
              <p className="text-sm text-[color:var(--navy)]/70">
                {dict.about.team.chef.bio}
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/manager.jpg"
                  alt="Sarah Tehrani"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-[color:var(--navy)]">
                Sarah Tehrani
              </h4>
              <p className="text-[color:var(--saffron)] mb-2">
                Restaurant Manager
              </p>
              <p className="text-sm text-[color:var(--navy)]/70">
                Ensuring every guest experiences the warmth of Persian hospitality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/team/sous-chef.jpg"
                  alt="Ali Karimi"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-[color:var(--navy)]">
                Ali Karimi
              </h4>
              <p className="text-[color:var(--saffron)] mb-2">
                Sous Chef
              </p>
              <p className="text-sm text-[color:var(--navy)]/70">
                Specializing in traditional kebabs and rice dishes.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="bg-[color:var(--saffron)]/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-[color:var(--navy)] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Our Commitment
            </h3>
            <p className="text-[color:var(--navy)]/80 max-w-3xl mx-auto">
              We are committed to providing an authentic Persian dining experience while supporting 
              local suppliers and sustainable practices. All our meat is halal-certified, and we 
              offer a variety of vegetarian and gluten-free options to accommodate all dietary needs.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}