import React from "react";
import ContactForm from "@/components/contactform/ContactForm";

function ContactPage() {
    
    return (
        <div className='overflow-x-hidden'>
            <div className='flex flex-wrap justify-around items-center min-h-screen bg-web-hero bg-cover pt-24 md:pt-32 lg:pt-24'>
                <h1 className="text-5xl md:text-6xl 2xl:text-[10rem] bg-gradient-green text-transparent bg-clip-text leading-normal font-semibold text-center lg:text-left">{`Get`}<br></br>Started</h1>
        <a href="mailto:contact@ovrtonemedia.com"><p>contact@ovrtonemedia.com</p></a>
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