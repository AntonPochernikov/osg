import { connect } from 'react-redux';
import * as actionCreators from 'modules/main/actions';
import * as select from 'modules/main/selectors';
import { Grid as CommonGrid } from '../components/Grid';

const mapStateToProps = state => ({
  grid: select.snake.getGridCells(state),
  gameState: select.snake.getGameState(state),
});

export const Grid = connect(mapStateToProps, actionCreators.snake)(CommonGrid);
