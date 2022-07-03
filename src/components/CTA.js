import { Button, Card, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pile from '../image/CTA/pile.jpg'

import pile2 from '../image/new arrival/new3.png'
// import Allitems from "../pages/allItempage";





function CTA(params) {
    return (
        <div className="lg:w-3/5 mx-auto hover:animate-fade hover:bg-blue-600">
            <div className=" mt-10 shadow-2 border-4 border-black">
                <div className="flex justify-between">
                    <Link to={"/collection/allitems"} >
                        <div className="6/12 ">
                            <div className="lg:text-6xl text-3xl md:text-5xl font-bold cursor-pointer " >
                            SHOP NOW
                            </div>
                            
                            <Button>
                                Discover the collection 
                            </Button>
                        </div> 
                    </Link>
                   
                </div>
           
            </div>
        </div>
    )
}

export default CTA