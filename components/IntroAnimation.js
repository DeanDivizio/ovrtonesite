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
            }, 900); // Delay for fade-out animation
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
                <img src="/images/OVRTONEwithtext.webp" alt="OVRTONE Media Group" />
            </div>
        </div>
    );
};

export default IntroAnimation;