import { connect } from 'react-redux';

import * as actionCreators from 'modules/main/actions';
import * as select from 'modules/main/selectors';

import { Root } from '../components/Root';

const mapStateToProps = state => ({
  gameState: select.snake.getGameState(state),
});

export default connect(mapStateToProps, actionCreators.snake)(Root);
