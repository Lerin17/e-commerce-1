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

                        <div className="bg-blue-600 w-1/2 text-white" >
                            <div className="text-3xl">
                                 ddddd
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque esse itaque corrupti voluptates perspiciatis
                            </div>
                          
                        </div> 
                     </div>
                 </div>

                 {/* 2nd card  */}

                 <div  className="flex lg:w-7/12 mx-auto">

                   <div className="bg-blue-600 w-1/2 text-white" >
                        ddddd
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