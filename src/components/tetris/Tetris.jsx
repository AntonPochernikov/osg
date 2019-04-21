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
    // check ingame state
    if (this.props.gameState !== 'started' && this.props.gameState !== 'paused') {
      return;
    }
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
      // arrow left
      case 37: {
        if (this.props.gameState === 'started') {
          this.props.tryTetrisFigureLeft();
        }
        break;
      }
      // arrow right
      case 39: {
        if (this.props.gameState === 'started') {
          this.props.tryTetrisFigureRight();
        }
        break;
      }
      // arrow down
      case 40: {
        if (this.props.gameState === 'started') {
          this.props.tryTetrisFigureDown();
        }
        break;
      }
      // space
      case 32: {
        if (this.props.gameState === 'started') {
          this.props.tryRotateTetrisFigure();
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
