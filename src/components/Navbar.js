import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to='/' exact>IMagazin Главная</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    {/*<span className="navbar-toggler-icon"></span>*/}
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    авторизация регистрация или приветствие покупателя
                    {/*<ul className="navbar-nav">*/}
                    {/*    {% if not request.user.is_authenticated %}*/}
                    {/*    <li>*/}
                    {/*        <NavLink className="nav-link text-white" href="{% url 'login' %}">Авторизация</NavLink>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*        <NavLink className="nav-link text-white" href="{% url 'registration' %}">Регистрация</NavLink>*/}
                    {/*    </li>*/}
                    {/*    {% else %}*/}
                    {/*    <li className="nav-item">*/}
                    {/*        <span className="navbar-text text-light">Здравствуйте, {% if request.user.is_authenticated %}*/}
                    {/*        <span className="badge badge-danger">*/}
                    {/*        <NavLink href="#" style="text-decoration: none; font-size: 14px;">*/}
                    {/*            {{ request.user.username }}*/}
                    {/*        </NavLink>*/}
                    {/*        </span>{% else %} гоcть!{% endif %}*/}
                    {/*        <a href="{% url 'logout' %}">| Выйти</a>*/}
                    {/*        </span>*/}
                    {/*    </li>*/}
                    {/*    {% endif %}*/}
                    {/*</ul>*/}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to='/cart'>Корзина
                                <span className="badge badge-pill badge-danger">
                                    {/*{{cart.products.count}} кол-во товаров в корзине*/} кол-во товаров в корзине
                                </span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to='/about'>Контакты
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

