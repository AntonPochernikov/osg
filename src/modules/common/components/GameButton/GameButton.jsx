import React from 'react';
import cn from 'classnames';

import './styles.css';

export function GameButton({ children = null, className = '', ...btnProps }) {
  return (
    <button className={cn('game-button', className)} {...btnProps}>
      {children}
    </button>
  );
}

// GameButton.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };
