import React, {useContext, useEffect} from "react";
import {SearchForm} from "./Search";
import {Link} from "react-router-dom";
import axios from "axios";
import {CatsContext} from "../context/cats/catsContext";


// вывод категорий товаров
// еще в работе: поиск товаров
export const Sidebar = () => {
    const {fetchCats, cats} = useContext(CatsContext)
    useEffect(() => {
        fetchCats()
        // eslint-disable-next-line
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