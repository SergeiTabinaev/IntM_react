import {SHOW_LOADER, ADD_TO_CART} from "../types";


//Не готово
const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [ADD_TO_CART]: (state, {payload}) => ({
    ...state,
    cart_product: [...state.cart_product, payload]
    }),

    DEFAULT: state => state
}

export const cartReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}
