import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import GameStats from './GameStats.jsx';

const mapStateToProps = state => ({
  gameState: state.tetris.gameState,
});

export default connect(mapStateToProps, actionCreators)(GameStats);
