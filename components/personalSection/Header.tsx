import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton";

export default function Header() {
    return (
        <header className="p-4 fixed flex items-center justify-between w-full animate-in fade-in slide-in-from-top duration-1000">
            <Link href={"/business"}><p className="font-accent font-bold text-4xl text-black">O</p></Link>
            <nav className="flex gap-4 text-neutral-800">
                <Link href={"/business/about"} className="hover:underline">About</Link>
                <Link href={"/business/about"} className="hover:underline">Engagements</Link>
                <Link href={"/business/about"} className="hover:underline">Weddings</Link>
                <Link href={"/business/about"} className="hover:underline">Family</Link>
            </nav>
            <Link href={'/business/contact'}><PrimaryButton text={"Contact Us"} small/></Link>
        </header>
    )
}

