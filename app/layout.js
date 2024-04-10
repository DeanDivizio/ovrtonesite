import "./globals.css";
import IntroAnimation from "../components/IntroAnimation";

export const metadata = {
  title: "OVRTONE Media Group",
  description: "Throughout West Michigan, OVRTONE Media offers high-quality, affordable media and design solutions tailored for small businesses and individuals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='layoutContainer'>
      <IntroAnimation />
      <video autoPlay loop="loop" muted id="bgVid">
        <source src="https://ovrtonemedia.com/wp-content/uploads/2023/04/OVRTONE-BG-Vid.mov" type="video/quicktime"/>
        </video>
        {children}
      </body>
    </html>
  );
}
