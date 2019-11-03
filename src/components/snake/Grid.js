import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import Grid from './Grid.jsx';

const mapStateToProps = state => ({
  grid: select.snake.getGridCells(state),
  gameState: select.snake.getGameState(state),
});

export default connect(mapStateToProps, actionCreators.snake)(Grid);
