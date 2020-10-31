import React, { Component } from 'react';
import { Columns, Column, Content, Subtitle, Title } from 'bloomer';

import firebase from '../../firebase';

class Confirmation extends Component {
    state = {
        booking: {},
        bookingNumber: '',
    }

    componentDidMount() {
        const bookingRef = firebase.database().ref('booking');
        bookingRef.on('value', (snapshot) => {
            let booking = snapshot.val();
            let newBooking = booking[Object.keys(booking)[Object.keys(booking).length - 1]];
            console.log("new booking", newBooking)
            this.setState({
                booking: newBooking,
                bookingNumber: Object.keys(booking)[Object.keys(booking).length - 1],
            })
        })
    }

    render() {
        const { booking, bookingNumber } = this.state;

        return (
            <Columns>
                <Column>
                    <br />
                    <Title>Thanks for booking!</Title>
                    <br />
                    <Content>
                        <p>We'll send you an email shortly with the details of your stay.</p>
                    </Content>
                    <br />
                    <Subtitle>Booking Summary</Subtitle>
                    <Content>
                        <p>Booking Number: {bookingNumber}</p>
                        <p>{booking.firstName} {booking.lastName}</p>
                        <p>{booking.startDate} - {booking.endDate}</p>
                        <p>{booking.noNights} Nights</p>
                        <p>${booking.totalAmount}</p>
                    </Content>
                </Column>
            </Columns>
        )
    }
}

export default Confirmation;