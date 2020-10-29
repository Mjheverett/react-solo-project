import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../../firebase';

import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import './Booking.css'
import 'bulma/css/bulma.css';
import { Columns, Column, Content, Field, Label, Control, Input, Title, Select, Subtitle, TextArea, Button } from 'bloomer';

class Booking extends Component {
    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        firstName: '',
        lastName: '',
        noGuests: "1",
        message: '',
        startDateString: null,
        endDateString: null,
        totalAmount: 0,
        nightlyRate: 100,
        noNights: 0,
        redirectToReferrer: false,
    }
    
    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const bookingRef = firebase.database().ref('booking');
        const booking = {
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            startDate: this.state.startDateString,
            endDate: this.state.endDateString,
            guests: this.state.noGuests,
            message: this.state.message,
            totalAmount: this.state.totalAmount,
            nightlyRate: this.state.nightlyRate,
            noNights: this.state.noNights
        }
        bookingRef.push(booking);
        this.setState({
            startDate: '',
            endDate: '',
            focusedInput: '',
            firstName: '',
            lastName: '',
            noGuests: "1",
            message: '',
            startDateString: null,
            endDateString: null,
            totalAmount: 0,
            noNights: 0,
            redirectToReferrer: true,
        })
    }

    _handleDates = () => {
        
        setTimeout(() => {
            const startDateString = moment(this.state.startDate._d);
            const endDateString = moment(this.state.endDate._d);
            const noNights = endDateString.diff(startDateString, 'days');
            const totalAmount = noNights * 100;
            this.setState({
                startDateString: String(startDateString._d),
                endDateString: String(endDateString._d),
                noNights,
                totalAmount,
            })
        }, 1000);
    }

    render() {
        const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer) {
            return <Redirect to="/confirm" />
        }

        return (
            <Columns isCentered>
                <Column isSize='1/2'>
                    <br />
                    <Title isSize={4}>Book your stay!</Title>

                    <DateRangePicker
                        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        required={true}
                        onClose={this._handleDates}
                    />

                    <br />
                    <Subtitle isSize={5} className="rate-summary">Rate Summary</Subtitle>
                    <Content>
                        <p>Nightly rate: ${this.state.nightlyRate}/night</p>
                        <p>Number of nights: {this.state.noNights}</p>
                        <p>Total: ${this.state.totalAmount}</p>
                    </Content>
                    
                    <form onSubmit={this._handleSubmit.bind(this)}>
                        <br />
                        <Field>
                            <Label>First Name</Label>
                            <Control>
                                <Input 
                                    type="text" 
                                    name="firstName"
                                    data-testid="firstName"
                                    onChange={this._handleChange.bind(this)} 
                                    value={this.state.firstName} 
                                    placeholder='First Name...'
                                    required={true}
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label>Last Name</Label>
                            <Control>
                                <Input 
                                    type="text"
                                    name="lastName" 
                                    onChange={this._handleChange.bind(this)} 
                                    value={this.state.lastName} 
                                    placeholder='Last Name...'
                                    required={true}
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label>Number of Guests:</Label>
                            <Control>
                                <Select
                                    name="noGuests"
                                    onChange={this._handleChange.bind(this)} 
                                    value={this.state.noGuests}
                                    required={true}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    
                                </Select>
                            </Control>
                        </Field>

                        <Field>
                            <Label>Message/Special Instructions</Label>
                            <Control>
                                <TextArea 
                                    name="message" 
                                    onChange={this._handleChange.bind(this)} 
                                    value={this.state.message}
                                    placeholder={'Message to the Owner...'} 
                                />
                            </Control>
                        </Field>

                        {/* // Checkbox for terms */}

                        <Field isGrouped='centered'>
                            <Control>
                                <Button isLink type="submit" data-testid="submitButton">Submit Booking</Button>
                            </Control>
                            <Control>
                                <Link to="/"><Button isColor='danger'>Cancel</Button></Link>
                            </Control>
                        </Field>
                    </form>
                </Column>
            </Columns>
        )
    }
}

export default Booking;