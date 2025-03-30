export default function LightArcBackground({position, trans}:{position?:"bottomRight" | "bottomLeft" | "topRight" | "topLeft",trans?:boolean}) {

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
    let neutralColor = "rgb(255, 255, 255) 0%, #e6e6e6 19%"
    if (trans) {
      neutralColor = "#00000000 0%, #e6e6e616 19%"
    }

    return(
      <div id="lightArcContainer" className="absolute -z-10 inset-0 max-w-full max-h-full bg-cover backdrop-blur-lg overflow-hidden">
        <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:`radial-gradient(ellipse ${positionSettings}, ${neutralColor}, rgb(187, 247, 208) 28%, rgb(44, 72, 168) 36%, rgb(88, 144, 255) 40%)`,
        }}
        />
        <div
        className="absolute top-0 left-0 w-full h-full fadeFromWhiteLayer"
        />
      </div>
    )
}