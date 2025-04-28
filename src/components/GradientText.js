import React, { useEffect, useRef } from 'react';

const GradientText = ({ children, tagName = 'h1' }) => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    // Split text into individual spans
    const text = element.innerText;
    element.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.innerText = text[i];
      span.style.transition = 'color 0.2s ease-out';
      
      // Set default color based on tag
      if (tagName.toLowerCase() === 'h2') {
        span.style.color = '#355E3B'; // Default green for H2
      }
      
      element.appendChild(span);
    }
    
    // Setup mutation observer to handle dynamic content changes
    const observer = new MutationObserver(() => {
      // Re-run the text splitting if content changes
      const updatedText = element.innerText;
      element.innerHTML = '';
      
      for (let i = 0; i < updatedText.length; i++) {
        const span = document.createElement('span');
        span.innerText = updatedText[i];
        span.style.transition = 'color 0.2s ease-out';
        
        if (tagName.toLowerCase() === 'h2') {
          span.style.color = '#355E3B';
        }
        
        element.appendChild(span);
      }
    });
    
    observer.observe(element, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, [tagName]);
  
  const Tag = tagName;
  
  return <Tag ref={textRef}>{children}</Tag>;
};

export default GradientText;