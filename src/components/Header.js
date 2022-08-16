import { Box, Button, IconButton, InputBase, Menu, MenuItem, Modal, Typography } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"

import {makeStyles, propsToClassKey} from "@mui/styles";
import { toast, ToastContainer } from "react-toastify";

import {SearchRounded, HorizontalSplitIcon, ShoppingBasketRounded, ShoppingCartRounded} from "@material-ui/icons"
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";



import testimage from '../image/testecom.png'
import { UserContext } from "../context/user";
import HeaderMenu from "./HeaderMenu";



function Header(params) {

    const {getUserNameInfo, getUserPasswordInfo, userName, userPassword, Login, notificationMessage, setnotificationMessage} = React.useContext(UserContext)

    const [hiddenStyle, sethiddenStyle] = React.useState("");
    
//    const gethidden=() => (
//     'hidden'
//    )

    const styling = (prop) => {
        return (
            {
               input: !prop.isSearchbar? 'hidden bg-green-200 border border-b border-white': ' border-4 border border-white text-black bg-white' ,
               cancel: prop.isSearchbar? 'hover:bg-opacity-25 p-0 rounded-full': 'hidden hover:bg-opacity-25 p-0 rounded-full',
               menu: prop.isSearchbar? 'hidden': ' text-blue-600 self-center ',
               navbar: `${prop.Navbardark? 'bg-black text-white ':''} ${prop.isSearchbar? 'bg-black text-white':''} ${prop.isDropMenu?'bg-blue-900 text-white':''}`,
            //    navbarText: prop.Navbardark? 'text-white': 'text-white',
               dropmenu: prop.isDropMenu? ' animate-slideDown':`hidden animate-slideUp `,
               userIcon: prop.isSearchbar?'hidden':''
            }
        )
        }


        //menu components
  


        const style = {
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
          };



    const [isSearchbar, setisSearchbar] = React.useState(false);
    const [searchinput, setsearchinput] = React.useState('');

    //navbardark is setoff when scrolling occurs
    const [Navbardark, setNavbardark] = React.useState();
      //navbardark is setoff when scrolling occurs
    const [isDropMenu, setisDropMenu] = React.useState(false);
    const [isLoginModal, setisLoginModal] = React.useState(false);
    const [prevscrollheight, setprevscrollheight] = React.useState();


    React.useEffect(() => {
        if(!isDropMenu){
            setTimeout(() => {
                sethiddenStyle('hidden')
               }, 200)
        }
       
    }, [isDropMenu]);


    const states = {
        isSearchbar,
        Navbardark,
        isDropMenu
       }


    //    console.log(styling(states).dropmenu)

    const classes = styling(states)
    
    const textBoxRef = useRef(null)
    
    //handle ui changes for navbar
   
   function toggleIsSearchBar() {
    setisSearchbar(prev => !prev)
   }

   function toggleIsLoginModal(params) {
    setisLoginModal(prev => !prev)
   }

   function handleCloseDropMenu(params) {
    setisDropMenu(false) 
   }

   function toggleDropMenu(event) {
    console.log(event)  
    setisDropMenu(prev => !prev) 
    // console.log(textBoxRef.current)
   }

   function handleinput(event) {
    setsearchinput(event.target.value)
   }

   const ErrorNotify = () => toast.error(notificationMessage.message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: true
   })

   const SuccessNotify = () => toast.success(notificationMessage.message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: true
   })
    

   const changeBackground = () => {

    if (window.scrollY >= 66) {
      setNavbardark(true)
    } else {
      setNavbardark(false)
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

   React.useEffect(() => {
    if(notificationMessage){
        if(notificationMessage.messageType == 'error'){
            ErrorNotify()
            
        }else if(notificationMessage.messageType == 'success'){
            SuccessNotify()
        }
        setnotificationMessage()
    }
    
   }, [notificationMessage]);

//    React.useEffect(() => {
//     document.body.style.overflow = "hidden";
//   }, []);
    //handle ui changes for navbar

   const Name = 'BOYISH!'

    return (
<div>
    {/* {notification} */}
    <ToastContainer/>
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
                    <span>
                         MENU
                    </span>
                    
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

{/* start of new screen width and height settings responsive based for large and medium screen sizes*/}

    <div className="hidden lg:block md:block flex flex-col items-center h-screen md:h-1/2 relative md:mb-60 lg:mb-28" >
{/* START OF NAVBAR */}
        <div className={`flex flex-col z-20 fixed top-0  w-full ${classes.navbar}`} >    
           <div className={`flex  justify-around items-center  w-full `} >
                <div className= {`${classes.menu}`} >
                   
                   <Link to={'/checkout'} >
                   <IconButton className="text-blue-600" >
                    <ShoppingCartRounded/>
                    </IconButton>
                   </Link>
                   
                    
                    <Button onClick={toggleDropMenu}  className="text-blue-600 font-headers" >
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

                    <div>
                        <IconButton className={`${classes.userIcon}`} onClick={toggleIsLoginModal} >
                        <i className="ri-user-5-line text-blue-600"></i>
                        </IconButton>
                    
                    </div>
                </div>

            </div>

            {/* drop menu for menu */}

            {/* <Menu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                // anchorEl={anchorEl}
                open={isDropMenu}
                onClose={handleCloseDropMenu}
            >
                    <MenuItem disableRipple>
                    Edit
                    </MenuItem>
                    <MenuItem disableRipple>
                    Duplicate
                    </MenuItem>
                    <MenuItem disableRipple>
                    Archive
                    </MenuItem>
                    <MenuItem disableRipple>
                    More
                    </MenuItem>
      </Menu> */}
            <HeaderMenu
            open={classes.dropmenu}
            />



            
        </div>
{/* END OF NAVBAR */}
       
{/* START OF IMAGE */}
        <div>
            <div style={{
                // transform: "translate(-50%, -50%)",
                position: 'relative',
                zIndex: '-1'
            }} className="w-2/5 lg:w-6/12 mx-auto  -mt-16 lg:flex" >

               <div>
               <img src={testimage} alt="" /> 
                </div>  
                 
                <div className="text-lg pt-32 hidden font-headers2 font-extralight  lg:block w-3/5" >
                    <div className="flex justify-between py-4  border-b border-gray-400 border-dotted" >
                        <div>Name</div>
                        <div>SUN SEEKER</div>
                    </div>

                    <div className="flex justify-between py-4 border-b border-gray-400 border-dotted" >
                        <div>Designer</div>
                        <div>PI'ERRE</div>
                    </div>

                    <div className="flex justify-between  py-4 " >
                        <div>Description</div>
                        <div className="ml-8 text-end text-sm uppercase text-right" > excellent platnium  and heritage diamonds, holographic rim diamonds and silver bracelet</div>
                    </div>           
                </div>   
            </div>

           
            <div className="hidden lg:block right-1/4 absolute text-3xl" ><Button variant="text" className="text-black text-2xl font-bold font-headers" >Enter the collection</Button></div>
            {/* hide the enter the collection below on lg size */}

            <div className="absolute ml-32 lg:hidden lg:top-60 lg:ml-60 lg:mt-16 z-10 text-2xl font-bold uppercase font-headers">
            <p>Sun Seeker</p>
            <p>a new collecting by boyish</p>
            <Button sx={{ minHeight: 0, minWidth: 0, padding: 0 }} className="text-blue-600 font-headers"  variant="text"  >Enter the collection</Button>
            </div> 
            
             {/* hide the enter the collection above on lg size */}

            <Modal
    open={isLoginModal}
    onClose={toggleIsLoginModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
  <Box sx={style}>

  

    <div className="flex" >
        <div style={{
           background:'linear-gradient(61deg, rgba(238,174,202,1) 0%, rgba(162,200,203,1) 37%, rgba(170,184,226,1) 75%, rgba(148,187,233,1) 100%)'
        }} className="text-white text-8xl p-2 font-gothic flex items-center w-6/12 flex-col" >
            <div>
                B
            </div>
            <div>
                !
            </div>

            <Button className="capitalize cursor-pointer rounded-none bg-transparent text-black font-bold hover:text-white  rounded" >
            sign up
            </Button>

            {/* <div   className="capitalize cursor-pointer rounded-none bg-transparent text-black font-bold hover:text-white  rounded" >
                    sign up
            </div> */}
         
        </div>
        <div className="p-4 flex flex-col w-full" >
            <div className="text-4xl font-bold" >Login</div>
            <div className="m-2 flex flex-col" >
                {/* {notification} */}
            <div className="text-red-500 font-bold" >error message</div>
            <label className="font-bold capitalize" >name</label>
            <input onChange={(event)=>getUserNameInfo(event)}  value={userName} className="border-2 border-black" type="text" />
            <div className="text-red-500 font-bold" >error message</div>
            <label className="font-bold capitalize" >password</label>
            <input onChange={(event)=>getUserPasswordInfo(event)} value={userPassword} className="border-2 border-black" type="text" />
            </div>

            <div className="self-end" >
                <Button onClick={Login} className="capitalize rounded-none bg-black text-white font-bold hover:text-black hover:bg-white" >
                    sign in
                </Button>
            </div>
        </div>
    </div>
    



  </Box>
        </Modal>
         
        </div>    
 {/* END OF IMAGE */}       
    </div>
    {/* end of new screen width and height settings responsive based for large and medium screen sizes*/}
</div>
    )
}

export default Header