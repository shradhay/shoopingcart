import React from 'react'
import "./subtotal.css"
import {useStatevalue} from "./StateProvider"
import CurrencyFormat from "react-currency-format"
import {getBasketTotal} from "./reducer"

function SubTotal() {
    const [{basket}]=useStatevalue();
    return (
        <div className="subtotal">
            <CurrencyFormat 

              renderText ={
                  (value)=>(
                      <>
                      <p>SubTotal({basket.length} items) :<strong> <i class="fa fa-inr"></i>{value}</strong>
                       </p>
                      </>
                  )
              }
               decimalScale ={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeparator={true}
               
            
            />
            <button className="">Buy Now</button>

            
        </div>
    )
}

export default SubTotal

