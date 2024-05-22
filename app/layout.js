import "./globals.css";
import IntroAnimation from "../components/IntroAnimation";

export const metadata = {
  title: "OVRTONE Media Group",
  description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media and design solutions tailored for small businesses and individuals.",
  icon: "/images/logo.jpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='layoutContainer'>
      <IntroAnimation />
      <video autoPlay loop="loop" muted id="bgVid">
        <source src="https://api.ovrtonemedia.com/wp-content/uploads/2024/05/OVRTONE_Site_BGvid_V1.mov" type="video/mp4"/>
        </video>
        {children}
      </body>
    </html>
  );
}
