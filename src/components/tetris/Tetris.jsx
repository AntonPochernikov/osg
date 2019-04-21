import React from 'react';
import PropTypes from 'prop-types';
import Header from '../common/Header.jsx';
import GameBoard from './GameBoard.js';
import GameStats from './GameStats.js';
import GameInfo from './GameInfo.jsx';
import './Tetris.css';

export default class Tetris extends React.Component {
  static defaultProps = {
    gameState: 'initial',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keydownListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownListener);
  }

  keydownListener = (e) => {
    switch (e.keyCode) {
      // shift
      case 16: {
        if (this.props.gameState === 'started') {
          this.props.pauseTetrisGame();
          break;
        }
        if (this.props.gameState === 'paused') {
          this.props.resumeTetrisGame();
        }
        break;
      }
      default: break;
    }
  }

  render() {
    return (
      <div className='main-container'>
        <Header title='Tetris' canHome />
        <main className='game-body'>
          <GameInfo />
          <GameBoard />
          <GameStats />
        </main>
      </div>
    );
  }
}

Tetris.propTypes = {
  gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
};
