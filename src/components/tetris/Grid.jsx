import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Grid.css';

const Grid = ({ grid, gameState }) => (
  <div className="tetris-grid-container">
    <table className="tetris-grid">
      <tbody className="tetris-grid__body">
        {grid.map((tr, i) => (
          <tr className="tetris-grid__row" key={i}>
            {tr.map((cellState, y) => {
              const cellClass = cn(
                'tetris-grid__cell',
                `tetris-grid__cell--${cellState}`,
              );
              return <td className={cellClass} key={y} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
    {gameState === 'paused' && (
      <div className="tetris-grid-container__paused-overlay" />
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
