import React from 'react';

const GameSettings = ({ speed, score }) => (
  <div className='tetris-game-stats__settings'>
    <p className='tetris-game-stats__paragraph'>
      Speed: {speed}
    </p>
    <p className='tetris-game-stats__paragraph'>
      Score: {score}
    </p>
  </div>
);

export default GameSettings;
