import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import Stats from './Stats.jsx';

const mapStateToProps = state => ({
  gameState: select.snake.getGameState(state),
  // speed: select.snake.getSpeed(state),
  // score: select.snake.getScore(state),
  // canAdjustSpeed: select.snake.canAdjustSpeed(state),
});

export default connect(mapStateToProps, actionCreators.snake)(Stats);
