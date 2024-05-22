import React from 'react';
import Link from 'next/link';
import styles from "./nav.module.css";

const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.brand}>
                <p><span>oVRToNE</span> Media Group</p>
            </div>
            <div className={styles.links}>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Nav;