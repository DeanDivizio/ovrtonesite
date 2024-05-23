import React from "react";
import styles from "./testimonial.module.css";

const Testimonial = ({ name, title, company, link, quote, image }) => {
    return (
        <div className={styles.testimonial}>
            <div className={styles.imageSection}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.textSection}>
                <p>{`" ${quote} "`}</p>
                <div className={styles.info}>
                    <div className={styles.name}>{`- ${name},`}</div>
                    <div className={styles.title}>{`${title}:`}</div>
                    <div className={styles.company}><a href={link}>{company}</a></div>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;