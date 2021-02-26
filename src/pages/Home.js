import React, {useContext} from "react";
import {Sidebar} from "../components/Sidebar";
import {ProductsForMainPage} from "../components/ProductsForMainPage";
import {CatsContext} from "../context/cats/catsContext";

// import {Loader} from "../components/loader";

export const Home = () => {

    return(
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 mt-5">
                        <Sidebar/>
                    </div>

                    <div className="col-lg-9">
                        <ProductsForMainPage />
                    </div>
                </div>
            </div>
    )
}