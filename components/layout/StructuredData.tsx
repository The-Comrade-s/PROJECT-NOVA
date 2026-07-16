import { SITE_CONFIG } from "@/constants/theme";

/**
 * Injects Organization + WebSite structured data so search engines can
 * understand the site beyond its rendered text (EPS-006 §18). Rendered
 * server-side in the root layout — no client JS required.
 */
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      {
        "@type": "WebSite",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
