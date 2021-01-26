import React from 'react'
import Product from './Product'
import "./Home.css"
function Home() {
  return (
    <div>
      <div className="home">
        {/* test */}
        <div className="product__show">

                  {/* home row: 2 products */}
          <div className="home__product">
            <Product id="1" price={1299} title="Kendall table" image="1.jpg" rating={5} />
            <Product id="1" price={1299} title="Kendall table" image="1.jpg" rating={5} />
            <Product id="1" price={1299} title="Kendall table" image="1.jpg" rating={5} />
          </div>        





        </div>


        <div className="home__image">
          <img src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/TV/H194277_P359342_PV_FLACK_MOTION_GATEWAY_CARD_EN_1500x300_Final._CB411866681_.jpg" alt="" />
        </div>


        <div>
          <section className="banner_part">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="banner_text">
                    <div className="banner_text_iner">
                      <h2>Stay at home<br />
          We bring it to you</h2>
                      <p>free shipping over 2000 items
        </p>
                      <a href="product_list.html" className="btn_1">shop now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner_img">
              <img src="img/banner.png" alt="#" className="img-fluid" />
              <img src="img/banner_pattern.png " alt="#" className="pattern_img img-fluid" />
            </div>
          </section>
          <section className="trending_items">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section_tittle text-center">
                    <h2>Trending Items</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {'{'}{'{'}#each bestSelling{'}'}{'}'}
                <div className="col-lg-4 col-sm-6">
                  <a href="/product/{{this._id}}">
                    <div className="single_product_item">
                      <div className="single_product_item_thumb">
                        <img src="/img/{{this.product_picture}}" alt="image" className="img-fluid" />
                      </div>
                      <h3> {'{'}{'{'}this.product_name{'}'}{'}'} </h3>
                      <p>${'{'}{'{'}this.product_price{'}'}{'}'}</p>
                    </div>
                  </a></div>
                {'{'}{'{'}/each{'}'}{'}'}
              </div>
            </div>
          </section>
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
