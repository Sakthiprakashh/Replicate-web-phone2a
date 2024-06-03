import React, { useRef, useState } from 'react';
import './Phone.css';

export default function Phone() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const phoneRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX - rotation.y);
    setStartY(event.clientY - rotation.x);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const newRotationY = event.clientX - startX;
    const newRotationX = event.clientY - startY;
    setRotation({ x: newRotationX, y: newRotationY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="phone"
      ref={phoneRef}
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div class="screen" id='phone_bg'>

      </div>
  
    </div>
  );
}; 

