"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import TransitionLink from '@/components/utils/TransitionLink';

export default function RootHome() {

  const [hoveredButton, setHoveredButton] = useState<"none" | "green" | "blue">("none")
  const [animateOut, setAnimateOut] = useState<true | false>(false);


    return (
        <main className={`absolute overflow-hidden h-full w-full flex justify-center items-center animate-in fade-in transition duration-1000 ${hoveredButton === "blue" ? "bg-white" : ""}`}>
        
        <div
          id="darkBG"
          className={`absolute inset-0 pulse-slow-animation ${animateOut === true ? "opacity-0 duration-1000" : "opacity-100"}`}
          style={{
            background: "radial-gradient(ellipse 500% 500% at 128% 135%, rgb(0, 0, 0) 0%, rgb(16, 16, 16) 19%, rgb(187, 247, 208) 25%, rgb(11, 18, 42) 37%)",
          }}
        />
        <div id="lightBG"
          className={`absolute inset-0 pulse-slow-animation transition duration-300 ${animateOut === true ? "opacity-0 duration-1000" : "opacity-100"}`}
          style={{
            background: "radial-gradient(ellipse 500% 500% at 130% 130%, rgb(255, 255, 255) 0%, #e6e6e6 19%, rgb(187, 247, 208) 25%, rgb(132, 216, 255) 37%)",
            opacity: hoveredButton === "blue" ? 1 : 0,
          }}
        />
  
        <div id="content" className={`relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center ${animateOut === true ? "opacity-0 duration-1000" : "opacity-100"}`}>
          <h1 className={`font-heading text-4xl md:text-5xl 2xl:text-7xl font-bold mb-4 drop-shadow-lg transition-all duration-500 ${hoveredButton === "blue" ? "text-black" : "text-white"}`}>
            <span className={`text-transparent font-accent duochromeGradient ${hoveredButton === "blue" ? "gradientTranslateLeft" : "gradientTranslateRight"}`}>oVRToNE </span>Media Group
          </h1>
          <div className={`text-xl font-body md:text-2xl mb-12 max-w-2xl flex flex-row gap-4 transition-colors duration-500 ${hoveredButton === "blue" ? "text-gray-600" : "text-gray-100"}`}>
            <p>Photo</p>
            <p className={`${hoveredButton === "blue" ? "text-blue-600" : "text-blue-100"} font-thin`}>//</p>
            <p>Video</p>
            <p className={`${hoveredButton === "blue" ? "text-blue-600" : "text-blue-100"} font-thin`}>//</p>
            <p>Design</p>
            <p className={`${hoveredButton === "blue" ? "text-blue-600" : "text-blue-100"} font-thin`}>//</p>
            <p>Web</p>
          </div>
  
          <div>
            <p className={`mb-2 text-lg font-body ${hoveredButton === "blue" ? "text-neutral-800" : "text-neutral-100"}`}>I am a...</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <TransitionLink href={"/business"}>
              <Button
                variant="default"
                className={`${hoveredButton === "blue" ? "bg-green-500" : "bg-green-400"} text-white text-lg drop-shadow-md font-base hover:scale-[102%] hover:text-neutral-800 hover:bg-neutral-100 transition duration-100`}
                onMouseEnter={() => setHoveredButton("green")}
                onClick={()=>{setAnimateOut(true)}}>
                {`Business`}
              </Button>
            </TransitionLink>
            <TransitionLink href={"/personal"}>
              <Button
                variant="default"
                className={`${hoveredButton === "blue" ? "bg-blue-500" : "bg-blue-400"} text-white text-lg drop-shadow-md font-base hover:scale-[102%] hover:text-neutral-800 hover:bg-neutral-100 transition duration-100`}
                onMouseEnter={() => setHoveredButton("blue")}
                onClick={()=>{setAnimateOut(true)}}>
                {`Individual`}
              </Button>
            </TransitionLink>
          </div>
        </div>
        </main>
  )
}
