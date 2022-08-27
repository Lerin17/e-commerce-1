import { Card, CardMedia } from "@mui/material";
import React from "react";

import model1 from '../image/camp/model1x.png'
import model2 from '../image/camp/model2xx.png'
import model3 from '../image/camp/model4xx.png'



function Camp(params) {
    return (
        <div>
            <div className="w-full " >
                <div className="lg:w-12/12 mx-auto " >
                    <div className="text-5xl mb-2 font-bold md:pl-2" >CAMP</div>
                    <div  className="flex border border-8 border-transparent">

                    <div style={{
                        webkitTextStroke: '1px white'
                    }} className=" lg:w-1/4 font-gothic text-5xl flex items-center justify-center" >
                            <div className="text-transparent">
                                !
                            </div>
                        </div>

                        <div className="bg-black lg:w-1/4 w-1/2 flex">
                            <Card variant="" className="shadow-2 hover:scale-105 transition-all w-full " sx={{ minWidth: 100 ,minHeight: 300}}>
                                    <CardMedia
                                    className="w-full"
                                sx={{
                                    maxHeight: 300,
                                    height: 300,
                                    width: '100%'
                                    }}
                                component="img"
                                // height="300"
                                image= {`${model1}`}
                                alt="green iguana"
                                />
                            </Card>

                            {/* <div className="text-white">
                                dddx
                            </div> */}
                        </div>

                        <div className=" lg:w-1/4 w-1/2 text-white  px-3 py-3" >

                            <div className="text-3xl font-gothic">
                                 SYMBOLE!
                            </div>

                            <div className="text-sm " >
                            The Prada Symbole handbag is inspired by Pradas iconic Triangle. A triptych in its conception, the campaign starring Hunter Schafer is created by three of contemporary arts modern masters
                                <span className="text-lg lg:hidden md:hidden" >
                                    .....
                                </span>
                                 <span className="hidden lg:block md:block" >
                                Catherine Opie, Thomas Ruff and Carrie Mae Weems, approaching the same subject matters in a series of divergent and distinct portraits.
                            </span>
                            </div>
                          
                        </div> 

                        <div style={{
                        webkitTextStroke: '1px white'
                    }} className=" lg:w-1/4 font-gothic text-7xl flex items-center justify-center text-transparent" >
                            <div>
                                B
                            </div>
                        </div>
                        
                     </div>
                 </div>

                 {/* 2nd card  */}

                 <div className="flex w-12/12">

                 {/* <div className="bg-blue-600 lg:w-2/12  font-gothic text-8xl flex items-center justify-center " >
                            <div className="text-yellow-500" >
                                B
                            </div>
                        </div> */}


                        <div className="  hidden lg:block lg:pl-10 lg:w-2/12">
                        <Card variant="" className="shadow-2 hover:scale-110 transition-all mx-auto" sx={{ minWidth: 100 ,minHeight: 300}}>
                                <CardMedia
                                className="w-full"
                            sx={{
                                maxHeight: 300,
                                height: 300,
                                width: '100%'
                                }}
                            component="img"
                            height="300"
                            image= {`${model3}`}
                            alt="green iguana"
                            />
                        </Card>
                    </div>

                 <div  className="flex lg:w-8/12 mx-auto  py-2 border-white">

           

                 <div className=" hidden lg:block lg:w-1/4 font-gothic text-7xl flex items-center justify-center  " >
                            <div className="text-red-500 text-center" >
                                B
                            </div>
                        </div>

                   <div className=" lg:w-1/4 w-1/2 text-white  px-3 py-3" >
                        <div className="uppercase text-3xl font-gothic" >
                        persona!
                        </div>
                    
                        <div className="text-sm">
                        Drawn from Prada’s heritage, in the Symbole handbag the iconic Triangle is reinvented for today into a luxurious jacquard. Geometric, modern, multi-faceted, it is a wordless assertion of Prada’s unmistakable persona. 
                        </div>
                    </div> 
{/* 
                    <div className="bg-white lg:w-1/4 font-gothic text-7xl flex items-center justify-center" >
                            <div>
                                B
                            </div>
                        </div> */}

                    <div className="bg-black lg:w-2/4 w-1/2">
                        <Card variant="" className="shadow-2 hover:scale-110 transition-all mx-auto" sx={{ minWidth: 100 ,minHeight: 300}}>
                                <CardMedia
                                className="w-full"
                            sx={{
                                maxHeight: 300,
                                height: 300,
                                width: '100%'
                                }}
                            component="img"
                            height="300"
                            image= {`${model2}`}
                            alt="green iguana"
                            />
                        </Card>
                    </div>

                    <div className="hidden lg:block lg:w-1/4 font-gothic text-7xl flex items-center justify-center" >
                            
                                B
                          
                        </div>

                        
                 </div>

                 <div className=" lg:w-2/12  hidden lg:block  font-gothic text-8xl flex items-center justify-center  text-yellow-500" >
                           
                                B
                           
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Camp