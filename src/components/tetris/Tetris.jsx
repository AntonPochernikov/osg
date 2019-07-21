import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/common/Header.jsx';
import GameBoard from './GameBoard.js';
import GameStats from './GameStats.js';
import GameInfo from './GameInfo.jsx';
import './Tetris.css';

export default function Tetris({
  gameState,
  pauseGame,
  resumeGame,
  tryFigureLeft,
  tryFigureRight,
  tryFigureDown,
  tryRotateFigure,
}) {
  // use "refed" game state for key listener
  const game = useRef(gameState);
  game.current = gameState;

  useEffect(() => {
    const keydownListener = (e) => {
      if (game.current !== 'started' && game.current !== 'paused') {
        return;
      }

      switch (e.keyCode) {
        // shift
        case 16: {
          if (game.current === 'started') {
            pauseGame();
            break;
          }
          if (game.current === 'paused') {
            resumeGame();
          }
          break;
        }
        // arrow left
        case 37: {
          if (game.current === 'started') {
            tryFigureLeft();
          }
          break;
        }
        // arrow right
        case 39: {
          if (game.current === 'started') {
            tryFigureRight();
          }
          break;
        }
        // arrow down
        case 40: {
          if (game.current === 'started') {
            tryFigureDown();
          }
          break;
        }
        // space
        case 32: {
          if (game.current === 'started') {
            tryRotateFigure();
          }
          break;
        }
        default: break;
      }
    };
    document.addEventListener('keydown', keydownListener);
    return () => {
      document.removeEventListener('keydown', keydownListener);
    };
  });

  // unmount effect
  useEffect(() => () => {
    if (game.current === 'started') {
      pauseGame();
    }
  }, [pauseGame]);

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
