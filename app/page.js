import Link from "next/link";
import Card from "@/components/card/Card";
import Testimonial from "@/components/testimonialModule/Testimonial";

export default function Home() {

  let isMobile = false;
function isMobileCheck() {
  if (typeof window != "undefined") {
    isMobile = true
    console.log(isMobile);
  }
}
isMobileCheck();

  return (
   <div className="overflow-x-hidden">
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-2] video">
      <video className="w-full h-full object-cover" autoPlay loop="loop" muted playsInline id="bgVid" >
        <source src="https://api.ovrtonemedia.com/wp-content/uploads/2024/05/OVRTONE_Site_BGvid_V1.mov" type="video/mp4"/>
      </video>
    </div>
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-1] bg-black bg-opacity-35 backdrop-blur-[100px] overlay"></div>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-transparent">
        <div className="flex flex-col items-center justify-center max-w-[90%] text-center heroText">
        <h1 className="text-transparent bg-clip-text bg-gradient-blue text-5xl lg:text-[10rem] leading-[130%] lg:leading-[120%] font-bold tracking-[0.6rem] mb-6 md:mb-8 mt-20 md:mt-0">Realize <span className='font-normal text-white'><br></br>Your Goals</span></h1>
        <p className="font-light text-white mb-12 text-lg md:text-4xl md:leading-snug text-center">At OVRTONE Media Group, we leverage our skills across the fields of media, technology, and design to help you land more customers, get more sales, and ultimately <em><strong>increase your bottom line.</strong></em></p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 justify-start mt-[2vh]">
          <button className="bg-primary-dim hover:bg-primary-light transition px-8 pt-5 pb-3 rounded-xl">
            <Link href="/contact" className="text-white no-underline text-xl md:text-4xl tracking-wide">Get Started</Link>
          </button>
          <p className="text-xl md:text-4xl text-center">or</p>
          <button className="group bg-transparent hover:bg-off-white border border-secondary-main hover:border-off-white transition px-8 pt-5 pb-3 rounded-xl">
            <Link href="/pricing" className="text-white group-hover:text-secondary-dim no-underline text-xl md:text-4xl font-extralight tracking-wide">View Pricing</Link>
          </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-screen min-h-[80vh] bg-dark-geo text-white px-3 md:px-8 py-24 lg:py-36">
        <h2 className="text-center mb-4 text-5xl md:text-7xl leading-snug">What Do We Do?</h2>
        <p className="text-center text-4xl mb-16">In short, everything you need to turn your <em>business</em> into a <em>brand</em>.</p>
        <div className='grid items-center gap-16 md:gap-36 grid-cols-1 md:grid-cols-3'>
          <Card
            title="Web Dev"
            description="We create beautiful, blazing fast websites that look great on any device."
            bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/07/webdarkBlur.webp'
            link="/services" />
            <Card
            title="Media Production"
            description="Represent your brand with media that resonates."
            image="/images/cameraIcon.png"
            bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/05/MediaProductionCardBG_v1.jpg'
            link="/services" />
            <Card
            title="Brand Design"
            description="Starting from scratch? We can deliver everything you need to get started."
            bgImage='http://api.ovrtonemedia.com/wp-content/uploads/2024/07/logodesigndarkblur-1.webp'
            image="/images/pencilIcon.png"
            link="/services" />
        </div>
      </div>
      <div className="flex flex-col px-8 py-24 lg:py-36 justify-start items-center">
        <h2 className="text-center mb-4 text-5xl md:text-7xl leading-snug">Testimonials</h2>
        <p className="mb-16 text-center">{`Here's what some of our clients have to say about us.`}</p>
          <Testimonial 
            name="Gabrielle Langejans"
            title="Marketer"
            quote={`I’ve had the opportunity to get a few headshots done from the team at OVRTONE and the entire experience was amazing! No matter the kind of pictures you’re looking for, I believe they can give you the best results! I highly recommend!`}
            image="http://api.ovrtonemedia.com/wp-content/uploads/2024/07/Gabby.webp"/>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-24 lg:py-36 bg-dark-geo w-screen min-h-[70vh]">
        <h2 className="text-center mb-4 text-5xl md:text-7xl leading-snug">Contact Us</h2>
        <p className="mb-8 text-center text-xl lg:text-4xl">{`Ready to take your business to the next level? Let's get started.`}</p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 justify-start mt-[2vh]">
          <button className="bg-primary-dim hover:bg-primary-light transition px-8 pt-5 pb-3 rounded-xl">
            <Link href="/contact" className="text-white no-underline text-xl md:text-4xl tracking-wide">Contact Us</Link>
          </button>
          <p className="text-xl md:text-4xl text-center">or... </p>
          <button className="group bg-transparent hover:bg-off-white border border-secondary-main hover:border-off-white transition px-8 pt-5 pb-3 rounded-xl">
            <Link href="/pricing" className="text-white group-hover:text-secondary-dim no-underline text-xl md:text-4xl font-extralight transition tracking-wide">View Pricing</Link>
          </button>
        </div>
      </div>
   </div>
  );
}
