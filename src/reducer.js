export const initialState = {
    cart: [], 
}
export const getcartTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state,action) => {
    console.log(action);//test: show the action
    switch(action.type) {
        case 'ADD_TO_CART':
          //logic for adding item to cart
          return {
              ...state,
              cart: [...state.cart, action.item]
          }
          case 'REMOVE_FROM_CART':
            //logic for removing item to cart
          return {state}  
        default:
            return state;        
    }
}

export default reducer;



