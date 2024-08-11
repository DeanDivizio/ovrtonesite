import React from "react";

const Testimonial = ({ name, title, company, link, quote, image }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 bg-off-white rounded-xl">
            <div className="m-6 col-span-1 self-center">
                <img src={image} alt={name} className="rounded-xl"/>
            </div>
            <div className="p-6 flex flex-col justify-center col-span-3">
                <p className="text-3xl xl:text-5xl text-off-black mb-8 tracking-wide">{`"${quote}"`}</p>
                <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-3">
                    { title? <div><p className="text-off-black font-medium">{`- ${name},`}</p></div> : <div ><p className="text-off-black font-medium">{`- ${name}`}</p></div> }
                    {title ? (company ? (<div><p className="text-off-black">{`${title}:`}</p></div>) : (<div><p className="text-off-black">{title}</p></div>)) : null}
                    <div><a href={link} className="text-secondary-light text-center md:text-left">{company}</a></div>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;