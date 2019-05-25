import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import NextFigurePreview from './NextFigurePreview.jsx';
import GameSettings from './GameSettings.jsx';
import './GameStats.css';

const GameStats = ({
  score,
  speed,
  gameState,
  canAdjustSpeed,
  nextFigurePreview,
  ...actions
}) => {
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

  const getButtonHandler = () => buttonByState[gameState].action;

  const handleGameButton = useCallback(
    (e) => {
      // blur focus to use [space] in game
      e.target.blur();
      getButtonHandler()();
    },
    [gameState],
  );

  return (
    <div className="tetris-game-stats">
      <h2 className="tetris-game-stats__title">Game Stats</h2>
      <NextFigurePreview board={nextFigurePreview} />

      <GameSettings
        speed={speed}
        score={score}
        incSpeed={actions.increaseGameSpeed}
        decSpeed={actions.decreaseGameSpeed}
        canAdjustSpeed={canAdjustSpeed}
      />

      <button className="tetris-game-stats__game-button" onClick={handleGameButton}>
        {getButtonTitle()}
      </button>
    </div>
  );
};

GameStats.propTypes = {
  gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
  speed: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  nextFigurePreview: PropTypes.array.isRequired,
  canAdjustSpeed: PropTypes.bool.isRequired,
};

GameStats.defaultProps = {
  gameState: 'initial',
  speed: 1,
  score: 0,
  nextFigurePreview: [],
  canAdjustSpeed: true,
};

export default GameStats;
