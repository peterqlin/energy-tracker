import React from 'react'
// import Circle from './Circle'
// import Line from './Line'
import InteractiveCircle from './InteractiveCircle'

const Dayview = () => {
  return (
    <div className='dayview-container'>
      <h1>Day View</h1>
      <div className='circle-container'>
        <InteractiveCircle />
        {/* <Circle />
        <Line /> */}
      </div>
    </div>
  )
}

export default Dayview