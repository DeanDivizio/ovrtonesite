import React from "react";
import styles from './about.module.css';
import Testimonial from "@/components/testimonialModule/Testimonial";
import { SubmitForm } from "@/actions/sendgrid";

const content1 = "OVRTONE Media Group began as a humble photo and video company - a way to bring our passion for capturing moments and telling stories to as many people as possible. Over time, as the concept of brand image and the need for a robust digital presence became more and more relevant, we realized we could better serve our community by expanding our services into the realms of branding and web design.";
const content2 ='Our mission is to empower small businesses by providing high-quality, comprehensive media solutions that drive success. From the very beginning of logo and brand design through media production and into web design and development, we are dedicated to helping you turn your business into a brand.';

function AboutPage() {
    
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>About <br></br> OVRTONE <br></br>Media Group</h1>
                <p><em>{`Why we do what we do`}</em></p>
            </div>
            <div className={styles.intro}>
                <h2>Driven by <strong>Passion</strong></h2>
                <p>{`${content1}`}</p> 
                <br />
                <p>{`${content2}`}</p>
            </div>
            <div className={styles.main}>
                <h2>Beyond Business</h2>
                <p>{`At OVRTONE Media Group, we believe in the power of community and are proud to regularly donate our services to organizations throughout West Michigan. Our commitment to giving back is reflected in our support for local veterans through `}
                    <a href="https://teeitupforthetroops.org/">Tee It Up for The Troops</a>{` and our involvement with `}
                    <a href='https://michiganmetalfest.net/'>Michigan Metal Fest</a>
                    {`, which champions the arts and local talent. These initiatives allow us to contribute to causes we care deeply about and make a positive impact in our community.`}</p>;
            </div>
            <div className={styles.testimonial}>
                <h2>{`Don't Just Take Our Word For It`}</h2>
                <Testimonial 
                name="Dan McCarthy"
                title="Organizer"
                company="Tee It Up for the Troops"
                link={'https://dmccsheroes.com/'}
                quote="My charity golf outing has used OVRTONE for a couple years now, excellent service and quality results. Very satisfied. 5 stars here!"
                image="http://api.ovrtonemedia.com/wp-content/uploads/2024/08/Dan.webp"/>
            </div>
            <div className={styles.cta}>
                <h2>{`You've Found Your Creative Partner`}</h2>
                <p>{`Let's get started.`}</p>
                <button className="primaryCTA">
                    <a href="/contact">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export default AboutPage;

export const metadata = {
    title: "About Us - OVRTONE Media Group",
    description: "Living at the intersection of media, technology, and design, OVRTONE Media Group is a full-service creative agency that helps you land more customers, get more sales, and ultimately increase your bottom line.",
    keywords: ['Media', 'Web', 'Branding', 'Video', 'Photo', 'Design', 'OVRTONE', 'OVRTONE Media Group', 'OVERTONE Media', 'OVERTONE Media Group'],
    openGraph: {
        title: "About Us - OVRTONE Media Group",
        description: "Living at the intersection of media, technology, and design, OVRTONE Media Group is a full-service creative agency that helps you land more customers, get more sales, and ultimately increase your bottom line.",
        url: 'https://ovrtonemedia.com/about',
    },
  };