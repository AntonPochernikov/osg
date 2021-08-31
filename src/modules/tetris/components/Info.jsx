import React from 'react';

import { ArrowKeys } from 'modules/common/components/ArrowKeys';
import { KeyboardKey } from 'modules/common/components/KeyboardKey';

import './Info.css';

export function Info() {
  return (
    <div className="tetris-info">
      <h2 className="tetris-info__title">Game info</h2>

      <div className="tetris-info__paragraph">
        <span className="tetris-info__phrase">Use</span>
        <ArrowKeys />
        <span className="tetris-info__phrase">to move figure</span>
      </div>

      <div className="tetris-info__paragraph">
        <span className="tetris-info__phrase">Press</span>
        <KeyboardKey name="Space" className="tetris-info__info-key" />
        <span className="tetris-info__phrase">to rotate figure</span>
      </div>

      <div className="tetris-info__paragraph">
        <span className="tetris-info__phrase">Press</span>
        <KeyboardKey name="Shift" className="tetris-info__info-key" />
        <span className="tetris-info__phrase">to pause/unpause game</span>
      </div>
    </div>
  );
}
