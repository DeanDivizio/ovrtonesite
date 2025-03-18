"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

export default function TransitionLink({children, href, ...props}:{children:any, href:string}) {

    const router = useRouter();

    function sleep(d:number) {
        return new Promise((resolve) => setTimeout(resolve, d));
    }

    async function handTransition(e:any) {
        e.preventDefault();
        await sleep(280);
        router.push(href);
    }

    return(
        <Link onClick={handTransition} href={href} {...props}>{children}</Link>
    )

}