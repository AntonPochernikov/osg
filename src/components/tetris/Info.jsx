import React from 'react';
import './Info.css';

const Info = () => (
  <div className="tetris-game-info">
    <h2 className="tetris-game-info__title">Game info</h2>

    <div className="tetris-game-info__paragraph">
      <span>Use</span>
      <div className="tetris-game-info__arrows" aria-label="keyboard arrows">
        <kbd className="tetris-game-info__arrow tetris-game-info__arrow--top" />
        <div className="tetris-game-info__arrows-bottom-layout">
          <kbd className="tetris-game-info__arrow tetris-game-info__arrow--left" />
          <kbd className="tetris-game-info__arrow tetris-game-info__arrow--down" />
          <kbd className="tetris-game-info__arrow tetris-game-info__arrow--right" />
        </div>
      </div>
      <span>to move figure</span>
    </div>

    <div className="tetris-game-info__paragraph">
      <span className="tetris-game-info__phrase">Press</span>
      <kbd className="tetris-game-info__key">[Space]</kbd>
      <span className="tetris-game-info__phrase">to rotate figure</span>
    </div>

    <div className="tetris-game-info__paragraph">
      <span className="tetris-game-info__phrase">Press</span>
      <kbd className="tetris-game-info__key tetris-game-info__key--pause">[Shift]</kbd>
      <span className="tetris-game-info__phrase">to pause/unpause game</span>
    </div>
  </div>
);

export default Info;
