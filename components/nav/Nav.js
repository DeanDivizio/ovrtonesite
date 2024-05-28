'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./nav.module.css";

const Nav = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownClass, setDropdownClass] = useState(styles.dropdown);

    const handleClick = () => {
        setDropdownVisible(!isDropdownVisible);
        if (isDropdownVisible === true) {
            setDropdownClass(`${styles.dropdown} ${styles.visible}`);
        } else {
            setDropdownClass(styles.dropdown);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.brand}>
                <Link href="/"><p><span>OVRTONE</span> Media Group</p></Link>
            </div>
            <div className={styles.links}>
                
                <Link href="/about">About</Link>
                <div onClick={handleClick}>
                    Solutions
                    <div className={dropdownClass}>
                        <Link href="/web">Web Design & Development</Link>
                        <Link href="/media">Media Production</Link>
                        <Link href="/branding">Logo & Brand Design</Link>
                    </div>
                </div>
                <Link href="/pricing">Pricing</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
};

export default Nav;