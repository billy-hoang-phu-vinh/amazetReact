import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
function Header() {
    return (
        // <nav className="header">
        //     {/* logo */}
        //     <Link className="t1" to="/">
        //         <img alt="" className="header__logo" src="data:image/png;base64,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"></img>
        //     </Link>
        //     <div className="header__search">
        //         <input type="text" className="header__searchInput" />
        //         <SearchIcon className="header__searchIcon" />
        //     </div>

        //     {/* 3 Links*/}
        //     <div className="header__nav">
        //         {/* hello link */}
        //         <Link to="/login" className="header__link">
        //             {/* link does not refresh the page */}
        //             <div className="header__option">
        //                 <span className="header__optionLineOne">Hello abc</span>
        //                 <span className="header__optionLineTwo">Sign In</span>
        //             </div>
        //         </Link>
        //         {/* return link */}
        //         <Link to="/login" className="header__link">
        //             {/* link does not refresh the page */}
        //             <div className="header__option">
        //                 <span className="header__optionLineOne">Returns</span>
        //                 <span className="header__optionLineTwo">& Orders</span>
        //             </div>
        //         </Link>
        //         {/* prime link */}
        //         <Link to="/login" className="header__link">
        //             {/* link does not refresh the page */}
        //             <div className="header__option">
        //                 <span className="header__optionLineOne">Your</span>
        //                 <span className="header__optionLineTwo">Prime</span>
        //             </div>
        //         </Link>
        //         {/* cart link + icon */}
        //         <Link to="/checkout" className="header__link">
        //             <div className="header__optionBasket">
        //                 {/* link does not refresh the page */}
        //                 <ShoppingBasketIcon />
        //                 <span className="header__basketCount">0</span>
        //             </div>
        //        </Link>
        //     </div>

        // </nav>

        // testing html -> css
        <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html"> <img src="../img/amalogo.png" alt="logo" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="menu_icon"><i className="fas fa-bars" /></span>
                </button>
                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/">Home</a>
                    </li>                                
                    <li className="nav-item">
                      <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signup">Sign Up</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        product
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <a className="dropdown-item" href="/product"> product list</a>
                        <a className="dropdown-item" href="/login/checkout">product checkout</a>
                        <a className="dropdown-item" href="/login/cart">shopping cart</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="hearer_icon d-flex align-items-center">
                  <a id="search_1"><i className="ti-search" /></a>
                  <a href="/login/cart">
                    <i className="flaticon-shopping-cart-black-shape" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header
