import React from 'react';

const NextFigurePreview = () => (
  <div className='tetris-game-stats__next-figure'>
    <table className='game-board'>
      <caption className='game-board__caption hidden'>Next Figure</caption>
      <tbody className='game-board__body'>
        {/* field.map((tr, i) =>
          <tr className='game-board__row' key={i + 1}>
            {tr.map(cell =>
              <td
                className={'game-board__cell'}
                id={cell.getId()}
                key={cell.getId() + 1}>
              </td>)}
          </tr>
        ) */}
      </tbody>
    </table>
  </div>
);

export default NextFigurePreview;
