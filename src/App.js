import React, { useState } from 'react';
import './App.css';
import { noPrompts } from './constants/prompts';
import milkAndMochaLove from '/Users/kevin.wong/github/valentines-prank/src/assets/milk-and-mocha-love.gif';
import yesGif from '/Users/kevin.wong/github/valentines-prank/src/assets/yesGif.gif';
import Confetti from 'react-confetti';
import { confetti } from 'https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm';
// import ButtonInteractionHandler from './components/ButtonInteractionHandler';
// import YesButton from './components/YesButton';
// import NoButton from './components/NoButton';

let currentPromptIndex = 0;

const run = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.7,
    startVelocity: 40,
    shapes: ['heart'],
    colors: ['FFC0CB', 'FF69B4', 'FF1493', 'C71585'],
  };

  confetti({
    ...defaults,
    particleCount: 100,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 20,
    scalar: 4,
  });
};

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
      run();
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
      {showConfetti && <Confetti numberOfPieces={100} />}

      <img src={`${currImg}`} alt="Milk and Mocha Love GIF" />
      <div>
        <button
          style={{
            backgroundColor: '#00FF00',
            fontSize: `${yesButtonSize}%`,
          }}
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
