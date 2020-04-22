import React from "react";

const Contact = () => {
  return (

  <div className="container">
    <div className="register">
      <div className="login-bg" />
      <div className="login-content">
        <div className="login-box">
          <div className="login-header">
            <h3>Create New Account</h3>
            <p>Complete this simple form to register.</p>
          </div>
          <div className="login-body">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Repeat password" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="exampleFirstName" placeholder="Firstname " />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="exampleLastName" placeholder="Lastname" />
              </div>
              <div className="custom-control custom-checkbox form-group">
                <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                <label className="custom-control-label" htmlFor="exampleCheck1">
                  I agree to <a href="#" data-toggle="modal" data-target="#exampleModalCenter">Terms &amp; Conditions</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p className="m-t-sm">Already have an account? <a href="login.html">Login</a></p>
          </div>
          <div className="login-footer">
            <p></p>
          </div>
        </div>
      </div>
   
    </div>
  </div>


  );
};
export default Contact;
