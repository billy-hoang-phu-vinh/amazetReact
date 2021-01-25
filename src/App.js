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
import Signup from './Signup';
import notfoundpage from './notfoundpage';

function App() {
  return (

    <Router>
      {/** component: router */}

      <div className="App">
        <div className="app">
          <Header />
          <Switch>

            {/** component: checkout */}
            <Route path="/checkout" >
              <h1>Checkout</h1>
            </Route>
            {/** component: login page */}

            <Route path="/login">
              <Login />
            </Route>
            {/** component: signup page */}
            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/" exact>
              <h1>Main page</h1>
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
