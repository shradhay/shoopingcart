import { CheckOutlined } from '@material-ui/icons'
import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from "./Header"
import Home from './Home'
import "./index.css"
import CheckOut from "./CheckOut"
import Login from "./Login"
const App =()=>{
  return(
    <>
    <Router>
     <div className="app">
    <Switch>
       <Route path="/checkout">
       <Header/>
         
         <CheckOut/>
       </Route>
       <Route path="/login">
        <Login/>
       </Route>
       <Route path="/">
         <Header/>
         <Home/>
       </Route>
     </Switch>
     </div>
     </Router>
    </>
  )
}
export default App;
