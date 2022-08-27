import { AddCircleOutlined, AddCircleOutlineOutlined, AddCircleRounded } from "@material-ui/icons";
import { Button, Card, CardMedia, IconButton } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

import { UserItemsContext } from "../context/Items";
import { UserContext } from "../context/user";



function Checkout(params) {

    const {Allproducts, setFavourite, updateCartItemsQty, CartItems} = React.useContext(UserItemsContext)

    const {userCart, removeUserCartItem, updateUserCart} = React.useContext(UserContext)
    // const CartItems = Allproducts.filter(item => item.isCartItem)

    // const [CartItemsQtyarray, setCartItemsQtyarray] = React.useState([]);


    const getItemQuantity = (id) => {
    
         const filteredItem =   CartItems.find(item => item.id == id)

         console.log(CartItems)
         console.log(filteredItem)

         if(!filteredItem){
            return 1
         }else{       
         return filteredItem.quantity
         }
        
    
    
    }


    // console.log(getItemQuantity(3))


    // const controlCartItemQuantity = (id, event) => {
    
    //  const itemobj = CartItems.find(item => item.ProductID == id)
     
    //  const isitem =  CartItemsQtyarray.some(item => item.itemID == id)

    //  if(!isitem){
    //     setCartItemsQtyarray(prev => [...prev, {
    //         itemobj: itemobj,
    //         itemID: itemobj.ProductID,
    //         quantity: 2
    //     }])
    //  }else{
    //     setCartItemsQtyarray(prev => prev.map(item=>item.itemID == id?{
    //         ...item,
    //         quantity: item.quantity + 1
    //     }:item))
    //  }
    // }

//    console.log(CartItemsQtyarray, 'cartItems array')

//   const cartItemsDisplay2 = CartItemsQtyarray.map((item, i) => {
    
//   })

  

    const CartItemsDisplay = userCart.length? userCart.map((item, i) => (
        <div key={i} >
            <div className="flex m-4 rounded lg:mx-32" >
                <div>
                    <Card variant="outlined"  className="border border-white" sx={{ maxWidth: 150 ,Height: 150}}>          
                        <CardMedia
                            component="img"
                            height="80"
                            image= {`${item.productDetails.image}`}
                            alt="green iguana"
                        />
                    </Card>
                </div>
            

                <div className="flex flex-col  px-3 uppercase" > 

                     <div className="font-headers2 flex text-start  text-2xl " >
                        Total Price: £4000
                    </div>

                     <div className="font-headers2 text-xl flex text-start">
                        Name: {item.productDetails.name}
                    </div>

                    <div className="font-headers2 text-lg flex text-start" >
                        Price: £{item.productDetails.price}
                    </div> 



                </div>

                <div className="mx-2 flex  items-center" >

                    
                <div className="flex" >
                        <IconButton onClick={()=>updateUserCart(item.productDetails._id, 1)}  className="bg-transparent" >< AddCircleRounded/>
                        </IconButton>
                             <div className="self-center text-5xl font-bold" >
                            {item.quantity}
                             </div>
                        <IconButton onClick={()=>updateUserCart(item.productDetails._id, -1)}   className="bg-transparent" >< AddCircleRounded/></IconButton>
                    </div>
                    
                    <div onClick={()=>removeUserCartItem(item.productDetails._id)}  className="flex py-2 mx-4" >
                        <Button className="bg-red-600 text-red-300 py-6 rounded-full" >
                            Remove from cart
                        </Button>    
                    </div>
                </div>
            </div>
        </div>
    )):<div>
        No Items present in your cart
    </div>

    // console.log(CartItems, 'cartitems')
    
    return (
        <div className="" >
            <Navbar/>
            <div className="text-center mt-16 text-4xl font-bold text-blue-600" >My Cart</div>
            <div className="text-center" >
                {CartItemsDisplay}
            </div>
             <div>
                <Button className="mx-auto w-full text-3xl font-bold text-blue-600" >
                    Place Order
                </Button>
             </div>
        </div>
    )
}

export default Checkout