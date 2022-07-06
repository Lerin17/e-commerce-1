import React from "react";

function Services(params) {
    return(
        <div>
            <div className="flex flex-col">
                <div>
                    <div>SERVICES</div>
                    <div className="flex flex-col lg:flex-row md:flex-row text-3xl justify-between px-10  text-blue-600 font-serif lg:w-8/12 mx-auto ">

                    <div className="shadow mx-4 w-1/3" >
                        Sun seeker
                        <div><i className="ri-global-line"></i> </div>
                    </div>

                    <div className="shadow mx-4 w-1/3" >
                        Find your wings
                        <div><i class="ri-flight-takeoff-line"></i> </div>
                    </div>

                    <div className="shadow mx-4 w-1/3" >
                        Earnest
                        <div><i className="ri-global-line"></i> </div>
                    </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services