import React, {useContext, useReducer} from "react";
import axios from "axios";
import {SHOW_LOADER, ADD_TO_CART, FETCH_CART_PRODUCTS, FETCH_ALL_PRODUCTS} from "../types";
import {CartContext} from "./cartContext";
import {cartReducer} from "./cartReducer";
import {AuthContext} from "../auth/authContext";
import {Redirect} from "react-router-dom"


export const CartState = ({children}) => {

    const {isAuthenticated} = useContext(AuthContext)

    const initialState = {
        all_products: [],
        cart_products: [],
        loading: false
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchCartProducts = async (id) => {
        if (isAuthenticated) {
            showLoader()
            if (localStorage.getItem('access')) {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                        'Accept': 'application/json'
                    }
                }
                const res = await axios.get(`http://127.0.0.1:8000/api/cart/${id}`, config)

                const payload = Object.keys(res.data).map(key => {
                    return {
                        ...res.data.products[key],
                    }
                })
                dispatch({type: FETCH_CART_PRODUCTS, payload})
            }
        }
        else
            return <Redirect to='/login' />
    }

    const fetchAllProducts = async () => {
        showLoader()
            const res = await axios.get(`http://127.0.0.1:8000/api/product/`)

            const payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                }
            })
            console.log(payload)
            dispatch({type: FETCH_ALL_PRODUCTS, payload})
    }

    const addToCart = async (slug) => {
        if (isAuthenticated) {
            if (localStorage.getItem('access')) {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                        'Accept': 'application/json'
                    }
                }
                await axios.post(`http://127.0.0.1:8000/api/addtocart/${slug}`, config)
                const payload = {
                    slug: slug
                }
                dispatch({type: ADD_TO_CART, payload})
            }
        }
        else
            return <Redirect to='/login' />
    }

    return (
        <CartContext.Provider value={{
            showLoader,
            fetchAllProducts,
            addToCart,
            fetchCartProducts,
            loading: state.loading,
            cart_products: state.cart_products,
            all_products: state.all_products
        }}>
            {children}
        </CartContext.Provider>
    )

}

