import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.css';

export default function KeyboardKey({ className = '', name }) {
  return <kbd className={cn('keyboard-key', className)}>[{name}]</kbd>
}

KeyboardKey.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};
