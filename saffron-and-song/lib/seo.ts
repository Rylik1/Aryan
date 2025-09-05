import type { Metadata } from "next";

export function baseMetadata(): Metadata {
  return {
    metadataBase: new URL("https://example.com"),
    openGraph: {
      type: "website",
      title: "Saffron & Song",
      description: "Authentic Persian cuisine in London",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "Saffron & Song – Iranian Traditional Restaurant, London",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Saffron & Song",
      description: "Authentic Persian cuisine in London",
      images: ["/og.jpg"],
    },
  };
}

export function pageMetadata(
  title: string,
  description: string,
  opts?: Partial<Metadata>,
): Metadata {
  return {
    ...baseMetadata(),
    title,
    description,
    openGraph: { ...baseMetadata().openGraph, title, description },
    twitter: { ...baseMetadata().twitter, title, description },
    ...opts,
  };
}


