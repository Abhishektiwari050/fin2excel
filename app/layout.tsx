import type {Metadata} from 'next';
import './globals.css'; 
import { Navigation } from "@/components/sections/Navigation"
import { Footer } from "@/components/sections/Footer"
import SmoothScroll from "@/components/ui/smooth-scroll"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { FloatingContact } from "@/components/ui/FloatingContact"
import { JsonLd } from "@/components/ui/JsonLd"

export const metadata: Metadata = {
  metadataBase: new URL('https://fin2excel.com'),
  title: 'Fin2Excel | Private Financial Concierge for HNI & NRI Families',
  description: 'India\'s premier private financial concierge — wealth management, legal & taxation, elder care, and property management for high-net-worth and NRI families.',
  keywords: ['financial concierge', 'HNI', 'NRI', 'wealth management', 'property management', 'elder care', 'India', 'private advisory'],
  authors: [{ name: 'Fin2Excel Private Advisory' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Fin2Excel | Private Financial Concierge',
    description: 'India\'s premier private financial concierge for global families. Defining legacy through precision and absolute trust.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Fin2Excel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fin2Excel | Private Financial Concierge',
    description: 'India\'s premier private financial concierge for global families.',
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-swiss-bg text-swiss-black noise-bg font-sans" suppressHydrationWarning>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Fin2Excel",
          "url": "https://fin2excel.com",
          "logo": "https://fin2excel.com/assets/logo.png",
          "description": "India's premier private financial concierge for high-net-worth and NRI families.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "E-578, Greater Kailash II",
            "addressLocality": "New Delhi",
            "postalCode": "110070",
            "addressCountry": "IN"
          },
          "telephone": "+91-95607-59494"
        }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:px-4 focus:py-2 focus:bg-swiss-black focus:text-swiss-bg focus:rounded-sm focus:text-sm focus:font-bold">
          Skip to content
        </a>
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          <Navigation />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <FloatingContact />
        </SmoothScroll>
      </body>
    </html>
  );
}
