import React, { useRef } from 'react'

const Circle = () => {
  return (
    <div className='shape-container'>
      <div className='circle'></div>
      <svg>
        <line className='line'
          x1={0}
          y1={0}
          x2={100}
          y2={100}
          stroke='black'
          strokeWidth='5'
        />
      </svg>
    </div>
  )
}

export default Circle