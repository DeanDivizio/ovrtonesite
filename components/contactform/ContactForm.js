'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./contactForm.module.css";
import { SubmitForm } from "@/actions/sendgrid";

export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [buttonText, setButtonText] = useState("Send");
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        setButtonText("Sending...");
        SubmitForm({ fullname, email, message })
            .then(() => {
                router.push('/thank-you');
            })
            .catch((error) => {
                console.error(`Error submitting form: ${error}`);
            });
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
            <input type="text" placeholder='Full Name' value={fullname} onChange={(e) => { setFullname(e.target.value); }} name="fullname" autoComplete="name" />
            <input type="email" name="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value); }} autoComplete="email" />
            <textarea name="message" placeholder='Tell us about your project' value={message} onChange={(e) => { setMessage(e.target.value); }}></textarea>
            <div>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    );
}