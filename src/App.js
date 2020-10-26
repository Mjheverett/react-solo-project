import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="*">
            <h2>PAGE NOT FOUND!</h2>
            <Link to="/">Return to Homepage</Link>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
