import React from 'react';
import './Info.css';

const Info = () => (
  <div className="tetris-info">
    <h2 className="tetris-info__title">Game info</h2>

    <div className="tetris-info__paragraph">
      <span>Use</span>
      <div className="tetris-info__arrows" aria-label="keyboard arrows">
        <kbd className="tetris-info__arrow tetris-info__arrow--top" />
        <div className="tetris-info__arrows-bottom-layout">
          <kbd className="tetris-info__arrow tetris-info__arrow--left" />
          <kbd className="tetris-info__arrow tetris-info__arrow--down" />
          <kbd className="tetris-info__arrow tetris-info__arrow--right" />
        </div>
      </div>
      <span>to move figure</span>
    </div>

    <div className="tetris-info__paragraph">
      <span className="tetris-info__phrase">Press</span>
      <kbd className="tetris-info__key">[Space]</kbd>
      <span className="tetris-info__phrase">to rotate figure</span>
    </div>

    <div className="tetris-info__paragraph">
      <span className="tetris-info__phrase">Press</span>
      <kbd className="tetris-info__key tetris-info__key--pause">[Shift]</kbd>
      <span className="tetris-info__phrase">to pause/unpause game</span>
    </div>
  </div>
);

export default Info;
