import React from 'react';
import cn from 'classnames';
import './NextFigurePreview.css';

const NextFigurePreview = ({ board }) => (
  <div className='tetris-game-stats__next-figure'>
    <table className='next-figure-board'>
      {board.length > 0 && <caption className='next-figure-board__caption'>Next Figure</caption>}
      <tbody className='next-figure-board__body'>
        {board.map((tr, i) => (
          <tr className='next-figure-board__row' key={i}>
            {tr.map((cellState, y) => {
              const cellClass = cn(
                'next-figure-board__cell',
                `next-figure-board__cell--${cellState}`,
              );
              return <td className={cellClass} key={y} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default NextFigurePreview;
