import React from "react";

function ContactPage() {
    
    return (
        <div className='overflow-x-hidden'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center content-center items-center min-h-screen bg-web-hero bg-cover px-8 lg:px-64'>
                <h1 className="text-6xl 2xl:text-[10rem] bg-gradient-green text-transparent bg-clip-text leading-normal font-semibold text-center md:text-left">Thank<br></br> You</h1>
                <p className="mb-12 lg:mb-6 text-2xl lg:text-3xl">{`We're excited to talk with you! We've got your email and a representative will be reaching out shortly. Have a great day!`}</p>
            </div>
        </div>
    );
};

export default ContactPage;

export const metadata = {
    title: "Thanks for contacting OVRTONE Media Group",
    description: "Thank you for contacting OVRTONE. We're excited to talk with you and will be in touch shortly.",
    robots: {
        index: false,
        follow: false,
        googleBot:{
          index: false,
          follow: false,
          noimageindex: true,
        },
      },
  };