/**
 * JSON-LD structured data for Wavyfy
 * Rendered as a server component — zero client JS cost.
 * Includes: Organization, WebSite, and Service schemas.
 */
export default function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Wavyfy",
    url: "https://www.wavyfy.com",
    logo: "https://www.wavyfy.com/logo-icon.png",
    description:
      "Wavyfy builds SaaS applications, Shopify stores, and custom websites for early-stage startups. We provide end-to-end design, development, and deployment.",
    areaServed: "Worldwide",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@wavyfy.com",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wavyfy",
    url: "https://www.wavyfy.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
