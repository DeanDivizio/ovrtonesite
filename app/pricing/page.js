import React from "react";
import styles from './pricing.module.css'
import Card from "@/components/card/Card";
import Testimonial from "@/components/testimonialModule/Testimonial";


export default function PricingPage () {

    return (
        <div className='overflow-x-hidden'>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-around p-20 text-center lg:text-left items-center w-screen min-h-screen bg-cover bg-web-hero'>
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-5xl 3xl:text-[8rem] mb-12 font-semibold">Pricing</h1>
            </div>
            <div className="flex justify-center items-start flex-col px-16 lg:px-32 py-24 lg:py-36">
                <h2 className="mb-8"><span className="font-semibold">Transparancy</span>{` - Our Commitment to You`}</h2>
                <p><em>{`Every project is unique so pricing will vary, but we believe it's in line with our commitment to transparancy to make our pricing information as standardized and available as possible.`}</em></p>
            </div>
            <div className='flex justify-center items-center flex-col px-16 lg:px-24 py-24 lg:py-36 bg-dark-geo bg-cover'>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="mb-6">Web</h2>
                    <hr className="border border-primary-bright w-[66%] mb-36"></hr>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <Card title={'Business Sites'} description={'From $6000'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                        <p className="col-span-2">{`Also reffered to as "marketing websites", these sites are meant to showcase your brand and drive sales.`}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <div className='order-1 md:order-2'>
                            <Card title={'eCommerce Sites'} description={'From $15000'} background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                        </div>
                        <p className="col-span-2 order-2 md:order-1 md:text-right">{`Ecommerce sites refer to any sites that revolve primarily around selling products and services.`}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <Card title={'Hosting & Maintenace'} description={'From $600/yr'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                        <p className="col-span-2">{`We consider hosting and maintenance to involve everything from the DNS onwards. We offer hosting solutions for all aspects of your site (front end, content management, product management, database(s)) that come with maintenance serivces to ensure every piece of the puzzle stays up to date and secure. When we host your site, we do it right.`}</p>                        
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="mb-6">Media</h2>
                    <hr className="border border-primary-bright w-[66%] mb-36"></hr>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <Card title={'Video Production'} description={'Contact Us for Pricing'} goToContact background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                        <p className="col-span-2">{`Our video production process is nothing short of comprehensive. We'll work with you to understand your goals, then move on to script development, storyboarding, and logistics; then filming, editing, and VFX. We'll keep you're final deliverables on hand in case you ever need them but even better, we keep every asset involved in making your video on our servers - at no cost to you. So if you want to revamp/repurpose your content in the future, we can do so as cost-effectively as possible.`}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <div className='order-1 md:order-2'>
                            <Card title={'Professional Headshots'} description={'From $225'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>  
                        </div>
                        <p className="col-span-2 order-2 md:order-1 md:text-right">{`Need photos of you and/or your team? OVRTONE can deliver. We'll guide you through the process every step of the way to ensure you get top-notch photography without breaking a sweat - even if you're camera shy.`}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                    <Card title={'Product Photos'} description={'Contact Us for Pricing'} goToContact background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                        <p className="col-span-2">{`No matter the nature of your site (ecommerce or otherwise), if you're selling products, you need good photos. OVRTONE will work with you to determine the best way to capture your products and represent your brand, so you can focus on running it.`}</p>                        
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="mb-6">Branding</h2>
                    <hr className="border border-primary-bright w-[66%] mb-36"></hr>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <Card title={'Logo Design'} description={'From $1000'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                        <p className="col-span-2">{`Your brand starts with your logo. Your logo delivers your personality, colors, and fonts all in one graphic. It lets your customers know what to expect and over time, should become synonymous with your company. At OVRTONE, we believe your logo is the foundation of your brand, and we treat it as such.`}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <div className='order-1 md:order-2'>
                            <Card title={'Style Guides'} description={'From $250'} background='linear-gradient(45deg, var(--secondary-color), #161616 20%, #242424)'/>
                        </div>
                        <p className="col-span-2 order-2 md:order-1 md:text-right">{`When going from business to brand, consistency is critical. Style guides give you one document that outlines all of your brand elements and provides clear guidelines on how to use them. From colors and color variations, to fonts and logo usage, your style guide gives you everything you need in one spot and is essential for brand development.`}</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center items-center max-w-[90%] md:max-w-[80%] mb-24'>
                        <Card title={'Business Cards'} description={'From $350'} background='linear-gradient(45deg, var(--primary-color), #161616 20%, #242424)'/>
                        <p className="col-span-2">{`Even with the prevelance of digital communication, business cards are still extremely handy. Not only will OVRTONE deliver a stellar final design for you, we'll handle printing for you - at cost - and support local printing companies in the process.`}</p>                        
                    </div>
                </div>
            </div>
             <div className="flex flex-col px-8 py-24 lg:py-36 justify-around items-center">
                <h2 className="text-center mb-16">{`Hear from a Current Client`}</h2>
                <Testimonial 
                name="Brett Carlson"
                quote="Very professional! Easy to work with, patient, and great attitude. Will absolutely work with again!"
                image="http://api.ovrtonemedia.com/wp-content/uploads/2024/07/Brett.jpg"/>
            </div>
            <div className="flex flex-col justify-center items-center px-16 py-24 lg:py-36 bg-dark-geo min-h-[60vh]">
                <h2 className="text-center mb-4">Build Your Brand</h2>
                <p className="text-3xl mb-12 lg:mb-16">{`Let's get started.`}</p>
                <button className="bg-primary-dim hover:bg-primary-main transition px-8 pt-5 pb-3 rounded-xl">
                    <a href="/contact" className="text-white no-underline font-semibold text-2xl lg:text-4xl tracking-wide">Contact Us</a>
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