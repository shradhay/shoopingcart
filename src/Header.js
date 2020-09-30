import React from 'react'
import logo from "./images/logo.jpg"
import "./header.css"
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <nav className="header">
          {/*logo on left->img*/}
          <Link to="/">
          <img className="header__logo" 
          src={logo}
          alt="logo"
          />
          </Link>
          {/*search box*/}
          <div className="header__search">
           <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>
          {/*3 links*/}
          <div className="header___nav">
             {/*1st link */}
             <Link className="header__link">
             <div className="header__option">
             <span className="header_optionLineone">Hello user</span>
             <span className="header_optionLineTwo" >Sign In</span>

             </div>
            
             </Link>
             {/*2st link */}
             <Link className="header__link">
             <div className="header__option">
             <span className="header_optionLineone">Returns </span>
             <span className="header_optionLineTwo">&Order</span>
             </div>
            </Link>
             {/*3st link */}
             <Link className="header__link">
             <div className="header__option">
             <span className="header_optionLineone">Your</span>
             <span className="header_optionLineTwo">Prime</span>
             </div>
            </Link>

            <Link to="/Checkout" className="header_link">
                <div className="headerOptionBasket">
                    {/* shooping cart */}
                    <ShoppingCartIcon className="header_shoopingicon"></ShoppingCartIcon>
                    
                    {/*No of item in basket */}
                    <span>0</span>

                </div>
            </Link>
             
              
      
          </div>
         {/*basket icon with number*/}



        </nav>
    )
}

export default Header
