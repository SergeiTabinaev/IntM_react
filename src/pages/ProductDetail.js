import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

export const ProductDetail = ( {match} ) => {

    const [products, setProducts] = useState([])
    const [cats, setCats] = useState({})
    const [features, setFeatures] = useState([])

    const id = match.params.id

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/product/${id}/`
        }).then(response => {
            setProducts(response.data)
            setCats(response.data.category)
            setFeatures(response.data.features)
            // console.log(response.data.features[0]['feature'])
            // console.log(response.data.features['feature'])
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
                        {products.title}
                    </li>
                </ol>
            </nav>
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" src={products.image} height="180" alt=""/>
                </div>
                <div className="col-md-8">
                    <h3>{products.title}</h3>
                    <p>Цена: {products.price} руб.</p>
                    <p>Описание: {products.description}</p>
                    <hr/>
                        <Link exact to={{pathname: `/cart`, fromDashboard: false}}>
                            <button className="btn btn-danger">Добавить в корзину(написать обработчик)</button>
                        </Link>

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
