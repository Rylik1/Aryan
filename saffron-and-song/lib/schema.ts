export function restaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Saffron & Song – Iranian Traditional Restaurant, London',
    image: 'https://example.com/og.jpg',
    telephone: '+44 20 1234 5678',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Kensington High St',
      addressLocality: 'London',
      postalCode: 'W8',
      addressCountry: 'GB',
    },
    priceRange: '££',
    servesCuisine: ['Persian', 'Middle Eastern'],
    url: 'https://example.com',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '12:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '12:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '12:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '12:00', closes: '22:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '12:00', closes: '23:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '12:00', closes: '23:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '21:00' },
    ],
  };
}

export function menuSchema() {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Menu',
    name: 'Saffron & Song Menu',
    hasMenuSection: [
      { '@type': 'MenuSection', name: 'Kebabs' },
      { '@type': 'MenuSection', name: 'Stews' },
      { '@type': 'MenuSection', name: 'Rice' },
      { '@type': 'MenuSection', name: 'Appetizers' },
      { '@type': 'MenuSection', name: 'Desserts' },
      { '@type': 'MenuSection', name: 'Drinks' },
    ],
  };
}


