import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cinzel_Decorative, Cinzel, Josefin_Sans } from "next/font/google"


export const metadata:Metadata = {
  title: "OVRTONE Media Group",
  description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media production, web design, web development, and branding solutions tailored for small businesses. We service clients in Kalamazoo, Grand Rapids, Holland, and more.",
  robots: {
    index: true,
    follow: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  generator: 'Next.js',
  applicationName: 'OVRTONE Media Group',
  referrer: 'origin-when-cross-origin',
  keywords: ['Media', 'Web', 'Branding', 'Video', 'Photo', 'Design', 'OVRTONE', 'OVRTONE Media Group', 'OVERTONE Media', 'OVERTONE Media Group'],
  authors: [{ name: 'Dean', url: 'https://deandivizio.com' }],
  creator: 'Dean Divizio',
  publisher: 'OVRTONE Media Group, LLC',
  openGraph: {
    title: 'OVRTONE Media Group',
    description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media production, web design, web development, and branding solutions tailored for small businesses. We service clients in Kalamazoo, Grand Rapids, Holland, and more.",
    url: 'https://ovrtonemedia.com',
    siteName: 'OVRTONE Media Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.ovrtonemedia.com/images/OGImage.jpg',
        width: 2000,
        height: 2000,

      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OVRTONE Media Group',
    description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media production, web design, web development, and branding solutions tailored for small businesses. We service clients in Kalamazoo, Grand Rapids, Holland, and more.",
    images: ['https://www.ovrtonemedia.com/images/TwitterImage.jpg'],
  }

};

export const headingFont = Cinzel ({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-heading'
})
export const accentFont = Cinzel_Decorative ({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-accent'
})
export const bodyFont = Josefin_Sans ({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-body'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${accentFont.variable} ${bodyFont.variable}`}>
      <GoogleAnalytics gaId="G-FXBY3L85K8" />
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
