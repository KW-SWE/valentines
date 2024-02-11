import React from 'react';

const YesButton = ({ yesButtonText, yesButtonSize, handleYesClick }) => {
  <button
    style={{ backgroundColor: 'green', fontSize: `${yesButtonSize}%` }}
    onClick={handleYesClick}
  >
    {yesButtonText}
  </button>;
};

export default YesButton;
