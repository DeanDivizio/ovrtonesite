import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
   <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <img src="http://api.ovrtonemedia.com/wp-content/uploads/2024/05/OVRTONE_White_Trans_noText_FullRes.png" alt="OVRTONE Media Group" />
        <h1>oVRToNE</h1>
        <h2>Media Group</h2>
        <Link href="mailto:contact@ovrtonemedia.com">contact@ovrtonemedia.com</Link>
        </div>
   </div>
  );
}
