/**
 * JSON-LD structured data for Wavyfy
 * Rendered as a server component — zero client JS cost.
 * Includes: Organization, WebSite, and Service schemas.
 */
export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wavyfy",
    url: "https://www.wavyfy.com",
    logo: "https://www.wavyfy.com/logo-icon.png",
    description:
      "Wavyfy is a web design and development agency specializing in Next.js, SaaS platforms, brand identity, and conversion-driven digital products.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@wavyfy.com",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Starter Web Presence",
        description:
          "Landing page or marketing site with brand-consistent design and SEO foundation.",
        priceCurrency: "USD",
        price: "2500",
      },
      {
        "@type": "Offer",
        name: "Growth Platform",
        description:
          "Full-featured SaaS or product site with advanced interactions, CMS, and analytics.",
        priceCurrency: "USD",
        price: "4500",
      },
      {
        "@type": "Offer",
        name: "Enterprise System",
        description:
          "End-to-end digital infrastructure for scaling businesses: web app, design system, and API integrations.",
        priceCurrency: "USD",
        price: "9000",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wavyfy",
    url: "https://www.wavyfy.com",
    description:
      "Web design and SaaS development agency. We build conversion-driven websites, platforms, and brand identities.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.wavyfy.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
