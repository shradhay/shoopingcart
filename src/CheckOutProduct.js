import React from 'react'
import CheckOut from "./CheckOut"
import "./CheckOutProduct.css"
import { useStatevalue } from './StateProvider'



function CheckOutProduct({id,price,rating,image,title}) {
    
    const [{basket},dispatch] = useStatevalue();
    const removefromBasket=()=>{
        dispatch(
            {
                type:"REMOVE_FROM_BASKET",
                id:id,
            }
        )
    }
    return (
        <div className="checkoutProduct">
         <img className="checkoutProduct_img" src={image} alt=""/>
        <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price"> 
            <i class="fa fa-inr"></i>{price}
         </p>
         <div className="checkoutProduct_rating">
               {
                   Array(rating)
                   .fill()
                   .map((_,i) =>(
                       <p>⭐</p>
                    ))}
             </div>
             <button onClick={removefromBasket}>Remove from Basket</button>
       
         </div>
        </div>
    )
}

export default CheckOutProduct
