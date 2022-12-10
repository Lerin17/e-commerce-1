import { Card, CardMedia } from "@mui/material";
import React from "react";

import model1 from '../image/camp/model2camp4.png'
import model2 from '../image/camp/model4camp.png'
import model3 from '../image/camp/model1xcampAlt.png'



function Camp(params) {
    return (
        <div 
        
        >
            <div className="w-full py-20" >
                <div className="lg:w-12/12 mx-auto " >
                    <div className="text-5xl mb-2 font-bold md:pl-2" >CAMP</div>
                    <div  className="flex  justify-center relative">

                    {/* <div style={{
                        webkitTextStroke: '1px white'
                    }} className=" lg:w-1/4 font-gothic text-5xl flex items-center justify-center" >
                            <div className="text-transparent">
                                !
                            </div>
                        </div> */}

        <div 
                        style={{
                            alignSelf:'end',
                            justifySelf:'flex-end'
                        }}
                        className=" lg:w-1/4 left-20 text-white top-0 px-3 py-3 absolute z-10" >


<div className="text-sm " >
    <CardMedia
    sx={{
        height:200,
        width:200,
        objectFit:'contain',
    }}
    
    image={model3}
    />
</div>

<div className="text-sm mt-10" >
    <CardMedia
    sx={{
        height:200,
        width:200,
        objectFit:'contain',
    }}
    
    image={model2}
    />
</div>

        </div> 
           

                        <div className="bg-black lg:w-7/12 w-full h-full flex justify-center ">
                 <Card 
                            style={{
                                backgroundSize:'contain',
                            }}
                            variant="" className="shadow-2  transition-all w-full bg-black" sx={{ minWidth: 400 ,minHeight: 500}}>
                                    <CardMedia
                                    className="w-full bg-black  h-full"
                                    
                                sx={{
                                    maxHeight: 500,
                                    height: 600,
                                    objectFit:'contain',
                                  
                                    width: '100%',

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

         

                        <div style={{
                        webkitTextStroke: '1px white'
                    }} className="  font-gothic text-4xl flex items-center mx-2 lg:w-2/12 justify-center text-white" >
                            <div>
                                ,, To be Alive, right now ,,
                            </div>
                        </div>
                        
                     </div>
                 </div>

                 {/* 2nd card  */}

              
            </div>
        </div>
    )
}


export default Camp