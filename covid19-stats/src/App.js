import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList" 

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={CountriesList} />
    </Router>
  
  );
}

export default App;
