import { createContext } from "react";
//Add to cart basket
import React, {useContext,useReducer} from 'react'
//create context
export const StateContext = createContext();

// build a Provider--step-1
export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
       {children}
    </StateContext.Provider>

);
//to use inside of component
export const useStatevalue = ()=>useContext(StateContext)