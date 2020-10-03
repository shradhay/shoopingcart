import React from 'react'
import "./product.css"
import {useStatevalue} from "./StateProvider"

function Products({id,title,image,price,rating}) {



    const [{},dispatch]= useStatevalue();
    const addtoBasket =()=>{

        dispatch ({
                type:"ADD_TO_BASKET",
                item: {
                    
                    id:id,
                    title:title,
                    image:image,
                    price: price,
                    rating: rating
                }
            })
         
    }
    return (
        <div className="product">

            <div className="product_info">
            <p>{title}</p>
            
            <p className="product_price"> 
            <i class="fa fa-inr"></i>
             
           <strong>{price}</strong></p>
           <div className="product_rating">
               {
                   Array(rating)
                   .fill()
                   .map((_) =>(
                       <p>⭐</p>
                    ))}
             </div>
            </div>
             <img src={image}/>
             <button onClick={addtoBasket}>Add to basket</button>
         </div>
    )
}

export default Products;
