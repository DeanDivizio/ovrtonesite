import { Button } from "@/components/ui/button"
import LightArcBackground from "@/components/backgrounds/lightArc"
import PrimaryButton from "@/components/personalSection/ui/PrimaryButton"
import SecondaryButton from "@/components/personalSection/ui/SecondaryButton"
import Image from "next/image"

export default function PersonalHome() {

    return(
        <main>
            <div id='hero' className="min-h-[100vh] flex flex-row justify-between items-center px-4 md:px-16 2xl:px-32">
                <div id="heroLeft" className="max-w-[60%] animate-in fade-in duration-700">
                    <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold drop-shadow-xl text-left mb-2 text-neutral-950">Capture the Moment</h1>
                    <p className="drop-shadow-md text-lg md:text-xl 2xl:text-2xl mb-12 font-light max-w-[80%] text-neutral-900">At <span className="font-accent text-transparent bg-gradient-to-r from-neutral-900 to-green-400 bg-clip-text">OVRTONE</span>{` Media Group, we utilize our expertise across media and technology to CONSUMER FRIENDLY TAGLINE WEDDINGS N STUFF GOES HERE ALEX`}</p>
                    <div className="flex gap-4 ">
                        <PrimaryButton text="Get Started"  />
                        <SecondaryButton text="View Pricing" />
                    </div>
                </div>
                <div id="heroRight" className="max-w-[60%] animate-in fade-in duration-700 delay-300">

                </div>
                <LightArcBackground position="topLeft"/> 
                {/* commented out for now while cms is under construction. add trans prop to above component when adding image*/}
                {/* <Image src={"/images/AlexMelelli_Avatar.jpg"} alt="" width={512} height={512} className="w-full h-full fixed top-0 left-0 -z-20"/>  */}
            </div>
            <div id="intro" className="min-h-[80vh] relative flex flex-row justify-center items-start px-4 py-8 md:py-24 2xl:py-40 bg-gradient-to-br from-neutral-50 from-20% to-green-50">
                {/* whats the problem */}
                <div className="max-w-[96%] md:max-w-[50%] 2xl:max-w-[33%]">
                    <h2 className="text-neutral-800 text-6xl font-light italic mb-8">Life is Special</h2>
                    <p className="text-neutral-950 text-xl">Something about life's special moments</p>
                    <p className="text-neutral-950 text-xl">Something about wanting to capture and relive them</p>
                    <p className="text-neutral-950 text-xl">Something about not wanting settle for iPhotography or distant relative with a camera</p>
                </div>
                
            </div>
            <div id="solution" className="min-h-[80vh] flex flex-row justify-between items-start px-4 py-8 md:px-16 md:py-24 2xl:px-32 2xl:py-40 bg-gradient-to-bl from-neutral-50 from-20% to-blue-50">
                {/* our solution */}
                <div>
                    <h2 className="text-neutral-800 text-6xl font-light italic mb-8">Our Solution</h2>
                    <p className="text-neutral-950 text-xl">Deploy experts</p>
                    <p className="text-neutral-950 text-xl">Use cutting-edge technology</p>
                    <p className="text-neutral-950 text-xl">Work with our clients before, during, and after the process to ensure satisfaction</p>
                </div>
            </div>
            <div id="testimonial" className="min-h-[60vh] flex flex-row justify-between items-start px-4 py-8 md:px-16 md:py-16 2xl:px-32 2xl:py-24 bg-gradient-to-r from-green-300 to-blue-200">
                {/* testimonial */}
                <h2 className="text-neutral-800 text-6xl font-light italic w-full text-center mb-8">{`Don't Take Our Word for It`}</h2>
            </div>
            <div id="process" className="min-h-[80vh] flex flex-row justify-between items-start px-4 py-8 md:px-16 md:py-24 2xl:px-32 2xl:py-40 bg-gradient-to-bl from-neutral-50 from-20% to-blue-50">
                {/* the process */}
                <h2 className="text-neutral-800 text-6xl font-light italic w-full text-center mb-8">{`How It All Works`}</h2>
            </div>
            {/* <div id="aboutUs">
                
            </div> */}
            <div id="intro" className="min-h-[80vh] relative flex flex-row justify-center items-start px-4 py-8 md:py-24 2xl:py-40 bg-transparent">
                {/* contact */}
                <h2 className="text-neutral-800 text-6xl font-light italic w-full text-center mb-8">{`Let's Get Started`}</h2>
                <LightArcBackground position="topRight" /> 
            </div>
            
        </main>
    )
}