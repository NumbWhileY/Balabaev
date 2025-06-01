import React, { useState } from 'react';

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ 
      border: '1px solid #eee', 
      padding: '20px',
      margin: '20px',
      width: '200px'
    }}>
      <button 
        onClick={toggleVisibility}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        {isVisible ? 'Hide List' : 'Show List'}
      </button>
      
      <ul style={{
        visibility: isVisible ? 'visible' : 'hidden',
        opacity: isVisible ? 1 : 0,
        transition: 'visibility 0s, opacity 0.5s linear',
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Item 1</li>
        <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>Item 2</li>
        <li style={{ padding: '8px 0' }}>Item 3</li>
      </ul>
    </div>
  );
};

export default Test;