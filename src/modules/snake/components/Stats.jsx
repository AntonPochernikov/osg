import React, { useCallback, useMemo } from 'react';

import { GameButton } from 'modules/common/components/GameButton';

// import Settings from './Settings';

import './Stats.css';

export function Stats({
  // score,
  // speed,
  gameState,
  // canAdjustSpeed,
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
  }) , [actions.startGame, actions.stopGame]);

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
    <div className="snake-stats">
      <h2 className="snake-stats__title">Game Stats</h2>

      {/* TODO: add settings */}

      {/* <Settings
        speed={speed}
        score={score}
        incSpeed={actions.increaseGameSpeed}
        decSpeed={actions.decreaseGameSpeed}
        canAdjustSpeed={canAdjustSpeed}
      /> */}

      <GameButton onClick={handleGameButton}>
        {getButtonTitle()}
      </GameButton>
    </div>
  );
};

// Stats.propTypes = {
//   gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
//   // speed: PropTypes.number.isRequired,
//   // score: PropTypes.number.isRequired,
//   // canAdjustSpeed: PropTypes.bool.isRequired,
// };

Stats.defaultProps = {
  gameState: 'initial',
  // speed: 1,
  // score: 0,
  // canAdjustSpeed: true,
};
