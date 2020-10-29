import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Booking from '../components/Booking/Booking';

it('renders page title', () => {
    render(<Booking />);
    expect(screen.getByText('Book your stay!')).toBeInTheDocument();
});

// describe('<Booking />', () => {
//     let getByTestId;

//     describe('clicking the submit button', () => {
//         let sendHandler;
        
//         beforeEach(async () => {
//             sendHandler = jest.fn().mockName('sendHandler');
//             ({ getByTestId } = render(<Booking onSend={sendHandler} />));

//             await userEvent.type(
//                 getByTestId('firstName'),
//                 'John',
//             );
//             userEvent.click(getByTestId('sendButton'));
//         });

//         it('clears the first name field', () => {
//             expect(getByTestId('firstName').value).toEqual('');
//         });

//         it('calls the send handler', () => {
//             expect(sendHandler).toHaveBeenCalledWith('New message');
//         });
//     });
// });