import React from "react";
import { UserItemsContext } from "../context/Items";


function Checkout(params) {

    const {Allproducts, setFavourite} = React.useContext(UserItemsContext)

    const CartItems = Allproducts.filter(item => {if (item.isCartItem){
        return (
            <div>{item.price}</div>
        )
    }} )

    console.log(CartItems, 'cartitems')
    
    return (
        <div>
            <div>check out</div>
        </div>
    )
}

export default Checkout