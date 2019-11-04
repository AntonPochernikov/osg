import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.css';

export default function GameButton({ children = null, className = '', ...btnProps }) {
  return (
    <button className={cn('game-button', className)} {...btnProps}>
      {children}
    </button>
  );
}

GameButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
