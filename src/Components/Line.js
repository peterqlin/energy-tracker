import React, { useState, useEffect } from 'react';

const Line = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMoveMouse = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMoveMouse);
    return () => {
      window.addEventListener('mousemove', handleMoveMouse);
    };
  }, []);
  console.log(mousePosition.x, mousePosition.y)

  return (
    <div className='line-container'>
      <svg>
        <line className='line'
          x1={0}
          y1={0}
          x2={mousePosition.x - 750}
          y2={mousePosition.y - 350}
          stroke='black'
          strokeWidth='5'
        />
      </svg>
    </div>
  );
};

export default Line;