import { propsToClassKey } from "@mui/styles";
import axios from "axios";
import React, { createContext } from "react";
import Alldata from "../image/new arrival/newarrivaldata";


const UserItemsContext = createContext()



function UserItemsContextProvider(props) {
    // console.log(Alldata())
    const allproductx = Alldata()
    const [Allproducts, setAllproducts] = React.useState(allproductx);
    const [FavouriteItems, setFavouriteItems] = React.useState([]);
    const [CartItems, setCartItems] = React.useState([]);
   //  const [allProducts, setallProducts] = React.useState();

   // React.useEffect(() => {
   //    const getProducts = async () => {
   //       try {
   //       const res = await axios.get('http://localhost:5000/api/products')
   //       console.log(res)
   //       setallProducts(res.data)   
   //       } catch (error) {
   //         console.log(error) 
   //       }
   //    } 

   //    getProducts()
   // }, []);
    
   // console.log(allProducts)
   





   //  console.log(Allproducts)
    const xcartitems = Allproducts.filter(item => item.isCartItem)
   
     React.useEffect(() => { 
      createCartItems(xcartitems)
     }, [Allproducts]);

     console.log(CartItems, 'damn')

     const createCartItems = (cartitems) => {
      //function is run on any changes to allproducts 
      //create the xchecked array that will be spread in CartItem state
      const xcheckedcartobj = []
      const Xcartitemsidarray = CartItems.map(item => (item.id) ) 
      // console.log(Xcartitems, 'cartitems')
      
     //cartitems contains all products that have be added to the cart,
     //the items of cart items are checked, any repeats are disregarded, 
     //however new items are pushed into checked obj, which is eventually spread in CartItem state

     //items are checked via collecting data from Cartitems state in xcartitemidarray and checking them against incoming items
      cartitems.map(item => {
         if(!Xcartitemsidarray.includes(item.ProductID)){
            xcheckedcartobj.push(
               {  id: item.ProductID,
                  item:item,
                  quantity: 1
               }
            )
         }     
      })

      console.log(xcheckedcartobj, 'cartobj')

     if(xcheckedcartobj.length == 0){
      console.log('empty false')
     }else{
      console.log('threw')
      setCartItems(prev =>[...prev, ...xcheckedcartobj]) 
     }    
     }

     const updateCartItemsQty = (id) => {
      setCartItems(prev => prev.map(item => item.id == id?{...item, quantity: item.quantity + 1}:item))
     }

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
       <UserItemsContext.Provider value={{Allproducts, setFavourite,setCartitems, CartItems , updateCartItemsQty}} >
        {props.children}
       </UserItemsContext.Provider>
    )
    
}

export {UserItemsContextProvider, UserItemsContext}