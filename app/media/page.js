import React from "react";
import styles from './media.module.css';
import Card from '@/components/card/Card';
import Testimonial from "@/components/testimonialModule/Testimonial";


function MediaPage() {
    
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Media <br></br> Production</h1>
                <p><em>{`Aesthetic Authenticity`}</em></p>
            </div>
            <div className={styles.intro}>
                <h2>They Say Brand <strong>Image</strong> for a Reason</h2>
                <p>{`Whether you're trying to use a photo in-lieu of a thousand words or tell a story through video, high-quality media does more than prettify your brand. Your photos and videos are the heartbeats of your brand's narrative. They capture moments, evoke emotions, and build connections. Your media plays a huge role in how you're percieved.`}</p> 
                <br />
                <p>You deserve to be seen in the best light possible.</p>
            </div>
            <div className={styles.main}>
                <h2>Why Choose <span className="gradientText">OVRTONE</span>?</h2>
                <p>{`At OVRTONE Media Group, Media Production is our bread and butter. In fact, it's how we got our start! Between being passionate creatives and (equally passionate) nerds, you can rest easy knowing that we'll use every tool in the toolbox to nail your creative vision on-time and on-budget, every time.`}</p>
                <div className={styles.services}>
                    <Card smallTXT
                    title={`Video`}
                    description={`If a picture is worth a thousand words, a video is worth... well, a lot. Videos are a powerful tool to show authenticity, showcase your products, and connect with your audience. From ads to testimonials and everything in between, OVRTONE has what you need to tell your story.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/LogoDesignCardBG_v2.jpg'/>
                    <Card smallTXT
                    title={`Photo`}
                    description={`With everyone having a camera in their pocket, the bar for quality photos has never been higher. Whether you need headshots, product photos, or event coverage, OVRTONE has the tools and the talent to make sure your photos are as professional as you are.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/StyleGuideCardBG_v1.jpg'/>
                    <Card smallTXT
                    title={`Motion Graphics`}
                    description={`Good, consistent, branded graphics are a great foundation, but they aren't the end goal. Logo animations, titles, and explainer videos are just a few of the ways motion graphics can elevate your brand. Don't just level up your graphics. Bring them to life.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/SocialMediaCardBG_v1.jpg'/>
                </div>
            </div>
            <div className={styles.testimonial}>
                <h2>{`Don't Just Take Our Word For It`}</h2>
                <Testimonial 
                name="Drew Rautenberg"
                title="Owner"
                company="Bark Productions"
                link="https://www.barkpro.live"
                quote="Dean is super great and awesome and I'm gunna reccomend him for everything. uwu~"
                image="http://api.ovrtonemedia.com/wp-content/uploads/2024/05/photo_2024-05-23-10.04.28.jpeg"/>
            </div>
            <div className={styles.cta}>
                <h2>Step Into the Lime-Light</h2>
                <p>{`Let's get started.`}</p>
                <button className="primaryCTA">
                    <a href="/contact">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export const metadata = {
    title: "Media Production - OVRTONE Media Group",
    description: "Specializing in small businesses in the West Michigan area, OVRTONE offers high-end media production services to help you grow your business. Through photography, video production, motion graphics, and more, OVRTONE makes sure your creative vision is brought to life on time, and on budget, every time.",
}

export default MediaPage;