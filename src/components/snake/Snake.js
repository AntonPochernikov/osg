import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import Snake from './Snake.jsx';

const mapStateToProps = state => ({
  gameState: select.snake.getGameState(state),
});

export default connect(mapStateToProps, actionCreators.snake)(Snake);
