// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import BookingForms from './bookingforms';

test('Renders the BookingForm heading', () => {
    render(<BookingForms />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})