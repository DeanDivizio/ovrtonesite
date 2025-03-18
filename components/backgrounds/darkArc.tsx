
export default function DarkArcBackground({position}:{position?:"bottomRight" | "bottomLeft" | "topRight" | "topLeft"}) {

    let positionSettings:string = "500% 500% at 128% 135%";
    switch (position) {
     case "bottomRight":
      positionSettings = "500% 500% at 128% 135%"
      break;
     case "bottomLeft":
      positionSettings = "500% 500% at -35% 155%"
      break;
     case "topRight":
      positionSettings = "500% 500% at 140% -35%"
      break;
     case "topLeft":
      positionSettings = "500% 500% at -20% -50%"
      break;
     default:
      positionSettings = positionSettings;
      break;
    }

    return(
        <div
        className="absolute -z-10 inset-0 max-w-full max-h-full bg-cover overflow-hidden animate-in fade-in duration-1000 pulse slow animation"
        style={{
          background:`radial-gradient(ellipse ${positionSettings}, rgb(0, 0, 0) 0%, rgb(16, 16, 16) 19%, rgb(187, 247, 208) 25%, rgb(11, 18, 42) 35%, rgb(2, 5, 18) 38%)`,
        }}
      />
    )
}