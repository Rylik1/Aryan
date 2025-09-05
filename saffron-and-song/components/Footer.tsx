import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { getDictionary, type Locale } from "@/lib/i18n";
import siteData from "@/data/site.json";
import hoursData from "@/data/hours.json";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  const navigation: Array<{ name: string; href: string }> = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.menu, href: `/${locale}/menu` },
    { name: dict.nav.reservations, href: `/${locale}/reservations` },
    { name: dict.nav.gallery, href: `/${locale}/gallery` },
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
  ];

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

  return (
    <footer className="bg-[color:var(--navy)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Tagline */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Saffron & Song
            </h3>
            <p className="text-sm opacity-90 mb-4">{dict.footer.tagline}</p>
            <div className="flex gap-4">
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-[color:var(--saffron)] transition-colors" />
              </a>
              <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-[color:var(--saffron)] transition-colors" />
              </a>
              <a href={siteData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-[color:var(--saffron)] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{dict.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-[color:var(--saffron)] transition-all"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{dict.common.address}</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{siteData.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:${siteData.contact.phone}`} className="hover:text-[color:var(--saffron)] transition-colors">
                  {siteData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-[color:var(--saffron)] transition-colors">
                  {siteData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-semibold mb-4">{dict.common.openingHours}</h4>
            <div className="space-y-1 text-sm opacity-90">
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

        <div className="mt-12 pt-8 border-t border-[color:var(--ivory)]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-75">
              © {currentYear} Saffron & Song. {dict.common.allRightsReserved}
            </p>
            <div className="flex gap-6 text-sm opacity-75">
              <a href={`/${locale}/privacy`} className="hover:opacity-100 transition-opacity">
                {dict.footer.legal.privacy}
              </a>
              <a href={`/${locale}/terms`} className="hover:opacity-100 transition-opacity">
                {dict.footer.legal.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}