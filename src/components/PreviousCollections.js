import React from "react";
import Swimmerimg from '../image/PrevCollections/swimmerImg.webp'
import Voyagerimg from '../image/PrevCollections/voyagerImg.webp'
import axios from "axios";
import { Button } from "@material-ui/core";



function PreviousCollection(params) {

    const [imageWidth, setimageWidth] = React.useState();
    const [imageHeight, setimageHeight] = React.useState();
    const [containerWidth, setcontainerWidth] = React.useState();

    const [windowWidth, setwindowWidth] = React.useState();
    
    const [swimmerJewelData, setswimmerJewelData] = React.useState();
    const [voyagerJewelData, setvoyagerJewelData] = React.useState();

    const [isSwimmerDisplayCom, setisSwimmerDisplayCom] = React.useState(true);
    const [isVoyagerDisplayCom, setisVoyagerDisplayCom] = React.useState(true);

    const [startTime, setstartTime] = React.useState();
    const [endTime, setendTime] = React.useState();

    // const [swimmerDisplayComponent, setswimmerDisplayComponent] = React.useState();

    const swimmerDisplayComponent = <div  
        style={{
        width: imageWidth,
        height:  imageHeight
        }} className={`-z-10 relative mx-auto flex items-center bg-red-400 ${isSwimmerDisplayCom?'animate-fadein':'hidden'} `} >
        <img style={{height: isSwimmerDisplayCom? 500: 'auto', width:imageWidth}} className="object-cover " src={Swimmerimg} alt="" />
        </div>

const voyagerDisplayComponent = <div  
    style={{
    width: imageWidth,
    height: imageHeight
    }} className={`-z-10 relative mx-auto flex items-center bg-red-400 ${isVoyagerDisplayCom?'animate-fadein':'hidden'} `} >
    <img style={{height: 500, width:imageWidth}} className="object-cover" src={Voyagerimg} alt="" />
    </div>

    const swimmerJewel = swimmerJewelData? <div
           style={{
        width: imageWidth,
        height: imageHeight
        }} className={`-z-10 relative mx-auto ${isSwimmerDisplayCom?'hidden':'animate-fadein'}`} >
            <div className="text-center" >Swimmer Collection</div>
            <div className="text-center text-lg font-headers font-bold" >Clarity</div>
        <img className="object-cover" src={swimmerJewelData.image} alt="" />
    </div>:<div>Not available</div>

    const voyagerJewel = voyagerJewelData? <div
     style={{
    width: imageWidth,
    height: imageHeight
    }} className={`-z-10 relative mx-auto ${isVoyagerDisplayCom?'hidden':'animate-fadein'}`} >
    <div className="text-center" >Voyager Collection</div>
    <div className="text-center text-lg font-headers font-bold" >Fantazia</div>
    <img className="object-fit" src={voyagerJewelData.image} alt="" />
    </div>:<div>Not available</div>


    // React.useEffect(() => {
    //     <div  style={{
    //         width: imageWidth,
          
    //         }} className="-z-10 relative mx-auto" >
    //         <img className="object-fit " src={Swimmerimg} alt="" />
    //         </div>
    // // }, []);

    // React.useEffect(() => {
        
    // }, []);

    // React.useEffect(() => {
    //     if(startTime - endTime > 6){
    //         toggle()
    //         clearInterval(updateEndtime)
    //     }
    // }, [startTime, endTime]);


    // const updateEndtime =  setInterval(() => {
    //     setendTime(new Date().getSeconds()) 
    // }, 1000);
  


    // const toggledisplayImgComponent =  ()=>{
    //     setstartTime(new Date().getSeconds())                 
    // }

    // console.log(endTime, 'endtime')

    // const toggle = () => {
    //     setTimeout(() => {
    //         console.log('cancel')
    //         setisSwimmerDisplayCom(false)  
    //     }, 600);  
    // }

    //  const togglediplayComponent =  ()=>{
    //     clearInterval(updateEndtime)
    //     // setstartTime(new Date().getSeconds())
    //     // setendTime(new Date().getSeconds())

    //             // clearTimeout(toggledisplayImgComponent)
    //             setTimeout(() => {
    //                 setisSwimmerDisplayCom(true)  
    //             }, 600);     
    //             }

       

    React.useEffect( () => {
        const getJewelPictures =  async () =>  {
           
              try{
                  const res = await axios.get(`http://localhost:5000/api/products/62d16e6d565d331764aaed46`)
                    // console.log(res.data)
                    setswimmerJewelData(res.data)
                    //   setuserFavourite(res.data[0].products)
                  }catch(error){
                      console.log(error)
                  }  

                  try{
                    const res = await axios.get(`http://localhost:5000/api/products/62d16b99565d331764aaed3c`)
                    //   console.log(res.data)
                      setvoyagerJewelData(res.data)
                      //   setuserFavourite(res.data[0].products)
                    }catch(error){
                        console.log(error)
                    }  
          }
  
          getJewelPictures()
          
      }, []);

    const getimageWidth = () => {
    
        if(windowWidth <= 400 ){
          return 300
        }if(windowWidth > 500 && windowWidth <= 900){
          return 500
        }
         if(windowWidth > 900 )
         return 400
      }
    

      const toggleDisplayComponent = () => {
        setisSwimmerDisplayCom(false)
      }
    
    //   const getcontainerWidth = () => {
    
    //     if(windowWidth <= 400 ){
    //       return 300
    //     }if(windowWidth > 500 && windowWidth <= 900){
    //       return 500
    //     }
    //      if(windowWidth > 900 )
    //      return 400
    //   }
    
      window.addEventListener('resize',
      ()=> setwindowWidth(window.innerWidth)
      )
      // console.log(windowWidth)
     
     
    
      React.useEffect(() => {
        setwindowWidth(window.innerWidth)
        setimageWidth(getimageWidth())
        setimageHeight(getimageWidth())
      }, [windowWidth]);


    return (
        <div className="w-full " >
            <div className="lg:w-10/12 md:w-8/12 w-11/12 mx-auto px-6  items-center " >
            
            <div className="font-headers text-3xl uppercase font-bold" >Previous Collections</div>

        <div style={{height:500}} className="mt-16 flex justify-between opacity-100 self-center " >
         

                    <div className="lg:w-1/6 z-10 w-2/6 font-headers2 font-extralight uppercase text-xs lg:text-black text-white relative py-4" >
                        <div className="" >
                            <div className="font-gothic" >Boyish!</div>
                            <div className="flex items-center" >
                            

                                <div className="font-headers" >
                                    Swimmer
                                </div>

                                <div>
                                    <svg className="fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM7.197 14.682l-2.175 2.174a8.549 8.549 0 0 0 1.818 1.899l.305.223 2.173-2.175a5.527 5.527 0 0 1-1.98-1.883l-.14-.238zm9.606 0a5.527 5.527 0 0 1-1.883 1.98l-.238.14 2.174 2.176a8.549 8.549 0 0 0 1.899-1.818l.223-.304-2.175-2.174zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM7.145 5.022a8.549 8.549 0 0 0-1.9 1.818l-.223.305 2.175 2.173a5.527 5.527 0 0 1 1.883-1.98l.238-.14-2.173-2.176zm9.71 0l-2.173 2.175a5.527 5.527 0 0 1 1.98 1.883l.14.238 2.176-2.173a8.549 8.549 0 0 0-1.818-1.9l-.304-.223z"/></svg>
                                </div>
                            </div>
                            <div className="font-headers2 font-bold lg:font-extralight" >Boyish! Season/22/A</div>
                            

                            <div className="font-headers2 font-extralight text-sm" >
                                Designer: Yves Briton
                            </div>

                            <div className="mt-2 font-headers2 font-headers2 font-bold lg:font-extralight text-xs"  >
                                colaborators:
                                <div>Jean Peux</div>
                                <div>Anton Wixss</div>
                            </div>
                        </div>
                       
                        <div className=" bottom-0 absolute font-headers2 text-xs py-4" >
                            <div>
                                Created in glaskwoy, at
                                <div>
                                    Manufactured and grown by new Age Labs
                                </div>
                            </div>
                            All rights presents jewels
                        </div>

                        {/* <div className="" >
                            damn baby
                        </div> */}

                    </div>


                        <div  className="self-center mx-auto lg:mx-none lg:relative absolute left-1/2 -translate-x-1/2  lg:left-0 lg:-translate-x-0  md:w-4/6 w-full  lg:w-4/6 " >
                        <div onMouseEnter={
                       ()=>setisSwimmerDisplayCom(false)
                        } 
                     onMouseLeave={()=>{
                        setTimeout(() => {
                            setisSwimmerDisplayCom(true)  
                        }, 2000);
                        
                        }} className=" absolute z-20 left-1/2 top-1/2  w-16 h-16 -translate-x-14  -translate-y-2 text-transparent cursor-none" >
                            x
                        </div>

                         {swimmerDisplayComponent}
                         {swimmerJewel}
                            
                        </div>


                        <div className="lg:w-1/6 w-2/6 font-headers2 
                        font-bold lg:font-extralight uppercase text-xs lg:text-black text-white relative text-right" >
                            <div className="hidden lg:block" >
                                <div>
                                Description
                                </div>
                                
                                <div className="" >
                                Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. At room temperature and pressure.
                                </div>
                            </div>

                            <div className="mt-10" >
                                <div>
                                    Piece on display
                                </div>
                                <div className={`${isSwimmerDisplayCom?'':'font-bold text-lg'}`} >
                                    Clarity,
                                    Swimmer Collection
                                </div>
                                <div className="text-start hover:scale-105 hover:bg-black hover:text-white transition-all font-headers" >
                                        Discover the collection
                                </div>
                            </div>
                          
                          <div className="mt-auto absolute bottom-0" >
                                All rights reserved fall diamonds
                          </div>
                        
                        </div>

                
            </div>


            {/* second file */}

            <div style={{height:500}} className="flex mt-20 justify-between opacity-100 self-center mt-20" >
         

         <div className="lg:w-1/6 z-10 w-2/6 font-headers2 font-extralight uppercase text-xs lg:text-black text-white relative py-4" >
             <div className="" >
                 <div className="font-gothic" >Boyish!</div>
                 <div className="flex items-center" >
                 

                     <div className="font-headers" >
                         Voyager
                     </div>

                     <div>
                     <svg className="fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.5-12.5L14 14l-6.5 2.5L10 10l6.5-2.5zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                     </div>
                 </div>
                 <div className="font-headers2" >Boyish! Season/22/A</div>
                 

                 <div className="font-headers2 font-extralight text-sm" >
                     Designer: Saint pierre
                 </div>

                 <div className="mt-2 font-headers2 font-headers2 font-extralight text-xs"  >
                     colaborators:
                     <div>Jean Peux</div>
                     <div>Anton Wixss</div>
                 </div>
             </div>
            
             <div className=" bottom-0 py-4 absolute font-headers2 text-xs" >
                 <div>
                     Created in glaskwoy, at
                     <div>
                         Manufactured and grown by new Age Labs
                     </div>
                 </div>
                 All rights presents jewels
             </div>

             {/* <div className="" >
                 damn baby
             </div> */}

         </div>


             <div  className="self-center mx-auto lg:mx-none lg:relative absolute left-1/2 -translate-x-1/2  lg:left-0 lg:-translate-x-0  md:w-4/6 w-full  lg:w-4/6" >
             <div onMouseLeave={()=>{
                setTimeout(() => {
                    setisVoyagerDisplayCom(true) 
                }, 2000);
              
                }} onMouseEnter={()=>setisVoyagerDisplayCom(false)} className=" absolute z-20 left-1/2 top-1/2  w-16 h-16 -translate-x-14  translate-y-6 text-transparent cursor-none" >
                 x
             </div>

              {voyagerDisplayComponent}
              {voyagerJewel}
                 
             </div>


             <div className="lg:w-1/6 w-2/6 font-headers2  uppercase text-xs lg:text-black text-white relative text-right font-bold lg:font-extralight" >
                 <div className="hidden lg:block" >
                     <div>
                     Description
                     </div>
                     
                     <div className="" >
                     Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. At room temperature and pressure.
                     </div>
                 </div>

                 <div className="mt-10" >
                     <div className="" >
                         Piece on display
                     </div>
                     <div className={`${isVoyagerDisplayCom?'':'font-bold text-lg'} flex text-right `} >
                         Voyager,
                         Swimmer Collection
                     </div>
                     <div className="text-start hover:scale-105 hover:bg-black hover:text-white transition-all font-headers" >
                             Discover the collection
                     </div>
                 </div>
               
               <div className="mt-auto absolute bottom-0" >
                     All rights reserved fall diamonds
               </div>
             
             </div>

     
        </div>
       
           
       

        </div>
       
        </div>
        
    )
}

export default PreviousCollection