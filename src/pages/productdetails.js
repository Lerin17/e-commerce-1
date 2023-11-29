import React from "react";
import { useParams } from "react-router";
import { UserItemsContext } from "../context/Items";
import { toast, ToastContainer } from "react-toastify";
// import Newarrivaldata from "../image/new arrival/newarrivaldata";
// import Newarrivaldata from "../image/new arrival/newarrivaldata";
// import Navbar from "../components/Navbar";
import Navbar from "../components/Navbar";
import { Button, Card, CardMedia } from "@mui/material";
import axios from 'axios'
import Skeletoncomponent from "../components/skeleton";
import Imagezoom from "../components/zoom";



import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";
import { IconButton } from "@material-ui/core";
import { ContactPhoneSharp } from "@material-ui/icons";
import { UserContext } from "../context/user";





function Productdetailspage(params) {
// const {Allproducts, setFavourite, setCartitems} = React.useContext(UserItemsContext)

const {updateUserCart,removeUserCartItem, userCart,notificationMessage, setnotificationMessage } = React.useContext(UserContext)
const userCartIDs = userCart.map(item => item.productID)

const Titleref = React.useRef(null)

const [TitleWidth, setTitleWidth] = React.useState();

const getTitleMargin = () => {
    if(TitleWidth){
        console.log(Titleref.current.offsetWidth, 'titlerefoffest')
        let TitleMargin = 283-(TitleWidth * 0.79)
        TitleMargin = (TitleMargin/2) + 130
        return TitleMargin
    }else {
        return 114
    }
}


const style = () => (
    {
        image: {
            maxWidth: 220
            // width: 300,
        }
    }
)

    // console.log(useParams())
   const {productID} = useParams()
//    const productData =  Newarrivaldata()

//    console.log(productID)

const [currentProduct, setcurrentProduct] = React.useState();


const [allProducts, setallProducts] = React.useState([]);
const [cartQuantityIncrement, setcartQuantityIncrement] = React.useState(1);

const [zoomimage, setzoomimage] = React.useState('');
const [altcolor, setaltcolor] = React.useState([]);
const [currentcolor, setcurrentcolor] = React.useState();
const [startingColor, setstartingColor] = React.useState();
const [currentColorArray, setcurrentColorArray] = React.useState([]);
const [currentHDColorArray, setcurrentHDColorArray] = React.useState([]);
// const [allColorsArray, setallColorsArray] = React.useState();

const [windowWidth, setwindowWidth] = React.useState();
const [windowScrollHeight, setwindowScrollHeight] = React.useState();
const [windowScrollHeightLG, setwindowScrollHeightLG] = React.useState();
// windowWidth

const [imageWidth, setimageWidth] = React.useState(600);
const [titleMargin, settitleMargin] = React.useState(getTitleMargin());



const [zoomScaleValue, setzoomScaleValue] = React.useState(1);

const updateZoomScaleValue = (number) => {
    setzoomScaleValue(number)
}




//boolean deciding when product details should animate into block
const [isProductInformation, setisProductInformation] = React.useState(false);
//boolean deciding when product details should animate into block END


const getZoomImage = (imagesrc) => {
    setzoomimage(imagesrc)
}

const ErrorNotify = () => toast.error(notificationMessage.message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: true
   })

   

React.useEffect(() => {
    if(notificationMessage){
         ErrorNotify()
         setnotificationMessage(null)
    }
    
    
  }, [notificationMessage]);


//handle animation on scroll START
// setInterval(() => {
//     console.log(window.pageYOffset)
// }, 1000);

window.addEventListener('scroll', ()=>{
    setwindowScrollHeight(window.pageYOffset)

    if(!zoomimage){
    // console.log('nasa')
    setwindowScrollHeightLG(windowScrollHeight)
    }
    
})

console.log(windowScrollHeightLG, 'windowscroll height')


React.useEffect(() => {
    console.log(Titleref.current)
    setTimeout(() => {
        if(Titleref.current){
        
            setTitleWidth(Titleref.current.offsetWidth)
            // console.log("width", Titleref.current.offsetWidth);
        }
    }, 50);
   
   
  }, [windowWidth, allProducts]);


React.useEffect(() => {
    if(TitleWidth){
        // console.log(Titleref.current.offsetWidth)
        settitleMargin(getTitleMargin())
    }
   
    // console.log(getTitleMargin())
}, [windowWidth, TitleWidth]);

//preseve previous scroll height
React.useEffect(() => {
    if(!zoomimage){
        window.scrollTo(0, windowScrollHeightLG);
    }
   
}, [zoomimage]);


console.log(titleMargin, 'titlemargin')

React.useEffect(() => {
    if(windowScrollHeight > 150){
        setisProductInformation(true)
    }else{
        setisProductInformation(false)
    }
}, [windowScrollHeight]);


//handle animation on scroll END

// const clearZoomimage  = () =>{
//     setzoomimage('')
// }

React.useEffect(() => {
   const getProducts = async () => {
      try {
      const res = await axios.get('http://localhost:5000/api/products')
      console.log(res)
      setallProducts(res.data)   
      } catch (error) {
        console.log(error) 
      }
   } 

   getProducts()
}, []);

React.useEffect(() => {
    const getcurrentProduct = allProducts.find(item => item._id == productID)
    setcurrentProduct(getcurrentProduct)
    if(getcurrentProduct){
        setaltcolor(getcurrentProduct.alt)
        setcurrentcolor(...getcurrentProduct.color)
        setstartingColor(...getcurrentProduct.color)
        setcurrentHDColorArray(
            getcurrentProduct.imagearrayHF
         )
        // setstartingColor()
    }
    
}, [allProducts]);

React.useEffect(() => {
    //should use callback to avoid calling everytime
    if(currentcolor){
        const altColorobjs = currentProduct.alt.map(item => ({
            name: item.altName,
            imagearray: [...item.altImages]
        }))

        const altColorobjsHD = currentProduct.alt.map(item => ({
            name: item.altName,
            imagearray: [...item.altImagesHF]
        }))

        //contains the alt colors and starting color as obj in an array

       const allColorsArrayHD = [
            {name: startingColor,
            imagearray: [...currentProduct.imagearrayHF]},
            ...altColorobjsHD
        ]

        console.log(
            allColorsArrayHD, 'wait'
        )

        const allColorsArray = [
            {name: startingColor,
            imagearray: [...currentProduct.imagearray]},
            ...altColorobjs
        ]

        const getcurrentColorobj = allColorsArray.find(item => item.name == currentcolor)

        const getcurrentColorobjHD = allColorsArrayHD.find(item => item.name == currentcolor)

        console.log(getcurrentColorobj, 'image')
        console.log(allColorsArray, 'image')

      
            setcurrentColorArray(
                getcurrentColorobj.imagearray
             )

             setcurrentHDColorArray(
                getcurrentColorobjHD.imagearray
                )  
    }
     //should use callback to avoid calling everytime

    //  const getcurrentColorArray = 

    //  setcurrentColorArray(
        
    //  )
    
}, [currentcolor]);

// console.log(
//     currentHDColorArray, 'damn'
// )

const getMidImageWidth = () => {
    
    if(windowWidth > 640){
     return 600
    }else{
     return 300
    }
   }
 
 
   window.addEventListener('resize',
   ()=> setwindowWidth(window.innerWidth)
   )
   // console.log(windowWidth)
  
  
 
   React.useEffect(() => {
     setwindowWidth(window.innerWidth)
     setimageWidth(getMidImageWidth())
   }, [windowWidth]);
// console.log(currentHDColorArray)

// console.log(currentColorArray, 'currentarray')

//    const currentProduct = Allproducts.find(item => item.ProductID == productID)

   //new new
//    console.log(currentcolor, 'color')
// console.log(currentColorArray, 'color')
// console.log(currentHDColorArray)

 const  changecolor = (color) => {
    setcurrentcolor(color)
 }
   
//  console.log(currentProduct)
//  console.log(altcolor)
// console.log(currentProduct.isCartItem)
const ColorBtnComponent = () => {
    if(altcolor.length == 0){
        return(
        <div 
        style={{
            // WebkitTextStroke : '1px black',
            backdropFilter: 'blur(1px)'
          }}
        className="border rounded-full py-4" >
            <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-full text-black font-headers2 font-bolder" >
                {currentProduct.color}
            </Button>
        </div>
        )
    }else{
        let colors = altcolor.map(item => item.altName)
        colors = [...currentProduct.color, ...colors]

        console.log(colors)

        // console.log(colors, 'colors')
        const rgbacolors = [
            
            {value :'rgba(4, 120, 87, 1)',
            name: 'green'},
            {value: 'rgba(96, 165, 250, 1)',
            name: 'blue'  },
            {value: 'rgba(239, 68, 68, 1)',
            name: 'red'},
            {value: 'rgba(139, 92, 246, 1)',
            name: 'purple'},
            {value: 'rgba(148, 163, 184, 1)',
            name: 'platnium'},
            {value: 'rgba(252, 211, 77, 1)',
            name: 'emerald'},
            {value: 'rgba(20, 184, 166, 1)',
            name: 'cyan'},
            {value: 'rgba(20, 184, 166, 1)',
            name: 'teal'},
            {value: 'rgba(236, 72, 153, 1)',
            name: 'pink'},
            {value: 'rgba(250, 204, 21, 1)',
            name: 'yellow'}
        ]

        const filteredcolors = rgbacolors.filter(item => colors.includes(item.name))

        // console.log(currentColorArray)
        // console.log(currentcolor, 'currentcoloe')
          
           
    
    
       let gradientpercentage = colors.length == 2? colors.map((item, i) => {
            const divider = i + 1
            const percentageof = 100

            return percentageof/divider - 20
        }):colors.map((item, i) => {
            const divider = i + 1
            const percentageof = 100

            return percentageof/divider - 15
        })



    //arrange in ascending order
    gradientpercentage = [...gradientpercentage].sort((a, b) => a - b)

    // console.log(gradientpercentage)
    // console.log(filteredcolors)

    // console.log(gradientpercentage)

    let gradientColorsStyle = []

    //this code causing errors with graident buttons
    for (let n = 0; n < colors.length; n++) {
        gradientColorsStyle.push(`${filteredcolors[n].value} ${gradientpercentage[n]}%  ` )
     }

    //  console.log(filteredcolors)

        
        // // console.log(gradientpercentage)
        // const gradientcolors =  'jam'

     const colorBtn = filteredcolors.map(item => (
        <Button 
        style={{
            boxShadow: `10px 10px 20px 0px rgba(0,0,0,0.57) ${item.name == currentcolor?'':'inset'}`,
        }}
        variant="outlined" onClick={()=>changecolor(item.name)} sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className={`w-1/${filteredcolors.length} text-white  ${item.name == currentcolor?'opacity-100':'opacity-25'} rounded-full mx-2 font-bold py-4 font-headers2`} >{item.name}</Button>
     ))

        const lingradient = `linear-gradient(90deg, ${gradientColorsStyle}`
        // console.log(lingradient)

        return (
        <div className="  py-2 flex items-center " style={{
            
            background: lingradient}}  >
             {colorBtn}
            {/* <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>
            <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button> */}
        </div>
        )
    }

}
 
const DisplayImageComponent = (props) => {
    return (
        <div className="mx-auto" onClick ={()=>getZoomImage(props.imgsrc)} style={{width: 600}} >
        <img src={props.imgsrc}
         alt = 'JEWELRY IMG'/>
    </div>
    )
   
}

const MiniDisplayImageComponent = (props) => (
    <div style={{width: 150}} >
        <img src={props.imgsrc}
         alt = 'JEWELRY IMG'/>
    </div>
)


const ImgComponent = (props) => (
    <div style={classesx.image} >
    <img src={props.imgsrc}
     alt = 'JEWELRY IMG'/>
</div>
)

    
  let index = 0
//   const imagesarray = [1,2,3,4]

const productdetailsimg = currentProduct? currentColorArray.map((item, i) => {
  return (
    <Slide key={i} className="" index={index++}>
      <div className="mx-auto p-1" style={{maxWidth: imageWidth ,maxHeight: imageWidth}}> 
          <Card variant="outlined" className="border-none" sx={{ maxWidth: imageWidth ,maxHeight: imageWidth}}>
            <CardMedia
            sx={{
                maxHeight: imageWidth,
                maxWidth: imageWidth,
                // backgroundColor: 'red'
            }}
            component="img"
            height="300"
            image= {item}
            alt="green iguana"
            />     
         </Card> 
         </div>
    </Slide>
  )
}): 'current product unavailable'

   const classesx = style()

//    console.log(productdetailsimg, 'details')
console.log(<Navbar/>)
 
    return currentProduct? (
        <div className="h-screen" >
        {
            !zoomimage &&
            <Navbar/>
        }
        <ToastContainer/>
         
            <div>
            
             
            {/* <Navbar/> */}
            <div style={{
                height: zoomimage? 700 :900 
            }} className={`lg:flex-row   flex flex-col`} >
              
                <div className= {`lg:block  lg:my-10 ${zoomimage?' my-0':''}  flex flex-col lg:w-7/12  md:w-8/12`}>

                    <div className= {`${zoomimage?'block':'hidden'}`} >
                        <div style={{
                            height:640
                        }} className="relative ml-20 my-4 border-2 border-t-black border-gray-300   animate-slideDownSlow bg-transparent" >
                             <div className="flex justify-end bg-black z-20 relative" >
                                <div onClick={()=>
                                    setzoomimage(null)
                                } className="m-2 cursor-pointer  rounded-full bg-red-600 p-2 w-8 h-8" >
                                    
                                </div>

                                <div onClick={() => {
                                    if(zoomScaleValue === 2){
                                        setzoomScaleValue(1.5)}
                                        else if(zoomScaleValue === 1.5){
                                            setzoomScaleValue(1.75)
                                        }else if(zoomScaleValue === 1.75){
                                            setzoomScaleValue(2)
                                        }
                                }} className="m-2 rounded-full bg-white text-xs w-8 h-8 justify-center cursor-pointer flex p-2" >
                                    {zoomScaleValue}
                                </div>
                             </div>
                        </div>
                        <div className="absolute top-28 left-56" >
                                        <div>
                                        <Imagezoom
                                        imgsrc = {zoomimage}
                                        zoomScaleValue = {zoomScaleValue}
                                        updateZoomScaleValue = {updateZoomScaleValue}
                                        />
                                        </div> 
                        </div>
                        
                    </div>

                    <div className={`${zoomimage?'hidden':'lg:block hidden'} lg:p-10  mx-auto  lg:w-8/12 `}>
                    <div style={{
                        marginLeft: titleMargin
                    }} ref={Titleref} className="text-6xl font-headers uppercase font-bold text-gray-300 text-center  px-0 fixed " >
                        
                        {currentProduct.name}!
                                      
                     </div>

                            <div className=" py-10" >

                                    <div className="mx-auto py-4" >
                                        <DisplayImageComponent
                                        imgsrc = {currentHDColorArray[0]}
                                        />
                                    </div>

                                    <div className="mx-auto py-4" >
                                        <DisplayImageComponent
                                        imgsrc = {currentHDColorArray[1]}
                                        />
                                    </div>

                                    <div className="mx-auto py-4" >
                                        <DisplayImageComponent
                                        imgsrc = {currentHDColorArray[2]}
                                        />
                                    </div>

                                 </div>


                        {/* <div className="mx-auto" >
                            <DisplayImageComponent
                            imgsrc = {currentHDColorArray[0]}
                            />
                        </div> */}

                        {/* <div className=" h-32 flex justify-between" >
                            <MiniDisplayImageComponent
                            imgsrc = {currentColorArray[0]}
                            />

                            <MiniDisplayImageComponent
                            imgsrc = {currentColorArray[1]}
                            />

                            <MiniDisplayImageComponent
                            imgsrc = {currentColorArray[2]}
                            />
                        </div> */}
                        {/* <div className="flex" >
                            <ImgComponent
                            imgsrc = {currentColorArray[0]}
                            />

                            <ImgComponent
                            imgsrc = {currentColorArray[1]}
                            />
                        </div>

                        <div className="flex" >
                            <ImgComponent
                            imgsrc = {currentColorArray[2]}
                            />

                            <ImgComponent
                            imgsrc = {currentColorArray[1]}
                            />
                        </div> */}
                    </div>
                </div>

     {/* small size below */}
                <div className=" lg:hidden  mt-10 " >
                    <div className="mx-auto  ">
                    <CarouselProvider
                    naturalSlideWidth={300}
                    naturalSlideHeight={325}
                    totalSlides={3}
                    visibleSlides={1}
                    infinite={true}
                    currentSlide={1}
                    >

                    <div className="mx-auto ">
                        <div className="flex justify-between" >
                        <ButtonBack className="px-2">
                            {/* <IconButton className="hover:bg-transparent"> */}
                            <i className={`ri-arrow-left-circle-fill lg:text-black ${isProductInformation?'text-white':'text-black'}`}></i>
                            {/* </IconButton>     */}
                        </ButtonBack>  
                        <Slider style={{
                            height: imageWidth
                        }} className=" mx-auto w-full ">    
                            {productdetailsimg}      
                        </Slider>
                        
                        <ButtonNext className="px-2" >
                            {/* <IconButton className="hover:bg-transparent"> */}
                            <i className={`ri-arrow-right-circle-fill lg:text-black ${isProductInformation?'text-white':'text-black'}`}></i>
                            {/* </IconButton> */}
                        </ButtonNext>
                        </div>   
                        
                        {/* <div className=" flex justify-between absolute w-full top-1/2">
                       
                        
                        </div> */}
                    </div>     
                    </CarouselProvider>
                     </div>       
                </div>

 {/* product details in sidebar */}
                <div style={{
                    height:400
                }} className={`lg:w-4/12  lg:right-0  md:fixed lg:mx-10 md:px-5 lg:px-0 md:px-0 flex flex-col font-headers2 ${isProductInformation?'md:animate-slideDown md:block lg:animate-none':'md:hidden block lg:block'}`}>
                <div className="" >
                <div className="">
                    <div>
                        <div 
                        style={{
                            backdropFilter: 'blur(1px)'
                        }}
                        className="flex lg:px-0 md:px-0 px-3 justify-between" >

                            <div className="text-2xl lg:mt-16 md:mt-16
                             uppercase font-headers font-bold" >
                                £{currentProduct.price}
                            </div>  

                          

                            <div  className="md:text-6xl text-xl font-headers uppercase font-bold lg:text-3xl text-black text-center mt-16" >
                                    {currentProduct.name}!
                                </div>
                        </div>
                  

                    {/* <div className="w-screen lg:w-full md:w-full bg-blue-600" >
                        BOYISH BOYISH BOYISH
                    </div> */}
                    <div style={{
                            backdropFilter: 'blur(1px)'
                        }} className="px-4 lg:px-0 md:px-0"  >
                        {/* <div className="text-2xl uppercase font-bold border-black" >
                            {currentProduct.name}
                        </div> */}

                        <div className=" border-t border-black" >
                            COLOUR
                            <ColorBtnComponent/>
                            {/* <div className="bg-gradient-to-r from-green-400 to-blue-300" >
                                <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>
                                <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>

                            </div> */}
                        </div>

                        <div 
                            style={{
                                // WebkitTextStroke : '1px black',
                                backdropFilter: 'blur(1px)'
                              }}
                       className=" border-b border-black text-xl text-black font-bold lg:font-normal" >
                        <div className="flex justify-between "  >DESCRIPTION <div>E</div></div> 
                          
                            <div 
                            style={{
                                //   WebkitTextStroke : '1px orange',
                            }} 
                            className="md:text-xl text-normal lg:bg-white
                            lg:text-md  text-black opacity-50
                            bg-gradient-to-r from-white lg:via-white via-gray-300 to-white 
                            " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto ex mollitia inventore suscipit, in similique molestiae
                            {currentProduct.description}
                             </div>
                        </div>

                        <div className="lg:py-6 py-4 flex " >
                            

                            <div>
                                <Button onClick={()=>{
                                    setcartQuantityIncrement(prev => prev+ 1)
                                }} className="py-5 text-gray-600 bg-gray-300 rounded-full mx-4" >
                                    +
                                </Button>
                                <div className="py-4 mx-4  text-center font-headers text-3xl text-gray-500" >
                                {cartQuantityIncrement}
                                </div>
                                <Button 
                                onClick={()=>{
                                    if(cartQuantityIncrement > 1){
                                        setcartQuantityIncrement(prev => prev - 1)
                                    }
                                    
                                }}
                                className="py-5 text-gray-600 bg-gray-300 rounded-full mx-4">
                                    -
                            </Button>
                            </div>
                            
                            {userCartIDs.includes(currentProduct._id)?
                                 <Button onClick={()=>removeUserCartItem(currentProduct._id)} className="font-headers text-red-300 bg-red-500 lg:py-6  lg:my-4 my-6  sm:w-full md:w-full" >
                                 REMOVE FROM CART
                             </Button>:
                              <Button onClick={()=>updateUserCart(currentProduct._id, cartQuantityIncrement)} className="font-headers bg-blue-600 lg:py-6  lg:my-4 my-6 rounded-full sm:w-full md:w-full" >
                              ADD TO CART
                          </Button>
                            }
                            {/* <Button onClick={()=>updateUserCart(currentProduct._id, cartQuantityIncrement)} className="font-headers bg-blue-600 lg:py-6  lg:my-4 my-6 rounded-full sm:w-full md:w-full" >
                                ADD TO CART
                            </Button> */}
                          
                            <div className=" ml-10 lg:block  self-center" >
                            <svg className="lg:w-20 w-16 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/></svg>
                       
                    </div>
                            {/* <Button onClick={(event)=>setCartitems(event)} className={currentProduct.isCartItem?'text-red-600':'text-blue-600'} >
                                {currentProduct.isCartItem? 'REMOVE FROM CART': 'ADD TO CART'}
                            </Button> */}
                        </div>
                    </div>
                    </div>
                    
                </div>

               
                </div>
 

                </div>
               
            </div> 
            </div>
        </div>
    ): <div className="animate-pulse" >
        <Skeletoncomponent/>
    </div> 
}

export default Productdetailspage