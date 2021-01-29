import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import mainLogo from './logo/amazetLogo.png'
import {useStateValue} from "./StateProvider";
//import 

function Header() {
    //khoi tao gia tri
    const [{cart}, dispatch] = useStateValue();
    return (
        
        <nav className="header">
          {/* logo */}
          <Link className="t1" to="/">
                <img alt="" className="header__logo" src={mainLogo}/>
                
                  </Link>
          <div className="header__search">
            {/* on change event will be dev here! */}
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
           
            <header className="main_menu home_menu">
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
        
                  <li className="nav-item">
                    
                    <a className="nav-link sale__text" href="#sale">Sale</a>

                    </li>
                                        
                    <li className="nav-item dropdown">
                      <Link to="/login">
                      <a className="nav-link dropdown-toggle" href="/login" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My account & Order
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="dropdown-item"> Login</div>
                        <Link to="/cart">
                        <div className="dropdown-item">Your order</div>
                        </Link>
                      </div>
                      </Link>
                      
                    </li>
                   
  
                     {/* search box */}
                    
                    {/* search icon */}
                    <li className="nav-item">
                      <Link>
                      <a className="nav-link" href="/signup">
                      <div className="basket_logo">
                              {/* link does not refresh the page */}
                              <ShoppingBasketIcon />
                              <span>  </span>
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
