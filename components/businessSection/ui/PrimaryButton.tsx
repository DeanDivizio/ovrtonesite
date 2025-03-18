import { Button } from "@/components/ui/button";

export default function PrimaryButton({text, small, ...props}:{text:string, small?:boolean}) {
    return (
        <Button {...props} 
            variant={'default'} 
            className={`bg-gradient-to-br from-green-400 to-green-500 w-fit  ${small ? "pt-2 pb-1 px-3 text-sm md:text-md" : "pt-3 pb-2 px-5 text-lg md:text-xl 2xl:text-2xl"} text-white drop-shadow-md font-base hover:scale-[102%] hover:text-green-500  hover:from-neutral-100 hover:to-neutral-300 transition duration-100`}>
            {text}
        </Button>
    )
}