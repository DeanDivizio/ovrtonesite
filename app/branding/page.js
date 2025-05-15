import React from "react";
import Card from '@/components/card/Card';
import Testimonial from "@/components/testimonialModule/Testimonial";


function BrandingPage() {
    
    return (
        <div className='overflow-x-hidden'>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-around p-20 text-center lg:text-left items-center w-screen min-h-screen bg-cover bg-web-hero'>
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-5xl 3xl:text-[8rem] mb-12 leading-[120%] md:leading-[140%] font-semibold">Brand <br></br> Design</h1>
                <p className="text-center text-2xl md:text-3xl"><em>{`While Businesses Survive, Brands Thrive.`}</em></p>
            </div>
            <div className="flex justify-center items-start flex-col px-16 lg:px-24 py-24 lg:py-36">
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">From Business to Brand</h2>
                <p className="mb-6 text-2xl md:text-3xl">{`Having a strong brand can elevate your business in so many ways. It’s not just about looking good—though that’s a big part of it. A well-defined brand builds trust and loyalty with your customers. It makes your business memorable and helps you stand out in a crowded market. A strong brand tells your customers that you’re serious about what you do, letting you command higher prices and foster customer loyalty, while driving repeat business and word-of-mouth referrals.`}</p> 
                <br />
                <p className="mb-6 text-2xl md:text-3xl">In short, a strong brand can take your business from successful to thriving.</p>
            </div>
            <div className='flex justify-center items-center flex-col px-8 lg:px-24 py-24 lg:py-36 bg-dark-geo bg-cover'>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">How <span className="gradientText font-style font-semibold">OVRTONE</span> Can Help</h2>
                <p className="mb-12 text-2xl md:text-3xl">{`At OVRTONE Media Group, we believe that brand design is the foundation that all other non-logistic business aspects (web sites, social media, photos and videos, etc) build on. As such, we pride ourselves on how we handle the fundamentals.`}</p>
                <hr className="border border-primary-bright w-[33%] mb-36"></hr>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-24'>
                    <Card goToContact
                        title={`Logo Design`}
                        bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/LogoDesignCardBG_v2.jpg'
                    />
                    <p className="col-span-2 text-2xl md:text-3xl mt-16 md:mt-0">{`Your logo is the face of your brand. At OVRTONE, whether you’re starting from scratch or looking to refresh an existing logo, we’ll deliver a design that’s distinctive, versatile, and memorable.`}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-20'>
                    <div className='order-1 md:order-2'>
                    <Card goToContact
                        title={`Style Guide`}
                        bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/StyleGuideCardBG_v1.jpg'
                    />
                    </div>
                    <p className="col-span-2 order-2 md:order-1 md:text-right text-2xl md:text-3xl mt-16 md:mt-0">{`Consistency is key to a strong brand, but keeping track of the specifics can get difficult. With a style guide, you have everything from color schemes to typography outlined in one place.`}</p>
                    </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-6'>
                    <Card goToContact
                        title={`Business Cards`}
                        bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/BusinessCardCardBG_v1.jpg'
                    />
                    <p className="col-span-2 text-2xl md:text-3xl mt-16 md:mt-0">{`Even in the digital age, never underestimate the power of a well-designed business card. At OVRTONE, we focus on designs that strike a perfect balance between form and function - and can handle everything from the initial design to final print.`}</p>
                </div>          
            </div>
            {/* <div className="flex flex-col px-8 py-24 lg:py-36 justify-around items-center">
                <h2 className="mb-16 text-5xl md:text-7xl leading-snug">{`Don't Just Take Our Word For It`}</h2>
                <Testimonial 
                name="Drew Rautenberg"
                title="Owner"
                company="Bark Productions"
                link="https://www.barkpro.live"
                quote="Dean is super great and awesome and I'm gunna reccomend him for everything."
                image="http://api.ovrtonemedia.com/wp-content/uploads/2024/05/photo_2024-05-23-10.04.28.jpeg"/>
            </div> */}
            <div className="flex flex-col justify-center items-center px-16 py-24 lg:py-36 bg-dark-geo min-h-[60vh]">
                <h2 className="text-center mb-4 text-5xl md:text-7xl leading-snug">Become a Brand</h2>
                <p className="text-3xl mb-16">{`Let's get started.`}</p>
                <button className="bg-primary-dim hover:bg-primary-main transition px-8 pt-5 pb-3 rounded-xl">
                    <a href="/contact" className="text-white no-underline font-semibold text-2xl lg:text-4xl tracking-wide">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export default BrandingPage;

export const metadata = {
    title: "Brand Design - OVRTONE Media Group",
    description: "Specializing in small businesses, OVRTONE offers a variety of branding services to help you grow your business. From your logo and style guide to social media graphics and business cards, we have you covered.",
    keywords: ['Branding', 'Logo', 'Brand', 'Brand Design', 'Logo Design', 'Design', 'OVRTONE', 'OVRTONE Media Group', 'OVERTONE Media', 'OVERTONE Media Group'],
    openGraph: {
        title: "Brand Design - OVRTONE Media Group",
    description: "Specializing in small businesses, OVRTONE offers a variety of branding services to help you grow your business. From your logo and style guide to social media graphics and business cards, we have you covered.",
        url: 'https://ovrtonemedia.com/branding',
    },
  };