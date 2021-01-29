// eslint-disable-next-line
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Header from "./Header"
import 'bootstrap/dist/css/bootstrap.css';
import './css/animate.css'
// import './css/owl.carousel.min.css' lack of PNG file
import './css/all.css'
import './css/themify-icons.css'
import './css/magnific-popup.css'
import './css/slick.css'
import './css/style.css'


import Home from './Home'
import Footer from './Footer.js';
import Login from './Login';
import Checkout from './Checkout.js'
import Signup from './Signup';
import notfoundpage from './notfoundpage';
import SubH from './SubH';
import SaleRender from './SaleRender';
import CheckoutFurniture from './CheckoutFurniture.js';
import Cart from './Cart.js';

function App() {
  return (

    <Router>
      {/** component: router */}

      <div className="container-fluid">
        <div className="app">
          <Header />
          <SubH/>
          <Switch>

            {/** component: checkout */}
            <Route path="/checkout" >
              <Checkout/>
            </Route>
            {/** component: login page */}

            <Route path="/login">
              <Login />
            </Route>
            {/** component: signup page */}
            <Route path="/signup">
              <Signup />
            </Route>
            {/* cart */}
            <Route path="/cart">
              <Cart/>
            </Route>

            {/* checkout furniture */}
            <Route path="/checkoutf">
              <CheckoutFurniture/>
            </Route>


            <Route path="/sale">
              <SaleRender/>
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>
            {/** component: default page */}

            <Route path="" component={notfoundpage}/>

          </Switch>
          <Footer />
        </div>
      </div>
    </Router>

  );
}

export default App;
