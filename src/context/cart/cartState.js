import React, {useReducer} from "react";
import axios from "axios";
import {SHOW_LOADER, ADD_TO_CART} from "../types";
import {CartContext} from "./cartContext";
import {cartReducer} from "./cartReducer";

//Не готово
export const CartState = ({children}) => {
    const initialState = {
        cart_products: [],
        loading: false
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    // const addToCart = async id => {
    //     await axios.post({url: `http://127.0.0.1:8000/api/addtocart/${slug}/`})
    //      // const payload = {
    //      //    id: res.data.name}
    //     dispatch({type: ADD_TO_CART, payload: id})
    // }

    return (
        <CartContext.Provider value={{
            showLoader, addToCart,
            loading: state.loading,
            cart_Products: state.cart_products
        }}>
            {children}
        </CartContext.Provider>
    )

}

