import React, {useContext} from "react";
import {Sidebar} from "../components/Sidebar";
import {ProductsForMainPage} from "../components/ProductsForMainPage";
import {CartContext} from "../context/cart/cartContext";
// import {Loader} from "../components/loader";

export const Home = () => {
    const {addToCart} = useContext(CartContext)

    return(
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 mt-5">
                        <Sidebar/>
                    </div>

                    <div className="col-lg-9">
                        <ProductsForMainPage addToCart={addToCart}/>
                        {/*{loading*/}
                        {/*    ? <Loader />*/}
                        {/*    : <ProductsForMainPage cart_product={cart_product}/>*/}
                        {/*}*/}
                    </div>
                </div>
            </div>
    )
}