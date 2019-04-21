import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import * as select from '../../selectors';
import GameStats from './GameStats.jsx';

const mapStateToProps = state => ({
  gameState: state.tetris.gameState,
  speed: state.tetris.speed,
  score: state.tetris.score,
  nextFigurePreview: select.getTetrisNextFigurePreview(state),
});

export default connect(mapStateToProps, actionCreators)(GameStats);
