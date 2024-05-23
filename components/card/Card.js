'use client';
import React from "react";
import styles from "./card.module.css";

const Card = ({ title, description, image, link }) => {
    const handleClick = () => {
        window.open(link, "_blank");}

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            {link && (<button className="primaryCTA" onClick={handleClick}>Learn More</button>)}
        </div>
    );
 };
export default Card;