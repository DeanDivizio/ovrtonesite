import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/personalSection/Header";


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

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
        <Header />
        {children}
        {/*footer here*/}
        </>
  );
}
