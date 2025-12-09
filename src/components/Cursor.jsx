import React, { useEffect, useState, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail with refined color flow
      // Use a slower, smoother hue cycle for a premium feel
      const time = Date.now() / 20;
      const hue = (time % 360); 
      
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        hue: hue
      };
      
      setTrails(prev => [...prev.slice(-25), newTrail]); // Longer trail for better flow
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, .clickable, input, textarea").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHovered(true));
        el.addEventListener("mouseout", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    // Cleanup trails periodically
    const interval = setInterval(() => {
      setTrails(prev => prev.slice(1));
    }, 40); // Slightly faster cleanup for smooth animation

    return () => {
      removeEventListeners();
      clearInterval(interval);
    };
  }, []);

  const cursorClasses = `cursor ${hidden ? "cursor--hidden" : ""} ${clicked ? "cursor--clicked" : ""} ${linkHovered ? "cursor--link-hovered" : ""}`;

  return (
    <>
      {trails.map((trail, index) => (
        <div 
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            // Use HSL with high saturation and slightly lighter lightness for "glowing" effect
            backgroundColor: `hsl(${trail.hue}, 90%, 60%)`, 
            opacity: (index + 1) / trails.length * 0.5, // Max opacity 0.5 for transparency
            transform: `translate(-50%, -50%) scale(${(index + 1) / trails.length})`,
            filter: `blur(${2 + (trails.length - index) * 0.2}px)` // Dynamic blur for "tail" effect
          }}
        />
      ))}
      <div
        ref={cursorRef}
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
