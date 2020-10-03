export const initialState={
    basket : [{
        id:"213",
        title:"Think Like A MONK",
        price:200,
        image:"https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
    }],
    user:null,
    
    
}
export const getBasketTotal =(basket)=> 
basket.reduce((amount,item)=>item.price + amount,0)
function reducer (state,action)
{
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
            
        case 'REMOVE_FROM_BASKET':

             let newbasket=[...state.basket]
             //check to see if product ,remove it...
             const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id)
             if(index >= 0)
             {
                 newbasket.splice(index,1);


             }
             else{
                 console.log("NOTWORKING remove")

             }
            return {...state, basket:newbasket}
               
        default:
            return state;
    }
}
export default reducer