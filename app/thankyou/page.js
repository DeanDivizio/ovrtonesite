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

export default ContactPage;

export const metadata = {
    title: "Thanks for contacting OVRTONE Media Group",
    description: "Thank you for contacting OVRTONE. We're excited to talk with you and will be in touch shortly.",
    robots: {
        index: false,
        follow: false,
        googleBot:{
          index: false,
          follow: false,
          noimageindex: true,
        },
      },
  };