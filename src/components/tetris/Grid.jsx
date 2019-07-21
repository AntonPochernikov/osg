import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Grid.css';

const Grid = ({ grid, gameState }) => (
  <div className="game-grid-container">
    <table className="game-grid">
      <tbody className="game-grid__body">
        {grid.map((tr, i) => (
          <tr className="game-grid__row" key={i}>
            {tr.map((cellState, y) => {
              const cellClass = cn(
                'game-grid__cell',
                `game-grid__cell--${cellState}`,
              );
              return <td className={cellClass} key={y} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
    {gameState === 'paused' && (
      <div className="game-grid-container__paused-overlay" />
    )}
  </div>
);

Grid.defaultProps = {
  grid: [],
  gameState: 'initial',
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.array).isRequired,
  gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
};

export default Grid;
