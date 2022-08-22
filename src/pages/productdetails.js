import React from "react";
import { useParams } from "react-router";
import { UserItemsContext } from "../context/Items";
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





function Productdetailspage(params) {
const {Allproducts, setFavourite, setCartitems} = React.useContext(UserItemsContext)

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

const [zoomimage, setzoomimage] = React.useState('');
const [altcolor, setaltcolor] = React.useState([]);
const [currentcolor, setcurrentcolor] = React.useState();
const [startingColor, setstartingColor] = React.useState();
const [currentColorArray, setcurrentColorArray] = React.useState([]);
const [currentHDColorArray, setcurrentHDColorArray] = React.useState([]);
// const [allColorsArray, setallColorsArray] = React.useState();

const [windowWidth, setwindowWidth] = React.useState();
const [windowScrollHeight, setwindowScrollHeight] = React.useState();
// windowWidth

const [imageWidth, setimageWidth] = React.useState(600);

//boolean deciding when product details should animate into block
const [isProductInformation, setisProductInformation] = React.useState(false);
//boolean deciding when product details should animate into block END


const getZoomImage = (imagesrc) => {
    setzoomimage(imagesrc)
}


//handle animation on scroll START
// setInterval(() => {
//     console.log(window.pageYOffset)
// }, 1000);

window.addEventListener('scroll', ()=>{
    setwindowScrollHeight(window.pageYOffset)
})

React.useEffect(() => {
    if(windowScrollHeight > 200){
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

       const allColorsArray = [
            {name: startingColor,
            imagearray: [...currentProduct.imagearray]},
            ...altColorobjs
        ]

        const getcurrentColorobj = allColorsArray.find(item => item.name == currentcolor)

        console.log(getcurrentColorobj, 'image')
        console.log(allColorsArray, 'image')

      
            setcurrentColorArray(
                getcurrentColorobj.imagearray
             )

         
    
       

    }
     //should use callback to avoid calling everytime

    //  const getcurrentColorArray = 

    //  setcurrentColorArray(
        
    //  )
    
}, [currentcolor]);


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
   console.log(currentcolor, 'color')

 const  changecolor = (color) => {
    setcurrentcolor(color)
 }
   
 console.log(currentProduct)
 console.log(altcolor)
// console.log(currentProduct.isCartItem)
const ColorBtnComponent = () => {
    if(altcolor.length == 0){
        return(
        <div className="bg-gradient-to-r from-green-400 via-blue-300   to-red-400" >
            <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-full" >d</Button>
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

    console.log(gradientpercentage)
    console.log(filteredcolors)

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
        <Button  onClick={()=>changecolor(item.name)} sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className={`w-1/${filteredcolors.length} text-white ${item.name == currentcolor?'opacity-100':'opacity-25'} rounded font-bold`} >{item.name}</Button>
     ))

        const lingradient = `linear-gradient(90deg, ${gradientColorsStyle}`
        // console.log(lingradient)

        return (
        <div className="  rounded border-y-2  border-black flex items-center" style={{background: lingradient}}  >
             {colorBtn}
            {/* <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>
            <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button> */}
        </div>
        )
    }

}
 
const DisplayImageComponent = (props) => {
    return (
        <div className="mx-auto" style={{width: 350}} >
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
    <div style={classesx.image} onClick ={()=>getZoomImage(props.imgsrc)}>
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
        <div>
          <Navbar/>
            <div>
             
            {/* <Navbar/> */}
            <div style={{
                height:1000
            }} className="lg:flex-row  flex flex-col   border-b-2 border-black " >
              
                <div className=" lg:block  mt-10  hidden flex flex-col lg:w-5/12 md:w-8/12 ">
                    <div className="p-10 mx-auto border lg:w-8/12">
                    <div className="text-6xl font-headers uppercase font-bold text-gray-300 text-center" >
                        {currentProduct.name}!
                  </div>
                        <div className="mx-auto" >
                            <DisplayImageComponent
                            imgsrc = {currentHDColorArray[0]}
                            />
                        </div>

                        <div className=" h-32 flex justify-between" >
                            <MiniDisplayImageComponent
                            imgsrc = {currentColorArray[0]}
                            />

                            <MiniDisplayImageComponent
                            imgsrc = {currentColorArray[1]}
                            />

                            <MiniDisplayImageComponent
                            imgsrc = {currentColorArray[2]}
                            />
                            </div>
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
                }} className={`lg:w-4/12 lg:block lg:relative  fixed lg:mx-10 md:px-5 lg:px-0 md:px-0 flex flex-col font-headers2 ${isProductInformation?'animate-slideDown block':'hidden'}`}>
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

                          

                            <div className="text-4xl font-headers uppercase font-bold text-gray-300 text-center mt-16" >
                                    {currentProduct.name}!
                                </div>
                        </div>
                  

                    <div className="w-screen lg:w-full md:w-full bg-blue-600" >
                        BOYISH BOYISH BOYISH
                    </div>
                    <div style={{
                            backdropFilter: 'blur(1px)'
                        }} className="px-4 lg:px-0 md:px-0" id={currentProduct.ProductID} >
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
                       className=" border-b border-black text-xl text-black font-bold " >
                        <div className="flex justify-between "  >DESCRIPTION <div>E</div></div> 
                          
                            <div 
                            style={{
                                //   WebkitTextStroke : '1px orange',
                            }} 
                            className="text-xl text-black  bg-gradient-to-r from-white via-gray-300 to-white opacity-50" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto ex mollitia inventore suscipit, in similique molestiae
                            {currentProduct.description}
                             </div>
                        </div>

                        <div className="py-6" >
                            <Button className="font-headers" >
                                ADD TO CART
                            </Button>
                            {/* <Button onClick={(event)=>setCartitems(event)} className={currentProduct.isCartItem?'text-red-600':'text-blue-600'} >
                                {currentProduct.isCartItem? 'REMOVE FROM CART': 'ADD TO CART'}
                            </Button> */}
                        </div>
                    </div>
                    </div>
                    
                </div>

                     <div className="hidden lg:block  self-center" >
                        {!zoomimage?  <svg className="w-48 hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z"/></svg>: <div>
                        <Imagezoom
                        imgsrc = {zoomimage}
                        />
                        </div> }
                       
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