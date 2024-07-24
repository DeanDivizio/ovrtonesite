import React from "react";
import styles from './pricing.module.css'
import Card from "@/components/card/Card";
import Testimonial from "@/components/testimonialModule/Testimonial";


export default function PricingPage () {

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Pricing</h1>
            </div>
            <div className={styles.intro}>
                <p><em>{`Every project is unique so pricing may vary, but we believe it's in line with our commitment to transparancy to make as much pricing information as standardized and available as possible.`}</em></p>
            </div>
            <div className={styles.categoryContainer}>
                <div className={styles.category}>
                    <h2>Web</h2>
                    <hr></hr>
                    <div className={styles.pricingRow}>
                        <Card title={'Business Sites'} description={'From $6000'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                        <Card title={'eCommerce Sites'} description={'From $15000'} background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                        <Card title={'Hosting & Maintenace'} description={'From $600/yr'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                    </div>
                </div>
                <div className={styles.category}>
                    <h2>Media</h2>
                    <hr></hr>
                    <div className={styles.pricingRow}>
                        <Card title={'Video Production'} description={'Contact Us for Pricing'} link='/contact' background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                        <Card title={'Professional Headshots'} description={'From $375'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                        <Card title={'Product Photos'} description={'Contact Us for Pricing'} link='/contact' background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                    </div>
                </div>
                <div className={styles.category}>
                    <h2>Branding</h2>
                    <hr></hr>
                    <div className={styles.pricingRow}>
                        <Card title={'Logo Design'} description={'From $500'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                        <Card title={'Style Guides'} description={'From $250'} background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                        <Card title={'Business Card Design'} description={'From $500'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                    </div>
                </div>
            </div>
             <div className={styles.testimonial}>
                <h2>{`Hear from a Current Client`}</h2>
                <Testimonial 
                name="Brett Carlson"
                quote="Very professional! Easy to work with, patient, and great attitude. Will absolutely work with again!"
                image="http://api.ovrtonemedia.com/wp-content/uploads/2024/07/Brett.jpg"/>
            </div>
            <div className={styles.cta}>
                <h2>Build Your Brand</h2>
                <p>{`Let's get started.`}</p>
                <button className="primaryCTA">
                    <a href="/contact">Contact Us</a>
                </button>
            </div>
        </div>
    )

};

export const metadata = {
    title: "Pricing - OVRTONE Media Group",
    description: `While each project is unique, we believe it's our responsibility to make our pricing as transparent as possible right from the beginning. Here's a list of our indivdual services with pricing info, so you can see for yourself.`,
    keywords: ['pricing', 'media production', 'photography', 'photo', 'photographer', 'video', 'video production', 'video company', 'photography company', 'OVRTONE', 'OVRTONE Media Group', 'OVERTONE Media', 'OVERTONE Media Group'],
    openGraph: {
        title: "Pricing - OVRTONE Media Group",
        description: `While each project is unique, we believe it's our responsibility to make our pricing as transparent as possible right from the beginning. Here's a list of our indivdual services with pricing info, so you can see for yourself.`,
        url: 'https://ovrtonemedia.com/pricing',
    },
  };