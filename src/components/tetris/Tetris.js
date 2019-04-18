import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index.js';
import Tetris from './Tetris.jsx';

const mapStateToProps = () => ({});

export default connect(mapStateToProps, actionCreators)(Tetris);
