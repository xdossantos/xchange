/*index.jsx*/
import React from "react";
//Functional Component
import { NavLink } from "react-router-dom";
// add background image component

//var isLoggedIn ​=​ ​true;

const Navigation = () => {

  return (
    // background Image could be added here.
    <div className="container justify-content-center">

                <ul class="nav">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#"> <NavLink to="/">Home</NavLink></a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="#">  <NavLink to="/about">About</NavLink></a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" href="#">   <NavLink to="/product">Product</NavLink></a>
                                            </li>

                                        
                                           
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">  <NavLink to="/contact">Register</NavLink></a>
                                            </li>
                    </ul>

   {/* <p>   The user is ​<b>​{​isLoggedIn ​?​ 'currently' ​:​ 'not'​}​</b>​ logged in /</p> */}

   <br />
    </div>






  );
};



export default Navigation;
