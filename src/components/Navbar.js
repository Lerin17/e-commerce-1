import { CancelRounded, SearchRounded } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { LocationutilityContext } from "../context/Location";



function Navbar(params) {

    const styling = (prop) => {
        return (
            {
               input: !prop.isSearchbar? 'hidden bg-green-200 border border-b border-white': ' border-4 border border-white text-black bg-white' ,
               cancel: prop.isSearchbar? 'hover:bg-opacity-25 rounded-full': 'hidden hover:bg-opacity-25 rounded-full',
               menu: prop.isSearchbar? 'hidden': 'block',
               navbar: prop.Navbar? 'bg-black text-white':'',
               navbarText: prop.Navbar? 'text-white': 'text-white',
            }
        )
        }



    const [isSearchbar, setisSearchbar] = React.useState(false);
    const [searchinput, setsearchinput] = React.useState('');
    const [Navbar, setNavbar] = React.useState();
    const [prevscrollheight, setprevscrollheight] = React.useState();

    const {currentLocation} = React.useContext(LocationutilityContext)
   
        

    const states = {
        isSearchbar,
        Navbar
       }


       //handle the left channel of the navbar
       const leftSection = () => {
        return (
          
        )
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
    return(
        <div>
          <div className=" text-black bg-gray-300  fixed top-0  w-full z-20">
          <div className="flex justify-around mx-3 items-center" >   
          <div className= {`${classes.menu}`} >MENU</div>
          <div className={`text-2xl font-gothic my-2 `} >{Name}©</div>

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
         
            <div className="flex  py-0" >
                <IconButton onClick={toggleIsSearchBar} className="hover:bg-opacity-25 text-blue-500 p-0 " ><SearchRounded/></IconButton> 

            
                <IconButton onClick={toggleIsSearchBar} className= {`${classes.cancel}`} ><CancelRounded/> </IconButton> 
             
            </div>    
            </div>
        </div>
      </div>
    )
 
}

export default Navbar