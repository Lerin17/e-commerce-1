import React from "react";

function Services(params) {
    return(
        <div className="bg-black">
         
                <div className="flex flex-col pt-10  lg:w-8/12 lg:px-10 md:px-10   mx-auto">
                    <div className="font-bold text-2xl pl-4" >SERVICES</div>
                
                    <div className="flex flex-col lg:flex-row items-center md:flex-row text-3xl justify-between   text-blue-600 font-serif  ">

                    <div className="mx-4 w-5/12 lg:w-1/3 md:w-3/12 flex cursor-pointer flex-col items-center" >
                    {/* <svg  className="lg:w-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M10.478 11.632L5.968 4.56l1.931-.518 6.951 6.42 5.262-1.41a1.5 1.5 0 0 1 .776 2.898L5.916 15.96l-.776-2.898.241-.065 2.467 2.445-2.626.704a1 1 0 0 1-1.133-.48L1.466 10.94l1.449-.388 2.466 2.445 5.097-1.366zM4 19h16v2H4v-2z"/></svg> */}

                    <svg className="lg:w-48 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"/></svg>
                    <div className="text-center font-bold">
                        Find your wings 
                        </div>
                        
                    </div>

                    <div className="mx-4 w-5/12 lg:w-1/3 md:w-3/12 flex flex-col items-center" >
                    {/* <svg className="lg:w-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"/></svg> */}

                    <svg className="lg:w-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 0 1-.037-.633l3.823-5.256A1 1 0 0 1 4.873 3zm.51 2l-2.8 3.85L12 19.05 21.417 8.85 18.617 5H5.383z"/></svg>
                        <div className="text-center font-bold">
                        Earnest
                        </div>
                            
                    </div>

                    <div className="mx-4 w-5/12 lg:w-1/3 md:w-3/12 flex flex-col items-center" >
                         <svg className="lg:w-48"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3.99 3.99 0 0 1 3 1.354A3.99 3.99 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8zm7-2V5h-5a2 2 0 0 0-2 2v12h7zm-9 0V7a2 2 0 0 0-2-2H4v14h7z"/></svg>

                        <div className="text-center font-bold">
                        Earnest 
                        </div>
                       
                    </div>
                        
                    </div>
                </div>

           
        </div>
    )
}

export default Services