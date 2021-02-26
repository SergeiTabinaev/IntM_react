import React, {Fragment, useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/auth/authContext";

export const Navbar = () => {

    const {logout, isAuthenticated, checkAuthenticated} = useContext(AuthContext)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        checkAuthenticated()
        // eslint-disable-next-line
    }, [])

    const logout_user = () => {
        logout();
        setRedirect(true)
    }

    const guestLinks = () => (
        <Fragment>
            <li className='nav-item'>
                <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item'>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
            </li>
        </Fragment>
    )

    const authLinks = () => (
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
        </li>
    )

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to='/' exact>IMagazin Главная</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    {/*<span className="navbar-toggler-icon"></span>*/}
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    {isAuthenticated ? authLinks() : guestLinks()}
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link exact className="nav-link" to='/cart'>Корзина
                                <span className="badge badge-pill badge-danger">
                                    {/*{{cart.products.count}} кол-во товаров в корзине*/} кол-во товаров в корзине
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link exact className="nav-link" to='/about'>Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

