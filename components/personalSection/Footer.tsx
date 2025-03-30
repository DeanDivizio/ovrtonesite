import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton";

export default function Footer() {
    return (
        <header className="px-4 py-2 absolute z-10 flex items-center justify-center w-full bg-white animate-in fade-in slide-in-from-top duration-1000">
            <p className="font-light text-black text-sm absolute left-4">Copyright OVRTONE Media Group, LLC 2025</p>
           
            <nav className="flex gap-4 text-neutral-800 ">
                <Link href={"/personal/about"} className="hover:underline font-light">About</Link>
                <Link href={"/personal/engagements"} className="hover:underline font-light">Engagements</Link>
                <Link href={"/personal/weddings"} className="hover:underline font-light">Weddings</Link>
                <Link href={"/personal/family"} className="hover:underline font-light">Family</Link>
            </nav>
            
      
            <Link href={'/personal/contact'} className="text-black text-sm absolute right-4 hover:underline">Contact Us</Link>
        </header>
    )
}

