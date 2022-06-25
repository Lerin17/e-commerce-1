import { Button, Card, CardMedia } from "@mui/material";
import React from "react";
import pile from '../image/CTA/pile.jpg'

import pile2 from '../image/new arrival/new3.png'




function CTA(params) {
    return (
        <div className="lg:w-3/5 mx-auto ">
            <div className=" mt-10 shadow-2 border-4 border-black">
                <div className="flex justify-between">
                    {/* <div className="w-4/12">
                    <Card variant="outlined" className="shadow-2" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150}}>
                            <CardMedia
                        sx={{
                            maxHeight: 250
                            }}
                        component="img"
                        height="80"
                        image= {`${pile2}`}
                        alt="green iguana"
                        />
                    </Card>
                    </div> */}

                    <div className="6/12">
                        <div className="lg:text-6xl text-3xl md:text-5xl" >
                         SHOP NOW
                        </div>
                        
                        <Button>
                            Discover the collection 
                        </Button>
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default CTA