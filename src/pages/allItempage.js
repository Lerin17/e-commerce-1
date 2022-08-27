import React from "react";
import axios from "axios";

import Newarrivaldata from "../image/new arrival/newarrivaldata";
import { Routes, useLocation, useParams } from "react-router";
import { Router, Route } from "react-router";
import { Card, CardMedia, IconButton, Radio, RadioGroup, Skeleton, ThemeProvider} from "@mui/material";
import { FavoriteBorderOutlined, ReplyTwoTone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createTheme, Slider } from "@material-ui/core";
import { UserItemsContext } from "../context/Items";
import { blue, green, pink } from "@material-ui/core/colors";
// Radio

import Skeletoncomponent from "../components/skeleton";
import { UserContext } from "../context/user";
import { toast, ToastContainer } from "react-toastify";
import { grey } from "@mui/material/colors";
import { withStyles } from "@mui/styles";
import { MenuContext } from "../context/MenuContext";
import LoginModal from "../components/LoginModal";






function CurrentCollection(props) {

  // const { setFavourite, setCartitems,} = React.useContext   (UserItemsContext)

  const {getUserNameInfo, getUserPasswordInfo, userName, userPassword, Login, userFavourite, updateUserFavourite } = React.useContext(UserContext)

  

  // console.log(props.selectedValue, 'selected')
  // console.log(props.selectedValue.includes('gold'))

  //filter items based on items in the filter

  const [allProducts, setallProducts] = React.useState([]);
  const [favProducts, setfavProducts] = React.useState([]);
  const [favProductslocal, setfavProductslocal] = React.useState([]);
  const [windowWidth, setwindowWidth] = React.useState();
  // windowWidth

  const [imageWidth, setimageWidth] = React.useState(600);

  // const getMidImageWidth = () => {
  //   setimageWidth(300)
  // }



  // console.log(allProducts.length)

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
    console.log('damn')
    setfavProducts(userFavourite)
  }, [userFavourite]);



  const getMidImageWidth = () => {
    
   if(windowWidth > 900){
    return 400
   }else{
    return 600
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
 


 



  


  // console.log(filteredItemsPrice(), 'filtered')




  //new new new new new new new new  after done clear previous build//

const FavouriteBtn = (props) => {

  const favIDs = userFavourite.map(item => item.productID)


  return (
    <IconButton onClick={()=>updateUserFavourite(props.id)} className= {`${favIDs.includes(props.id)? 'text-red-600':'text-white'}`} >
    <FavoriteBorderOutlined/>
     </IconButton>
  )
}

// console.log(favProducts, 'favx')

  
  const ItemCardComponent =({item, i})=>{
    return (
      <div key={i} className={`mx-auto mx-2  my-4 lg:mx-10  p-1 flex flex-col`}style={{maxWidth: imageWidth ,maxHeight: 550}}> 
          <Card variant="outlined" className="shadow-2 border-white" sx={{ maxWidth: imageWidth ,minHeight: 150, borderRadius: 0}}>
          <Link to= {`/products/${item._id}`} >
          <CardMedia
        sx={{
            maxHeight: 500,
            width: imageWidth,
            objectFit: 'fill'
          }}
        component="img"
        height="80"
        image= {`${item.imagearray[1]}`}
        alt="images images"
        />
          </Link>
      </Card>
       <div className="flex justify-between" >
        <div className="w-full border-r-4 border-b-4 lg:border-b-2 lg:border-r-2  border-gray-500" >
          <div className="font-bold uppercase border-4 border-gray-300  font-headers flex pt-1 text-lg bg-blue-600 hover:bg-black transition-all text-white items-center px-2" >
              {item.name}

              <div id={item._id} productid = {item._id}     className="self-center ">
              <FavouriteBtn
              id={item._id}/>
            </div>
            </div>
            <div className="bg-gray-300 border-black text-gray-600 font-headers px-2 " >
              £{item.price}
            </div>
        </div>

     
        
       </div>
    </div>

  )
  }

  // const productCards = allProducts.length? allProducts.map((item,i) => {
  //   return <ItemCardComponent
  //   item = {item}
  //   i={i}
  //   />
  // }):Array.from(new Array(22)).map((item ,i)=>
  // <div  style={{maxWidth: imageWidth,maxHeight: imageWidth}} className="mx-auto md:mx-5 w-full   lg:mx-4 my-4  p-1 "> 
  //      <Skeleton key={i} className="bg-gray-300 " variant="rectangular" width={imageWidth} height={imageWidth} />
  // </div>
  // )

  const isSelectedvalue = props.selectedValue.length == 0?false:true
  const isSelectedPrice = props.selectedPrice?true:false





    const filteredItemsPrice = () => {
      const priceRangeless = props.selectedPrice[0]
      const priceRangemore = props.selectedPrice[1]
  
      const Filter  = allProducts.length? allProducts.filter((item, i) => {
        if(item.price >= priceRangeless && item.price <= priceRangemore ){
          return (
            item
          )
        }
      }):['error','error']
  
      return Filter
    }

    const filteredItems = isSelectedvalue? filteredItemsPrice().filter((item,i) => {
      if(props.selectedValue.includes(...item.color  )){
        return item
      }else if (props.selectedValue.includes( ...item.type )){
        return item
      }
    }).map((item, i)=>{
      return (
        <ItemCardComponent
        item= {item}
        i={i}
        />
      )
    }): filteredItemsPrice().map((item, i)=>{
      return(
        <ItemCardComponent
        item= {item}
        i={i}
        />
      )
    })




    const Finalproductcard  = () => {
      if(allProducts.length == 0){
        return (Array.from(new Array(22)).map((item ,i)=>
        <div  style={{maxWidth: imageWidth ,maxHeight: imageWidth}} className="mx-auto md:mx-5 w-full border border-gray-400  lg:mx-10 my-4  p-1 "> 
             <Skeleton key={i} className="bg-gray-300 " variant="rectangular" height={imageWidth} />
        </div>
        ))
      }
      else if(isSelectedvalue || isSelectedPrice){
        if(filteredItems.length > 0){
          return filteredItems
        }else{
          return <div className="text-2xl lg:text-4xl md:text-3xl left-1/2 top-1/2 md:ml-10   -translate-x-1/2 -translate-y-1/2 absolute my-3 text-center text-gray-400" >No items match the parameters set</div>
        }
      }
      
    }


    
    return (
        <div  className="flex flex-col w-10/12 mx-auto lg:flex-row lg:flex-wrap lg:justify-center" > 
         <Finalproductcard/>
        </div>
    )
}


function Allitems(params) {
  const {isAllitemMenu} = React.useContext(MenuContext)
  const {getUserNameInfo, getUserPasswordInfo, userName, userPassword, Login, userFavourite, updateUserFavourite, notificationMessage, setnotificationMessage } = React.useContext(UserContext)

  const [category, setcategory] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [selectedPrice, setselectedPrice] = React.useState([0, 5000]);


  const handleChange = (parameter) => {
    // const parameter = event.target.value
    // console.log(selectedValue.includes(parameter))
    if(selectedValue.includes(parameter)){
      setSelectedValue(prev => prev.filter(item => item !== parameter))
      return
    }else{
      setSelectedValue(prev=>[...prev, parameter]);
    }
  
  };

  // const ErrorNotify = () => toast.error(notificationMessage.message, {
  //   position: "top-right",
  //   autoClose: 3000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   closeButton: true
  //  })



  // React.useEffect(() => {
  //   if(notificationMessage){
  //        ErrorNotify()
  //        setnotificationMessage(null)
  //   }
    
    
  // }, [notificationMessage]);

  const CustomSlider = withStyles({
    root: {
        color: "#6f8eff",
        height: 3,
        padding: "13px 0",
    },
    track: {
        height: 2,
        borderRadius: 2,
        color: "gray",
      
    },
    thumb: {
        height: 20,
        width: 20,
        backgroundColor: "#fff",
        border: "1px solid black",
        marginTop: -9,
        marginLeft: -11,
        // boxShadow: "#ebebeb 0 2px 2px",
        // "&:focus, &:hover, &$active": {
        //     boxShadow: "#ccc 0 2px 3px 1px",
        // },
        color: "gray",
    },
})(Slider)




  const handlePriceChange = (event, value) => {
    setselectedPrice(value)
    // console.log(selectedPrice)
  }

  const RadioButton = ({radiovalue}) => {
    return (
      <div className="flex items-center border  border-white text-xs" >           
      <Radio 
        checked={selectedValue.includes(radiovalue)}
        onClick={()=>handleChange(radiovalue)}
        value= {radiovalue}
        name="radio-buttons"
        // inputProps={{ 'aria-label': 'B' }}
        label = {radiovalue}
        size="small"
        sx={{
          color: "gray",
          '&.Mui-checked': {
            color: pink[400],
          },
        }}
      />
            <div onClick={()=>handleChange(radiovalue)} style={{
              webkitTextStroke : '1px dimgray'
            }} className={`${selectedValue.includes(radiovalue)?'text-black':'text-transparent'} capitalize  hover:text-black cursor-pointer transition-all font-bold  font-headers2  text-3xl`} >{radiovalue}</div>
    </div>
    )
  }
    // console.log(<CurrentCollection/>, 'damnx')

   return (
    <div  >
      <Navbar/>
      <LoginModal/>
      <div className="mt-12 flex pr-4 lg:pr-12 " >
          <ToastContainer/>
                {/* sidebar section */}
        <div  style={{
                maxWidth: 300,
                // background: 'linear-gradient(to top, rgb(243, 244, 246), rgb(209, 213, 219))'
                }} className={`w-5/12
                lg:block bg-white md:bg-transparent
                lg:bg-transparent  ${isAllitemMenu?'block animate-fade':'hidden'} relative z-10 `}>
                <div className=" w-36 fixed 
                h-screen ">
                    <div className="bg-white py-4 px-4 " style={{
                      width: 300
                    }}>
                      <div className=" font-headers uppercase font-bold  px-2 text-lg rounded" >Price Range</div>
                      <div className="px-6" >
                      <CustomSlider
                      // defaultValue={50} 
                      value={selectedPrice}
                      aria-label="Default" 
                      valueLabelDisplay="auto"
                      step={500}
                      marks
                      min={1000}
                      max={5000}
                      
                      // value={[10, 80]}
                       onChange={handlePriceChange}
                      />
                      </div>
                   
                    </div>

                    {/* <div className="border-b-4  border-white bg-black pb-1 border-t-4" style={{
                      width: 300
                    }}>

                    </div> */}

                    <div className="  border-gray-700  " >

                    
                    <div className="py-4 px-4 bg-white md:bg-transparent
                lg:bg-transparent" style={{
                      width: 300
                    }}>
                    <div className="font-headers2 bg-gradient-to-l from-white via-gray-400 to-white text-md text-gray-600 flex   rounded px-4 uppercase " >Type</div>
                    
                      <RadioButton
                        radiovalue={'gold'}
                        />

                       <RadioButton
                        radiovalue={'opaz'}
                        />

                        <RadioButton
                        radiovalue={'platnium'}
                        />
                   
                       <RadioButton
                        radiovalue={'emerald'}
                        />
                    
                    </div>
                    </div>

                    {/* <div className="border-b-4 pb-1 border-white bg-black pb-1 border-t-4" style={{
                      width: 300
                    }}>

                    </div> */}

                    <div className="bg-white md:bg-transparent
                lg:bg-transparent  px-4 py-4 pb-32" style={{
                      width: 300
                    }} >
                    <div className="font-headers2 bg-gradient-to-l from-white via-gray-400 to-white text-md text-gray-600 flex   rounded px-4 uppercase " >Color</div>
                    <RadioButton
                        radiovalue={'blue'}
                        />

                       <RadioButton
                        radiovalue={'green'}
                        />

                        <RadioButton
                        radiovalue={'chrome gold'}
                        />
                   
                       <RadioButton
                        radiovalue={'red'}
                        />

                        
                       <RadioButton
                        radiovalue={'black'}
                        />

                        
                       <RadioButton
                        radiovalue={'indigo'}
                        />
                    </div>

                    {/* <div style={{
                      width: 300
                    }} className="border-y-4  bg-red-400 border-white pb-1" >

                    </div> */}
                </div>

            
          </div>

{/*           
          <div style={{
                  height: 600,
                  width: 300
                }} className="fixed bg-blue-400 lg:hidden block" >
                  yam
            </div> */}

             {/* main section */}

        <div className="w-10/12 flex flex-col items-center mx-auto bg-white" >
         
             
            
            <div className="w-full "  >
              <div className=" lg:mx-0 md:mx-0 " >
               
                <CurrentCollection
                  category = {category}
                  selectedValue = {selectedValue}
                  selectedPrice = {selectedPrice}
                  />
              </div>
           
            </div>
        </div>   
     </div>
    </div>
   ) 
}

export default Allitems