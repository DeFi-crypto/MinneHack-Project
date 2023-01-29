import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Pages/Home";


import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";



function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
    
      

  );
}

export default App;
