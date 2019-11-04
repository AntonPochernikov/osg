import { connect } from 'react-redux';
import * as actionCreators from 'actions';
import * as select from 'selectors';
import Root from './Root.jsx';

const mapStateToProps = state => ({
  gameState: select.tetris.getGameState(state),
});

export default connect(mapStateToProps, actionCreators.tetris)(Root);
