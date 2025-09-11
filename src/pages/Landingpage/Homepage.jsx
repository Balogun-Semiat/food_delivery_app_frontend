import React from 'react'
import Herosect from './Herosect'
import Menusect from './Menusect'
import Eventsect from './Event'
import Delivery from './delivery'
import Review from './Review'

const Homepage = () => {
  return (
    <>
      <Herosect />
       <Menusect />
      <Eventsect />
      <Delivery />
      <Review />
    </>
  )
}

export default Homepage