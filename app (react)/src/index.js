import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

import Navigation from "./Components/Navigation"; 
import Home from "./Components/Home"; 
import About from "./Components/About"; 
import Contact from "./Components/Contact"; 
import Product from "./Components/Product"; 
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Switch,

  BrowserRouter
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
        {/* The landing o navigation will be displayed on every page */}
        <div>
          <Navigation />
          {/* Navigation will show on contact */}
          <Switch>
            {/*All our Routes goes here!*/}
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/product" component={Product} />
          </Switch>
        </div>
      </BrowserRouter>
{/* 
    <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
