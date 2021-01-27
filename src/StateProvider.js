// setup data layer
import { createContext, useContext, useReducer } from "react";
// to track the cart

export const StateContext = createContext();

export const StateProdiver = ({reducer, initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// this is how we use it inside component
export const useStateValue = () => useContext(StateContext);