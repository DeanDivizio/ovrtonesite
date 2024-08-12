'use client';
import React from "react";

const Card = ({ title, description, image, link, bgImage, smallTXT, background, goToContact }) => {
    const handleClick = () => {
        window.open(link, "_blank");
    }
    const handleContactClick = () => {
        window.open("/contact", "_blank");
    }
    const cardStyle = background 
    ? { backgroundImage: background } 
    : { backgroundImage: `url(${bgImage})` };

    return (
        <div className="flex flex-col justify-center items-center h-full px-8 md:px-24 py-16 md:py-28 max-w-[450px] min-w-[300px] min-h-96 rounded-2xl bg-cover shadow-[0_0px_36px_-8px_rgba(255,255,255,0.05)]" style={cardStyle}>
            {link || goToContact ? <h3 className="mb-4 text-center leading-snug text-4xl xl:text-6xl">{title}</h3> : <h3 className="mb-8 text-center leading-snug text-4xl xl:text-6xl">{title}</h3> }
            {description ? (description && smallTXT ? (<p className="text-center mb-8 text-lg">{description}</p>) : (<p className="text-center mb-8 text-3xl">{description}</p>)) : <hr className="w-[30%] border border-off-white mb-8"></hr> }
            {link && (<button className="bg-secondary-dim px-8 pt-5 pb-3 rounded-xl text-white font-medium text-2xl tracking-wide" onClick={handleClick}>Learn More</button>)}
            {goToContact && (<button className="bg-primary-dim hover:bg-primary-light transition px-8 pt-5 pb-3 rounded-xl text-white font-medium text-2xl tracking-wide" onClick={handleContactClick}>Get Started</button>)}
        </div>
    );
 };
export default Card;