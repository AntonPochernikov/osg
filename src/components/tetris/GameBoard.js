import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import GameBoard from './GameBoard.jsx';

const mapStateToProps = state => ({
  board: select.tetris.getBoardCells(state),
  gameState: state.tetris.gameState,
});

export default connect(mapStateToProps, actionCreators.tetris)(GameBoard);
