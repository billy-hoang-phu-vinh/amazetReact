import React from 'react'
// import { Link } from 'react-router-dom'
import './SubH.css'
import { useStateValue } from "./StateProvider";
//import 

function Header() {
  //khoi tao gia tri
  const [{ cart }] = useStateValue();
  // const [{ cart }, dispatch] = useStateValue();
  console.log(`show array ne:`);
  console.log(cart);//chi chay mot lan
  return (

    <nav className="header_sub">
      {/* logo */}


      <header className="main_menu home_menu sub__header">
        <div className="subheader_main_menu">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                {/* fix later: button (hamburger menu) for mobile display */}

                <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {/* bath */}
                    <li className="nav-item dropdown">
                      <div className="nav-link dropdown__fixing" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bath Room
                      </div>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="max__menu"> 
                          <div className="dropdown_bath_left">
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
                          <div className="dropdown_bath_right">
                              <img src="https://cdn.vox-cdn.com/thumbor/99siZ3TRLFgkOPhDFvJCgV8WUgA=/0x0:3024x2016/920x613/filters:focal(1271x767:1753x1249):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65895351/12_2014ba_bath_0505_oldhouse_0310.7.jpg" alt=""/>
                          </div>
 
                        </div>

                      </div>
                    </li>
                    {/* living room */}
                    <li className="nav-item dropdown">
                      <div className="nav-link dropdown__fixing" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Living Room
                      </div>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="max__menu"> 
                          <div className="dropdown_bath_left">
                                <div className="DropDown_bath"><div className="DropDown_bath_element DropDown_columnTitle_ec" >
                                  Living Room &amp; Furniture</div>
                                  <div className="DropDown_bath_element" >Sofas</div>
                                  <div  className="DropDown_bath_element" >Sectionals</div>
                                  <div className="DropDown_bath_element" >Loveseats</div>
                                  <div className="DropDown_bath_element" >Living Room Sets</div>
                                  <div className="DropDown_bath_element" >Coffee Tables</div>
                                  <div className="DropDown_bath_element" >TV Stands</div>
                                  <div className="DropDown_bath_element" >Media Storage Furniture</div></div>
                          </div>
                          <div className="dropdown_bath_right">
                              <img src="https://cdn.vox-cdn.com/thumbor/99siZ3TRLFgkOPhDFvJCgV8WUgA=/0x0:3024x2016/920x613/filters:focal(1271x767:1753x1249):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65895351/12_2014ba_bath_0505_oldhouse_0310.7.jpg" alt=""/>
                          </div>
 
                        </div>

                      </div>
                    </li>
                    {/* dining room */}
                    <li className="nav-item dropdown">
                      <div className="nav-link dropdown__fixing" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dining Room
                      </div>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="max__menu"> 
                          <div className="dropdown_bath_left">
                                <div className="DropDown_bath"><div className="DropDown_bath_element DropDown_columnTitle_ec" >
                                  Dining &amp; Furniture</div>
                                  <div className="DropDown_bath_element" >Dining Tables &amp; Seating</div>
                                  <div  className="DropDown_bath_element" >Bar Furniture</div>
                                  <div className="DropDown_bath_element" >Kitchen Islands &amp; Carts</div>
                                  <div className="DropDown_bath_element" >Small Space Kitchens</div>
                                  <div className="DropDown_bath_element" >Wine Racks</div>
                                  <div className="DropDown_bath_element" >Baker Racks</div>
                                  <div className="DropDown_bath_element" >Display</div></div>
                          </div>
                          <div className="dropdown_bath_right">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dunrobin_Castle_-_Dining_room.jpg/800px-Dunrobin_Castle_-_Dining_room.jpg" alt=""/>
                          </div>
 
                        </div>

                      </div>
                    </li>
                    
                    {/* Lighting */}
                    <li className="nav-item dropdown">
                      <div className="nav-link dropdown__fixing" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Lighting
                      </div>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="max__menu"> 
                          <div className="dropdown_bath_left">
                                <div className="DropDown_bath"><div className="DropDown_bath_element DropDown_columnTitle_ec" >
                                  Dining &amp; Furniture</div>
                                  <div className="DropDown_bath_element" >Dining Tables &amp; Seating</div>
                                  <div  className="DropDown_bath_element" >Bar Furniture</div>
                                  <div className="DropDown_bath_element" >Kitchen Islands &amp; Carts</div>
                                  <div className="DropDown_bath_element" >Small Space Kitchens</div>
                                  <div className="DropDown_bath_element" >Wine Racks</div>
                                  <div className="DropDown_bath_element" >Baker Racks</div>
                                  <div className="DropDown_bath_element" >Display</div></div>
                          </div>
                          <div className="dropdown_bath_right">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dunrobin_Castle_-_Dining_room.jpg/800px-Dunrobin_Castle_-_Dining_room.jpg" alt=""/>
                          </div>
 
                        </div>

                      </div>
                    </li>
                    {/* Kitchen */}
                    <li className="nav-item dropdown">
                      <div className="nav-link dropdown__fixing" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Kitchen
                      </div>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="max__menu"> 
                          <div className="dropdown_bath_left">
                                <div className="DropDown_bath"><div className="DropDown_bath_element DropDown_columnTitle_ec" >
                                  Dining &amp; Furniture</div>
                                  <div className="DropDown_bath_element" >Dining Tables &amp; Seating</div>
                                  <div  className="DropDown_bath_element" >Bar Furniture</div>
                                  <div className="DropDown_bath_element" >Kitchen Islands &amp; Carts</div>
                                  <div className="DropDown_bath_element" >Small Space Kitchens</div>
                                  <div className="DropDown_bath_element" >Wine Racks</div>
                                  <div className="DropDown_bath_element" >Baker Racks</div>
                                  <div className="DropDown_bath_element" >Display</div></div>
                          </div>
                          <div className="dropdown_bath_right">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dunrobin_Castle_-_Dining_room.jpg/800px-Dunrobin_Castle_-_Dining_room.jpg" alt=""/>
                          </div>
 
                        </div>

                      </div>
                    </li>
                    {/* Baby & Kids */}
                    <li className="nav-item dropdown">
                      <div className="nav-link dropdown__fixing" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Baby & Kids
                      </div>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                        <div className="max__menu"> 
                          <div className="dropdown_bath_left">
                                <div className="DropDown_bath"><div className="DropDown_bath_element DropDown_columnTitle_ec" >
                                  Dining &amp; Furniture</div>
                                  <div className="DropDown_bath_element" >Dining Tables &amp; Seating</div>
                                  <div  className="DropDown_bath_element" >Bar Furniture</div>
                                  <div className="DropDown_bath_element" >Kitchen Islands &amp; Carts</div>
                                  <div className="DropDown_bath_element" >Small Space Kitchens</div>
                                  <div className="DropDown_bath_element" >Wine Racks</div>
                                  <div className="DropDown_bath_element" >Baker Racks</div>
                                  <div className="DropDown_bath_element" >Display</div></div>
                          </div>
                          <div className="dropdown_bath_right">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Dunrobin_Castle_-_Dining_room.jpg/800px-Dunrobin_Castle_-_Dining_room.jpg" alt=""/>
                          </div>
 
                        </div>

                      </div>
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
