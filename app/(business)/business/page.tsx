import { Button } from "@/components/ui/button"
import DarkArcBackground from "@/components/backgrounds/darkArc"
import PrimaryButton from "@/components/businessSection/ui/PrimaryButton"
import SecondaryButton from "@/components/businessSection/ui/SecondaryButton"

export default function BusinessHome() {

    return(
        <main>
            <div id='hero' className="min-h-[100vh] flex flex-row justify-between items-center px-4 md:px-16 2xl:px-32">
                <div id="heroLeft" className="max-w-[60%] animate-in fade-in duration-700">
                    <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold drop-shadow-xl text-left mb-2">Elevate Your Brand</h1>
                    <p className="drop-shadow-md text-lg md:text-xl 2xl:text-2xl mb-12 font-light max-w-[80%]">At <span className="font-accent text-transparent bg-gradient-to-r from-white to-green-400 bg-clip-text">OVRTONE</span>{` Media Group, we weaponize our expertise across media, technology, and design to land you more customers, get you more sales, and ultimately - `} <span className="font-bold italic">increase your bottom line.</span></p>
                    <div className="flex gap-4 ">
                        <PrimaryButton text="Get Started"  />
                        <SecondaryButton text="View Pricing" />
                    </div>
                </div>
                <DarkArcBackground position="topLeft" />  
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