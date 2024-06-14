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

export const metadata = {
    title: "Contact Us - OVRTONE Media Group",
    description: "If your ready to take your business to the next level, contact OVRTONE Media Group today.",
}

export default ContactPage;