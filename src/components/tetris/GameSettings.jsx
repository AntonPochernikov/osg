import React from 'react';
import './GameSettings.css';

const GameSettings = ({
  speed,
  score,
  incSpeed,
  decSpeed,
}) => {
  const handleDecSpeedBtn = (e) => {
    e.target.blur();
    decSpeed();
  };
  const handleIncSpeedBtn = (e) => {
    e.target.blur();
    incSpeed();
  };
  return (
    <div className='tetris-game-stats__settings'>
      <div className='tetris-game-stats__speed'>
        <button className='tetris-game-stats__speed-btn' onClick={handleDecSpeedBtn}>-</button>
        <p className='tetris-game-stats__speed-value'>Speed: {speed}</p>
        <button className='tetris-game-stats__speed-btn' onClick={handleIncSpeedBtn}>+</button>
      </div>
      <div className='tetris-game-stats__score'>
        <p className='tetris-game-stats__score-value'>Score: {score}</p>
      </div>
    </div>
  );
};

export default GameSettings;
