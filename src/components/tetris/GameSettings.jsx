import React, { useCallback } from 'react';
import { tetrisConfig } from 'constants/config.js';
import './GameSettings.css';

const { speed: { min, max } } = tetrisConfig;

export default function GameSettings ({
  speed,
  score,
  canAdjustSpeed,
  incSpeed,
  decSpeed,
}) {
  const handleDecSpeedBtn = useCallback(
    () => {
      decSpeed();
    },
    [decSpeed],
  );
  const handleIncSpeedBtn = useCallback(
    () => {
      incSpeed();
    },
    [incSpeed],
  );

  return (
    <div className="tetris-game-stats__settings">
      <div className="tetris-game-stats__speed">
        {canAdjustSpeed && (
          <button
            className="tetris-game-stats__speed-btn tetris-game-stats__speed-btn--dec"
            onClick={handleDecSpeedBtn}
            disabled={speed === min}
          />)}
        <p className="tetris-game-stats__speed-value">Speed: {speed}</p>
        {canAdjustSpeed && (
          <button
            className="tetris-game-stats__speed-btn tetris-game-stats__speed-btn--inc"
            onClick={handleIncSpeedBtn}
            disabled={speed === max}
          />)}
      </div>
      <div className="tetris-game-stats__score">
        <p className="tetris-game-stats__score-value">Score: {score}</p>
      </div>
    </div>
  );
};
