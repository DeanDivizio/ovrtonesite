import React from "react";
import styles from './about.module.css';
import Testimonial from "@/components/testimonialModule/Testimonial";


function AboutPage() {
    
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>About <br></br> OVRTONE <br></br>Media Group</h1>
                <p><em>{`Who, What, Why, etc.`}</em></p>
            </div>
            <div className={styles.intro}>
                <h2>Driven by <strong>Passion</strong></h2>
                <p>{`OVRTONE started as a way for us to.....`}</p> 
                <br />
                <p>A Tagline Goes Here</p>
            </div>
            <div className={styles.testimonial}>
                <h2>{`Here's What Our Clients Think`}</h2>
                <Testimonial 
                name="Drew Rautenberg"
                title="Owner"
                company="Bark Productions"
                link="https://www.barkpro.live"
                quote="Dean is super great and awesome and I'm gunna reccomend him for everything. uwu~"
                image="http://api.ovrtonemedia.com/wp-content/uploads/2024/05/photo_2024-05-23-10.04.28.jpeg"/>
            </div>
            <div className={styles.main}>
                <h2>Why Choose OVRTONE?</h2>
                <p>{`some text`}</p>
            </div>
            
            <div className={styles.cta}>
                <h2>You've Found Your Creative Partner</h2>
                <p>{`Let's get started.`}</p>
                <button className="primaryCTA">
                    <a href="/contact">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export const metadata = {
    title: "About Us - OVRTONE Media Group",
    description: "Living at the intersection of media, technology, and design, OVRTONE Media Group is a full-service creative agency that helps you land more customers, get more sales, and ultimately increase your bottom line.",
}

export default AboutPage;