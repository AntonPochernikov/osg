import React from 'react';
import cn from 'classnames';

import './NextFigureGrid.css';

export function NextFigureGrid ({ grid }) {
  return (
    <div className="tetris-stats__next-figure">
      <table className="next-figure-grid">
        {grid.length > 0 && <caption className="next-figure-grid__caption">Next Figure</caption>}
        <tbody className="next-figure-grid__body">
          {grid.map((tr, i) => (
            <tr className="next-figure-grid__row" key={i}>
              {tr.map((cellState, y) => {
                const cellClass = cn(
                  'next-figure-grid__cell',
                  `next-figure-grid__cell--${cellState}`,
                );
                return <td className={cellClass} key={y} />;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
