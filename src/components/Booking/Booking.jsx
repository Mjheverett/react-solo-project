import React, { Component } from 'react';

import moment from 'moment';

import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { render } from '@testing-library/react';

import 'bulma/css/bulma.css';
import { Columns, Column, Field, Label, Control, Input, Title, Select, TextArea, Checkbox, Button } from 'bloomer';

class Booking extends Component {
    state = {
        startDate: '',
        endDate: '',
        focusedInput: '',
        firstName: '',
        lastName: '',
        noGuests: 1,
        message: '',
    }
    
    _handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
                    />
                    
                    <form>
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
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label>Number of Guests:</Label>
                            <Control>
                                <Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Select>
                            </Control>
                        </Field>

                        <Field>
                            <Label>Message/Special Instructions</Label>
                            <Control>
                                <TextArea placeholder={'Message to the Owner...'} />
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
                                <Button isLink>Submit</Button>
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