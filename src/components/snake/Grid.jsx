import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Grid.css';

const Grid = ({ grid = [], gameState = 'initial' }) => (
  <div className="snake-grid-container">
    <table className="snake-grid">
      <tbody className="snake-grid__body">
        {grid.map((tr, i) => (
          <tr className="snake-grid__row" key={i}>
            {tr.map((cellState, y) => {
              const cellClass = cn(
                'snake-grid__cell',
                `snake-grid__cell--${cellState}`,
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

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.array).isRequired,
  gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
};

export default Grid;
