import React, { useEffect, useState, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  // Mouse position (immediate)
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  // Ring position (delayed)
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  // Use refs for mutable values to avoid re-renders in the animation loop variables
  const mousePosRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      mousePosRef.current = { x: clientX, y: clientY };
      setMousePos({ x: clientX, y: clientY });
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Link hover detection
    const handleLinkHover = (isHovering) => setLinkHovered(isHovering);
    
    // We'll use event delegation for better performance or just simple checking on move
    // simpler approach: re-attach listeners to generic interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .clickable, input, textarea, select");
    interactiveElements.forEach(el => {
      el.addEventListener("mouseenter", () => handleLinkHover(true));
      el.addEventListener("mouseleave", () => handleLinkHover(false));
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener("mouseenter", () => handleLinkHover(true));
        el.removeEventListener("mouseleave", () => handleLinkHover(false));
      });
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Animation Loop for the Smooth Ring
  useEffect(() => {
    const animateRing = () => {
      setRingPos(prevRingPos => {
        // Linear interpolation (Lerp) for smoothness
        // Formula: current + (target - current) * fraction
        // Increased speed to 0.35 to keep the ring closer to the dot (prevents "escaping")
        const dx = mousePosRef.current.x - prevRingPos.x;
        const dy = mousePosRef.current.y - prevRingPos.y;
        
        return {
          x: prevRingPos.x + dx * 0.35, 
          y: prevRingPos.y + dy * 0.35
        };
      });
      
      requestRef.current = requestAnimationFrame(animateRing);
    };
    
    requestRef.current = requestAnimationFrame(animateRing);
    
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const cursorClasses = `cursor-wrapper ${hidden ? "cursor--hidden" : ""} ${clicked ? "cursor--clicked" : ""} ${linkHovered ? "cursor--link-hovered" : ""}`;

  return (
    <div className={cursorClasses}>
      {/* The trailing ring */}
      <div 
        className="cursor-ring"
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`
        }} 
      />
      {/* The main dot */}
      <div 
        className="cursor-dot"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />
    </div>
  );
};

export default Cursor;
