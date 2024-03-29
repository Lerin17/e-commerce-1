import { IconButton } from "@mui/material";
import React from "react";


function Footer(params) {
    return (
        <div className="bg-gray-200 mt-20 z-20  bottom-0">
            
            <div className="text-5xl text-white font-gothic text-center" >B</div>

            <div className="flex border justify-center" >
                <div>
                    <IconButton className="hover:bg-transparent" ><div><i className="ri-instagram-fill"></i></div></IconButton>
                </div>
                <div>
                    <IconButton className="hover:bg-transparent"><div><i className="ri-twitter-fill"></i></div></IconButton>
                </div>
                <div>
                    <IconButton className="hover:bg-transparent"><div><i className="ri-facebook-fill"></i></div></IconButton>
                </div>
                <div>
                    <IconButton className="hover:bg-transparent"><div><i className="ri-youtube-fill"></i></div></IconButton>
                </div>
            </div>

            <div className=" lg:flex md:flex w-10/12 mx-auto text-sm" >


                <div className="w-1/3 mt-6" >
                    <div className="font-bold" >Customer service</div>
                    <div>Products and Sales Information</div>
                    <div>After-sales Service</div>
                    <div>Taking care of your <span className="text-blue-600" >Boyish!</span> </div>
                    <div>FAQ</div>
                </div>


                <div className="w-1/3 mt-6" >
                    <div className="font-bold">Contact Us</div>
                    <div>Subscribe to Newsletter</div>
                </div>

                <div className="w-1/3 mt-6">
                    <div className="font-bold">Legal Information</div>
                    <div>General terms and conditions</div>
                    <div>Privacy policy</div>
                    <div>Cookies policy</div>
                </div>

                <div className="w-1/3 mt-6">
                    <div className="font-bold">Social</div>
                    <div>General terms and conditions</div>
                    <div>Privacy policy</div>
                    <div>Cookies policy</div>
                </div>

                
            </div>
        </div>
    )
}

export default Footer
