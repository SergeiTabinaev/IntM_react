import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export const ProductsForMainPage = ({addToCart}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/product/`
        }).then(response => {
            setProducts(response.data)
        })
    }, [])

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
                                onClick={() => addToCart(pr.id)}
                            > Добавить в корзину</button>

                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}