import React from 'react';

const EnergyLine = ({ position }) => {
  return (
    <div className='centered-component line-container'>
      <svg>
        <line
          x1={0}
          y1={0}
          x2={position.x}
          y2={position.y}
          stroke='black'
          strokeWidth='20'
        />
      </svg>
    </div>
  );
};

export default EnergyLine;