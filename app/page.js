import styles from "./page.module.css";
import Link from "next/link";


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
        {/* cards that represent services */}
      </div>
      <div className={styles.ourWorkSection}>
        <h2>Our Work</h2>
        <p>Check out some of the projects we've worked on for our clients.</p>
        {/* cards that represent projects */}
      </div>
      <div className={styles.testimonialsSection}>
        <h2>Testimonials</h2>
        <p>Here's what some of our clients have to say about us.</p>
        {/* cards that represent testimonials */}
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
