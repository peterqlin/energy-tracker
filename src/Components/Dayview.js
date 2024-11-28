import React from 'react'
import Circle from './Circle'
import Line from './Line'

const Dayview = () => {
  return (
    <div className='dayview-container'>
      <h1>Day View</h1>
      <div className='circle-container'>
        <Circle />
        <Line />
      </div>
    </div>
  )
}

export default Dayview