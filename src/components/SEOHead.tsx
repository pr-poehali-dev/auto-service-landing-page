import { Helmet } from "react-helmet-async";

interface ServiceSchema {
  serviceType: string;
  price: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  service?: ServiceSchema;
}

const SITE_URL = "https://24razval.ru";
const OG_IMAGE = "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/bucket/efa2803e-3b6d-4ed9-bf7e-c246a1fd06dd.jpg";

export default function SEOHead({ title, description, path, service }: SEOHeadProps) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {service && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: service.serviceType,
            provider: {
              "@type": "AutoRepair",
              name: "Азимут Станция техобслуживания",
              telephone: "+79117478057",
              address: {
                "@type": "PostalAddress",
                streetAddress: "шоссе Революции, 83",
                addressLocality: "Санкт-Петербург",
                addressCountry: "RU",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Санкт-Петербург",
            },
            offers: {
              "@type": "Offer",
              price: service.price,
              priceCurrency: "RUB",
            },
          })}
        </script>
      )}
    </Helmet>
  );
}
