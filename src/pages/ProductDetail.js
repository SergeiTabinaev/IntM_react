import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

// вывод полной информации о конкретном товаре
export const ProductDetail = ( {match} ) => {

    const [product, setProduct] = useState([])
    const [cats, setCats] = useState({})
    const [features, setFeatures] = useState([])

    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/product/${id}/`
        }).then(response => {
            setProduct(response.data)
            setCats(response.data.category)
            setFeatures(response.data.features)

        })
    }, [id])

    return(
        <div>
            <nav aria-label="breadcrumb" className="mt-5">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link exact to='/'>Главная</Link>
                    </li>
                    <li className="breadcrumb-item">
                            <Link exact to={{pathname: `/category/${id}/`, fromDashboard: false}} >
                                {cats.name}
                            </Link>

                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        {product.title}
                    </li>
                </ol>
            </nav>
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={product.image} height="180" alt=""/>
                </div>
                <div className="col-md-8">
                    <h3>{product.title}</h3>
                    <p>Цена: {product.price} руб.</p>
                    <p>Описание: {product.description}</p>
                    <hr/>

                            <button
                                type="button"
                                className="btn btn-danger"
                                // onClick={() => addToCart(product.slug)}
                            >
                                Добавить в корзину
                            </button>

                </div>
                <p className="mt-4">Характеристики:</p>
                <table className="table">
                    <tbody>
                        {features.map((fv) => (
                            <tr>
                                <th scope="row" key={fv.value}>
                                    {fv['feature']['feature_name']}
                                </th>
                                <td  key={fv.id}>{fv.value}&nbsp;{fv['feature']['unit']}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
