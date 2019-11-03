import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import Stats from './Stats.jsx';

const mapStateToProps = state => ({
  gameState: select.tetris.getGameState(state),
  speed: select.tetris.getSpeed(state),
  score: select.tetris.getScore(state),
  nextFigureGrid: select.tetris.nextFigureGrid(state),
  canAdjustSpeed: select.tetris.canAdjustSpeed(state),
});

export default connect(mapStateToProps, actionCreators.tetris)(Stats);
