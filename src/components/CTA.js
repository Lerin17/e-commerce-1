import { Button, Card, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pile from '../image/CTA/pile.jpg'

import pile2 from '../image/new arrival/new3.png'
// import Allitems from "../pages/allItempage";





function CTA(params) {
    return (
        <div className="" >
             <div className="lg:w-3/5 mx-auto py-10">
            <div className="  hover:scale-105  transition-all  rounded-lg  ">
                <div className="flex justify-center">
                    <Link to={"/collection/allitems"} >
                        <div className=" ">
                            <div className="lg:text-8xl text-3xl  md:text-5xl font-bold cursor-pointer text-blue-600 font-headers p-2" >
                            SHOP NOW
                            <span className="pr-6 font-headers2 text-blue-500" >!</span>
                            <span className="pr-5 font-headers2  text-blue-400" >!</span>
                            <span className="pr-4 font-headers2  text-blue-300" >!</span>
                            <span className="pr-3 font-headers2 text-blue-200" >!</span>
                            <span className="pr-2 font-headers2 text-gray-200" >!</span>
                            <span className="pr-1 font-headers2 text-gray-100" >!</span>
                            </div>
                            
                            {/* <Button className="px-12" >
                                Discover the collection 
                            </Button> */}
                        </div> 
                    </Link>
                   
                </div>
           
            </div>
        </div>
        </div>
       
    )
}

export default CTA