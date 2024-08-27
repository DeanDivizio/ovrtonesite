import React from "react";

const Testimonial = ({ name, title, company, link, quote, image }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 md:gap-4 bg-off-white rounded-xl">
            <div className="m-6 col-span-1 md:col-span-2 lg:col-span-1 self-center">
                <img src={image} alt={name} className="rounded-xl"/>
            </div>
            <div className="p-6 flex flex-col justify-center col-span-3">
                <p className="text-2xl md:ltext-3xl 3xl:text-5xl text-off-black mb-8 tracking-wide">{`"${quote}"`}</p>
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:gap-3">
                    { title? <div><p className="text-off-black font-medium text-xl 3xl:text-4xl">{`- ${name},`}</p></div> : <div ><p className="text-off-black font-medium text-xl 3xl:text-4xl">{`- ${name}`}</p></div> }
                    {title ? (company ? (<div><p className="text-off-black text-xl 3xl:text-4xl">{`${title}:`}</p></div>) : (<div><p className="text-off-black text-xl 3xl:text-4xl">{title}</p></div>)) : null}
                    <div className="text-center"><a href={link} className="text-secondary-light text-center md:text-left text-2xl lg:text-4xl">{company}</a></div>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;