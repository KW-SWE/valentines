import React, { useState } from 'react';
import YesButton from './YesButton';
import NoButton from './NoButton';
import milkAndMochaLove from '/Users/kevin.wong/github/valentines-prank/src/assets/milk-and-mocha-love.gif';
import { noPrompts } from '../constants/prompts';
import '../App.css';

let currentPromptIndex = 0;

const ButtonInteractionHandler = () => {
  const [yesButtonSize, setYesButtonSize] = useState(100);
  const [yesButtonText, setYesButtonText] = useState('Yes');
  const [noButtonText, setNoButtonText] = useState('No');

  const handleYesClick = () => {
    if (currentPromptIndex === 0) {
      setYesButtonText('Psst click no first');
    }
    setYesButtonSize(yesButtonSize + 25);
  };

  const handleNoClick = () => {
    setYesButtonSize(yesButtonSize + 25);
    setNoButtonText(noPrompts[currentPromptIndex]);
    currentPromptIndex = (currentPromptIndex + 1) % noPrompts.length;
  };

  return (
    <div className="valentine-container">
      <img src={milkAndMochaLove} alt="Milk and Mocha Love GIF" />
      <div>
        {/* <YesButton
          yesButtonSize={yesButtonSize}
          yesButtonText={yesButtonText}
          handleYesClick={handleYesClick}
        />
        <NoButton noButtonText={noButtonText} handleNoClick={handleNoClick} /> */}
        <YesButton onClick={handleYesClick} />
        <NoButton onClick={handleNoClick} />
      </div>
    </div>
  );
};

export default ButtonInteractionHandler;
