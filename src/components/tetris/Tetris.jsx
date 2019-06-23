import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/common/Header.jsx';
import GameBoard from './GameBoard.js';
import GameStats from './GameStats.js';
import GameInfo from './GameInfo.jsx';
import './Tetris.css';

const Tetris = ({ gameState, ...actions }) => {
  // use refed game state for listeners
  const game = useRef(gameState);
  game.current = gameState;

  const keydownListener = (e) => {
    // check ingame state
    if (game.current !== 'started' && game.current !== 'paused') {
      return;
    }
    switch (e.keyCode) {
      // shift
      case 16: {
        if (game.current === 'started') {
          actions.pauseGame();
          break;
        }
        if (game.current === 'paused') {
          actions.resumeGame();
        }
        break;
      }
      // arrow left
      case 37: {
        if (game.current === 'started') {
          actions.tryFigureLeft();
        }
        break;
      }
      // arrow right
      case 39: {
        if (game.current === 'started') {
          actions.tryFigureRight();
        }
        break;
      }
      // arrow down
      case 40: {
        if (game.current === 'started') {
          actions.tryFigureDown();
        }
        break;
      }
      // space
      case 32: {
        if (game.current === 'started') {
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
      if (game.current === 'started') {
        actions.pauseGame();
      }
      document.removeEventListener('keydown', keydownListener);
    };
  }, []);

  return (
    <div className="main-container">
      <Header title="Tetris" canHome />
      <main className="game-body">
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
