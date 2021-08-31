import { connect } from 'react-redux';

import * as actionCreators from 'modules/main/actions';
import * as select from 'modules/main/selectors';

import { Stats as StatsCommon } from '../components/Stats';

const mapStateToProps = state => ({
  gameState: select.tetris.getGameState(state),
  speed: select.tetris.getSpeed(state),
  score: select.tetris.getScore(state),
  nextFigureGrid: select.tetris.nextFigureGrid(state),
  canAdjustSpeed: select.tetris.canAdjustSpeed(state),
});

export const Stats = connect(mapStateToProps, actionCreators.tetris)(StatsCommon);
