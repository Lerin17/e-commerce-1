import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import new1 from '../image/new arrival/new1.png'

import { Link } from "react-router-dom";

import Newarrivaldata from "../image/new arrival/newarrivaldata";
import newArrivalpage from  '../pages/newArrivalpage'
import { FavoriteBorderOutlined } from "@material-ui/icons";

let index = 0



const arrivaldatacards = Newarrivaldata().map(item => {
  return (
    <Slide className="" index={index++}>
      <div className="mx-auto p-1 flex flex-col" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
          <Card variant="outlined" className="shadow-2 border-black border-2" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150, borderRadius: 0}}>
          <Link to= {`/products/${item.ProductID}`} >
          <CardMedia
        sx={{
            maxHeight: 250
          }}
        component="img"
        height="80"
        image= {`${new1}`}
        alt="green iguana"
        />
          </Link>
        {/* <CardContent className="border hover:bg-black   border-2 text-gray-300">
        <p>{item.name}</p>
        <div className="flex justify-between">
          <p>{item.price}</p>
          <Button >💟</Button>
        </div>
      </CardContent>  */}
      </Card>
       <div className="flex justify-between" >
        <div className="" >
          <div className="font-bold uppercase border-b-2 border-black" >
              {item.name}
            </div>
            <div className="border-b-2 border-black" >
              {item.price}
            </div>
        </div>

        <div className="self-center ">
          <IconButton className="text-blue-600" >
            <FavoriteBorderOutlined/>
          </IconButton>
        </div>
        
       </div>
    </div>
</Slide>
  )
})

// console.log(arrivaldatacards)


function Newarrivalcarousel(params) {
 
  const [windowWidth, setwindowWidth] = React.useState();

  window.addEventListener('resize',
  ()=> setwindowWidth(window.innerWidth)
  )
  console.log(windowWidth)
  React.useEffect(() => {
 
  

    
  }, [windowWidth]);


  return (
    <div className=" lg:w-3/5 lg:mx-auto mx-16">

   <Link to= "/newarrival" ><Button className="text-blue-600 text-2xl font-bold" variant="text" >NEW ARRIVALS</Button></Link>   
    <div className=" relative shadow-inner h-72" >
      
<div className="mx-auto  ">
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={8}
      visibleSlides={windowWidth >= 400? 1: windowWidth > 400? 2: windowWidth >= 770? 3: 1 }
      currentSlide={1}
    >

<div className="mx-auto">
   <div>
   <Slider style={{
        height: ''
      }} className="h-72 mx-auto w-full">    
        {arrivaldatacards}      
      </Slider>
    
    </div>   
      
      <div className=" flex justify-between absolute w-full top-1/2">
      <ButtonBack className="">B</ButtonBack>
      <ButtonNext className="">N</ButtonNext>
      </div>
</div>     
    </CarouselProvider>
</div>       
    </div>
</div>
  );
}

// export default App extends React.Component {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={8}
//         visibleSlides={1}
//         currentSlide={1}
//       >
//         <Slider>
//           <Slide index={0}>I am the first Slide.</Slide>
//           <Slide index={1}>I am the second Slide.</Slide>
//           <Slide index={2}>I am the third Slide.</Slide>
//           <Slide index={3}>I am the fourth Slide.</Slide>
//           <Slide index={4}>I am the fifth Slide.</Slide>
//           <Slide index={5}>I am the sixth Slide.</Slide>
//           <Slide index={6}>I am the seventh Slide.</Slide>
//           <Slide index={7}>I am the eighth Slide.</Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }

export default Newarrivalcarousel
