import "./globals.css";
import IntroAnimation from "../components/IntroAnimation";
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: "OVRTONE Media Group",
  description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media production, web design, web development, and branding solutions tailored for small businesses. We service clients in Kalamazoo, Grand Rapids, Holland, and more.",
  robots: {
    index: false,
    follow: false,
    googleBot:{
      index: false,
      follow: false,
      noimageindex: true,
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
  },
  // twitter: {
  //   card: 'summary',
  //   title: 'OVRTONE Media Group',
  //   description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media production, web design, web development, and branding solutions tailored for small businesses. We service clients in Kalamazoo, Grand Rapids, Holland, and more.",
  // },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='layoutContainer'>
      {/* <IntroAnimation /> */}
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
