import React from "react";
import Card from '@/components/card/Card';
import Testimonial from "@/components/testimonialModule/Testimonial";


function WebPage() {
    
    return (
        <div className='overflow-x-hidden'>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-around p-20 text-center lg:text-left items-center w-screen min-h-screen bg-cover bg-web-hero'>
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-4xl md:text-5xl 3xl:text-[8rem] mb-12 leading-[120%] md:leading-[140%] font-semibold">Web Design<br></br>&<br></br>Development</h1>
                <p className="text-center text-2xl md:text-3xl"><em>{`Craft Your Digital Keystone`}</em></p>
            </div>
            <div className="flex justify-center items-start flex-col px-16 lg:px-24 py-24 lg:py-36">
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">{`The Right Question`}</h2>
                <p className="mb-6 text-2xl md:text-3xl">{`Every outstanding website starts with the right questions. What message do you want to convey? What experience do you want your visitors to have? How can you put your business's best foot forward for as many people as possible? These questions guide the process, ensuring that the final product isn't just a website, but a powerful tool that drives engagement and growth. The right website starts with the right question.`}</p>
                <br></br>
                <p className="mb-6 text-2xl md:text-3xl">{`And with everything from cell phones to refrigerators being online, that question isn't`} <em>{`"Do I need a website?"`}</em>{` (yes, you do); it's, `}<em>{`"How do I get the best website for my business?"`}</em></p> 
                <br />
                <p className="mb-6 text-2xl md:text-3xl">As you might imagine, we have some thoughts on that.</p>
            </div>
            <div className='flex justify-center items-center flex-col px-8 lg:px-24 py-24 lg:py-36 bg-dark-geo bg-cover'>
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">Web Development with <span className="gradientText font-style font-semibold">OVRTONE</span></h2>
                <p className="mb-12 text-2xl md:text-3xl">{`At OVRTONE Media Group, we believe there are better and worse ways to represent you business online. Your website should be the the most comprehensive implementation of your brand and the best showcase for the media you use to represent you. From pre-production through maintenance, our goal is to make sure you're seen in the best light possible - and done so in a way that's trivially easy to you.`}</p>
                <hr className="border border-primary-bright w-[33%] mb-36"></hr>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-24'>
                    <Card goToContact
                        title={`Design`}
                        bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/WebDevBG_v1.jpg'
                    />
                    <p className="col-span-2 text-2xl md:text-3xl mt-16 md:mt-0">{`This is where it all starts. A great design is the foundation of a great website. We balance aesthetics with functionality to make sure your website is as beautiful as it is easy to use. Whether you need a new site or a redesign, we have you covered.`}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-24'>
                    <div className='order-1 md:order-2 justify-self-center'>
                    <Card goToContact
                        title={`Build`}
                        bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/webdarkBlur.webp'
                    />
                    </div>
                    <p className="col-span-2 order-2 md:order-1 md:text-right text-2xl md:text-3xl mt-16 md:mt-0">{`The best design in the world is useless if it doesn't work. At OVRTONE, we build websites with a cutting-edge tech stack that's as maintainable as it is powerful. We make sure your website is fast, secure, and easy to use, so you can focus on what you do best.`}</p>
                    </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 justify-center items-center lg:max-w-[80%] mb-24'>
                    <Card goToContact
                        title={`Host`}
                        bgImage='http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/hosting.webp'
                    />
                    <p className="col-span-2 text-2xl md:text-3xl mt-16 md:mt-0">{`A great site needs great hosting. To that end, we offer hosting services that are fast, secure, and reliable. You can add, change, and remove content as needed, while we take care of the rest. We run your site so you can run your business.`}</p>
                </div>
            </div>
            <div className="flex flex-col px-8 py-24 lg:py-36 justify-around items-center">
                <h2 className="text-center mb-16 text-5xl md:text-7xl leading-snug">{`Don't Just Take Our Word For It`}</h2>
                <Testimonial 
                name="Drew Rautenberg"
                title="Owner"
                company="Bark Productions"
                link="https://www.barkpro.live"
                quote={`OVRTONE was great to work with for my small business branding project. They helped me figure out what I like and don’t like and were open to suggestions. The website they built turned out better than I could have imagined.`}
                image="http://newapi.ovrtonemedia.com/wp-content/uploads/2025/04/drewR.jpeg"/>
            </div>
            <div className="flex flex-col justify-center items-center px-16 py-24 lg:py-36 bg-dark-geo min-h-[60vh]">
                <h2 className="text-center mb-4 text-5xl md:text-7xl leading-snug">Bring Your Brand Online</h2>
                <p className="text-3xl mb-12 lg:mb-16">{`Let's get started.`}</p>
                <button className="bg-primary-dim hover:bg-primary-main transition px-8 pt-5 pb-3 rounded-xl">
                    <a href="/contact" className="text-white no-underline font-semibold text-2xl lg:text-4xl tracking-wide">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export default WebPage;

export const metadata = {
    title: "Web Design & Development - OVRTONE Media Group",
    description: 'Your website is the face of your brand online and as such, needs to be top-tier. OVRTONE Media Group has the talent and the tools needed to make sure your online presence is everything you want it to be.',
    keywords: ['pricing', 'media production', 'photography', 'photo', 'photographer', 'video', 'video production', 'video company', 'photography company', 'OVRTONE', 'OVRTONE Media Group', 'OVERTONE Media', 'OVERTONE Media Group'],
    openGraph: {
        title: "Web Design & Development - OVRTONE Media Group",
        description: 'Your website is the face of your brand online and as such, needs to be top-tier. OVRTONE Media Group has the talent and the tools needed to make sure your online presence is everything you want it to be.',
        url: 'https://ovrtonemedia.com/web',
    },
  };