import { Button, Card, CardMedia, IconButton } from "@mui/material";
import React from "react";

import { UserItemsContext } from "../context/Items";


function Checkout(params) {

    const {Allproducts, setFavourite} = React.useContext(UserItemsContext)

    const CartItems = Allproducts.filter(item => item.isCartItem)

    const cartItemsDisplay = CartItems.map((item, i) => (
        <div key={i} >
            <div className="flex bg-gray-400 m-4 rounded " >
                <div>
                    <Card variant="outlined" className="shadow-2        border-black rounded border-2" sx={{ maxWidth: 150 ,Height: 150}}>          
                        <CardMedia
                            component="img"
                            height="80"
                            image= {`${item.image}`}
                            alt="green iguana"
                        />
                    </Card>
                </div>
            

                <div className="flex flex-col bg-red-300 px-3" >  
                     <div>
                         {item.name}
                    </div>

                    <div>
                        {item.price}
                    </div> 

                    <div className="flex" >
                        <IconButton>+</IconButton>
                             <div>1</div>
                        <IconButton>-</IconButton>  
                    </div>
                </div>
            </div>
        </div>
    ))

    console.log(CartItems, 'cartitems')
    
    return (
        <div>
            <div>{cartItemsDisplay}</div>
        </div>
    )
}

export default Checkout