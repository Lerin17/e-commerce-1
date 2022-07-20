import { Card } from "@material-ui/core";
import { Button, Skeleton, skeletonClasses } from "@mui/material";
import React from "react";
import { LocationutilityContext } from "../context/Location";

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";
import { IconButton } from "@material-ui/core";



export default function Skeletoncomponent(params) {
    const {currentLocation} = React.useContext(LocationutilityContext)
    // let  AllitempageSkeleton = [] 
    // const allProductsArray = new Array(22)

    const style = () => (
        {
            image: {
                Width: 220,
                // width: 300,
            }
        }
    )

    const classesx = style()

    const ProductDetailsSkeleton = () => (
        <div className="lg:flex-row md:flex-row flex flex-col  md:h-7/12  border-b-2 border-black  mt-16" >
        <div className=" lg:block md:block  hidden flex flex-col lg:w-5/12 md:w-8/12 animate-pulse">
            <div className="p-2 mx-auto  lg:w-8/12">
                <div className="flex my-2" >
                <Skeleton className="mx-4" variant="rectangular" width={180} height={280} />

                <Skeleton className="mx-4" variant="rectangular" width={180} height={280} />
                </div>

                <div className="flex my-2" >
                <Skeleton className="mx-4" variant="rectangular" width={180} height={280} />

                <Skeleton className="mx-4" variant="rectangular" width={180} height={280} />
                </div>
            </div>
        </div> 

{/* small size below */}
        <div className=" lg:hidden md:hidden relative" >
            <div className="mx-auto  ">
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            visibleSlides={1}
            currentSlide={1}
            >

            <div className="mx-auto">
                <div className="flex justify-between" >
                <ButtonBack className="">
                    <IconButton className="hover:bg-transparent">
                    <i class="ri-arrow-left-circle-fill"></i>
                    </IconButton>    
                </ButtonBack>  
                <Slider style={{
                    height: ''
                }} className="h-72 mx-auto w-full">    
                            <Skeleton className="mx-4" variant="rectangular" width={210} height={280} />
                </Slider>
                
                <ButtonNext>
                    <IconButton className="hover:bg-transparent">
                    <i class="ri-arrow-right-circle-fill"></i>
                    </IconButton>
                </ButtonNext>
                </div>   
                
                 <div className=" flex justify-between absolute w-full top-1/2">
               
                
                </div>
            </div>     
            </CarouselProvider>
             </div>       
        </div>

{/* product details in sidebar */}
        <div className="lg:w-4/12 md:w-4/12 w-full lg:mx-10 md:mx-10  lg:px-0 md:px-0">
            <div className="w-screen lg:w-full md:w-full bg-blue-600" >
                BOYISH BOYISH BOYISH
            </div>
            <div className="px-4 lg:px-0 md:px-0"  >
                <div className="text-lg uppercase font-bold border-black" >
                  ...loading
                </div>

                <div className=" border-y border-black" >
                ...loading
                    <div className="bg-gradient-to-r from-green-400 to-blue-300" >
                        <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>
                        <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>

                    </div>
                </div>

                <div className=" border-b border-black" >
                <div className="flex justify-between" >DESCRIPTION <div>E</div></div> 
                    <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto ex mollitia inventore suscipit, in similique molestiae </div>
                </div>

                <div  >
                    <Button>
                       ...loading
                    </Button>
                    {/* <Button onClick={(event)=>setCartitems(event)} className={currentProduct.isCartItem?'text-red-600':'text-blue-600'} >
                        {currentProduct.isCartItem? 'REMOVE FROM CART': 'ADD TO CART'}
                    </Button> */}
                </div>
            </div>
        </div>
    </div> 
    )

    const AllitempageSkeleton = () => Array.from(new Array(22)).map((item ,i)=>
    <div  style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}} className="bg-blue-300 "> 
         <Skeleton key={i} className="bg-yellow-400 mx-auto md:mx-5 w-full   lg:mx-8 my-4  p-1" variant="rectangular" width={180} height={280} />
    </div>
   )




    console.log(AllitempageSkeleton, 'all items')
    // const AllitempageSkeleton = new Array(22).map()

    //  for (let i = 0; i < 22; i++) {
    //     AllitempageSkeleton.push (
    //         <Skeleton className="bg-yellow-400 mx-auto md:mx-5w-full   lg:mx-8 my-4  p-1" variant="rectangular" width={180} height={280} />
    //    )
    //   } 
    //   const AllitempageSkeleton 

//  () => (           
    
//     )

    const getSkeleton = () => (
        <div>
              {/* <AllitempageSkeleton/> */}
            <ProductDetailsSkeleton/>
        </div>
    )

    return(
        getSkeleton()
    )
    
}