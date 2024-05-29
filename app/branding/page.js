import React from "react";
import styles from './branding.module.css';
import Card from '@/components/card/Card';
import Testimonial from "@/components/testimonialModule/Testimonial";


function BrandingPage() {
    
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Brand <br></br> Design</h1>
                <p><em>{`While Businesses Survive, Brands Thrive.`}</em></p>
            </div>
            <div className={styles.intro}>
                <h2>From Business to Brand</h2>
                <p>{`Having a strong brand can elevate your business in so many ways. It’s not just about looking good—though that’s a big part of it. A well-defined brand builds trust and loyalty with your customers. It makes your business memorable and helps you stand out in a crowded market. A strong brand tells your customers that you’re serious about what you do, letting you command higher prices and foster customer loyalty, while driving repeat business and word-of-mouth referrals.`}</p> 
                <br />
                <p>In short, a strong brand can take your business from successful to thriving.</p>
            </div>
            <div className={styles.main}>
                <h2>How OVRTONE Can Help</h2>
                <p>{`At OVRTONE Media Group, we believe that brand design is the foundation that all other non-logistic business aspects (web sites, social media, photos and videos, etc) build on. As such we pride ourselves on how we handle the fundamentals.`}</p>
                <div className={styles.services}>
                    <Card 
                    title={`Logo Design`}
                    description={`Your logo is the face of your brand. At OVRTONE, whether you’re starting from scratch or looking to refresh an existing logo, we’ll deliver a design that’s distinctive, versatile, and memorable.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/LogoDesignCardBG_v2.jpg'/>
                    <Card 
                    title={`Style Guide`}
                    description={`Consistency is key to a strong brand, but keeping track of the specifics can get difficult. With a style guide, you have everything from color schemes to typography outlined in one place.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/StyleGuideCardBG_v1.jpg'/>
                    <Card 
                    title={`Social Media Graphics`}
                    description={`While your website serves as your home base online, social media is where your brand really comes to life. High quality profile pictures and banners help demonstrate your professionalism alongside your authenticity.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/SocialMediaCardBG_v1.jpg'/>
                    <Card 
                    title={`Business Cards`}
                    description={`Even in the digital age, never underestimate the power of a well-designed business card. At OVRTONE, we focus on designs that strike a perfect balance between form and function - and can handle everything from the initial design to final print.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/BusinessCardCardBG_v1.jpg'/>
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
                <h2>Become a Brand</h2>
                <p>{`Let's get started.`}</p>
                <button className="primaryCTA">
                    <a href="/contact">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export const metadata = {
    title: "Brand Design - OVRTONE Media Group",
    description: "Specializing in small businesses, OVRTONE offers a variety of branding services to help you grow your business. From your logo and style guide to social media graphics and business cards, we have you covered.",
}

export default BrandingPage;