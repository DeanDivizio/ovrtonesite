import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.linksLeft}>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Use</Link>
            </div>
            <div className={styles.centerContent}>
                <img src="/images/logo.jpg" alt="OVRTONE Media Group Logo" />
                <p>Copyright OVRTONE Media Group 2024 | All Rights Reserved | Web Design by... Us of Course!</p>
            </div>
            <div className={styles.linksRight}>
                <Link href="/contact">Contact Us</Link>
                {/* <Link href="/services">View Our Services</Link> */}
                <Link href="/about">About Us</Link>
                <Link href="/pricing">Pricing</Link>
            </div>
        </footer>
    )
}
export default Footer;