import React, { useState } from 'react';
import './App.css';
import YesButton from './components/YesButton';
import NoButton from './components/NoButton';

import milkAndMochaLove from '/Users/kevin.wong/github/valentines-prank/src/assets/milk-and-mocha-love.gif';
import { noPrompts } from './constants/prompts';
import ButtonInteractionHandler from './components/ButtonInteractionHandler';

let currentPromptIndex = 0;

const App = () => {
  const [yesButtonSize, setYesButtonSize] = useState(100);
  const [yesButtonText, setYesButtonText] = useState('Yes');
  const [noButtonText, setNoButtonText] = useState('No');
  // const [noButtonPosition, setNoButtonPosition] = useState({
  //   top: '50%',
  //   left: '50%',
  // });

  const handleYesClick = () => {
    if (currentPromptIndex === 0) {
      setYesButtonText('Psst click no first');
    } else if (currentPromptIndex === noPrompts.length - 1) {
      setYesButtonText('Ok fine, press the green button!');
    }
    setYesButtonSize(yesButtonSize + 25);
  };

  const handleNoClick = () => {
    setYesButtonSize(yesButtonSize + 25);
    setNoButtonText(noPrompts[currentPromptIndex]);
    currentPromptIndex =
      (currentPromptIndex + 1) %
      (noPrompts.length === currentPromptIndex + 1 ? 19 : noPrompts.length);
    console.log(currentPromptIndex);
    // const top = Math.random() * window.innerHeight;
    // const left = Math.random() * window.innerWidth;
    // setNoButtonPosition({ top: `${top}px`, left: `${left}px` });
  };

  return (
    <div className="valentine-container">
      <img src={milkAndMochaLove} alt="Milk and Mocha Love GIF" />
      <div>
        <button
          style={{ backgroundColor: 'green', fontSize: `${yesButtonSize}%` }}
          onClick={handleYesClick}
        >
          {yesButtonText}
        </button>
        <button
          style={{
            backgroundColor: 'red',
            // position: 'absolute',
            // top: noButtonPosition.top,
            // left: noButtonPosition.left,
          }}
          onClick={handleNoClick}
        >
          {noButtonText}
        </button>
      </div>
    </div>
  );
};

export default App;
