import { Button, IconButton, InputBase } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"

import {makeStyles} from "@mui/styles";


import {SearchRounded, HorizontalSplitIcon, ShoppingBasketRounded, ShoppingCartRounded} from "@material-ui/icons"
import { useRef } from "react";



import testimage from '../image/testecom.png'



function Header(params) {
    

    const styling = (prop) => {
        return (
            {
               input: !prop.isSearchbar? 'hidden bg-green-200 border border-b border-white': ' border-4 border border-white text-black bg-white' ,
               cancel: prop.isSearchbar? 'hover:bg-opacity-25 p-0 rounded-full': 'hidden hover:bg-opacity-25 p-0 rounded-full',
               menu: prop.isSearchbar? 'hidden': ' text-blue-600 self-center ',
               navbar: prop.Navbar? 'bg-black text-white':'',
               navbarText: prop.Navbar? 'text-white': 'text-white',
            }
        )
        }



    const [isSearchbar, setisSearchbar] = React.useState(false);
    const [searchinput, setsearchinput] = React.useState('');
    const [Navbar, setNavbar] = React.useState();
    const [prevscrollheight, setprevscrollheight] = React.useState();


    const states = {
        isSearchbar,
        Navbar
       }


   

    const classes = styling(states)
    
    const textBoxRef = useRef(null)
    
   
   function toggleIsSearchBar() {

    setisSearchbar(prev => !prev)
    console.log(textBoxRef.current)
   }

   function handleinput(event) {
    setsearchinput(event.target.value)
   }

   const changeBackground = () => {

    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  React.useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  })

   React.useEffect(() => {
    if(isSearchbar){
        textBoxRef.current.focus()
    }
   }, [isSearchbar]);

   const Name = 'BOYISH!'

    return (
<div>
    <div className="lg:hidden md:hidden mb-20">
        {/* START OF NAVBAR */}
        <div className="bg-black text-white  fixed top-0  w-full z-20">
            <div className="flex justify-around mx-3 items-center" >   
                <div className= {`${classes.menu}`} >
                    <Link to = {'/checkout'} >
                        <IconButton className="text-gray-400" >
                        <ShoppingCartRounded/>
                        </IconButton>
                    </Link>
                    MENU
                </div>

                <div className={`text-4xl font-gothic my-2 `} >{Name}©
                </div>

                <div className= {`${classes.input}`}>
                <input
                style={{
                    outline: 'none',
                }}
                value={searchinput}
                onChange = {handleinput}
                ref ={textBoxRef}
                autoFocus
                />
                </div>
         
                <div className="flex " >
                    <IconButton onClick={toggleIsSearchBar} className="hover:bg-opacity-25 text-blue-500" ><SearchRounded/></IconButton> 

                    <div>
                    <IconButton onClick={toggleIsSearchBar} className= {`${classes.cancel}`} > <p className="text-white">X</p> </IconButton> 
                    </div>
                </div>    
            </div>
        </div>
        {/* END OF NAVBAR */}

        {/* NEW COLLECTION IMAGE*/}

        <div className=" mx-16 " >
            <div>
            <img className="w-full" src={testimage} alt="" /> 
            </div>
            
            <div className=" text-black bg-blue-400" ><p className="" >enter new collection</p></div> 
        </div>

        {/* NEW COLLECTION IMAGE*/}
    </div>

{/* new screen width and height settings responsive based for large and medium screen sizes*/}

    <div className="hidden lg:block md:block flex flex-col items-center h-screen md:h-1/2 relative md:mb-60 lg:mb-28" >
        <div className={`flex flex-col z-20 hover:bg-black hover:text-white fixed top-0  w-full ${classes.navbar}`} >    
           <div className={`flex  justify-around items-center  w-full `} >
                <div className= {`${classes.menu}`} >
                   
                   <Link to={'/checkout'} >
                   <IconButton className="text-blue-600" >
                    <ShoppingCartRounded/>
                    </IconButton>
                   </Link>
                   
                    
                    <Button className="text-blue-600" >
                    MENU</Button> 
                </div>

                <div className="text-4xl md:-ml-8 lg:-ml-10  font-gothic my-2 "  >{Name}©</div>

                <div className= {`${classes.input}`}>
                    <input
                    style={{
                        outline: 'none',
                    }}
                    value={searchinput}
                    onChange = {handleinput}
                    ref ={textBoxRef}
                    autoFocus
                    />
                </div>
                
                <div className="flex " >
                    <IconButton onClick={toggleIsSearchBar} className=" text-blue-500" ><SearchRounded/></IconButton> 

                    <div>
                    <IconButton onClick={toggleIsSearchBar} className= {`${classes.cancel}`} > <p className="text-blue-500">X</p> </IconButton> 
                    </div>
                </div>

            </div>

            {/* drop menu for menu */}
            {/* 
            <div className="flex hidden" >
                <div>Favorite</div>
                <div>NECKLACES</div>
                <div>RINGS</div>
                <div>EARRINGS</div>
            </div> */}
            
        </div>

       

        <div>
            <div style={{
                // transform: "translate(-50%, -50%)",
                position: 'relative',
                zIndex: '-1'
            }} className="w-2/5 lg:w-6/12 mx-auto  -mt-16 lg:flex" >

               <div>
               <img src={testimage} alt="" /> 
                </div>  
                 
                <div className="text-lg pt-32 hidden font-draft  lg:block w-3/5" >
                    <div className="flex justify-between py-4  border-b border-gray-400 border-dotted" >
                        <div>Name</div>
                        <div>SUN SEEKER</div>
                    </div>

                    <div className="flex justify-between py-4 border-b border-gray-400 border-dotted" >
                        <div>Designer</div>
                        <div>PI'ERRE</div>
                    </div>

                    <div className="flex justify-between py-4 " >
                        <div>Description</div>
                        <div className="ml-8 text-end uppercase text-right" > excellent platnium </div>
                    </div>

           
                </div> 
                
               
            </div>

           
            <div className="hidden lg:block right-1/4 absolute text-3xl" ><Button variant="text" className="text-black text-2xl font-bold" >Enter the collection</Button></div>
            {/* hide the enter the collection on lg size */}

               <div className="absolute ml-32 lg:hidden lg:top-60 lg:ml-60 lg:mt-16 z-10 text-2xl">
                <p>Sun Seeker</p>
                <p>a new collecting by boyish</p>
               <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="text-blue-600" variant="text"  >Enter the collection</Button>
                </div> 
         
        </div>    
    </div>
</div>
    )
}

export default Header