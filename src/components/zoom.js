// import { Card } from "@material-ui/core";
// import { CardMedia } from "@mui/material";
// import CursorZoom from "react-cursor-zoom/lib/cursor-zoom";
import Zoom from "react-img-zoom";
import React from "react";
import { propsToClassKey } from "@mui/styles";

// function Imagezoom({imgsrc}) {

//     console.log(imgsrc)
//     return (
//         <CursorZoom
//         image = {{
//             src: {imgsrc},
//             width: 400,
//             height: 300
//         }}

//         zoomImage = {{
//             src: {imgsrc},
//             width: 1600,
//             height: 1200
//         }}

//         cursorOffset={{ x: 80, y: -80 }}
//         />
//     )
// }


function Imagezoom({imgsrc}){
    const [ischangeimg, setischangeimg] = React.useState(true);

    const [zoomScale, setzoomScale] = React.useState(1);

    React.useEffect(() => {
        if(imgsrc){
            setTimeout(() => {
                setzoomScale(1.5)
            }, 1000)    
        }else{
            setzoomScale(1)
        }
    }, [imgsrc]);

    React.useEffect(() => {
       setischangeimg(prev => !prev) 
    }, [imgsrc]);



    return (
            <div style={{width:300}} className='' >
                <Zoom
                img= {imgsrc}
                zoomScale={zoomScale}
                width={500}
                height={500}
                key={ischangeimg?1:2}
                />
            </div>
          
    )
}

export default Imagezoom