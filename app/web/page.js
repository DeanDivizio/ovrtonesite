import React from "react";
import styles from './web.module.css';
import Card from '@/components/card/Card';
import Testimonial from "@/components/testimonialModule/Testimonial";


function WebPage() {
    
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <h1>Web Design<br></br>&<br></br>Development</h1>
                <p><em>{`Your Brand's Digital Keystone`}</em></p>
            </div>
            <div className={styles.intro}>
                <h2>{`Your Brand's Home Base`}</h2>
                <p>{`With everything from cell phones to refrigerators being online, the question isn't`} <em>{`"Do I need a website?"`}</em>{` (yes, you do) it's,`}<em>{`"How do I get the best website for my business?"`}</em></p> 
                <br />
                <p>As you might imagine, we have some thoughts on that.</p>
            </div>
            <div className={styles.main}>
                <h2>Web Development with <span className="gradientText">OVRTONE</span></h2>
                <p>{`At OVRTONE Media Group, Media Production is our bread and butter. In fact, it's how we got our start! Between being passionate creatives and (equally passionate) nerds, you can rest easy knowing that we'll use every tool in the toolbox to nail your creative vision on-time and on-budget, every time.`}</p>
                <div className={styles.services}>
                    <Card smallTXT
                    title={`Design`}
                    description={`This is where it all starts. A great design is the foundation of a great website. We balance aesthetics with functionality to make sure your website is as beautiful as it is easy to use. Whether you need a new site or a redesign, we have you covered.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/WebDevBG_v1.jpg'/>
                    <Card smallTXT
                    title={`Build`}
                    description={`The best design in the world is useless if it doesn't work. At OVRTONE, we build websites with a cutting-edge tech stack that's as maintainable as it is powerful. We make sure your website is fast, secure, and easy to use, so you can focus on what you do best.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/07/webdarkBlur.webp'/>
                    <Card smallTXT
                    title={`Host`}
                    description={`A great site needs great hosting. To that end, we offer hosting services that are fast, secure, and reliable. You can add, change, and remove content as needed, while we take care of the rest. We run your site so you can run your business.`}
                    bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/07/hosting.webp'/>
                </div>
            </div>
            {/* <div className={styles.testimonial}>
                <h2>{`Don't Just Take Our Word For It`}</h2>
                <Testimonial 
                name="Drew Rautenberg"
                title="Owner"
                company="Bark Productions"
                link="https://www.barkpro.live"
                quote="Dean is super great and awesome and I'm gunna reccomend him for everything."
                image="http://api.ovrtonemedia.com/wp-content/uploads/2024/05/photo_2024-05-23-10.04.28.jpeg"/>
            </div> */}
            <div className={styles.cta}>
                <h2>Bring Your Brand Online</h2>
                <p>{`Let's get started.`}</p>
                <button className="primaryCTA">
                    <a href="/contact">Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export const metadata = {
    title: "Web Design & Development - OVRTONE Media Group",
    description: "Specializing in small businesses in the West Michigan area, OVRTONE offers high-end media production services to help you grow your business. Through photography, video production, motion graphics, and more, OVRTONE makes sure your creative vision is brought to life on time, and on budget, every time.",
}

export default WebPage;