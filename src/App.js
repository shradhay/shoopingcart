import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Header from "./Header"
const App =()=>{
  return(
    <>
    <Router>
     <div className="app">
      
     <Switch>
       <Route path="/checkout">
         <h1>checkout</h1>
       </Route>
       <Route path="/login">
         <h1>login</h1>
       </Route>
       <Route path="/">
         
         <Header/>
         <h1>HOme page</h1>
       </Route>
     </Switch>
     </div>
     </Router>
    </>
  )
}
export default App;
