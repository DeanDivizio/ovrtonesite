import React from "react";
import styles from './contact.module.css';
import ContactForm from "@/components/contactform/ContactForm";

function ContactPage() {
    
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>{`Let's `}<br></br> Chat</h1>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactPage;

export const metadata = {
    title: "Contact Us - OVRTONE Media Group",
    description: "If you're ready to take your business to the next level, contact OVRTONE Media Group today.",
    keywords: ['contact', 'OVRTONE', 'OVRTONE Media Group', 'OVERTONE Media', 'OVERTONE Media Group'],
    openGraph: {
        title: "Contact Us - OVRTONE Media Group",
        description: "If you're ready to take your business to the next level, contact OVRTONE Media Group today.",
        url: 'https://ovrtonemedia.com/contact',
    },
  };