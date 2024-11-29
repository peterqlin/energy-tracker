import React, { useState, useEffect, useRef } from 'react';

const InteractiveCircle = () => {
  const circleRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // set the mousePosition variable whenever the cursor is moved, accounting for the offset of the circle
    // the line should point to the cursor
    const handleMoveMouse = (event) => {
      setMousePosition(() => {
        const angle = Math.atan(event.clientY, event.clientX);
        console.log(angle);
        let offset = 10;
        if (event.clientY - circlePosition.y < 0) {
          offset *= -1;
        }
        return { x: event.clientX - circlePosition.x - offset * Math.cos(angle), y: event.clientY - circlePosition.y - offset * Math.sin(angle) };
      });
    };

    window.addEventListener('mousemove', handleMoveMouse);

    return () => {
      window.removeEventListener('mousemove', handleMoveMouse);
    };
  }, [circlePosition]);

  useEffect(() => {
    // make it so resizing the window does not offset where the line points to
    const handleResize = () => {
      const boundingRect = circleRef.current.getBoundingClientRect();
      const circleX = (boundingRect['left'] + boundingRect['right']) / 2;
      const circleY = (boundingRect['top'] + boundingRect['bottom']) / 2;
      setCirclePosition({ x: circleX, y: circleY });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='interactive-circle-container'>
      <div ref={circleRef} className='centered-component circle'></div>
      <div className='centered-component line-container'>
        <svg>
          <line
            x1={0}
            y1={0}
            x2={mousePosition.x}
            y2={mousePosition.y}
            stroke='black'
            strokeWidth='20'
          />
        </svg>
      </div>
    </div>
  );
};

export default InteractiveCircle;