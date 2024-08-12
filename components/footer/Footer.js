import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black h-[20vh] flex justify-center items-center">
            <div className="grid grid-cols-3 gap-8 justify-center items-center max-w-[800px]">
                <div className="flex flex-col justify-center items-end">
                    <Link href="/privacy" className="text-white text-sm font-thin text-right">Privacy Policy</Link>
                    <Link href="/terms" className="text-white text-sm font-thin text-right">Terms of Use</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/images/OVRTONEwhite.png" alt="OVRTONE Media Group Logo" className="w-24"/>
                    <p className="text-sm text-center max-w-64">Copyright OVRTONE Media Group 2024 | All Rights Reserved | Web Design by... Us of Course!</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <Link href="/contact" className="text-white text-sm font-thin text-right">Contact Us</Link>
                    <Link href="/about" className="text-white text-sm font-thin text-right">About Us</Link>
                    <Link href="/pricing" className="text-white text-sm font-thin text-right">Pricing</Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer;