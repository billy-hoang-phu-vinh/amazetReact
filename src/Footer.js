import React, { Component } from 'react'
import "./css/footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div>
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
                <input type="hidden" name="contact[tags]" defaultValue="newsletter" />
                <input type="email" defaultValue placeholder="your-email@example.com" name="contact[email]" id="Email" className="txtbox" aria-label="your-email@example.com" autoCorrect="off" autoCapitalize="none" />
                <button className="btn btn-link" type="submit" value="Subscribe" name="commit" id="Subscribe"><span className="fa fa-check" /></button></form>
            </div>
            <div className="social">
              <ul><li className="facebook">
                  <a href="https://www.facebook.com/furnituredotca?fref=ts" target="_blank" title="Facebook"><span className="fa fa-facebook" /></a>
                </li><li className="pinterest">
                  <a href="https://www.pinterest.ca/furnitureca0722/" target="_blank" title="Pinterest"><span className="fa fa-pinterest" /></a>
                </li><li className="instagram">
                  <a href="https://www.instagram.com/furniture.ca/" target="_blank" title="Instagram"><span className="fa fa-instagram" /></a>
                </li></ul>
            </div>
          </div><div className=" col-sm-3 col-ms-6 links">
            <h4>Customer Service</h4><ul><li><a className href="/pages/customer-care">Customer Care</a></li><li><a className href="/pages/delivery-setup">Delivery &amp; Setup</a></li><li><a className href="/pages/satisfaction-guarantee">Returns &amp; Exchanges</a></li><li><a className href="/pages/price-match-promise">Price Match Promise</a></li></ul></div><div className=" col-sm-3 col-ms-6 links">
            <h4>More To Explore</h4><ul><li><a className href="/blogs/news">Furniture.ca Blog</a></li><li><a className href="/pages/reviews">Customer Reviews</a></li><li><a className href="/pages/designer-trade-program">Designer Trade Program</a></li><li><a className="finance-page" href="/pages/flexiti-financing">Furniture.ca Financing</a></li><li><a className href="/pages/faqs">FAQ</a></li></ul></div><div className=" col-sm-3 col-ms-6 links">
            <h4>Company</h4><ul><li><a className href="/pages/about-us">About Us</a></li><li><a className href="/pages/privacy-policy">Privacy Policy</a></li><li><a className href="/pages/terms-conditions">Terms &amp; Conditions </a></li><li><a className href="/account/register">Register</a></li></ul></div></div>
      </div>
    </div>
    
  </div>
</div>

            </div>
        )
    }
}
