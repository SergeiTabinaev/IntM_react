import React, {useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import {CartContext} from "../context/cart/cartContext"


export const ProductsForMainPage = () => {
    const {addToCart, fetchAllProducts, all_products} = useContext(CartContext)

    useEffect(() => {
        fetchAllProducts()
        // eslint-disable-next-line
    }, [])

    return(
        <div>
            <div className="row mt-5">
                {all_products.map(pr => (
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <Link exact to={{pathname: `/product/${pr.id}`, fromDashboard: false}}>
                            <img src={pr.image} height="180" width="245" alt=""/>
                        </Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                {pr.title}
                            </h4>
                            <h5>{pr.price} руб.</h5>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => addToCart(pr.slug)}
                            > Добавить в корзину</button>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}