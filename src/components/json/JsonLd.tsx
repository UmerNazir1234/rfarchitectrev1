import React from "react";

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Organization"],
        "@id": "https://rftechnologies.com.pk/#person",
        name: "RF Technologies",
      },
      {
        "@type": "WebSite",
        "@id": "https://rftechnologies.com.pk/#website",
        url: "https://rftechnologies.com.pk",
        name: "RF Technologies",
        publisher: { "@id": "https://rftechnologies.com.pk/#person" },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://rftechnologies.com.pk/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ImageObject",
        "@id":
          "https://rftechnologies.com.pk/wp-content/uploads/2021/05/3D-Logo-05.png",
        url: "https://rftechnologies.com.pk/wp-content/uploads/2021/05/3D-Logo-05.png",
        width: "6001",
        height: "6000",
        caption: "RF Technologies Logo",
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://rftechnologies.com.pk/#webpage",
        url: "https://rftechnologies.com.pk/",
        name: "Premier Software Services for Digital Products : RF Tech",
        datePublished: "2021-03-11T07:37:40+00:00",
        dateModified: "2024-07-26T11:07:35+00:00",
        about: { "@id": "https://rftechnologies.com.pk/#person" },
        isPartOf: { "@id": "https://rftechnologies.com.pk/#website" },
        primaryImageOfPage: {
          "@id":
            "https://rftechnologies.com.pk/wp-content/uploads/2021/05/3D-Logo-05.png",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": "https://rftechnologies.com.pk/author/admin/",
        name: "admin",
        url: "https://rftechnologies.com.pk/author/admin/",
        image: {
          "@type": "ImageObject",
          "@id":
            "https://secure.gravatar.com/avatar/39fd5baa714e0149715bc184a2e7d570?s=96&amp;d=mm&amp;r=g",
          url: "https://secure.gravatar.com/avatar/39fd5baa714e0149715bc184a2e7d570?s=96&amp;d=mm&amp;r=g",
          caption: "admin",
          inLanguage: "en-US",
        },
        sameAs: ["https://rftechnologies.com.pk"],
      },
      {
        "@type": "Article",
        headline: "Premier Software Services for Digital Products : RF Tech",
        keywords: "software services",
        datePublished: "2021-03-11T07:37:40+00:00",
        dateModified: "2024-07-26T11:07:35+00:00",
        author: {
          "@id": "https://rftechnologies.com.pk/author/admin/",
          name: "admin",
        },
        publisher: { "@id": "https://rftechnologies.com.pk/#person" },
        description:
          "RF Tech Solutions: Premier Software Services Provider. Transform your ideas into digital success with top-tier solutions and marketing strategies.",
        name: "Premier Software Services for Digital Products : RF Tech",
        "@id": "https://rftechnologies.com.pk/#richSnippet",
        isPartOf: { "@id": "https://rftechnologies.com.pk/#webpage" },
        image: {
          "@id":
            "https://rftechnologies.com.pk/wp-content/uploads/2021/05/3D-Logo-05.png",
        },
        inLanguage: "en-US",
        mainEntityOfPage: { "@id": "https://rftechnologies.com.pk/#webpage" },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default JsonLd;
