import { propsToClassKey } from "@mui/styles";
import axios from "axios";
import React, { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";


const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [userName, setuserName] = React.useState('');
    const [userPassword, setuserPassword] = React.useState('');
    

    const [userData, setuserData] = React.useState();
    const [userFavourite, setuserFavourite] = React.useState([]);

    const [notificationMessage, setnotificationMessage] = React.useState('');
    



    React.useEffect( () => {
      const getUserFavourites =  async () =>  {
          if(userData){
            try{
                const res = await axios.get(`http://localhost:5000/api/usersfavourite/${userData._id}`)

                    setuserFavourite(res.data[0].products)
                }catch(error){
                    console.log(error)
                }
            
          }
              
        }

        getUserFavourites()
        
    }, [userData]);

    console.log(userFavourite)
    console.log(userData)

    // const ErrorNotify = () => toast.error("This didn't work.")
//    const notification = <ToastContainer
//    position="top-right"/>

    const getUserNameInfo = (event) => {
        setuserName(event.target.value)
    }

    const getUserPasswordInfo = (event) => {
        setuserPassword(event.target.value)  
    }

   
    console.log(userFavourite)
    // console.log(favIDs)


    console.log(userName)
const updateUserFavourite = async (productID) => {
    const favIDs = userFavourite.map(item => item.productID)
    
    const isItempresent = favIDs.some(item => item == productID)
    if(isItempresent){
        try {
            const res = await axios.delete(`http://localhost:5000/api/usersfavourite/${userData._id}/${productID}`)

            console.log(res)
            setuserFavourite(res.data.products)
            setnotificationMessage('this item has removed from your wishlist')
        } catch (error) {
            console.log(error)
            setnotificationMessage('faluire operation has failed')
        }
    }else{
        try {
            const res = await axios.post(`http://localhost:5000/api/usersfavourite/${userData._id}/${productID}`)
      
            console.log(res)
            setuserFavourite(res.data.products)
            setnotificationMessage('this item has been add to your wishlist')
          } catch (error) {
              console.log(error)
              setnotificationMessage('faluire operation has failed')
          }
    }
}

const Login =  () => {
        
axios.post('http://localhost:5000/api/auth/login', {
    username: userName,
    password: userPassword
  })
  .then(function (response) {
    console.log(response);
    if(response){
        setuserData(response.data)
        setnotificationMessage({message:'logged in', messageType: 'success'})
    }
  }).catch(error => {
    console.log(error.response.data.message)
    setnotificationMessage({message:error.response.data.message, messageType: 'error'})
  })       
}


    return (
        <UserContext.Provider value={{getUserNameInfo, getUserPasswordInfo, userName, userPassword, Login, userData, userFavourite, updateUserFavourite, notificationMessage, setnotificationMessage}} >
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}