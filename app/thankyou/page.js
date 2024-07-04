import React from "react";
import styles from './thankyou.module.css';

function ContactPage() {
    
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Thank<br></br> You</h1>
                <p>{`We're excited to talk with you! We've got your email and a representative will be reaching out shortly. Have a great day!`}</p>
            </div>
        </div>
    );
};

export const metadata = {
    title: "Contact Us - OVRTONE Media Group",
    description: "If your ready to take your business to the next level, contact OVRTONE Media Group today.",
}

export default ContactPage;