import React from 'react';
import './Info.css';

const Info = () => (
  <div className="snake-info">
    <h2 className="snake-info__title">Game info</h2>

    <div className="snake-info__paragraph">
      <span className="snake-info__phrase">Use</span>
      <div className="info-arrows" aria-label="keyboard arrows">
        <kbd className="info-arrow info-arrow--top" />
        <div className="info-arrows__bottom-layout">
          <kbd className="info-arrow info-arrow--left" />
          <kbd className="info-arrow info-arrow--down" />
          <kbd className="info-arrow info-arrow--right" />
        </div>
      </div>
      <span className="snake-info__phrase">to move</span>
    </div>

    {/* <div className="snake-info__paragraph">
      <span className="snake-info__phrase">Press</span>
      <kbd className="info-key">[Space]</kbd>
      <span className="snake-info__phrase">to rotate figure</span>
    </div> */}

    <div className="snake-info__paragraph">
      <span className="snake-info__phrase">Press</span>
      <kbd className="info-key">[Shift]</kbd>
      <span className="snake-info__phrase">to pause/unpause game</span>
    </div>
  </div>
);

export default Info;
