import { AddCircleOutlined, AddCircleOutlineOutlined, AddCircleRounded } from "@material-ui/icons";
import { Button, Card, CardMedia, IconButton } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

import { UserItemsContext } from "../context/Items";



function Checkout(params) {

    const {Allproducts, setFavourite, updateCartItemsQty, CartItems} = React.useContext(UserItemsContext)
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

  

    const cartItemsDisplay = CartItems.map((item, i) => (
        <div key={i} >
            <div className="flex bg-gray-200 m-4 rounded lg:mx-20" >
                <div>
                    <Card variant="outlined" className="shadow-2        border-black rounded border-2" sx={{ maxWidth: 150 ,Height: 150}}>          
                        <CardMedia
                            component="img"
                            height="80"
                            image= {`${item.item.image}`}
                            alt="green iguana"
                        />
                    </Card>
                </div>
            

                <div className="flex flex-col  px-3 uppercase" >  
                     <div>
                        Name: {item.item.name}
                    </div>

                    <div>
                        Price: {item.item.price}
                    </div> 

                    <div className="flex" >
                        <IconButton onClick={()=>updateCartItemsQty(item.id)} className="bg-transparent" >< AddCircleRounded/></IconButton>
                             <div className="self-center text-lg font-bold" >{getItemQuantity(item.id)}</div>
                        <IconButton className="bg-transparent" >< AddCircleRounded/></IconButton>
                    </div>
                </div>
            </div>
        </div>
    ))

    // console.log(CartItems, 'cartitems')
    
    return (
        <div className="" >
            <Navbar/>
            <div className="text-center mt-10 text-4xl font-bold text-blue-600" >My Cart</div>
            <div className="text-center" >
                or amma hit
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