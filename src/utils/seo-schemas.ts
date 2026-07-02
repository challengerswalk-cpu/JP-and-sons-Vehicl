export const globalLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutomotiveBusiness", "LocalBusiness"],
  "name": "JP & Sons Vehicle Transport",
  "image": "https://www.jpsonsvehicletransport.co.uk/logo.png",
  "url": "https://www.jpsonsvehicletransport.co.uk",
  "telephone": "07814 177622",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "High Wycombe",
    "addressLocality": "High Wycombe",
    "addressRegion": "Buckinghamshire",
    "postalCode": "",
    "addressCountry": "UK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.6286,
    "longitude": -0.7482
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "££",
  "areaServed": [
    {
      "@type": "City",
      "name": "High Wycombe"
    },
    {
      "@type": "City",
      "name": "Marlow"
    },
    {
      "@type": "City",
      "name": "Beaconsfield"
    },
    {
      "@type": "City",
      "name": "Maidenhead"
    },
    {
      "@type": "City",
      "name": "Slough"
    },
    {
      "@type": "City",
      "name": "Reading"
    },
    {
      "@type": "City",
      "name": "Oxford"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "sameAs": []
};

export const globalWebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "JP & Sons Vehicle Transport",
  "url": "https://www.jpsonsvehicletransport.co.uk/"
};

export const globalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JP & Sons Vehicle Transport",
  "url": "https://www.jpsonsvehicletransport.co.uk",
  "logo": "https://www.jpsonsvehicletransport.co.uk/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "07814 177622",
    "contactType": "customer service"
  }
};
