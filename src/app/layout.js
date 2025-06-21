import Preloader from "@/components/ui/preloader";
import "./global.css"
import BootstrapForBrowser from "@/components/ui/bootstrapForBrowser";
import Header from "@/components/sections/header";
import CallToAction from "@/components/sections/callToAction";
import Footer from "@/components/sections/footer";

import { siteMetadata } from './metadata'

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://visuallinestudios.com', // Replace with your actual domain
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Visual Line Studios',
    images: [
      {
        url: '/og-image.jpg', // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Visual Line Studios - Professional Video Production in Bengaluru',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/og-image.jpg'], // Same image as OG
  },
  alternates: {
    canonical: 'https://visuallinestudios.com', // Replace with your actual domain
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'geo.position': '12.9716;77.5946', // Bengaluru coordinates
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        
        {/* Business/Local SEO */}
        <meta name="business.contact_data.phone_number" content="+91 90718 55089" />
        <meta name="business.contact_data.locality" content="Sahakara Nagar" />
        <meta name="business.contact_data.region" content="Bengaluru" />
        <meta name="business.contact_data.country" content="India" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Visual Line Studios",
              "description": siteMetadata.description,
              "url": "https://visuallinestudios.com", // Replace with actual domain
              "telephone": "+91 90718 55089",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sahakara Nagar",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "12.9716",
                "longitude": "77.5946"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Bengaluru"
                },
                {
                  "@type": "State",
                  "name": "Karnataka"
                }
              ],
              "serviceType": "Video Production Services",
              "priceRange": "$$",
              "openingHours": "Mo-Sa 09:00-18:00",
              "sameAs": [
                // Add your social media URLs here
                // "https://www.instagram.com/visuallinestudios",
                // "https://www.facebook.com/visuallinestudios",
                // "https://www.youtube.com/channel/your-channel"
              ]
            })
          }}
        />
      </head>

      <body suppressHydrationWarning>
        <BootstrapForBrowser />
        <Preloader />
        <Header />
        {children}
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
