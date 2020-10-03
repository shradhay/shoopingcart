import React from 'react'
import {useStatevalue} from "./StateProvider"
import "./checkout.css"
import CheckOutProduct from "./CheckOutProduct"
import SubTotal from './SubTotal'


function CheckOut() {
    const [{basket}]=useStatevalue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                
           {basket?.length === 0 ? (
               <div>
                   <h1>Your Basket is Empty</h1>
                   </div>
           ):(
               <div>
                   <h2 className="checkout_title">
                       Your shooping Basket
                   </h2>
                   {/*List all checkout product */}
                   {
                       basket?.map(item=>(
                           <CheckOutProduct
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                        />
                       ))
                   }

               </div>
           )}
     </div>
     {
         basket.length > 0  &&(
             <div className="checkout_right">
                 <SubTotal/>
                

                 </div>
         )

     }

          
            
        </div>
    )
}

export default CheckOut

