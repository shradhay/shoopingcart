import React from 'react'
import "./home.css"
import banner1 from "./images/banner2.jpg"
import Products from './Products'
function Home() {
    return (
        <div className="home">
        <img 
        className="home__image"
        src={banner1}  alt="banner"/>
        {/*Product price title image */}
        <div className="home_row">
        <Products
        id="1"
        title="Saregama Carvaan Mini 2.0- Music Player with Bluetooth/FM/AM/AUX (Regal Blue)"
        price={1960}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81jv6auYWbL._SL1500_.jpg"

        />
         <Products
        id="1"
        title="ASUS VivoBook Dual  14-inch FHD Compact and Light Laptop "
        price={50000}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/61dJrxf%2B3fL._SL1000_.jpg"

        />
         <Products
        id="1"
        title="Quick Heal Antivirus"
        price={800}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/41aUXCEGroL.jpg"

        />
        <Products
        id="1"
        title="BOOK-Think Like A Monk"
        price={200}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"

        />
      

        </div>
        <div className="home_row">
        <Products
        id="1"
        title="Study Table"
        price={4000}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71ptZKUUIoL._SL1500_.jpg"
        />
        <Products
        id="1"
        title="Washing Machine"
        price={29800}
        rating={3}
        image="https://www.lg.com/in/images/washing-machines/md07512155/gallery/FHT1065HNL-Washing-Machines-Right-View-D-06.jpg"
       />
         <Products
        id="1"
        title="Vaccum  cleaner"
        price={12900}
        rating={2}
        image=" https://images-na.ssl-images-amazon.com/images/I/81FmgV2Fu0L._SL1500_.jpg"

        />
        </div>
        <div className="home_row">
       
        <Products
        id="1"
        title="TV"
        price={50000}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/917QAUQorDL._SL1500_.jpg"

        />
         <Products
        id="1"
        title="Dinning Table"
        price={35000}
        rating={5}
        image="https://m.media-amazon.com/images/I/71wr4rcU5RL._AC_SX410_SY308_.jpg"

        />
        </div>
        
        
        
        
        </div>

      
       

    )
}

export default Home
