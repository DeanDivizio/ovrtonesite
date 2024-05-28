import "./globals.css";
import IntroAnimation from "../components/IntroAnimation";
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';

export const metadata = {
  title: "OVRTONE Media Group",
  description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media and design solutions tailored for small businesses and individuals.",
  icon: "/images/logo.jpg",
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
