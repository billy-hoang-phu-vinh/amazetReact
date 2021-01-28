import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./css/footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div  className="footer__section_div">
        {/* Site footer */}
        <div id="footer__section-footer" className="footer__section"><div id="footer">
          <div className="f_mid">
            <div className="container">
              <div className="row"><div className=" col-sm-3 col-ms-6">
                <h4 className="xs-text-center">Sign Up For Newsletters</h4>
                <div className="desc">
                  Sign up for our newsletter and be the first to know. Don't worry, you may safely unsubscribe at any time.
            </div>
                <div className="email_box">
                  <form method="post" action="/contact#contact_form" id="contact_form" acceptCharset="UTF-8" className="contact-form"><input type="hidden" name="form_type" defaultValue="customer" /><input type="hidden" name="utf8" defaultValue="✓" />
                    <input type="hidden" name="contact[tags]" />
                    <input type="email" placeholder="enter your email" name="contact[email]" id="Email" className="txtbox" aria-label="your-email@example.com" />
                    <button className="btn btn-link" type="submit" value="Subscribe" name="commit" id="Subscribe"><span className="fa fa-check" /></button></form>
                </div>
                
              </div>
                <div className=" col-sm-3 col-ms-6 links">
                  <Link to="/" className="footer__link">
                    <h4>Customer Service</h4><ul><li><a className href="/pages/customer-care">Customer Care</a></li><li><a className href="/pages/delivery-setup">Delivery &amp; Setup</a></li><li><a className href="/pages/satisfaction-guarantee">Returns &amp; Exchanges</a></li><li><a className href="/pages/price-match-promise">Price Match Promise</a></li></ul>
                  </Link>
                </div>

                <div className=" col-sm-3 col-ms-6 links">
                <Link to="/" className="footer__link">

                  <h4>More To Explore</h4><ul><li><a className href="/blogs/news">Furniture.ca Blog</a></li><li><a className href="/pages/reviews">Customer Reviews</a></li><li><a className href="/pages/designer-trade-program">Designer Trade Program</a></li><li><a className="finance-page" href="/pages/flexiti-financing">Furniture.ca Financing</a></li><li>
                    <a className href="/pages/faqs">FAQ</a></li></ul>
                    </Link>

                    </div>
                <div className=" col-sm-3 col-ms-6 links">
                <Link to="/" className="footer__link">

                  <h4>Company</h4><ul><li>
                    <a className href="/pages/about-us">About Us</a></li><li><a className href="/pages/privacy-policy">Privacy Policy</a></li><li><a className href="/pages/terms-conditions">Terms &amp; Conditions </a></li><li><a className href="/account/register">Register</a></li></ul>
                    </Link>

                </div>

              </div>

            </div>
          </div>

        </div>
        </div>

      </div>
    )
  }
}
