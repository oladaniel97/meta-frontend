import { render, screen } from '@testing-library/react';
import BookingForms from './bookingforms';

test('Renders the BookingForm heading', () => {
    render(<BookingForms />);
    const headingElement = screen.getByText("reserve a table");
    expect(headingElement).toBeInTheDocument();
})
