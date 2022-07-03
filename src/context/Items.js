import { propsToClassKey } from "@mui/styles";
import React, { createContext } from "react";
import Alldata from "../image/new arrival/newarrivaldata";


const UserItemsContext = createContext()



function UserItemsContextProvider(props) {
    // console.log(Alldata())
    const allproductx = Alldata()
    const [Allproducts, setAllproducts] = React.useState(allproductx);
    const [FavouriteItems, setFavouriteItems] = React.useState([]);
    const [CartItems, setCartItems] = React.useState([]);

    console.log(Allproducts)
   

     const setFavourite = (event) => {
        console.log(event.target)
       const uniqueIDx= event.target.parentElement.parentElement.id
       console.log(uniqueIDx)
       console.log(Allproducts)

       setAllproducts(prev => prev.map(item => (
        item.ProductID == uniqueIDx? {...item, isFavourite: !item.isFavourite}: item
    )))   
     }
     
     const setCartitems = (event) => {
        console.log(event.target.parentElement.parentElement)
       const uniqueIDx= event.target.parentElement.parentElement.id
       console.log(uniqueIDx)
    //    console.log(Allproducts)

       setAllproducts(prev => prev.map(item => (
        item.ProductID == uniqueIDx? {...item, isCartItem: !item.isCartItem}: item
    )))   
     }
     

    
    

    return(
       <UserItemsContext.Provider value={{Allproducts, setFavourite,setCartitems}} >
        {props.children}
       </UserItemsContext.Provider>
    )
    
}

export {UserItemsContextProvider, UserItemsContext}