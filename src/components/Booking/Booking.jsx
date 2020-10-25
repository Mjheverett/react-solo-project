import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Booking = () => {
    const [date, setDate] = useState(new Date());

    const _handleDateChange = (newDate) => {
        console.log("newDate", newDate);
        setDate(newDate);
    }
    
    return (
        <>
            <h4>Book your stay!</h4>
            <Calendar 
                onChange={_handleDateChange}
                selectRange={true}
                value={date}
            />
            <p>Selected dates: {moment(date[0]).format('MMMM Do YYYY')} - {moment(date[1]).format('MMMM Do YYYY')}</p>
        </>
    )
}

export default Booking;