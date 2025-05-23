import React from "react";
import Card from '@/components/card/Card';
import Testimonial from "@/components/testimonialModule/Testimonial";


function MediaPage() {
    
    return (
        <div className='overflow-x-hidden'>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-around p-20 text-center lg:text-left items-center w-screen min-h-screen bg-cover bg-media-hero'>
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-4xl md:text-5xl 3xl:text-[8rem] mb-12 leading-[120%] md:leading-[140%] font-semibold">Media <br></br> Production</h1>
                <p className="text-center text-2xl md:text-3xl"><em>{`Aesthetic Authenticity`}</em></p>
            </div>
            <div className="flex justify-center items-start flex-col px-16 lg:px-24 py-24 lg:py-36">
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">They Say Brand <strong>Image</strong> for a Reason</h2>
                <p className="mb-6 text-2xl md:text-3xl">{`Whether you're trying to use a photo in-lieu of a thousand words or tell a story through video, high-quality media does more than prettify your brand. Your photos and videos are the heartbeats of your brand's narrative. They capture moments, evoke emotions, and build connections. Your media plays a huge role in how you're percieved.`}</p> 
                <br />
                <p className="mb-6 text-2xl md:text-3xl">You deserve to be seen in the best light possible.</p>
            </div>
            <div className='flex justify-center items-center flex-col px-8 lg:px-24 py-24 lg:py-36 bg-dark-geo bg-cover'>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Why Choose <span className="gradientText font-style font-semibold">OVRTONE</span>?</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`At OVRTONE Media Group, Media Production is our bread and butter. In fact, it's how we got our start! Between being passionate creatives and (equally passionate) nerds, you can rest easy knowing that we'll use every tool in the toolbox to nail your creative vision on-time and on-budget, every time.`}</p>
                <hr className="border border-primary-bright w-[33%] mb-16 lg:mb-36"></hr>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-24'>
                    <Card goToContact
                    title={`Video`}
                    bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/VideoCardBlur.webp'/>
                    <p className="col-span-2 text-2xl lg:text-3xl mt-16 md:mt-0">{`If a picture is worth a thousand words, a video is worth... well, a lot. Videos are a powerful tool to show authenticity, showcase your products, and connect with your audience. From ads to testimonials and everything in between, OVRTONE has what you need to tell your story.`}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-20'>
                    <div className='order-1 md:order-2'>
                    <Card goToContact
                    title={`Photo`}
                    bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/PhotoCard.webp'/>
                    </div>
                    <p className="col-span-2 order-2 md:order-1 md:text-right text-2xl lg:text-3xl mt-16 md:mt-0">{`With everyone having a camera in their pocket, the bar for quality photos has never been higher. Whether you need headshots, product photos, or event coverage, OVRTONE has the tools and the talent to make sure your photos are as professional as you are.`}</p>
                </div>
            </div>
            <div className="flex flex-col px-8 py-24 lg:py-36 justify-start items-center">
                <h2 className="text-center mb-16 text-5xl md:text-7xl leading-snug">{`Don't Just Take Our Word For It`}</h2>
                <Testimonial 
                name="Dustin Thurston"
                quote="These guys came out to a show and took some photos of my band performing. They are super professional and got the edits back to us quickly! Can't recommend them enough!"
                image="http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/dustinT.jpg"/>
            </div>
            <div className="flex flex-col justify-center items-center px-16 py-24 lg:py-36 bg-dark-geo min-h-[60vh]">
                <h2 className="text-center mb-4 text-5xl md:text-7xl leading-snug">Step Into the Lime-Light</h2>
                <p className="text-3xl mb-16">{`Let's get started.`}</p>
                <button className="bg-primary-dim hover:bg-primary-main transition px-8 pt-5 pb-3 rounded-xl">
                    <a href="/contact" className="text-white no-underline font-semibold text-2xl lg:text-4xl tracking-wide">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export default MediaPage;

export const metadata = {
    title: "Media Production - OVRTONE Media Group",
    description: "Specializing in small businesses in the West Michigan area, OVRTONE offers high-end media production services to help you grow your business. Through photography, video production, motion graphics, and more, OVRTONE makes sure your creative vision is brought to life on time, and on budget, every time.",
    keywords: ['media', 'media production', 'photography', 'photo', 'photographer', 'video', 'video production', 'video company', 'photography company', 'OVRTONE', 'OVRTONE Media Group', 'OVERTONE Media', 'OVERTONE Media Group'],
    openGraph: {
        title: "Media Production - OVRTONE Media Group",
    description: "Specializing in small businesses in the West Michigan area, OVRTONE offers high-end media production services to help you grow your business. Through photography, video production, motion graphics, and more, OVRTONE makes sure your creative vision is brought to life on time, and on budget, every time.",
        url: 'https://ovrtonemedia.com/media',
    },
  };