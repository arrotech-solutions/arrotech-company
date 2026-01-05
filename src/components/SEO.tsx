import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogType?: 'website' | 'article';
    ogImage?: string;
    twitterHandle?: string;
    keywords?: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
}

const SEO = ({
    title,
    description = "Arrotech - Transforming Business with AI Solutions. Specialized in AI Automation, Conversational AI, and Research Intelligence.",
    canonical,
    ogType = 'website',
    ogImage = '/logo.png', // Fallback to our root logo
    twitterHandle = '@ArrotechAI',
    keywords = 'AI, Artificial Intelligence, Business Automation, Kenya Tech, Arrotech, AI Solutions, Machine Learning',
    publishedTime,
    modifiedTime,
    author = 'Arrotech Solutions'
}: SEOProps) => {
    const siteTitle = title ? `${title} | Arrotech` : 'Arrotech - AI Solutions Company';
    const siteUrl = 'https://arrotechsolutions.com';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    // JSON-LD Structured Data
    const schemaOrgJSONLD = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Arrotech",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "sameAs": [
            "https://x.com/ArrotechAI",
            "https://www.linkedin.com/company/arrotech-ai",
            "https://www.instagram.com/arrotech/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@arrotechsolutions.com",
            "contactType": "customer service",
            "areaServed": "KE"
        },
        "description": description
    };

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:site_name" content="Arrotech" />

            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrgJSONLD)}
            </script>
        </Helmet>
    );
};

export default SEO;
