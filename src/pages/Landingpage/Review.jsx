import React from 'react'
// import motion from 'motion'
import Card from './Card'

const Review = () => {
    // <motion.div />
  return (
    <div>
      <h1>What our Customers Say</h1>

      <div>
        {/* use carousel from antd */}
        <Card
          src={''}
          name={'Ajayi Boluwatife'}
          text={'lorem ipsum djdsjkdsdffsa'}
        />
        <Card
          src={''}
          name={'Ajayi Boluwatife'}
          text={'lorem ipsum djdsjkdsdffsa'}
        />
        <Card
          src={''}
          name={'Ajayi Boluwatife'}
          text={'lorem ipsum djdsjkdsdffsa'}
        />
      </div>
      
    </div>
  )
}

export default Review