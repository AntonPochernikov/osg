import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/common/Header.jsx';
import GameBoard from './GameBoard.js';
import GameStats from './GameStats.js';
import GameInfo from './GameInfo.jsx';
import './Tetris.css';

const Tetris = ({ gameState, ...actions }) => {
  const keydownListener = (e) => {
    // check ingame state
    if (gameState !== 'started' && gameState !== 'paused') {
      return;
    }
    switch (e.keyCode) {
      // shift
      case 16: {
        if (gameState === 'started') {
          actions.pauseGame();
          break;
        }
        if (gameState === 'paused') {
          actions.resumeGame();
        }
        break;
      }
      // arrow left
      case 37: {
        if (gameState === 'started') {
          actions.tryFigureLeft();
        }
        break;
      }
      // arrow right
      case 39: {
        if (gameState === 'started') {
          actions.tryFigureRight();
        }
        break;
      }
      // arrow down
      case 40: {
        if (gameState === 'started') {
          actions.tryFigureDown();
        }
        break;
      }
      // space
      case 32: {
        if (gameState === 'started') {
          actions.tryRotateFigure();
        }
        break;
      }
      default: break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownListener);
    return () => {
      document.removeEventListener('keydown', keydownListener);
    };
  });

  return (
    <div className='main-container'>
      <Header title='Tetris' canHome />
      <main className='game-body'>
        <GameInfo />
        <GameBoard />
        <GameStats />
      </main>
    </div>
  );
};

Tetris.propTypes = {
  gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
};

Tetris.defaultProps = {
  gamesState: 'initial',
};

export default Tetris;
