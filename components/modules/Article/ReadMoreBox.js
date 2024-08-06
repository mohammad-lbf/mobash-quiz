// components/ReadMoreBox.js
import React from 'react';

const ReadMoreBox = ({children , title}) => {
  // استایل‌های کامپوننت به صورت inline
  const boxStyle = {
    borderColor: '#000029',
    borderRadius: '10px',
    borderWidth: '1px',
    borderStyle: 'solid',
    
  };

  const titleStyle = {
    backgroundColor: '#29235c',
    color: '#FFFFFF',
    fontFamily:"KalamehWeb-Medium",
    fontSize:"20px",
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    padding: '15px',
  };

  const contentStyle = {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  return (
    <div style={boxStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={contentStyle}>
            {children}
      </div>
    </div>
  );
};

export default ReadMoreBox;
