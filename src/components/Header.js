import { Button, IconButton, InputBase } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"

import {makeStyles} from "@mui/styles";


import {SearchRounded, HorizontalSplitIcon} from "@material-ui/icons"
import { useRef } from "react";


import testimage from '../image/testecom.png'


function Header(params) {
    

    const styling = (prop) => {
        return (
            {
               input: !prop.isSearchbar? 'hidden bg-green-200 border border-b border-white': ' border-4 border border-white text-black bg-white' ,
               cancel: prop.isSearchbar? 'hover:bg-opacity-25 p-0 rounded-full': 'hidden hover:bg-opacity-25 p-0 rounded-full',
               menu: prop.isSearchbar? 'hidden': 'block text-blue-600',
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
     <div className="bg-black text-white  fixed top-0  w-full z-20">
        <div className="flex justify-around mx-3 items-center" >   
        <div className= {`${classes.menu}`} >MENU</div>
        <div className={`text-4xl font-gothic my-2 `} >{Name}©</div>

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

        <div className=" mx-16 " >
            <div>
            <img className="w-full" src={testimage} alt="" /> 
            </div>
            
            <div className=" text-black bg-blue-400" ><p className="" >enter new collection</p></div> 
        </div>
    </div>

{/* new screen width and height settings responsive*/}

    <div style={{
        // backgroundImage: `url(${testimage})`
    }} className="hidden lg:block md:block flex flex-col items-center h-screen md:h-1/2 relative md:mb-60 lg:mb-28" >
     <div className={`flex static justify-around items-center z-20 hover:bg-black hover:text-white fixed top-0  w-full ${classes.navbar}`} >   
            <div className= {`${classes.menu}`} ><Button className="text-blue-600" >MENU</Button> </div>
            <div className="text-4xl  font-gothic my-2 "  >{Name}©</div>

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

        <div>
            <div style={{
                // transform: "translate(-50%, -50%)",
                position: 'relative',
                zIndex: '-1'
            }} className="w-2/5 mx-auto  -mt-16" >
                <img src={testimage} alt="" />   
            </div>

               <div className="absolute ml-32 lg:top-60 lg:ml-60 lg:mt-16 z-10 text-2xl">
                <p>New collection</p>
                <p>a new collecting by boyish</p>
               <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="text-blue-600" variant="text"  >Enter the collection</Button>
                </div> 
         
        </div>    
    </div>
</div>
    )
}

export default Header