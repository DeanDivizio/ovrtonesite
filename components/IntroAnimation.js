'use client';
import React, { useEffect, useState } from 'react';
import styles from './introAnimation.module.css';
import Link from 'next/link';

const IntroAnimation = () => {
    const [visible, setVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            const removeTimer = setTimeout(() => {
                setShouldRender(false);
            }, 1000); // Delay for fade-out animation
            return () => clearTimeout(removeTimer);
        }, 2000); // Total duration of the animation

        return () => clearTimeout(timer);
    }, []);

    if (!shouldRender) {
        return null;
    }

    const containerClass = visible ? styles.homeContainer : `${styles.homeContainer} ${styles.fadeOut}`;

    return (
        <div className={containerClass}>
            <div className={styles.homeContent}>
                <img src="https://api.ovrtonemedia.com/wp-content/uploads/2024/04/OVRTONE-Logo_Black_Trans_NoText_MedRes.png" alt="OVRTONE Media Group" />
                <h1>oVRTONE</h1>
                <h2>Media Group</h2>
                <Link href="mailto:contact@ovrtonemedia.com">contact@ovrtonemedia.com</Link>
            </div>
        </div>
    );
};

export default IntroAnimation;