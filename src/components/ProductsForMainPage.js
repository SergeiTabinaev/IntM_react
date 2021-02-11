import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

// вывод всех товаров вне зависимости от категории
// еще в работе: добавление товара в корзину
export const ProductsForMainPage = ({}) => {

    const [products, setProducts] = useState([])
    const [CartProducts, setCartProducts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/product/`
        }).then(response => {
            setProducts(response.data)
        })
    }, [])


    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/cart/cartproducts/`
        }).then(response => {
            setCartProducts(response.data)
            console.log(response.data)
        })
    }, [])



    const addToCart = async (slug) => {
            await fetch(`http://127.0.0.1:8000/api/add-to-cart/${slug}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    slug: slug
                })
            });

            // const exist = CartProducts.find((x) => x.slug === slug);
            // if (exist) {
            //     setCartProducts(
            //         CartProducts.map((x) =>
            //         x.slug === slug ? { ...exist, qty: exist.qty + 1 } : x
            //         )
            //     );
            // } else {
            //     const data = products.filter(product =>{
            //         return product.slug === slug})
            //     setCartProducts([...CartProducts, { ...data, qty: 1 }]);
            // }
    }




    return(
        <div>

            <div className="row mt-5">
                {products.map(pr => (
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <Link exact to={{pathname: `/product/${pr.id}`, fromDashboard: false}}>
                            {/*<img className="card-img-top" src={} alt=""/>*/}
                            <img src={pr.image} height="180" width="245"/>
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