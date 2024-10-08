'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from "./nav.module.css";
import { motion } from 'framer-motion';

const dynamicImages = [
    {src: 'http://api.ovrtonemedia.com/wp-content/uploads/2024/07/bggradient.webp', alt: 'Home'},
    {src: 'http://api.ovrtonemedia.com/wp-content/uploads/2024/07/bggradient.webp', alt: 'About'},
    {src: 'http://api.ovrtonemedia.com/wp-content/uploads/2024/07/webdark.webp', alt: 'Web Design & Development'}, 
    {src: 'http://api.ovrtonemedia.com/wp-content/uploads/2024/05/MediaProductionCardBG_v1.jpg', alt: 'Media Production'}, 
    {src: 'http://api.ovrtonemedia.com/wp-content/uploads/2024/07/logodesigndark.jpg', alt: 'Logo & Brand Design'}, 
    {src: 'http://api.ovrtonemedia.com/wp-content/uploads/2024/07/bggradient.webp', alt: 'Pricing'}, 
    {src: 'http://api.ovrtonemedia.com/wp-content/uploads/2024/07/bggradient.webp', alt: 'Contact'}
];
const fadeFromRight = { 
    hidden: { opacity: 0, x: 200, margin: 0, padding: 0 },
    visible: { opacity: 1, x: 0, margin: 0, padding: 0 }
};
// let curve = [0, 0.4, 0.6, 1];
const curve = "easeInOut";
const animDuration = 0.3;

export default function Nav() {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [menuStyles, setMenuStyles] = useState(styles.menu);
    const [dynamicImage, setDynamicImage] = useState(dynamicImages[0]);

    const handleClick = () => {
        if (isMenuVisible) {
            setTimeout(() => {
                setMenuVisible(false);
            }, 300);
            setMenuStyles(`${styles.menu} ${styles.exit}`);
        }else {
            setMenuVisible(true);
            setMenuStyles(styles.menu);
        }
    }
    const handleHover = (i) => {
        setDynamicImage(dynamicImages[i]);
    }
    let isMobile = false;
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
        isMobile = true;
    }
        return (
            <div className="flex flex-row justify-between items-center p-8 absolute z-50 w-screen">
                <div className="mt-1 ml-2">
                    <Link href="/" className='no-underline'><p className='font-style text-lg lg:text-2xl'><span className='bg-gradient-green bg-clip-text text-transparent font-semibold '>OVRTONE</span> Media Group</p></Link>
                </div>
                <div className={styles.links}>
                    <div onClick={handleClick}>
                        {isMobile ? <img src='/images/Menu2.webp' style={{width: '8vw', opacity: '60%', marginRight: '1vw'}} /> : "Menu" }
                        {isMenuVisible && !isMobile ? (
                            <div className={menuStyles}>
                                <div className={styles.menuClose} onClick={handleClick}>X</div>
                                <div className={styles.menuTop}>
                                    <Link href="/" onMouseEnter={() => handleHover(0)} style={{marginRight: '1vw'}}><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0}}>Home</motion.p></Link>
                                    <Link href="/about" onMouseEnter={() => handleHover(1)} style={{marginRight: '1.5vw'}}><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.1}}>About</motion.p></Link>
                                </div>
                                <div className={styles.menuMid}>
                                    <Link href="/media" onMouseEnter={() => handleHover(3)} style={{marginRight: '2vw'}}><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.2}}>Media Production</motion.p></Link>
                                    <Link href="/web" onMouseEnter={() => handleHover(2)} style={{marginRight: '2.5vw'}}><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.3}}>Web Design & Development</motion.p></Link>
                                    <Link href="/branding" onMouseEnter={() => handleHover(4)} style={{marginRight: '2vw'}}><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.4}}>Logo & Brand Design</motion.p></Link>
                                </div>
                                <div className={styles.menuBottom}>
                                    <Link href="/pricing" onMouseEnter={() => handleHover(5)} style={{marginRight: '1.5vw'}}><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.5}}>Pricing</motion.p></Link>
                                    <Link href="/contact" onMouseEnter={() => handleHover(6)} style={{marginRight: '1vw'}}><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.6}}>Contact</motion.p></Link>
                                </div>
                                <div className={styles.menuImage}>
                                    <img src={dynamicImage.src} alt={dynamicImage.alt} />
                                </div>
                            </div>
                        ) : null}
                        {isMenuVisible && isMobile ? (
                            <div className={menuStyles}>
                                {/* <div className={styles.menuBrand}>
                                    <img src='http://api.ovrtonemedia.com/wp-content/uploads/2024/04/OVRTONE-Logo_White_Trans_NoText_MedRes.png' alt='OVRTONE Media Group Icon' />
                                    </div> */}
                                <div className={styles.menuClose} onClick={() => handleClick} style={{justifyContent: "flex-start"}}>X</div>
                                <div className={styles.menuTop}>
                                    <Link href="/" ><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0}}>Home</motion.p></Link>
                                    <Link href="/about" ><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.1}}>About</motion.p></Link>
                                </div>
                                <div className={styles.menuMid}>
                                    <Link href="/media" ><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.2}}>Media Production</motion.p></Link>
                                    <Link href="/web" ><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.3}}>Web Design & Development</motion.p></Link>
                                    <Link href="/branding" ><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.4}}>Logo & Brand Design</motion.p></Link>
                                </div>
                                <div className={styles.menuBottom}>
                                    <Link href="/pricing" ><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.5}}>Pricing</motion.p></Link>
                                    <Link href="/contact" ><motion.p initial={fadeFromRight.hidden} animate={fadeFromRight.visible} transition={{type: 'tween', ease: curve, duration: animDuration, delay: 0.6}}>Contact</motion.p></Link>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
};