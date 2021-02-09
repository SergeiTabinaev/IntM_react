import {SHOW_LOADER, ADD_TO_CART, FETCH_CART, REMOVE_FROM_CART} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_TO_CART]: (state, {payload}) => ({
    ...state,
    cart_product: [...state.cart_product, payload]
    }),
    // [FETCH_CART]: (state, {payload}) => ({...state, cart_product: payload, loading: false}),
    // [REMOVE_FROM_CART]: (state, {payload}) => ({
    // ...state,
    // cart_product: state.cart_product.filter(cart_product => cart_product.id !== payload)
// }),
    DEFAULT: state => state
}

export const cartReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
