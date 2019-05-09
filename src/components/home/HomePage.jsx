import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from 'components/common/Header.jsx';

const HomePage = () => (
  <div className='main-container'>
    <Header title='Old School Games' />
    <nav className='main-navigation'>
      <ul className='main-navigation__list'>
        <li className='main-navigation__item'>
          <Link className='main-navigation__link' to='/tetris'>Tetris</Link>
        </li>
        <li className='main-navigation__item'>
          <Link className='main-navigation__link' to='/'>Some Game</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default HomePage;
