import React, { useEffect, useRef } from 'react';

import { Header } from 'modules/common/components/Header';

import { Grid } from '../containers/Grid';
import { Stats } from '../containers/Stats';
import { Info } from './Info';

import './Root.css';

export function Root({
  gameState = 'initial',
  pauseGame,
  resumeGame,
  checkSnakeMove,
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
            checkSnakeMove('left');
          }
          break;
        }
        // arrow up
        case 38: {
          if (gameState === 'started') {
            checkSnakeMove('up');
          }
          break;
        }
        // arrow right
        case 39: {
          if (gameState === 'started') {
            checkSnakeMove('right');
          }
          break;
        }
        // arrow down
        case 40: {
          if (gameState === 'started') {
            checkSnakeMove('down');
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
  }, [gameState, pauseGame, resumeGame, checkSnakeMove]);

  // pause game when unmounting
  useEffect(() => () => {
    if (game.current === 'started') {
      pauseGame();
    }
  }, [pauseGame]);

  return (
    <div className="main-container">
      <Header title="Snake" canHome />
      <main className="snake-body">
        <Info />
        <Grid />
        <Stats />
      </main>
    </div>
  );
}

// Root.propTypes = {
//   gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
// };
