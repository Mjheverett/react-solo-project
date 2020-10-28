import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../firebase';

import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import 'bulma/css/bulma.css';
import { Columns, Column, Field, Label, Control, Input, Title, Select, TextArea, Button } from 'bloomer';

class Booking extends Component {
    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        firstName: '',
        lastName: '',
        noGuests: "1",
        message: '',
        startDateString: '',
        endDateString: '',
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
            message: this.state.message
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
        })
    }

    _handleDates = () => {
        console.log("handle dates called");
        setTimeout(() => {
            const startDateString = this.state.startDate._d;
            const endDateString = this.state.endDate._d;
            this.setState({
                startDateString,
                endDateString,
            })
        }, 1000);
    }

    _dateTest = (startDate, endDate) => {
        console.log("start, end", startDate, endDate)
    }

    render() {

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
                    
                    <form onSubmit={this._handleSubmit.bind(this)}>
                        <br />
                        <Field>
                            <Label>First Name</Label>
                            <Control>
                                <Input 
                                    type="text" 
                                    name="firstName" 
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
                                <Button isLink type="submit">Submit Booking</Button>
                            </Control>
                            <Control>
                                <Button isColor='danger'>Cancel</Button>
                            </Control>
                        </Field>
                    </form>
                    <br />
                    <Link to="/payment">Go to Payment Page</Link>
                </Column>
            </Columns>
        )
    }
}

export default Booking;