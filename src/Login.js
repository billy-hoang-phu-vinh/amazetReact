import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div>
        <section className="login_part section_padding " style={{ "padding": "60px" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="login_part_text">
                  <div className="login_part_text_iner">
                    <h2>New to our Shop?</h2>
                    <p>There are advances being made in science and technology
              everyday, and a good example of this is the</p>
                    <Link to="/signup"> <div className="btn_3 account__create">Create an Account</div></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="login_part_form">
                  <div className="login_part_form_iner">
                    <h3>Welcome Back ! <br />
              Please Sign in now</h3>
                    <form className="row contact_form" action="/login/" method="post" noValidate="novalidate">
                      <div className="col-md-12 form-group p_star">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" defaultValue="{{passW}}" />
                      </div>
                      <div className="col-md-12 form-group">
                        <div className="creat_account d-flex align-items-center">
                          <input type="checkbox" id="f-option" name="selector" />
                          <label htmlFor="f-option">Remember me</label>
                        </div>
                        <div id="legalTextRow" className="a-row a-spacing-top-medium a-size-small">
                          By continuing, you agree to Amazon's <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=918816">Conditions
                    of Use</a> and <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=918814">Privacy
                    Notice</a>.
                </div>
                        <button type="submit" value="submit" className="btn_3">
                          log in
                </button>
                        <a className="lost_pass" href="/">forget password?</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
