import React, { Component } from 'react';
import firebase, { auth } from './firebase';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Payment from './components/Payment/Payment';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_KEY)

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <Router>
          <Elements stripe={stripePromise}>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home user={user}/>
              </Route>
              <Route path="/booking">
                <Booking />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="*">
                <h2>PAGE NOT FOUND!</h2>
                <Link to="/">Return to Homepage</Link>
              </Route>
            </Switch>
          </Elements>
        </Router>
      </div>
    );
  }
}

export default App;
