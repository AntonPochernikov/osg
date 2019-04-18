import React from 'react';
import Header from '../common/Header.jsx';
import GameBoard from './GameBoard.js';
import GameStats from './GameStats.js';
import GameInfo from './GameInfo.jsx';
import './Tetris.css';

const Tetris = () => (
  <div className='main-container'>
    <Header title='Tetris' canHome />
    <main className='game-body'>
      <GameInfo />
      <GameBoard />
      <GameStats />
    </main>
  </div>
);

export default Tetris;
