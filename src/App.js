import React, { Component } from 'react';
import { auth } from './firebase';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css';
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import Confirmation from './components/Confirmation/Confirmation';
import Login from './components/Login/Login';

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
          
            <Header />
            <Switch>
              <Route exact path="/">
                <Home user={user}/>
              </Route>
              <Route path="/booking">
                <Booking />
              </Route>
              <Route path="/confirm">
                <Confirmation />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/payment">
                
              </Route>
              <Route path="*">
                <h2>PAGE NOT FOUND!</h2>
                <Link to="/">Return to Homepage</Link>
              </Route>
            </Switch>
            <Footer id='footer'>
              <Container>
                <Columns>
                  <Column>
                    <Content>
                      <p>Find us on social media:  <a className="footer-link" href="https://instagram.com"><Icon className="fab fa-instagram fa-lg"></Icon></a>  <a className="footer-link" href="https://www.facebook.com/EverettBeachProperties" target="_blank" rel="noreferrer"><Icon className="fab fa-facebook fa-lg"></Icon></a></p>
                    </Content>
                    <p>
                      Made with<Icon hasTextColor="danger" className="fa fa-heart"></Icon> by <a href="https://theoremtechnologies.co" className="footer-link">Theorem Technologies, LLC</a>
                    </p>
                  </Column>
                </Columns>
              </Container>
            </Footer>
          
        </Router>
      </div>
    );
  }
}

export default App;
