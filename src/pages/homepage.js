import React from "react";
import Header from "../components/Header";
import Newarrival from "../components/Newarrival";

import Camp from "../components/Camp";
import CTA from "../components/CTA";
import Services from "../components/services";
import PreviousCollection from "../components/PreviousCollections";



function Homepage(params) {
    return (
        <div>
           <Header/>
           <PreviousCollection/>
           <Newarrival/>
           <Camp/>
           <CTA/>
           <Services/>
        </div>
        // <div className="hover:animate-fade hover:text-amber-500 mt-10" >Home page</div>
    )
}

export default Homepage