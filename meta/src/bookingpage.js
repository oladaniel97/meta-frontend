import React from 'react'
import BookingForms from './bookingforms'
import Footer from './footer'
import Nav from './nav'

function BookingPage() {
  return (
    <div>
      <Nav/>
      <h1 className='book'>Reserve a Table</h1>
      <BookingForms/>
      <Footer/>
    </div>
  )
}

export default BookingPage