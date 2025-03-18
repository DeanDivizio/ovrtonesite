import { Button } from "@/components/ui/button";

export default function PrimaryButton({text, small, ...props}:{text:string, small?:boolean}) {
    return (
        <Button {...props} 
            variant={'default'} 
            className={`bg-gradient-to-br from-green-500 to-green-700 w-fit  ${small ? "pt-2 pb-1 px-3 text-sm md:text-md" : "pt-3 pb-2 px-5 text-lg md:text-xl 2xl:text-2xl"} text-neutral-200 drop-shadow-md font-base hover:scale-[102%]  hover:from-green-400 hover:to-green-600 transition duration-100`}>
            {text}
        </Button>
    )
}