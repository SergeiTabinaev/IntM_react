import React, {useState, useEffect} from "react";
import {SearchForm} from "./Search";
import {Link} from "react-router-dom";
import axios from "axios";


// вывод категорий товаров
// еще в работе: поиск товаров
export const Sidebar = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/category/"
            }).then(response => {
                setCats(response.data)
        })
    }, [])




    return(
        <div>
            <div className="list-group">
                {cats.map(c => (
                <Link className="list-group-item" exact to={{pathname: `/category/${c.id}/`, fromDashboard: false}}>{c.name}</Link>
                    ))}
            </div>

            <div>
                <SearchForm/>
            </div>
        </div>
    )
}