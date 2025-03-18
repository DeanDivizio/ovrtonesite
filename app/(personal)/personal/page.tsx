import { Button } from "@/components/ui/button"
import LightArcBackground from "@/components/backgrounds/lightArc"
import PrimaryButton from "@/components/personalSection/ui/PrimaryButton"
import SecondaryButton from "@/components/personalSection/ui/SecondaryButton"

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
                <LightArcBackground position="topLeft" />  
            </div>
            <div>
                {/* whats the problem */}
            </div>
            <div>
                {/* our solution */}
            </div>
            <div>
                {/* testimonial */}
            </div>
            <div>
                {/* the process */}
            </div>
            <div>
                {/* about */}
            </div>
            <div>
                {/* contact */}
            </div>
            
        </main>
    )
}