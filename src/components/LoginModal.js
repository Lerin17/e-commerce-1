import { Box, Button, InputBase, Modal } from "@material-ui/core";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { MenuContext } from "../context/MenuContext";
import { UserContext } from "../context/user";



function LoginModal(props) {

    const {getUserNameInfo, getUserPasswordInfo, userName, userPassword, Login, notificationMessage, setnotificationMessage} = React.useContext(UserContext)

    const {isLoginModal, toggleisLoginModal} = React.useContext(MenuContext)

    console.log(isLoginModal, 'loginMOdal')
    
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

    return (
        <Modal
        open={isLoginModal}
        onClose={toggleisLoginModal}
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
    
                <Button  className="capitalize cursor-pointer rounded-none bg-transparent text-black font-bold hover:text-white  rounded" >
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
                {/* <div className="text-red-500 font-bold" >error message</div> */}
                <label className="font-bold capitalize" >name</label>
                <InputBase onChange={(event)=>getUserNameInfo(event)}  value={userName} className="border-2 border-black" type="text" />
                {/* <div className="text-red-500 font-bold" >error message</div> */}
                <label className="font-bold capitalize" >password</label>
                <InputBase onChange={(event)=>getUserPasswordInfo(event)} value={userPassword} className="border-2 p-0 border-black" type="text" />
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
    )
}


export default LoginModal