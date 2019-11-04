import React from 'react';
import ArrowKeys from 'modules/common/components/ArrowKeys';
import KeyboardKey from 'modules/common/components/KeyboardKey';
import './Info.css';

export default function Info() {
  return (
    <div className="snake-info">
      <h2 className="snake-info__title">Game info</h2>

      <div className="snake-info__paragraph">
        <span className="snake-info__phrase">Use</span>
        <ArrowKeys />
        <span className="snake-info__phrase">to move</span>
      </div>

      <div className="snake-info__paragraph">
        <span className="snake-info__phrase">Press</span>
        <KeyboardKey name="Shift" className="snake-info__info-key" />
        <span className="snake-info__phrase">to pause/unpause game</span>
      </div>
    </div>
  );
}
