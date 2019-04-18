import React from 'react';
import cn from 'classnames';
import './GameBoard.css';

const GameBoard = ({ board }) => (
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
);

export default GameBoard;
