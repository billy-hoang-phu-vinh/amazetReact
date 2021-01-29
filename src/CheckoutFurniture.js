
import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import CheckoutSubTotal from './Subcomponent/CheckoutSubTotal.js'
function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromcart = () => {
    // remove the item from the cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
      }
    //calculate subtotal
    let subtotal = 0;
    cart.map(item => (
        subtotal+=item.price
    ))
    let subtotal_tax = ((subtotal+12)*1.13).toFixed(2);
  return (
    <div>

      {/* breadcrumb part start*/}
      {/* breadcrumb part end*/}
      {/*================Checkout Area =================*/}
      <section className="checkout_area section_padding">
        <div className="container">
          <div className="cupon_area">
            <div className="check_title">
              <h2>
                Have a coupon?
            <a >Click here to enter your code</a>
              </h2>
            </div>
            <input type="text" placeholder="Enter coupon code" />
            <a className="tp_btn" >Apply Coupon</a>
          </div>
          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form className="row contact_form" action="#" method="post" noValidate="novalidate">
                  <div className="col-md-6 form-group p_star">
                    <input type="text" className="form-control" id="first" name="name" />
                    <span className="placeholder" data-placeholder="First name" />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input type="text" className="form-control" id="last" name="name" />
                    <span className="placeholder" data-placeholder="Last name" />
                  </div>
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" id="company" name="company" placeholder="Company name" />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input type="text" className="form-control" id="number" name="number" />
                    <span className="placeholder" data-placeholder="Phone number" />
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input type="text" className="form-control" id="email" name="compemailany" />
                    <span className="placeholder" data-placeholder="Email Address" />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <select className="country_select">
                      <option value={1}>Canada</option>

                    </select>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" className="form-control" id="add1" name="add1" />
                    <span className="placeholder" data-placeholder="Address line 01" />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" className="form-control" id="add2" name="add2" />
                    <span className="placeholder" data-placeholder="Address line 02" />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input type="text" className="form-control" id="city" name="city" />
                    <span className="placeholder" data-placeholder="Town/City" />
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <select className="country_select">
                      <option value={1}>District</option>
                      <option value={2}>District</option>
                      <option value={4}>District</option>
                    </select>
                  </div>
                  <div className="col-md-12 form-group">
                    <input type="text" className="form-control" id="zip" name="zip" placeholder="Postcode/ZIP" />
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <input type="checkbox" id="f-option2" name="selector" />
                      <label htmlFor="f-option2">Create an account?</label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <h3>Shipping Details</h3>
                      <input type="checkbox" id="f-option3" name="selector" />
                      <label htmlFor="f-option3">Ship to a different address?</label>
                    </div>
                    <textarea className="form-control" name="message" id="message" rows={1} placeholder="Order Notes" defaultValue={""} />
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li>
                      <a >Product
                    <span>Total</span>
                      </a>
                    </li>
                    {cart.map(item => (
                      <CheckoutSubTotal
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                      />
                    ))}
                    {/* <li>
                  <a className="checkout_item" href="#1">Fresh Blackberry
                    <span className="middle">x 02</span>
                    <span className="last">$720.00</span>
                  </a>
                </li> */}

                  </ul>
                  <ul className="list list_2">
                    <li>
                      <a >Subtotal
                    <span>${subtotal}</span>
                      </a>
                    </li>
                    <li>
                      <a >Shipping
                    <span>Flat rate: $12.00</span>
                      </a>
                    </li>
                    <li>
                      <a >Total (Tax +13%)
                    <span>${subtotal_tax}</span>
                      </a>
                    </li>
                  </ul>
                  <div className="payment_item">
                    <div className="radion_btn">
                      <input type="radio" id="f-option5" name="selector" />
                      <label htmlFor="f-option5">Check payments</label>
                      <div className="check" />
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store Town,
                      Store State / County, Store Postcode.
                </p>
                  </div>
                  <div className="payment_item active">
                    <div className="radion_btn">
                      <input type="radio" id="f-option6" name="selector" />
                      <label htmlFor="f-option6">Paypal </label>
                      <img src="img/product/single-product/card.jpg" alt="" />
                      <div className="check" />
                    </div>
                    <p>
                      Please send a check to Store Name, Store Street, Store Town,
                      Store State / County, Store Postcode.
                </p>
                  </div>
                  <div className="creat_account">
                    <input type="checkbox" id="f-option4" name="selector" />
                    <label htmlFor="f-option4">I’ve read and accept the </label>
                    <a >terms &amp; conditions*</a>
                  </div>
                  <a className="btn_3" >Proceed to Paypal</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default CheckoutProduct
