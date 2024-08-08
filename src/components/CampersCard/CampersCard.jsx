import React from 'react'
import Features from '../Features/Features'
import Reviews from '../Reviews/Reviews'

const CampersCard = () => {
  return (
    <div>
      <h2>CampersCard</h2>
      <div>
        <Features />
        <Reviews/>
      </div>

      <BookingForm />
      </div>
  )
}

export default CampersCard