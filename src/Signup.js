import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Signup extends Component {
    render() {
        return (
          <section className="login_part section_padding " style={{"padding":"60px"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="login_part_form">
                  <div className="login_part_form_iner">
                    <h3>Register<br />
                    </h3>
                    <form className="row contact_form" action="/signup/signUp_Form" method="post">
                      <div className="col-md-12 form-group p_star">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" defaultValue="{{password}}" />
                      </div>
                      <div className="col-md-12 form-group p_star">
                        <input type="password" className="form-control" id="password" name="password_again" placeholder="Type password again" />
                      </div>
                      <div className="col-md-12 form-group">
                        <div id="legalTextRow" className="a-row a-spacing-top-medium a-size-small">
                          By continuing, you agree to Amazon's <a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=918816">Conditions
                            of Use</a> and <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=918814">Privacy
                            Notice</a>.
                        </div>
                        <button type="submit" value="submit" className="btn_3">
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
          )
    }
}
