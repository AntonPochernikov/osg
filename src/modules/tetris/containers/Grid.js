import { connect } from 'react-redux';
import * as actionCreators from 'modules/main/actions';
import * as select from 'modules/main/selectors';
import Grid from '../components/Grid';

const mapStateToProps = state => ({
  grid: select.tetris.getGridCells(state),
  gameState: select.tetris.getGameState(state),
});

export default connect(mapStateToProps, actionCreators.tetris)(Grid);
