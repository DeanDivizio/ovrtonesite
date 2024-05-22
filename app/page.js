import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
   <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
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
  );
}
