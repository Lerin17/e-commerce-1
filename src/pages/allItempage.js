import React from "react";
import axios from "axios";

import Newarrivaldata from "../image/new arrival/newarrivaldata";
import { Routes, useLocation, useParams } from "react-router";
import { Router, Route } from "react-router";
import { Card, CardMedia, IconButton, Radio, RadioGroup, Skeleton } from "@mui/material";
import { FavoriteBorderOutlined, ReplyTwoTone } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Slider } from "@material-ui/core";
import { UserItemsContext } from "../context/Items";
import { blue, green, pink } from "@material-ui/core/colors";
// Radio

import Skeletoncomponent from "../components/skeleton";


function CurrentCollection(props) {

  const {Allproducts, setFavourite, setCartitems} = React.useContext   (UserItemsContext)

  // console.log(props.selectedValue, 'selected')
  // console.log(props.selectedValue.includes('gold'))

  //filter items based on items in the filter

  const [allProducts, setallProducts] = React.useState([]);

  console.log(allProducts.length)

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
   
  console.log(allProducts)


  // const ItemCard =({item, i})=>{
  //   return (
  //     <div key={i} className="mx-auto md:mx-5  lg:mx-8 my-4  p-1 flex flex-col" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
  //         <Card variant="outlined" className="shadow-2 border" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150, borderRadius: 0}}>
  //         <Link to= {`/products/${item.ProductID}`} >
  //         <CardMedia
  //       sx={{
  //           maxHeight: 300
  //         }}
  //       component="img"
  //       height="80"
  //       image= {`${item.image}`}
  //       alt="green iguana"
  //       />
  //         </Link>
  //     </Card>
  //      <div className="flex justify-between" >
  //       <div className="w-2/3" >
  //         <div className="font-bold uppercase border-b-2 border-black" >
  //             {item.name}
  //           </div>
  //           <div className="border-b-2 border-black" >
  //             {item.price}
  //           </div>
  //       </div>

  //     <div id={item.ProductID} productid = {item.ProductID}     onClick={setFavourite}  className="self-center ">
  //      <IconButton className= {`${item.isFavourite? 'text-red-600':'text-blue-600'}`} >
  //       <FavoriteBorderOutlined/>
  //        </IconButton>
  //    </div>
        
  //      </div>
  //   </div>

  // )
  // }

  //above works as a way to filter

  // console.log(test, 'test')

  console.log(props.selectedPrice)



  


  // console.log(filteredItemsPrice(), 'filtered')




  //new new new new new new new new  after done clear previous build//




  
  const ItemCardComponent =({item, i})=>{
    return (
      <div key={i} className="mx-auto md:mx-5  lg:mx-8 my-4  p-1 flex flex-col" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
          <Card variant="outlined" className="shadow-2 border rounded-lg" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150, borderRadius: 0}}>
          <Link to= {`/products/${item._id}`} >
          <CardMedia
        sx={{
            maxHeight: 300
          }}
        component="img"
        height="80"
        image= {`${item.image}`}
        alt="images images"
        />
          </Link>
      </Card>
       <div className="flex justify-between" >
        <div className="w-2/3" >
          <div className="font-bold uppercase border-b-2 border-black" >
              {item.name}
            </div>
            <div className="border-b-2 border-black" >
              {item.price}
            </div>
        </div>

      <div id={item._id} productid = {item._id}     onClick={setFavourite}  className="self-center ">
       <IconButton className= {`${true? 'text-red-600':'text-blue-600'}`} >
        <FavoriteBorderOutlined/>
         </IconButton>
     </div>
        
       </div>
    </div>

  )
  }

  const productCards = allProducts.length? allProducts.map((item,i) => {
    return <ItemCardComponent
    item = {item}
    i={i}
    />
  }):Array.from(new Array(22)).map((item ,i)=>
  <div  style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}} className="mx-auto md:mx-5 w-full   lg:mx-8 my-4  p-1 "> 
       <Skeleton key={i} className="bg-gray-300 " variant="rectangular" width={200} height={280} />
  </div>
  )

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


  // console.log(filteredItems, 'filtered')


    
    // const productsdatacards =filteredItemsPrice().map((item,i) => {
    //       return (
    //         <ItemCard
    //         item= {item}
    //         i={i}
    //         />
    //       )                     
    //     }    
    //   )

      



    const Finalproductcard  = () => {
      if(allProducts.length == 0){
        return (Array.from(new Array(22)).map((item ,i)=>
        <div  style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}} className="mx-auto md:mx-5 w-full   lg:mx-8 my-4  p-1 "> 
             <Skeleton key={i} className="bg-gray-300 " variant="rectangular" width={200} height={280} />
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
      //   else{
      //     if(allProducts.length > 0){
      //       return productCards
      //     }else{
      //       return (Array.from(new Array(22)).map((item ,i)=>
      //       <div  style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}} className="mx-auto md:mx-5 w-full   lg:mx-8 my-4  p-1 "> 
      //            <Skeleton key={i} className="bg-gray-300 " variant="rectangular" width={200} height={280} />
      //       </div>
      //       ))
      //     }
      // }
    }


    
    return (
        <div  className="flex flex-wrap " > 
         <Finalproductcard/>
        </div>
    )
}


function Allitems(params) {

  const [category, setcategory] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState([]);
  const [selectedPrice, setselectedPrice] = React.useState([0, 5000]);

  const handleChange = (event) => {
    const parameter = event.target.value
    console.log(selectedValue.includes(parameter))
    if(selectedValue.includes(parameter)){
      setSelectedValue(prev => prev.filter(item => item !== parameter))
      return
    }else{
      setSelectedValue(prev=>[...prev, parameter]);
    }
  
  };


  const handlePriceChange = (event, value) => {
    setselectedPrice(value)
    // console.log(selectedPrice)
  }

  const RadioButton = ({radiovalue}) => {
    return (
      <div className="flex items-center text-xs" >           
      <Radio 
        checked={selectedValue.includes(radiovalue)}
        onClick={handleChange}
        value= {radiovalue}
        name="radio-buttons"
        // inputProps={{ 'aria-label': 'B' }}
        label = {radiovalue}
        size="small"
        sx={{
          color: blue[600],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
            <div className="uppercase" >{radiovalue}</div>
    </div>
    )
  }
    // console.log(<CurrentCollection/>, 'damnx')

   return (
    <div  >
      <Navbar/>
      <div className="mt-12 flex px-4 lg:px-12" >

                {/* sidebar section */}
        <div  style={{
                maxWidth: 200,
                }} className="w-4/12 border-l border-gray-300 px-4   lg:block md:block hidden relative z-10 ">
                <div className=" w-36 fixed  h-screen ">
                    <div className="border-b border-gray-700 py-4" >
                      <div>Price Range</div>
                      <Slider 
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

                    <div className="border-b-2 border-gray-700 py-4 " >
                    <div  >Type</div>

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

                    
                    <div className="border-b-4 border-gray-700 py-4" >
                    <div  >Color</div>
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
                </div>
          </div>

             {/* main section */}

        <div className="w-8/12 flex flex-col items-center mx-auto bg-gray-100" >
            {/* <div className="flex w-full justify-between  " >
                <div className="cursor-pointer" onClick={()=>setcategory('earring')} >Earrings</div>
                <div>Necklace</div>
                <div>Rubies</div>
            </div> */}
            
            <div className="w-full" style={{
              maxWidth: 800
            }}  >
              <div className="mx-auto lg:mx-0 md:mx-0" >
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