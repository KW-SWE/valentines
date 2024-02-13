import React, { useState } from 'react';
import './App.css';
import { noPrompts } from './constants/prompts';
import milkAndMochaLove from '/Users/kevin.wong/github/valentines-prank/src/assets/milk-and-mocha-love.gif';
import yesGif from '/Users/kevin.wong/github/valentines-prank/src/assets/yesGif.gif';
import Confetti from 'react-confetti';
// import ButtonInteractionHandler from './components/ButtonInteractionHandler';
// import YesButton from './components/YesButton';
// import NoButton from './components/NoButton';

let currentPromptIndex = 0;

const App = () => {
  const [yesButtonSize, setYesButtonSize] = useState(100);
  const [yesButtonText, setYesButtonText] = useState('Yes');
  const [noButtonText, setNoButtonText] = useState('No');
  const [currImg, setCurrImg] = useState(milkAndMochaLove);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYesClick = () => {
    if (currentPromptIndex === 0) {
      setYesButtonText('Psst click no first');
    }

    if (currentPromptIndex === noPrompts.length) {
      setCurrImg(yesGif);
      setShowConfetti(true);
    }
    console.log(currentPromptIndex);
  };

  const handleNoClick = () => {
    if (currentPromptIndex === noPrompts.length) {
      return; // Disable further clicks on the No button
    }

    setYesButtonSize(yesButtonSize + 20);
    setNoButtonText(noPrompts[currentPromptIndex]);

    if (currentPromptIndex === noPrompts.length - 1) {
      setTimeout(() => {
        setYesButtonText('Click me!');
      }, 700);
    }

    currentPromptIndex += 1;
    console.log(currentPromptIndex);
  };

  return (
    <div className="valentine-container">
      {showConfetti && <Confetti />}

      <img src={`${currImg}`} alt="Milk and Mocha Love GIF" />
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
