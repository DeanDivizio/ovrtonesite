import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/card/Card";
import Testimonial from "@/components/testimonialModule/Testimonial";


export default function Home() {
  return (
   <div className={styles.homeContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
        <h1>Realize <span className={styles.nonEmpHeading}>Your Goals</span></h1>
        <p>At OVRTONE Media Group, we leverage our skills across the fields of media, technology, and design to help you land more customers, get more sales, and ultimately <em><strong>increase your bottom line.</strong></em></p>
        <div className={styles.ctaButtons}>
          <button className="primaryCTA">
            <Link href="/contact">Contact Us</Link>
          </button>
          <button className="secondaryCTA">
            <Link href="/services">View Our Services</Link>
          </button>
          </div>
        </div>
        <img className={styles.image} src="http://api.ovrtonemedia.com/wp-content/uploads/2023/04/0A3A9955-Edit-Large.jpeg" alt="Example imgage replace this text" />
      </div>
      <div className={styles.chevron}>&#9660;</div>
      <div className={styles.whatWeDoSection}>
        <h2>What Do We Do?</h2>
        <p>In short, everything you need to turn your <em>business</em> into a <em>brand</em>.</p>
        <div className={styles.servicesCards}>
          {/* cards that represent services */}
          <Card
            title="Web Design & Development"
            description="We create beautiful, responsive websites that look great on any device."
            image="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3204474/desktop-icon-sm.png"
            link="/services" />
            <Card
            title="Video Production & Photography"
            description="We create beautiful, responsive websites that look great on any device."
            image="/images/cameraIcon.png"
            link="/services" />
            <Card
            title="Logo & Brand Design"
            description="We create beautiful, responsive websites that look great on any device."
            image="/images/pencilIcon.png"
            link="/services" />
            <Card
            title="Analytics & SEO"
            description="We create beautiful, responsive websites that look great on any device."
            image="/images/graphIcon.png"
            link="/services" />
        </div>
      </div>
      {/* <div className={styles.ourWorkSection}>
        <h2>Our Work</h2>
        <p>Check out some of the projects we've worked on for our clients.</p>
        {/* cards that represent projects
      </div> */}
      <div className={styles.testimonialsSection}>
        <h2>Testimonials</h2>
        <p>Here's what some of our clients have to say about us.</p>
        <div className={styles.testimonials}>
          {/* cards that represent testimonials */}
          <Testimonial 
            name="Drew Rautenberg"
            title="Owner"
            company="Bark Productions"
            link="https://www.barkpro.live"
            quote="Dean is super great and awesome and I'm gunna reccomend him for everything. uwu~"
            image="http://api.ovrtonemedia.com/wp-content/uploads/2024/05/photo_2024-05-23-10.04.28.jpeg"/>
        </div>
      </div>
      <div className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>Ready to take your business to the next level? Let's get started.</p>
        <div className={styles.ctaButtons}>
          <button className="primaryCTA">
            <Link href="/contact">Contact Us</Link>
          </button>
          <p>or... </p>
          <button className="secondaryCTA">
            <Link href="/pricing">View Pricing</Link>
          </button>
        </div>
      </div>
   </div>
  );
}
