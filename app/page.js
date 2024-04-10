import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
   <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <img src="https://ovrtonemedia.com/wp-content/uploads/2024/04/OVRTONE-Logo_White_Trans_NoText_MedRes.png" alt="OVRTONE Media Group" />
        <h1>oVRTONE</h1>
        <h2>Media Group</h2>
        <Link href="mailto:contact@ovrtonemedia.com">contact@ovrtonemedia.com</Link>
        </div>
   </div>
  );
}
