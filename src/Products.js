import React from 'react'
import "./product.css"

function Products({id,title,image,price,rating}) {
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
             <button>Add to basket</button>
         </div>
    )
}

export default Products
