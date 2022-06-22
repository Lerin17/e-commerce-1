import React from "react";
import { useParams } from "react-router";
import Newarrivaldata from "../image/new arrival/newarrivaldata";
// import Newarrivaldata from "../image/new arrival/newarrivaldata";
import Navbar from "../components/Navbar";
import { Button, Card, CardMedia } from "@mui/material";



import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";



function Productdetailspage(params) {

const style = () => (
    {
        image: {
            maxWidth: 350
            // width: 300,
        }
    }
)

    console.log(useParams())
   const {productID} = useParams()
   const productData =  Newarrivaldata()

   console.log(productID)

   const currentProduct = productData.find(item => item.ProductID == productID)

   console.log(currentProduct)

    
  let index = 0
  const imagesarray = [1, 2, 3, 4]

const productdetailsimg = imagesarray.map(item => {
  return (
    <Slide className="" index={index++}>
      <div className="mx-auto p-1" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
          <Card variant="outlined" className="border-none" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150}}>
            <CardMedia
            sx={{
                maxHeight: 250
            }}
            component="img"
            height="80"
            image= {`${currentProduct.image}`}
            alt="green iguana"
            />     
         </Card> 
         </div>
    </Slide>
  )
})

   const classesx = style()

    return (
        <div>
            <Navbar/>
            <div className="lg:flex-row md:flex-row flex flex-col  md:h-7/12 border-b-2 border-black  mt-16" >
                <div className=" lg:block md:block  hidden flex flex-col lg:w-8/12 md:w-8/12 ">
                    <div className="p-10 mx-auto">
                        <div className="flex" >
                            <div style={classesx.image} >
                                <img src={currentProduct.image}
                                alt = 'JEWELRY IMG'/>
                            </div>

                            <div style={classesx.image} >
                                <img src={currentProduct.image}
                                 alt = 'JEWELRY IMG'/>
                            </div>
                        </div>

                        <div className="flex" >
                            <div style={classesx.image} >
                                <img src={currentProduct.image}
                                 alt = 'JEWELRY IMG'/>
                            </div>

                            <div style={classesx.image} >
                                <img src={currentProduct.image}
                                 alt = 'JEWELRY IMG'/>
                            </div>
                        </div>
                    </div>
                </div>

     {/* small size below */}
                <div className=" lg:hidden md:hidden relative" >
                    <div className="mx-auto  ">
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={4}
                    visibleSlides={1}
                    currentSlide={1}
                    >

                    <div className="mx-auto">
                        <div className="flex justify-between" >
                        <ButtonBack className="">B</ButtonBack>  
                        <Slider style={{
                            height: ''
                        }} className="h-72 mx-auto w-full">    
                            {productdetailsimg}      
                        </Slider>
                        
                        <ButtonNext className="">N</ButtonNext>
                        </div>   
                        
                        {/* <div className=" flex justify-between absolute w-full top-1/2">
                       
                        
                        </div> */}
                    </div>     
                    </CarouselProvider>
                     </div>       
                </div>

 {/* product details in sidebar */}
                <div className="lg:w-4/12 md:w-4/12 w-full lg:mx-10 md:mx-10  lg:px-0 md:px-0">
                    <div className="w-screen lg:w-full md:w-full bg-blue-600" >
                        BOYISH BOYISH BOYISH
                    </div>
                    <div className="px-4 lg:px-0 md:px-0" >
                        <div className="text-lg uppercase font-bold border-black" >
                            {currentProduct.name}
                        </div>

                        <div className=" border-y border-black" >
                            COLOUR
                            <div className="bg-gradient-to-r from-green-400 to-blue-300" >
                                <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>
                                <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>

                            </div>
                        </div>

                        <div className=" border-b border-black" >
                        <div className="flex justify-between" >DESCRIPTION <div>E</div></div> 
                            <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto ex mollitia inventore suscipit, in similique molestiae </div>
                        </div>

                        <div>
                            <Button className="text-blue-600" >
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Productdetailspage