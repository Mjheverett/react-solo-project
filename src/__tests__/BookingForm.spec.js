import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App'

it('renders page title', () => {
    render(<App />);
    expect(screen.getByText('Clever Beach Condo Name')).toBeInTheDocument();
});