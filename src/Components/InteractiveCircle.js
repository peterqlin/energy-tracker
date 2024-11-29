import React, { useState, useEffect, useRef } from 'react';

const InteractiveCircle = () => {
  // line logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const circleRef = useRef();

  useEffect(() => {
    const boundingRect = circleRef.current.getBoundingClientRect();
    const circleX = (boundingRect['left'] + boundingRect['right']) / 2;
    const circleY = (boundingRect['top'] + boundingRect['bottom']) / 2;
    const handleMoveMouse = (event) => {
      setMousePosition({ x: event.clientX - circleX, y: event.clientY - circleY });
    };
    window.addEventListener('mousemove', handleMoveMouse);
    return () => {
      window.addEventListener('mousemove', handleMoveMouse);
    };
  }, []);

  return (
    <>
      <div ref={circleRef} className='circle'></div>
      <div className='line-container'>
        <svg>
          <line className='line'
            x1={0}
            y1={0}
            x2={mousePosition.x}
            y2={mousePosition.y}
            stroke='black'
            strokeWidth='5'
          />
        </svg>
      </div>
    </>
  );
};

export default InteractiveCircle;