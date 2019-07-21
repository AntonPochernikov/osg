import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import NextFigurePreview from './NextFigurePreview.jsx';
import Settings from './Settings.jsx';
import './Stats.css';

export default function Stats({
  score,
  speed,
  gameState,
  canAdjustSpeed,
  nextFigurePreview,
  ...actions
}) {
  const buttonByState = {
    initial: {
      title: 'Start New Game',
      action: actions.startGame,
    },
    started: {
      title: 'Stop Game',
      action: actions.stopGame,
    },
    paused: {
      title: 'Stop Game',
      action: actions.stopGame,
    },
    finished: {
      title: 'Start New Game',
      action: actions.startGame,
    },
  };

  const getButtonTitle = () => buttonByState[gameState].title;

  const handleGameButton = useCallback(
    (e) => {
      // blur focus to use [space] in game
      e.target.blur();
      buttonByState[gameState].action()
    },
    [gameState, buttonByState],
  );

  return (
    <div className="tetris-stats">
      <h2 className="tetris-stats__title">Game Stats</h2>
      <NextFigurePreview grid={nextFigurePreview} />

      <Settings
        speed={speed}
        score={score}
        incSpeed={actions.increaseGameSpeed}
        decSpeed={actions.decreaseGameSpeed}
        canAdjustSpeed={canAdjustSpeed}
      />

      <button className="tetris-stats__game-button" onClick={handleGameButton}>
        {getButtonTitle()}
      </button>
    </div>
  );
};

Stats.propTypes = {
  gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
  speed: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  nextFigurePreview: PropTypes.array.isRequired,
  canAdjustSpeed: PropTypes.bool.isRequired,
};

Stats.defaultProps = {
  gameState: 'initial',
  speed: 1,
  score: 0,
  nextFigurePreview: [],
  canAdjustSpeed: true,
};
