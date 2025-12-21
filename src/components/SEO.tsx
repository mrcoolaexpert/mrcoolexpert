import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: "website" | "article" | "service";
}

const SEO = ({
  title,
  description,
  keywords = "AC service Tiruppur, AC repair Tiruppur, AC installation Tiruppur, AC mechanic Avinashi, AC service Palladam, split AC service, window AC repair, AC gas filling",
  canonicalUrl,
  ogImage = "/og-image.jpg",
  type = "website",
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Mr. Cool Service - AC Experts in Tiruppur`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Mr. Cool Service");
    updateMetaTag("robots", "index, follow");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "Mr. Cool Service", true);
    updateMetaTag("og:locale", "en_IN", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Geo tags for local SEO
    updateMetaTag("geo.region", "IN-TN");
    updateMetaTag("geo.placename", "Tiruppur");

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, type]);

  return null;
};

// Local Business Schema Component
export const LocalBusinessSchema = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://mrcoolservice.in",
      "name": "Mr. Cool Service",
      "alternateName": "Mr. Cool AC Service Tiruppur",
      "description": "Professional AC installation, repair, and maintenance services in Tiruppur, Avinashi, Palladam and surrounding areas within 15km radius.",
      "url": "https://mrcoolservice.in",
      "telephone": "+918220915207",
      "email": "mrcoolacexpert@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tiruppur",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.1085",
        "longitude": "77.3411"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Tiruppur"
        },
        {
          "@type": "City",
          "name": "Avinashi"
        },
        {
          "@type": "City",
          "name": "Palladam"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "11.1085",
          "longitude": "77.3411"
        },
        "geoRadius": "15000"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      "priceRange": "₹₹",
      "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AC Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AC Installation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AC Repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AC Gas Filling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AC General Service"
            }
          }
        ]
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      script?.remove();
    };
  }, []);

  return null;
};

export default SEO;
