import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar"
import {Cart} from "./pages/Cart";
import {Checkout} from "./pages/Checkout";
import {ProductDetail} from "./pages/ProductDetail";
import {CategoryDetail} from "./pages/CategoryDetail";
import {CatsState} from "./context/cats/catsState";
import {AuthState} from "./context/auth/authState";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {CartState} from "./context/cart/cartState";


function App() {
  return (
      <AuthState>
          <CatsState>
            <CartState>
              <BrowserRouter>
                <Navbar/>
                <div className="container pt-xl-5">
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route exact path={'/login'} component={Login} />
                        <Route exact path={'/signup'} component={Signup} />
                        <Route path={'/cart'} exact component={Cart}/>
                        <Route path={'/about'} exact component={About}/>
                        <Route path={'/checkout'} exact component={Checkout}/>
                        <Route path={'/product/:id'} exact component={ProductDetail}/>
                        <Route path={'/category/:id'} exact component={CategoryDetail}/>
                    </Switch>
                </div>
              </BrowserRouter>
            </CartState>
          </CatsState>
      </AuthState>
      );
}

export default App;
