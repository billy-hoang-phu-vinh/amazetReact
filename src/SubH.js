import React from 'react'
import { Link } from 'react-router-dom'
import './SubH.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "./StateProvider";
//import 

function Header() {
  //khoi tao gia tri
  const [{ cart }, dispatch] = useStateValue();
  console.log(`show array ne:`);
  console.log(cart);//chi chay mot lan
  return (

    <nav className="header">
      {/* logo */}


      <header className="main_menu home_menu sub__header">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                {/* fix later: button (hamburger menu) for mobile display */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="menu_icon"><i className="fas fa-bars" /></span>
                </button>
                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Room design
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="max__menu"> <h1>bath room</h1>
                          <div className="dropdown_bath_left">

                          </div>
                          <div className="dropdown_bath_right">

                          </div>
                          <div className="DropDown_bath"><div className="DropDown_bath_element DropDown_columnTitle_ec" >
                            Bath &amp; Towels</div>
                            <div className="DropDown_bath_element" >Shower Curtains</div>
                            <div  className="DropDown_bath_element" >Towels</div>
                            <div className="DropDown_bath_element" >Bath Rugs &amp; Mats</div>
                            <div className="DropDown_bath_element" >Bath Accessories</div>
                            <div className="DropDown_bath_element" >Bath Robes</div>
                            <div className="DropDown_bath_element" >Bathroom Furniture</div>
                            <div className="DropDown_bath_element" >Kids Bath</div></div>

                        </div>

                      </div>
                    </li>


                    <li className="nav-item dropdown">
                      <Link to="/login">
                        <a className="nav-link dropdown-toggle" href="/login" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          My account & Order
                      </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                          <a className="dropdown-item" href="/login"> Login</a>
                          <Link to="/checkout">
                            <a className="dropdown-item" href="/checkout">Your order</a>
                          </Link>
                        </div>
                      </Link>

                    </li>


                    {/* search box */}
                    <li className="nav-item">

                      <Link to="/checkout" className="header__link">
                        <a className="nav-link" href="/signup">Sign Up</a>
                      </Link>

                    </li>
                    {/* search icon */}
                    <li className="nav-item">
                      <Link>
                        <a className="nav-link" href="/signup">
                          <div className="basket_logo">
                            {/* link does not refresh the page */}
                            <ShoppingBasketIcon />
                            <span className="basket_count">{cart?.length}</span>
                          </div>
                        </a>
                      </Link>

                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

    </nav>

  )
}

export default Header