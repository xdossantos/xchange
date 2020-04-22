import React from "react";
import Footer from "./Footer";


import 'bootstrap/dist/css/bootstrap.min.css';

import "../../src/css/custom.css"; 
import "../../src/css/admin2.css"; 
//import "../../src/css/concept.css"; 
//import "../../src/css/concept.min.css"; 



const Product = () => {
  return (
    
    <main className="container" >
         <hr />

    {/* price section beings here  */}
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Close Deals with over 200 Tech Companies</h1>
      <p className="lead">We will promote your professional company profile to our extensive database
        of South African Companies looking for your products and services. You simply choose an
        opportunity and pursue it. Choose a subscription that suites your budget.</p>
    </div>
    {/* Price Tables Begin here  */}
    <div className="card-deck mb-3 text-center">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Free</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">R 0 <small className="text-muted">/ mo</small>
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>1 users subscription</li>
            <li>0 Projects</li>
            <li>Email support</li>
            <li>Help center access</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for
            free</button>
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Pro</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">R 150 <small className="text-muted">/
              mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>All Free features</li>
            <li>3 users included</li>
            <li>5 Projects</li>
            <li>Chat and Email Support</li>
            <li>1 TB of cloud storage</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Enterprise</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">Price on Request</h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li>All Pro features</li>
            <li>&gt; 10 users included</li>
            <li>10 TB of cloud storage</li>
            <li>Unlimited Simultaneous Projects</li>
            <li>Help center access</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
        </div>
      </div>
    </div>
    <hr />

    <Footer />
  </main>

  );
};
export default Product;
