import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import BodyContent from "./Components/BodyContent"; 

let myName = "Xola"; 

function App() {
  return ( 
    <BodyContent name={ myName} /> 

  );
}

export default App;
