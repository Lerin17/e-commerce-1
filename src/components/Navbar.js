import { CancelRounded, SearchRounded } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { LocationutilityContext } from "../context/Location";
import { MenuContext } from "../context/MenuContext";



function Navbar(params) {


    const styling = (prop) => {
        return (
            {
               input: !prop.isSearchbar? 'hidden bg-green-200 border border-b border-white': ' border-4 border border-white text-black bg-white' ,
               cancel: prop.isSearchbar? 'hover:bg-transparent rounded-full': 'hidden ',
               menu: prop.isSearchbar? 'hidden ': 'block font-headers text-gray-500 cursor-pointer',
               navbar: prop.Navbar? 'bg-black text-white':'',
               navbarText: prop.Navbar? 'text-white': 'text-white',
               userLogin: prop.isSearchbar?'hidden':'block'
            }
        )
        }

        const {isAllitemMenu, toggleisAllitemMenu, isLoginModal, toggleisLoginModal} = React.useContext(MenuContext)

    const [isSearchbar, setisSearchbar] = React.useState(false);
    const [searchinput, setsearchinput] = React.useState('');
    const [Navbar, setNavbar] = React.useState();
    const [prevscrollheight, setprevscrollheight] = React.useState();

    const {currentLocation} = React.useContext(LocationutilityContext)
    const [MenuContent, setMenuContent] = React.useState();
        

    const states = {
        isSearchbar,
        Navbar,
        isLoginModal
       }

      console.log(isSearchbar, 'search')

       //handle the left channel of the navbar
      //  const leftSection = () => {
      //   return (

      //   )
      //  }

   

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
          <div className=" text-black bg-white border-b fixed top-0  w-full z-20">
          <div className="flex justify-around mx-3 items-center" >   
          <div onClick={toggleisAllitemMenu} className= {`${classes.menu}`} >MENU</div>
          <div style={{
            WebkitTextStroke : '1px gray'
          }} className={`text-2xl font-gothic my-2 text-white `} >{Name}©</div>

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

            
                <IconButton onClick={toggleIsSearchBar} className= {`${classes.cancel} hover:bg-transparent`} ><CancelRounded
                className= {`${classes.cancel} hover:bg-transparent`}
                /> </IconButton> 

                <IconButton onClick={toggleisLoginModal} className={`${classes.userLogin} hover:bg-transparent p-0`} >
                <i className="ri-user-5-line text-blue-600 "></i>
                </IconButton>
             
            </div>    
            </div>
        </div>
      </div>
    )
 
}

export default Navbar