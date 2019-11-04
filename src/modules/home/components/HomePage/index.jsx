import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'modules/common/components/Header';
import './styles.css';

export default function HomePage() {
  return (
    <div className="main-container">
      <Header title="Old School Games" />
      <nav className="main-navigation">
        <ul className="main-navigation__list">
          <li className="main-navigation__item">
            <Link className="main-navigation__link" to="/tetris">Tetris</Link>
          </li>
          <li className="main-navigation__item">
            <Link className="main-navigation__link" to="/snake">Snake</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
