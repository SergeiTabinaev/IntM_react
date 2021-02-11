import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar"
import {Cart} from "./pages/Cart";
import {Checkout} from "./pages/Checkout";
import {ProductDetail} from "./pages/ProductDetail";
import {CategoryDetail} from "./pages/CategoryDetail";
import {CartState} from "./context/cart/cartState";




function App() {
  return (
        <CartState>
          <BrowserRouter>
            <Navbar/>
            <div className="container pt-xl-5">
                <Switch>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/cart'} exact component={Cart}/>
                    <Route path={'/about'} exact component={About}/>
                    <Route path={'/checkout'} exact component={Checkout}/>
                    <Route path={'/product/:id'} exact component={ProductDetail}/>
                    <Route path={'/category/:id'} exact component={CategoryDetail}/>
                </Switch>
            </div>
          </BrowserRouter>
        </CartState>
      );
}

export default App;
