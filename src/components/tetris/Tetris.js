import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import Tetris from './Tetris.jsx';

const mapStateToProps = state => ({
  gameState: state.tetris.gameState,
});

export default connect(mapStateToProps, actionCreators)(Tetris);
