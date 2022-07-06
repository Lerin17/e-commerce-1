import React from "react";
import Newarrivaldata from "../image/new arrival/newarrivaldata";
import { Routes, useLocation, useParams } from "react-router";
import { Router, Route } from "react-router";
import { Card, CardMedia, IconButton, Radio, RadioGroup } from "@mui/material";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Slider } from "@material-ui/core";
import { UserItemsContext } from "../context/Items";
import { blue, green, pink } from "@material-ui/core/colors";

// Radio



function CurrentCollection(props) {

  const {Allproducts, setFavourite, setCartitems} = React.useContext   (UserItemsContext)

  // const {Allproducts, setFavourite} = React.useContext(UserItemsContext)

  // console.log(useLocation(), 'location')

    const productsdatacards = Allproducts.map((item,i) => {

        if(props.category == item.type || !props.category){

            return (
                <div key={i} className="mx-5 lg:mx-8 my-4  p-1 flex flex-col" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
                    <Card variant="outlined" className="shadow-2 border" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150, borderRadius: 0}}>
                    <Link to= {`/products/${item.ProductID}`} >
                    <CardMedia
                  sx={{
                      maxHeight: 300
                    }}
                  component="img"
                  height="80"
                  image= {`${item.image}`}
                  alt="green iguana"
                  />
                    </Link>
                </Card>
                 <div className="flex justify-between" >
                  <div className="" >
                    <div className="font-bold uppercase border-b-2 border-black" >
                        {item.name}
                      </div>
                      <div className="border-b-2 border-black" >
                        {item.price}
                      </div>
                  </div>
          
                <div id={item.ProductID} productid = {item.ProductID}     onClick={setFavourite}  className="self-center ">
                 <IconButton className= {`${item.isFavourite? 'text-red-600':'text-blue-600'}`} >
                  <FavoriteBorderOutlined/>
                   </IconButton>
               </div>
                  
                 </div>
              </div>
       
            )
        }
       
      })
    
    return (
        <div className="flex flex-wrap " >
         {productsdatacards}
        </div>
    )
}

function Allitems(params) {

  const [category, setcategory] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState([]);

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
    console.log(selectedValue)

   return (
    <div  >
      <Navbar/>
      <div className="mt-12 flex px-4 lg:px-12" >

                {/* sidebar section */}
        <div  style={{
                maxWidth: 200,
                }} className="w-4/12 border-l border-gray-300 px-4   lg:block md:block hidden relative z-10 ">
                <div className=" w-36 fixed  h-screen ">
                    <div className="border-b border-gray-400 py-4" >
                      <div>Price Range</div>
                      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </div>

                    <div className="border-b border-gray-400 py-4 " >
                    <div  >Type</div>

                      <RadioButton
                        radiovalue={'gold'}
                        />

                       <RadioButton
                        radiovalue={'opaz'}
                        />

                        <RadioButton
                        radiovalue={'silver'}
                        />
                   
                       <RadioButton
                        radiovalue={'emrald'}
                        />
                    
                    
                    </div>

                    
                    <div className="border-b border-gray-400 py-4" >
                    <div  >Color</div>
                      <div className="flex items-center  text-xs" >           
                        <Radio
                          checked={selectedValue === 'b'}
                          onChange={handleChange}
                          value="b"
                          name="radio-buttons"
                          // inputProps={{ 'aria-label': 'B' }}
                          label = 'Blue'
                          size="small"
                        />
                              <div className="uppercase" >Blue</div>
                      </div>

                      <div className="flex items-center  text-xs" >
                        
                        <Radio
                          checked={selectedValue === 'b'}
                          onChange={handleChange}
                          value="b"
                          name="radio-buttons"
                          // inputProps={{ 'aria-label': 'B' }}
                          label = 'Blue'
                          size="small"
                        />
                        <div className="uppercase" >Green</div>
                      </div>

                      <div className="flex items-center text-xs" >
                        <Radio
                          checked={selectedValue === 'b'}
                          onChange={handleChange}
                          value="b"
                          name="radio-buttons"
                          // inputProps={{ 'aria-label': 'B' }}
                          label = 'Blue'
                          size="small"
                        />
                          <div className="uppercase" >Gold</div>
                      </div>

                      <div className="flex items-center  text-xs" >
                        <Radio
                          checked={selectedValue === 'b'}
                          onChange={handleChange}
                          value="b"
                          name="radio-buttons"
                          // inputProps={{ 'aria-label': 'B' }}
                          label = 'Blue'
                          size="small"
                        />
                         <div className="uppercase" >Red</div>
                      </div>
                    
                    </div>
                </div>
          </div>

             {/* main section */}

        <div className="w-8/12 flex flex-col items-center mx-auto " >
            {/* <div className="flex w-full justify-between  " >
                <div className="cursor-pointer" onClick={()=>setcategory('earring')} >Earrings</div>
                <div>Necklace</div>
                <div>Rubies</div>
            </div> */}
            
            <div className="w-full  " style={{
              maxWidth: 800
            }}  >
                <CurrentCollection
                category = {category}
                />
            </div>
        </div>   
     </div>
    </div>
   ) 
}

export default Allitems