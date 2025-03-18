import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton";

export default function Header() {
    return (
        <header className="p-4 fixed flex items-center justify-between w-full animate-in fade-in slide-in-from-top duration-1000">
            <Link href={"/business"}><p className="font-accent font-bold text-4xl">O</p></Link>
            <nav className="flex gap-4">
                <Link href={"/business/about"} className="hover:underline">About</Link>
                <Link href={"/business/about"} className="hover:underline">Media</Link>
                <Link href={"/business/about"} className="hover:underline">Branding</Link>
                <Link href={"/business/about"} className="hover:underline">Web</Link>
            </nav>
            <Link href={'/business/contact'}><PrimaryButton text={"Contact Us"} small/></Link>
        </header>
    )
}

