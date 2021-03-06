import React, { Component } from 'react';
import { auth, provider } from '../../firebase';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button, Title } from 'bloomer'
import 'bulma/css/bulma.css';

class Header extends Component {
    state = {
        user: null,
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } 
        });
    }

    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                user: null
                });
            });
    }
    login() {
        auth.signInWithPopup(provider) 
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    render() {
        return (
            <div className="header">
                <div className="header-nav">
                    <Title className="navbar-title">Beach Rental</Title>
                </div>
                <div className="header-nav">
                    <Link to="/" className="link">
                        Home
                    </Link>
                    <Link to="/booking" className="link" data-testid="bookingButton">
                        Booking
                    </Link>
                    {this.state.user ?
                        <>
                            <img src={this.state.user.photoURL} className="user-profile" alt="user profile" />
                            <Button isSize='small' className="loginButton" onClick={this.logout.bind(this)}>Log Out</Button>
                        </>
                        :
                        <Button isSize='small' className="loginButton" onClick={this.login.bind(this)}>Log In</Button>              
                    }
                </div>
            </div>
        )
    }
}

export default Header; 