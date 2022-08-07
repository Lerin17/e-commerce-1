// import { Card } from "@material-ui/core";
// import { CardMedia } from "@mui/material";
// import CursorZoom from "react-cursor-zoom/lib/cursor-zoom";
import Zoom from "react-img-zoom";
import React from "react";

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

    React.useEffect(() => {
       setischangeimg(prev => !prev) 
    }, [imgsrc]);



    return (
            <div style={{width:300}} className='' >
                <Zoom
                img= {'https://cdn.shopify.com/s/files/1/0603/5688/6752/products/121605-1_1_1200x.jpg?v=1634273425'}
                zoomScale={2}
                width={250}
                height={300}
                key={ischangeimg?1:2}
                />
            </div>
          
    )
}

export default Imagezoom