import React from 'react';

const EnergyLine = ({ position, duration }) => {
  return (
    <>
      <div className='centered-component tooltip'>
        <svg>
          <g transform='translate(-75,-25)'>
            <rect className='label-rect' width={150} height={50} x={3 * position.x / 4} y={3 * position.y / 4} />
          </g>
          <text className='label-text' x={3 * position.x / 4} y={3 * position.y / 4}>{`${duration.toFixed(2)} hours`}</text>
        </svg>
      </div>
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
    </>
  );
};

export default EnergyLine;