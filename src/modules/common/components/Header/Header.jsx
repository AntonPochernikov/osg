import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export function Header({ title, canHome }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="main-logo">{title}</h1>
        {canHome && (
          <Link to="/home" className="header__nav-link header__nav-link--home">
            Home
          </Link>
        )}
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: '',
  canHome: false,
};

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
//   canHome: PropTypes.bool,
// };
