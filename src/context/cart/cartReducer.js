import {
    SHOW_LOADER,
    ADD_TO_CART,
    FETCH_CART_PRODUCTS,
    FETCH_ALL_PRODUCTS
} from "../types";


const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_TO_CART]: (state, {payload}) => ({
    ...state,
    cart_product: [...state.cart_product, payload]
    }),
    [FETCH_CART_PRODUCTS]: (state, {payload}) => ({...state, cart_products: payload, loading: false}),
    [FETCH_ALL_PRODUCTS]: (state, {payload}) => ({...state, all_products: payload, loading: false}),

    DEFAULT: state => state
}

export const cartReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
