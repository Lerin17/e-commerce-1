import { Card, CardMedia } from "@mui/material";
import React from "react";

import model1 from '../image/camp/model1x.png'
import model2 from '../image/camp/model2xx.png'



function Camp(params) {
    return (
        <div>
            <div className="w-full" >
                <div className="lg:w-7/12 mx-auto" >
                    <div className="text-3xl mb-2" >CAMP</div>
                    <div  className="flex ">
                        <div className="bg-black w-1/2 flex">
                            <Card variant="" className="shadow-2 hover:scale-105 w-full " sx={{ minWidth: 100 ,minHeight: 300}}>
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

                        <div className="bg-blue-600 w-1/2 text-white  px-3 py-3" >

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
                     </div>
                 </div>

                 {/* 2nd card  */}

                 <div  className="flex lg:w-7/12 mx-auto">

                   <div className="bg-blue-600 w-1/2 text-white  px-3 py-3" >
                        <div className="uppercase text-3xl font-gothic" >
                        persona!
                        </div>
                    
                        <div className="text-sm">
                        Drawn from Prada’s heritage, in the Symbole handbag the iconic Triangle is reinvented for today into a luxurious jacquard. Geometric, modern, multi-faceted, it is a wordless assertion of Prada’s unmistakable persona. 
                        </div>
                    </div> 

                    <div className="bg-black w-1/2">
                        <Card variant="" className="shadow-2 hover:scale-110 mx-auto" sx={{ minWidth: 100 ,minHeight: 300}}>
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
                 </div>
            
            </div>
        </div>
    )
}


export default Camp