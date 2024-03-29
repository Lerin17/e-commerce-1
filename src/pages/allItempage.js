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
  const [allProductsColorArray, setallProductsColorArray] = React.useState();
  // windowWidth

  const [imageWidth, setimageWidth] = React.useState(600);

  // const getMidImageWidth = () => {
  //   setimageWidth(300)
  // }

  const colorOptionsStyles = [
    'green_linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%)' ,
    'blue_linear-gradient(-45deg, #6db3f2 0%, #54a3ee 50%, #3690f0 51%, #1e69de 100%)',
    'red_linear-gradient(-45deg, #f85032 0%, #f16f5c 50%, #f6290c 51%, #f02f17 71%, #e73827 100%)',
    'purple_linear-gradient(-45deg, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%)',
    'platnium_linear-gradient(-45deg, #ffffff 0%, #f1f1f1 50%, #e1e1e1 51%, #f6f6f6 100%)',
    'emerald_linear-gradient(-45deg, #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%)',
    'cyan_linear-gradient(-45deg, #20d4e8 0%, #bfe8f9 50%, #9fd8ef 51%, #2cdff7 100%)',
    'teal_linear-gradient(-45deg, #3fe2bc 0%, #a1d54f 50%, #80c217 51%, #0eefa0 100%)',
    'pink_linear-gradient(-45deg, #fcecfc 0%, #fba6e1 50%, #fd89d7 51%, #ff7cd8 100%)',
   'yellow_linear-gradient(-45deg, #fceabb 0%, #fccd4d 50%, #f8b500 51%, #fbdf93 100%)',
   'silver_linear-gradient(-45deg, #ffffff 0%, #f1f1f1 50%, #e1e1e1 51%, #848484 100%)',
  'black_linear-gradient(-45deg, #aebcbf 0%, #6e7774 50%, #0a0e0a 51%, #0a0809 100%)',
  'indigo_linear-gradient(-45deg, #cb60b3 0%, #ad1283 50%, #dd92c4 100%)'
  ]

  const getallColors = (data) => {
    return (data.map(item => ({
      color:item.color[0],
    id:item._id})))
  }

  // console.log(allProducts.length)

  React.useEffect(() => {
     const getProducts = async () => {
        try {
        const res = await axios.get('http://localhost:5000/api/products')
        console.log(res)
        setallProducts(res.data)
        setallProductsColorArray(getallColors(res.data))   
        } catch (error) {
          console.log(error) 
        }
     } 

     
    console.log('repeat')

     getProducts()
  }, [favProductslocal]);

  console.log(allProductsColorArray, 'colors4Real')

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
 






  //new new new new new new new new  after done clear previous build//

const FavouriteBtn = (props) => {

  const favIDs = userFavourite.map(item => item.productID)


  return (
    <div className="pl-2 mb-1 cursor-pointer" onClick={()=>updateUserFavourite(props.id)}>
        {favIDs.includes(props.id)?
        <svg className= {`${favIDs.includes(props.id)? 'text-red-600 fill-current':''}`}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>
        :<svg className="text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/></svg>}
          
    </div>
  
    // <IconButton onClick={()=>updateUserFavourite(props.id)} className= {`${favIDs.includes(props.id)? 'text-red-600 bg-red-600':'text-white'}`} >
    // <FavoriteBorderOutlined
    // className="fill-current"
    // />
    //  </IconButton>
  )
}

// console.log(favProducts, 'favx')
let ja = ''

const changeItemcolor = (id, color, colorArray) => {

  const getNewColor = () => {
   console.log(colorArray)
   console.log(color)
  // const item = allProducts.find(item => (item._id == id))


    const colorArrayx = colorArray.find(item => (item.name == color?item:''))

    console.log(colorArrayx)
    
    return colorArrayx.images[1]

    
  }

  // console.log(id)

  console.log(getNewColor())

  const colorx =getNewColor()

  // setallProducts(prev =>  {
  //   return   prev.map(item => (item._id == id?{image:colorx, ...item}:item))
  // })

  const rax = allProducts.map(item => item._id == id?{ image:colorx,
    ...item}:item)

    // console.log(ra)

  setallProducts(prev => prev.map(item => item._id == id?{
    ...item,image:colorx
}:item))

    console.log('eexx')
}

console.log(allProducts)

  
  const ItemCardComponent =({item, i})=>{
    // console.log(item)

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

  // const colorArray =  [...item.alt, ...item.color]

  const getcolorArray =  () => {

    const getaltColors = item.alt.map(item => (
      {
        name:item.altName,
        images:item.altImages
      }
    ))

    const organizedColors = [

      {
      name:item.color[0],
      images:item.imagearray
    },
    ...getaltColors]

    return (
      organizedColors
    )
  }

  const colorArray = getcolorArray()
// console.log(colorArray)
  // const cosmo = col

  // const getColorStyles = rgbacolors.filter(item => {
  //   if(colorArray().includes(item.name)){
  //     return item
  //   }
  // })


  const getImage = (color,item,colorArray) => {

    const ye = colorArray.find(item => (item.name == color))

    return ye.images

    }




    let x =0


      const ColorOptions = (props)=> {
     return   colorArray.map(color => {
          const name  = color.altName
          
            x++
        const handleClick =(colorName, allProducts) => {
          setallProductsColorArray(prev  => prev.map(item => item.id == props.id?{...item, color:colorArray[x-1].name}:item))
        }

        const singlecolor = colorArray[x-1].name

        console.log(singlecolor, 'singlecolor')

        const getColorStylesBtn = colorOptionsStyles.find(item => {
          if(  item.split('_')[0] === singlecolor){
            return item
          }
        })

        const backgroundStyle = getColorStylesBtn? getColorStylesBtn.split('_')[1]:''

        console.log(getColorStylesBtn, 'getColorStyles')
  
          return (
            <div 
            onClick={()=>{changeItemcolor(item._id, singlecolor, colorArray)}}
            style={{
              width:24,
              height:24,
              background: backgroundStyle
            }}
            className={`color ${colorArray[x-1].name}  border-l border-b border-stone-300  cursor-pointer hover:scale-125 transition-all   mr-1 mb-1`}
            >
            
          </div>
          )
        
          })
      } 


     


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
        image= {`${item.image}`}
        alt="images images"
        />
          </Link>
      </Card>

      <div className="flex" >
        <ColorOptions
        id={item._id}
        />
     

      </div>
       <div className="flex justify-between" >
        <div className="w-full border-r-4 border-b-4 lg:border-b-2 lg:border-r-2  border-gray-500" >
          <div className="font-bold uppercase border-4 border-gray-300  font-headers flex pt-1 text-lg bg-blue-600 hover:bg-black transition-all text-white items-center px-2" >

            <div>
            {item.name}
            </div>
            

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