import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import mainLogo from './logo/amazetLogo.png'
import { useStateValue } from "./StateProvider";
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import Burger from './Burger/Burger.js';
import Menu from './Menu/Menu.js';
import{useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { useOnClickOutside } from './hooks';

//test
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {
  //burger menu
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  //set temp search value
  //state = { redirect: null };
  const [{ cart }] = useStateValue();
 
  let history = useHistory();

  //get all product
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  // get data from server
  useEffect(() => {
      fetch("https://furnireactsupport.herokuapp.com/products")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result); //set item = result
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setError(error);
          }
        )
    }, [])
    if (error) {
      items=[];
    }
  return (
    <nav className="header">
      {/* logo */}
      <div className="burger_menu">
      <ThemeProvider theme={theme}>

      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} id={menuId} />
      </ThemeProvider>
      </div>


      <Link className="t1" to="/">
        <img alt="" className="header__logo" src={mainLogo} />

      </Link>
      <div className="header__search">
        {/* <input type="text" className="header__searchInput" /> */}
        {/* test autocomplete box*/}
        <div className="header_search_wrap">
          <div className="searchcomplete">
            <Autocomplete
              options={items}
              getOptionLabel={(option) => option.title}
              onChange={
                (event, value) => history.push("/item/"+value._id)
 
              }
              renderInput={(params) => <TextField {...params} label="Search item" variant="outlined" />}
            />
          </div>
          {/* <div className="searchicon">
            <Link to={search_product}>
            <SearchIcon className="header__searchIcon" />
            </Link>
          </div> */}
          {/* on change event will be dev here! */}

        </div>

      </div>

      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                {/* fix later: button (hamburger menu) for mobile display */}

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
