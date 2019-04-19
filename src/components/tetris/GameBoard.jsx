import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './GameBoard.css';

const GameBoard = ({ board, gameState }) => (
  <div className='game-board-container'>
    <table className='game-board'>
      <tbody className='game-board__body'>
        {board.map((tr, i) => (
          <tr className='game-board__row' key={i}>
            {tr.map((cellState, y) => {
              const cellClass = cn(
                'game-board__cell',
                `game-board__cell--${cellState}`,
              );
              return (
                <td
                  className={cellClass}
                  key={y}>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
    {gameState === 'paused' && (
      <div className='game-board-container__paused-overlay' />
    )}
  </div>
);

GameBoard.defaultProps = {
  board: [[]],
  gameState: 'initial',
};

GameBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  gameState: PropTypes.oneOf(['initial', 'started', 'paused']).isRequired,
};

export default GameBoard;
