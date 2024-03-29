import React, { useCallback, useMemo } from 'react';

import { GameButton } from 'modules/common/components/GameButton';

import { NextFigureGrid } from './NextFigureGrid';
import { Settings } from './Settings';

import './Stats.css';

export function Stats({
  score,
  speed,
  gameState,
  canAdjustSpeed,
  nextFigureGrid,
  ...actions
}) {
  const buttonByState = useMemo(() => ({
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
  }), [actions.startGame, actions.stopGame]);

  const buttonTitle = buttonByState[gameState].title;

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
      <NextFigureGrid grid={nextFigureGrid} />

      <Settings
        speed={speed}
        score={score}
        incSpeed={actions.increaseGameSpeed}
        decSpeed={actions.decreaseGameSpeed}
        canAdjustSpeed={canAdjustSpeed}
      />

      <GameButton onClick={handleGameButton}>
        {buttonTitle}
      </GameButton>
    </div>
  );
};

// Stats.propTypes = {
//   gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
//   speed: PropTypes.number.isRequired,
//   score: PropTypes.number.isRequired,
//   nextFigurePreview: PropTypes.array.isRequired,
//   canAdjustSpeed: PropTypes.bool.isRequired,
// };

Stats.defaultProps = {
  gameState: 'initial',
  speed: 1,
  score: 0,
  nextFigurePreview: [],
  canAdjustSpeed: true,
};
