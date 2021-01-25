import React from 'react'
import { Link } from 'react-router-dom'

const notfoundpage =()=>{
    return (
        <div className="div">
            {/* create enough space for this!!! */}
            <Link to="/">
                Back to the home page
            </Link>
            <section className="login_part section_padding " style={{"padding":"60px"}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-6">
        <div className="login_part_text text-center">
          <div className="login_part_text_iner">
            <h2>New to our Shop?</h2>
            <p>There are advances being made in science and technology
              everyday, and a good example of this is the</p>
            <a href="/signup" className="btn_3">Create an Account</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="login_part_form">
          <div className="login_part_form_iner">
            <h3>You are looking something... <br />
              </h3>
              <Link to="/">
                <h4>Back to the home page</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default notfoundpage