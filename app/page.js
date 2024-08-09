import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/card/Card";
import Testimonial from "@/components/testimonialModule/Testimonial";



export default function Home() {

  let isMobile = false;
function isMobileCheck() {
  if (typeof window != "undefined") {
    isMobile = true
    console.log(isMobile);
  }
}
isMobileCheck();

  return (
   <div className={styles.homeContainer}>
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-2] video">
      <video className="w-full h-full object-cover" autoPlay loop="loop" muted playsInline id="bgVid" >
        <source src="https://api.ovrtonemedia.com/wp-content/uploads/2024/05/OVRTONE_Site_BGvid_V1.mov" type="video/mp4"/>
      </video>
    </div>
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-1] bg-black bg-opacity-35 backdrop-blur-[100px] overlay"></div>
      <div className="flex flex-col items-center justify-center w-[calc(100vw-10vw)] h-screen p-[0vw_5vw] bg-transparent heroContent">
        <div className="flex flex-col items-center justify-center max-w-[90%] text-center heroText">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary text-10xl xl: lg:leading-[120%] font-bold tracking-[0.6rem] mb-5 heroContent-h1">Realize <span className='font-normal text-white'><br></br>Your Goals</span></h1>
        <p className="font-josefin text-[calc(1rem+1vw)] font-light text-white mb-[4vh] heroContent-p">At OVRTONE Media Group, we leverage our skills across the fields of media, technology, and design to help you land more customers, get more sales, and ultimately <em><strong>increase your bottom line.</strong></em></p>
        <div className="flex items-center justify-start mt-[2vh] ctaButtons">
          <button className="primaryCTA">
            <Link href="/contact">Get Started</Link>
          </button>
          <p style={{textAlign:'center'}}>or</p>
          <button className="secondaryCTA">
            <Link href="/pricing">View Pricing</Link>
          </button>
          </div>
        </div>
        {/* <div className={styles.chevron}>&#9660;</div> */}
        {/* <img className={styles.image} src="http://api.ovrtonemedia.com/wp-content/uploads/2023/04/0A3A9955-Edit-Large.jpeg" alt="Example imgage replace this text" /> */}
      </div>
      <div className="flex flex-col items-center justify-center w-screen min-h-[80vh] bg-black bg-opacity-98 bg-cover text-white pt-20 pb-20 whatWeDoSection">
        <h2>What Do We Do?</h2>
        <p className="text-center">In short, everything you need to turn your <em>business</em> into a <em>brand</em>.</p>
        <div className={styles.servicesCards}>
          <Card
            title="Web Dev"
            description="We create beautiful, blazing fast websites that look great on any device."
            bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/07/webdarkBlur.webp'
            link="/services" />
            <Card
            title="Media Production"
            description="Represent your brand with media that resonates."
            image="/images/cameraIcon.png"
            bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/MediaProductionCardBG_v1.jpg'
            link="/services" />
            <Card
            title="Brand Design"
            description="Starting from scratch? We can deliver everything you need to get started."
            bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/07/logodesigndarkblur-1.webp'
            image="/images/pencilIcon.png"
            link="/services" />
        </div>
      </div>
      <div className={styles.testimonialsSection}>
        <h2>Testimonials</h2>
        <p>{`Here's what some of our clients have to say about us.`}</p>
        <div className={styles.testimonials}>
          <Testimonial 
            name="Gabrielle Langejans"
            title="Marketer"
            quote={`I’ve had the opportunity to get a few headshots done from the team at OVRTONE and the entire experience was amazing! No matter the kind of pictures you’re looking for, I believe they can give you the best results! I highly recommend!`}
            image="http://api.ovrtonemedia.com/wp-content/uploads/2024/07/Gabby.webp"/>
        </div>
      </div>
      <div className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>{`Ready to take your business to the next level? Let's get started.`}</p>
        <div className={styles.ctaButtons}>
          <button className="primaryCTA">
            <Link href="/contact">Contact Us</Link>
          </button>
          <p style={{marginRight: '2rem', marginLeft:'2rem'}}>or... </p>
          <button className="secondaryCTA">
            <Link href="/pricing">View Pricing</Link>
          </button>
        </div>
      </div>
   </div>
  );
}
