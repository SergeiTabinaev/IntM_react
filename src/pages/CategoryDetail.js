import React, {useContext, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Sidebar} from "../components/Sidebar";
import {CatsContext} from "../context/cats/catsContext";

// вывод списка товаров определенной категории
export const CategoryDetail = ( {match} ) => {
    const {fetchProducts, fetchCats, cats, products} = useContext(CatsContext)
    const id = match.params.id

    useEffect(() => {
        fetchProducts(id)
        // eslint-disable-next-line
    }, [id])

    useEffect(() => {
        fetchCats()
        // eslint-disable-next-line
    }, [])

    return(
            <div className="row">
                <div className="col-lg-3 mt-5">
                    <Sidebar/>
                </div>
                <div className="col-lg-9">
                    <nav aria-label="breadcrumb" className="mt-5">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link exact to='/'>Главная</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                {cats.name}
                            </li>
                        </ol>
                    </nav>

                    <div className="row">
                        {products.map(p => (
                            <div className="col-lg-4 col-md-6 mb-4" key={p.id}>
                                <div className="card h-100">
                                    <Link exact to={{pathname: `/product/${p.id}`, fromDashboard: false }}>
                                        <img className="card-img-top" src={`http://127.0.0.1:8000` + p.image} height="180" width="245"/>
                                        Детали
                                    </Link>
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <Link exact to={{pathname: `/product/${p.id}`, fromDashboard: false}}>
                                                {p.title}
                                            </Link>
                                        </h4>
                                        <h5>p.price руб.</h5>
                                        <Link exact to={{pathname: `/cart`, fromDashboard: false}}>
                                            <button className="btn btn-danger">Добавить в корзину(написать обработчик)</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
)
}
