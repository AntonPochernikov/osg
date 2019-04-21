import React from 'react';
import PropTypes from 'prop-types';
import NextFigurePreview from './NextFigurePreview.jsx';
import GameSettings from './GameSettings.jsx';
import './GameStats.css';

const GameStats = ({
  score,
  speed,
  gameState,
  nextFigurePreview,
  ...actions
}) => {
  const buttonByState = {
    initial: {
      title: 'Start New Game',
      action: actions.startTetrisGame,
    },
    started: {
      title: 'Stop Game',
      action: actions.stopTetrisGame,
    },
    paused: {
      title: 'Stop Game',
      action: actions.stopTetrisGame,
    },
    finished: {
      title: 'Start New Game',
      action: actions.startTetrisGame,
    },
  };

  const getButtonTitle = () => buttonByState[gameState].title;

  const getButtonHandler = () => buttonByState[gameState].action;

  const handleGameButton = (e) => {
    // blur focus to use space in game
    e.target.blur();
    getButtonHandler()(e);
  };

  return (
    <div className='tetris-game-stats'>
      <h2 className='tetris-game-stats__title'>Game Stats</h2>
      <NextFigurePreview board={nextFigurePreview} />

      <GameSettings
        speed={speed}
        score={score}
        incSpeed={actions.increaseTetrisGameSpeed}
        decSpeed={actions.decreaseTetrisGameSpeed}
      />

      <button className='tetris-game-stats__game-button' onClick={handleGameButton}>
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
};

GameStats.defaultProps = {
  gameState: 'initial',
  speed: 1,
  score: 0,
  nextFigurePreview: [],
};

export default GameStats;
