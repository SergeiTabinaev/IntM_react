import React, {useContext, useReducer} from 'react'
import axios from 'axios'
import {FETCH_PRODUCTS, FETCH_CATS, SHOW_LOADER} from '../types'
import {CatsContext} from "./catsContext";
import {catsReducer} from "./catsReducer";


export const CatsState = ({children}) => {

    const initialState = {
        cats: [],
        products: [],
        loading: false,
    }
    const [state, dispatch] = useReducer(catsReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchCats = async () => {
        showLoader()
            const res = await axios.get(`http://127.0.0.1:8000/api/category/`)
            const payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                }
            })
            dispatch({type: FETCH_CATS, payload})
    }

    const fetchProducts = async (id) => {
        showLoader()
            const res = await axios.get(`http://127.0.0.1:8000/api/category/${id}`)

            const payload = Object.keys(res.data.products).map(key => {
                return {
                    ...res.data.products[key],
                }
            })
            dispatch({type: FETCH_PRODUCTS, payload})
    }

    return (
        <CatsContext.Provider value={{
            showLoader, fetchProducts, fetchCats,
            loading: state.loading,
            products: state.products,
            cats: state.cats
        }}>
            {children}
        </CatsContext.Provider>
    )
}
