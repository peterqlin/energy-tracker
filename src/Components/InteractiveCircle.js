import React, { useState, useEffect, useRef } from 'react';
import EnergyLine from './EnergyLine';

const InteractiveCircle = () => {
  const circleRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // set the mousePosition variable whenever the cursor is moved, accounting for the offset of the circle
    // the line should point to the cursor
    const handleMoveMouse = (event) => {
      setMousePosition(() => {
        const posX = event.clientX - circlePosition.x;
        const posY = event.clientY - circlePosition.y;
        const angle = Math.atan2(-posY, posX);
        let offset = 10;
        return { x: posX - offset * Math.cos(angle), y: posY + offset * Math.sin(angle) };
      });
    };

    // when clicked, the current currsor coordinates should be saved and a static line should appear there
    const handleClick = () => {
      setIsClicked(!isClicked);
      if (isClicked) {
        setLines(prev => {
          return [...prev, mousePosition];
        });
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMoveMouse);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMoveMouse);
    };
  }, [circlePosition, mousePosition]);

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
      <div ref={circleRef} className='centered-component circle'>My Energy</div>
      {isClicked && <EnergyLine position={mousePosition} />}
      {lines.map((line, index) => (
        <EnergyLine key={index} position={line} />
      ))}
    </div>
  );
};

export default InteractiveCircle;