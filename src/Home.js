import React from 'react'
import RenderProduct from "./RenderProduct";
import "./Home.css"
import RenderBestSeller from './RenderBestSeller';
import SaleRender from './SaleRender';
function Home() {
  return (
    <div>
      <div className="home">
        {/* test */}
        {/* test */}
        <div className="container-fluid">
        <div className="home__image banner__promotion">
          <div className="banner__promo1">
          <img className="home__image_img" src="http://setgetweb.com/p/commerce9/SSZLC2_9.0.0/com.ibm.commerce.management-center.doc/images/locale/screensnap/sbact_dispromoads.png" alt="" />
          </div>
          
        </div>

        </div>
        
        <div className="product__show">
          {/* home row: 2 products */}

          {/* divide group of 4 -> round up */}
        </div>


        <div>
          <section className="banner_part">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="banner_text">
                    <div className="banner_text_iner">
                      <h2>Stay at home<br />
                          We bring it to you</h2>
                      <p>free shipping over 2000 items
        </p>
                      <div className="btn_1">shop now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner_img">
              <img src="https://images.ctfassets.net/5de70he6op10/7KotRtmFAvP7OWLTE7PHjH/93bacf07d554c2f56531e16af54a3cd4/FurnitureGateway_03_sectionals.jpg" alt="#" className="img-fluid" />
              <img src="img/banner_pattern.png " alt="#" className="pattern_img img-fluid" />
            </div>
          </section>


          <div className="trend_item">
            <h1>Trending items</h1>
          <RenderBestSeller/>
          </div>

          <h2>Explore...</h2>
          <div className="show__produc">
          <RenderProduct/>
          </div>

          <div className="sale__render" id="sale">
            <h3 >Items on Sale</h3>
          <SaleRender/>
          </div>
          <section className="feature_part section_padding">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-6">
                  <div className="feature_part_tittle">
                    <h3>We are changing keep our staff stay safe, so are you</h3>\
    </div>
                </div>
                <div className="col-lg-5">
                  <div className="feature_part_content">
                    <p>Free shipping over 2000 items.
        <br />Other online grocery retailers charge up to 26$ for delivery,
        <br />but our's free!
      </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6">
                  <div className="single_feature_part">
                    <img src="img/icon/feature_icon_1.svg" alt="#" />
                    <h4>Credit Card Support</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_feature_part">
                    <img src="img/icon/feature_icon_2.svg" alt="#" />
                    <h4>Online Order</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_feature_part">
                    <img src="img/icon/feature_icon_3.svg" alt="#" />
                    <h4>Free Delivery</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_feature_part">
                    <img src="img/icon/feature_icon_4.svg" alt="#" />
                    <h4>Product with Gift</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>


  )
}

export default Home
