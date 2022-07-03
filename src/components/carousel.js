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
// import newArrivalpage from  '../pages/newArrivalpage'
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { UserItemsContext } from "../context/Items";


function SortItems(params) {
  const {Allproducts, setFavourite} = React.useContext(UserItemsContext)
  const [SortedItems, setSortedItems] = React.useState([]);

let index = 0

console.log(Allproducts)

React.useEffect(() => {
  const arrivaldatacards = Allproducts.map((item, i) => {
    return (
      <Slide key={i} className="" index={index++}>
        <div id={item.ProductID} productid= {item.ProductID} className="mx-auto p-1 flex flex-col" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
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
  
          <div id={item.ProductID} productid = {item.ProductID} onClick={setFavourite}  className="self-center ">
            <IconButton className= {`${item.isFavourite? 'text-red-600':'text-blue-600'}`} >
              <FavoriteBorderOutlined/>
            </IconButton>
          </div>
          
         </div>
      </div>
  </Slide>
    )
  })

  setSortedItems(arrivaldatacards)
}, [Allproducts]);



return (
 SortedItems
)
}


// console.log(arrivaldatacards)


function Newarrivalcarousel(params) {
 
  const [windowWidth, setwindowWidth] = React.useState();
  const [visibleItems, setvisibleItems] = React.useState();
  const visibleSlides = () => {
    
    if(windowWidth <= 500 ){
      return 1
    }if(windowWidth > 400 && windowWidth <= 770){
      return 2
    }
     if(windowWidth > 770 )
     {return 3}
  }


  window.addEventListener('resize',
  ()=> setwindowWidth(window.innerWidth)
  )
  console.log(windowWidth)
 
 

  React.useEffect(() => {
    setwindowWidth(window.innerWidth)
    setvisibleItems(visibleSlides())
  }, [windowWidth]);
 

  // console.log(visibleSlides())

  return (
    <div className=" lg:w-3/5 lg:mx-auto mx-16">

   <Link to= "/newarrival" ><Button className="text-blue-600 text-2xl font-bold" variant="text" >NEW ARRIVALS</Button></Link>   
    <div className=" relative shadow-inner h-72" >
      
        <div className="mx-auto  ">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={8}
              visibleSlides={visibleItems}
              currentSlide={1}
            >

         <div className="mx-auto">
            <div className="flex justify-between" >
           
                <div className="self-center" ><ButtonBack className="">B</ButtonBack></div>
                  <Slider style={{
                    height: ''
                  }} className="h-72 mx-auto w-full">    
                    {<SortItems/>}      
                  </Slider>
                <div className="self-center"><ButtonNext className="">N</ButtonNext></div>
                
              </div>   
              
              {/* <div className=" flex justify-between absolute w-full top-28">
              <ButtonBack className="">B</ButtonBack>
              <ButtonNext className="">N</ButtonNext>
              </div> */}
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
