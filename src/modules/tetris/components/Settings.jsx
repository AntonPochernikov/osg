import React, { useCallback } from 'react';
import config from '../constants/config';
import './Settings.css';

const { speed: { min, max } } = config;

export default function Settings({
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
    <div className="tetris-stats__settings">
      <div className="tetris-stats__speed">
        {canAdjustSpeed && (
          <button
            className="tetris-stats__speed-btn tetris-stats__speed-btn--dec"
            onClick={handleDecSpeedBtn}
            disabled={speed === min}
          />)}
        <p className="tetris-stats__speed-value">Speed: {speed}</p>
        {canAdjustSpeed && (
          <button
            className="tetris-stats__speed-btn tetris-stats__speed-btn--inc"
            onClick={handleIncSpeedBtn}
            disabled={speed === max}
          />)}
      </div>
      <div className="tetris-stats__score">
        <p className="tetris-stats__score-value">Score: {score}</p>
      </div>
    </div>
  );
};
