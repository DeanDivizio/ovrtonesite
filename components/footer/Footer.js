import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black min-h-[20vh] max-h-[40vh] flex flex-col justify-center items-center">
            <div className="grid grid-cols-3 gap-6 md:gap-8 justify-center items-center max-w-[800px] mb-4">
                <div className="flex flex-col justify-center items-end">
                    <Link href="/privacy" className="text-white decoration-slate-light text-sm md:text-xl font-thin text-right">Privacy</Link>
                    <Link href="/terms" className="text-white decoration-slate-light text-sm md:text-xl font-thin text-right">Terms</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/images/OVRTONEwhite.png" alt="OVRTONE Media Group Logo" className="h-full md:h-auto md:w-[60%]" href="/"/>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <Link href="/contact" className="text-white decoration-slate-light text-sm md:text-xl font-thin text-right">Contact</Link>
                    <Link href="/about" className="text-white decoration-slate-light text-sm md:text-xl font-thin text-right">About</Link>
                    <Link href="/pricing" className="text-white decoration-slate-light text-sm md:text-xl font-thin text-right">Pricing</Link>
                </div>
            </div>
            <p className="text-xs font-thin md:text-sm text-center max-w-80 mb-4">Copyright OVRTONE Media Group 2024 | All Rights Reserved | Web Design by... Us of Course!</p>
        </footer>
    )
}
export default Footer;