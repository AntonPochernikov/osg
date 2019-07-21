import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import Grid from './Grid.jsx';

const mapStateToProps = state => ({
  grid: select.tetris.getGridCells(state),
  gameState: select.tetris.getGameState(state),
});

export default connect(mapStateToProps, actionCreators.tetris)(Grid);
