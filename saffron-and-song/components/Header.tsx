"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);
  
  const navigation: Array<{ name: string; href: string }> = [
    { name: dict.nav.home, href: `/${locale}` },
    { name: dict.nav.menu, href: `/${locale}/menu` },
    { name: dict.nav.reservations, href: `/${locale}/reservations` },
    { name: dict.nav.gallery, href: `/${locale}/gallery` },
    { name: dict.nav.about, href: `/${locale}/about` },
    { name: dict.nav.contact, href: `/${locale}/contact` },
  ];

  const toggleLocale = locale === 'en' ? 'fa' : 'en';
  const togglePath = pathname.replace(`/${locale}`, `/${toggleLocale}`);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={`/${locale}`} className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-[color:var(--navy)]" style={{ fontFamily: "var(--font-heading)" }}>
              Saffron & Song
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href as any /* eslint-disable-line @typescript-eslint/no-explicit-any */}
              className={cn(
                "text-sm font-semibold leading-6 text-[color:var(--navy)] hover:text-[color:var(--saffron)] transition-colors",
                pathname === item.href && "text-[color:var(--saffron)]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={togglePath as any /* eslint-disable-line @typescript-eslint/no-explicit-any */}
            className="text-sm font-semibold leading-6 text-[color:var(--navy)] hover:text-[color:var(--saffron)] transition-colors flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            {toggleLocale.toUpperCase()}
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="space-y-1 px-6 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href as any /* eslint-disable-line @typescript-eslint/no-explicit-any */}
              className={cn(
                "block rounded-lg px-3 py-2 text-base font-semibold text-[color:var(--navy)] hover:bg-gray-50",
                pathname === item.href && "bg-gray-50 text-[color:var(--saffron)]"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href={togglePath as any /* eslint-disable-line @typescript-eslint/no-explicit-any */}
            className="block rounded-lg px-3 py-2 text-base font-semibold text-[color:var(--navy)] hover:bg-gray-50 flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Globe className="h-4 w-4" />
            {dict.nav.language}: {toggleLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}