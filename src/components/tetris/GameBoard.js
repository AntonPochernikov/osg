import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as selectors from 'selectors';
import GameBoard from './GameBoard.jsx';

const mapStateToProps = state => ({
  board: selectors.getTetrisBoardCells(state),
  gameState: state.tetris.gameState,
});

export default connect(mapStateToProps, actionCreators)(GameBoard);
