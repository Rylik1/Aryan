export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export default function LocaleLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}


