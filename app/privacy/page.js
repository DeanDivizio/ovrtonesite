import React from "react";

export default function Privacy() {
    return(
        <div className="overflow-x-hidden">
             <div className='flex flex-col justify-center lg:flex-row lg:justify-around p-20 text-center lg:text-left items-center w-screen min-h-screen bg-cover bg-web-hero'>
                <h1 className="bg-gradient-green bg-clip-text text-transparent text-4xl md:text-5xl 3xl:text-[8rem] mb-12 leading-[120%] md:leading-[140%] font-semibold">Privacy Policy</h1>
            </div>
            <div className="flex justify-center items-start flex-col px-16 lg:px-32 py-24 lg:py-36 bg-dark-geo">
                <h2 className="mb-8 text-5xl md:text-7xl leading-snug">{`Keepin' it Simple`}</h2>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`We have a fundemental problem with companies harvesting user data. At OVRTONE, we believe your data is yours. To that end, we can make you a few promises.`}</p>
                <ul className="text-off-white text-xl leading-normal md:leading-loose my-16 pl-8 border-l-primary-main border-l">
                    <li className="mb-4">{`We don't use tracking cookies.`}</li>
                    <li className="mb-4">{`We don't collect your personal information automatically. (We will if you submit a contact form)`}</li>
                    <li className="mb-4">{`We don't work with data brokers or data marketing firms.`}</li>
                    <li className="mb-4">{`We will email everyone in our database if these things ever change.`}</li>
                </ul>
                <p className="mb-12 lg:mb-6 text-2xl md:text-3xl">{`That being said, the one thing we do use is Google Analytics for basic site usage statistics and general demographic info. You can read Google's privacy policy for their analytics platform `}<a href="https://policies.google.com/technologies/partner-sites" className="text-2xl md:text-3xl">here</a>{` and read their guide on safeguarding your data `}<a href="https://support.google.com/analytics/answer/6004245" className="text-2xl md:text-3xl">here.</a></p>
            </div>
        </div>
    )
}