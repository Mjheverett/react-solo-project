import React, { Component } from 'react';

import firebase from '../../firebase';

import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import 'bulma/css/bulma.css';
import { Columns, Column, Field, Label, Control, Input, Title, Select, TextArea, Checkbox, Button } from 'bloomer';

class Booking extends Component {
    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        firstName: '',
        lastName: '',
        noGuests: 1,
        message: '',
        startDateString: '',
        endDateString: '',
    }
    
    _handleChange = (e) => {
        console.log("date", this.state.startDate._d)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        const newStartDate = this.state.startDate._d;
        const newEndDate = this.state.endDate._d;
        this.setState({
            startDateString: newStartDate,
            endDateString: newEndDate,
        })
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
            noGuests: 1,
            message: '',
        })
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
                                    placeholder='Text Input'
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
                                    placeholder='Text Input'
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
                                    <option value={1}>1</option>
                                    <option value="2">2</option>
                                    <option value={3}>3</option>
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
                                    required={true}
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label>Terms and Conditions</Label>
                            <Control>
                                <Checkbox> I agree </Checkbox>
                            </Control>
                        </Field>

                        <Field isGrouped='centered'>
                            <Control>
                                <Button isLink type="submit">Submit</Button>
                            </Control>
                            <Control>
                                <Button isColor='danger'>Cancel</Button>
                            </Control>
                        </Field>
                    </form>
                </Column>
            </Columns>
        )
    }
}

export default Booking;