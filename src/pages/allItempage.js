import React from "react";
import Newarrivaldata from "../image/new arrival/newarrivaldata";
import { Routes, useParams } from "react-router";
import { Router, Route } from "react-router";
import { Card, CardMedia, IconButton, Radio, RadioGroup } from "@mui/material";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Slider } from "@material-ui/core";


// Radio



function CurrentCollection(props) {


    const productsdatacards = Newarrivaldata().map(item => {

        if(props.category == item.type || !props.category){

            return (
                <div className="mx-5  p-1 flex flex-col" style={{maxWidth: 200, minWidth: 200 ,minHeight: 150}}> 
                    <Card variant="outlined" className="shadow-2 border-black border-2" sx={{ maxWidth: 200, minWidth: 200 ,minHeight: 150, borderRadius: 0}}>
                    <Link to= {`/products/${item.ProductID}`} >
                    <CardMedia
                  sx={{
                      maxHeight: 250
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
          
                  <div className="self-center ">
                    <IconButton className="text-blue-600" >
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
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
    console.log(category)

   return (
    <div  >
      <Navbar/>
      <div className="mt-12 flex px-4 lg:px-12" >

                {/* sidebar section */}
        <div  style={{
                maxWidth: 200
                }} className="w-4/12 border-l border-gray-300 px-4   lg:block md:block hidden relative z-10">
                <div className=" w-36 fixed   ">
                    <div className="border-b border-gray-400 py-4" >
                      <div>Price Range</div>
                      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </div>

                    <div className="border-b border-gray-400 py-4 " >
                    <div  >Type</div>
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
                              <div className="uppercase" >Blue</div>
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
                        <div className="uppercase" >Opaz</div>
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
                         <div className="uppercase" >Red</div>
                      </div>
                    
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

        <div className="w-8/12 flex flex-col items-center mx-auto  " >
            <div className="flex w-full justify-between  " >
                <div className="cursor-pointer" onClick={()=>setcategory('earring')} >Earrings</div>
                <div>Necklace</div>
                <div>Rubies</div>
            </div>
            
            <div className="w-full" style={{
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