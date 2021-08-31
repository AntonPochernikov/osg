import React from 'react';
import cn from 'classnames';

import './Grid.css';

export function Grid({ grid = [], gameState = 'initial' }) {
  return (
    <div className="snake-grid-container">
      <table className="snake-grid">
        <tbody className="snake-grid__body">
          {grid.map((tr, i) => (
            <tr className="snake-grid__row" key={i}>
              {tr.map(({ state, color }, y) => {
                const cellClass = cn(
                  'snake-grid__cell',
                  `snake-grid__cell--${state}`,
                  { [`snake-grid__cell--${color}`]: color },
                );
                return <td className={cellClass} key={y} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {gameState === 'paused' && (
        <div className="snake-grid-container__paused-overlay" />
      )}
    </div>
  );
}

// Grid.propTypes = {
//   grid: PropTypes.arrayOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         state: PropTypes.oneOf(cellStates).isRequired,
//         color: PropTypes.string,
//       }),
//     ),
//   ).isRequired,
//   gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
// };
