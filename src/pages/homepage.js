import React from "react";
import Header from "../components/Header";
import Newarrival from "../components/Newarrival";

import Camp from "../components/Camp";
import CTA from "../components/CTA";
import Services from "../components/services";
import PreviousCollection from "../components/PreviousCollections";
import Footer from "../components/footer";



function Homepage(params) {
    return (
        <div>
           <Header/>
           <PreviousCollection/>
           <Newarrival/>
           <div className="">
           <CTA/>
           </div> 
           <div className="bg-gradient-to-b from-black via-black to-black " >
           <Camp/> 
           </div>
        
        <div className="">
        <Services/>
        </div>
      
           <Footer/>
        </div>
        // <div className="hover:animate-fade hover:text-amber-500 mt-10" >Home page</div>
    )
}

export default Homepage