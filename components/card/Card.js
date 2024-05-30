'use client';
import React from "react";
import styles from "./card.module.css";

const Card = ({ title, description, image, link, bgImage, smallTXT }) => {
    const handleClick = () => {
        window.open(link, "_blank");}

    return (
        <div className={styles.card} style={{backgroundImage: `url(${bgImage})`}}>
            {/* <img src={image} alt={title} /> */}
            <h3>{title}</h3>
            {description && smallTXT ? (<p style={{fontSize:'1.5rem'}}>{description}</p>) : (<p>{description}</p>)}
            {link && (<button className="primaryCTA" onClick={handleClick}>Learn More</button>)}
            
        </div>
    );
 };
export default Card;