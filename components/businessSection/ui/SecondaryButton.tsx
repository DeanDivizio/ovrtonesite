import { Button } from "@/components/ui/button";

export default function SecondaryButton({text, ...props}:{text:string}) {
    return (
        <Button {...props} 
            variant={'default'} 
            className="bg-transparent border border-blue-600 w-fit pt-3 pb-2 px-5 text-lg md:text-xl 2xl:text-2xl text-white drop-shadow-md font-base hover:scale-[102%] hover:text-neutral-100 hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-400 hover:border-transparent transition duration-100">
            {text}
        </Button>
    )
}