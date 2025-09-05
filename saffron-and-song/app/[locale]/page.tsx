import { headers } from "next/headers";

export default function LocaleHome() {
  const hdrs = headers();
  const locale = hdrs.get("x-locale") || "en";
  const dir = hdrs.get("x-dir") || (locale === "fa" ? "rtl" : "ltr");
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[color:var(--ivory)] text-[color:var(--navy)]">
      <div className="text-center space-y-4 p-8">
        <div className="inline-block rounded-md bg-[color:var(--navy)] px-4 py-2">
          <img src="/logo.svg" alt="Saffron & Song logo" className="h-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
          Saffron &amp; Song
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          {locale === "fa" ? "رستوران سنتی ایرانی در لندن" : "Iranian Traditional Restaurant, London"}
        </p>
        <p className="text-sm opacity-70">Locale: {locale} | Dir: {dir}</p>
      </div>
    </div>
  );
}


