import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/common/Header.jsx';
import Grid from './Grid.js';
import Stats from './Stats.js';
import Info from './Info.jsx';
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
      if (gameState !== 'started' && gameState !== 'paused') {
        return;
      }

      switch (e.keyCode) {
        // shift
        case 16: {
          if (gameState === 'started') {
            pauseGame();
            break;
          }
          if (gameState === 'paused') {
            resumeGame();
          }
          break;
        }
        // arrow left
        case 37: {
          if (gameState === 'started') {
            tryFigureLeft();
          }
          break;
        }
        // arrow right
        case 39: {
          if (gameState === 'started') {
            tryFigureRight();
          }
          break;
        }
        // arrow down
        case 40: {
          if (gameState === 'started') {
            tryFigureDown();
          }
          break;
        }
        // space
        case 32: {
          if (gameState === 'started') {
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
  }, [gameState, pauseGame, resumeGame, tryFigureDown, tryFigureLeft, tryFigureRight, tryRotateFigure]);

  // pause game when unmounting
  useEffect(() => () => {
    if (game.current === 'started') {
      pauseGame();
    }
  }, [pauseGame]);

  return (
    <div className="main-container">
      <Header title="Tetris" canHome />
      <main className="tetris-body">
        <Info />
        <Grid />
        <Stats />
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
