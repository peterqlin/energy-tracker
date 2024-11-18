import React from 'react'
import Circle from './Circle'

const Dayview = () => {
  return (
    <div className='dayview-container'>
      <h1>Day View</h1>
      <div className='circle-container'>
        <ul>
          <li><Circle /></li>
          <li><Circle /></li>
          <li><Circle /></li>
        </ul>
      </div>
    </div>
  )
}

export default Dayview