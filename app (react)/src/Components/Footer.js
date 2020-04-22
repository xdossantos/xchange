import React from "react"; 

import 'bootstrap/dist/css/bootstrap.min.css';

import "../../src/css/custom.css"; 
import "../../src/css/admin2.css"; 
import "../../src/css/concept.css"; 
//import "../../src/css/concept.min.css"; 



function Footer(){
    return( 
      <footer className="footer" style={{backgroundColor: '#e9ecef', textAlign: 'center'}}>
      <div>
        {/* I have added an external link as required by the task */}
        <span className="text-muted"> Hyperiondev Assignment - Xola dos Santos - Made with love by <a href="http://xdode.com" target="_blank">XDODE</a> </span>
      </div>
    </footer>
)
};
export default Footer;