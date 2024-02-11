import React from 'react';

const NoButton = ({ noButtonText, handleNoClick }) => {
  <button style={{ backgroundColor: 'orange' }} onClick={handleNoClick}>
    {noButtonText}
  </button>;
};

export default NoButton;
