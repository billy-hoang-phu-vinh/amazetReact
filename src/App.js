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

function App() {
  return (

    <Router>
      {/** component: router */}

      <div className="App">
        <div className="app">
          <Switch>
            {/** component: checkout */}
            <Route path="/checkout">
              <h1>Checkout</h1>
            </Route>
            {/** component: login page */}

            <Route path="/login">
              <h1>Checkout</h1>
            </Route>
            {/** component: signup page */}
            <Route path="/signup">
              <h1>Signup</h1>
            </Route>
            <Route path="/">
              <Header/>
              <h1>Main page</h1>
              <Home/>
           </Route>
            {/** component: default page */}

      
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
