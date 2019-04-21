import React from 'react';
import PropTypes from 'prop-types';
import NextFigurePreview from './NextFigurePreview.jsx';
import GameSettings from './GameSettings.jsx';
import './GameStats.css';

export default class GameStats extends React.Component {
  static defaultProps = {
    gameState: 'initial',
    speed: 1,
    score: 0,
  };

  buttonByState = {
    initial: {
      title: 'Start New Game',
      action: this.props.startTetrisGame,
    },
    started: {
      title: 'Stop Game',
      action: this.props.stopTetrisGame,
    },
    paused: {
      title: 'Stop Game',
      action: this.props.stopTetrisGame,
    },
    finished: {
      title: 'Start New Game',
      action: this.props.startTetrisGame,
    },
  };

  getButtonTitle = () => this.buttonByState[this.props.gameState].title

  getButtonHandler = () => this.buttonByState[this.props.gameState].action

  handleGameButton = () => {
    this.getButtonHandler()();
  }

  render() {
    return (
      <div className='tetris-game-stats'>
        <h2 className='tetris-game-stats__title'>Game Stats</h2>
        <NextFigurePreview />

        <GameSettings speed={this.props.speed} score={this.props.score} />

        <button className='tetris-game-stats__game-button' onClick={this.handleGameButton}>
          {this.getButtonTitle()}
        </button>

        {this.props.gameState === 'paused' &&
          <div className='tetris-game-stats__paused-sign'>
            Paused
          </div>}
      </div>
    );
  }
}

GameStats.propTypes = {
  gameState: PropTypes.oneOf(['initial', 'started', 'paused', 'finished']).isRequired,
  speed: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
