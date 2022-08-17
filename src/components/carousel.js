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
// import new1 from '../image/new arrival/new1.png'

import { Link } from "react-router-dom";
import axios from 'axios'
import Newarrivaldata from "../image/new arrival/newarrivaldata";
// import newArrivalpage from  '../pages/newArrivalpage'
import { ArrowLeftRounded, FavoriteBorderOutlined } from "@material-ui/icons";
import { UserItemsContext } from "../context/Items";





// console.log(arrivaldatacards)


function Newarrivalcarousel(params) {

  const {Allproducts, setFavourite} = React.useContext(UserItemsContext)
  const [productsData, setproductsData] = React.useState();

  React.useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products')
        const newArrivalproducts = res.data.filter(item => item.isNewArrival)
        setproductsData(newArrivalproducts)   
        } catch (error) {
          console.log(error) 
        }
    }

    getProductData()
  
  }, []);

  console.log(productsData)

  function SortItems(params) {
 
    // const [SortedItems, setSortedItems] = React.useState([]);
  
  let index = 0
  
  // console.log(Allproducts)
  
  const newArrivalDisplay = productsData? productsData.filter(item => item.isNewArrival == true).map((item, i) => (
  <Slide key={i} className="" index={index++}>
          <div id={item._id} productid= {item._id} className="mx-auto  py-1 flex flex-col mt-1 " style={{maxWidth: 280, minWidth: 200, maxHeight: 300 }}> 
              <Card variant="outlined" className=" border-none " sx={{ maxWidth: 280, minWidth: 200 , borderRadius: 0}}>
              <Link to= {`/products/${item._id}`} >
              <CardMedia
            sx={{
                maxHeight: 300,
                minWidth: 200,
                maxWidth: 280
                // backgroundColor: 'red'
              
              }}
            component="img"
            // height="80"
            image= {`${item.image}`}
            alt="green iguana"
            />
              </Link>
      
          </Card>
           {/* <div className="flex justify-between" >
            <div className="w-2/3" >
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
            
           </div> */}
        </div>
    </Slide>
  )): <div>
    items not available
  </div>
  
  
  
  
  return (
   newArrivalDisplay
  )
  }
  
 
  const [windowWidth, setwindowWidth] = React.useState();
  const [visibleItems, setvisibleItems] = React.useState();
  const totalSlides =  SortItems().length
  
  const getVisibleSlides = () => {
    
    if(windowWidth <= 400 ){
      return 1
    }if(windowWidth > 500 && windowWidth <= 900){
      return 2
    }
     if(windowWidth > 900 )
     {return 3}
  }


  window.addEventListener('resize',
  ()=> setwindowWidth(window.innerWidth)
  )
  // console.log(windowWidth)
 
 

  React.useEffect(() => {
    setwindowWidth(window.innerWidth)
    setvisibleItems(getVisibleSlides())
  }, [windowWidth]);
 
 
 

  return (
    <div className=" lg:w-3/5 lg:mx-auto mx-8 my-20">

   <Link to= "/newarrival" ><Button className="text-blue-600 text-2xl font-bold font-headers" variant="text" >NEW ARRIVALS!</Button></Link>   
    <div className=" relative h-full" >
      
       <div 
      //  style={{background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(203,219,238,1) 37%, rgba(148,187,233,1) 48%, rgba(255,255,255,1) 64%, rgba(255,255,255,1) 100%)'}} 
       className="mx-auto  ">
        {productsData? <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={totalSlides}
              visibleSlides={visibleItems}
              infinite={true}
              currentSlide={1}
            >

         <div className="mx-auto ">
            <div className="flex justify-between" >
           
                <div className="self-center" ><ButtonBack className="">
                    {/* <IconButton className="hover:bg-transparent"> */}
                    <i class="ri-arrow-left-circle-fill"></i>
                    {/* </IconButton> */}
                  </ButtonBack></div>
                  <Slider style={{
                    height: '300px',
                    // margin: '0 auto',
                    // background: 'blue',
                    // flexDirection: 'flex-column',
                    // alignItems: 'center',
                    // justifyContent: 'center'
                    
                    
                    // minHeight: '200px'
                  }} className=" mx-auto w-full">    
                    {<SortItems/>}      
                  </Slider>
                <div className="self-center"><ButtonNext className="">
                    {/* <IconButton className="hover:bg-transparent" > */}
                    <i class="ri-arrow-right-circle-fill"></i>
                    {/* </IconButton> */}
                  </ButtonNext></div>
                
              </div>   
              
   
          </div>     
            </CarouselProvider>:
            <div>
              Loading.....
              </div>}
            
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
