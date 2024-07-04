'use client';
import React from "react";
import styles from "./card.module.css";

const Card = ({ title, description, image, link, bgImage, smallTXT, background }) => {
    const handleClick = () => {
        window.open(link, "_blank");
    }
    const cardStyle = background 
    ? { backgroundImage: background } 
    : { backgroundImage: `url(${bgImage})` };

    return (
        <div className={styles.card} style={cardStyle}>
            <h3>{title}</h3>
            {description && smallTXT ? (<p style={{fontSize:'1.5rem'}}>{description}</p>) : (<p>{description}</p>)}
            {link && (<button className="primaryCTA" onClick={handleClick}>Learn More</button>)}
        </div>
    );
 };
export default Card;