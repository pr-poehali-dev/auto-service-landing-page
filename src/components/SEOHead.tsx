import { Helmet } from "react-helmet-async";

interface ServiceSchema {
  serviceType: string;
  price: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface ArticleSchema {
  datePublished?: string;
  dateModified?: string;
  section?: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  service?: ServiceSchema;
  faq?: FAQItem[];
  image?: string;
  keywords?: string;
  breadcrumbs?: BreadcrumbItem[];
  article?: ArticleSchema;
}

const SITE_URL = "https://24razval.ru";
const OG_IMAGE = "https://cdn.poehali.dev/projects/46745fea-3775-44bf-b9bf-65fdd59d5b7d/bucket/efa2803e-3b6d-4ed9-bf7e-c246a1fd06dd.jpg";

export default function SEOHead({ title, description, path, service, faq, image, keywords, breadcrumbs, article }: SEOHeadProps) {
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

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

      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          })}
        </script>
      )}

      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: `${SITE_URL}${item.path}`,
            })),
          })}
        </script>
      )}

      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            image: ogImage,
            datePublished: article.datePublished ?? "2026-09-24",
            dateModified: article.dateModified ?? "2026-09-24",
            author: {
              "@type": "Organization",
              name: "Азимут Станция техобслуживания",
            },
            publisher: {
              "@type": "Organization",
              name: "Азимут Станция техобслуживания",
              logo: {
                "@type": "ImageObject",
                url: OG_IMAGE,
              },
            },
            articleSection: article.section,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
          })}
        </script>
      )}
    </Helmet>
  );
}