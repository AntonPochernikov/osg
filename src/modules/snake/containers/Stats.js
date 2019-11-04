import { connect } from 'react-redux';
import * as actionCreators from 'modules/main/actions';
import * as select from 'modules/main/selectors';
import Stats from '../components/Stats';

const mapStateToProps = state => ({
  gameState: select.snake.getGameState(state),
  // speed: select.snake.getSpeed(state),
  // score: select.snake.getScore(state),
  // canAdjustSpeed: select.snake.canAdjustSpeed(state),
});

export default connect(mapStateToProps, actionCreators.snake)(Stats);
