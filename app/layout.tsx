import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
})

export const metadata: Metadata = {
  title: "A&J Mobile Detailing Services | Professional Car Detailing in Concord, CA",
  description:
    "Professional mobile car detailing services in Concord, CA and Bay Area. Interior & exterior detailing, headlight restoration, engine bay cleaning. Your Car, Our Care – Anytime, Anywhere.",
  keywords: "mobile car detailing, Concord CA, Bay Area, car wash, auto detailing, headlight restoration",
  openGraph: {
    title: "A&J Mobile Detailing Services",
    description: "Professional mobile car detailing in Concord, CA and Bay Area",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "A&J Mobile Detailing Services",
  description: "Professional mobile car detailing services",
  owner: {
    "@type": "Person",
    name: "Angel Hinojosa",
  },
  telephone: "+1-925-214-6681",
  email: "angelhinojosa2009@icloud.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Concord",
    addressRegion: "CA",
  },
  areaServed: ["Bay Area", "Concord CA", "Walnut Creek", "Brentwood CA"],
  foundingDate: "2023",
  slogan: "Your Car, Our Care – Anytime, Anywhere",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="bg-black text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
