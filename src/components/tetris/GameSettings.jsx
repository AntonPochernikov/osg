import React, { useCallback } from 'react';
import './GameSettings.css';

const GameSettings = ({
  speed,
  score,
  canAdjustSpeed,
  incSpeed,
  decSpeed,
}) => {
  const handleDecSpeedBtn = useCallback(
    () => {
      // e.target.blur();
      decSpeed();
    },
    [decSpeed],
  );
  const handleIncSpeedBtn = useCallback(
    () => {
      // e.target.blur();
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
          />)}
        <p className="tetris-game-stats__speed-value">Speed: {speed}</p>
        {canAdjustSpeed && (
          <button
            className="tetris-game-stats__speed-btn tetris-game-stats__speed-btn--inc"
            onClick={handleIncSpeedBtn}
          />)}
      </div>
      <div className="tetris-game-stats__score">
        <p className="tetris-game-stats__score-value">Score: {score}</p>
      </div>
    </div>
  );
};

export default GameSettings;
