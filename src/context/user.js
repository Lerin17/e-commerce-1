import { propsToClassKey } from "@mui/styles";
import axios from "axios";
import React, { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";


const UserContext = React.createContext()

const UserContextProvider = (props) => {
    const [userName, setuserName] = React.useState('');
    const [userPassword, setuserPassword] = React.useState('');
    

    const [userData, setuserData] = React.useState(null);
    const [userFavourite, setuserFavourite] = React.useState([]);
    const [userCart, setuserCart] = React.useState([]);

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

    React.useEffect(() => {
        const getUserCart =  async () =>  {
            if(userData){
              try{
                  const res = await axios.get(`http://localhost:5000/api/carts/find/${userData._id}`)
  
                  setuserCart(res.data[0].products)
                  }catch(error){
                      console.log(error)
                  }
              
            }
                
          }


        getUserCart()
        
    }, [userData]);

    console.log(userFavourite)
    console.log(userData)
    console.log(userCart)

    // const ErrorNotify = () => toast.error("This didn't work.")
//    const notification = <ToastContainer
//    position="top-right"/>

    const getUserNameInfo = (event) => {
        setuserName(event.target.value)
    }

    const getUserPasswordInfo = (event) => {
        setuserPassword(event.target.value)  
    }

   
    // console.log(userFavourite)
    // // console.log(favIDs)


    // console.log(userName)
const updateUserFavourite = async (productID) => {
    if(!userData){
        setnotificationMessage({message:'please login or sign up', messageType: 'error'})
        return
    }

    const favIDsArray = userFavourite.map(item => item.productID)
    
    const isItempresent = favIDsArray.some(item => item == productID)
    if(isItempresent){
        try {
            const res = await axios.delete(`http://localhost:5000/api/usersfavourite/${userData._id}/${productID}`)

            console.log(res)
            setuserFavourite(res.data.products)
            setnotificationMessage({message: 'this item has removed from your wishlist', messageType: 'success'})
        } catch (error) {
            console.log(error)
            setnotificationMessage({message:'faluire operation has failed', messageType: 'error'})
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


const removeUserCartItem = async (productID) => {
    if(!userData || !userData._id){
        setnotificationMessage({message: 'please login or sign up',
        messageType: 'error'
    })
        return
       }

    try {
        const res = await axios.delete(`http://localhost:5000/api/carts/${userData._id}/${productID}`)

        console.log(res.data.products)
        setuserCart(res.data.products)
        setnotificationMessage({message:'This item has been removed from your cart',
        messageType: 'success'
    })

    } catch (error) {
        console.log(error)
    }  

}

const updateUserCart = async (productID, increment) => {
//    const res = await axios.post(`http://localhost:5000/api/carts/${userData._id}/${productID}`)

   if( !userData || !userData._id){
    setnotificationMessage({message:'please login or sign up', messageType: 'error'})
    return
   }

   const cartIDsArray = userCart.map(item => item.productID)
    
   const isItempresent = cartIDsArray.some(item => item == productID)

   if(isItempresent){
            axios.put(`http://localhost:5000/api/carts/${userData._id}/${productID}`, {
            incrementby: increment
        })
        .then(function (response) {
            console.log(response)
            if(response){
                // console.log(response)
                setuserCart(response.data.products)
                setnotificationMessage({message:'Added to cart', messageType: 'success'})
            }
        }).catch(error => {
            console.log(error)
            // console.log(error.response.data.message)
            // setnotificationMessage({message:error.response.data.message, messageType: 'error'})
        })    
   }else{

    //post handles any new product and is ideal for adding to any cart
    axios.post(`http://localhost:5000/api/carts/${userData._id}/${productID}`, {
        incrementby: increment
    })
    .then(function (response) {
        // console.log(response);
        if(response){
            console.log(response)
            setuserCart(response.data.products)
            setnotificationMessage({message:'Added to cart', messageType: 'success'})
        }
    }).catch(error => {
        console.log(error)
        // console.log(error.response.data.message)
        // setnotificationMessage({message:error.response.data.message, messageType: 'error'})
    })   

    // try {
    //     const res = await axios.post(`http://localhost:5000/api/carts/${userData._id}/${productID}`)

    //     console.log(res)
    //     console.log('damn')
    // } catch (error) {
    //     console.log(error)
    // }


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
        <UserContext.Provider value={{getUserNameInfo, getUserPasswordInfo, userName, userPassword, Login, userData, userFavourite, userCart, updateUserFavourite, notificationMessage, setnotificationMessage, updateUserCart,removeUserCartItem}} >
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}