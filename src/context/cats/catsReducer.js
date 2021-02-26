import {FETCH_PRODUCTS, FETCH_CATS, SHOW_LOADER} from '../types'

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [FETCH_CATS]: (state, {payload}) => ({...state, cats: payload, loading: false}),
    [FETCH_PRODUCTS]: (state, {payload}) => ({...state, products: payload, loading: false}),
    DEFAULT: state => state
}

export const catsReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}