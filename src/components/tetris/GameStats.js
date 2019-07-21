import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import GameStats from './GameStats.jsx';

const mapStateToProps = state => ({
  gameState: select.tetris.getGameState(state),
  speed: select.tetris.getSpeed(state),
  score: select.tetris.getScore(state),
  nextFigurePreview: select.tetris.getNextFigurePreview(state),
  canAdjustSpeed: select.tetris.canAdjustSpeed(state),
});

export default connect(mapStateToProps, actionCreators.tetris)(GameStats);
