import React from 'react';
import './GameInfo.css';

const GameInfo = () => (
  <div className='tetris-game-info'>
    <h2 className='tetris-game-info__title'>Game info</h2>

    <div className='tetris-game-info__paragraph'>
      <span>Use</span>
      <div className='tetris-game-info__arrows' aria-label='keyboard arrows'>
        <div className='tetris-game-info__arrow tetris-game-info__arrow--top'></div>
        <div className='tetris-game-info__arrows-bottom-layout'>
          <div className='tetris-game-info__arrow tetris-game-info__arrow--left'></div>
          <div className='tetris-game-info__arrow tetris-game-info__arrow--down'></div>
          <div className='tetris-game-info__arrow tetris-game-info__arrow--right'></div>
        </div>
      </div>
      <span>to move figure</span>
    </div>

    <div className='tetris-game-info__paragraph'>
      <span className='tetris-game-info__phrase'>Press</span>
      <div className='tetris-game-info__key'>[Space]</div>
      <span className='tetris-game-info__phrase'>to rotate figure</span>
    </div>

    <div className='tetris-game-info__paragraph'>
      <span className='tetris-game-info__phrase'>Press</span>
      <div className='tetris-game-info__key tetris-game-info__key--pause'>[Shift]</div>
      <span className='tetris-game-info__phrase'>to pause/unpause game</span>
    </div>
  </div>
);

export default GameInfo;
