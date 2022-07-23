import React from "react";
import { useParams } from "react-router";
import { UserItemsContext } from "../context/Items";
// import Newarrivaldata from "../image/new arrival/newarrivaldata";
// import Newarrivaldata from "../image/new arrival/newarrivaldata";
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
// const [allColorsArray, setallColorsArray] = React.useState();


const getZoomImage = (imagesrc) => {
    setzoomimage(imagesrc)
}

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

// console.log(currentColorArray, 'currentarray')

//    const currentProduct = Allproducts.find(item => item.ProductID == productID)

   //new new
   console.log(currentcolor, 'color')

 const  changecolor = (color) => {
    setcurrentcolor(color)
 }
   
//  console.log(currentProduct)
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
            name: 'pink'}
        ]

        const filteredcolors = rgbacolors.filter(item => colors.includes(item.name))

        console.log(currentColorArray)
        console.log(currentcolor, 'currentcoloe')
          
           
    
    
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

    const gradientcolors =[]

    for (let n = 0; n < colors.length; n++) {
        gradientcolors.push(`${filteredcolors[n].value} ${gradientpercentage[n]}%  ` )
     }

    //  console.log(filteredcolors)

        
        // // console.log(gradientpercentage)
        // const gradientcolors =  'jam'

     const colorBtn = filteredcolors.map(item => (
        <Button  onClick={()=>changecolor(item.name)} sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className={`w-1/${filteredcolors.length} text-white ${item.name == currentcolor?'opacity-100':'opacity-25'} rounded font-bold`} >{item.name}</Button>
     ))

        const lingradient = `linear-gradient(90deg, ${gradientcolors}`
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
 
   


const ImgComponent = (props) => (
    <div style={classesx.image} onClick ={()=>getZoomImage(props.imgsrc)}>
    <img src={props.imgsrc}
     alt = 'JEWELRY IMG'/>
</div>
)

    
  let index = 0
  const imagesarray = [1,2,3,4]

const productdetailsimg = currentProduct? currentColorArray.map((item, i) => {
  return (
    <Slide key={i} className="" index={index++}>
      <div className="mx-auto p-1" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
          <Card variant="outlined" className="border-none" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150}}>
            <CardMedia
            sx={{
                maxHeight: 280,
                maxWidth: 200,
                // backgroundColor: 'red'
            }}
            component="img"
            height="80"
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

 
    return currentProduct? (
        <div>
            <Navbar/>
            <div className="lg:flex-row md:flex-row flex flex-col  md:h-7/12  border-b-2 border-black  mt-16" >
                <div className=" lg:block md:block  hidden flex flex-col lg:w-5/12 md:w-8/12 ">
                    <div className="p-10 mx-auto  lg:w-8/12">
                        <div className="flex" >
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
                        </div>
                    </div>
                </div>

     {/* small size below */}
                <div className=" lg:hidden md:hidden relative" >
                    <div className="mx-auto  ">
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={3}
                    visibleSlides={1}
                    currentSlide={1}
                    >

                    <div className="mx-auto">
                        <div className="flex justify-between" >
                        <ButtonBack className="">
                            <IconButton className="hover:bg-transparent">
                            <i class="ri-arrow-left-circle-fill"></i>
                            </IconButton>    
                        </ButtonBack>  
                        <Slider style={{
                            height: ''
                        }} className="h-72 mx-auto w-full">    
                            {productdetailsimg}      
                        </Slider>
                        
                        <ButtonNext>
                            <IconButton className="hover:bg-transparent">
                            <i class="ri-arrow-right-circle-fill"></i>
                            </IconButton>
                        </ButtonNext>
                        </div>   
                        
                        {/* <div className=" flex justify-between absolute w-full top-1/2">
                       
                        
                        </div> */}
                    </div>     
                    </CarouselProvider>
                     </div>       
                </div>

 {/* product details in sidebar */}
                <div className="lg:w-4/12 md:w-4/12 w-full lg:mx-10 md:mx-10  lg:px-0 md:px-0 flex flex-col">
                <div className="">
                    <div>
                    <div className="w-screen lg:w-full md:w-full bg-blue-600" >
                        BOYISH BOYISH BOYISH
                    </div>
                    <div className="px-4 lg:px-0 md:px-0" id={currentProduct.ProductID} >
                        <div className="text-lg uppercase font-bold border-black" >
                            {currentProduct.name}
                        </div>

                        <div className=" border-t border-black" >
                            COLOUR
                            <ColorBtnComponent/>
                            {/* <div className="bg-gradient-to-r from-green-400 to-blue-300" >
                                <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>
                                <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="w-1/2" >d</Button>

                            </div> */}
                        </div>

                        <div className=" border-b border-black" >
                        <div className="flex justify-between" >DESCRIPTION <div>E</div></div> 
                            <div >Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto ex mollitia inventore suscipit, in similique molestiae </div>
                        </div>

                        <div  >
                            <Button>
                                ADD TO CART
                            </Button>
                            {/* <Button onClick={(event)=>setCartitems(event)} className={currentProduct.isCartItem?'text-red-600':'text-blue-600'} >
                                {currentProduct.isCartItem? 'REMOVE FROM CART': 'ADD TO CART'}
                            </Button> */}
                        </div>
                    </div>
                    </div>
                    
                </div>

                     <div className="hidden lg:block md:block self-center" >
                        {!zoomimage?  <svg className="w-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2h3z"/></svg>: <div>
                        <Imagezoom
                        imgsrc = {zoomimage}
                        />
                        </div> }
                       
                    </div>

                </div>
               
            </div> 
        </div>
    ): <div className="animate-pulse" >
        <Skeletoncomponent/>
    </div> 
}

export default Productdetailspage